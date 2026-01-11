function renderTeen(categoryKey, variantIndex, level = 1){
  const category=categoryKey||S.creatureCategory||'birds';
  const variant=variantIndex!==undefined?variantIndex:(S.creatureVariant||0);

  // Universal Buddy Protocol support
  const colors = getBuddyColors(category, level);
  const openWrapper = `<div class="buddy-node" style="--dynamic-main: ${colors.main}; --dynamic-dark: ${colors.dark}; --dynamic-accent: ${colors.accent};">`;
  const closeWrapper = `</div>`;

  // Map 10 variants to design variations (most categories: 3 designs, mystical: 5 designs)
  let designIndex;
  if(category==='mystical'){
    // Mystical has 5 designs: 0-1→0, 2-3→1, 4-5→2, 6-7→3(unicorn), 8-9→4(phoenix)
    designIndex=variant<=1?0:variant<=3?1:variant<=5?2:variant<=7?3:4;
  }else{
    // Default: 3 designs (0-3=design0, 4-6=design1, 7-9=design2)
    designIndex=variant<=3?0:variant<=6?1:2;
  }

  // Teen designs - full-body intermediate creatures with NO overlap with adults!
  const teenDesigns={
    birds:{
      0:`
        <div style="position:relative;width:165px;height:175px;display:inline-block;">
          <!-- Elongated body (bright yellow) -->
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:95px;height:112px;background:radial-gradient(ellipse at 35% 30%,rgba(255,220,60,1),rgba(250,200,40,0.9));border-radius:45% 45% 50% 50%;box-shadow:inset 8px 8px 20px rgba(255,255,200,0.5),inset -6px -6px 15px rgba(200,160,30,0.3);"></div>
          <!-- Head/neck area (cream/pale yellow) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:70px;height:70px;background:radial-gradient(circle at 35% 30%,rgba(255,245,200,1),rgba(250,235,180,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(255,255,230,0.6);"></div>
          <!-- Eyes -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:14px;">
            <div style="width:18px;height:22px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:6px;height:6px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:18px;height:22px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:6px;height:6px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Developed wings (orange gradient) -->
          <div style="position:absolute;left:5px;top:48%;transform:translateY(-50%);width:35px;height:45px;background:linear-gradient(135deg,rgba(255,165,50,0.9),rgba(240,130,30,0.8));border-radius:50% 50% 0 50%;clip-path:polygon(0 0,100% 20%,100% 80%,0 100%);transform-origin:right center;animation:flapLeft 0.9s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(255,200,100,0.4);"></div>
          <div style="position:absolute;right:5px;top:48%;transform:translateY(-50%);width:35px;height:45px;background:linear-gradient(225deg,rgba(255,165,50,0.9),rgba(240,130,30,0.8));border-radius:50% 50% 50% 0;clip-path:polygon(0 20%,100% 0,100% 100%,0 80%);transform-origin:left center;animation:flapRight 0.9s ease-in-out infinite;box-shadow:inset -3px 3px 8px rgba(255,200,100,0.4);"></div>
          <!-- Longer beak (orange) -->
          <div style="position:absolute;left:50%;top:38%;transform:translateX(-50%);width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:18px solid rgba(255,140,20,0.95);"></div>
          <!-- Legs (orange) -->
          <div style="position:absolute;left:40%;bottom:20px;width:5px;height:25px;background:rgba(255,130,30,0.85);border-radius:2px;"></div>
          <div style="position:absolute;right:40%;bottom:20px;width:5px;height:25px;background:rgba(255,130,30,0.85);border-radius:2px;"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:185px;display:inline-block;">
          <!-- More elongated body (warm tan/beige) -->
          <div style="position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:102px;height:120px;background:radial-gradient(ellipse at 35% 30%,rgba(210,170,120,1),rgba(190,150,100,0.9));border-radius:45% 45% 55% 55%;box-shadow:inset 8px 8px 18px rgba(240,200,150,0.5),inset -6px -6px 14px rgba(160,120,80,0.3);"></div>
          <!-- Defined head (reddish-brown) -->
          <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);width:74px;height:74px;background:radial-gradient(circle at 35% 30%,rgba(180,90,60,1),rgba(160,75,50,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(210,120,80,0.5);"></div>
          <!-- Eyes -->
          <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);display:flex;gap:16px;">
            <div style="width:19px;height:23px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:19px;height:23px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Well-developed wings (dark chocolate brown) -->
          <div style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:42px;height:56px;background:linear-gradient(135deg,rgba(90,50,30,0.95),rgba(70,35,20,0.9));border-radius:50% 50% 0 50%;clip-path:polygon(0 0,100% 15%,100% 85%,0 100%);box-shadow:inset 4px 0 8px rgba(0,0,0,0.2);transform-origin:right center;animation:flapLeft 0.75s ease-in-out infinite;"></div>
          <div style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:42px;height:56px;background:linear-gradient(225deg,rgba(90,50,30,0.95),rgba(70,35,20,0.9));border-radius:50% 50% 50% 0;clip-path:polygon(0 15%,100% 0,100% 100%,0 85%);box-shadow:inset -4px 0 8px rgba(0,0,0,0.2);transform-origin:left center;animation:flapRight 0.75s ease-in-out infinite;"></div>
          <!-- Prominent beak (yellow-orange) -->
          <div style="position:absolute;left:50%;top:36%;transform:translateX(-50%);width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-top:21px solid rgba(220,160,40,0.95);"></div>
          <!-- Tail feathers (rust/copper) -->
          <div style="position:absolute;left:50%;bottom:28px;transform:translateX(-50%);width:37px;height:19px;background:linear-gradient(to bottom,rgba(180,80,40,0.85),rgba(150,60,30,0.75));border-radius:0 0 60% 60%;"></div>
          <!-- Stronger legs (dark brown) -->
          <div style="position:absolute;left:38%;bottom:14px;width:7px;height:32px;background:rgba(80,45,25,0.9);border-radius:3px;"></div>
          <div style="position:absolute;right:38%;bottom:14px;width:7px;height:32px;background:rgba(80,45,25,0.9);border-radius:3px;"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:198px;display:inline-block;">
          <!-- Almost adult-sized body (slate blue) -->
          <div style="position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:110px;height:127px;background:radial-gradient(ellipse at 35% 30%,rgba(90,120,160,1),rgba(70,100,140,0.9));border-radius:48% 48% 58% 58%;box-shadow:inset 10px 10px 22px rgba(130,160,200,0.5),inset -7px -7px 16px rgba(50,80,120,0.3);"></div>
          <!-- Mature head shape (steel gray) -->
          <div style="position:absolute;left:50%;top:22%;transform:translateX(-50%);width:79px;height:79px;background:radial-gradient(circle at 35% 30%,rgba(120,130,145,1),rgba(100,110,125,0.9));border-radius:50%;box-shadow:inset 6px 6px 14px rgba(150,160,175,0.5);"></div>
          <!-- White chest accent -->
          <div style="position:absolute;left:50%;top:62%;transform:translateX(-50%);width:44px;height:53px;background:radial-gradient(ellipse,rgba(245,250,255,0.9),rgba(230,240,250,0.7));border-radius:50%;"></div>
          <!-- Eyes (smaller, more mature) -->
          <div style="position:absolute;left:50%;top:22%;transform:translateX(-50%);display:flex;gap:18px;">
            <div style="width:20px;height:24px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:20px;height:24px;background:black;border-radius:50%;position:relative;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Fully developed wings (navy/indigo) -->
          <div style="position:absolute;left:-4px;top:52%;transform:translateY(-50%);width:48px;height:62px;background:linear-gradient(135deg,rgba(45,70,110,0.95),rgba(30,50,85,0.9));border-radius:50% 50% 0 50%;clip-path:polygon(0 0,100% 10%,100% 90%,0 100%);box-shadow:inset 5px 0 10px rgba(0,0,0,0.2),inset 0 4px 6px rgba(0,0,0,0.15);transform-origin:right center;animation:flapLeft 0.6s ease-in-out infinite;"></div>
          <div style="position:absolute;right:-4px;top:52%;transform:translateY(-50%);width:48px;height:62px;background:linear-gradient(225deg,rgba(45,70,110,0.95),rgba(30,50,85,0.9));border-radius:50% 50% 50% 0;clip-path:polygon(0 10%,100% 0,100% 100%,0 90%);box-shadow:inset -5px 0 10px rgba(0,0,0,0.2),inset 0 4px 6px rgba(0,0,0,0.15);transform-origin:left center;animation:flapRight 0.6s ease-in-out infinite;"></div>
          <!-- Strong beak (charcoal gray) -->
          <div style="position:absolute;left:50%;top:32%;transform:translateX(-50%);width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-top:24px solid rgba(50,55,65,0.95);"></div>
          <!-- Full tail feathers (teal/blue-green) -->
          <div style="position:absolute;left:50%;bottom:35px;transform:translateX(-50%);width:44px;height:26px;background:linear-gradient(to bottom,rgba(60,110,130,0.9),rgba(40,90,110,0.8));border-radius:0 0 65% 65%;box-shadow:inset 0 -4px 6px rgba(0,0,0,0.15);"></div>
          <!-- Adult-like legs (black) -->
          <div style="position:absolute;left:36%;bottom:10px;width:9px;height:40px;background:rgba(40,40,45,0.95);border-radius:4px;"></div>
          <div style="position:absolute;right:36%;bottom:10px;width:9px;height:40px;background:rgba(40,40,45,0.95);border-radius:4px;"></div>
          <!-- Feet -->
          <div style="position:absolute;left:32%;bottom:6px;width:22px;height:5px;background:rgba(40,40,45,0.9);border-radius:2px;"></div>
          <div style="position:absolute;right:32%;bottom:6px;width:22px;height:5px;background:rgba(40,40,45,0.9);border-radius:2px;"></div>
        </div>
      `
    },
    aquatic:{
      0:`
        <div style="position:relative;width:165px;height:140px;display:inline-block;animation:wiggle 2s ease-in-out infinite;">
          <!-- Small fish body (turquoise) -->
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100px;height:55px;background:radial-gradient(ellipse at 35% 35%,rgba(64,224,208,1),rgba(32,178,170,0.9));border-radius:50% 35% 35% 50%;box-shadow:inset 8px 8px 18px rgba(140,255,245,0.5),inset -5px -5px 12px rgba(20,140,130,0.3);"></div>
          <!-- Tail fin (teal) -->
          <div style="position:absolute;right:5px;top:50%;transform:translateY(-50%);width:30px;height:40px;background:linear-gradient(to right,rgba(0,150,136,0.9),rgba(0,120,100,0.7));clip-path:polygon(0 50%,100% 0,100% 100%);"></div>
          <!-- Top fin (light blue) -->
          <div style="position:absolute;left:48%;top:22%;transform:translateX(-50%);width:20px;height:25px;background:rgba(100,200,220,0.85);clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <!-- Eye -->
          <div style="position:absolute;left:38%;top:45%;width:15px;height:15px;background:black;border-radius:50%;animation:blink 3s infinite;">
            <div style="position:absolute;top:3px;left:4px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:150px;display:inline-block;animation:wiggle 1.8s ease-in-out infinite;">
          <!-- Medium fish body (coral/orange) -->
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:112px;height:65px;background:radial-gradient(ellipse at 35% 35%,rgba(255,127,80,1),rgba(240,100,60,0.9));border-radius:50% 35% 35% 50%;box-shadow:inset 9px 9px 20px rgba(255,180,140,0.5),inset -6px -6px 14px rgba(200,80,50,0.3);"></div>
          <!-- Stripes (yellow) -->
          <div style="position:absolute;left:35%;top:42%;width:7px;height:46px;background:rgba(255,220,100,0.8);border-radius:3px;transform:rotate(-15deg);"></div>
          <div style="position:absolute;left:45%;top:40%;width:7px;height:51px;background:rgba(255,220,100,0.8);border-radius:3px;transform:rotate(-10deg);"></div>
          <!-- Tail fin (red-orange) -->
          <div style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:37px;height:51px;background:linear-gradient(to right,rgba(220,60,40,0.95),rgba(180,40,30,0.8));clip-path:polygon(0 50%,100% 0,100% 100%);"></div>
          <!-- Top fin (yellow) -->
          <div style="position:absolute;left:50%;top:18%;transform:translateX(-50%);width:23px;height:32px;background:rgba(255,220,80,0.9);clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <!-- Eye -->
          <div style="position:absolute;left:37%;top:45%;width:16px;height:16px;background:black;border-radius:50%;animation:blink 3s infinite;">
            <div style="position:absolute;top:3px;left:5px;width:6px;height:6px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:165px;display:inline-block;animation:wiggle 1.5s ease-in-out infinite;">
          <!-- Large fish body (deep blue/purple) -->
          <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:122px;height:74px;background:radial-gradient(ellipse at 35% 35%,rgba(75,0,130,1),rgba(100,50,150,0.9));border-radius:50% 35% 35% 50%;box-shadow:inset 10px 10px 22px rgba(130,80,180,0.5),inset -7px -7px 16px rgba(55,0,100,0.3);"></div>
          <!-- Belly (silver) -->
          <div style="position:absolute;left:45%;bottom:32%;width:61px;height:26px;background:radial-gradient(ellipse,rgba(220,220,230,0.8),rgba(180,180,200,0.6));border-radius:50%;"></div>
          <!-- Tail fin (cyan/purple) -->
          <div style="position:absolute;right:-4px;top:50%;transform:translateY(-50%);width:44px;height:61px;background:linear-gradient(to right,rgba(100,50,150,0.95),rgba(60,120,180,0.85));clip-path:polygon(0 50%,100% 0,100% 100%);"></div>
          <!-- Top fin (magenta) -->
          <div style="position:absolute;left:52%;top:14%;transform:translateX(-50%);width:26px;height:40px;background:linear-gradient(to top,rgba(200,50,150,0.9),rgba(150,30,120,0.8));clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <!-- Eye -->
          <div style="position:absolute;left:36%;top:42%;width:18px;height:18px;background:black;border-radius:50%;animation:blink 3s infinite;">
            <div style="position:absolute;top:4px;left:6px;width:7px;height:7px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      `
    },
    reptiles:{
      0:`
        <div style="position:relative;width:165px;height:140px;display:inline-block;">
          <!-- Tail (behind body) -->
          <div style="position:absolute;left:8%;top:52%;transform:translateY(-50%);width:55px;height:22px;background:radial-gradient(ellipse at 70% 40%,#6bc76b 0%,#4aa84a 50%,#3d8c3d 100%);border-radius:50% 10% 10% 50%;z-index:5;box-shadow:inset 3px 2px 8px rgba(150,220,150,0.4),inset -2px -2px 6px rgba(40,100,40,0.3);animation:teen-tail-sway 2s ease-in-out infinite;transform-origin:right center;"></div>
          <!-- Body with breathing animation -->
          <div style="position:absolute;left:28%;top:50%;transform:translateY(-50%);width:88px;height:48px;background:radial-gradient(ellipse at 35% 30%,#a8e6a8 0%,#6fdc6f 40%,#4aba4a 100%);border-radius:45% 50% 45% 40%;z-index:10;box-shadow:inset 8px 8px 18px rgba(200,255,200,0.5),inset -5px -5px 12px rgba(60,140,60,0.3);animation:teen-body-breathe 3s ease-in-out infinite;">
            <!-- Body highlight -->
            <div style="position:absolute;width:22px;height:14px;background:rgba(255,255,255,0.4);border-radius:50%;top:8px;left:15px;filter:blur(3px);"></div>
            <!-- Subtle scale pattern -->
            <div style="position:absolute;width:100%;height:100%;background:repeating-linear-gradient(120deg,transparent 0px,transparent 8px,rgba(60,140,60,0.12) 8px,rgba(60,140,60,0.12) 10px);border-radius:45% 50% 45% 40%;"></div>
          </div>
          <!-- Head -->
          <div style="position:absolute;left:60%;top:48%;transform:translateY(-50%);width:48px;height:42px;background:radial-gradient(ellipse at 35% 30%,#c8f7c8 0%,#8fe08f 40%,#5cc85c 100%);border-radius:55% 50% 45% 50%;z-index:15;box-shadow:inset 5px 5px 12px rgba(220,255,220,0.5),inset -3px -3px 8px rgba(60,140,60,0.25);">
            <!-- Head highlight -->
            <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.45);border-radius:50%;top:6px;left:8px;filter:blur(2px);"></div>
          </div>
          <!-- Eye (cute gecko eye - big round) -->
          <div style="position:absolute;left:66%;top:42%;width:20px;height:22px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;z-index:20;animation:blink 4s infinite;">
            <div style="position:absolute;top:4px;left:5px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            <div style="position:absolute;top:10px;left:8px;width:4px;height:4px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;left:74%;top:58%;width:10px;height:5px;background:#fca5a5;border-radius:50%;opacity:0.6;z-index:20;filter:blur(1px);"></div>
          <!-- Front leg -->
          <div style="position:absolute;left:52%;bottom:32px;width:12px;height:22px;background:radial-gradient(ellipse at 40% 30%,#7ed67e,#4aba4a);border-radius:6px 6px 4px 4px;z-index:12;box-shadow:inset 2px 2px 4px rgba(180,240,180,0.4);animation:teen-leg-walk 1.5s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Back leg -->
          <div style="position:absolute;left:34%;bottom:32px;width:11px;height:20px;background:radial-gradient(ellipse at 40% 30%,#6bc76b,#4aa84a);border-radius:5px 5px 4px 4px;z-index:8;box-shadow:inset 2px 2px 4px rgba(160,220,160,0.4);animation:teen-leg-walk 1.5s ease-in-out infinite 0.3s;transform-origin:top center;"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:155px;display:inline-block;animation:wiggle 3s ease-in-out infinite;">
          <!-- SNAKE TEEN - SVG curved body with writhing -->
          <svg viewBox="0 0 175 155" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;animation:teen-snake-writhe 2.5s ease-in-out infinite;transform-origin:center center;">
            <defs>
              <linearGradient id="teenSnakeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#7c3aed" />
                <stop offset="30%" style="stop-color:#8b5cf6" />
                <stop offset="60%" style="stop-color:#a78bfa" />
                <stop offset="100%" style="stop-color:#c4b5fd" />
              </linearGradient>
              <linearGradient id="teenSnakeBelly" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.3" />
                <stop offset="50%" style="stop-color:#ddd6fe;stop-opacity:0.5" />
                <stop offset="100%" style="stop-color:#c4b5fd;stop-opacity:0.3" />
              </linearGradient>
            </defs>
            <!-- Main snake body curve -->
            <path d="M 15,95 Q 45,60 85,85 Q 125,110 130,75" fill="none" stroke="url(#teenSnakeGrad)" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Belly stripe -->
            <path d="M 20,95 Q 48,65 85,85 Q 120,105 128,78" fill="none" stroke="url(#teenSnakeBelly)" stroke-width="8" stroke-linecap="round"/>
            <!-- Diamond pattern markings -->
            <circle cx="50" cy="78" r="4" fill="rgba(91,33,182,0.25)"/>
            <circle cx="75" cy="88" r="3.5" fill="rgba(91,33,182,0.2)"/>
            <circle cx="100" cy="82" r="3" fill="rgba(91,33,182,0.15)"/>
          </svg>
          <!-- Head -->
          <div style="position:absolute;right:18px;top:50px;width:42px;height:38px;background:radial-gradient(ellipse at 35% 30%,#ddd6fe 0%,#c4b5fd 40%,#a78bfa 100%);border-radius:50% 55% 50% 45%;z-index:15;box-shadow:inset 5px 5px 12px rgba(245,243,255,0.5),inset -3px -3px 8px rgba(139,92,246,0.25);">
            <!-- Head highlight -->
            <div style="position:absolute;width:12px;height:9px;background:rgba(255,255,255,0.45);border-radius:50%;top:5px;left:6px;filter:blur(2px);"></div>
            <!-- Snout -->
            <div style="position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:16px;height:18px;background:radial-gradient(ellipse at 60% 40%,#c4b5fd,#a78bfa);border-radius:40% 60% 60% 40%;z-index:16;box-shadow:inset 2px 2px 4px rgba(221,214,254,0.4);">
              <!-- Nostrils -->
              <div style="position:absolute;right:3px;top:5px;width:2px;height:1px;background:rgba(91,33,182,0.5);border-radius:50%;"></div>
              <div style="position:absolute;right:3px;bottom:5px;width:2px;height:1px;background:rgba(91,33,182,0.5);border-radius:50%;"></div>
            </div>
            <!-- Tongue (from snout) -->
            <div style="position:absolute;right:-18px;top:50%;transform:translateY(-50%);width:12px;height:2px;background:#ec4899;z-index:17;transform-origin:left center;animation:cobra-tongue 3s infinite;">
              <div style="position:absolute;right:-4px;top:-2px;width:5px;height:2px;background:#ec4899;transform:rotate(-25deg);border-radius:1px;"></div>
              <div style="position:absolute;right:-4px;bottom:-2px;width:5px;height:2px;background:#ec4899;transform:rotate(25deg);border-radius:1px;"></div>
            </div>
          </div>
          <!-- Eye (snake eye - yellow with vertical slit) -->
          <div style="position:absolute;right:32px;top:54px;width:14px;height:14px;background:radial-gradient(ellipse at 35% 30%,#fef08a 0%,#facc15 70%,#eab308 100%);border-radius:50%;z-index:20;box-shadow:inset 2px 2px 4px rgba(255,255,200,0.5);animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:5px;width:4px;height:8px;background:#1a1a1a;border-radius:40%;"></div>
            <div style="position:absolute;top:2px;left:3px;width:3px;height:3px;background:white;border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;right:22px;top:72px;width:10px;height:5px;background:#f0abfc;border-radius:50%;opacity:0.6;z-index:20;filter:blur(1px);"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:165px;display:inline-block;">
          <!-- Tail (behind body) -->
          <div style="position:absolute;left:2%;top:54%;transform:translateY(-50%);width:75px;height:32px;background:radial-gradient(ellipse at 78% 40%,#0d9488 0%,#0f766e 50%,#115e59 100%);border-radius:50% 18% 18% 50%;z-index:5;box-shadow:inset 5px 3px 12px rgba(80,200,190,0.4),inset -3px -3px 8px rgba(10,60,55,0.3);animation:teen-tail-sway 1.6s ease-in-out infinite;transform-origin:right center;"></div>
          <!-- Body with breathing animation -->
          <div style="position:absolute;left:24%;top:52%;transform:translateY(-50%);width:112px;height:68px;background:radial-gradient(ellipse at 35% 30%,#2dd4bf 0%,#14b8a6 40%,#0d9488 100%);border-radius:50% 55% 48% 45%;z-index:10;box-shadow:inset 10px 10px 24px rgba(100,220,210,0.5),inset -7px -7px 16px rgba(10,100,90,0.3);animation:teen-body-breathe 2.5s ease-in-out infinite;">
            <!-- Body highlight -->
            <div style="position:absolute;width:30px;height:18px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;left:20px;filter:blur(4px);"></div>
            <!-- Scale pattern overlay -->
            <div style="position:absolute;width:100%;height:100%;background:repeating-linear-gradient(110deg,transparent 0px,transparent 12px,rgba(10,100,90,0.08) 12px,rgba(10,100,90,0.08) 14px);border-radius:50% 55% 48% 45%;"></div>
            <!-- Individual scales -->
            <div style="position:absolute;width:65px;height:32px;left:20%;top:35%;background:repeating-linear-gradient(90deg,rgba(32,178,170,0.35) 0px,rgba(32,178,170,0.35) 8px,transparent 8px,transparent 11px);border-radius:50%;"></div>
          </div>
          <!-- Head -->
          <div style="position:absolute;left:68%;top:50%;transform:translateY(-50%);width:60px;height:56px;background:radial-gradient(ellipse at 35% 30%,#5eead4 0%,#2dd4bf 40%,#14b8a6 100%);border-radius:55% 50% 48% 52%;z-index:15;box-shadow:inset 7px 7px 16px rgba(160,240,230,0.5),inset -4px -4px 10px rgba(10,100,90,0.25);">
            <!-- Head highlight -->
            <div style="position:absolute;width:18px;height:14px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:12px;filter:blur(3px);"></div>
          </div>
          <!-- Eye (cute frog eye - big round shiny) -->
          <div style="position:absolute;left:74%;top:42%;width:24px;height:26px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;z-index:20;animation:blink 4s infinite;">
            <div style="position:absolute;top:5px;left:6px;width:8px;height:8px;background:white;border-radius:50%;"></div>
            <div style="position:absolute;top:13px;left:10px;width:5px;height:5px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;left:84%;top:62%;width:13px;height:7px;background:#99f6e4;border-radius:50%;opacity:0.7;z-index:20;filter:blur(1px);"></div>
          <!-- Spine ridges -->
          <div style="position:absolute;left:32%;top:26%;width:12px;height:18px;background:radial-gradient(ellipse at 50% 30%,#67e8f9,#22d3ee);border-radius:5px 5px 2px 2px;z-index:15;box-shadow:0 2px 5px rgba(0,0,0,0.15),inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
          <div style="position:absolute;left:43%;top:22%;width:12px;height:24px;background:radial-gradient(ellipse at 50% 30%,#67e8f9,#22d3ee);border-radius:5px 5px 2px 2px;z-index:15;box-shadow:0 2px 5px rgba(0,0,0,0.15),inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
          <div style="position:absolute;left:54%;top:26%;width:12px;height:18px;background:radial-gradient(ellipse at 50% 30%,#67e8f9,#22d3ee);border-radius:5px 5px 2px 2px;z-index:15;box-shadow:0 2px 5px rgba(0,0,0,0.15),inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
          <!-- Front leg -->
          <div style="position:absolute;left:58%;bottom:24px;width:15px;height:32px;background:radial-gradient(ellipse at 40% 30%,#14b8a6,#0d9488);border-radius:7px 7px 4px 4px;z-index:12;box-shadow:inset 3px 3px 6px rgba(100,220,210,0.4);animation:teen-leg-walk 1.3s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Back leg -->
          <div style="position:absolute;left:34%;bottom:24px;width:14px;height:28px;background:radial-gradient(ellipse at 40% 30%,#0d9488,#0f766e);border-radius:6px 6px 4px 4px;z-index:8;box-shadow:inset 3px 3px 6px rgba(80,200,190,0.4);animation:teen-leg-walk 1.3s ease-in-out infinite 0.2s;transform-origin:top center;"></div>
        </div>
      `
    },
    insects:{
      0:`
        <div style="position:relative;width:165px;height:150px;display:inline-block;animation:wiggle 1.5s ease-in-out infinite;">
          <!-- Small caterpillar/larva body (lime green) -->
          <div style="position:absolute;left:50%;top:55%;transform:translateX(-50%);width:105px;height:50px;background:radial-gradient(ellipse at 40% 35%,rgba(124,252,0,1),rgba(102,205,0,0.9));border-radius:50%;box-shadow:inset 8px 8px 18px rgba(180,255,80,0.5),inset -5px -5px 12px rgba(80,180,0,0.3);"></div>
          <!-- Segments (yellow stripes) -->
          <div style="position:absolute;left:30%;top:52%;width:8px;height:45px;background:rgba(255,255,100,0.8);border-radius:3px;"></div>
          <div style="position:absolute;left:42%;top:52%;width:8px;height:45px;background:rgba(255,255,100,0.8);border-radius:3px;"></div>
          <div style="position:absolute;left:54%;top:52%;width:8px;height:45px;background:rgba(255,255,100,0.8);border-radius:3px;"></div>
          <!-- Head (bright green) -->
          <div style="position:absolute;left:68%;top:55%;transform:translateY(-50%);width:40px;height:40px;background:radial-gradient(circle at 35% 35%,rgba(0,255,0,1),rgba(0,200,0,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(100,255,100,0.5);"></div>
          <!-- Small antennae (orange) -->
          <div style="position:absolute;left:70%;top:36%;width:5px;height:25px;background:rgba(255,140,0,0.8);border-radius:3px;"></div>
          <div style="position:absolute;right:18%;top:36%;width:5px;height:25px;background:rgba(255,140,0,0.8);border-radius:3px;"></div>
          <!-- Eye -->
          <div style="position:absolute;left:74%;top:52%;width:13px;height:13px;background:black;border-radius:50%;animation:blink 3s infinite;">
            <div style="position:absolute;top:3px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
          <!-- Tiny leg nubs (dark green) -->
          <div style="position:absolute;left:32%;bottom:40px;width:8px;height:15px;background:rgba(50,100,50,0.8);border-radius:4px;"></div>
          <div style="position:absolute;left:48%;bottom:40px;width:8px;height:15px;background:rgba(50,100,50,0.8);border-radius:4px;"></div>
          <div style="position:absolute;right:32%;bottom:40px;width:8px;height:15px;background:rgba(50,100,50,0.8);border-radius:4px;"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:162px;display:inline-block;animation:bounce-slow 1.2s ease-in-out infinite;">
          <!-- Medium beetle body (royal blue) -->
          <div style="position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:88px;height:74px;background:radial-gradient(ellipse at 35% 30%,rgba(65,105,225,1),rgba(50,85,200,0.9));border-radius:50%;box-shadow:inset 9px 9px 20px rgba(110,150,255,0.5),inset -6px -6px 14px rgba(35,65,170,0.3);"></div>
          <!-- Head (navy blue) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:56px;height:51px;background:radial-gradient(circle at 35% 30%,rgba(0,0,128,1),rgba(0,0,100,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(50,50,180,0.5);"></div>
          <!-- Wing cases developing (cyan/turquoise) -->
          <div style="position:absolute;left:32%;top:46%;width:37px;height:46px;background:linear-gradient(135deg,rgba(0,206,209,0.85),rgba(0,180,190,0.75));border-radius:40% 0 40% 40%;border-right:2px solid rgba(0,100,120,0.5);"></div>
          <div style="position:absolute;right:32%;top:46%;width:37px;height:46px;background:linear-gradient(225deg,rgba(0,206,209,0.85),rgba(0,180,190,0.75));border-radius:0 40% 40% 40%;border-left:2px solid rgba(0,100,120,0.5);"></div>
          <!-- Antennae (orange/red) -->
          <div style="position:absolute;left:36%;top:14%;width:5px;height:32px;background:rgba(255,69,0,0.9);border-radius:3px;transform:rotate(-20deg);"></div>
          <div style="position:absolute;right:36%;top:14%;width:5px;height:32px;background:rgba(255,69,0,0.9);border-radius:3px;transform:rotate(20deg);"></div>
          <!-- Eyes -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:14px;">
            <div style="width:14px;height:14px;background:black;border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:3px;left:4px;width:5px;height:5px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:14px;height:14px;background:black;border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:3px;left:4px;width:5px;height:5px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Legs (black) -->
          <div style="position:absolute;left:28%;bottom:32px;width:7px;height:23px;background:rgba(0,0,0,0.9);border-radius:4px;"></div>
          <div style="position:absolute;left:48%;bottom:32px;width:7px;height:23px;background:rgba(0,0,0,0.9);border-radius:4px;"></div>
          <div style="position:absolute;right:28%;bottom:32px;width:7px;height:23px;background:rgba(0,0,0,0.9);border-radius:4px;"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:175px;display:inline-block;animation:bounce-slow 1s ease-in-out infinite;">
          <!-- Large dragonfly body (iridescent purple) -->
          <div style="position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:96px;height:83px;background:radial-gradient(ellipse at 35% 30%,rgba(147,112,219,1),rgba(123,92,195,0.95));border-radius:52%;box-shadow:inset 10px 10px 22px rgba(190,155,255,0.5),inset -7px -7px 16px rgba(100,70,165,0.3);"></div>
          <!-- Thorax (magenta) -->
          <div style="position:absolute;left:50%;top:38%;transform:translateX(-50%);width:61px;height:53px;background:radial-gradient(circle at 35% 30%,rgba(199,21,133,1),rgba(169,11,103,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(235,60,170,0.5);"></div>
          <!-- Head (emerald green) -->
          <div style="position:absolute;left:50%;top:20%;transform:translateX(-50%);width:48px;height:44px;background:radial-gradient(circle at 35% 30%,rgba(0,201,87,1),rgba(0,171,67,0.9));border-radius:50%;box-shadow:inset 5px 5px 12px rgba(50,235,120,0.5);"></div>
          <!-- Large compound eyes (gold) -->
          <div style="position:absolute;left:50%;top:20%;transform:translateX(-50%);display:flex;gap:9px;">
            <div style="width:20px;height:20px;background:radial-gradient(circle,rgba(255,215,0,1),rgba(218,165,32,0.9));border:2px solid rgba(139,90,0,0.8);border-radius:50%;animation:blink 3s infinite;"></div>
            <div style="width:20px;height:20px;background:radial-gradient(circle,rgba(255,215,0,1),rgba(218,165,32,0.9));border:2px solid rgba(139,90,0,0.8);border-radius:50%;animation:blink 3s infinite;"></div>
          </div>
          <!-- Transparent wings (cyan/white) -->
          <div style="position:absolute;left:4px;top:32%;width:44px;height:61px;background:linear-gradient(135deg,rgba(224,255,255,0.6),rgba(175,238,238,0.5));border-radius:60% 20% 60% 20%;border:2px solid rgba(0,191,255,0.4);"></div>
          <div style="position:absolute;right:4px;top:32%;width:44px;height:61px;background:linear-gradient(225deg,rgba(224,255,255,0.6),rgba(175,238,238,0.5));border-radius:20% 60% 20% 60%;border:2px solid rgba(0,191,255,0.4);"></div>
          <!-- Lower wings (pink/white) -->
          <div style="position:absolute;left:13px;top:48%;width:35px;height:48px;background:linear-gradient(135deg,rgba(255,240,245,0.5),rgba(255,182,193,0.4));border-radius:60% 20% 60% 20%;border:2px solid rgba(255,105,180,0.3);"></div>
          <div style="position:absolute;right:13px;top:48%;width:35px;height:48px;background:linear-gradient(225deg,rgba(255,240,245,0.5),rgba(255,182,193,0.4));border-radius:20% 60% 20% 60%;border:2px solid rgba(255,105,180,0.3);"></div>
          <!-- Segmented tail (blue/purple gradient) -->
          <div style="position:absolute;left:50%;bottom:22px;transform:translateX(-50%);width:22px;height:35px;background:linear-gradient(to bottom,rgba(123,92,195,0.9),rgba(75,0,130,0.8));border-radius:50%;"></div>
        </div>
      `
    },
    mammals:{
      0:`
        <div style="position:relative;width:165px;height:150px;display:inline-block;animation:bounce-slow 1.8s ease-in-out infinite;">
          <!-- Ears (brown) - behind head z-index:25 -->
          <div style="position:absolute;left:27%;top:18%;width:28px;height:32px;background:radial-gradient(ellipse at 35% 30%,rgba(180,120,70,1),rgba(140,90,50,0.9));border-radius:50% 50% 20% 20%;z-index:25;box-shadow:inset 3px 3px 8px rgba(220,160,100,0.4),inset -2px -2px 6px rgba(100,60,30,0.3);animation:wiggle 2.5s ease-in-out infinite;">
            <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:14px;height:16px;background:rgba(255,192,203,0.5);border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:27%;top:18%;width:28px;height:32px;background:radial-gradient(ellipse at 65% 30%,rgba(180,120,70,1),rgba(140,90,50,0.9));border-radius:50% 50% 20% 20%;z-index:25;box-shadow:inset -3px 3px 8px rgba(220,160,100,0.4),inset 2px -2px 6px rgba(100,60,30,0.3);animation:wiggle 2.8s ease-in-out infinite;">
            <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:14px;height:16px;background:rgba(255,192,203,0.5);border-radius:50%;"></div>
          </div>
          <!-- Body (golden brown) z-index:30 -->
          <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:98px;height:82px;background:radial-gradient(ellipse at 35% 30%,rgba(240,200,100,1),rgba(218,165,32,0.95),rgba(184,134,11,0.9));border-radius:50%;z-index:30;box-shadow:inset 10px 10px 20px rgba(255,220,120,0.5),inset -8px -8px 16px rgba(150,110,10,0.3),0 4px 12px rgba(150,100,20,0.3);">
            <!-- Highlight spot -->
            <div style="position:absolute;width:28px;height:20px;background:rgba(255,255,255,0.4);border-radius:50%;top:12%;left:18%;filter:blur(3px);"></div>
            <!-- Belly (cream) - inside body -->
            <div style="position:absolute;left:50%;bottom:10%;transform:translateX(-50%);width:50px;height:40px;background:radial-gradient(ellipse,rgba(255,253,220,0.8),rgba(255,248,200,0.6));border-radius:50%;"></div>
          </div>
          <!-- Head (lighter gold) z-index:40 -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:72px;height:72px;background:radial-gradient(ellipse at 35% 30%,rgba(255,225,140,1),rgba(240,200,100,0.95),rgba(218,180,80,0.9));border-radius:50%;z-index:40;box-shadow:inset 8px 8px 16px rgba(255,240,150,0.5),inset -6px -6px 12px rgba(180,140,40,0.3),0 4px 10px rgba(150,100,20,0.25);">
            <!-- Head highlight spot -->
            <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:12%;left:20%;filter:blur(3px);"></div>
          </div>
          <!-- Eyes z-index:50 -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:18px;z-index:50;">
            <div style="width:18px;height:20px;background:radial-gradient(circle at 30% 30%,#4a3520,#1a0a00);border-radius:50%;position:relative;animation:blink 3s infinite;box-shadow:0 2px 4px rgba(0,0,0,0.3);">
              <div style="position:absolute;top:4px;left:5px;width:6px;height:6px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:18px;height:20px;background:radial-gradient(circle at 30% 30%,#4a3520,#1a0a00);border-radius:50%;position:relative;animation:blink 3s infinite;box-shadow:0 2px 4px rgba(0,0,0,0.3);">
              <div style="position:absolute;top:4px;left:5px;width:6px;height:6px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Snout (tan) z-index:45 -->
          <div style="position:absolute;left:50%;top:44%;transform:translateX(-50%);width:32px;height:26px;background:radial-gradient(ellipse at 35% 35%,rgba(255,238,210,1),rgba(245,220,190,0.95));border-radius:50%;z-index:45;box-shadow:inset 3px 3px 6px rgba(255,255,255,0.4);"></div>
          <!-- Nose (black) z-index:55 -->
          <div style="position:absolute;left:50%;top:48%;transform:translateX(-50%);width:12px;height:9px;background:radial-gradient(circle at 35% 35%,#333,#000);border-radius:50%;z-index:55;box-shadow:0 1px 2px rgba(0,0,0,0.3);"></div>
          <!-- Paws (dark brown) z-index:35 -->
          <div style="position:absolute;left:32%;bottom:18px;width:16px;height:22px;background:radial-gradient(ellipse,rgba(120,80,45,1),rgba(90,55,25,0.95));border-radius:10px;z-index:35;animation:wiggle 2.2s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(160,110,70,0.4);"></div>
          <div style="position:absolute;right:32%;bottom:18px;width:16px;height:22px;background:radial-gradient(ellipse,rgba(120,80,45,1),rgba(90,55,25,0.95));border-radius:10px;z-index:35;animation:wiggle 2.5s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(160,110,70,0.4);"></div>
          <!-- Blush -->
          <div style="position:absolute;left:28%;top:42%;width:12px;height:6px;background:rgba(255,180,190,0.5);border-radius:50%;filter:blur(2px);z-index:48;"></div>
          <div style="position:absolute;right:28%;top:42%;width:12px;height:6px;background:rgba(255,180,190,0.5);border-radius:50%;filter:blur(2px);z-index:48;"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:162px;display:inline-block;animation:bounce-slow 1.5s ease-in-out infinite;">
          <!-- Tail (behind body) z-index:10 -->
          <div style="position:absolute;left:12%;top:62%;width:45px;height:35px;background:linear-gradient(to left,rgba(255,99,71,0.95),rgba(255,200,180,0.8));border-radius:50%;transform:rotate(-20deg);z-index:10;box-shadow:0 3px 8px rgba(200,60,40,0.2);animation:tail-swish 2s ease-in-out infinite;"></div>
          <!-- Ears (rounded, connecting to head) z-index:35 -->
          <div style="position:absolute;left:24%;top:20%;width:26px;height:34px;background:radial-gradient(ellipse at 50% 70%,rgba(255,99,71,1),rgba(180,80,50,0.95));border-radius:50% 50% 20% 20%;z-index:35;box-shadow:inset 2px 2px 6px rgba(255,150,120,0.4);animation:wiggle 2.6s ease-in-out infinite;transform-origin:bottom center;">
            <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);width:12px;height:16px;background:rgba(255,200,180,0.5);border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:24%;top:20%;width:26px;height:34px;background:radial-gradient(ellipse at 50% 70%,rgba(255,99,71,1),rgba(180,80,50,0.95));border-radius:50% 50% 20% 20%;z-index:35;box-shadow:inset -2px 2px 6px rgba(255,150,120,0.4);animation:wiggle 2.9s ease-in-out infinite;transform-origin:bottom center;">
            <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);width:12px;height:16px;background:rgba(255,200,180,0.5);border-radius:50%;"></div>
          </div>
          <!-- Body (russet/orange) z-index:30 -->
          <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:105px;height:88px;background:radial-gradient(ellipse at 35% 30%,rgba(245,120,100,1),rgba(205,92,92,0.95),rgba(178,74,74,0.9));border-radius:50%;z-index:30;box-shadow:inset 10px 10px 22px rgba(255,150,130,0.5),inset -8px -8px 16px rgba(140,50,50,0.3),0 4px 12px rgba(150,60,50,0.3);">
            <!-- Highlight spot -->
            <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.35);border-radius:50%;top:10%;left:16%;filter:blur(3px);"></div>
            <!-- White chest - inside body -->
            <div style="position:absolute;left:50%;bottom:8%;transform:translateX(-50%);width:55px;height:46px;background:radial-gradient(ellipse,rgba(255,252,250,0.9),rgba(255,245,240,0.7));border-radius:50%;"></div>
          </div>
          <!-- Head (red-orange) z-index:40 -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:78px;height:74px;background:radial-gradient(ellipse at 35% 30%,rgba(255,130,100,1),rgba(255,99,71,0.95),rgba(220,80,60,0.9));border-radius:52%;z-index:40;box-shadow:inset 8px 8px 18px rgba(255,160,140,0.5),inset -6px -6px 14px rgba(180,55,40,0.3),0 4px 10px rgba(180,60,50,0.25);">
            <!-- Head highlight spot -->
            <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.4);border-radius:50%;top:12%;left:18%;filter:blur(3px);"></div>
          </div>
          <!-- Eyes (cute round black) z-index:50 -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:20px;z-index:50;">
            <div style="width:16px;height:18px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:4px;left:4px;width:5px;height:5px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:9px;left:7px;width:2px;height:2px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
            </div>
            <div style="width:16px;height:18px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:4px;left:4px;width:5px;height:5px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:9px;left:7px;width:2px;height:2px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Snout (white/cream) z-index:45 -->
          <div style="position:absolute;left:50%;top:44%;transform:translateX(-50%);width:40px;height:36px;background:radial-gradient(ellipse at 35% 35%,rgba(255,255,250,1),rgba(255,250,240,0.95));border-radius:50%;z-index:45;box-shadow:inset 4px 4px 8px rgba(255,255,255,0.5);"></div>
          <!-- Nose (black) z-index:55 -->
          <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);width:14px;height:10px;background:radial-gradient(circle at 35% 35%,#333,#000);border-radius:50%;z-index:55;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>
          <!-- Paws (charcoal) z-index:35 -->
          <div style="position:absolute;left:32%;bottom:15px;width:18px;height:28px;background:radial-gradient(ellipse,rgba(70,70,70,1),rgba(45,45,45,0.95));border-radius:10px;z-index:35;animation:wiggle 2.1s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(100,100,100,0.4);"></div>
          <div style="position:absolute;right:32%;bottom:15px;width:18px;height:28px;background:radial-gradient(ellipse,rgba(70,70,70,1),rgba(45,45,45,0.95));border-radius:10px;z-index:35;animation:wiggle 2.4s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(100,100,100,0.4);"></div>
          <!-- Blush -->
          <div style="position:absolute;left:24%;top:46%;width:14px;height:7px;background:rgba(255,180,190,0.5);border-radius:50%;filter:blur(2px);z-index:48;"></div>
          <div style="position:absolute;right:24%;top:46%;width:14px;height:7px;background:rgba(255,180,190,0.5);border-radius:50%;filter:blur(2px);z-index:48;"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:175px;display:inline-block;animation:bounce-slow 1.2s ease-in-out infinite;">
          <!-- Tail (gray/white tip) z-index:10 -->
          <div style="position:absolute;left:10%;top:64%;width:58px;height:42px;background:linear-gradient(to left,rgba(140,140,140,0.95),rgba(220,220,220,0.9),rgba(250,250,250,0.85));border-radius:50%;transform:rotate(-25deg);z-index:10;box-shadow:0 4px 10px rgba(100,100,100,0.2);animation:tail-swish 2.2s ease-in-out infinite;"></div>
          <!-- Ears (rounded, connecting to head) z-index:35 -->
          <div style="position:absolute;left:22%;top:20%;width:30px;height:38px;background:radial-gradient(ellipse at 50% 70%,rgba(105,105,105,1),rgba(80,80,80,0.95));border-radius:50% 50% 20% 20%;z-index:35;box-shadow:inset 2px 2px 6px rgba(150,150,150,0.3);animation:wiggle 2.5s ease-in-out infinite;transform-origin:bottom center;">
            <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);width:14px;height:18px;background:rgba(255,182,193,0.45);border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:22%;top:20%;width:30px;height:38px;background:radial-gradient(ellipse at 50% 70%,rgba(105,105,105,1),rgba(80,80,80,0.95));border-radius:50% 50% 20% 20%;z-index:35;box-shadow:inset -2px 2px 6px rgba(150,150,150,0.3);animation:wiggle 2.8s ease-in-out infinite;transform-origin:bottom center;">
            <div style="position:absolute;left:50%;top:25%;transform:translateX(-50%);width:14px;height:18px;background:rgba(255,182,193,0.45);border-radius:50%;"></div>
          </div>
          <!-- Body (gray) z-index:30 -->
          <div style="position:absolute;left:50%;top:60%;transform:translate(-50%,-50%);width:115px;height:95px;background:radial-gradient(ellipse at 35% 30%,rgba(160,160,160,1),rgba(128,128,128,0.95),rgba(100,100,100,0.9));border-radius:52%;z-index:30;box-shadow:inset 12px 12px 24px rgba(200,200,200,0.5),inset -9px -9px 18px rgba(70,70,70,0.3),0 5px 14px rgba(80,80,80,0.3);">
            <!-- Highlight spot -->
            <div style="position:absolute;width:32px;height:24px;background:rgba(255,255,255,0.35);border-radius:50%;top:10%;left:16%;filter:blur(4px);"></div>
            <!-- White/silver chest - inside body -->
            <div style="position:absolute;left:50%;bottom:6%;transform:translateX(-50%);width:62px;height:52px;background:radial-gradient(ellipse,rgba(250,250,250,0.9),rgba(230,230,230,0.75));border-radius:50%;"></div>
          </div>
          <!-- Head (darker gray) z-index:40 -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:84px;height:78px;background:radial-gradient(ellipse at 35% 30%,rgba(140,140,140,1),rgba(105,105,105,0.95),rgba(85,85,85,0.9));border-radius:54%;z-index:40;box-shadow:inset 9px 9px 20px rgba(180,180,180,0.5),inset -7px -7px 16px rgba(60,60,60,0.3),0 4px 12px rgba(70,70,70,0.25);">
            <!-- Head highlight spot -->
            <div style="position:absolute;width:26px;height:20px;background:rgba(255,255,255,0.4);border-radius:50%;top:10%;left:18%;filter:blur(4px);"></div>
          </div>
          <!-- Eyes (cute round with sparkle) z-index:50 -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:20px;z-index:50;">
            <div style="width:18px;height:20px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:4px;left:4px;width:6px;height:6px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:10px;left:8px;width:3px;height:3px;background:rgba(255,255,255,0.6);border-radius:50%;"></div>
            </div>
            <div style="width:18px;height:20px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:4px;left:4px;width:6px;height:6px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:10px;left:8px;width:3px;height:3px;background:rgba(255,255,255,0.6);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Snout (light gray) z-index:45 -->
          <div style="position:absolute;left:50%;top:46%;transform:translateX(-50%);width:44px;height:34px;background:radial-gradient(ellipse at 35% 35%,rgba(220,220,220,1),rgba(190,190,190,0.95));border-radius:50%;z-index:45;box-shadow:inset 5px 5px 10px rgba(255,255,255,0.4);"></div>
          <!-- Nose (black) z-index:55 -->
          <div style="position:absolute;left:50%;top:52%;transform:translateX(-50%);width:14px;height:10px;background:radial-gradient(circle at 35% 35%,#333,#000);border-radius:50%;z-index:55;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>
          <!-- Paws (charcoal/black) z-index:35 -->
          <div style="position:absolute;left:30%;bottom:12px;width:20px;height:34px;background:radial-gradient(ellipse,rgba(55,55,55,1),rgba(35,35,35,0.95));border-radius:11px;z-index:35;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(90,90,90,0.4);"></div>
          <div style="position:absolute;right:30%;bottom:12px;width:20px;height:34px;background:radial-gradient(ellipse,rgba(55,55,55,1),rgba(35,35,35,0.95));border-radius:11px;z-index:35;animation:wiggle 2.3s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(90,90,90,0.4);"></div>
          <!-- Blush -->
          <div style="position:absolute;left:24%;top:46%;width:14px;height:7px;background:rgba(255,180,190,0.4);border-radius:50%;filter:blur(2px);z-index:48;"></div>
          <div style="position:absolute;right:24%;top:46%;width:14px;height:7px;background:rgba(255,180,190,0.4);border-radius:50%;filter:blur(2px);z-index:48;"></div>
        </div>
      `,
      3:`
        <div style="position:relative;width:190px;height:175px;display:inline-block;animation:bounce-slow 1.8s ease-in-out infinite;">
          <!-- Bushy tail (orange with white tip) z-index:5 -->
          <div style="position:absolute;right:-15px;bottom:25px;width:55px;height:28px;background:linear-gradient(to right,rgba(249,115,22,1),rgba(234,88,12,0.95));border:3px solid rgba(39,27,18,0.85);border-radius:50%;transform-origin:left center;animation:tail-swish 2.5s ease-in-out infinite;z-index:5;overflow:hidden;box-shadow:0 3px 8px rgba(200,80,20,0.2);">
            <div style="position:absolute;right:0;top:0;width:20px;height:100%;background:rgba(255,255,255,0.95);border-radius:0 50% 50% 0;"></div>
          </div>
          <!-- Back paws (dark) z-index:15 -->
          <div style="position:absolute;left:28%;bottom:10px;width:14px;height:18px;background:radial-gradient(ellipse,rgba(50,35,20,1),rgba(30,20,10,0.95));border:2px solid rgba(26,18,12,0.9);border-radius:8px;z-index:15;"></div>
          <div style="position:absolute;right:28%;bottom:10px;width:14px;height:18px;background:radial-gradient(ellipse,rgba(50,35,20,1),rgba(30,20,10,0.95));border:2px solid rgba(26,18,12,0.9);border-radius:8px;z-index:15;"></div>
          <!-- Ears (rounded triangular, connecting to head) z-index:35 -->
          <div style="position:absolute;left:22%;top:8%;width:24px;height:32px;background:radial-gradient(ellipse at 50% 80%,rgba(249,115,22,1),rgba(39,27,18,0.85));border:2px solid rgba(39,27,18,0.85);border-radius:50% 50% 15% 15%;z-index:35;transform-origin:bottom center;animation:wiggle 3s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(255,150,80,0.4);">
            <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:10px;height:12px;background:rgba(255,220,200,0.6);border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:22%;top:8%;width:24px;height:32px;background:radial-gradient(ellipse at 50% 80%,rgba(249,115,22,1),rgba(39,27,18,0.85));border:2px solid rgba(39,27,18,0.85);border-radius:50% 50% 15% 15%;z-index:35;transform-origin:bottom center;animation:wiggle 3.3s ease-in-out infinite;box-shadow:inset -2px 2px 6px rgba(255,150,80,0.4);">
            <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:10px;height:12px;background:rgba(255,220,200,0.6);border-radius:50%;"></div>
          </div>
          <!-- Body (orange) z-index:30 -->
          <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:62px;height:50px;background:radial-gradient(ellipse at 35% 30%,rgba(255,140,60,1),rgba(249,115,22,0.95),rgba(234,88,12,0.9));border:3px solid rgba(39,27,18,0.85);border-radius:50%;z-index:30;box-shadow:inset 6px 6px 14px rgba(255,180,120,0.5),inset -5px -5px 10px rgba(180,60,10,0.3),0 4px 10px rgba(180,70,20,0.25);">
            <!-- Highlight spot -->
            <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.35);border-radius:50%;top:12%;left:18%;filter:blur(2px);"></div>
            <!-- White chest patch - inside body -->
            <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);width:42px;height:32px;background:radial-gradient(ellipse,rgba(255,255,255,0.95),rgba(255,250,245,0.85));border-radius:50%;"></div>
          </div>
          <!-- Head (orange) z-index:40 -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:58px;height:52px;background:radial-gradient(ellipse at 35% 30%,rgba(255,145,70,1),rgba(249,115,22,0.95),rgba(234,88,12,0.9));border:3px solid rgba(39,27,18,0.85);border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;z-index:40;box-shadow:inset 6px 6px 12px rgba(255,175,110,0.5),inset -5px -5px 10px rgba(180,60,10,0.3),0 4px 10px rgba(180,70,20,0.2);overflow:hidden;">
            <!-- Head highlight spot -->
            <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:12%;left:18%;filter:blur(2px);"></div>
            <!-- White cheek markings -->
            <div style="position:absolute;left:2px;bottom:6px;width:22px;height:20px;background:rgba(255,255,255,0.95);border-radius:50%;transform:rotate(-20deg);"></div>
            <div style="position:absolute;right:2px;bottom:6px;width:22px;height:20px;background:rgba(255,255,255,0.95);border-radius:50%;transform:rotate(20deg);"></div>
            <!-- White snout bridge -->
            <div style="position:absolute;left:50%;top:48%;transform:translateX(-50%);width:14px;height:22px;background:rgba(255,255,255,0.95);border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;"></div>
          </div>
          <!-- Eyes (cute round black) z-index:50 -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:18px;z-index:50;">
            <div style="width:14px;height:16px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:3px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:8px;left:6px;width:2px;height:2px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
            </div>
            <div style="width:14px;height:16px;background:radial-gradient(circle at 35% 35%,#2a2a2a,#000);border-radius:50%;position:relative;animation:blink 4s ease-in-out infinite;">
              <div style="position:absolute;top:3px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
              <div style="position:absolute;top:8px;left:6px;width:2px;height:2px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Nose (black) z-index:55 -->
          <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);width:10px;height:7px;background:radial-gradient(circle at 35% 35%,#333,#000);border-radius:50%;z-index:55;box-shadow:0 1px 2px rgba(0,0,0,0.3);"></div>
          <!-- Mouth (W shape) z-index:55 -->
          <div style="position:absolute;left:50%;top:46%;transform:translateX(-50%);display:flex;z-index:55;">
            <div style="width:7px;height:5px;border:2px solid rgba(39,27,18,0.7);border-top:none;border-radius:0 0 8px 8px;margin:0 -0.5px;"></div>
            <div style="width:7px;height:5px;border:2px solid rgba(39,27,18,0.7);border-top:none;border-radius:0 0 8px 8px;margin:0 -0.5px;"></div>
          </div>
          <!-- Front paws (dark) z-index:45 -->
          <div style="position:absolute;left:22%;top:56%;width:16px;height:18px;background:radial-gradient(ellipse,rgba(50,35,20,1),rgba(30,20,10,0.95));border:2px solid rgba(26,18,12,0.85);border-radius:9px;z-index:45;animation:wiggle 2.5s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(80,55,35,0.4);"></div>
          <div style="position:absolute;right:22%;top:56%;width:16px;height:18px;background:radial-gradient(ellipse,rgba(50,35,20,1),rgba(30,20,10,0.95));border:2px solid rgba(26,18,12,0.85);border-radius:9px;z-index:45;animation:wiggle 2.8s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(80,55,35,0.4);"></div>
          <!-- Blush -->
          <div style="position:absolute;left:20%;top:40%;width:12px;height:6px;background:rgba(254,205,211,0.5);border-radius:50%;filter:blur(1.5px);z-index:48;"></div>
          <div style="position:absolute;right:20%;top:40%;width:12px;height:6px;background:rgba(254,205,211,0.5);border-radius:50%;filter:blur(1.5px);z-index:48;"></div>
        </div>
      `
    },
    prehistoric:{
      0:`
        <div style="position:relative;width:165px;height:150px;display:inline-block;">
          <!-- Tail (behind body) -->
          <div style="position:absolute;left:8%;top:56%;transform:translateY(-50%);width:45px;height:18px;background:radial-gradient(ellipse at 70% 40%,#9fbd9f 0%,#7fa87f 50%,#5f8f5f 100%);border-radius:50% 10% 10% 50%;z-index:5;box-shadow:inset 3px 2px 6px rgba(180,220,180,0.4),inset -2px -2px 5px rgba(60,100,60,0.3);animation:teen-tail-sway 2.2s ease-in-out infinite;transform-origin:right center;"></div>
          <!-- Body with breathing animation -->
          <div style="position:absolute;left:28%;top:52%;transform:translateY(-50%);width:85px;height:58px;background:radial-gradient(ellipse at 35% 30%,#c8e6c8 0%,#8fbc8f 40%,#6f9f6f 100%);border-radius:48%;z-index:10;box-shadow:inset 8px 8px 18px rgba(200,240,200,0.5),inset -5px -5px 12px rgba(80,130,80,0.3);animation:teen-body-breathe 3s ease-in-out infinite;">
            <!-- Body highlight -->
            <div style="position:absolute;width:20px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:12px;filter:blur(3px);"></div>
          </div>
          <!-- Head -->
          <div style="position:absolute;left:58%;top:48%;transform:translateY(-50%);width:52px;height:48px;background:radial-gradient(ellipse at 35% 30%,#b8d4b8 0%,#8fbc8f 40%,#6f9f6f 100%);border-radius:50%;z-index:15;box-shadow:inset 5px 5px 12px rgba(200,240,200,0.5),inset -3px -3px 8px rgba(80,130,80,0.3);">
            <!-- Head highlight -->
            <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.45);border-radius:50%;top:6px;left:8px;filter:blur(2px);"></div>
          </div>
          <!-- Frill (behind head) -->
          <div style="position:absolute;left:54%;top:32%;width:48px;height:38px;background:radial-gradient(ellipse at 50% 60%,#e8d4b8 0%,#d4bc9f 50%,#bc9f7f 100%);border-radius:50% 50% 0 0;z-index:12;box-shadow:inset 4px 4px 10px rgba(255,230,200,0.4),inset -3px -3px 6px rgba(150,120,80,0.3);"></div>
          <!-- Tiny horn nubs -->
          <div style="position:absolute;left:70%;top:38%;width:10px;height:16px;background:radial-gradient(ellipse at 50% 80%,#fff8e8,#f5deb3);border-radius:50% 50% 20% 20%;z-index:16;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;left:66%;top:32%;width:8px;height:14px;background:radial-gradient(ellipse at 50% 80%,#fff8e8,#f5deb3);border-radius:50% 50% 20% 20%;z-index:16;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;right:22%;top:32%;width:8px;height:14px;background:radial-gradient(ellipse at 50% 80%,#fff8e8,#f5deb3);border-radius:50% 50% 20% 20%;z-index:16;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
          <!-- Eye -->
          <div style="position:absolute;left:68%;top:46%;width:16px;height:18px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;z-index:20;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:4px;width:6px;height:6px;background:white;border-radius:50%;"></div>
            <div style="position:absolute;top:9px;left:7px;width:3px;height:3px;background:rgba(255,255,255,0.5);border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;left:76%;top:60%;width:10px;height:5px;background:#c8e8a8;border-radius:50%;opacity:0.7;z-index:20;filter:blur(1px);"></div>
          <!-- Front leg -->
          <div style="position:absolute;left:50%;bottom:35px;width:13px;height:22px;background:radial-gradient(ellipse at 40% 30%,#8fbc8f,#5f8f5f);border-radius:6px 6px 4px 4px;z-index:12;box-shadow:inset 2px 2px 4px rgba(180,220,180,0.4);animation:teen-leg-walk 1.8s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Back leg -->
          <div style="position:absolute;left:32%;bottom:35px;width:12px;height:20px;background:radial-gradient(ellipse at 40% 30%,#7fa87f,#5f8f5f);border-radius:5px 5px 4px 4px;z-index:8;box-shadow:inset 2px 2px 4px rgba(160,200,160,0.4);animation:teen-leg-walk 1.8s ease-in-out infinite 0.3s;transform-origin:top center;"></div>
          <!-- Spots -->
          <div style="position:absolute;left:36%;top:48%;width:10px;height:10px;background:rgba(173,255,47,0.4);border-radius:50%;z-index:11;"></div>
          <div style="position:absolute;left:46%;top:52%;width:8px;height:8px;background:rgba(173,255,47,0.35);border-radius:50%;z-index:11;"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:162px;display:inline-block;">
          <!-- Tail (behind body) -->
          <div style="position:absolute;left:6%;top:56%;transform:translateY(-50%);width:55px;height:20px;background:radial-gradient(ellipse at 70% 40%,#a54040 0%,#8b3535 50%,#702828 100%);border-radius:50% 10% 10% 50%;z-index:5;box-shadow:inset 3px 2px 8px rgba(200,100,100,0.4),inset -2px -2px 6px rgba(80,20,20,0.3);animation:teen-tail-sway 1.8s ease-in-out infinite;transform-origin:right center;"></div>
          <!-- Body with breathing animation -->
          <div style="position:absolute;left:26%;top:52%;transform:translateY(-50%);width:95px;height:62px;background:radial-gradient(ellipse at 35% 30%,#d08080 0%,#a54242 40%,#8b2323 100%);border-radius:50%;z-index:10;box-shadow:inset 9px 9px 20px rgba(220,140,140,0.5),inset -6px -6px 14px rgba(100,30,30,0.3);animation:teen-body-breathe 2.8s ease-in-out infinite;">
            <!-- Body highlight -->
            <div style="position:absolute;width:24px;height:14px;background:rgba(255,255,255,0.35);border-radius:50%;top:10px;left:14px;filter:blur(3px);"></div>
            <!-- Stripes -->
            <div style="position:absolute;left:20%;top:20%;width:8px;height:45px;background:rgba(139,0,0,0.4);border-radius:4px;transform:rotate(-10deg);"></div>
            <div style="position:absolute;left:38%;top:15%;width:8px;height:50px;background:rgba(139,0,0,0.35);border-radius:4px;transform:rotate(-5deg);"></div>
          </div>
          <!-- Head/snout -->
          <div style="position:absolute;left:62%;top:44%;transform:translateY(-50%);width:52px;height:46px;background:radial-gradient(ellipse at 35% 30%,#c89070 0%,#8b5535 40%,#654321 100%);border-radius:55% 65% 55% 45%;z-index:15;box-shadow:inset 5px 5px 12px rgba(200,150,120,0.5),inset -3px -3px 8px rgba(80,45,20,0.3);">
            <!-- Head highlight -->
            <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.4);border-radius:50%;top:6px;left:8px;filter:blur(2px);"></div>
          </div>
          <!-- Eye ridge -->
          <div style="position:absolute;left:68%;top:36%;width:20px;height:10px;background:radial-gradient(ellipse,#d4bc9f,#bc9f7f);border-radius:50% 50% 0 0;z-index:16;box-shadow:inset 1px 1px 3px rgba(255,230,200,0.4);"></div>
          <!-- Eye (amber/yellow) -->
          <div style="position:absolute;left:70%;top:40%;width:16px;height:16px;background:radial-gradient(circle at 35% 30%,#fef08a 0%,#fbbf24 60%,#d97706 100%);border:3px solid #1a1a1a;border-radius:50%;z-index:20;box-shadow:inset 2px 2px 4px rgba(255,255,200,0.5);animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:4px;width:4px;height:6px;background:#1a1a1a;border-radius:40%;"></div>
            <div style="position:absolute;top:2px;left:2px;width:3px;height:3px;background:white;border-radius:50%;"></div>
          </div>
          <!-- Teeth -->
          <div style="position:absolute;left:80%;top:48%;width:5px;height:8px;background:rgba(255,255,255,0.95);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:17;"></div>
          <div style="position:absolute;left:84%;top:48%;width:5px;height:8px;background:rgba(255,255,255,0.95);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:17;"></div>
          <!-- Blush -->
          <div style="position:absolute;left:78%;top:58%;width:10px;height:5px;background:#fca5a5;border-radius:50%;opacity:0.6;z-index:20;filter:blur(1px);"></div>
          <!-- Arms -->
          <div style="position:absolute;left:56%;top:50%;width:8px;height:18px;background:radial-gradient(ellipse at 40% 30%,#a54242,#8b2323);border-radius:4px;transform:rotate(45deg);z-index:12;box-shadow:inset 1px 1px 3px rgba(200,100,100,0.4);animation:teen-arm-wave 2s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Back leg -->
          <div style="position:absolute;left:38%;bottom:32px;width:14px;height:28px;background:radial-gradient(ellipse at 40% 30%,#8b5535,#654321);border-radius:7px 7px 5px 5px;z-index:8;box-shadow:inset 2px 2px 5px rgba(180,120,80,0.4);animation:teen-leg-walk 1.6s ease-in-out infinite 0.2s;transform-origin:top center;"></div>
          <!-- Front leg -->
          <div style="position:absolute;right:34%;bottom:32px;width:14px;height:28px;background:radial-gradient(ellipse at 40% 30%,#9b6545,#654321);border-radius:7px 7px 5px 5px;z-index:12;box-shadow:inset 2px 2px 5px rgba(180,120,80,0.4);animation:teen-leg-walk 1.6s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Claw -->
          <div style="position:absolute;right:32%;bottom:24px;width:7px;height:12px;background:linear-gradient(to bottom,#1a1a1a,#000);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:13;"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:175px;display:inline-block;">
          <!-- Tail (behind body) -->
          <div style="position:absolute;left:4%;top:58%;transform:translateY(-50%);width:65px;height:28px;background:radial-gradient(ellipse at 72% 40%,#bdb76b 0%,#9a9452 50%,#7a7842 100%);border-radius:50% 12% 12% 50%;z-index:5;box-shadow:inset 4px 3px 10px rgba(200,195,130,0.4),inset -3px -3px 8px rgba(90,90,50,0.3);animation:teen-tail-sway 2s ease-in-out infinite;transform-origin:right center;"></div>
          <!-- Body with breathing animation -->
          <div style="position:absolute;left:22%;top:54%;transform:translateY(-50%);width:108px;height:75px;background:radial-gradient(ellipse at 35% 30%,#e0dba0 0%,#bdb76b 40%,#9a9452 100%);border-radius:52%;z-index:10;box-shadow:inset 10px 10px 22px rgba(240,235,170,0.5),inset -7px -7px 16px rgba(100,100,55,0.3);animation:teen-body-breathe 2.6s ease-in-out infinite;">
            <!-- Body highlight -->
            <div style="position:absolute;width:28px;height:16px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;left:16px;filter:blur(4px);"></div>
            <!-- Scale texture -->
            <div style="position:absolute;width:100%;height:100%;background:repeating-linear-gradient(110deg,transparent 0px,transparent 12px,rgba(90,90,50,0.08) 12px,rgba(90,90,50,0.08) 14px);border-radius:52%;"></div>
          </div>
          <!-- Head -->
          <div style="position:absolute;left:64%;top:40%;transform:translateY(-50%);width:62px;height:56px;background:radial-gradient(ellipse at 35% 30%,#c8c878 0%,#9a9452 40%,#808000 100%);border-radius:58% 68% 58% 48%;z-index:15;box-shadow:inset 6px 6px 14px rgba(220,220,150,0.5),inset -4px -4px 10px rgba(80,80,40,0.3);">
            <!-- Head highlight -->
            <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:8px;left:10px;filter:blur(3px);"></div>
          </div>
          <!-- Eye ridge/brow -->
          <div style="position:absolute;left:70%;top:30%;width:26px;height:12px;background:radial-gradient(ellipse,#9b7653,#654321);border-radius:50% 50% 0 0;z-index:16;box-shadow:inset 2px 2px 4px rgba(180,140,100,0.4);"></div>
          <!-- Eye (fierce yellow) -->
          <div style="position:absolute;left:72%;top:34%;width:20px;height:20px;background:radial-gradient(circle at 35% 30%,#fef08a 0%,#fcd34d 60%,#f59e0b 100%);border:4px solid #1a1a1a;border-radius:50%;z-index:20;box-shadow:inset 3px 3px 6px rgba(255,255,200,0.5);animation:blink 4s infinite;">
            <div style="position:absolute;top:4px;left:5px;width:5px;height:8px;background:#1a1a1a;border-radius:40%;"></div>
            <div style="position:absolute;top:2px;left:3px;width:4px;height:4px;background:white;border-radius:50%;"></div>
          </div>
          <!-- Large jaw -->
          <div style="position:absolute;left:74%;top:46%;width:42px;height:28px;background:radial-gradient(ellipse at 40% 40%,#8b8b3d,#6b6b00);border-radius:40% 50% 50% 40%;z-index:14;box-shadow:inset 3px 3px 8px rgba(160,160,80,0.4),inset -2px -2px 5px rgba(60,60,20,0.3);"></div>
          <!-- Sharp teeth -->
          <div style="position:absolute;left:80%;top:44%;width:5px;height:12px;background:linear-gradient(to bottom,#fff,#e5e5e5);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:17;"></div>
          <div style="position:absolute;left:84%;top:44%;width:5px;height:12px;background:linear-gradient(to bottom,#fff,#e5e5e5);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:17;"></div>
          <div style="position:absolute;left:88%;top:44%;width:5px;height:12px;background:linear-gradient(to bottom,#fff,#e5e5e5);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:17;"></div>
          <!-- Blush -->
          <div style="position:absolute;left:82%;top:58%;width:12px;height:6px;background:#d4d484;border-radius:50%;opacity:0.6;z-index:20;filter:blur(1px);"></div>
          <!-- Tiny arms -->
          <div style="position:absolute;left:60%;top:52%;width:10px;height:22px;background:radial-gradient(ellipse at 40% 30%,#a0955a,#8b7355);border-radius:5px;transform:rotate(50deg);z-index:12;box-shadow:inset 2px 2px 4px rgba(180,170,100,0.4);animation:teen-arm-wave 2.2s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Powerful legs -->
          <div style="position:absolute;left:36%;bottom:22px;width:18px;height:35px;background:radial-gradient(ellipse at 40% 30%,#9b7653,#654321);border-radius:9px 9px 6px 6px;z-index:8;box-shadow:inset 3px 3px 6px rgba(180,140,100,0.4);animation:teen-leg-walk 1.8s ease-in-out infinite 0.2s;transform-origin:top center;"></div>
          <div style="position:absolute;right:26%;bottom:22px;width:18px;height:35px;background:radial-gradient(ellipse at 40% 30%,#a08060,#654321);border-radius:9px 9px 6px 6px;z-index:12;box-shadow:inset 3px 3px 6px rgba(180,140,100,0.4);animation:teen-leg-walk 1.8s ease-in-out infinite;transform-origin:top center;"></div>
          <!-- Claws -->
          <div style="position:absolute;left:38%;bottom:14px;width:9px;height:13px;background:linear-gradient(to bottom,#1a1a1a,#000);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:13;"></div>
          <div style="position:absolute;right:28%;bottom:14px;width:9px;height:13px;background:linear-gradient(to bottom,#1a1a1a,#000);clip-path:polygon(50% 0,0 100%,100% 100%);z-index:13;"></div>
        </div>
      `
    },
    alien:{
      0:`
        <div style="position:relative;width:165px;height:165px;display:inline-block;animation:wiggle 1.8s ease-in-out infinite;">
          <!-- Small alien blob body (luminous green) -->
          <div style="position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);width:90px;height:80px;background:radial-gradient(ellipse at 35% 30%,rgba(50,205,50,0.9),rgba(34,177,34,0.85));border-radius:50%;box-shadow:inset 8px 8px 18px rgba(100,255,100,0.4),inset -5px -5px 12px rgba(25,150,25,0.3),0 0 20px rgba(50,205,50,0.5);"></div>
          <!-- Large head (cyan/turquoise) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:80px;height:75px;background:radial-gradient(circle at 35% 30%,rgba(64,224,208,1),rgba(32,178,170,0.95));border-radius:50%;box-shadow:inset 6px 6px 14px rgba(120,255,235,0.5),0 0 16px rgba(64,224,208,0.4);"></div>
          <!-- Huge alien eyes (black with colorful reflections) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:10px;">
            <div style="width:25px;height:30px;background:radial-gradient(ellipse,rgba(0,0,0,1),rgba(20,20,40,0.95));border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:10px;height:13px;background:radial-gradient(ellipse,rgba(100,200,255,0.8),rgba(50,150,255,0.6));border-radius:50%;"></div>
              <div style="position:absolute;top:3px;left:15px;width:5px;height:5px;background:rgba(255,255,255,0.9);border-radius:50%;"></div>
            </div>
            <div style="width:25px;height:30px;background:radial-gradient(ellipse,rgba(0,0,0,1),rgba(20,20,40,0.95));border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:5px;width:10px;height:13px;background:radial-gradient(ellipse,rgba(100,200,255,0.8),rgba(50,150,255,0.6));border-radius:50%;"></div>
              <div style="position:absolute;top:3px;left:15px;width:5px;height:5px;background:rgba(255,255,255,0.9);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Small antenna (pink/purple) -->
          <div style="position:absolute;left:40%;top:14%;width:5px;height:30px;background:rgba(255,20,147,0.8);border-radius:3px;">
            <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:10px;height:10px;background:radial-gradient(circle,rgba(255,20,147,1),rgba(199,21,133,0.8));border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:40%;top:14%;width:5px;height:30px;background:rgba(138,43,226,0.8);border-radius:3px;">
            <div style="position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:10px;height:10px;background:radial-gradient(circle,rgba(138,43,226,1),rgba(106,13,173,0.8));border-radius:50%;"></div>
          </div>
          <!-- Spots (bioluminescent blue) -->
          <div style="position:absolute;left:36%;top:58%;width:10px;height:10px;background:rgba(0,191,255,0.7);border-radius:50%;box-shadow:0 0 8px rgba(0,191,255,0.5);"></div>
          <div style="position:absolute;right:36%;top:62%;width:8px;height:8px;background:rgba(0,191,255,0.7);border-radius:50%;box-shadow:0 0 6px rgba(0,191,255,0.5);"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:175px;display:inline-block;animation:bounce-slow 1.4s ease-in-out infinite;">
          <!-- Medium alien body (purple/violet) -->
          <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:98px;height:88px;background:radial-gradient(ellipse at 35% 30%,rgba(138,43,226,0.95),rgba(106,13,173,0.9));border-radius:52%;box-shadow:inset 9px 9px 20px rgba(180,80,255,0.4),inset -6px -6px 14px rgba(80,10,140,0.3),0 0 24px rgba(138,43,226,0.4);"></div>
          <!-- Elongated head (indigo) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:84px;height:79px;background:radial-gradient(ellipse at 35% 30%,rgba(75,0,130,1),rgba(60,0,110,0.95));border-radius:50% 50% 45% 45%;box-shadow:inset 6px 6px 14px rgba(110,30,170,0.5),0 0 20px rgba(75,0,130,0.3);"></div>
          <!-- Large alien eyes (glowing green) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:14px;">
            <div style="width:26px;height:30px;background:radial-gradient(ellipse,rgba(0,255,127,1),rgba(0,200,100,0.9));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 12px rgba(0,255,127,0.6);">
              <div style="position:absolute;top:5px;left:5px;width:12px;height:14px;background:radial-gradient(ellipse,rgba(173,255,47,0.7),rgba(144,238,144,0.5));border-radius:50%;"></div>
              <div style="position:absolute;top:5px;left:17px;width:6px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
            </div>
            <div style="width:26px;height:30px;background:radial-gradient(ellipse,rgba(0,255,127,1),rgba(0,200,100,0.9));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 12px rgba(0,255,127,0.6);">
              <div style="position:absolute;top:5px;left:5px;width:12px;height:14px;background:radial-gradient(ellipse,rgba(173,255,47,0.7),rgba(144,238,144,0.5));border-radius:50%;"></div>
              <div style="position:absolute;top:5px;left:17px;width:6px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Antenna (electric blue) -->
          <div style="position:absolute;left:38%;top:10%;width:7px;height:37px;background:rgba(0,191,255,0.9);border-radius:4px;">
            <div style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);width:14px;height:14px;background:radial-gradient(circle,rgba(0,191,255,1),rgba(30,144,255,0.85));border-radius:50%;box-shadow:0 0 12px rgba(0,191,255,0.7);"></div>
          </div>
          <div style="position:absolute;right:38%;top:10%;width:7px;height:37px;background:rgba(255,0,255,0.9);border-radius:4px;">
            <div style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);width:14px;height:14px;background:radial-gradient(circle,rgba(255,0,255,1),rgba(218,112,214,0.85));border-radius:50%;box-shadow:0 0 12px rgba(255,0,255,0.7);"></div>
          </div>
          <!-- Energy core (glowing cyan) -->
          <div style="position:absolute;left:50%;top:64%;transform:translateX(-50%);width:33px;height:33px;background:radial-gradient(circle,rgba(0,255,255,0.8),rgba(0,206,209,0.6));border-radius:50%;box-shadow:0 0 20px rgba(0,255,255,0.5);"></div>
          <!-- Tentacle-like appendages (dark purple) -->
          <div style="position:absolute;left:32%;bottom:28px;width:12px;height:28px;background:linear-gradient(to bottom,rgba(75,0,130,0.9),rgba(50,0,90,0.8));border-radius:50%;"></div>
          <div style="position:absolute;right:32%;bottom:28px;width:12px;height:28px;background:linear-gradient(to bottom,rgba(75,0,130,0.9),rgba(50,0,90,0.8));border-radius:50%;"></div>
          <!-- Bioluminescent spots (various colors) -->
          <div style="position:absolute;left:28%;top:54%;width:9px;height:9px;background:rgba(255,20,147,0.8);border-radius:50%;box-shadow:0 0 10px rgba(255,20,147,0.6);"></div>
          <div style="position:absolute;right:28%;top:58%;width:7px;height:7px;background:rgba(0,255,255,0.8);border-radius:50%;box-shadow:0 0 8px rgba(0,255,255,0.6);"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:185px;display:inline-block;animation:bounce-slow 1.2s ease-in-out infinite;">
          <!-- Large alien body (metallic silver/gray) -->
          <div style="position:absolute;left:50%;top:60%;transform:translate(-50%,-50%);width:105px;height:96px;background:radial-gradient(ellipse at 35% 30%,rgba(192,192,192,1),rgba(169,169,169,0.95));border-radius:54%;box-shadow:inset 10px 10px 22px rgba(230,230,235,0.5),inset -7px -7px 16px rgba(140,140,145,0.3),0 0 30px rgba(100,200,255,0.5),inset 0 4px 16px rgba(255,255,255,0.3);"></div>
          <!-- Large cranium (chrome blue) -->
          <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);width:88px;height:83px;background:radial-gradient(ellipse at 35% 30%,rgba(135,206,250,1),rgba(100,149,237,0.95));border-radius:50% 50% 42% 42%;box-shadow:inset 6px 6px 14px rgba(180,230,255,0.5),0 0 24px rgba(135,206,250,0.5),inset 0 -6px 16px rgba(255,255,255,0.2);"></div>
          <!-- Massive alien eyes (glowing orange/amber) -->
          <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);display:flex;gap:18px;">
            <div style="width:29px;height:33px;background:radial-gradient(ellipse,rgba(255,140,0,1),rgba(255,69,0,0.95));border:2px solid rgba(139,69,0,0.6);border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 20px rgba(255,140,0,0.7);">
              <div style="position:absolute;top:7px;left:6px;width:13px;height:15px;background:radial-gradient(ellipse,rgba(255,215,0,0.8),rgba(255,165,0,0.6));border-radius:50%;"></div>
              <div style="position:absolute;top:5px;left:20px;width:7px;height:7px;background:rgba(255,255,255,1);border-radius:50%;"></div>
            </div>
            <div style="width:29px;height:33px;background:radial-gradient(ellipse,rgba(255,140,0,1),rgba(255,69,0,0.95));border:2px solid rgba(139,69,0,0.6);border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 20px rgba(255,140,0,0.7);">
              <div style="position:absolute;top:7px;left:6px;width:13px;height:15px;background:radial-gradient(ellipse,rgba(255,215,0,0.8),rgba(255,165,0,0.6));border-radius:50%;"></div>
              <div style="position:absolute;top:5px;left:20px;width:7px;height:7px;background:rgba(255,255,255,1);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Advanced antenna (neon pink/cyan) -->
          <div style="position:absolute;left:36%;top:6%;width:9px;height:44px;background:linear-gradient(to top,rgba(135,206,250,0.9),rgba(0,255,255,0.95));border-radius:4px;">
            <div style="position:absolute;top:-11px;left:50%;transform:translateX(-50%);width:18px;height:18px;background:radial-gradient(circle,rgba(0,255,255,1),rgba(0,206,209,0.9));border-radius:50%;box-shadow:0 0 20px rgba(0,255,255,0.8);"></div>
          </div>
          <div style="position:absolute;right:36%;top:6%;width:9px;height:44px;background:linear-gradient(to top,rgba(255,20,147,0.9),rgba(255,0,255,0.95));border-radius:4px;">
            <div style="position:absolute;top:-11px;left:50%;transform:translateX(-50%);width:18px;height:18px;background:radial-gradient(circle,rgba(255,0,255,1),rgba(218,112,214,0.9));border-radius:50%;box-shadow:0 0 20px rgba(255,0,255,0.8);"></div>
          </div>
          <!-- Pulsing energy core (rainbow) -->
          <div style="position:absolute;left:50%;top:68%;transform:translateX(-50%);width:39px;height:39px;background:radial-gradient(circle,rgba(255,255,255,0.9),rgba(0,255,255,0.7),rgba(255,0,255,0.6));border-radius:50%;box-shadow:0 0 30px rgba(200,100,255,0.7);"></div>
          <!-- Tech patterns on body (glowing circuits - cyan) -->
          <div style="position:absolute;left:34%;top:56%;width:4px;height:26px;background:rgba(0,255,255,0.6);box-shadow:0 0 8px rgba(0,255,255,0.5);"></div>
          <div style="position:absolute;right:34%;top:56%;width:4px;height:26px;background:rgba(255,0,255,0.6);box-shadow:0 0 8px rgba(255,0,255,0.5);"></div>
          <!-- Advanced appendages (chrome/purple gradient) -->
          <div style="position:absolute;left:30%;bottom:22px;width:15px;height:35px;background:linear-gradient(to bottom,rgba(169,169,169,0.95),rgba(106,13,173,0.85));border-radius:50%;box-shadow:0 0 12px rgba(138,43,226,0.4);"></div>
          <div style="position:absolute;right:30%;bottom:22px;width:15px;height:35px;background:linear-gradient(to bottom,rgba(169,169,169,0.95),rgba(106,13,173,0.85));border-radius:50%;box-shadow:0 0 12px rgba(138,43,226,0.4);"></div>
          <!-- Energy emission spots -->
          <div style="position:absolute;left:24%;top:52%;width:11px;height:11px;background:rgba(0,255,255,0.9);border-radius:50%;box-shadow:0 0 16px rgba(0,255,255,0.7);"></div>
          <div style="position:absolute;right:24%;top:54%;width:9px;height:9px;background:rgba(255,0,255,0.9);border-radius:50%;box-shadow:0 0 12px rgba(255,0,255,0.7);"></div>
        </div>
      `
    },
    mystical:{
      0:`
        <div style="position:relative;width:165px;height:165px;display:inline-block;animation:bounce-slow 1.7s ease-in-out infinite;">
          <!-- Spirit/wisp body (ethereal white with 3D depth) -->
          <div style="position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:86px;height:80px;background:radial-gradient(ellipse at 35% 35%,rgba(255,255,255,0.95),rgba(240,248,255,0.85),rgba(220,230,255,0.75));border-radius:50%;box-shadow:0 0 30px rgba(255,255,255,0.7),inset 8px 8px 20px rgba(255,255,255,0.6),inset -5px -5px 15px rgba(200,210,255,0.3);"></div>
          <!-- Glowing core (soft gold with enhanced glow) -->
          <div style="position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);width:45px;height:45px;background:radial-gradient(circle at 40% 40%,rgba(255,235,150,0.85),rgba(255,215,0,0.7),rgba(255,235,205,0.5));border-radius:50%;box-shadow:0 0 25px rgba(255,215,0,0.6),inset 4px 4px 12px rgba(255,255,200,0.5);"></div>
          <!-- Eyes (mystical purple) -->
          <div style="position:absolute;left:50%;top:48%;transform:translateX(-50%);display:flex;gap:16px;">
            <div style="width:18px;height:20px;background:radial-gradient(circle at 35% 35%,rgba(170,80,255,1),rgba(138,43,226,0.95),rgba(75,0,130,0.9));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 15px rgba(138,43,226,0.7),inset 3px 3px 8px rgba(200,150,255,0.4);">
              <div style="position:absolute;top:4px;left:5px;width:6px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
            </div>
            <div style="width:18px;height:20px;background:radial-gradient(circle at 35% 35%,rgba(170,80,255,1),rgba(138,43,226,0.95),rgba(75,0,130,0.9));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 15px rgba(138,43,226,0.7),inset 3px 3px 8px rgba(200,150,255,0.4);">
              <div style="position:absolute;top:4px;left:5px;width:6px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Wisps/tendrils (translucent gradients) -->
          <div style="position:absolute;left:18%;top:48%;width:25px;height:40px;background:linear-gradient(to bottom,rgba(173,216,230,0.7),rgba(135,206,250,0.5),rgba(100,180,255,0.3));border-radius:50%;transform:rotate(-25deg);box-shadow:0 0 12px rgba(135,206,250,0.4);"></div>
          <div style="position:absolute;right:18%;top:48%;width:25px;height:40px;background:linear-gradient(to bottom,rgba(221,160,221,0.7),rgba(218,112,214,0.5),rgba(200,100,200,0.3));border-radius:50%;transform:rotate(25deg);box-shadow:0 0 12px rgba(218,112,214,0.4);"></div>
          <!-- Floating sparkles (various colors - larger) -->
          <div style="position:absolute;left:15%;top:32%;width:8px;height:8px;background:rgba(255,215,0,0.9);border-radius:50%;box-shadow:0 0 10px rgba(255,215,0,0.7);"></div>
          <div style="position:absolute;right:18%;top:38%;width:6px;height:6px;background:rgba(147,112,219,0.9);border-radius:50%;box-shadow:0 0 8px rgba(147,112,219,0.7);"></div>
          <div style="position:absolute;left:48%;top:28%;width:5px;height:5px;background:rgba(255,255,255,0.95);border-radius:50%;box-shadow:0 0 8px rgba(255,255,255,0.8);"></div>
          <div style="position:absolute;left:28%;top:22%;width:4px;height:4px;background:rgba(255,182,193,0.9);border-radius:50%;box-shadow:0 0 6px rgba(255,182,193,0.7);"></div>
          <div style="position:absolute;right:25%;top:26%;width:5px;height:5px;background:rgba(173,216,230,0.9);border-radius:50%;box-shadow:0 0 7px rgba(173,216,230,0.7);"></div>
        </div>
      `,
      1:`
        <div style="position:relative;width:175px;height:175px;display:inline-block;animation:bounce-slow 1.5s ease-in-out infinite;">
          <!-- Celestial being body (opalescent with 3D depth) -->
          <div style="position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);width:95px;height:85px;background:radial-gradient(ellipse at 35% 30%,rgba(255,250,255,1),rgba(255,240,245,0.95),rgba(230,230,250,0.9),rgba(240,248,255,0.85));border-radius:52%;box-shadow:0 0 25px rgba(200,180,255,0.6),inset 8px 8px 20px rgba(255,255,255,0.5),inset -6px -6px 15px rgba(200,180,230,0.3);"></div>
          <!-- Head (pearl white with dimension) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:76px;height:70px;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,1),rgba(255,250,250,0.98),rgba(248,248,255,0.95));border-radius:50%;box-shadow:0 0 20px rgba(255,255,255,0.5),inset 6px 6px 15px rgba(255,255,255,0.6),inset -4px -4px 10px rgba(230,230,250,0.3);"></div>
          <!-- Glowing halo/aura (golden) -->
          <div style="position:absolute;left:50%;top:14%;transform:translateX(-50%);width:85px;height:14px;background:radial-gradient(ellipse,rgba(255,235,150,0.75),rgba(255,215,0,0.5),rgba(255,235,205,0.3));border-radius:50%;box-shadow:0 0 20px rgba(255,215,0,0.6);"></div>
          <!-- Eyes (cosmic blue/purple) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:18px;">
            <div style="width:19px;height:21px;background:radial-gradient(circle at 35% 35%,rgba(130,180,255,1),rgba(100,149,237,0.98),rgba(65,105,225,0.95));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 15px rgba(100,149,237,0.7),inset 3px 3px 8px rgba(180,200,255,0.4);">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:rgba(255,255,255,1);border-radius:50%;"></div>
            </div>
            <div style="width:19px;height:21px;background:radial-gradient(circle at 35% 35%,rgba(130,180,255,1),rgba(100,149,237,0.98),rgba(65,105,225,0.95));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 15px rgba(100,149,237,0.7),inset 3px 3px 8px rgba(180,200,255,0.4);">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:rgba(255,255,255,1);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Flowing robes/energy (gradient purple/pink) -->
          <div style="position:absolute;left:32%;bottom:30px;width:28px;height:48px;background:linear-gradient(to bottom,rgba(221,160,221,0.75),rgba(218,112,214,0.55),rgba(255,182,193,0.4));border-radius:50%;box-shadow:0 0 12px rgba(218,112,214,0.4);"></div>
          <div style="position:absolute;right:32%;bottom:30px;width:28px;height:48px;background:linear-gradient(to bottom,rgba(173,216,230,0.75),rgba(135,206,250,0.55),rgba(176,224,230,0.4));border-radius:50%;box-shadow:0 0 12px rgba(135,206,250,0.4);"></div>
          <!-- Energy wings forming (translucent rainbow) -->
          <div style="position:absolute;left:12px;top:52%;width:34px;height:44px;background:linear-gradient(135deg,rgba(255,182,193,0.6),rgba(221,160,221,0.5),rgba(173,216,230,0.4));border-radius:60% 20% 60% 20%;box-shadow:0 0 15px rgba(200,150,255,0.4);"></div>
          <div style="position:absolute;right:12px;top:52%;width:34px;height:44px;background:linear-gradient(225deg,rgba(173,216,230,0.6),rgba(221,160,221,0.5),rgba(255,182,193,0.4));border-radius:20% 60% 20% 60%;box-shadow:0 0 15px rgba(200,150,255,0.4);"></div>
          <!-- Magical sparkles (larger) -->
          <div style="position:absolute;left:12%;top:38%;width:10px;height:10px;background:rgba(255,215,0,0.95);border-radius:50%;box-shadow:0 0 12px rgba(255,215,0,0.8);"></div>
          <div style="position:absolute;right:14%;top:32%;width:8px;height:8px;background:rgba(255,192,203,0.95);border-radius:50%;box-shadow:0 0 10px rgba(255,192,203,0.7);"></div>
          <div style="position:absolute;left:50%;top:20%;width:6px;height:6px;background:rgba(147,112,219,0.98);border-radius:50%;box-shadow:0 0 8px rgba(147,112,219,0.8);"></div>
          <div style="position:absolute;left:22%;top:28%;width:5px;height:5px;background:rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 0 7px rgba(255,255,255,0.7);"></div>
          <div style="position:absolute;right:22%;top:44%;width:6px;height:6px;background:rgba(173,216,230,0.9);border-radius:50%;box-shadow:0 0 8px rgba(173,216,230,0.7);"></div>
        </div>
      `,
      2:`
        <div style="position:relative;width:185px;height:195px;display:inline-block;animation:bounce-slow 1.3s ease-in-out infinite;">
          <!-- Divine being body (radiant white/gold with 3D depth) -->
          <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:105px;height:95px;background:radial-gradient(ellipse at 35% 30%,rgba(255,255,255,1),rgba(255,250,250,0.98),rgba(255,248,220,0.95),rgba(255,235,205,0.9));border-radius:54%;box-shadow:0 0 35px rgba(255,215,0,0.6),inset 10px 10px 25px rgba(255,255,255,0.6),inset -6px -6px 18px rgba(255,235,180,0.3);"></div>
          <!-- Majestic head (luminous with dimension) -->
          <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);width:82px;height:78px;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,1),rgba(255,252,250,0.99),rgba(255,250,240,0.98));border-radius:52%;box-shadow:0 0 25px rgba(255,255,255,0.7),inset 8px 8px 18px rgba(255,255,255,0.6),inset -5px -5px 12px rgba(250,240,230,0.3);"></div>
          <!-- Brilliant halo (golden radiance - larger) -->
          <div style="position:absolute;left:50%;top:10%;transform:translateX(-50%);width:95px;height:18px;background:radial-gradient(ellipse,rgba(255,235,150,0.85),rgba(255,215,0,0.6),rgba(255,235,205,0.4),transparent);border-radius:50%;box-shadow:0 0 25px rgba(255,215,0,0.8);"></div>
          <div style="position:absolute;left:50%;top:13%;transform:translateX(-50%);width:85px;height:10px;background:radial-gradient(ellipse,rgba(255,255,255,0.7),rgba(255,250,220,0.4),transparent);border-radius:50%;"></div>
          <!-- Eyes (starlight) -->
          <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);display:flex;gap:20px;">
            <div style="width:21px;height:23px;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,1),rgba(220,240,255,0.98),rgba(135,206,250,0.95));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 18px rgba(255,255,255,0.9),inset 4px 4px 10px rgba(255,255,255,0.5);">
              <div style="position:absolute;top:5px;left:7px;width:9px;height:9px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(200,220,255,0.8));border-radius:50%;"></div>
            </div>
            <div style="width:21px;height:23px;background:radial-gradient(circle at 35% 35%,rgba(255,255,255,1),rgba(220,240,255,0.98),rgba(135,206,250,0.95));border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 18px rgba(255,255,255,0.9),inset 4px 4px 10px rgba(255,255,255,0.5);">
              <div style="position:absolute;top:5px;left:7px;width:9px;height:9px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(200,220,255,0.8));border-radius:50%;"></div>
            </div>
          </div>
          <!-- Third eye (mystical purple - larger) -->
          <div style="position:absolute;left:50%;top:18%;transform:translateX(-50%);width:14px;height:18px;background:radial-gradient(ellipse at 40% 35%,rgba(170,80,255,0.95),rgba(138,43,226,0.9),rgba(75,0,130,0.8));border-radius:50%;box-shadow:0 0 15px rgba(138,43,226,0.8),inset 2px 2px 6px rgba(200,150,255,0.4);">
            <div style="position:absolute;top:4px;left:5px;width:5px;height:7px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
          </div>
          <!-- Flowing divine robes (multi-colored gradient) -->
          <div style="position:absolute;left:28%;bottom:22px;width:36px;height:65px;background:linear-gradient(to bottom,rgba(255,240,245,0.92),rgba(221,160,221,0.75),rgba(147,112,219,0.65),rgba(138,43,226,0.55));border-radius:50%;box-shadow:0 0 18px rgba(200,150,255,0.5);"></div>
          <div style="position:absolute;right:28%;bottom:22px;width:36px;height:65px;background:linear-gradient(to bottom,rgba(240,248,255,0.92),rgba(173,216,230,0.75),rgba(100,149,237,0.65),rgba(65,105,225,0.55));border-radius:50%;box-shadow:0 0 18px rgba(150,180,255,0.5);"></div>
          <!-- Magnificent energy wings (iridescent - larger) -->
          <div style="position:absolute;left:4px;top:50%;width:42px;height:55px;background:linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,182,193,0.6),rgba(221,160,221,0.5),rgba(173,216,230,0.4));border-radius:60% 20% 60% 20%;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 20px rgba(255,200,255,0.6);"></div>
          <div style="position:absolute;right:4px;top:50%;width:42px;height:55px;background:linear-gradient(225deg,rgba(255,255,255,0.8),rgba(173,216,230,0.6),rgba(221,160,221,0.5),rgba(255,182,193,0.4));border-radius:20% 60% 20% 60%;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 20px rgba(200,220,255,0.6);"></div>
          <!-- Divine sparkles (constellation-like - larger) -->
          <div style="position:absolute;left:10%;top:34%;width:12px;height:12px;background:rgba(255,255,255,1);border-radius:50%;box-shadow:0 0 15px rgba(255,255,255,0.95);"></div>
          <div style="position:absolute;right:12%;top:28%;width:10px;height:10px;background:rgba(255,215,0,1);border-radius:50%;box-shadow:0 0 12px rgba(255,215,0,0.85);"></div>
          <div style="position:absolute;left:48%;top:16%;width:7px;height:7px;background:rgba(147,112,219,1);border-radius:50%;box-shadow:0 0 10px rgba(147,112,219,0.85);"></div>
          <div style="position:absolute;right:22%;top:42%;width:8px;height:8px;background:rgba(255,192,203,0.98);border-radius:50%;box-shadow:0 0 10px rgba(255,192,203,0.8);"></div>
          <div style="position:absolute;left:18%;top:50%;width:6px;height:6px;background:rgba(173,216,230,0.95);border-radius:50%;box-shadow:0 0 8px rgba(173,216,230,0.75);"></div>
          <div style="position:absolute;right:32%;top:20%;width:5px;height:5px;background:rgba(255,250,200,0.95);border-radius:50%;box-shadow:0 0 8px rgba(255,250,200,0.7);"></div>
        </div>
      `,
      3:`
        <div style="position:relative;width:175px;height:175px;display:inline-block;animation:bounce-slow 1.4s ease-in-out infinite;">
          <!-- Medium unicorn body (white/pearl) -->
          <div style="position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);width:98px;height:88px;background:radial-gradient(ellipse at 35% 30%,rgba(255,250,250,1),rgba(245,245,245,0.95));border-radius:50%;box-shadow:inset 9px 9px 20px rgba(255,255,255,0.6),inset -6px -6px 14px rgba(220,220,225,0.3),0 0 16px rgba(255,240,255,0.4);"></div>
          <!-- Head (ivory) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:70px;height:65px;background:radial-gradient(circle at 35% 30%,rgba(255,255,240,1),rgba(250,250,235,0.95));border-radius:52%;box-shadow:inset 5px 5px 12px rgba(255,255,250,0.5);"></div>
          <!-- Horn (rainbow gradient) -->
          <div style="position:absolute;left:50%;top:10%;transform:translateX(-50%);width:14px;height:42px;background:linear-gradient(to top,rgba(255,255,255,0.9),rgba(255,105,180,0.8),rgba(147,112,219,0.8),rgba(100,149,237,0.8));border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <!-- Eyes (violet) -->
          <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);display:flex;gap:14px;">
            <div style="width:19px;height:19px;background:radial-gradient(circle,rgba(138,43,226,1),rgba(106,13,173,0.9));border:3px solid rgba(75,0,130,0.6);border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
            <div style="width:19px;height:19px;background:radial-gradient(circle,rgba(138,43,226,1),rgba(106,13,173,0.9));border:3px solid rgba(75,0,130,0.6);border-radius:50%;animation:blink 3s infinite;">
              <div style="position:absolute;top:5px;left:6px;width:7px;height:7px;background:white;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Mane (rainbow pastel) -->
          <div style="position:absolute;left:48%;top:24%;width:19px;height:46px;background:linear-gradient(to bottom,rgba(255,182,193,0.8),rgba(255,218,185,0.8),rgba(255,255,200,0.8),rgba(200,255,200,0.8));border-radius:50%;transform:rotate(-15deg);"></div>
          <!-- Ears (white with pink inner) -->
          <div style="position:absolute;left:34%;top:20%;width:19px;height:28px;background:linear-gradient(to top,rgba(255,250,250,0.9),rgba(255,245,245,0.85));border-radius:50% 50% 0 0;">
            <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:7px;height:14px;background:rgba(255,192,203,0.6);border-radius:50%;"></div>
          </div>
          <div style="position:absolute;right:34%;top:20%;width:19px;height:28px;background:linear-gradient(to top,rgba(255,250,250,0.9),rgba(255,245,245,0.85));border-radius:50% 50% 0 0;">
            <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:7px;height:14px;background:rgba(255,192,203,0.6);border-radius:50%;"></div>
          </div>
          <!-- Hooves (silver) -->
          <div style="position:absolute;left:36%;bottom:28px;width:16px;height:23px;background:linear-gradient(to bottom,rgba(192,192,192,0.95),rgba(169,169,169,0.9));border-radius:6px;"></div>
          <div style="position:absolute;right:36%;bottom:28px;width:16px;height:23px;background:linear-gradient(to bottom,rgba(192,192,192,0.95),rgba(169,169,169,0.9));border-radius:6px;"></div>
          <!-- Rainbow sparkles -->
          <div style="position:absolute;left:12%;top:38%;width:9px;height:9px;background:rgba(255,105,180,0.7);border-radius:50%;"></div>
          <div style="position:absolute;right:15%;top:28%;width:7px;height:7px;background:rgba(147,112,219,0.8);border-radius:50%;"></div>
        </div>
      `,
      4:`
        <div style="position:relative;width:185px;height:185px;display:inline-block;animation:bounce-slow 1.2s ease-in-out infinite;">
          <!-- Large phoenix body (gold/orange) -->
          <div style="position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);width:105px;height:96px;background:radial-gradient(ellipse at 35% 30%,rgba(255,215,0,1),rgba(255,165,0,0.95));border-radius:52%;box-shadow:inset 10px 10px 22px rgba(255,240,150,0.5),inset -7px -7px 16px rgba(220,140,0,0.3),0 0 24px rgba(255,140,0,0.5);"></div>
          <!-- Head (crimson/gold) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:74px;height:70px;background:radial-gradient(circle at 35% 30%,rgba(220,20,60,1),rgba(255,140,0,0.95));border-radius:54%;box-shadow:inset 6px 6px 14px rgba(255,80,100,0.5);"></div>
          <!-- Flame crest (red/orange/yellow) -->
          <div style="position:absolute;left:38%;top:12%;width:13px;height:35px;background:linear-gradient(to top,rgba(255,69,0,0.9),rgba(255,215,0,0.8));border-radius:50%;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <div style="position:absolute;left:50%;top:8%;transform:translateX(-50%);width:15px;height:44px;background:linear-gradient(to top,rgba(255,69,0,0.95),rgba(255,255,0,0.85));border-radius:50%;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <div style="position:absolute;right:38%;top:12%;width:13px;height:35px;background:linear-gradient(to top,rgba(255,69,0,0.9),rgba(255,215,0,0.8));border-radius:50%;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
          <!-- Eyes (fiery amber) -->
          <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:17px;">
            <div style="width:20px;height:20px;background:radial-gradient(circle,rgba(255,191,0,1),rgba(255,69,0,0.9));border:4px solid rgba(139,0,0,0.8);border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 12px rgba(255,140,0,0.6);">
              <div style="position:absolute;top:4px;left:6px;width:7px;height:7px;background:rgba(255,255,200,0.9);border-radius:50%;"></div>
            </div>
            <div style="width:20px;height:20px;background:radial-gradient(circle,rgba(255,191,0,1),rgba(255,69,0,0.9));border:4px solid rgba(139,0,0,0.8);border-radius:50%;animation:blink 3s infinite;box-shadow:0 0 12px rgba(255,140,0,0.6);">
              <div style="position:absolute;top:4px;left:6px;width:7px;height:7px;background:rgba(255,255,200,0.9);border-radius:50%;"></div>
            </div>
          </div>
          <!-- Beak (dark gold) -->
          <div style="position:absolute;left:50%;top:40%;transform:translateX(-50%);width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-top:22px solid rgba(184,134,11,0.95);"></div>
          <!-- Flame wings (gradient red/orange/yellow) -->
          <div style="position:absolute;left:4px;top:52%;transform:translateY(-50%);width:44px;height:57px;background:linear-gradient(135deg,rgba(255,69,0,0.95),rgba(255,140,0,0.85),rgba(255,215,0,0.75));border-radius:50% 20% 60% 20%;box-shadow:0 0 16px rgba(255,100,0,0.4);"></div>
          <div style="position:absolute;right:4px;top:52%;transform:translateY(-50%);width:44px;height:57px;background:linear-gradient(225deg,rgba(255,69,0,0.95),rgba(255,140,0,0.85),rgba(255,215,0,0.75));border-radius:20% 50% 20% 60%;box-shadow:0 0 16px rgba(255,100,0,0.4);"></div>
          <!-- Tail flames (layered red/orange/yellow) -->
          <div style="position:absolute;left:50%;bottom:18px;transform:translateX(-50%);width:39px;height:44px;background:linear-gradient(to bottom,rgba(255,215,0,0.9),rgba(255,69,0,0.8),rgba(220,20,60,0.7));border-radius:50%;clip-path:polygon(20% 0,50% 40%,80% 0,60% 100%,40% 100%);box-shadow:0 0 20px rgba(255,100,0,0.5);"></div>
          <!-- Fire sparkles -->
          <div style="position:absolute;left:15%;top:42%;width:9px;height:9px;background:rgba(255,255,0,0.9);border-radius:50%;box-shadow:0 0 8px rgba(255,200,0,0.7);"></div>
          <div style="position:absolute;right:18%;top:35%;width:7px;height:7px;background:rgba(255,140,0,0.95);border-radius:50%;box-shadow:0 0 6px rgba(255,100,0,0.6);"></div>
        </div>
      `
    },
  };

  const categoryDesigns=teenDesigns[category];
  if(!categoryDesigns)return teenDesigns.birds[designIndex];

  const design=categoryDesigns[designIndex]||categoryDesigns[0];

  // Wrap with 3D styling like blob/baby stages
  return `
    <div class="tn-creature">
      <div class="tn-glow"></div>
      <div class="tn-shadow"></div>
      ${design}
    </div>
  `;
}


