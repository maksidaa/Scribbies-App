function updateHappiness(){
  if(S.buddyStage==='egg'){
    S.happiness=100; // Eggs stay perfect - no decay!
    return;
  }
  if(S.buddyStage==='adult'){
    S.happiness=75; // Adults maintain stable happiness
    return;
  }
  const now=Date.now();
  const lastUpdate=S.lastHappinessUpdate||now;
  const hoursSinceUpdate=(now-lastUpdate)/(1000*60*60);
  if(hoursSinceUpdate<4)return; // Check every 4 hours (6x per day)

  // Aggressive passive decay (10 points per day = 1.67 per 4hr)
  const decayAmount=Math.floor(hoursSinceUpdate/4)*1.7;
  if(S.happiness>0&&decayAmount>0){
    S.happiness=Math.max(0,Math.round(S.happiness-decayAmount));
  }

  // Neglect penalty for not playing/practicing (after 12+ hours)
  const lastPractice=S.todayDate;
  if(lastPractice){
    const hoursSincePractice=(now-new Date(lastPractice).getTime())/(1000*60*60);
    if(hoursSincePractice>=12){
      const neglectPenalty=Math.floor(hoursSincePractice/12)*5;
      S.happiness=Math.max(0,S.happiness-neglectPenalty);
    }
  }

  // Loneliness penalty (after 8 hours of no interaction)
  if(hoursSinceUpdate>=8){
    const lonelinessPenalty=Math.floor(hoursSinceUpdate/8)*3;
    S.happiness=Math.max(0,S.happiness-lonelinessPenalty);
  }

  // Track when happiness hits zero
  if(S.happiness<=0){
    if(!S.zeroHappinessSince){
      S.zeroHappinessSince=now;
    }
  }else{
    S.zeroHappinessSince=null;
    if(S.criticalWarningShown)S.criticalWarningShown.happiness=false;
  }

  S.lastHappinessUpdate=now;
  save();
}

function updateHealth(){
  if(S.buddyStage==='egg'){
    S.health=100; // Eggs stay perfect - no decay!
    return;
  }
  if(S.buddyStage==='adult'){
    S.health=75; // Adults maintain stable health
    return;
  }
  const now=Date.now();
  const lastUpdate=S.lastHealthUpdate||now;
  const hoursSinceUpdate=(now-lastUpdate)/(1000*60*60);
  if(hoursSinceUpdate<4)return; // Check every 4 hours (6x per day)

  // Aggressive passive decay (6 points per day = 1 per 4hr)
  const decayAmount=Math.floor(hoursSinceUpdate/4)*1;
  if(S.health>0&&decayAmount>0){
    S.health=Math.max(0,Math.round(S.health-decayAmount));
  }

  // Hunger penalty for not feeding (kicks in after 8 hours)
  if(S.lastFed){
    const hoursSinceFed=(now-new Date(S.lastFed).getTime())/(1000*60*60);
    if(hoursSinceFed>=8){
      const hungerPenalty=Math.floor(hoursSinceFed/8)*5; // -5 every 8 hours
      S.health=Math.max(0,S.health-hungerPenalty);
    }
  }else{
    // Never fed - apply hunger penalty based on time since hatch/stage change
    if(hoursSinceUpdate>=8){
      const hungerPenalty=Math.floor(hoursSinceUpdate/8)*5;
      S.health=Math.max(0,S.health-hungerPenalty);
    }
  }

  // Track when health hits zero
  if(S.health<=0){
    if(!S.zeroHealthSince){
      S.zeroHealthSince=now;
    }
  }else{
    S.zeroHealthSince=null;
    if(S.criticalWarningShown)S.criticalWarningShown.health=false;
  }

  S.lastHealthUpdate=now;
  save();
}

