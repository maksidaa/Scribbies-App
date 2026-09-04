export const SPECIES = [
 {id:'sprig',name:'Sprig',family:'Woodland',rarity:'Common',art:'mammal',variant:3,color:'#f8dfbc',trait:'Brave little explorer',blurb:'Collects interesting leaves. Gives the very best pep talks.',starter:true},
 {id:'hopple',name:'Hopple',family:'Woodland',rarity:'Common',art:'mammal',variant:0,color:'#f1dbed',trait:'A heart full of kindness',blurb:'Always saves the sweetest berry for a friend.',starter:true},
 {id:'puddle',name:'Puddle',family:'Waterside',rarity:'Uncommon',art:'aquatic',variant:0,color:'#f6d6e2',trait:'Wonderfully curious',blurb:'Asks a thousand questions. Loves every answer.',starter:true},
 {id:'fern',name:'Fern',family:'Woodland',rarity:'Common',art:'reptile',variant:0,color:'#dbeac7',trait:'Tiny but mighty',blurb:'Believes every big adventure begins with one small step.'},
 {id:'bramble',name:'Bramble',family:'Woodland',rarity:'Uncommon',art:'mammal',variant:6,color:'#f4d6bc',trait:'The berry expert',blurb:'Can find a berry bush with eyes closed. Occasionally walks into it.'},
 {id:'hoot',name:'Hoot',family:'Skyfolk',rarity:'Rare',art:'bird',variant:10,color:'#ded7ef',trait:'Keeper of quiet wisdom',blurb:'Remembers every kind word anyone has ever said.'},
 {id:'moss',name:'Moss',family:'Woodland',rarity:'Common',art:'reptile',variant:2,color:'#d9e9c9',trait:'Slow and steady',blurb:'Never in a hurry. Somehow always arrives at exactly the right moment.'},
 {id:'pip',name:'Pip',family:'Woodland',rarity:'Common',art:'mammal',variant:4,color:'#e1dfed',trait:'Pocket-sized courage',blurb:'The smallest explorer with the biggest backpack of dreams.'},
 {id:'quill',name:'Quill',family:'Skyfolk',rarity:'Common',art:'bird',variant:6,color:'#fff0b8',trait:'A sunny disposition',blurb:'Puddle jumping champion. Enthusiastic about absolutely everything.'},
 {id:'bubbles',name:'Bubbles',family:'Waterside',rarity:'Uncommon',art:'aquatic',variant:3,color:'#ded3f6',trait:'Eight helping hands',blurb:'Can hug eight friends at once. Considers this a superpower.'},
 {id:'glimmer',name:'Glimmer',family:'Waterside',rarity:'Rare',art:'aquatic',variant:2,color:'#d0e7f8',trait:'A gentle guiding light',blurb:'Glows a little brighter whenever someone learns something new.'},
 {id:'waddle',name:'Waddle',family:'Skyfolk',rarity:'Uncommon',art:'bird',variant:5,color:'#d8e6f4',trait:'Loyal to the last snowflake',blurb:'Will slide all the way across an island just to make you smile.'},
 {id:'pearl',name:'Pearl',family:'Waterside',rarity:'Rare',art:'aquatic',variant:1,color:'#d7e5f9',trait:'Ocean daydreamer',blurb:'Sings songs about faraway places. Most of them rhyme with sea.'},
 {id:'pebble',name:'Pebble',family:'Ancients',rarity:'Uncommon',art:'prehistoric',variant:3,color:'#d5e9ce',trait:'Big feelings, little arms',blurb:'Practices being brave every day, even when the butterflies flutter.'},
 {id:'willow',name:'Willow',family:'Ancients',rarity:'Rare',art:'prehistoric',variant:1,color:'#ddd9f4',trait:'A wonderfully gentle giant',blurb:'Reaches the highest fruit and shares it with the smallest friends.'},
 {id:'ember',name:'Ember',family:'Starlight',rarity:'Epic',art:'mystical',variant:2,color:'#f9dfcf',trait:'A spark of possibility',blurb:'Each flowing tail holds a story of someone who chose to be brave.'},
 {id:'nova',name:'Nova',family:'Starlight',rarity:'Epic',art:'mystical',variant:0,color:'#e7dcf8',trait:'Stardust and hope',blurb:'Leaves tiny sparks of hope wherever those little hooves land.'},
 {id:'luma',name:'Luma',family:'Starlight',rarity:'Legendary',art:'image',variant:0,color:'#d6f1df',trait:'Guardian of the Everlight',blurb:'Protects the Everlight tree. Its antlers glow when a new egg is ready to hatch.'}
];
export const VERSES = [
 ['psalm-56-3','Psalm 56:3','What time I am afraid, I will trust in thee.','Faith'],
 ['psalm-23-1','Psalm 23:1','The Lord is my shepherd; I shall not want.','Faith'],
 ['philippians-4-13','Philippians 4:13','I can do all things through Christ which strengtheneth me.','Courage'],
 ['1-john-4-19','1 John 4:19','We love him, because he first loved us.','Love'],
 ['psalm-119-105','Psalm 119:105','Thy word is a lamp unto my feet, and a light unto my path.','Faith'],
 ['proverbs-3-5','Proverbs 3:5','Trust in the Lord with all thine heart; and lean not unto thine own understanding.','Faith'],
 ['luke-6-31','Luke 6:31','And as ye would that men should do to you, do ye also to them likewise.','Kindness'],
 ['matthew-5-9','Matthew 5:9','Blessed are the peacemakers: for they shall be called the children of God.','Peace'],
 ['1-corinthians-16-14','1 Corinthians 16:14','Let all your things be done with charity.','Love'],
 ['ephesians-4-32','Ephesians 4:32','And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ’s sake hath forgiven you.','Kindness'],
 ['proverbs-17-17','Proverbs 17:17','A friend loveth at all times, and a brother is born for adversity.','Kindness'],
 ['1-john-4-7','1 John 4:7','Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God.','Love'],
 ['psalm-118-24','Psalm 118:24','This is the day which the Lord hath made; we will rejoice and be glad in it.','Joy'],
 ['1-thessalonians-5-16','1 Thessalonians 5:16','Rejoice evermore.','Joy'],
 ['psalm-46-1','Psalm 46:1','God is our refuge and strength, a very present help in trouble.','Courage'],
 ['2-timothy-1-7','2 Timothy 1:7','For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.','Courage'],
 ['matthew-19-26','Matthew 19:26','But Jesus beheld them, and said unto them, With men this is impossible; but with God all things are possible.','Courage'],
 ['psalm-27-1','Psalm 27:1','The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?','Courage']
].map(([id,ref,text,topic])=>({id,ref,text,topic,source:'King James Version',mastery:0,practiceCount:0,lastPracticed:null}));
export const REGIONS = [
 {id:'woods',name:'Whispering Woods',theme:'Woodland habitat',label:'THE FIRST CHAPTER',icon:'leaf',color:'green',badge:'Faith',description:'Follow the little path. Something wonderful is waiting.',nodes:['The first trail','A rustle in the leaves','The berry patch','A friend in need','The listening tree','Light of the woods'],encounters:['fern','hopple','bramble','moss','pip','hoot']},
 {id:'coast',name:'Sunbeam Grove',theme:'Riverside habitat',label:'THE SECOND CHAPTER',icon:'sun',color:'gold',badge:'Kindness',description:'A brighter trail, new friends, and a little kindness to share.',nodes:['A helping hand','Ripples of kindness','The sharing place','A gentle answer','Together is better','The kindness keeper'],encounters:['quill','puddle','bubbles','waddle','pearl','glimmer']},
 {id:'peaks',name:'Starlight Hollow',theme:'Nightfall habitat',label:'THE FINAL CHAPTER',icon:'sparkles',color:'violet',badge:'Courage',description:'The Everlight is waking. Bring a brave heart and a good friend.',nodes:['A joyful beginning','A very little roar','Stronger together','A spark of courage','Beyond the stars','The Everlight'],encounters:['pebble','willow','sprig','ember','nova','luma']}
];
export const MODES = [
 {id:'predict',name:'Trail clues',original:'Predict',icon:'compass',description:'Find the missing word.',difficulty:1},
 {id:'blanks',name:'Missing pieces',original:'Fill blanks',icon:'puzzle',description:'Fill in the missing words.',difficulty:2},
 {id:'jumble',name:'Word trail',original:'Word jumble',icon:'route',description:'Put the words in order.',difficulty:3},
 {id:'first',name:'First-letter hints',original:'First letters',icon:'feather',description:'Remember with a tiny clue.',difficulty:4},
 {id:'recall',name:'From memory',original:'Full recall',icon:'heart',description:'Try the whole verse from memory.',difficulty:5}
];
export const POSITIONS = [[27,76],[43,61],[54,47],[65,33],[54,19],[79,18]];
export const CHARMS = [
 {id:'none',name:'Just me',cost:0,icon:'heart',color:'#eadefa'},
 {id:'sunflower',name:'Sunshine charm',cost:45,icon:'sun',color:'#ffdc75'},
 {id:'star',name:'Stardust charm',cost:75,icon:'star',color:'#cebcff'},
 {id:'crown',name:'Braveheart crown',cost:100,icon:'crown',color:'#ffc980'},
 {id:'clover',name:'Woodland charm',cost:55,icon:'leaf',color:'#bae1ba'}
];
export const speciesById = id => SPECIES.find(s=>s.id===id);
export const nodeId = (r,n) => `${r}-${n}`;
