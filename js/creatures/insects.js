function renderAdultInsect(variantIndex){
  const variant=variantIndex||0;

  const insectDesigns={
    0:` <!-- Busy Ladybug - Accurate from ladybug.html (~43% scale) -->
      <div style="position:relative;width:120px;height:130px;display:inline-block;animation:ladybug-bob 4s ease-in-out infinite;">

        <!-- LEFT LEGS (behind body, z-index 5) -->
        <div style="position:absolute;top:43px;left:88px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-70deg);z-index:5;animation:ladybug-scuttle-a 4s linear infinite;--base-rot:-70deg;">
          <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
            <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
          </div>
        </div>
        <div style="position:absolute;top:73px;left:95px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-70deg);z-index:5;animation:ladybug-scuttle-b 4s linear infinite;--base-rot:-70deg;">
          <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
            <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
          </div>
        </div>
        <div style="position:absolute;top:99px;left:101px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-50deg);z-index:5;animation:ladybug-scuttle-a 4s linear infinite;--base-rot:-50deg;">
          <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
            <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
          </div>
        </div>

        <!-- RIGHT LEGS (mirrored via scaleX(-1) wrapper) -->
        <div style="position:absolute;width:100%;height:100%;transform:scaleX(-1);z-index:5;">
          <div style="position:absolute;top:43px;left:88px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-70deg);animation:ladybug-scuttle-b 4s linear infinite;--base-rot:-70deg;">
            <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
            </div>
          </div>
          <div style="position:absolute;top:73px;left:95px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-70deg);animation:ladybug-scuttle-a 4s linear infinite;--base-rot:-70deg;">
            <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
            </div>
          </div>
          <div style="position:absolute;top:99px;left:101px;width:6px;height:19px;background:#18181b;border-radius:4px;border:1px solid #000;transform-origin:50% 10%;transform:rotate(-50deg);animation:ladybug-scuttle-b 4s linear infinite;--base-rot:-50deg;">
            <div style="position:absolute;bottom:-13px;left:0;width:5px;height:15px;background:#18181b;border-radius:3px;border:1px solid #000;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-3px;left:-2px;width:9px;height:5px;background:#18181b;border-radius:4px;border:1px solid #000;"></div>
            </div>
          </div>
        </div>

        <!-- Shell body (z-index 20) -->
        <div style="position:absolute;top:30px;left:50%;transform:translateX(-50%);width:95px;height:95px;background:radial-gradient(circle at 35% 35%,#ef4444 0%,#dc2626 40%,#991b1b 90%);border-radius:50%;border:3px solid #000;z-index:20;box-shadow:inset 5px 5px 15px rgba(255,255,255,0.3),inset -8px -8px 20px rgba(0,0,0,0.4),0 8px 15px rgba(0,0,0,0.3);overflow:hidden;">
          <!-- Split line -->
          <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:2px;height:100%;background:rgba(0,0,0,0.3);border-left:1px solid rgba(255,255,255,0.1);"></div>
          <!-- Spots -->
          <div style="position:absolute;top:17px;left:15px;width:22px;height:22px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 4px rgba(0,0,0,0.6);"></div>
          <div style="position:absolute;top:47px;left:6px;width:15px;height:15px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 3px rgba(0,0,0,0.6);"></div>
          <div style="position:absolute;top:60px;left:24px;width:19px;height:19px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 3px rgba(0,0,0,0.6);"></div>
          <div style="position:absolute;top:17px;right:15px;width:22px;height:22px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 4px rgba(0,0,0,0.6);"></div>
          <div style="position:absolute;top:47px;right:6px;width:15px;height:15px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 3px rgba(0,0,0,0.6);"></div>
          <div style="position:absolute;top:60px;right:24px;width:19px;height:19px;background:#18181b;border-radius:50%;box-shadow:inset 1px 1px 3px rgba(0,0,0,0.6);"></div>
          <!-- Shine -->
          <div style="position:absolute;top:9px;left:22%;width:47px;height:26px;background:radial-gradient(ellipse at center,white 0%,transparent 70%);border-radius:50%;transform:rotate(-15deg);opacity:0.6;animation:ladybug-shine 3s infinite alternate;"></div>
        </div>

        <!-- Head (z-index 30) -->
        <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:60px;height:47px;background:radial-gradient(circle at 40% 30%,#3f3f46,#18181b);border-radius:50% 50% 45% 45%;border:2px solid #000;z-index:30;box-shadow:0 5px 8px rgba(0,0,0,0.4);">
          <!-- Antennae -->
          <div style="position:absolute;top:-22px;left:13px;width:3px;height:22px;background:#18181b;border:1px solid #000;border-radius:5px;transform-origin:bottom center;transform:rotate(-10deg);animation:ladybug-antenna 4s infinite ease-in-out;">
            <div style="position:absolute;top:-5px;left:-5px;width:10px;height:10px;background:#18181b;border:1px solid #000;border-radius:50%;"></div>
          </div>
          <div style="position:absolute;top:-22px;right:13px;width:3px;height:22px;background:#18181b;border:1px solid #000;border-radius:5px;transform-origin:bottom center;transform:scaleX(-1) rotate(-10deg);animation:ladybug-antenna 4s infinite ease-in-out reverse;">
            <div style="position:absolute;top:-5px;left:-5px;width:10px;height:10px;background:#18181b;border:1px solid #000;border-radius:50%;"></div>
          </div>
          <!-- Face patches -->
          <div style="position:absolute;top:15px;left:9px;width:15px;height:19px;background:#f4f4f5;border-radius:50%;opacity:0.9;transform:rotate(-10deg);"></div>
          <div style="position:absolute;top:15px;right:9px;width:15px;height:19px;background:#f4f4f5;border-radius:50%;opacity:0.9;transform:rotate(10deg);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:19px;left:17px;width:10px;height:13px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;top:2px;left:2px;width:4px;height:4px;background:white;border-radius:50%;"></div>
          </div>
          <div style="position:absolute;top:19px;right:17px;width:10px;height:13px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;top:2px;right:2px;width:4px;height:4px;background:white;border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:32px;left:6px;width:9px;height:5px;background:#f472b6;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <div style="position:absolute;top:32px;right:6px;width:9px;height:5px;background:#f472b6;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    1:` <!-- Neon Dragonfly - Accurate from dragonfly.html -->
      <div style="position:relative;width:140px;height:170px;display:inline-block;animation:dragonfly-hover 3s ease-in-out infinite;">

        <!-- WINGS (z-index 5) -->
        <div style="position:absolute;top:44px;left:50%;transform:translateX(-50%);width:140px;height:40px;z-index:5;">
          <!-- Forewings -->
          <div style="position:absolute;top:-6px;right:50%;width:68px;height:24px;background:linear-gradient(135deg,rgba(255,255,255,0.9),rgba(165,243,252,0.5));border:1px solid rgba(255,255,255,0.8);border-radius:80% 20% 80% 30%;transform-origin:right center;animation:dragonfly-flutter-fore 0.12s linear infinite;box-shadow:0 0 8px rgba(255,255,255,0.4);"></div>
          <div style="position:absolute;top:-6px;left:50%;width:68px;height:24px;background:linear-gradient(135deg,rgba(255,255,255,0.9),rgba(165,243,252,0.5));border:1px solid rgba(255,255,255,0.8);border-radius:20% 80% 30% 80%;transform-origin:left center;animation:dragonfly-flutter-fore 0.12s linear infinite;box-shadow:0 0 8px rgba(255,255,255,0.4);"></div>
          <!-- Hindwings -->
          <div style="position:absolute;top:14px;right:50%;width:60px;height:28px;background:linear-gradient(135deg,rgba(255,255,255,0.85),rgba(165,243,252,0.4));border:1px solid rgba(255,255,255,0.7);border-radius:60% 40% 60% 40%;transform-origin:right center;animation:dragonfly-flutter-hind 0.12s linear infinite;box-shadow:0 0 6px rgba(255,255,255,0.3);"></div>
          <div style="position:absolute;top:14px;left:50%;width:60px;height:28px;background:linear-gradient(135deg,rgba(255,255,255,0.85),rgba(165,243,252,0.4));border:1px solid rgba(255,255,255,0.7);border-radius:40% 60% 40% 60%;transform-origin:left center;animation:dragonfly-flutter-hind 0.12s linear infinite;box-shadow:0 0 6px rgba(255,255,255,0.3);"></div>
        </div>

        <!-- TAIL (z-index 10) -->
        <div style="position:absolute;top:65px;left:61px;display:flex;flex-direction:column;align-items:center;z-index:10;transform-origin:top center;animation:dragonfly-tail-sway 4s ease-in-out infinite;">
          <div style="width:18px;height:14px;background:radial-gradient(circle at 30% 30%,#a5f3fc,#22d3ee,#0891b2);border:1px solid #155e75;border-radius:8px;box-shadow:inset 0 0 3px white;"></div>
          <div style="width:16px;height:16px;background:radial-gradient(circle at 30% 30%,#a5f3fc,#22d3ee,#0891b2);border:1px solid #155e75;border-radius:8px;margin-top:-3px;box-shadow:inset 0 0 3px white;animation:dragonfly-tail-pulse 2s infinite;"></div>
          <div style="width:14px;height:17px;background:radial-gradient(circle at 30% 30%,#a5f3fc,#22d3ee,#0891b2);border:1px solid #155e75;border-radius:8px;margin-top:-3px;box-shadow:inset 0 0 3px white;"></div>
          <div style="width:13px;height:18px;background:radial-gradient(circle at 30% 30%,#a5f3fc,#22d3ee,#0891b2);border:1px solid #155e75;border-radius:8px;margin-top:-3px;box-shadow:inset 0 0 3px white;animation:dragonfly-tail-pulse 2s infinite 1s;"></div>
          <div style="width:11px;height:18px;background:radial-gradient(circle at 30% 30%,#a5f3fc,#22d3ee,#0891b2);border:1px solid #155e75;border-radius:8px;margin-top:-3px;box-shadow:inset 0 0 3px white;"></div>
          <div style="width:8px;height:14px;background:#155e75;border:1px solid #0c4a6e;border-radius:0 0 6px 6px;margin-top:-3px;"></div>
        </div>

        <!-- LEGS (z-index 15) -->
        <div style="position:absolute;top:48px;left:50%;transform:translateX(-50%);width:40px;height:40px;z-index:15;">
          <!-- Left Legs -->
          <div style="position:absolute;left:6px;top:0;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(40deg);animation:dragonfly-leg-twitch 2s infinite;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
          <div style="position:absolute;left:4px;top:10px;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(70deg);animation:dragonfly-leg-twitch 2s infinite 0.2s;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
          <div style="position:absolute;left:8px;top:20px;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(100deg);animation:dragonfly-leg-twitch 2s infinite 0.4s;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(30deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
          <!-- Right Legs -->
          <div style="position:absolute;right:6px;top:0;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:scaleX(-1) rotate(40deg);animation:dragonfly-leg-twitch 2s infinite;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
          <div style="position:absolute;right:4px;top:10px;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:scaleX(-1) rotate(70deg);animation:dragonfly-leg-twitch 2s infinite 0.2s;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(45deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
          <div style="position:absolute;right:8px;top:20px;width:3px;height:14px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:scaleX(-1) rotate(100deg);animation:dragonfly-leg-twitch 2s infinite 0.4s;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#0f172a;border-radius:3px;border:1px solid #334155;transform-origin:top center;transform:rotate(30deg);">
              <div style="position:absolute;bottom:-2px;left:-1px;width:4px;height:3px;background:#0f172a;border-radius:50%;"></div>
            </div>
          </div>
        </div>

        <!-- THORAX (z-index 20) -->
        <div style="position:absolute;top:38px;left:50%;transform:translateX(-50%);width:27px;height:32px;background:radial-gradient(circle at 40% 40%,#c4b5fd,#8b5cf6);border-radius:14px;border:2px solid #4c1d95;z-index:20;box-shadow:inset 0 0 5px rgba(255,255,255,0.4);">
          <div style="position:absolute;top:-4px;left:50%;transform:translateX(-50%);width:19px;height:10px;background:#6d28d9;border-radius:6px;border:1px solid #4c1d95;"></div>
        </div>

        <!-- HEAD (z-index 30) -->
        <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:44px;height:34px;background:radial-gradient(circle at 50% 30%,#5b21b6,#2e1065);border-radius:45%;z-index:30;border:2px solid #1e1b4b;box-shadow:0 3px 8px rgba(0,0,0,0.3);">
          <!-- Antennae -->
          <div style="position:absolute;top:-18px;left:12px;width:2px;height:24px;background:#1e1b4b;border-radius:3px;transform-origin:bottom center;transform:rotate(-25deg);animation:dragonfly-antenna-sway 3s ease-in-out infinite;">
            <div style="position:absolute;top:-2px;left:-2px;width:5px;height:5px;background:#8b5cf6;border:1px solid #1e1b4b;border-radius:50%;"></div>
          </div>
          <div style="position:absolute;top:-18px;right:12px;width:2px;height:24px;background:#1e1b4b;border-radius:3px;transform-origin:bottom center;transform:rotate(25deg);animation:dragonfly-antenna-sway 3s ease-in-out infinite reverse;">
            <div style="position:absolute;top:-2px;left:-2px;width:5px;height:5px;background:#8b5cf6;border:1px solid #1e1b4b;border-radius:50%;"></div>
          </div>
          <!-- Large compound eyes -->
          <div style="position:absolute;top:2px;left:-2px;width:20px;height:28px;background:radial-gradient(circle at 60% 60%,#0e7490,#083344);border-radius:50%;border:1px solid #164e63;overflow:hidden;transform:rotate(-12deg);animation:blink 4s infinite;">
            <div style="position:absolute;top:5px;left:4px;width:6px;height:9px;background:white;border-radius:50%;transform:rotate(20deg);opacity:0.9;"></div>
            <div style="position:absolute;top:16px;left:6px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.8;"></div>
          </div>
          <div style="position:absolute;top:2px;right:-2px;width:20px;height:28px;background:radial-gradient(circle at 40% 60%,#0e7490,#083344);border-radius:50%;border:1px solid #164e63;overflow:hidden;transform:rotate(12deg);animation:blink 4s infinite;">
            <div style="position:absolute;top:5px;right:4px;width:6px;height:9px;background:white;border-radius:50%;transform:rotate(-20deg);opacity:0.9;"></div>
            <div style="position:absolute;top:16px;right:6px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.8;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:22px;left:6px;width:7px;height:4px;background:#f472b6;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          <div style="position:absolute;top:22px;right:6px;width:7px;height:4px;background:#f472b6;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          <!-- Mouth -->
          <div style="position:absolute;bottom:7px;left:50%;transform:translateX(-50%);width:6px;height:4px;border-bottom:1px solid white;border-radius:50%;"></div>
        </div>
      </div>
    `,
    2:` <!-- Buzzy Housefly - Cute buggy in-flight design -->
      <div style="position:relative;width:120px;height:130px;display:inline-block;animation:fly-hover 8s ease-in-out infinite;">

        <!-- WINGS (z-index 5) - fast flutter, translucent -->
        <div style="position:absolute;top:32px;left:50%;transform:translateX(-50%);width:120px;height:30px;z-index:5;">
          <!-- Left wing -->
          <div style="position:absolute;top:0;right:50%;width:55px;height:28px;background:linear-gradient(135deg,rgba(255,255,255,0.85),rgba(200,220,255,0.4));border:1px solid rgba(180,200,220,0.6);border-radius:70% 30% 60% 40%;transform-origin:right center;animation:fly-wing-buzz 0.05s linear infinite;box-shadow:0 0 6px rgba(255,255,255,0.3);"></div>
          <!-- Right wing -->
          <div style="position:absolute;top:0;left:50%;width:55px;height:28px;background:linear-gradient(135deg,rgba(255,255,255,0.85),rgba(200,220,255,0.4));border:1px solid rgba(180,200,220,0.6);border-radius:30% 70% 40% 60%;transform-origin:left center;animation:fly-wing-buzz 0.05s linear infinite;box-shadow:0 0 6px rgba(255,255,255,0.3);"></div>
        </div>

        <!-- LEGS (z-index 37) - dangling in flight -->
        <div style="position:absolute;top:49px;left:50%;transform:translateX(-50%);width:50px;height:50px;z-index:37;">
          <!-- Left legs -->
          <div style="position:absolute;left:8px;top:0;width:2px;height:18px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(25deg);animation:fly-leg-dangle 1.5s ease-in-out infinite;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-35deg);"></div>
          </div>
          <div style="position:absolute;left:5px;top:8px;width:2px;height:16px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(15deg);animation:fly-leg-dangle 1.5s ease-in-out infinite 0.1s;">
            <div style="position:absolute;bottom:-8px;left:0;width:2px;height:10px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-30deg);"></div>
          </div>
          <div style="position:absolute;left:8px;top:15px;width:2px;height:14px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-5deg);animation:fly-leg-dangle 1.5s ease-in-out infinite 0.2s;">
            <div style="position:absolute;bottom:-8px;left:0;width:2px;height:10px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-25deg);"></div>
          </div>
          <!-- Right legs -->
          <div style="position:absolute;right:8px;top:0;width:2px;height:18px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-25deg);animation:fly-leg-dangle 1.5s ease-in-out infinite 0.15s;">
            <div style="position:absolute;bottom:-10px;left:0;width:2px;height:12px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(35deg);"></div>
          </div>
          <div style="position:absolute;right:5px;top:8px;width:2px;height:16px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(-15deg);animation:fly-leg-dangle 1.5s ease-in-out infinite 0.25s;">
            <div style="position:absolute;bottom:-8px;left:0;width:2px;height:10px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(30deg);"></div>
          </div>
          <div style="position:absolute;right:8px;top:15px;width:2px;height:14px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(5deg);animation:fly-leg-dangle 1.5s ease-in-out infinite 0.3s;">
            <div style="position:absolute;bottom:-8px;left:0;width:2px;height:10px;background:#1a1a1a;border-radius:2px;transform-origin:top center;transform:rotate(25deg);"></div>
          </div>
        </div>

        <!-- ABDOMEN (z-index 15) - fuzzy striped -->
        <div style="position:absolute;top:60px;left:50%;transform:translateX(-50%);width:38px;height:45px;background:radial-gradient(circle at 40% 30%,#6b7280,#374151,#1f2937);border-radius:45% 45% 50% 50%;border:2px solid #111827;z-index:15;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.15),inset -4px -4px 10px rgba(0,0,0,0.4);overflow:hidden;">
          <!-- Stripes -->
          <div style="position:absolute;top:8px;left:0;right:0;height:4px;background:rgba(0,0,0,0.25);"></div>
          <div style="position:absolute;top:18px;left:0;right:0;height:4px;background:rgba(0,0,0,0.2);"></div>
          <div style="position:absolute;top:28px;left:0;right:0;height:3px;background:rgba(0,0,0,0.15);"></div>
          <!-- Fuzzy texture -->
          <div style="position:absolute;inset:0;background:repeating-radial-gradient(circle at 50% 50%,transparent 0px,transparent 2px,rgba(255,255,255,0.03) 2px,rgba(255,255,255,0.03) 3px);"></div>
        </div>

        <!-- THORAX (z-index 20) - fuzzy gray -->
        <div style="position:absolute;top:38px;left:50%;transform:translateX(-50%);width:42px;height:35px;background:radial-gradient(circle at 40% 35%,#9ca3af,#6b7280,#374151);border-radius:50% 50% 45% 45%;border:2px solid #1f2937;z-index:20;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.2),inset -3px -3px 8px rgba(0,0,0,0.3);">
          <!-- Fuzzy highlight -->
          <div style="position:absolute;top:4px;left:8px;width:20px;height:12px;background:radial-gradient(ellipse,rgba(255,255,255,0.25),transparent);border-radius:50%;"></div>
        </div>

        <!-- HEAD (z-index 30) -->
        <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:50px;height:40px;background:radial-gradient(circle at 50% 40%,#6b7280,#374151,#1f2937);border-radius:50% 50% 45% 45%;z-index:30;border:2px solid #111827;box-shadow:0 3px 8px rgba(0,0,0,0.3);">
          <!-- Antennae - short and fuzzy -->
          <div style="position:absolute;top:-12px;left:14px;width:3px;height:14px;background:#1f2937;border-radius:3px;transform-origin:bottom center;transform:rotate(-15deg);animation:fly-antenna-twitch 2s ease-in-out infinite;">
            <div style="position:absolute;top:-3px;left:-1px;width:5px;height:5px;background:#374151;border-radius:50%;"></div>
          </div>
          <div style="position:absolute;top:-12px;right:14px;width:3px;height:14px;background:#1f2937;border-radius:3px;transform-origin:bottom center;transform:rotate(15deg);animation:fly-antenna-twitch 2s ease-in-out infinite reverse;">
            <div style="position:absolute;top:-3px;left:-1px;width:5px;height:5px;background:#374151;border-radius:50%;"></div>
          </div>
          <!-- Big compound eyes - red/orange (classic fly) -->
          <div style="position:absolute;top:2px;left:-4px;width:24px;height:30px;background:radial-gradient(circle at 55% 45%,#ef4444,#b91c1c,#7f1d1d);border-radius:50%;border:2px solid #450a0a;overflow:hidden;transform:rotate(-8deg);animation:blink 5s infinite;">
            <!-- Facet pattern -->
            <div style="position:absolute;inset:0;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,0.1) 0deg 10deg,transparent 10deg 20deg);opacity:0.4;"></div>
            <!-- Shine -->
            <div style="position:absolute;top:4px;left:5px;width:8px;height:10px;background:white;border-radius:50%;opacity:0.8;transform:rotate(15deg);"></div>
            <div style="position:absolute;top:14px;left:8px;width:4px;height:4px;background:white;border-radius:50%;opacity:0.6;"></div>
          </div>
          <div style="position:absolute;top:2px;right:-4px;width:24px;height:30px;background:radial-gradient(circle at 45% 45%,#ef4444,#b91c1c,#7f1d1d);border-radius:50%;border:2px solid #450a0a;overflow:hidden;transform:rotate(8deg);animation:blink 5s infinite;">
            <!-- Facet pattern -->
            <div style="position:absolute;inset:0;background:repeating-conic-gradient(from 0deg,rgba(255,255,255,0.1) 0deg 10deg,transparent 10deg 20deg);opacity:0.4;"></div>
            <!-- Shine -->
            <div style="position:absolute;top:4px;right:5px;width:8px;height:10px;background:white;border-radius:50%;opacity:0.8;transform:rotate(-15deg);"></div>
            <div style="position:absolute;top:14px;right:8px;width:4px;height:4px;background:white;border-radius:50%;opacity:0.6;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:26px;left:8px;width:8px;height:5px;background:#f472b6;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <div style="position:absolute;top:26px;right:8px;width:8px;height:5px;background:#f472b6;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <!-- Proboscis (cute little nose/mouth) -->
          <div style="position:absolute;bottom:3px;left:50%;transform:translateX(-50%);width:6px;height:8px;background:radial-gradient(circle at 50% 30%,#6b7280,#374151);border-radius:30% 30% 50% 50%;border:1px solid #1f2937;"></div>
        </div>
      </div>
    `,
    3:` <!-- Stag Beetle - Big mandibles, shiny shell -->
      <div style="position:relative;width:140px;height:150px;display:inline-block;animation:beetle-idle 4s ease-in-out infinite;">

        <!-- MANDIBLES - SVG curved pincers with sharp pointy tips (z-index 5) -->
        <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:90px;height:35px;z-index:5;">
          <!-- Left pincer - curved with sharp point -->
          <div style="position:absolute;top:-8px;left:-9px;width:45px;height:35px;transform-origin:right bottom;animation:mandible-snap-l 4s ease-in-out infinite;">
            <svg viewBox="0 0 45 35" style="width:100%;height:100%;overflow:visible;">
              <defs>
                <linearGradient id="pincerGradL" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" style="stop-color:#92400e;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#451a03;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M 43,32 Q 35,30 28,22 Q 22,14 26,6 L 30,2 L 28,8 Q 30,16 38,24 Q 42,28 43,32 Z" fill="url(#pincerGradL)" stroke="#1c0a00" stroke-width="2" stroke-linejoin="miter"/>
            </svg>
          </div>
          <!-- Right pincer - curved with sharp point -->
          <div style="position:absolute;top:-9px;left:54px;width:45px;height:35px;transform-origin:left bottom;animation:mandible-snap-r 4s ease-in-out infinite;">
            <svg viewBox="0 0 45 35" style="width:100%;height:100%;overflow:visible;">
              <defs>
                <linearGradient id="pincerGradR" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" style="stop-color:#92400e;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#451a03;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M 2,32 Q 10,30 17,22 Q 23,14 19,6 L 15,2 L 17,8 Q 15,16 7,24 Q 3,28 2,32 Z" fill="url(#pincerGradR)" stroke="#1c0a00" stroke-width="2" stroke-linejoin="miter"/>
            </svg>
          </div>
        </div>

        <!-- LEFT LEGS (z-index 8) - separate group -->
        <div style="position:absolute;top:70px;left:105px;width:30px;height:50px;z-index:8;animation:beetle-leg-twitch 8s ease-in-out infinite;">
          <div style="position:absolute;left:-7px;top:0;width:4px;height:20px;background:linear-gradient(90deg,#1c1917,#292524);border-radius:3px;transform-origin:center top;transform:rotate(-66deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(60deg);"></div>
          </div>
          <div style="position:absolute;left:-3px;top:17px;width:4px;height:18px;background:linear-gradient(90deg,#1c1917,#292524);border-radius:3px;transform-origin:center top;transform:rotate(-52deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(50deg);"></div>
          </div>
          <div style="position:absolute;left:-6px;top:38px;width:4px;height:16px;background:linear-gradient(90deg,#1c1917,#292524);border-radius:3px;transform-origin:center top;transform:rotate(-44deg);">
            <div style="position:absolute;bottom:-8px;left:0;width:3px;height:10px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(40deg);"></div>
          </div>
        </div>

        <!-- RIGHT LEGS (z-index 8) - separate group -->
        <div style="position:absolute;top:70px;left:5px;width:30px;height:50px;z-index:8;transform:rotate(12deg);animation:beetle-leg-twitch 8s ease-in-out infinite 0.5s;">
          <div style="position:absolute;left:32px;top:0;width:4px;height:20px;background:linear-gradient(90deg,#292524,#1c1917);border-radius:3px;transform-origin:center top;transform:rotate(74deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(-60deg);"></div>
          </div>
          <div style="position:absolute;right:-3px;top:15px;width:4px;height:18px;background:linear-gradient(90deg,#292524,#1c1917);border-radius:3px;transform-origin:center top;transform:rotate(61deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(-50deg);"></div>
          </div>
          <div style="position:absolute;left:33px;top:33px;width:4px;height:16px;background:linear-gradient(90deg,#292524,#1c1917);border-radius:3px;transform-origin:center top;transform:rotate(42deg);">
            <div style="position:absolute;bottom:-8px;left:0;width:3px;height:10px;background:#1c1917;border-radius:3px;transform-origin:top center;transform:rotate(-40deg);"></div>
          </div>
        </div>

        <!-- UNDERBODY/ABDOMEN (z-index 9) - segmented brown abdomen revealed when elytra opens -->
        <div style="position:absolute;top:58px;left:50%;transform:translateX(-50%);width:55px;height:70px;z-index:9;">
          <!-- Segmented abdomen -->
          <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:50px;height:68px;background:linear-gradient(180deg,#78350f 0%,#92400e 20%,#78350f 40%,#92400e 60%,#78350f 80%,#451a03 100%);border-radius:30% 30% 45% 45%;border:2px solid #1c0a00;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.15),inset -2px -2px 8px rgba(0,0,0,0.4);">
            <!-- Segment lines -->
            <div style="position:absolute;top:15px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:28px;left:3px;right:3px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:41px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:54px;left:8px;right:8px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
          </div>
        </div>

        <!-- TRANSPARENT FLIGHT WINGS (z-index 12) - in front of body, behind elytra -->
        <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:70px;height:80px;z-index:12;">
          <!-- Left flight wing - elliptical, spreads very far left -->
          <div style="position:absolute;top:-7px;left:3px;width:130px;height:55px;background:linear-gradient(150deg,rgba(255,248,200,0.45),rgba(210,195,140,0.25));border-radius:50%;transform-origin:right top;opacity:0;animation:beetle-flight-wing-l 10s ease-in-out infinite;border:1px solid rgba(180,160,90,0.35);overflow:hidden;">
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(140,120,70,0.35);transform-origin:right center;transform:rotate(-8deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(140,120,70,0.3);transform-origin:right center;transform:rotate(-18deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:105px;height:1px;background:rgba(140,120,70,0.3);transform-origin:right center;transform:rotate(-28deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(140,120,70,0.25);transform-origin:right center;transform:rotate(-38deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(140,120,70,0.25);transform-origin:right center;transform:rotate(-48deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:75px;height:1px;background:rgba(140,120,70,0.2);transform-origin:right center;transform:rotate(-58deg);"></div>
          </div>
          <!-- Right flight wing - elliptical, spreads very far right -->
          <div style="position:absolute;top:-4px;left:-57px;width:130px;height:55px;background:linear-gradient(210deg,rgba(255,248,200,0.45),rgba(210,195,140,0.25));border-radius:50%;transform-origin:left top;opacity:0;animation:beetle-flight-wing-r 10s ease-in-out infinite;border:1px solid rgba(180,160,90,0.35);overflow:hidden;">
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(140,120,70,0.35);transform-origin:left center;transform:rotate(8deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(140,120,70,0.3);transform-origin:left center;transform:rotate(18deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:105px;height:1px;background:rgba(140,120,70,0.3);transform-origin:left center;transform:rotate(28deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(140,120,70,0.25);transform-origin:left center;transform:rotate(38deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(140,120,70,0.25);transform-origin:left center;transform:rotate(48deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:75px;height:1px;background:rgba(140,120,70,0.2);transform-origin:left center;transform:rotate(58deg);"></div>
          </div>
        </div>

        <!-- ELYTRA - Hinged at TOP, swing open at bottom (z-index 15) -->
        <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:70px;height:75px;z-index:15;">
          <!-- Left elytra - pivots from top-center, swings open to left -->
          <div style="position:absolute;top:0;left:0;width:35px;height:75px;background:radial-gradient(ellipse at 60% 25%,#78350f,#451a03,#1c0a00);border-radius:40% 5% 5% 45%;border:3px solid #1c0a00;border-right:1px solid rgba(0,0,0,0.3);transform-origin:100% 5%;animation:beetle-elytra-open-l 10s ease-in-out infinite;box-shadow:inset 4px 4px 12px rgba(255,255,255,0.2),inset -3px -5px 15px rgba(0,0,0,0.5);overflow:hidden;">
            <div style="position:absolute;top:8px;left:8px;width:18px;height:26px;background:radial-gradient(ellipse,rgba(255,255,255,0.35),transparent);border-radius:50%;transform:rotate(-20deg);"></div>
          </div>
          <!-- Right elytra - pivots from top-center, swings open to right -->
          <div style="position:absolute;top:0;right:0;width:35px;height:75px;background:radial-gradient(ellipse at 40% 25%,#78350f,#451a03,#1c0a00);border-radius:5% 40% 45% 5%;border:3px solid #1c0a00;border-left:1px solid rgba(0,0,0,0.3);transform-origin:0% 5%;animation:beetle-elytra-open-r 10s ease-in-out infinite;box-shadow:inset 4px 4px 12px rgba(255,255,255,0.2),inset -3px -5px 15px rgba(0,0,0,0.5);overflow:hidden;">
            <div style="position:absolute;top:8px;right:8px;width:14px;height:20px;background:radial-gradient(ellipse,rgba(255,255,255,0.2),transparent);border-radius:50%;transform:rotate(20deg);"></div>
          </div>
        </div>

        <!-- THORAX (z-index 20) -->
        <div style="position:absolute;top:42px;left:50%;transform:translateX(-50%);width:50px;height:30px;background:radial-gradient(circle at 40% 35%,#44403c,#1c1917);border-radius:45% 45% 50% 50%;border:2px solid #0c0a09;z-index:20;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.15);"></div>

        <!-- HEAD (z-index 25) -->
        <div style="position:absolute;top:22px;left:50%;transform:translateX(-50%);width:42px;height:35px;background:radial-gradient(circle at 45% 35%,#44403c,#1c1917,#0c0a09);border-radius:45% 45% 40% 40%;z-index:25;border:2px solid #0c0a09;box-shadow:0 3px 8px rgba(0,0,0,0.3);">
          <!-- Eyes -->
          <div style="position:absolute;top:10px;left:4px;width:12px;height:14px;background:radial-gradient(circle at 55% 45%,#1c1917,#000);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:3px;width:4px;height:5px;background:white;border-radius:50%;opacity:0.9;"></div>
          </div>
          <div style="position:absolute;top:10px;right:4px;width:12px;height:14px;background:radial-gradient(circle at 45% 45%,#1c1917,#000);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;right:3px;width:4px;height:5px;background:white;border-radius:50%;opacity:0.9;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:22px;left:2px;width:8px;height:4px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          <div style="position:absolute;top:22px;right:2px;width:8px;height:4px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    5:` <!-- Bumblebee - Cute fuzzy bee with fast wings -->
      <div style="position:relative;width:140px;height:160px;display:inline-block;animation:bee-zoom 8s ease-in-out infinite;transform-origin:center 40px;">

        <!-- WINGS - Bigger translucent with fast flapping -->
        <div style="position:absolute;top:35px;left:50%;transform:translateX(-50%);width:180px;height:80px;z-index:15;">
          <!-- Left forewing - bigger -->
          <div style="position:absolute;top:0;right:90px;width:90px;height:60px;background:rgba(186,230,253,0.7);border:2px solid #18181b;border-radius:30% 70% 10% 90%;transform-origin:right center;animation:bee-wing-l 0.08s ease-in-out infinite alternate;box-shadow:inset 0 0 15px rgba(255,255,255,0.5);"></div>
          <!-- Left hindwing - bigger -->
          <div style="position:absolute;top:35px;right:95px;width:65px;height:45px;background:rgba(186,230,253,0.6);border:2px solid #18181b;border-radius:90% 20% 100% 20%;transform-origin:right center;animation:bee-wing-l 0.08s ease-in-out infinite alternate;box-shadow:inset 0 0 10px rgba(255,255,255,0.4);"></div>
          <!-- Right forewing - bigger -->
          <div style="position:absolute;top:0;left:90px;width:90px;height:60px;background:rgba(186,230,253,0.7);border:2px solid #18181b;border-radius:70% 30% 90% 10%;transform-origin:left center;animation:bee-wing-r 0.08s ease-in-out infinite alternate;box-shadow:inset 0 0 15px rgba(255,255,255,0.5);"></div>
          <!-- Right hindwing - bigger -->
          <div style="position:absolute;top:35px;left:95px;width:65px;height:45px;background:rgba(186,230,253,0.6);border:2px solid #18181b;border-radius:20% 90% 20% 100%;transform-origin:left center;animation:bee-wing-r 0.08s ease-in-out infinite alternate;box-shadow:inset 0 0 10px rgba(255,255,255,0.4);"></div>
        </div>

        <!-- HEAD - Yellow fuzzy -->
        <div style="position:absolute;top:18px;left:50%;transform:translateX(-50%);width:50px;height:46px;background:radial-gradient(circle at 30% 30%,#fcd34d,#fbbf24,#f59e0b);border:3px solid #18181b;border-radius:55% 55% 45% 45%;z-index:50;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.3);">
          <!-- Fuzz texture -->
          <div style="position:absolute;top:5px;left:8px;width:12px;height:10px;background:rgba(255,255,255,0.3);border-radius:50%;"></div>
          <div style="position:absolute;top:15px;right:6px;width:8px;height:8px;background:rgba(255,255,255,0.25);border-radius:50%;"></div>
          <!-- Antennae -->
          <div style="position:absolute;top:-22px;left:12px;width:3px;height:26px;background:#18181b;border-radius:3px;transform-origin:bottom center;animation:ant-sway 3s ease-in-out infinite;">
            <div style="position:absolute;top:-8px;left:-5px;width:13px;height:13px;background:#27272a;border:2px solid #18181b;border-radius:50%;"></div>
          </div>
          <div style="position:absolute;top:-22px;right:12px;width:3px;height:26px;background:#18181b;border-radius:3px;transform-origin:bottom center;animation:ant-sway 3.5s ease-in-out infinite reverse;">
            <div style="position:absolute;top:-8px;left:-5px;width:13px;height:13px;background:#27272a;border:2px solid #18181b;border-radius:50%;"></div>
          </div>
          <!-- Eyes -->
          <div style="position:absolute;top:14px;left:6px;width:14px;height:16px;background:#18181b;border-radius:50%;animation:blink 4s infinite;overflow:hidden;">
            <div style="position:absolute;top:2px;left:3px;width:5px;height:6px;background:white;border-radius:50%;"></div>
            <div style="position:absolute;bottom:3px;right:3px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.5;"></div>
          </div>
          <div style="position:absolute;top:14px;right:6px;width:14px;height:16px;background:#18181b;border-radius:50%;animation:blink 4s infinite;overflow:hidden;">
            <div style="position:absolute;top:2px;right:3px;width:5px;height:6px;background:white;border-radius:50%;"></div>
            <div style="position:absolute;bottom:3px;left:3px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.5;"></div>
          </div>
          <!-- Mouth - cute w shape -->
          <div style="position:absolute;bottom:6px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:8px;height:5px;border:2px solid #18181b;border-top:none;border-radius:0 0 8px 8px;margin-right:-1px;"></div>
            <div style="width:8px;height:5px;border:2px solid #18181b;border-top:none;border-radius:0 0 8px 8px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:28px;left:2px;width:10px;height:5px;background:#fecdd3;border-radius:50%;filter:blur(1px);opacity:0.7;"></div>
          <div style="position:absolute;top:28px;right:2px;width:10px;height:5px;background:#fecdd3;border-radius:50%;filter:blur(1px);opacity:0.7;"></div>
        </div>

        <!-- THORAX - Black fuzzy round -->
        <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:58px;height:40px;background:radial-gradient(circle at 35% 35%,#3f3f46,#27272a,#18181b);border:3px solid #18181b;border-radius:45%;z-index:40;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.15);">
          <div style="position:absolute;top:5px;left:10px;width:10px;height:8px;background:rgba(255,255,255,0.15);border-radius:50%;"></div>
        </div>

        <!-- ABDOMEN - Yellow and black stripes -->
        <div style="position:absolute;top:85px;left:50%;transform:translateX(-50%);width:65px;height:75px;background:repeating-linear-gradient(to bottom,#fbbf24 0px,#fbbf24 18px,#27272a 18px,#27272a 36px);border:3px solid #18181b;border-radius:40% 40% 50% 50% / 30% 30% 70% 70%;z-index:20;box-shadow:inset 3px 3px 10px rgba(255,255,255,0.2),inset -2px -2px 8px rgba(0,0,0,0.2);">
          <!-- Fuzz highlights -->
          <div style="position:absolute;top:8px;left:10px;width:15px;height:12px;background:rgba(255,255,255,0.25);border-radius:50%;"></div>
          <div style="position:absolute;top:30px;right:8px;width:10px;height:10px;background:rgba(255,255,255,0.2);border-radius:50%;"></div>
          <!-- Stinger -->
          <div style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:14px;height:22px;background:#27272a;clip-path:polygon(0 0,100% 0,50% 100%);z-index:10;"></div>
        </div>
      </div>
    `,
    4:` <!-- Metallic Green Stag Beetle - Shiny iridescent with black pincers -->
      <div style="position:relative;width:140px;height:160px;display:inline-block;animation:beetle-idle 4s ease-in-out infinite;">

        <!-- LONG MANDIBLES - Shiny black curved pincers (z-index 5) -->
        <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);width:110px;height:45px;z-index:5;">
          <!-- Left pincer - shiny black -->
          <div style="position:absolute;top:-12px;left:-15px;width:55px;height:45px;transform-origin:right bottom;animation:mandible-snap-l 4s ease-in-out infinite;">
            <svg viewBox="0 0 55 45" style="width:100%;height:100%;overflow:visible;">
              <defs>
                <linearGradient id="blackPincerL" x1="0%" y1="30%" x2="100%" y2="70%">
                  <stop offset="0%" style="stop-color:#374151;stop-opacity:1" />
                  <stop offset="40%" style="stop-color:#1f2937;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#030712;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M 52,42 Q 42,38 32,28 Q 24,18 22,10 Q 20,4 24,1 L 28,0 L 25,6 Q 26,14 34,24 Q 42,34 52,42 Z" fill="url(#blackPincerL)" stroke="#000" stroke-width="2" stroke-linejoin="miter"/>
            </svg>
          </div>
          <!-- Right pincer - shiny black -->
          <div style="position:absolute;top:-12px;left:70px;width:55px;height:45px;transform-origin:left bottom;animation:mandible-snap-r 4s ease-in-out infinite;">
            <svg viewBox="0 0 55 45" style="width:100%;height:100%;overflow:visible;">
              <defs>
                <linearGradient id="blackPincerR" x1="100%" y1="30%" x2="0%" y2="70%">
                  <stop offset="0%" style="stop-color:#374151;stop-opacity:1" />
                  <stop offset="40%" style="stop-color:#1f2937;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#030712;stop-opacity:1" />
                </linearGradient>
              </defs>
              <path d="M 3,42 Q 13,38 23,28 Q 31,18 33,10 Q 35,4 31,1 L 27,0 L 30,6 Q 29,14 21,24 Q 13,34 3,42 Z" fill="url(#blackPincerR)" stroke="#000" stroke-width="2" stroke-linejoin="miter"/>
            </svg>
          </div>
        </div>

        <!-- LEFT LEGS - Black/dark (z-index 8) -->
        <div style="position:absolute;top:80px;left:105px;width:30px;height:50px;z-index:8;animation:beetle-leg-twitch 8s ease-in-out infinite;">
          <div style="position:absolute;left:-7px;top:0;width:4px;height:20px;background:linear-gradient(90deg,#1f2937,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(-66deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(60deg);"></div>
          </div>
          <div style="position:absolute;left:-3px;top:17px;width:4px;height:18px;background:linear-gradient(90deg,#1f2937,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(-52deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(50deg);"></div>
          </div>
          <div style="position:absolute;left:-6px;top:38px;width:4px;height:16px;background:linear-gradient(90deg,#1f2937,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(-44deg);">
            <div style="position:absolute;bottom:-8px;left:0;width:3px;height:10px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(40deg);"></div>
          </div>
        </div>

        <!-- RIGHT LEGS - Black/dark (z-index 8) -->
        <div style="position:absolute;top:80px;left:5px;width:30px;height:50px;z-index:8;transform:rotate(12deg);animation:beetle-leg-twitch 8s ease-in-out infinite 0.5s;">
          <div style="position:absolute;left:32px;top:0;width:4px;height:20px;background:linear-gradient(90deg,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(74deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(-60deg);"></div>
          </div>
          <div style="position:absolute;right:-3px;top:15px;width:4px;height:18px;background:linear-gradient(90deg,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(61deg);">
            <div style="position:absolute;bottom:-10px;left:0;width:3px;height:12px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(-50deg);"></div>
          </div>
          <div style="position:absolute;left:33px;top:33px;width:4px;height:16px;background:linear-gradient(90deg,#374151,#1f2937);border-radius:3px;transform-origin:center top;transform:rotate(42deg);">
            <div style="position:absolute;bottom:-8px;left:0;width:3px;height:10px;background:#1f2937;border-radius:3px;transform-origin:top center;transform:rotate(-40deg);"></div>
          </div>
        </div>

        <!-- UNDERBODY/ABDOMEN (z-index 9) - dark metallic green -->
        <div style="position:absolute;top:68px;left:50%;transform:translateX(-50%);width:55px;height:70px;z-index:9;">
          <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:50px;height:68px;background:linear-gradient(180deg,#15803d 0%,#166534 20%,#14532d 40%,#166534 60%,#14532d 80%,#052e16 100%);border-radius:30% 30% 45% 45%;border:2px solid #022c22;box-shadow:inset 2px 2px 8px rgba(200,255,200,0.15),inset -2px -2px 8px rgba(0,0,0,0.5);">
            <div style="position:absolute;top:15px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:28px;left:3px;right:3px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:41px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:54px;left:8px;right:8px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
          </div>
        </div>

        <!-- TRANSPARENT FLIGHT WINGS (z-index 12) - in front of body, behind elytra -->
        <div style="position:absolute;top:65px;left:50%;transform:translateX(-50%);width:70px;height:80px;z-index:12;">
          <div style="position:absolute;top:-4px;left:0px;width:130px;height:55px;background:linear-gradient(150deg,rgba(255,248,200,0.45),rgba(210,195,140,0.25));border-radius:50%;transform-origin:right top;opacity:0;animation:beetle-flight-wing-l 10s ease-in-out infinite;border:1px solid rgba(180,160,90,0.35);overflow:hidden;">
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(140,120,70,0.35);transform-origin:right center;transform:rotate(-8deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(140,120,70,0.3);transform-origin:right center;transform:rotate(-18deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:105px;height:1px;background:rgba(140,120,70,0.3);transform-origin:right center;transform:rotate(-28deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(140,120,70,0.25);transform-origin:right center;transform:rotate(-38deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(140,120,70,0.25);transform-origin:right center;transform:rotate(-48deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:75px;height:1px;background:rgba(140,120,70,0.2);transform-origin:right center;transform:rotate(-58deg);"></div>
          </div>
          <div style="position:absolute;top:-3px;left:-54px;width:130px;height:55px;background:linear-gradient(210deg,rgba(255,248,200,0.45),rgba(210,195,140,0.25));border-radius:50%;transform-origin:left top;opacity:0;animation:beetle-flight-wing-r 10s ease-in-out infinite;border:1px solid rgba(180,160,90,0.35);overflow:hidden;">
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(140,120,70,0.35);transform-origin:left center;transform:rotate(8deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(140,120,70,0.3);transform-origin:left center;transform:rotate(18deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:105px;height:1px;background:rgba(140,120,70,0.3);transform-origin:left center;transform:rotate(28deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(140,120,70,0.25);transform-origin:left center;transform:rotate(38deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(140,120,70,0.25);transform-origin:left center;transform:rotate(48deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:75px;height:1px;background:rgba(140,120,70,0.2);transform-origin:left center;transform:rotate(58deg);"></div>
          </div>
        </div>

        <!-- ELYTRA - Highly metallic iridescent green shell (z-index 15) -->
        <div style="position:absolute;top:65px;left:50%;transform:translateX(-50%);width:70px;height:75px;z-index:15;">
          <!-- Left elytra - shiny metallic green with gold-green highlights -->
          <div style="position:absolute;top:0;left:0;width:35px;height:75px;background:radial-gradient(ellipse at 40% 25%,#d9f99d,#a3e635,#65a30d,#3f6212,#1a2e05);border-radius:40% 5% 5% 45%;border:3px solid #14532d;border-right:1px solid rgba(0,0,0,0.4);transform-origin:100% 5%;animation:beetle-elytra-open-l 10s ease-in-out infinite;box-shadow:inset 6px 6px 20px rgba(255,255,255,0.6),inset -4px -6px 20px rgba(0,0,0,0.5),0 2px 4px rgba(0,0,0,0.3);overflow:hidden;">
            <!-- Main bright reflection -->
            <div style="position:absolute;top:5px;left:4px;width:22px;height:35px;background:radial-gradient(ellipse at 50% 40%,rgba(255,255,240,0.8),rgba(255,255,200,0.4),transparent);border-radius:50%;transform:rotate(-15deg);"></div>
            <!-- Secondary highlight -->
            <div style="position:absolute;top:45px;left:8px;width:12px;height:18px;background:radial-gradient(ellipse,rgba(255,255,220,0.4),transparent);border-radius:50%;"></div>
            <!-- Edge reflection -->
            <div style="position:absolute;top:20px;left:1px;width:4px;height:30px;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.3),transparent);border-radius:2px;"></div>
          </div>
          <!-- Right elytra - shiny metallic green with gold-green highlights -->
          <div style="position:absolute;top:0;right:0;width:35px;height:75px;background:radial-gradient(ellipse at 60% 25%,#d9f99d,#a3e635,#65a30d,#3f6212,#1a2e05);border-radius:5% 40% 45% 5%;border:3px solid #14532d;border-left:1px solid rgba(0,0,0,0.4);transform-origin:0% 5%;animation:beetle-elytra-open-r 10s ease-in-out infinite;box-shadow:inset 6px 6px 20px rgba(255,255,255,0.6),inset -4px -6px 20px rgba(0,0,0,0.5),0 2px 4px rgba(0,0,0,0.3);overflow:hidden;">
            <!-- Main bright reflection -->
            <div style="position:absolute;top:5px;right:4px;width:18px;height:28px;background:radial-gradient(ellipse at 50% 40%,rgba(255,255,240,0.7),rgba(255,255,200,0.3),transparent);border-radius:50%;transform:rotate(15deg);"></div>
            <!-- Secondary highlight -->
            <div style="position:absolute;top:45px;right:8px;width:10px;height:15px;background:radial-gradient(ellipse,rgba(255,255,220,0.35),transparent);border-radius:50%;"></div>
            <!-- Edge reflection -->
            <div style="position:absolute;top:20px;right:1px;width:4px;height:30px;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.25),transparent);border-radius:2px;"></div>
          </div>
        </div>

        <!-- THORAX - Metallic green with shine (z-index 20) -->
        <div style="position:absolute;top:52px;left:50%;transform:translateX(-50%);width:50px;height:30px;background:radial-gradient(circle at 35% 30%,#a3e635,#65a30d,#3f6212,#1a2e05);border-radius:45% 45% 50% 50%;border:2px solid #14532d;z-index:20;box-shadow:inset 4px 4px 12px rgba(255,255,255,0.5),inset -3px -3px 10px rgba(0,0,0,0.4);overflow:hidden;">
          <div style="position:absolute;top:3px;left:8px;width:15px;height:12px;background:radial-gradient(ellipse,rgba(255,255,240,0.6),transparent);border-radius:50%;"></div>
        </div>

        <!-- HEAD - Metallic green with bright highlight (z-index 25) -->
        <div style="position:absolute;top:28px;left:50%;transform:translateX(-50%);width:44px;height:38px;background:radial-gradient(circle at 40% 30%,#bef264,#84cc16,#4d7c0f,#365314,#1a2e05);border-radius:45% 45% 40% 40%;z-index:25;border:2px solid #14532d;box-shadow:0 3px 8px rgba(0,0,0,0.4),inset 4px 4px 12px rgba(255,255,255,0.4);overflow:hidden;">
          <!-- Bright head reflection -->
          <div style="position:absolute;top:2px;left:6px;width:18px;height:16px;background:radial-gradient(ellipse,rgba(255,255,240,0.7),transparent);border-radius:50%;"></div>
          <!-- Eyes - dark -->
          <div style="position:absolute;top:12px;left:4px;width:12px;height:14px;background:radial-gradient(circle at 55% 45%,#1f2937,#030712);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:3px;width:4px;height:5px;background:white;border-radius:50%;opacity:0.9;"></div>
          </div>
          <div style="position:absolute;top:12px;right:4px;width:12px;height:14px;background:radial-gradient(circle at 45% 45%,#1f2937,#030712);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;right:3px;width:4px;height:5px;background:white;border-radius:50%;opacity:0.9;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:24px;left:2px;width:8px;height:4px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          <div style="position:absolute;top:24px;right:2px;width:8px;height:4px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    6:` <!-- Lightning Bug (Firefly) - Glowing segmented abdomen -->
      <div style="position:relative;width:140px;height:200px;display:inline-block;animation:firefly-float 5s ease-in-out infinite;">

        <!-- YELLOW GLOWING HALO - surrounds whole creature when tail is lit (z-index 0) -->
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-30%);width:180px;height:220px;border-radius:50%;z-index:0;animation:firefly-halo 2s ease-in-out infinite;pointer-events:none;"></div>

        <!-- TRANSPARENT FLIGHT WINGS (z-index 8) - in front of body, behind elytra -->
        <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:70px;height:80px;z-index:8;">
          <!-- Left flight wing - spreads LEFT -->
          <div style="position:absolute;top:-3px;left:-7px;width:130px;height:55px;background:linear-gradient(150deg,rgba(180,220,210,0.55),rgba(140,200,190,0.4),rgba(160,210,200,0.3));border-radius:50%;transform-origin:right top;opacity:0;animation:firefly-flight-wing-l 6s ease-in-out infinite;border:1px solid rgba(100,180,150,0.5);overflow:hidden;">
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(80,140,120,0.35);transform-origin:right center;transform:rotate(-8deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(80,140,120,0.3);transform-origin:right center;transform:rotate(-18deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:105px;height:1px;background:rgba(80,140,120,0.3);transform-origin:right center;transform:rotate(-28deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:100px;height:1px;background:rgba(80,140,120,0.25);transform-origin:right center;transform:rotate(-38deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:90px;height:1px;background:rgba(80,140,120,0.25);transform-origin:right center;transform:rotate(-48deg);"></div>
            <div style="position:absolute;top:15px;right:0;width:75px;height:1px;background:rgba(80,140,120,0.2);transform-origin:right center;transform:rotate(-58deg);"></div>
          </div>
          <!-- Right flight wing - spreads RIGHT -->
          <div style="position:absolute;top:-2px;left:-41px;width:130px;height:55px;background:linear-gradient(210deg,rgba(180,220,210,0.55),rgba(140,200,190,0.4),rgba(160,210,200,0.3));border-radius:50%;transform-origin:left top;opacity:0;animation:firefly-flight-wing-r 6s ease-in-out infinite;border:1px solid rgba(100,180,150,0.5);overflow:hidden;">
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(80,140,120,0.35);transform-origin:left center;transform:rotate(8deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(80,140,120,0.3);transform-origin:left center;transform:rotate(18deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:105px;height:1px;background:rgba(80,140,120,0.3);transform-origin:left center;transform:rotate(28deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:100px;height:1px;background:rgba(80,140,120,0.25);transform-origin:left center;transform:rotate(38deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:90px;height:1px;background:rgba(80,140,120,0.25);transform-origin:left center;transform:rotate(48deg);"></div>
            <div style="position:absolute;top:15px;left:0;width:75px;height:1px;background:rgba(80,140,120,0.2);transform-origin:left center;transform:rotate(58deg);"></div>
          </div>
        </div>

        <!-- UNDERBODY/ABDOMEN - Dark reddish-brown segmented (z-index 7) -->
        <div style="position:absolute;top:58px;left:50%;transform:translateX(-50%);width:55px;height:85px;z-index:7;">
          <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:52px;height:82px;background:linear-gradient(180deg,#8b4513 0%,#5d3a1a 15%,#4a2c10 30%,#5d3a1a 45%,#4a2c10 60%,#5d3a1a 75%,#3d2510 100%);border-radius:30% 30% 45% 45%;border:2px solid #2d1a08;box-shadow:inset 2px 2px 8px rgba(180,140,100,0.15),inset -2px -2px 8px rgba(0,0,0,0.5);">
            <!-- Segment lines -->
            <div style="position:absolute;top:15px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:30px;left:3px;right:3px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:45px;left:5px;right:5px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
            <div style="position:absolute;top:60px;left:8px;right:8px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;"></div>
          </div>
        </div>

        <!-- ELYTRA - Long black with yellow/gold border (z-index 10) - extends full body length -->
        <div style="position:absolute;top:42px;left:50%;transform:translateX(-50%);width:70px;height:150px;z-index:10;">
          <!-- Left elytra - full length with yellow border -->
          <div style="position:absolute;top:0;left:0;width:35px;height:150px;background:linear-gradient(90deg,#e5c07b 0%,#c9a45c 8%,#1f1f1f 18%,#2d2d2d 50%,#1a1a1a 100%);border-radius:45% 5% 20% 50%;border:2px solid #d4a84b;transform-origin:100% 3%;animation:firefly-elytra-l 6s ease-in-out infinite;box-shadow:inset 3px 3px 12px rgba(255,255,255,0.12),inset -2px -2px 10px rgba(0,0,0,0.6);">
            <div style="position:absolute;top:10px;left:4px;width:10px;height:50px;background:radial-gradient(ellipse,rgba(255,255,255,0.15),transparent);border-radius:50%;"></div>
          </div>
          <!-- Right elytra - full length with yellow border -->
          <div style="position:absolute;top:0;right:0;width:35px;height:150px;background:linear-gradient(270deg,#e5c07b 0%,#c9a45c 8%,#1f1f1f 18%,#2d2d2d 50%,#1a1a1a 100%);border-radius:5% 45% 50% 20%;border:2px solid #d4a84b;transform-origin:0% 3%;animation:firefly-elytra-r 6s ease-in-out infinite;box-shadow:inset 3px 3px 12px rgba(255,255,255,0.12),inset -2px -2px 10px rgba(0,0,0,0.6);">
            <div style="position:absolute;top:10px;right:4px;width:10px;height:50px;background:radial-gradient(ellipse,rgba(255,255,255,0.15),transparent);border-radius:50%;"></div>
          </div>
        </div>

        <!-- GLOWING ABDOMEN - Multiple segmented glowing sections (z-index 8) -->
        <div style="position:absolute;top:130px;left:50%;transform:translateX(-50%);width:50px;height:70px;z-index:8;">
          <!-- Segment 1 - transitional (dark to glow) -->
          <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:46px;height:16px;background:linear-gradient(180deg,#4a4a3a,#6b6b4a,#8a8a5a);border-radius:30% 30% 20% 20%;border:2px solid #3a3a2a;animation:firefly-glow-seg1 2s ease-in-out infinite;"></div>
          <!-- Segment 2 - glowing -->
          <div style="position:absolute;top:13px;left:50%;transform:translateX(-50%);width:44px;height:16px;background:radial-gradient(ellipse at 50% 50%,#fffde7,#fff59d,#c5e063);border-radius:20%;border:2px solid #a0b83a;animation:firefly-glow 2s ease-in-out infinite;box-shadow:0 0 12px rgba(200,230,80,0.6);"></div>
          <!-- Segment 3 - bright glowing -->
          <div style="position:absolute;top:26px;left:50%;transform:translateX(-50%);width:40px;height:16px;background:radial-gradient(ellipse at 50% 50%,#ffffff,#fffde7,#fff59d,#e8f076);border-radius:20%;border:2px solid #b8c94a;animation:firefly-glow 2s ease-in-out infinite 0.2s;box-shadow:0 0 18px rgba(230,245,100,0.7);"></div>
          <!-- Segment 4 - brightest glowing -->
          <div style="position:absolute;top:39px;left:50%;transform:translateX(-50%);width:34px;height:18px;background:radial-gradient(ellipse at 50% 40%,#ffffff,#fffde7,#fff59d,#f0f68c);border-radius:30% 30% 45% 45%;border:2px solid #c8d95a;animation:firefly-glow 2s ease-in-out infinite 0.4s;box-shadow:0 0 25px #f5f99a,0 0 45px rgba(245,250,150,0.6),0 0 65px rgba(245,250,150,0.3);"></div>
          <!-- Tip segment - pointed glow -->
          <div style="position:absolute;top:54px;left:50%;transform:translateX(-50%);width:24px;height:14px;background:radial-gradient(ellipse at 50% 30%,#ffffff,#fffde7,#f5f99a);border-radius:40% 40% 55% 55%;border:2px solid #d0e06a;animation:firefly-glow 2s ease-in-out infinite 0.6s;box-shadow:0 0 20px #f8fc9a,0 0 35px rgba(248,252,150,0.5);"></div>
          <!-- Inner glow highlights -->
          <div style="position:absolute;top:30px;left:50%;transform:translateX(-50%);width:20px;height:25px;background:radial-gradient(ellipse,rgba(255,255,255,0.8),rgba(255,255,230,0.3),transparent);border-radius:50%;animation:firefly-glow 2s ease-in-out infinite;pointer-events:none;"></div>
        </div>

        <!-- THORAX/PRONOTUM - Red-orange shield (z-index 15) -->
        <div style="position:absolute;top:32px;left:50%;transform:translateX(-50%);width:48px;height:24px;background:radial-gradient(ellipse at 40% 30%,#ff7043,#f4511e,#d84315);border-radius:50% 50% 45% 45%;border:2px solid #bf360c;z-index:15;box-shadow:inset 2px 2px 8px rgba(255,200,180,0.4),inset -2px -2px 6px rgba(0,0,0,0.3);">
          <div style="position:absolute;top:3px;left:8px;width:12px;height:8px;background:radial-gradient(ellipse,rgba(255,255,255,0.4),transparent);border-radius:50%;"></div>
        </div>

        <!-- HEAD - Cute red face (z-index 20) -->
        <div style="position:absolute;top:15px;left:50%;transform:translateX(-50%);width:42px;height:28px;background:radial-gradient(circle at 40% 35%,#ff8a65,#f4511e,#d84315);border-radius:50% 50% 45% 45%;z-index:20;border:2px solid #bf360c;box-shadow:0 2px 6px rgba(0,0,0,0.4),inset 2px 2px 6px rgba(255,200,180,0.3);">
          <!-- Eyes - big cute black eyes -->
          <div style="position:absolute;top:6px;left:4px;width:14px;height:16px;background:radial-gradient(circle at 55% 45%,#2d2d2d,#0a0a0a);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;left:4px;width:5px;height:6px;background:white;border-radius:50%;opacity:0.9;"></div>
            <div style="position:absolute;bottom:3px;right:3px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.5;"></div>
          </div>
          <div style="position:absolute;top:6px;right:4px;width:14px;height:16px;background:radial-gradient(circle at 45% 45%,#2d2d2d,#0a0a0a);border-radius:50%;border:1px solid #000;overflow:hidden;animation:blink 4s infinite;">
            <div style="position:absolute;top:3px;right:4px;width:5px;height:6px;background:white;border-radius:50%;opacity:0.9;"></div>
            <div style="position:absolute;bottom:3px;left:3px;width:3px;height:3px;background:white;border-radius:50%;opacity:0.5;"></div>
          </div>
          <!-- Cute smile -->
          <div style="position:absolute;bottom:3px;left:50%;transform:translateX(-50%);width:10px;height:5px;border-bottom:2px solid #7f0000;border-radius:0 0 10px 10px;"></div>
          <!-- Blush -->
          <div style="position:absolute;top:18px;left:0px;width:8px;height:5px;background:#ffab91;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <div style="position:absolute;top:18px;right:0px;width:8px;height:5px;background:#ffab91;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
        </div>

        <!-- ANTENNAE - Close together like ladybug (z-index 15 - behind head) -->
        <div style="position:absolute;top:-2px;left:50%;transform:translateX(-50%);width:40px;height:30px;z-index:15;">
          <!-- Left antenna -->
          <div style="position:absolute;top:10px;left:8px;width:3px;height:24px;background:linear-gradient(180deg,#1a1a1a 0%,#3d3d3d 20%,#1a1a1a 40%,#3d3d3d 60%,#1a1a1a 80%,#3d3d3d 100%);border-radius:2px;transform-origin:bottom center;transform:rotate(-20deg);animation:firefly-antenna-l 4s ease-in-out infinite;">
            <div style="position:absolute;top:-4px;left:-1px;width:5px;height:5px;background:#2d2d2d;border-radius:50%;"></div>
          </div>
          <!-- Right antenna -->
          <div style="position:absolute;top:10px;right:8px;width:3px;height:24px;background:linear-gradient(180deg,#1a1a1a 0%,#3d3d3d 20%,#1a1a1a 40%,#3d3d3d 60%,#1a1a1a 80%,#3d3d3d 100%);border-radius:2px;transform-origin:bottom center;transform:rotate(20deg);animation:firefly-antenna-r 4s ease-in-out infinite;">
            <div style="position:absolute;top:-4px;right:-1px;width:5px;height:5px;background:#2d2d2d;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Ambient glow around the glowing segments -->
        <div style="position:absolute;top:130px;left:50%;transform:translateX(-50%);width:90px;height:90px;background:radial-gradient(circle,rgba(240,250,120,0.35),rgba(230,245,100,0.15) 40%,transparent 70%);border-radius:50%;z-index:1;animation:firefly-ambient 2s ease-in-out infinite;pointer-events:none;"></div>
      </div>
    `,
  };

  return insectDesigns[variant]||insectDesigns[0];
}