// Check for neglect consequences (runaway or hospital)
function checkNeglectConsequences(){
  if(S.buddyStage==='egg'||S.buddyStage==='adult')return null;

  const now=Date.now();
  const TWO_DAYS=2*24*60*60*1000; // 2 days in milliseconds
  const ONE_DAY=24*60*60*1000; // 1 day for warning

  // Check for runaway (2 days at 0 happiness)
  if(S.zeroHappinessSince){
    const timeSinceZero=now-S.zeroHappinessSince;
    if(timeSinceZero>=TWO_DAYS){
      return{type:'ranAway',scribbyName:S.buddyName||'Your Scribby'};
    }
    // Show warning after 1 day
    if(timeSinceZero>=ONE_DAY&&!S.criticalWarningShown?.happiness){
      S.criticalWarningShown=S.criticalWarningShown||{};
      S.criticalWarningShown.happiness=true;
      save();
      return{type:'warningHappiness',scribbyName:S.buddyName||'Your Scribby',hoursLeft:Math.floor((TWO_DAYS-timeSinceZero)/(60*60*1000))};
    }
  }

  // Check for hospital (2 days at 0 health)
  if(S.zeroHealthSince){
    const timeSinceZero=now-S.zeroHealthSince;
    if(timeSinceZero>=TWO_DAYS){
      return{type:'hospital',scribbyName:S.buddyName||'Your Scribby'};
    }
    // Show warning after 1 day
    if(timeSinceZero>=ONE_DAY&&!S.criticalWarningShown?.health){
      S.criticalWarningShown=S.criticalWarningShown||{};
      S.criticalWarningShown.health=true;
      save();
      return{type:'warningHealth',scribbyName:S.buddyName||'Your Scribby',hoursLeft:Math.floor((TWO_DAYS-timeSinceZero)/(60*60*1000))};
    }
  }

  return null;
}

// Reset Scribby after a consequence (runaway or hospital)
function resetAfterConsequence(){
  const oldName=S.buddyName;
  const oldCategory=S.creatureCategory;

  // Reset buddy state to new egg
  S.buddyStage='egg';
  S.growthXP=0;
  S.eggXP=0;
  S.creatureCategory=FULLY_DESIGNED_CATEGORIES[Math.floor(Math.random()*FULLY_DESIGNED_CATEGORIES.length)];
  S.creatureVariant=null;
  S.happiness=100;
  S.health=100;
  S.buddyName=null;
  S.hatchDate=null;
  S.lastFed=null;
  S.lastHappinessUpdate=null;
  S.lastHealthUpdate=null;
  S.zeroHappinessSince=null;
  S.zeroHealthSince=null;
  S.criticalWarningShown={happiness:false,health:false};
  S.equipped={hat:null,eyes:null,held:null,back:null,effect:null};
  S.accessoryPositions={};

  save();
  neglectConsequence=null;
  render();
}

function getHappinessLevel(){
  if(S.happiness>=81)return'veryHappy';
  if(S.happiness>=61)return'happy';
  if(S.happiness>=41)return'neutral';
  if(S.happiness>=21)return'sad';
  return'verySad';
}

function getHappinessEmoji(){
  const level=getHappinessLevel();
  const emojis={veryHappy:'🤩',happy:'😊',neutral:'😐',sad:'😔',verySad:'😢'};
  return emojis[level];
}

// Get health level category
function getHealthLevel(){
  if(S.health>=81)return'excellent';
  if(S.health>=61)return'good';
  if(S.health>=41)return'fair';
  if(S.health>=21)return'sick';
  return'verySick';
}

// Get XP multiplier based on happiness
function getHappinessXPMultiplier(){
  const level=getHappinessLevel();
  const multipliers={veryHappy:1.2,happy:1.1,neutral:1.0,sad:0.9,verySad:0.75};
  return multipliers[level];
}

// Get growth multiplier based on health
function getHealthGrowthMultiplier(){
  const level=getHealthLevel();
  const multipliers={excellent:1.2,good:1.1,fair:1.0,sick:0.75,verySick:0.5};
  return multipliers[level];
}

// Check if buddy might refuse practice
function mightRefusePractice(){
  const level=getHappinessLevel();
  if(level==='verySad')return Math.random()<0.3;
  if(level==='sad')return Math.random()<0.1;
  return false;
}

// Check if buddy can evolve (not too sick or sad)
function canEvolve(){
  return S.health>=20&&S.happiness>=20;
}

