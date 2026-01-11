function renderAdultBird(variantIndex){
  const variant=variantIndex||0;

  const birdDesigns={
    0:` <!-- Duck -->
      <div style="position:relative;width:110px;height:105px;display:inline-block;animation:bird-hop 1.8s ease-in-out infinite;">
        <!-- Legendary aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:100px;height:100px;background:radial-gradient(circle,rgba(255,200,100,0.15),transparent 60%);border-radius:50%;animation:pulse-grow 2.5s ease-in-out infinite;"></div>
        <!-- Body (brown with richer gradient) -->
        <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:58px;height:48px;background:radial-gradient(ellipse,rgba(160,110,60,1),rgba(120,80,40,0.98));border-radius:55%;box-shadow:0 3px 12px rgba(101,67,33,0.4),inset -2px -2px 6px rgba(200,150,100,0.3);"></div>
        <!-- Head (vibrant emerald green) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:42px;height:40px;background:radial-gradient(circle,rgba(50,180,50,1),rgba(34,139,34,0.98));border-radius:56%;animation:head-bob 1.5s ease-in-out infinite;box-shadow:inset -2px -2px 6px rgba(100,220,100,0.4);"></div>
        <!-- TWO eyes (front-facing) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:8px;">
          <div style="width:8px;height:9px;background:black;border-radius:50%;border:2px solid rgba(255,255,255,0.9);animation:blink 4s infinite;box-shadow:0 0 4px rgba(255,255,255,0.6);">
            <div style="position:absolute;top:2px;left:2px;width:3px;height:3px;background:white;border-radius:50%;box-shadow:0 0 3px rgba(255,255,255,0.9);"></div>
          </div>
          <div style="width:8px;height:9px;background:black;border-radius:50%;border:2px solid rgba(255,255,255,0.9);animation:blink 4s infinite;box-shadow:0 0 4px rgba(255,255,255,0.6);">
            <div style="position:absolute;top:2px;left:2px;width:3px;height:3px;background:white;border-radius:50%;box-shadow:0 0 3px rgba(255,255,255,0.9);"></div>
          </div>
        </div>
        <!-- Bill (centered below eyes) -->
        <div style="position:absolute;left:50%;top:38%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:10px solid rgba(255,180,0,1);box-shadow:0 0 4px rgba(255,165,0,0.4);"></div>
        <!-- Wings (rotating around single point like teens) -->
        <div style="position:absolute;left:2px;top:54%;transform:translateY(-50%);width:24px;height:30px;background:linear-gradient(135deg,rgba(120,80,40,0.98),rgba(100,65,30,0.95));border-radius:50% 20% 60% 30%;box-shadow:inset -2px 2px 5px rgba(0,0,0,0.25),2px 2px 8px rgba(101,67,33,0.3);transform-origin:right center;animation:flapLeft 0.7s ease-in-out infinite;"></div>
        <div style="position:absolute;right:2px;top:54%;transform:translateY(-50%);width:24px;height:30px;background:linear-gradient(225deg,rgba(120,80,40,0.98),rgba(100,65,30,0.95));border-radius:20% 50% 30% 60%;box-shadow:inset 2px 2px 5px rgba(0,0,0,0.25),-2px 2px 8px rgba(101,67,33,0.3);transform-origin:left center;animation:flapRight 0.7s ease-in-out infinite;"></div>
        <!-- Tail (centered) -->
        <div style="position:absolute;left:50%;bottom:20px;transform:translateX(-50%);width:24px;height:16px;background:linear-gradient(to bottom,rgba(100,65,30,0.98),rgba(60,35,15,0.9));border-radius:0 0 50% 50%;"></div>
        <!-- Feet (bright orange) -->
        <div style="position:absolute;left:42%;bottom:8px;width:12px;height:8px;background:rgba(255,160,0,0.95);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:42%;bottom:8px;width:12px;height:8px;background:rgba(255,160,0,0.95);border-radius:50% 50% 0 0;"></div>
        <!-- Sparkles -->
        <div style="position:absolute;left:20%;top:35%;width:4px;height:4px;background:rgba(255,220,100,0.9);border-radius:50%;box-shadow:0 0 6px rgba(255,200,80,0.8);animation:twinkle 2s ease-in-out infinite;"></div>
        <div style="position:absolute;right:22%;top:45%;width:3px;height:3px;background:rgba(255,200,80,0.85);border-radius:50%;box-shadow:0 0 5px rgba(255,180,60,0.7);animation:twinkle 2.3s ease-in-out infinite 0.5s;"></div>
      </div>
    `,
    1:` <!-- Dove -->
      <div style="position:relative;width:110px;height:110px;display:inline-block;animation:bird-hop 2s ease-in-out infinite;">
        <!-- Divine aura (peaceful white glow) -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:105px;height:105px;background:radial-gradient(circle,rgba(255,255,255,0.2),rgba(200,220,255,0.15),transparent 65%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <!-- Body (pure white with glow) -->
        <div style="position:absolute;left:50%;top:56%;transform:translate(-50%,-50%);width:52px;height:46px;background:radial-gradient(ellipse,rgba(255,255,255,1),rgba(250,250,255,0.98));border-radius:54%;box-shadow:0 4px 14px rgba(150,180,255,0.3),inset -2px -2px 8px rgba(255,255,255,0.8);"></div>
        <!-- Head (white) -->
        <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);width:38px;height:36px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:52%;"></div>
        <!-- TWO eyes (peaceful, front-facing) -->
        <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);display:flex;gap:7px;">
          <div style="width:7px;height:8px;background:black;border-radius:50%;animation:blink 5s infinite;">
            <div style="position:absolute;top:1.5px;left:2px;width:2.5px;height:2.5px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:7px;height:8px;background:black;border-radius:50%;animation:blink 5s infinite;">
            <div style="position:absolute;top:1.5px;left:2px;width:2.5px;height:2.5px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Beak (centered, triangular) -->
        <div style="position:absolute;left:50%;top:34%;transform:translateX(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:7px solid rgba(160,160,160,1);"></div>
        <!-- Wings (white with gray tips, rotating properly) -->
        <div style="position:absolute;left:2px;top:50%;transform:translateY(-50%);width:30px;height:36px;background:linear-gradient(135deg,rgba(255,255,255,1),rgba(235,235,245,0.98));border-radius:60% 20% 70% 30%;box-shadow:3px 3px 10px rgba(150,180,255,0.25),inset 2px 0 6px rgba(255,255,255,0.8);transform-origin:right center;animation:flapLeft 0.65s ease-in-out infinite;"></div>
        <div style="position:absolute;right:2px;top:50%;transform:translateY(-50%);width:30px;height:36px;background:linear-gradient(225deg,rgba(255,255,255,1),rgba(235,235,245,0.98));border-radius:20% 60% 30% 70%;box-shadow:-3px 3px 10px rgba(150,180,255,0.25),inset -2px 0 6px rgba(255,255,255,0.8);transform-origin:left center;animation:flapRight 0.65s ease-in-out infinite;"></div>
        <!-- Divine sparkles -->
        <div style="position:absolute;left:18%;top:30%;width:4px;height:4px;background:rgba(255,255,255,1);border-radius:50%;box-shadow:0 0 8px rgba(200,220,255,0.9);animation:twinkle 2.2s ease-in-out infinite;"></div>
        <div style="position:absolute;right:20%;top:38%;width:3px;height:3px;background:rgba(240,245,255,0.95);border-radius:50%;box-shadow:0 0 6px rgba(180,200,255,0.8);animation:twinkle 2.5s ease-in-out infinite 0.6s;"></div>
        <!-- Tail (white/light gray) -->
        <div style="position:absolute;left:50%;bottom:14px;transform:translateX(-50%);width:24px;height:18px;background:linear-gradient(to bottom,rgba(255,255,255,0.98),rgba(235,235,235,0.95));border-radius:0 0 50% 50%;"></div>
        <!-- Feet (pink) -->
        <div style="position:absolute;left:44%;bottom:6px;width:10px;height:6px;background:rgba(255,182,193,0.9);border-radius:50%;"></div>
        <div style="position:absolute;right:44%;bottom:6px;width:10px;height:6px;background:rgba(255,182,193,0.9);border-radius:50%;"></div>
      </div>
    `,
    2:` <!-- Eagle -->
      <div style="position:relative;width:115px;height:115px;display:inline-block;animation:bird-hop 2.2s ease-in-out infinite;">
        <!-- Powerful golden aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:108px;height:108px;background:radial-gradient(circle,rgba(255,215,0,0.18),rgba(184,134,11,0.12),transparent 60%);border-radius:50%;animation:pulse-grow 2.8s ease-in-out infinite;"></div>
        <!-- Body (rich brown/golden) -->
        <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:60px;height:54px;background:radial-gradient(ellipse,rgba(120,80,40,1),rgba(100,65,30,0.98));border-radius:56%;box-shadow:0 5px 15px rgba(184,134,11,0.4),inset -2px -2px 8px rgba(200,150,80,0.3);"></div>
        <!-- Chest (lighter brown/white) -->
        <div style="position:absolute;left:50%;top:54%;transform:translateX(-50%);width:32px;height:28px;background:radial-gradient(ellipse,rgba(240,200,160,0.9),rgba(230,190,150,0.8));border-radius:50%;"></div>
        <!-- Head (white/light brown) -->
        <div style="position:absolute;left:50%;top:24%;transform:translateX(-50%);width:44px;height:42px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(250,230,200,0.95));border-radius:54%;animation:head-bob 1.6s ease-in-out infinite;box-shadow:inset -2px -2px 6px rgba(255,240,220,0.5);"></div>
        <!-- TWO eyes (fierce golden with glow) -->
        <div style="position:absolute;left:50%;top:24%;transform:translateX(-50%);display:flex;gap:10px;">
          <div style="width:9px;height:10px;background:radial-gradient(circle,rgba(255,230,0,1),rgba(230,180,40,0.98));border-radius:50%;border:2.5px solid black;animation:blink 6s infinite;box-shadow:0 0 6px rgba(255,215,0,0.7);">
            <div style="position:absolute;top:3px;left:3px;width:3px;height:4px;background:black;border-radius:50%;"></div>
          </div>
          <div style="width:9px;height:10px;background:radial-gradient(circle,rgba(255,230,0,1),rgba(230,180,40,0.98));border-radius:50%;border:2.5px solid black;animation:blink 6s infinite;box-shadow:0 0 6px rgba(255,215,0,0.7);">
            <div style="position:absolute;top:3px;left:3px;width:3px;height:4px;background:black;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Beak (centered, hooked) -->
        <div style="position:absolute;left:50%;top:35%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:12px solid rgba(255,230,0,1);box-shadow:0 0 4px rgba(255,215,0,0.5);"></div>
        <!-- Majestic wings (rotating properly) -->
        <div style="position:absolute;left:-2px;top:52%;transform:translateY(-50%);width:36px;height:44px;background:linear-gradient(135deg,rgba(120,80,40,1),rgba(160,110,50,0.95),rgba(200,150,20,0.8));border-radius:60% 20% 75% 25%;box-shadow:4px 4px 12px rgba(184,134,11,0.45),inset 2px 0 6px rgba(255,200,100,0.35);transform-origin:right center;animation:flapLeft 0.7s ease-in-out infinite;"></div>
        <div style="position:absolute;right:-2px;top:52%;transform:translateY(-50%);width:36px;height:44px;background:linear-gradient(225deg,rgba(120,80,40,1),rgba(160,110,50,0.95),rgba(200,150,20,0.8));border-radius:20% 60% 25% 75%;box-shadow:-4px 4px 12px rgba(184,134,11,0.45),inset -2px 0 6px rgba(255,200,100,0.35);transform-origin:left center;animation:flapRight 0.7s ease-in-out infinite;"></div>
        <!-- Golden sparkles -->
        <div style="position:absolute;left:15%;top:38%;width:4px;height:4px;background:rgba(255,230,0,0.95);border-radius:50%;box-shadow:0 0 8px rgba(255,215,0,0.9);animation:twinkle 2.4s ease-in-out infinite;"></div>
        <div style="position:absolute;right:18%;top:32%;width:3px;height:3px;background:rgba(255,200,80,0.9);border-radius:50%;box-shadow:0 0 6px rgba(255,180,60,0.8);animation:twinkle 2.7s ease-in-out infinite 0.7s;"></div>
        <!-- Tail (fan-shaped, dark brown) -->
        <div style="position:absolute;left:50%;bottom:10px;transform:translateX(-50%);width:28px;height:20px;background:linear-gradient(to bottom,rgba(85,55,25,0.98),rgba(60,40,20,0.9));border-radius:0 0 50% 50%;"></div>
        <!-- Powerful talons -->
        <div style="position:absolute;left:42%;bottom:4px;width:10px;height:8px;background:rgba(255,215,0,0.8);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:42%;bottom:4px;width:10px;height:8px;background:rgba(255,215,0,0.8);border-radius:50% 50% 0 0;"></div>
      </div>
    `,
    3:` <!-- Mallard (green-headed duck) -->
      <div style="position:relative;width:110px;height:105px;display:inline-block;animation:bird-hop 1.8s ease-in-out infinite;">
        <!-- Iridescent aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:102px;height:98px;background:radial-gradient(circle,rgba(0,180,120,0.15),rgba(0,120,200,0.12),transparent 65%);border-radius:50%;animation:pulse-grow 2.6s ease-in-out infinite;"></div>
        <!-- Body (gray/white with depth) -->
        <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:58px;height:48px;background:radial-gradient(ellipse,rgba(180,180,180,1),rgba(200,200,200,0.98));border-radius:55%;box-shadow:0 3px 12px rgba(0,120,200,0.25),inset -2px -2px 6px rgba(220,220,220,0.4);"></div>
        <!-- Breast (vibrant chestnut/rust) -->
        <div style="position:absolute;left:50%;top:52%;transform:translateX(-50%);width:32px;height:24px;background:radial-gradient(ellipse,rgba(160,80,30,0.95),rgba(180,95,50,0.85));border-radius:50%;"></div>
        <!-- Head (vibrant iridescent green) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:42px;height:40px;background:radial-gradient(circle,rgba(50,180,50,1),rgba(0,140,60,0.98));border-radius:56%;box-shadow:inset -2px -2px 8px rgba(0,220,140,0.6),0 0 6px rgba(0,150,100,0.4);animation:head-bob 1.3s ease-in-out infinite;"></div>
        <!-- White neck ring -->
        <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);width:44px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;"></div>
        <!-- TWO eyes (dark, front-facing) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:8px;">
          <div style="width:8px;height:9px;background:black;border-radius:50%;border:2px solid rgba(255,255,255,0.6);animation:blink 4s infinite;">
            <div style="position:absolute;top:2px;left:2px;width:3px;height:3px;background:rgba(255,255,255,0.8);border-radius:50%;"></div>
          </div>
          <div style="width:8px;height:9px;background:black;border-radius:50%;border:2px solid rgba(255,255,255,0.6);animation:blink 4s infinite;">
            <div style="position:absolute;top:2px;left:2px;width:3px;height:3px;background:rgba(255,255,255,0.8);border-radius:50%;"></div>
          </div>
        </div>
        <!-- Bill (centered, yellow) -->
        <div style="position:absolute;left:50%;top:38%;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:10px solid rgba(255,215,0,1);"></div>
        <!-- Wings (gray with blue speculum, rotating properly) -->
        <div style="position:absolute;left:2px;top:54%;transform:translateY(-50%);width:24px;height:30px;background:linear-gradient(135deg,rgba(145,145,145,1),rgba(120,120,120,0.98));border-radius:50% 20% 60% 30%;box-shadow:3px 3px 10px rgba(0,140,255,0.35),inset -2px 2px 5px rgba(0,0,0,0.25);transform-origin:right center;animation:flapLeft 0.6s ease-in-out infinite;">
          <div style="position:absolute;left:4px;top:8px;width:14px;height:12px;background:linear-gradient(135deg,rgba(0,130,230,1),rgba(0,150,255,0.9));border-radius:40%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.4),0 0 6px rgba(0,120,255,0.5);"></div>
        </div>
        <div style="position:absolute;right:2px;top:54%;transform:translateY(-50%);width:24px;height:30px;background:linear-gradient(225deg,rgba(145,145,145,1),rgba(120,120,120,0.98));border-radius:20% 50% 30% 60%;box-shadow:-3px 3px 10px rgba(0,140,255,0.35),inset 2px 2px 5px rgba(0,0,0,0.25);transform-origin:left center;animation:flapRight 0.6s ease-in-out infinite;">
          <div style="position:absolute;right:4px;top:8px;width:14px;height:12px;background:linear-gradient(225deg,rgba(0,130,230,1),rgba(0,150,255,0.9));border-radius:40%;box-shadow:inset -1px 1px 4px rgba(255,255,255,0.4),0 0 6px rgba(0,120,255,0.5);"></div>
        </div>
        <!-- Sparkles -->
        <div style="position:absolute;left:20%;top:32%;width:4px;height:4px;background:rgba(0,200,150,0.95);border-radius:50%;box-shadow:0 0 7px rgba(0,180,130,0.9);animation:twinkle 2.3s ease-in-out infinite;"></div>
        <div style="position:absolute;right:22%;top:40%;width:3px;height:3px;background:rgba(0,150,255,0.9);border-radius:50%;box-shadow:0 0 6px rgba(0,130,220,0.8);animation:twinkle 2.6s ease-in-out infinite 0.5s;"></div>
        <!-- Tail (black curl, centered) -->
        <div style="position:absolute;left:50%;bottom:18px;transform:translateX(-50%);width:20px;height:14px;background:linear-gradient(to bottom,rgba(40,40,40,0.95),rgba(20,20,20,0.9));border-radius:0 0 50% 50%;"></div>
        <!-- Feet (orange) -->
        <div style="position:absolute;left:42%;bottom:8px;width:12px;height:8px;background:rgba(255,140,0,0.9);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:38%;bottom:8px;width:12px;height:8px;background:rgba(255,140,0,0.9);border-radius:50% 50% 0 0;"></div>
      </div>
    `,
    4:` <!-- Owl -->
      <div style="position:relative;width:110px;height:115px;display:inline-block;animation:bounce-slow 2.5s ease-in-out infinite;">
        <!-- Wise golden aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:103px;height:108px;background:radial-gradient(circle,rgba(255,215,0,0.12),rgba(160,100,50,0.1),transparent 65%);border-radius:50%;animation:pulse-grow 3.2s ease-in-out infinite;"></div>
        <!-- Body (richer brown/tan) -->
        <div style="position:absolute;left:50%;top:62%;transform:translate(-50%,-50%);width:64px;height:56px;background:radial-gradient(ellipse,rgba(160,110,60,1),rgba(180,120,70,0.98));border-radius:52%;box-shadow:0 5px 14px rgba(139,90,43,0.35),inset -2px -2px 8px rgba(200,150,100,0.3);"></div>
        <!-- Feather pattern on body (darker spots) -->
        <div style="position:absolute;left:38%;top:56%;width:6px;height:8px;background:rgba(85,55,25,0.4);border-radius:50%;"></div>
        <div style="position:absolute;left:48%;top:60%;width:5px;height:7px;background:rgba(85,55,25,0.4);border-radius:50%;"></div>
        <div style="position:absolute;right:38%;top:58%;width:6px;height:8px;background:rgba(85,55,25,0.4);border-radius:50%;"></div>
        <div style="position:absolute;left:42%;top:68%;width:5px;height:6px;background:rgba(85,55,25,0.4);border-radius:50%;"></div>
        <div style="position:absolute;right:42%;top:66%;width:6px;height:7px;background:rgba(85,55,25,0.4);border-radius:50%;"></div>
        <!-- Large round head (lighter brown) -->
        <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:56px;height:54px;background:radial-gradient(circle,rgba(210,180,140,1),rgba(188,158,118,0.95));border-radius:50%;animation:head-bob 2.8s ease-in-out infinite;"></div>
        <!-- Facial disc (lighter) -->
        <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:48px;height:46px;background:radial-gradient(circle,rgba(245,222,179,0.7),transparent 70%);border-radius:50%;"></div>
        <!-- HUGE wise eyes (glowing amber) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:10px;">
          <div style="width:18px;height:20px;background:radial-gradient(ellipse,rgba(255,230,0,1),rgba(255,200,0,0.98));border-radius:50%;border:3px solid rgba(120,80,40,0.9);position:relative;animation:blink 7s infinite;box-shadow:0 0 8px rgba(255,215,0,0.6);">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:14px;background:black;border-radius:50%;"></div>
            <div style="position:absolute;top:4px;left:6px;width:4px;height:5px;background:rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 0 3px rgba(255,255,255,0.8);"></div>
          </div>
          <div style="width:18px;height:20px;background:radial-gradient(ellipse,rgba(255,230,0,1),rgba(255,200,0,0.98));border-radius:50%;border:3px solid rgba(120,80,40,0.9);position:relative;animation:blink 7s infinite;box-shadow:0 0 8px rgba(255,215,0,0.6);">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:8px;height:14px;background:black;border-radius:50%;"></div>
            <div style="position:absolute;top:4px;left:6px;width:4px;height:5px;background:rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 0 3px rgba(255,255,255,0.8);"></div>
          </div>
        </div>
        <!-- Beak (small, hooked) -->
        <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);width:10px;height:12px;background:linear-gradient(to bottom,rgba(80,80,80,1),rgba(60,60,60,0.95));border-radius:50% 50% 50% 50%;clip-path:polygon(50% 0,0 30%,50% 100%,100% 30%);"></div>
        <!-- Ear tufts (feather horns) -->
        <div style="position:absolute;left:28%;top:12%;width:8px;height:18px;background:linear-gradient(to top,rgba(139,90,43,0.9),rgba(160,100,50,0.7));border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
        <div style="position:absolute;right:28%;top:12%;width:8px;height:18px;background:linear-gradient(to top,rgba(139,90,43,0.9),rgba(160,100,50,0.7));border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
        <!-- Wings (brown, rotating properly) -->
        <div style="position:absolute;left:8px;top:58%;transform:translateY(-50%);width:24px;height:34px;background:linear-gradient(135deg,rgba(120,80,40,1),rgba(100,65,30,0.95));border-radius:50% 20% 60% 40%;box-shadow:2px 2px 10px rgba(139,90,43,0.4),inset 1px 0 5px rgba(0,0,0,0.25);transform-origin:right center;animation:flapLeft 0.75s ease-in-out infinite;"></div>
        <div style="position:absolute;right:8px;top:58%;transform:translateY(-50%);width:24px;height:34px;background:linear-gradient(225deg,rgba(120,80,40,1),rgba(100,65,30,0.95));border-radius:20% 50% 40% 60%;box-shadow:-2px 2px 10px rgba(139,90,43,0.4),inset -1px 0 5px rgba(0,0,0,0.25);transform-origin:left center;animation:flapRight 0.75s ease-in-out infinite;"></div>
        <!-- Mystical sparkles -->
        <div style="position:absolute;left:25%;top:25%;width:3px;height:3px;background:rgba(255,230,0,0.9);border-radius:50%;box-shadow:0 0 6px rgba(255,215,0,0.8);animation:twinkle 2.8s ease-in-out infinite;"></div>
        <div style="position:absolute;right:25%;top:30%;width:3px;height:3px;background:rgba(255,200,80,0.85);border-radius:50%;box-shadow:0 0 5px rgba(255,180,60,0.7);animation:twinkle 3.1s ease-in-out infinite 0.8s;"></div>
        <!-- Talons (dark gray) -->
        <div style="position:absolute;left:40%;bottom:6px;width:14px;height:10px;background:rgba(80,80,80,0.95);border-radius:50% 50% 0 0;">
          <div style="position:absolute;bottom:0;left:3px;width:2.5px;height:8px;background:rgba(50,50,50,0.95);border-radius:2px;"></div>
          <div style="position:absolute;bottom:0;right:3px;width:2.5px;height:8px;background:rgba(50,50,50,0.95);border-radius:2px;"></div>
        </div>
        <div style="position:absolute;right:40%;bottom:6px;width:14px;height:10px;background:rgba(80,80,80,0.95);border-radius:50% 50% 0 0;">
          <div style="position:absolute;bottom:0;left:3px;width:2.5px;height:8px;background:rgba(50,50,50,0.95);border-radius:2px;"></div>
          <div style="position:absolute;bottom:0;right:3px;width:2.5px;height:8px;background:rgba(50,50,50,0.95);border-radius:2px;"></div>
        </div>
      </div>
    `,
    5:` <!-- Peacock -->
      <div style="position:relative;width:120px;height:125px;display:inline-block;animation:bounce-slow 2.8s ease-in-out infinite;">
        <!-- Majestic rainbow aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:115px;height:120px;background:radial-gradient(circle,rgba(138,43,226,0.15),rgba(0,180,150,0.12),rgba(0,120,200,0.1),transparent 65%);border-radius:50%;animation:pulse-grow 3.2s ease-in-out infinite;"></div>
        <!-- Magnificent tail fan base (semicircle with glow) -->
        <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);width:115px;height:90px;background:radial-gradient(ellipse at 50% 100%,rgba(0,200,140,0.5),rgba(0,160,200,0.6),rgba(30,120,180,0.7));border-radius:50% 50% 0 0;animation:peacock-fan 3.5s ease-in-out infinite;box-shadow:0 0 15px rgba(0,180,150,0.3);"></div>

        <!-- Individual tail feathers with eye spots (creating fan pattern) -->
        <!-- Left side feathers -->
        <div style="position:absolute;left:8%;top:22%;width:14px;height:50px;background:linear-gradient(to bottom,rgba(0,200,140,0.8),rgba(0,160,200,0.7));border-radius:50% 50% 30% 30%;transform:rotate(-25deg);">
          <div style="position:absolute;top:6px;left:50%;transform:translateX(-50%);width:11px;height:11px;background:radial-gradient(circle,rgba(100,50,200,1),rgba(50,100,255,0.9));border-radius:50%;border:2px solid rgba(0,220,180,0.8);box-shadow:0 0 6px rgba(100,50,200,0.5);"></div>
        </div>
        <div style="position:absolute;left:18%;top:16%;width:15px;height:58px;background:linear-gradient(to bottom,rgba(0,200,140,0.85),rgba(0,160,200,0.75));border-radius:50% 50% 30% 30%;transform:rotate(-18deg);">
          <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:12px;height:12px;background:radial-gradient(circle,rgba(120,60,220,1),rgba(60,120,255,0.9));border-radius:50%;border:2px solid rgba(0,220,180,0.85);box-shadow:0 0 8px rgba(120,60,220,0.6);"></div>
        </div>
        <div style="position:absolute;left:30%;top:12%;width:16px;height:64px;background:linear-gradient(to bottom,rgba(0,200,140,0.9),rgba(0,160,200,0.8));border-radius:50% 50% 30% 30%;transform:rotate(-10deg);">
          <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:13px;height:13px;background:radial-gradient(circle,rgba(130,70,230,1),rgba(70,130,255,0.95));border-radius:50%;border:2px solid rgba(0,230,190,0.9);box-shadow:0 0 10px rgba(130,70,230,0.7);"></div>
        </div>

        <!-- Center feathers -->
        <div style="position:absolute;left:43%;top:8%;width:16px;height:68px;background:linear-gradient(to bottom,rgba(0,210,150,0.95),rgba(0,170,210,0.85));border-radius:50% 50% 30% 30%;transform:rotate(-3deg);">
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);width:14px;height:14px;background:radial-gradient(circle,rgba(140,80,240,1),rgba(80,140,255,1));border-radius:50%;border:2.5px solid rgba(0,240,200,0.95);box-shadow:0 0 12px rgba(140,80,240,0.8);"></div>
        </div>
        <div style="position:absolute;left:50%;top:6%;transform:translateX(-50%);width:17px;height:70px;background:linear-gradient(to bottom,rgba(0,210,150,1),rgba(0,170,210,0.9));border-radius:50% 50% 30% 30%;">
          <div style="position:absolute;top:14px;left:50%;transform:translateX(-50%);width:15px;height:15px;background:radial-gradient(circle,rgba(150,90,250,1),rgba(90,150,255,1));border-radius:50%;border:2.5px solid rgba(0,250,210,1);box-shadow:0 0 14px rgba(150,90,250,0.9);"></div>
        </div>
        <div style="position:absolute;right:43%;top:8%;width:16px;height:68px;background:linear-gradient(to bottom,rgba(0,210,150,0.95),rgba(0,170,210,0.85));border-radius:50% 50% 30% 30%;transform:rotate(3deg);">
          <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);width:14px;height:14px;background:radial-gradient(circle,rgba(140,80,240,1),rgba(80,140,255,1));border-radius:50%;border:2.5px solid rgba(0,240,200,0.95);box-shadow:0 0 12px rgba(140,80,240,0.8);"></div>
        </div>

        <!-- Right side feathers -->
        <div style="position:absolute;right:30%;top:12%;width:16px;height:64px;background:linear-gradient(to bottom,rgba(0,200,140,0.9),rgba(0,160,200,0.8));border-radius:50% 50% 30% 30%;transform:rotate(10deg);">
          <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:13px;height:13px;background:radial-gradient(circle,rgba(130,70,230,1),rgba(70,130,255,0.95));border-radius:50%;border:2px solid rgba(0,230,190,0.9);box-shadow:0 0 10px rgba(130,70,230,0.7);"></div>
        </div>
        <div style="position:absolute;right:18%;top:16%;width:15px;height:58px;background:linear-gradient(to bottom,rgba(0,200,140,0.85),rgba(0,160,200,0.75));border-radius:50% 50% 30% 30%;transform:rotate(18deg);">
          <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:12px;height:12px;background:radial-gradient(circle,rgba(120,60,220,1),rgba(60,120,255,0.9));border-radius:50%;border:2px solid rgba(0,220,180,0.85);box-shadow:0 0 8px rgba(120,60,220,0.6);"></div>
        </div>
        <div style="position:absolute;right:8%;top:22%;width:14px;height:50px;background:linear-gradient(to bottom,rgba(0,200,140,0.8),rgba(0,160,200,0.7));border-radius:50% 50% 30% 30%;transform:rotate(25deg);">
          <div style="position:absolute;top:6px;left:50%;transform:translateX(-50%);width:11px;height:11px;background:radial-gradient(circle,rgba(100,50,200,1),rgba(50,100,255,0.9));border-radius:50%;border:2px solid rgba(0,220,180,0.8);box-shadow:0 0 6px rgba(100,50,200,0.5);"></div>
        </div>

        <!-- Body (iridescent emerald green/blue) -->
        <div style="position:absolute;left:50%;top:74%;transform:translate(-50%,-50%);width:48px;height:42px;background:radial-gradient(ellipse,rgba(0,150,100,1),rgba(0,120,150,0.98));border-radius:56%;box-shadow:0 4px 10px rgba(0,0,0,0.25),inset -2px -2px 8px rgba(0,220,160,0.6);"></div>

        <!-- Chest (lighter iridescent) -->
        <div style="position:absolute;left:50%;top:70%;transform:translateX(-50%);width:28px;height:22px;background:radial-gradient(ellipse,rgba(0,200,150,0.8),rgba(0,180,180,0.7));border-radius:50%;"></div>

        <!-- Neck (slender, shimmering, centered) -->
        <div style="position:absolute;left:50%;top:58%;transform:translateX(-50%);width:18px;height:26px;background:linear-gradient(to bottom,rgba(0,120,200,1),rgba(0,100,180,0.98));border-radius:45%;"></div>

        <!-- Head (royal blue, front-facing) -->
        <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);width:28px;height:26px;background:radial-gradient(circle,rgba(0,100,200,1),rgba(0,80,160,0.98));border-radius:55%;animation:head-bob 2.8s ease-in-out infinite;"></div>

        <!-- Crown crest (3 feather plumes with eye tips) -->
        <div style="position:absolute;left:38%;top:32%;width:3px;height:10px;background:linear-gradient(to top,rgba(0,100,200,1),rgba(0,150,220,0.9));border-radius:50%;">
          <div style="position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:5px;height:5px;background:radial-gradient(circle,rgba(0,200,255,1),rgba(0,150,255,0.9));border-radius:50%;box-shadow:0 0 5px rgba(0,200,255,0.8);"></div>
        </div>
        <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:3px;height:12px;background:linear-gradient(to top,rgba(0,100,200,1),rgba(0,150,220,0.9));border-radius:50%;">
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:6px;height:6px;background:radial-gradient(circle,rgba(0,220,255,1),rgba(0,170,255,0.95));border-radius:50%;box-shadow:0 0 7px rgba(0,220,255,0.9);"></div>
        </div>
        <div style="position:absolute;right:38%;top:32%;width:3px;height:10px;background:linear-gradient(to top,rgba(0,100,200,1),rgba(0,150,220,0.9));border-radius:50%;">
          <div style="position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:5px;height:5px;background:radial-gradient(circle,rgba(0,200,255,1),rgba(0,150,255,0.9));border-radius:50%;box-shadow:0 0 5px rgba(0,200,255,0.8);"></div>
        </div>

        <!-- TWO eyes (dark with white highlight, front-facing) -->
        <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);display:flex;gap:7px;">
          <div style="width:6px;height:7px;background:black;border-radius:50%;border:1.5px solid rgba(255,255,255,0.8);animation:blink 5.5s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:6px;height:7px;background:black;border-radius:50%;border:1.5px solid rgba(255,255,255,0.8);animation:blink 5.5s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Beak (small, golden, centered) -->
        <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:7px solid rgba(200,160,80,1);"></div>

        <!-- Small wings (emerald, not obscuring tail) -->
        <div style="position:absolute;left:22%;top:70%;transform:translateY(-50%);width:16px;height:20px;background:linear-gradient(135deg,rgba(0,150,100,1),rgba(0,120,150,0.95));border-radius:50% 20% 60% 30%;box-shadow:2px 2px 8px rgba(0,180,150,0.3);transform-origin:right center;animation:flapLeft 0.8s ease-in-out infinite;"></div>
        <div style="position:absolute;right:22%;top:70%;transform:translateY(-50%);width:16px;height:20px;background:linear-gradient(225deg,rgba(0,150,100,1),rgba(0,120,150,0.95));border-radius:20% 50% 30% 60%;box-shadow:-2px 2px 8px rgba(0,180,150,0.3);transform-origin:left center;animation:flapRight 0.8s ease-in-out infinite;"></div>

        <!-- Feet (dark gray, strong) -->
        <div style="position:absolute;left:45%;bottom:6px;width:10px;height:8px;background:rgba(100,100,100,0.95);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:45%;bottom:6px;width:10px;height:8px;background:rgba(100,100,100,0.95);border-radius:50% 50% 0 0;"></div>
      </div>
    `,
    6:` <!-- Parrot -->
      <div style="position:relative;width:110px;height:110px;display:inline-block;animation:bird-hop 1.6s ease-in-out infinite;">
        <!-- Vibrant rainbow aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:102px;height:102px;background:radial-gradient(circle,rgba(255,50,50,0.12),rgba(50,220,50,0.1),rgba(0,120,255,0.12),transparent 65%);border-radius:50%;animation:pulse-grow 2.4s ease-in-out infinite;"></div>
        <!-- Body (vivid green with glow) -->
        <div style="position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);width:52px;height:48px;background:radial-gradient(ellipse,rgba(70,230,70,1),rgba(50,205,50,0.98));border-radius:54%;box-shadow:0 4px 14px rgba(50,205,50,0.35),inset -2px -2px 6px rgba(150,255,150,0.4);"></div>
        <!-- Chest (bright yellow) -->
        <div style="position:absolute;left:50%;top:56%;transform:translateX(-50%);width:28px;height:24px;background:radial-gradient(ellipse,rgba(255,255,50,0.95),rgba(255,235,0,0.85));border-radius:50%;"></div>
        <!-- Head (vibrant red) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:40px;height:38px;background:radial-gradient(circle,rgba(255,70,70,1),rgba(240,30,70,0.98));border-radius:52%;animation:head-bob 1.2s ease-in-out infinite;box-shadow:inset -2px -2px 6px rgba(255,150,150,0.4);"></div>
        <!-- TWO eyes (bright, intelligent, front-facing) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);display:flex;gap:8px;">
          <div style="width:9px;height:10px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(200,200,200,0.95));border-radius:50%;border:2.5px solid black;">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:5px;height:5px;background:black;border-radius:50%;animation:blink 4s infinite;"></div>
            <div style="position:absolute;top:2px;left:3px;width:2.5px;height:2.5px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:9px;height:10px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(200,200,200,0.95));border-radius:50%;border:2.5px solid black;">
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:5px;height:5px;background:black;border-radius:50%;animation:blink 4s infinite;"></div>
            <div style="position:absolute;top:2px;left:3px;width:2.5px;height:2.5px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Beak (centered, curved) -->
        <div style="position:absolute;left:50%;top:38%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:12px solid rgba(80,80,80,1);"></div>
        <!-- Colorful wings (vibrant blue, rotating properly) -->
        <div style="position:absolute;left:4px;top:54%;transform:translateY(-50%);width:26px;height:32px;background:linear-gradient(135deg,rgba(0,130,255,1),rgba(0,180,255,0.95));border-radius:50% 20% 65% 35%;box-shadow:3px 3px 12px rgba(0,150,255,0.55),inset 1px 0 6px rgba(100,200,255,0.45);transform-origin:right center;animation:flapLeft 0.5s ease-in-out infinite;">
          <div style="position:absolute;left:6px;top:16px;width:14px;height:8px;background:linear-gradient(135deg,rgba(255,50,50,0.8),rgba(220,20,60,0.7));border-radius:40%;"></div>
        </div>
        <div style="position:absolute;right:4px;top:54%;transform:translateY(-50%);width:26px;height:32px;background:linear-gradient(225deg,rgba(0,130,255,1),rgba(0,180,255,0.95));border-radius:20% 50% 35% 65%;box-shadow:-3px 3px 12px rgba(0,150,255,0.55),inset -1px 0 6px rgba(100,200,255,0.45);transform-origin:left center;animation:flapRight 0.5s ease-in-out infinite;">
          <div style="position:absolute;right:6px;top:16px;width:14px;height:8px;background:linear-gradient(225deg,rgba(255,50,50,0.8),rgba(220,20,60,0.7));border-radius:40%;"></div>
        </div>
        <!-- Tropical sparkles -->
        <div style="position:absolute;left:18%;top:35%;width:4px;height:4px;background:rgba(255,255,0,0.95);border-radius:50%;box-shadow:0 0 8px rgba(255,230,0,0.9);animation:twinkle 2.1s ease-in-out infinite;"></div>
        <div style="position:absolute;right:20%;top:40%;width:3px;height:3px;background:rgba(255,70,70,0.9);border-radius:50%;box-shadow:0 0 6px rgba(255,50,50,0.8);animation:twinkle 2.4s ease-in-out infinite 0.6s;"></div>
        <div style="position:absolute;right:25%;top:30%;width:3px;height:3px;background:rgba(0,200,255,0.9);border-radius:50%;box-shadow:0 0 6px rgba(0,180,230,0.8);animation:twinkle 2.6s ease-in-out infinite 1.2s;"></div>
        <!-- Tail (long, colorful, centered) -->
        <div style="position:absolute;left:50%;bottom:18px;transform:translateX(-50%);width:24px;height:20px;background:linear-gradient(to bottom,rgba(0,100,255,0.95),rgba(50,205,50,0.85),rgba(255,50,50,0.8));border-radius:0 0 50% 50%;box-shadow:0 2px 6px rgba(0,0,0,0.15);"></div>
        <!-- Feet (gray) -->
        <div style="position:absolute;left:44%;bottom:8px;width:10px;height:8px;background:rgba(120,120,120,0.9);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:44%;bottom:8px;width:10px;height:8px;background:rgba(120,120,120,0.9);border-radius:50% 50% 0 0;"></div>
        <!-- Perching claws -->
        <div style="position:absolute;left:46%;bottom:4px;width:2px;height:6px;background:rgba(80,80,80,0.95);border-radius:2px;"></div>
        <div style="position:absolute;right:46%;bottom:4px;width:2px;height:6px;background:rgba(80,80,80,0.95);border-radius:2px;"></div>
      </div>
    `,
    7:` <!-- Swan -->
      <div style="position:relative;width:115px;height:120px;display:inline-block;animation:bounce-slow 2.5s ease-in-out infinite;">
        <!-- Graceful white/blue aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:110px;height:114px;background:radial-gradient(circle,rgba(255,255,255,0.2),rgba(200,220,255,0.15),transparent 65%);border-radius:50%;animation:pulse-grow 3.5s ease-in-out infinite;"></div>
        <!-- Body (pure white with glow) -->
        <div style="position:absolute;left:50%;top:70%;transform:translate(-50%,-50%);width:62px;height:52px;background:radial-gradient(ellipse,rgba(255,255,255,1),rgba(252,252,255,0.98));border-radius:56%;box-shadow:0 5px 16px rgba(200,220,255,0.35),inset -2px -2px 8px rgba(255,255,255,0.7);"></div>
        <!-- Neck (elegant, centered) -->
        <div style="position:absolute;left:50%;top:46%;transform:translateX(-50%);width:18px;height:30px;background:linear-gradient(to bottom,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:50%;"></div>
        <!-- Head (white, elegant, front-facing) -->
        <div style="position:absolute;left:50%;top:20%;transform:translateX(-50%);width:32px;height:30px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:52%;animation:head-bob 2.5s ease-in-out infinite;"></div>
        <!-- TWO eyes (dark, serene, front-facing) -->
        <div style="position:absolute;left:50%;top:20%;transform:translateX(-50%);display:flex;gap:7px;">
          <div style="width:6px;height:7px;background:black;border-radius:50%;animation:blink 6s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:6px;height:7px;background:black;border-radius:50%;animation:blink 6s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Beak (orange, centered) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid rgba(255,140,0,1);"></div>
        <div style="position:absolute;left:50%;top:16%;transform:translateX(-50%);width:12px;height:10px;background:rgba(0,0,0,0.9);border-radius:50%;"></div>
        <!-- Wings (white, elegant, rotating properly) -->
        <div style="position:absolute;left:4px;top:66%;transform:translateY(-50%);width:30px;height:34px;background:linear-gradient(135deg,rgba(255,255,255,1),rgba(250,250,255,0.98));border-radius:60% 20% 70% 30%;box-shadow:3px 3px 14px rgba(200,220,255,0.35),inset 2px 0 8px rgba(255,255,255,0.8);transform-origin:right center;animation:flapLeft 0.75s ease-in-out infinite;"></div>
        <div style="position:absolute;right:4px;top:66%;transform:translateY(-50%);width:30px;height:34px;background:linear-gradient(225deg,rgba(255,255,255,1),rgba(250,250,255,0.98));border-radius:20% 60% 30% 70%;box-shadow:-3px 3px 14px rgba(200,220,255,0.35),inset -2px 0 8px rgba(255,255,255,0.8);transform-origin:left center;animation:flapRight 0.75s ease-in-out infinite;"></div>
        <!-- Elegant sparkles -->
        <div style="position:absolute;left:22%;top:35%;width:4px;height:4px;background:rgba(255,255,255,1);border-radius:50%;box-shadow:0 0 10px rgba(220,235,255,0.95);animation:twinkle 2.8s ease-in-out infinite;"></div>
        <div style="position:absolute;right:24%;top:42%;width:3px;height:3px;background:rgba(245,250,255,0.95);border-radius:50%;box-shadow:0 0 8px rgba(200,220,255,0.9);animation:twinkle 3.1s ease-in-out infinite 0.8s;"></div>
        <!-- Tail (white, centered) -->
        <div style="position:absolute;left:50%;bottom:16px;transform:translateX(-50%);width:24px;height:18px;background:linear-gradient(to bottom,rgba(255,255,255,0.98),rgba(250,250,250,0.95));border-radius:0 0 50% 50%;"></div>
        <!-- Feet (black, webbed) -->
        <div style="position:absolute;left:42%;bottom:6px;width:12px;height:8px;background:rgba(40,40,40,0.95);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:42%;bottom:6px;width:12px;height:8px;background:rgba(40,40,40,0.95);border-radius:50% 50% 0 0;"></div>
      </div>
    `,
    8:` <!-- Fancy Flamingo - detailed with leg tuck animation and swing wings -->
      <div style="position:relative;width:240px;height:280px;display:flex;align-items:center;justify-content:center;">
        <div style="transform:scale(0.55);transform-origin:center;">
          <div style="position:relative;width:300px;height:440px;animation:flamingo-sway 3s ease-in-out infinite;">
            <!-- Left foot (repositioned) -->
            <div style="position:absolute;bottom:5px;left:101px;z-index:9;">
              <div style="position:relative;width:70px;height:40px;">
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                <div style="position:absolute;width:58px;height:28px;background:linear-gradient(180deg, rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.1) 100%);top:8px;left:6px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:-1px;top:3px;transform:rotate(-25deg);transform-origin:right center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;left:2px;top:50%;transform:translateY(-50%);"></div></div>
                <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"><div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;left:50%;transform:translateX(-50%);bottom:2px;"></div></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:39px;top:6px;transform:rotate(19deg);transform-origin:left center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;right:2px;top:50%;transform:translateY(-50%);"></div></div>
              </div>
            </div>
            <!-- Right leg with tuck animation -->
            <div style="position:absolute;bottom:42px;left:180px;z-index:8;">
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:5px;bottom:110px;left:5px;transform-origin:top center;animation:flamingo-upper-leg-tuck 8s ease-in-out infinite;">
                <div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:3px;"></div>
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;bottom:-10px;left:-2px;"></div>
                <div style="position:absolute;width:8px;height:100px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:4px;bottom:-108px;left:1px;transform-origin:top center;animation:flamingo-lower-leg-fold 8s ease-in-out infinite;">
                  <div style="position:absolute;width:2px;height:80px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:2px;"></div>
                  <div style="position:absolute;bottom:-39px;left:-31px;transform-origin:top center;animation:flamingo-foot-tuck 8s ease-in-out infinite;">
                    <div style="position:relative;width:70px;height:40px;">
                      <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                      <div style="position:absolute;width:58px;height:28px;background:linear-gradient(rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.1) 100%);top:1px;left:5px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:0px;top:7px;transform:rotate(-21deg);transform-origin:right center;z-index:2;"></div>
                      <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:40px;top:7px;transform:rotate(16deg);transform-origin:left center;z-index:2;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Left leg (standing) -->
            <div style="position:absolute;bottom:42px;left:130px;z-index:10;">
              <div style="position:absolute;width:8px;height:95px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:4px;bottom:0;left:2px;"><div style="position:absolute;width:2px;height:75px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:2px;"></div></div>
              <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;bottom:93px;left:-1px;"></div>
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:5px;bottom:105px;left:1px;transform:rotate(-5deg);"><div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:3px;"></div></div>
            </div>
            <!-- Tail feathers (rotated -82deg) -->
            <div style="position:absolute;top:200px;left:70px;z-index:15;transform-origin:right center;transform:rotate(-82deg);animation:tail-wag 2s ease-in-out infinite;">
              <div style="position:absolute;width:35px;height:18px;background:radial-gradient(ellipse at 50% 50%, #fda4af, #fb7185);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;top:3px;left:-18px;transform:rotate(25deg);box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:30px;height:15px;background:radial-gradient(ellipse at 50% 50%, #fecdd3, #fda4af);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;left:-10px;top:22px;transform:rotate(5deg);animation:breathe-custom 3s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:25px;height:12px;background:radial-gradient(ellipse at 50% 50%, #fff1f2, #fecdd3);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;left:-3px;top:34px;transform:rotate(-10deg);box-shadow:inset 2px 2px 3px rgba(255,255,255,0.4);"></div>
            </div>
            <!-- Left wing (swing animation) -->
            <div style="position:absolute;top:186px;left:80px;z-index:18;transform-origin:right top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 60% 40%, #fecdd3, #fda4af, #fb7185);border:3px solid #9f1239;border-radius:60% 40% 70% 30%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.5),inset -2px -2px 6px rgba(159,18,57,0.2);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(159,18,57,0.3);top:15px;left:5px;transform:rotate(-10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(159,18,57,0.3);top:25px;left:8px;transform:rotate(-8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(159,18,57,0.3);top:35px;left:10px;transform:rotate(-5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Right wing (swing animation) -->
            <div style="position:absolute;top:186px;left:192px;z-index:18;transform-origin:left top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 40% 40%, #fecdd3, #fda4af, #fb7185);border:3px solid #9f1239;border-radius:40% 60% 30% 70%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.5),inset -2px -2px 6px rgba(159,18,57,0.2);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(159,18,57,0.3);top:15px;right:5px;transform:rotate(10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(159,18,57,0.3);top:25px;right:8px;transform:rotate(8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(159,18,57,0.3);top:35px;right:10px;transform:rotate(5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Body (repositioned) -->
            <div style="position:absolute;width:120px;height:80px;background:radial-gradient(ellipse at 45% 35%, #fff1f2 0%, #fecdd3 30%, #fda4af 60%, #fb7185 100%);border:4px solid #9f1239;border-radius:55% 55% 50% 50%;top:179px;left:97px;z-index:20;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.6),inset -5px -5px 12px rgba(159,18,57,0.2);">
              <div style="position:absolute;width:40px;height:25px;background:rgba(255,255,255,0.5);border-radius:50%;top:10px;left:20px;filter:blur(5px);"></div>
              <div style="position:absolute;width:20px;height:15px;background:rgba(255,255,255,0.3);border-radius:50%;top:20px;right:25px;filter:blur(4px);"></div>
            </div>
            <!-- Neck (repositioned) -->
            <div style="position:absolute;top:42px;left:114px;z-index:25;transform-origin:bottom center;animation:neck-bob 4s ease-in-out infinite;">
              <svg width="80" height="160" viewBox="0 0 80 160" fill="none"><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="#9f1239" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.3"/><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="url(#fancyNeck8)" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M50 150 Q62 118 45 82 Q28 46 40 18" stroke="rgba(255,255,255,0.4)" stroke-width="6" stroke-linecap="round" fill="none"/><defs><linearGradient id="fancyNeck8" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fb7185"/><stop offset="50%" style="stop-color:#fda4af"/><stop offset="100%" style="stop-color:#fecdd3"/></linearGradient></defs></svg>
            </div>
            <!-- Head (repositioned) -->
            <div style="position:absolute;width:65px;height:55px;background:radial-gradient(ellipse at 40% 35%, #fff1f2 0%, #fecdd3 40%, #fda4af 80%, #fb7185 100%);border:3px solid #9f1239;border-radius:50% 50% 45% 45%;top:9px;left:136px;z-index:40;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.6),inset -3px -3px 8px rgba(159,18,57,0.2);overflow:visible;">
              <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:6px;left:10px;filter:blur(4px);"></div>
              <!-- Tuft -->
              <div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);z-index:45;">
                <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 80%, #fda4af, #fb7185);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:-8px;--base-rotate:-15deg;transform:rotate(-15deg);transform-origin:bottom center;animation:tuft-sway 2s ease-in-out infinite;"></div>
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fecdd3, #fda4af);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:-2px;--base-rotate:0deg;transform-origin:bottom center;animation:tuft-sway 2.2s ease-in-out infinite 0.1s;"></div>
                <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 80%, #fda4af, #fb7185);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:5px;--base-rotate:15deg;transform:rotate(15deg);transform-origin:bottom center;animation:tuft-sway 1.8s ease-in-out infinite 0.2s;"></div>
              </div>
              <!-- Eyes -->
              <div style="position:absolute;top:16px;left:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <div style="position:absolute;top:16px;right:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <!-- Beak -->
              <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:40px;height:20px;background:radial-gradient(ellipse at 50% 30%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:30% 30% 50% 50%;z-index:41;"><div style="position:absolute;width:12px;height:6px;background:rgba(255,255,255,0.4);border-radius:50%;top:3px;left:8px;filter:blur(1px);"></div></div>
              <div style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:30px;height:14px;background:radial-gradient(ellipse at 50% 20%, #44403c, #1c1917);border:2px solid #0c0a09;border-radius:20% 20% 50% 50%;z-index:42;"></div>
              <!-- Blush -->
              <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:space-around;padding:0 8px;">
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #f472b6, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #f472b6, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    9:` <!-- Royal Swan (elegant with crown) -->
      <div style="position:relative;width:115px;height:125px;display:inline-block;animation:bounce-slow 2.8s ease-in-out infinite;">
        <!-- Majestic body (pure white with golden aura) -->
        <div style="position:absolute;left:50%;top:70%;transform:translate(-50%,-50%);width:64px;height:54px;background:radial-gradient(ellipse,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:56%;box-shadow:0 4px 14px rgba(255,215,0,0.3),0 2px 8px rgba(0,0,0,0.15);"></div>
        <!-- Neck (elegant, centered) -->
        <div style="position:absolute;left:50%;top:46%;transform:translateX(-50%);width:20px;height:32px;background:linear-gradient(to bottom,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:50%;"></div>
        <!-- Head (white, regal, front-facing) -->
        <div style="position:absolute;left:50%;top:18%;transform:translateX(-50%);width:36px;height:32px;background:radial-gradient(circle,rgba(255,255,255,1),rgba(250,250,250,0.98));border-radius:52%;animation:head-bob 2.8s ease-in-out infinite;"></div>
        <!-- Golden crown (centered above head) -->
        <div style="position:absolute;left:50%;top:6%;transform:translateX(-50%);width:30px;height:14px;background:linear-gradient(to top,rgba(255,215,0,1),rgba(255,235,0,0.95));border-radius:50% 50% 0 0;box-shadow:0 0 8px rgba(255,215,0,0.6);"></div>
        <div style="position:absolute;left:44%;top:1%;width:4px;height:9px;background:rgba(255,215,0,1);border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
        <div style="position:absolute;left:50%;top:-1%;transform:translateX(-50%);width:5px;height:10px;background:rgba(255,215,0,1);border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
        <div style="position:absolute;right:44%;top:1%;width:4px;height:9px;background:rgba(255,215,0,1);border-radius:50% 50% 0 0;clip-path:polygon(50% 0,0 100%,100% 100%);"></div>
        <!-- Jewel on crown (ruby, centered) -->
        <div style="position:absolute;left:50%;top:8%;transform:translateX(-50%);width:7px;height:7px;background:radial-gradient(circle,rgba(220,20,60,1),rgba(178,34,34,0.9));border-radius:50%;box-shadow:0 0 8px rgba(220,20,60,0.8);"></div>
        <!-- TWO eyes (dark, noble, front-facing) -->
        <div style="position:absolute;left:50%;top:20%;transform:translateX(-50%);display:flex;gap:8px;">
          <div style="width:6px;height:7px;background:black;border-radius:50%;animation:blink 7s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:6px;height:7px;background:black;border-radius:50%;animation:blink 7s infinite;">
            <div style="position:absolute;top:1px;left:1.5px;width:2px;height:2px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Beak (orange/gold, centered) -->
        <div style="position:absolute;left:50%;top:28%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:9px solid rgba(255,165,0,1);box-shadow:0 0 4px rgba(255,215,0,0.5);"></div>
        <div style="position:absolute;left:50%;top:16%;transform:translateX(-50%);width:12px;height:11px;background:rgba(0,0,0,0.9);border-radius:50%;"></div>
        <!-- Wings (white with golden shimmer, rotating properly) -->
        <div style="position:absolute;left:4px;top:66%;transform:translateY(-50%);width:32px;height:36px;background:linear-gradient(135deg,rgba(255,255,255,1),rgba(252,252,255,0.98),rgba(255,250,220,0.65));border-radius:60% 20% 70% 30%;box-shadow:4px 4px 16px rgba(255,215,0,0.4),inset 2px 0 10px rgba(255,248,230,0.65);transform-origin:right center;animation:flapLeft 0.75s ease-in-out infinite;"></div>
        <div style="position:absolute;right:4px;top:66%;transform:translateY(-50%);width:32px;height:36px;background:linear-gradient(225deg,rgba(255,255,255,1),rgba(252,252,255,0.98),rgba(255,250,220,0.65));border-radius:20% 60% 30% 70%;box-shadow:-4px 4px 16px rgba(255,215,0,0.4),inset -2px 0 10px rgba(255,248,230,0.65);transform-origin:left center;animation:flapRight 0.75s ease-in-out infinite;"></div>
        <!-- Royal golden sparkles -->
        <div style="position:absolute;left:25%;top:35%;width:4px;height:4px;background:rgba(255,240,200,1);border-radius:50%;box-shadow:0 0 10px rgba(255,220,150,0.95);animation:twinkle 2.6s ease-in-out infinite;"></div>
        <div style="position:absolute;right:28%;top:42%;width:4px;height:4px;background:rgba(255,230,180,0.95);border-radius:50%;box-shadow:0 0 9px rgba(255,210,140,0.9);animation:twinkle 2.9s ease-in-out infinite 0.7s;"></div>
        <div style="position:absolute;left:50%;top:32%;width:3px;height:3px;background:rgba(255,250,210,0.9);border-radius:50%;box-shadow:0 0 8px rgba(255,235,180,0.85);animation:twinkle 3.2s ease-in-out infinite 1.3s;"></div>
        <!-- Tail (white with golden tips, centered) -->
        <div style="position:absolute;left:50%;bottom:16px;transform:translateX(-50%);width:26px;height:20px;background:linear-gradient(to bottom,rgba(255,255,255,0.98),rgba(250,250,250,0.95),rgba(255,250,205,0.6));border-radius:0 0 50% 50%;"></div>
        <!-- Feet (black, webbed) -->
        <div style="position:absolute;left:42%;bottom:6px;width:12px;height:8px;background:rgba(40,40,40,0.95);border-radius:50% 50% 0 0;"></div>
        <div style="position:absolute;right:42%;bottom:6px;width:12px;height:8px;background:rgba(40,40,40,0.95);border-radius:50% 50% 0 0;"></div>
        <!-- Royal aura effect -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:95px;height:95px;background:radial-gradient(circle,rgba(255,215,0,0.15),transparent 65%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
      </div>
    `,
    10:` <!-- Penguin Buddy -->
      <div style="position:relative;width:115px;height:125px;display:inline-block;animation:penguin-waddle 6s ease-in-out infinite;">
        <!-- Tail -->
        <div style="position:absolute;top:100px;left:50%;transform:translateX(-50%);z-index:5;animation:penguin-tail 6s ease-in-out infinite;">
          <div style="width:14px;height:12px;background:radial-gradient(ellipse at 50% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:40% 40% 60% 60%;"></div>
        </div>
        <!-- Left foot -->
        <div style="position:absolute;top:105px;left:38px;z-index:10;transform-origin:top center;animation:penguin-foot-l 6s ease-in-out infinite;">
          <div style="width:18px;height:9px;background:radial-gradient(ellipse at 50% 35%, #fdba74, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 45% 45%;"></div>
        </div>
        <!-- Right foot -->
        <div style="position:absolute;top:105px;right:38px;z-index:10;transform-origin:top center;animation:penguin-foot-r 6s ease-in-out infinite;">
          <div style="width:18px;height:9px;background:radial-gradient(ellipse at 50% 35%, #fdba74, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 45% 45%;"></div>
        </div>
        <!-- Left flipper -->
        <div style="position:absolute;top:46px;left:29px;z-index:15;transform-origin:center top;transform:rotate(-32deg);animation:penguin-flip-l 6s ease-in-out infinite;">
          <div style="width:16px;height:34px;background:radial-gradient(ellipse at 60% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:25% 25% 65% 65%;"></div>
        </div>
        <!-- Right flipper -->
        <div style="position:absolute;top:45px;left:71px;z-index:15;transform-origin:center top;transform:rotate(34deg);animation:penguin-flip-r 6s ease-in-out infinite;">
          <div style="width:16px;height:34px;background:radial-gradient(ellipse at 40% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:25% 25% 65% 65%;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:65px;height:74px;background:radial-gradient(ellipse at 45% 35%, #475569, #1e293b);border:2px solid #0f172a;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:34px;left:50%;transform:translateX(-50%);z-index:20;overflow:hidden;">
          <!-- Belly -->
          <div style="position:absolute;width:46px;height:58px;background:radial-gradient(ellipse at 50% 40%, #ffffff, #e2e8f0);border-radius:50% 50% 45% 45%;bottom:-4px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:46px;height:42px;background:radial-gradient(ellipse at 45% 35%, #475569, #1e293b);border:2px solid #0f172a;border-radius:50% 50% 45% 45%;top:8px;left:50%;transform:translateX(-50%);z-index:40;overflow:visible;">
          <!-- White face patches -->
          <div style="position:absolute;width:15px;height:18px;background:radial-gradient(ellipse, #ffffff, #e2e8f0);border-radius:50%;top:10px;left:4px;"></div>
          <div style="position:absolute;width:15px;height:18px;background:radial-gradient(ellipse, #ffffff, #e2e8f0);border-radius:50%;top:10px;right:4px;"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:14px;left:9px;width:7px;height:7px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <div style="position:absolute;top:14px;right:9px;width:7px;height:7px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Beak -->
          <div style="position:absolute;top:22px;left:50%;transform:translateX(-50%);width:10px;height:8px;background:radial-gradient(ellipse at 50% 30%, #fcd34d, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;z-index:41;"></div>
          <!-- Blush -->
          <div style="position:absolute;top:24px;left:4px;width:6px;height:3px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.5;"></div>
          <div style="position:absolute;top:24px;right:4px;width:6px;height:3px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.5;"></div>
        </div>
      </div>
    `,
    11:` <!-- Quacky Duck -->
      <div style="position:relative;width:115px;height:145px;display:inline-block;animation:duck-waddle 5s ease-in-out infinite;">
        <!-- Tail -->
        <div style="position:absolute;top:72px;left:50%;transform:translateX(-50%);z-index:5;animation:duck-tail-wag 5s ease-in-out infinite;">
          <div style="width:12px;height:9px;background:radial-gradient(ellipse at 50% 60%, #fef3c7, #fde047, #eab308);border:1px solid #a16207;border-radius:30% 30% 60% 60%;"></div>
          <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse at 50% 70%, #fef9c3, #fde047);border:1px solid #a16207;border-radius:50% 50% 30% 30%;left:3px;top:-5px;transform:rotate(10deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:95px;left:38px;z-index:10;transform-origin:top center;animation:duck-leg-l 5s ease-in-out infinite;">
          <div style="width:9px;height:14px;background:radial-gradient(ellipse at 40% 40%, #fdba74, #fb923c, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:-4px;width:20px;height:10px;">
            <div style="position:absolute;width:16px;height:8px;background:linear-gradient(180deg, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0.15) 100%);top:2px;left:2px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:0;top:1px;transform:rotate(-25deg);"></div>
            <div style="position:absolute;width:3px;height:8px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:8px;top:2px;"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;right:0;top:1px;transform:rotate(25deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:95px;right:38px;z-index:10;transform-origin:top center;animation:duck-leg-r 5s ease-in-out infinite;">
          <div style="width:9px;height:14px;background:radial-gradient(ellipse at 60% 40%, #fdba74, #fb923c, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:-4px;width:20px;height:10px;">
            <div style="position:absolute;width:16px;height:8px;background:linear-gradient(180deg, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0.15) 100%);top:2px;left:2px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:0;top:1px;transform:rotate(-25deg);"></div>
            <div style="position:absolute;width:3px;height:8px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:8px;top:2px;"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;right:0;top:1px;transform:rotate(25deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:58px;left:22px;z-index:18;transform-origin:right center;animation:duck-wing-l 0.4s ease-in-out infinite;">
          <div style="width:20px;height:26px;background:radial-gradient(ellipse at 60% 35%, #fef9c3, #fde047, #eab308);border:2px solid #a16207;border-radius:55% 45% 65% 35%;">
            <div style="position:absolute;width:12px;height:1px;background:rgba(161,98,7,0.3);top:7px;left:3px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(161,98,7,0.3);top:12px;left:4px;"></div>
            <div style="position:absolute;width:8px;height:1px;background:rgba(161,98,7,0.3);top:17px;left:5px;"></div>
          </div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:58px;right:22px;z-index:18;transform-origin:left center;animation:duck-wing-r 0.4s ease-in-out infinite;">
          <div style="width:20px;height:26px;background:radial-gradient(ellipse at 40% 35%, #fef9c3, #fde047, #eab308);border:2px solid #a16207;border-radius:45% 55% 35% 65%;">
            <div style="position:absolute;width:12px;height:1px;background:rgba(161,98,7,0.3);top:7px;right:3px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(161,98,7,0.3);top:12px;right:4px;"></div>
            <div style="position:absolute;width:8px;height:1px;background:rgba(161,98,7,0.3);top:17px;right:5px;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:54px;height:44px;background:radial-gradient(ellipse at 45% 35%, #fef9c3, #fde047 35%, #eab308 70%, #ca8a04);border:2px solid #a16207;border-radius:50%;top:55px;left:50%;transform:translateX(-50%);z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:5px;left:8px;filter:blur(3px);"></div>
          <div style="position:absolute;width:30px;height:22px;background:radial-gradient(ellipse at 50% 40%, #fffbeb, #fef3c7);border-radius:50%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:50px;height:44px;background:radial-gradient(ellipse at 45% 35%, #fef9c3, #fde047 40%, #eab308 80%, #ca8a04);border:2px solid #a16207;border-radius:50%;top:23px;left:32px;z-index:40;animation:duck-head-bob 3s ease-in-out infinite;">
          <div style="position:absolute;width:14px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:4px;left:7px;filter:blur(3px);"></div>
          <!-- Happy eyes -->
          <div style="position:absolute;top:12px;left:9px;width:10px;height:9px;background:radial-gradient(circle at 40% 35%, #1c1917, #000);border-radius:50% 50% 50% 50% / 70% 70% 30% 30%;">
            <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:1px;left:2px;"></div>
          </div>
          <div style="position:absolute;top:12px;right:9px;width:10px;height:9px;background:radial-gradient(circle at 40% 35%, #1c1917, #000);border-radius:50% 50% 50% 50% / 70% 70% 30% 30%;">
            <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:1px;left:2px;"></div>
          </div>
          <!-- Quacking bill -->
          <div style="position:absolute;top:24px;left:50%;transform:translateX(-50%);z-index:41;">
            <div style="width:22px;height:9px;background:radial-gradient(ellipse at 50% 30%, #fdba74, #fb923c 50%, #ea580c);border:2px solid #c2410c;border-radius:45% 45% 50% 50% / 50% 50% 50% 50%;position:relative;z-index:2;">
              <div style="position:absolute;width:2px;height:2px;background:rgba(194,65,12,0.5);border-radius:50%;top:3px;left:6px;"></div>
              <div style="position:absolute;width:2px;height:2px;background:rgba(194,65,12,0.5);border-radius:50%;top:3px;right:6px;"></div>
            </div>
            <div style="position:absolute;width:18px;height:5px;background:radial-gradient(ellipse at 50% 60%, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:30% 30% 50% 50%;top:7px;left:50%;transform:translateX(-50%);z-index:1;animation:duck-quack 2s ease-in-out infinite;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:23px;left:3px;width:7px;height:4px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <div style="position:absolute;top:23px;right:3px;width:7px;height:4px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    12:` <!-- Rooster Buddy -->
      <div style="position:relative;width:115px;height:145px;animation:rooster-strut 1.8s ease-in-out infinite;">
        <!-- Tail feathers - centered behind body -->
        <div style="position:absolute;top:42px;left:41px;z-index:5;animation:rooster-tail-sway 2.5s ease-in-out infinite;transform-origin:bottom center;">
          <!-- Outer green (left) -->
          <div style="position:absolute;width:8px;height:42px;background:linear-gradient(180deg, #064e3b 0%, #047857 25%, #10b981 45%, #34d399 55%, #10b981 75%, #047857 90%, #064e3b 100%);border:1px solid #022c22;border-radius:50% 50% 15% 15%;left:-15px;top:4px;transform:rotate(-30deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.3);"></div>
          <!-- Inner purple (left) -->
          <div style="position:absolute;width:8px;height:46px;background:linear-gradient(180deg, #1e1b4b 0%, #3730a3 20%, #6366f1 40%, #818cf8 50%, #6366f1 60%, #3730a3 80%, #1e1b4b 100%);border:1px solid #0f0a3c;border-radius:50% 50% 15% 15%;left:-8px;top:-2px;transform:rotate(-15deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.25);"></div>
          <!-- Center dark (tallest) -->
          <div style="position:absolute;width:9px;height:52px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 20%, #334155 40%, #475569 50%, #334155 60%, #1e293b 80%, #0f172a 100%);border:1px solid #020617;border-radius:50% 50% 15% 15%;left:-4px;top:-8px;transform-origin:bottom center;box-shadow:inset 1px 1px 5px rgba(255,255,255,0.2);"></div>
          <!-- Inner purple (right) -->
          <div style="position:absolute;width:8px;height:46px;background:linear-gradient(180deg, #1e1b4b 0%, #3730a3 20%, #6366f1 40%, #818cf8 50%, #6366f1 60%, #3730a3 80%, #1e1b4b 100%);border:1px solid #0f0a3c;border-radius:50% 50% 15% 15%;left:0px;top:-2px;transform:rotate(15deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.25);"></div>
          <!-- Outer green (right) -->
          <div style="position:absolute;width:8px;height:42px;background:linear-gradient(180deg, #064e3b 0%, #047857 25%, #10b981 45%, #34d399 55%, #10b981 75%, #047857 90%, #064e3b 100%);border:1px solid #022c22;border-radius:50% 50% 15% 15%;left:8px;top:4px;transform:rotate(30deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.3);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:100px;left:41px;z-index:10;transform-origin:top center;animation:rooster-leg-l 1.8s ease-in-out infinite;">
          <div style="width:9px;height:15px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fde68a 30%, #eab308 60%, #ca8a04 100%);border:1px solid #92400e;border-radius:50% 50% 40% 40%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;top:13px;left:3px;width:4px;height:15px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:30%;"></div>
          <div style="position:absolute;top:26px;left:-2px;width:14px;height:8px;">
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:0;top:3px;transform:rotate(-35deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:6px;top:1px;"></div>
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;right:0;top:3px;transform:rotate(35deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:100px;right:41px;z-index:10;transform-origin:top center;animation:rooster-leg-r 1.8s ease-in-out infinite;">
          <div style="width:9px;height:15px;background:radial-gradient(ellipse at 65% 30%, #fef3c7 0%, #fde68a 30%, #eab308 60%, #ca8a04 100%);border:1px solid #92400e;border-radius:50% 50% 40% 40%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;top:13px;left:3px;width:4px;height:15px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:30%;"></div>
          <div style="position:absolute;top:26px;left:-2px;width:14px;height:8px;">
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:0;top:3px;transform:rotate(-35deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:6px;top:1px;"></div>
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;right:0;top:3px;transform:rotate(35deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:68px;left:19px;z-index:18;transform-origin:right center;animation:rooster-wing 1.8s ease-in-out infinite;">
          <div style="width:23px;height:29px;background:radial-gradient(ellipse at 55% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 50%, #d97706 75%, #b45309 100%);border:1px solid #92400e;border-radius:55% 45% 65% 35%;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.55),inset -1px -1px 4px rgba(146,64,14,0.35);">
            <div style="position:absolute;width:14px;height:1px;background:rgba(146,64,14,0.4);top:9px;left:3px;"></div>
            <div style="position:absolute;width:12px;height:1px;background:rgba(146,64,14,0.35);top:13px;left:4px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(146,64,14,0.3);top:17px;left:5px;"></div>
          </div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:68px;right:19px;z-index:18;transform-origin:left center;animation:rooster-wing 1.8s ease-in-out infinite reverse;">
          <div style="width:23px;height:29px;background:radial-gradient(ellipse at 45% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 50%, #d97706 75%, #b45309 100%);border:1px solid #92400e;border-radius:45% 55% 35% 65%;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.55),inset -1px -1px 4px rgba(146,64,14,0.35);">
            <div style="position:absolute;width:14px;height:1px;background:rgba(146,64,14,0.4);top:9px;right:3px;"></div>
            <div style="position:absolute;width:12px;height:1px;background:rgba(146,64,14,0.35);top:13px;right:4px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(146,64,14,0.3);top:17px;right:5px;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:54px;height:44px;background:radial-gradient(ellipse at 40% 28%, #fef3c7 0%, #fcd34d 20%, #f59e0b 40%, #d97706 65%, #b45309 85%, #92400e 100%);border:2px solid #78350f;border-radius:55% 55% 45% 45%;top:65px;left:30px;z-index:20;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.4);">
          <div style="position:absolute;width:17px;height:13px;background:rgba(255,255,255,0.55);border-radius:50%;top:4px;left:7px;filter:blur(3px);"></div>
          <div style="position:absolute;width:30px;height:21px;background:radial-gradient(ellipse at 50% 35%, #fffbeb 0%, #fef3c7 40%, #fcd34d 80%, transparent 100%);border-radius:50%;bottom:6px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:44px;height:40px;background:radial-gradient(ellipse at 40% 28%, #fef3c7 0%, #fcd34d 25%, #f59e0b 45%, #d97706 70%, #b45309 100%);border:2px solid #78350f;border-radius:50%;top:32px;left:35px;z-index:40;box-shadow:inset 3px 3px 9px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.35);overflow:visible;animation:rooster-crow 5s ease-in-out infinite;">
          <div style="position:absolute;width:13px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:3px;left:6px;filter:blur(2px);"></div>
          <!-- Comb -->
          <div style="position:absolute;top:-16px;left:50%;transform:translateX(-50%);z-index:45;">
            <div style="position:relative;width:30px;height:20px;">
              <div style="position:absolute;width:10px;height:15px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;left:0;top:5px;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:12px;height:20px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;left:8px;top:0;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.45);"></div>
              <div style="position:absolute;width:10px;height:15px;background:radial-gradient(ellipse at 55% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;right:0;top:5px;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.4);"></div>
            </div>
          </div>
          <!-- Eyes with moving pupils -->
          <div style="position:absolute;top:11px;left:7px;width:10px;height:10px;background:radial-gradient(circle at 35% 30%, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);border:1px solid #78350f;border-radius:50%;overflow:hidden;animation:rooster-blink 4s ease-in-out infinite;">
            <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #44403c 0%, #1c1917 50%, #000 100%);border-radius:50%;top:3px;left:3px;animation:rooster-eye-look 6s ease-in-out infinite;">
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
            </div>
          </div>
          <div style="position:absolute;top:11px;right:7px;width:10px;height:10px;background:radial-gradient(circle at 65% 30%, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);border:1px solid #78350f;border-radius:50%;overflow:hidden;animation:rooster-blink 4s ease-in-out infinite;">
            <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #44403c 0%, #1c1917 50%, #000 100%);border-radius:50%;top:3px;left:3px;animation:rooster-eye-look 6s ease-in-out infinite;">
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
            </div>
          </div>
          <!-- Beak with crowing animation -->
          <div style="position:absolute;top:20px;left:50%;transform:translateX(-50%);z-index:41;">
            <div style="width:15px;height:8px;background:radial-gradient(ellipse at 50% 25%, #fffbeb 0%, #fef3c7 30%, #fde68a 60%, #eab308 100%);border:1px solid #a16207;border-radius:25% 25% 55% 55%;position:relative;z-index:2;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="position:absolute;width:12px;height:5px;background:radial-gradient(ellipse at 50% 60%, #fef3c7 0%, #fde68a 50%, #eab308 100%);border:1px solid #a16207;border-radius:25% 25% 55% 55%;top:6px;left:50%;transform:translateX(-50%);z-index:1;animation:rooster-beak-crow 5s ease-in-out infinite;"></div>
          </div>
          <!-- Wattle -->
          <div style="position:absolute;top:31px;left:50%;transform:translateX(-50%);z-index:39;animation:rooster-wattle 1.8s ease-in-out infinite;">
            <div style="width:12px;height:15px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 25%, #ef4444 50%, #dc2626 75%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:40% 40% 55% 55%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.35);">
              <div style="position:absolute;width:4px;height:6px;background:rgba(255,255,255,0.4);border-radius:50%;top:2px;left:2px;filter:blur(1px);"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:19px;left:3px;width:6px;height:4px;background:radial-gradient(ellipse, #fca5a5, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          <div style="position:absolute;top:19px;right:3px;width:6px;height:4px;background:radial-gradient(ellipse, #fca5a5, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    13:` <!-- Toucan Buddy -->
      <div style="position:relative;width:150px;height:220px;display:inline-block;animation:toucan-bob 2.5s ease-in-out infinite;">
        <!-- Floating tropical particles -->
        <div style="position:absolute;width:6px;height:4px;background:radial-gradient(ellipse, #22c55e, #15803d);border-radius:50%;top:25px;left:18px;opacity:0.6;animation:tropical-float 4s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:3px;background:radial-gradient(ellipse, #f97316, #ea580c);border-radius:50%;top:40px;right:22px;opacity:0.5;animation:tropical-float 5s ease-in-out infinite 1s;"></div>
        <!-- Tail feathers -->
        <div style="position:absolute;top:145px;left:62px;width:20px;height:48px;z-index:5;animation:tail-sway 2s ease-in-out infinite;transform-origin:center top;">
          <div style="position:absolute;width:8px;height:43px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 50%, #1e293b 70%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:-2px;top:0;transform:rotate(-3deg);"></div>
          <div style="position:absolute;width:9px;height:48px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 25%, #475569 50%, #1e293b 75%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:4px;top:-3px;"></div>
          <div style="position:absolute;width:8px;height:43px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 50%, #1e293b 70%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:10px;top:0;transform:rotate(3deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:144px;left:60px;z-index:10;animation:toucan-hop 4s ease-in-out infinite;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 35% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 40% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:144px;left:74px;z-index:10;animation:toucan-hop 4s ease-in-out infinite 0.2s;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 65% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 60% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:110px;left:28px;width:40px;z-index:15;transform-origin:right center;animation:toucan-wing-flap 2s ease-in-out infinite reverse;">
          <div style="position:absolute;width:38px;height:25px;background:linear-gradient(225deg, #f97316 0%, #fbbf24 50%, #fcd34d 100%);border-radius:60% 5px 5px 60%;top:3px;right:0;z-index:1;border:1px solid #ea580c;"></div>
          <div style="position:absolute;width:40px;height:23px;background:linear-gradient(180deg, #374151 0%, #1f2937 40%, #111827 100%);border-radius:70% 8px 8px 70%;top:0;right:0;z-index:2;border:2px solid #030712;"></div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:110px;right:28px;width:40px;z-index:15;transform-origin:left center;animation:toucan-wing-flap 2s ease-in-out infinite;">
          <div style="position:absolute;width:38px;height:25px;background:linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #fcd34d 100%);border-radius:5px 60% 60% 5px;top:3px;left:0;z-index:1;border:1px solid #ea580c;"></div>
          <div style="position:absolute;width:40px;height:23px;background:linear-gradient(180deg, #374151 0%, #1f2937 40%, #111827 100%);border-radius:8px 70% 70% 8px;top:0;left:0;z-index:2;border:2px solid #030712;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:55px;height:50px;background:radial-gradient(ellipse at 40% 28%, #475569 0%, #334155 20%, #1e293b 45%, #0f172a 100%);border:2px solid #020617;border-radius:55% 55% 50% 50%;top:105px;left:48px;z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(100,150,255,0.12);border-radius:50%;top:5px;left:7px;filter:blur(3px);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:43px;height:40px;top:58px;left:54px;z-index:40;background:radial-gradient(ellipse at 40% 28%, #475569 0%, #334155 25%, #1e293b 50%, #0f172a 100%);border:2px solid #020617;border-radius:50%;overflow:visible;animation:toucan-head-turn 6s ease-in-out infinite;">
          <!-- White face patch -->
          <div style="position:absolute;width:33px;height:30px;background:radial-gradient(ellipse at 50% 35%, #ffffff 0%, #fefefe 40%, #f8fafc 70%, #f1f5f9 100%);border:1px solid #e2e8f0;border-radius:50%;top:9px;left:50%;transform:translateX(-50%);z-index:1;"></div>
          <!-- Orange circles around eyes -->
          <div style="position:absolute;top:7px;left:1px;width:19px;height:19px;background:radial-gradient(circle at 45% 45%, #ffedd5 0%, #fdba74 25%, #fb923c 50%, #f97316 80%, #ea580c 100%);border:1px solid #c2410c;border-radius:50%;z-index:2;"></div>
          <div style="position:absolute;top:7px;right:1px;width:19px;height:19px;background:radial-gradient(circle at 55% 45%, #ffedd5 0%, #fdba74 25%, #fb923c 50%, #f97316 80%, #ea580c 100%);border:1px solid #c2410c;border-radius:50%;z-index:2;"></div>
          <!-- Eyes with blue rings -->
          <div style="position:absolute;top:10px;left:4px;width:13px;height:13px;background:radial-gradient(circle at 50% 50%, #0ea5e9 0%, #0284c7 40%, #0369a1 70%, #075985 100%);border:2px solid #0c4a6e;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 35% 30%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <div style="position:absolute;top:10px;right:4px;width:13px;height:13px;background:radial-gradient(circle at 50% 50%, #0ea5e9 0%, #0284c7 40%, #0369a1 70%, #075985 100%);border:2px solid #0c4a6e;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 65% 30%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Massive beak -->
          <div style="position:absolute;top:0px;left:17px;z-index:45;transform-origin:left center;width:88px;height:30px;">
            <!-- Upper beak -->
            <div style="width:86px;height:30px;background:linear-gradient(95deg, #f59e0b 0%, #f97316 15%, #ef4444 30%, #dc2626 45%, #22c55e 62%, #14b8a6 80%, #0f172a 100%);border:2px solid #78350f;border-radius:25px 50% 5px 40% / 80% 90% 15% 55%;position:relative;z-index:2;transform:rotate(5deg);transform-origin:left center;">
              <div style="position:absolute;width:58px;height:5px;background:linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.15) 100%);border-radius:50%;top:3px;left:8px;filter:blur(2px);"></div>
              <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, transparent 50%, rgba(255,255,255,0.15) 70%, transparent 100%);border-radius:25px 15px 85% 40% / 90% 30% 95% 60%;animation:beak-shimmer 3s ease-in-out infinite;"></div>
              <div style="position:absolute;width:4px;height:3px;background:radial-gradient(ellipse, #78350f, #451a03);border-radius:50%;top:8px;left:5px;"></div>
            </div>
            <!-- Lower beak -->
            <div style="position:absolute;width:63px;height:17px;background:linear-gradient(95deg, #fde68a 0%, #f59e0b 18%, #ea580c 35%, #dc2626 55%, #0f172a 100%);border:2px solid #78350f;border-radius:20px 85% 15px 35% / 60% 95% 30% 90%;top:26px;left:3px;z-index:1;transform-origin:left center;animation:toucan-beak-clack 5s ease-in-out infinite;">
              <div style="position:absolute;width:53px;height:4px;background:rgba(255,255,255,0.35);border-radius:50%;top:5px;left:8px;filter:blur(1px);"></div>
            </div>
          </div>
        </div>
        <!-- White throat bib -->
        <div style="position:absolute;width:35px;height:43px;background:radial-gradient(ellipse at 50% 25%, #ffffff 0%, #fefefe 35%, #f8fafc 60%, #f1f5f9 85%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:45% 45% 50% 50%;top:88px;left:58px;z-index:35;">
          <div style="position:absolute;width:14px;height:15px;background:rgba(255,255,255,0.7);border-radius:50%;top:6px;left:8px;filter:blur(3px);"></div>
        </div>
      </div>
    `,
    14:` <!-- Golden Flamingo - Legendary golden variant with sparkles and glow -->
      <div style="position:relative;width:240px;height:280px;display:flex;align-items:center;justify-content:center;">
        <div style="transform:scale(0.55);transform-origin:center;filter:drop-shadow(0 0 15px rgba(255,215,0,0.6)) drop-shadow(0 0 30px rgba(255,200,100,0.4));">
          <div style="position:relative;width:300px;height:440px;animation:flamingo-sway 3s ease-in-out infinite;">
            <!-- Golden sparkles around the flamingo -->
            <div style="position:absolute;width:10px;height:10px;background:rgba(255,215,0,0.95);border-radius:50%;top:20px;left:100px;box-shadow:0 0 12px rgba(255,215,0,0.8);animation:twinkle 2s ease-in-out infinite;"></div>
            <div style="position:absolute;width:8px;height:8px;background:rgba(255,200,100,0.9);border-radius:50%;top:100px;left:70px;box-shadow:0 0 10px rgba(255,200,100,0.7);animation:twinkle 2.5s ease-in-out infinite 0.5s;"></div>
            <div style="position:absolute;width:7px;height:7px;background:rgba(255,220,150,0.9);border-radius:50%;top:180px;right:90px;box-shadow:0 0 8px rgba(255,220,150,0.7);animation:twinkle 2.2s ease-in-out infinite 1s;"></div>
            <div style="position:absolute;width:9px;height:9px;background:rgba(255,215,0,0.95);border-radius:50%;top:60px;right:100px;box-shadow:0 0 10px rgba(255,215,0,0.8);animation:twinkle 1.8s ease-in-out infinite 0.3s;"></div>
            <!-- Left foot (golden) -->
            <div style="position:absolute;bottom:5px;left:101px;z-index:9;">
              <div style="position:relative;width:70px;height:40px;">
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                <div style="position:absolute;width:58px;height:28px;background:linear-gradient(180deg, rgba(251,191,36,0.45) 0%, rgba(251,191,36,0.1) 100%);top:8px;left:6px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:-1px;top:3px;transform:rotate(-25deg);transform-origin:right center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;left:2px;top:50%;transform:translateY(-50%);"></div></div>
                <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"><div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;left:50%;transform:translateX(-50%);bottom:2px;"></div></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:39px;top:6px;transform:rotate(19deg);transform-origin:left center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;right:2px;top:50%;transform:translateY(-50%);"></div></div>
              </div>
            </div>
            <!-- Right leg with tuck animation (golden) -->
            <div style="position:absolute;bottom:42px;left:180px;z-index:8;">
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:5px;bottom:110px;left:5px;transform-origin:top center;animation:flamingo-upper-leg-tuck 8s ease-in-out infinite;">
                <div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:3px;"></div>
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;bottom:-10px;left:-2px;"></div>
                <div style="position:absolute;width:8px;height:100px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:4px;bottom:-108px;left:1px;transform-origin:top center;animation:flamingo-lower-leg-fold 8s ease-in-out infinite;">
                  <div style="position:absolute;width:2px;height:80px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:2px;"></div>
                  <div style="position:absolute;bottom:-39px;left:-31px;transform-origin:top center;animation:flamingo-foot-tuck 8s ease-in-out infinite;">
                    <div style="position:relative;width:70px;height:40px;">
                      <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                      <div style="position:absolute;width:58px;height:28px;background:linear-gradient(rgba(251,191,36,0.45) 0%, rgba(251,191,36,0.1) 100%);top:1px;left:5px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:0px;top:7px;transform:rotate(-21deg);transform-origin:right center;z-index:2;"></div>
                      <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:40px;top:7px;transform:rotate(16deg);transform-origin:left center;z-index:2;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Left leg (standing, golden) -->
            <div style="position:absolute;bottom:42px;left:130px;z-index:10;">
              <div style="position:absolute;width:8px;height:95px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:4px;bottom:0;left:2px;"><div style="position:absolute;width:2px;height:75px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:2px;"></div></div>
              <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;bottom:93px;left:-1px;"></div>
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:5px;bottom:105px;left:1px;transform:rotate(-5deg);"><div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:3px;"></div></div>
            </div>
            <!-- Tail feathers (golden gradient) -->
            <div style="position:absolute;top:200px;left:70px;z-index:15;transform-origin:right center;transform:rotate(-82deg);animation:tail-wag 2s ease-in-out infinite;">
              <div style="position:absolute;width:35px;height:18px;background:radial-gradient(ellipse at 50% 50%, #fef08a, #fbbf24);border:2px solid #92400e;border-radius:50% 20% 50% 50%;top:3px;left:-18px;transform:rotate(25deg);box-shadow:inset 2px 2px 5px rgba(255,255,255,0.5),0 0 10px rgba(255,215,0,0.4);"></div>
              <div style="position:absolute;width:30px;height:15px;background:radial-gradient(ellipse at 50% 50%, #fde68a, #f59e0b);border:2px solid #92400e;border-radius:50% 20% 50% 50%;left:-10px;top:22px;transform:rotate(5deg);animation:breathe-custom 3s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
              <div style="position:absolute;width:25px;height:12px;background:radial-gradient(ellipse at 50% 50%, #fff7ed, #fde68a);border:2px solid #92400e;border-radius:50% 20% 50% 50%;left:-3px;top:34px;transform:rotate(-10deg);box-shadow:inset 2px 2px 3px rgba(255,255,255,0.5),0 0 6px rgba(255,215,0,0.3);"></div>
            </div>
            <!-- Left wing (golden, swing animation) -->
            <div style="position:absolute;top:186px;left:80px;z-index:18;transform-origin:right top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 60% 40%, #fef08a, #fde68a, #fbbf24);border:3px solid #92400e;border-radius:60% 40% 70% 30%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.2),0 0 15px rgba(255,215,0,0.4);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(146,64,14,0.4);top:15px;left:5px;transform:rotate(-10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(146,64,14,0.4);top:25px;left:8px;transform:rotate(-8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(146,64,14,0.4);top:35px;left:10px;transform:rotate(-5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Right wing (golden, swing animation) -->
            <div style="position:absolute;top:186px;left:192px;z-index:18;transform-origin:left top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 40% 40%, #fef08a, #fde68a, #fbbf24);border:3px solid #92400e;border-radius:40% 60% 30% 70%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.2),0 0 15px rgba(255,215,0,0.4);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(146,64,14,0.4);top:15px;right:5px;transform:rotate(10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(146,64,14,0.4);top:25px;right:8px;transform:rotate(8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(146,64,14,0.4);top:35px;right:10px;transform:rotate(5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Body (golden gradient with shimmer) -->
            <div style="position:absolute;width:120px;height:80px;background:radial-gradient(ellipse at 45% 35%, #fff7ed 0%, #fef08a 30%, #fde68a 60%, #fbbf24 100%);border:4px solid #92400e;border-radius:55% 55% 50% 50%;top:179px;left:97px;z-index:20;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.7),inset -5px -5px 12px rgba(146,64,14,0.2),0 0 25px rgba(255,215,0,0.4);overflow:hidden;">
              <div style="position:absolute;width:40px;height:25px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:20px;filter:blur(5px);"></div>
              <div style="position:absolute;width:20px;height:15px;background:rgba(255,255,255,0.4);border-radius:50%;top:20px;right:25px;filter:blur(4px);"></div>
              <!-- Golden shimmer overlay -->
              <div style="position:absolute;top:0;left:-100%;width:300%;height:100%;background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,215,0,0.2) 40%, rgba(255,255,255,0.3) 60%, transparent 100%);animation:iridescent-shimmer 3s ease-in-out infinite;"></div>
            </div>
            <!-- Neck (golden gradient) -->
            <div style="position:absolute;top:42px;left:114px;z-index:25;transform-origin:bottom center;animation:neck-bob 4s ease-in-out infinite;">
              <svg width="80" height="160" viewBox="0 0 80 160" fill="none"><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="#92400e" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.3"/><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="url(#goldenNeck)" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M50 150 Q62 118 45 82 Q28 46 40 18" stroke="rgba(255,255,255,0.5)" stroke-width="6" stroke-linecap="round" fill="none"/><defs><linearGradient id="goldenNeck" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fbbf24"/><stop offset="50%" style="stop-color:#fde68a"/><stop offset="100%" style="stop-color:#fef08a"/></linearGradient></defs></svg>
            </div>
            <!-- Head (golden) -->
            <div style="position:absolute;width:65px;height:55px;background:radial-gradient(ellipse at 40% 35%, #fff7ed 0%, #fef08a 40%, #fde68a 80%, #fbbf24 100%);border:3px solid #92400e;border-radius:50% 50% 45% 45%;top:9px;left:136px;z-index:40;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7),inset -3px -3px 8px rgba(146,64,14,0.2),0 0 20px rgba(255,215,0,0.4);overflow:visible;">
              <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.6);border-radius:50%;top:6px;left:10px;filter:blur(4px);"></div>
              <!-- Crown/Tuft (more elaborate for legendary) -->
              <div style="position:absolute;top:-22px;left:50%;transform:translateX(-50%);z-index:45;">
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fde68a, #fbbf24);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:-10px;--base-rotate:-15deg;transform:rotate(-15deg);transform-origin:bottom center;animation:tuft-sway 2s ease-in-out infinite;box-shadow:0 0 8px rgba(255,215,0,0.5);"></div>
                <div style="position:absolute;width:8px;height:28px;background:radial-gradient(ellipse at 50% 80%, #fef08a, #fde68a);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:-2px;--base-rotate:0deg;transform-origin:bottom center;animation:tuft-sway 2.2s ease-in-out infinite 0.1s;box-shadow:0 0 10px rgba(255,215,0,0.6);"></div>
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fde68a, #fbbf24);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:7px;--base-rotate:15deg;transform:rotate(15deg);transform-origin:bottom center;animation:tuft-sway 1.8s ease-in-out infinite 0.2s;box-shadow:0 0 8px rgba(255,215,0,0.5);"></div>
              </div>
              <!-- Eyes -->
              <div style="position:absolute;top:16px;left:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <div style="position:absolute;top:16px;right:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <!-- Beak (golden/orange) -->
              <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:40px;height:20px;background:radial-gradient(ellipse at 50% 30%, #fde68a, #f59e0b);border:2px solid #b45309;border-radius:30% 30% 50% 50%;z-index:41;box-shadow:0 0 10px rgba(255,215,0,0.4);"><div style="position:absolute;width:12px;height:6px;background:rgba(255,255,255,0.5);border-radius:50%;top:3px;left:8px;filter:blur(1px);"></div></div>
              <div style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:30px;height:14px;background:radial-gradient(ellipse at 50% 20%, #44403c, #1c1917);border:2px solid #0c0a09;border-radius:20% 20% 50% 50%;z-index:42;"></div>
              <!-- Blush (warm golden) -->
              <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:space-around;padding:0 8px;">
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  };

  return birdDesigns[variant]||birdDesigns[0];
}

/* ============================================================================
   SCRIBBY DESIGN GUIDE: 3D STYLING PATTERNS
   ============================================================================

   This guide documents the CSS patterns used to create consistent 3D "pop-off-
   the-screen" effects across all adult and teen creature variants.

   --------------------------------------------------------------------------
   ADULT VARIANT 3D STYLING
   --------------------------------------------------------------------------

   Adult variants use a 4-stop radial gradient + inset shadows + highlight
   overlays to create a dimensional, glossy appearance.

   GRADIENT PATTERN:
   -----------------
   background: radial-gradient(ellipse at 35% 30%,
     [PALE_COLOR] 0%,      // Very light/nearly white - creates highlight
     [LIGHT_COLOR] 25%,    // Light version of main color
     [MID_COLOR] 55%,      // Main creature color
     [DARK_COLOR] 100%     // Dark shadow color
   );

   Example color progressions:
   - Gecko green:    #e8ffb8 → #c0ee6d → #8cc63f → #65a30d
   - Frog green:     #c0ffd8 → #7ef5a8 → #4ade80 → #16a34a
   - Cobra brown:    #f0dcc8 → #dbb896 → #b08968 → #5c4033
   - Fox orange:     #fed7aa → #fb923c → #f97316 → #c2410c
   - Bear brown:     #d4a574 → #a3643d → #92400e → #78350f
   - Bunny cream:    #ffffff → #fafafa → #f0f0eb → #e0e0db
   - Trash Panda:    #f3f4f6 → #d1d5db → #9ca3af → #6b7280

   SHADOW PATTERN:
   ---------------
   box-shadow:
     inset 8px 8px 20-22px rgba([LIGHT_RGB], 0.7-0.75),  // Top-left highlight
     inset -5px -6px 14-16px rgba([DARK_RGB], 0.4);      // Bottom-right shadow

   HIGHLIGHT OVERLAYS:
   -------------------
   Add two child divs inside the head/body element:

   Primary Highlight (larger, upper-left):
     position: absolute;
     width: 36-48px;
     height: 26-34px;
     background: rgba(255,255,255, 0.65-0.7);
     border-radius: 50%;
     top: 6-8px;
     left: 12-18px;
     filter: blur(4-6px);

   Secondary Highlight (smaller, center-right):
     position: absolute;
     width: 18-24px;
     height: 12-18px;
     background: rgba(255,255,255, 0.4-0.45);
     border-radius: 50%;
     top: 18-28px;
     right: 18-28px;
     filter: blur(3px);

   --------------------------------------------------------------------------
   TEEN VARIANT DESIGN PATTERNS
   --------------------------------------------------------------------------

   Teen variants are designed to match adult visual quality while having a
   smaller, more compact appearance. They share the same 3D styling approach
   but with additional animation effects.

   KEY DIFFERENCES FROM ADULTS:
   ----------------------------
   1. Smaller overall size (typically 180-200px container vs 240x280)
   2. More expressive animations (writhing for snakes, bouncing for mammals)
   3. Proportionally larger heads compared to body
   4. Same color palette as adult but applied to teen form

   TEEN SNAKE BODY (SVG + Animation):
   ----------------------------------
   Teen snakes use an SVG curved body path with a writhing animation:

   SVG Path Structure:
     <path d="M 30,65 Q 80,15 140,60 Q 180,95 220,65 Q 260,35 300,55"
           stroke="url(#gradientId)" stroke-width="28" stroke-linecap="round"/>

   Writhing Animation:
     @keyframes teen-snake-writhe {
       0%, 100% { transform: scaleX(1) skewY(0deg); }
       25%      { transform: scaleX(1.03) skewY(1.5deg); }
       50%      { transform: scaleX(0.98) skewY(-1deg); }
       75%      { transform: scaleX(1.02) skewY(-1.5deg); }
     }

   TEEN HEAD STYLING:
   ------------------
   Same gradient/shadow/highlight pattern as adults but proportionally sized:
   - Head size: ~55-65% of adult head size
   - Highlight sizes: ~60% of adult highlight sizes
   - Same blur and opacity values

   CONVERTING ADULT TO TEEN:
   -------------------------
   1. Scale down all dimensions by ~0.65-0.75
   2. Keep gradient ratios identical (0%, 25%, 55%, 100%)
   3. Reduce highlight div sizes proportionally
   4. Add more dynamic animation (faster timing, more movement)
   5. Adjust z-index if parts need different stacking

   --------------------------------------------------------------------------
   CATEGORY-SPECIFIC NOTES
   --------------------------------------------------------------------------

   REPTILES:
   - Snakes use SVG paths for bodies with stroke gradients
   - Turtle shell has radial gradient dome effect
   - Gecko/frog have standard div-based bodies

   MAMMALS:
   - Most use div-based body/head with gradient fills
   - Fluffy creatures (squirrel tail, bear) have extra highlight layers
   - Paws typically use simpler 2-color gradients

   BIRDS:
   - Wings often use SVG or layered divs for feathers
   - Beaks are typically solid color with subtle gradients

   ============================================================================ */