function checkBuddyGrowth(){
  if(S.buddyStage==='egg'&&S.eggXP>=STAGES.egg.hatchXP){
    // Assign variant based on rarity weights when hatching (determines adult form)
    const category=CREATURE_CATEGORIES[S.creatureCategory];
    S.creatureVariant=category?selectVariantByRarity(category):Math.floor(Math.random()*10);

    S.buddyStage='blob';
    S.growthXP=0;
    S.eggXP=0;
    S.happiness=100;
    S.health=100;
    S.hatchDate=new Date().toISOString();
    return'hatched';
  }

  // Check growth for other stages
  const category=CREATURE_CATEGORIES[S.creatureCategory];
  if(!category)return null;

  // Check if growthXP has reached the stage requirement
  const stageData=STAGES[S.buddyStage];
  if(!stageData||!stageData.growthNeeded)return null;

  if(S.growthXP>=stageData.growthNeeded){
    // Check if buddy is healthy/happy enough to evolve
    if(!canEvolve()){
      return'tooSick'; // Can't evolve when health or happiness < 20
    }
    const nextStages={blob:'child',child:'teen',teen:'adult'};
    S.buddyStage=nextStages[S.buddyStage];
    S.growthXP=0;
    return'grew';
  }
  return null;
}

function graduateBuddy(){
  if(S.buddyStage!=='adult')return false;

  // Calculate stats
  const now=Date.now();
  const hatchTime=S.hatchDate?new Date(S.hatchDate).getTime():now;
  const daysRaised=Math.max(1,Math.floor((now-hatchTime)/(1000*60*60*24)));

  // Get creature name from category
  const category=CREATURE_CATEGORIES[S.creatureCategory];
  const creatureName=category?category.adultNames[S.creatureVariant||0]:'Creature';

  // Save buddy to graduated collection
  const graduatedBuddy={
    id:Date.now(),
    name:S.buddyName||creatureName,
    stage:'adult',
    creatureCategory:S.creatureCategory,
    creatureVariant:S.creatureVariant,
    creatureName:creatureName,
    hatchDate:S.hatchDate||new Date().toISOString(),
    graduatedDate:new Date().toISOString(),
    equippedAtGraduation:{...S.equipped},
    happiness:S.happiness,
    health:S.health,
    daysRaised:daysRaised,
    totalXPEarned:S.xp // Snapshot of XP at graduation
  };

  S.graduatedBuddies.push(graduatedBuddy);

  // Award graduation bonus
  S.xp+=100;

  // Reset buddy to new egg
  S.buddyStage='egg';
  S.growthXP=0;
  S.eggXP=0; // Fresh start with new egg
  S.creatureCategory=FULLY_DESIGNED_CATEGORIES[Math.floor(Math.random()*FULLY_DESIGNED_CATEGORIES.length)]; // Random category for new egg (only fully designed ones)
  S.creatureVariant=null; // Variant assigned at hatching
  S.happiness=100; // Perfect condition for new egg!
  S.health=100; // Perfect condition for new egg!
  S.lastFed=null;
  S.lastHappinessUpdate=null;
  S.lastHealthUpdate=null;
  S.buddyName=null;
  S.hatchDate=null; // Reset hatch date for new egg
  S.equipped={hat:null,eyes:null,held:null,back:null,effect:null};
  // Keep inventory - user keeps their accessories

  save();
  return true;
}

function feedBuddy(foodItem){
  if(S.buddyStage==='egg'||S.buddyStage==='adult')return false;
  if(!foodItem)return false;
  const cost=foodItem.cost??0;
  if(S.xp<cost)return false;

  // Deduct XP cost
  S.xp-=cost;

  // Food only affects happiness and health - growth comes from scripture practice only
  S.health=Math.max(0,Math.min(100,S.health+(foodItem.health||0)));
  S.happiness=Math.max(0,Math.min(100,S.happiness+(foodItem.happiness||0)));
  S.lastFed=new Date().toISOString();

  // Reset interaction timers (feeding counts as interaction)
  S.lastHappinessUpdate=Date.now();
  S.lastHealthUpdate=Date.now();

  const growth=checkBuddyGrowth();
  save();
  return growth||'fed';
}

// Buddy reactions
function getBuddyReaction(context,data={}){
  const level=getHappinessLevel();
  const reactions={
    home:{
      veryHappy:["I'm so happy! Let's practice! 🌟","You're the best! Ready to learn?","This is amazing! Let's go!","I love practicing with you! 💖"],
      happy:["Ready to practice?","Let's memorize something!","I believe in you!","You're doing great!"],
      neutral:["Practice makes perfect!","Let's learn together","Ready when you are","What should we learn?"],
      sad:["I miss practicing...","Can we do something together?","I could use some attention...","Practice would cheer me up..."],
      verySad:["I'm lonely... 😢","Please don't forget me...","I really miss you...","Can we practice? Please?"]
    },
    completePractice:{
      veryHappy:{excellent:["INCREDIBLE! You're a star! ⭐✨","WOW! That was perfect! 🎉"],good:["Amazing work! So proud! 💖","You did great! Love it! 😊"],okay:["Good effort! Keep going! 🌟","Nice try! Practice more! 💪"]},
      happy:{excellent:["Incredible! ⭐","You're a superstar! 🎉"],good:["Well done!","Nice work!"],okay:["Keep practicing!","You'll get it!"]},
      neutral:{excellent:["Good job","Well done"],good:["Nice","Okay"],okay:["Keep trying","Practice more"]},
      sad:{excellent:["That was good...","Nice job, I guess..."],good:["Okay...","Fine..."],okay:["Hmm...","Could be better..."]},
      verySad:{excellent:["...","Good..."],good:["...","Okay..."],okay:["...","..."]}
    }
  };

  if(context==='home'){
    // Check for critical combined state (crisis)
    if(S.buddyStage!=='egg'&&S.buddyStage!=='adult'){
      if(S.health<=20&&S.happiness<=20){
        return["I need help urgently! 😭","Please... food and attention...","I can't go on like this..."][Math.floor(Math.random()*3)];
      }
      // Check for specific health needs
      if(S.health<30){
        return["I'm so hungry... 🤒","I need food badly!","My tummy hurts...","Please feed me something healthy!"][Math.floor(Math.random()*4)];
      }
      // Check for specific happiness needs
      if(S.happiness<30){
        return["I'm so bored and lonely... 😢","Can we play together?","I need some fun!","Maybe a toy would help?"][Math.floor(Math.random()*4)];
      }
      // Check for moderate needs
      if(S.health<50){
        return["Getting hungry...","Could use some food!","Feed me soon?"][Math.floor(Math.random()*3)];
      }
      if(S.happiness<50){
        return["I'm feeling a bit down...","Could we do something fun?","I miss playing..."][Math.floor(Math.random()*3)];
      }
      // Check for thriving state (both high)
      if(S.health>=81&&S.happiness>=81){
        return["I feel AMAZING! Let's practice! ✨","This is the best day ever! 🌟","I'm so healthy and happy!","You're taking such good care of me! 💖"][Math.floor(Math.random()*4)];
      }
    }
    if(S.buddyStage==='egg'&&S.xp>=75)return["I can't wait to hatch!","Keep going!","Almost there!"][Math.floor(Math.random()*3)];
    if(S.streak>=7)return["You're on fire! 🔥","Amazing streak!","Keep it up!"][Math.floor(Math.random()*3)];
    if(S.buddyStage==='adult')return["Thanks for everything!","We did it together!","I'm all grown up!"][Math.floor(Math.random()*3)];
    const arr=reactions.home[level]||reactions.home.neutral;
    return arr[Math.floor(Math.random()*arr.length)];
  }

  if(context==='practice'){
    const perf=data.performance||'okay';
    const levelReactions=reactions.completePractice[level]||reactions.completePractice.neutral;
    const msgs=levelReactions[perf];
    return msgs[Math.floor(Math.random()*msgs.length)];
  }

  return "Let's go!";
}
