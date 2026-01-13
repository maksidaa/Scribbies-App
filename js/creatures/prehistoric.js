function renderAdultPrehistoric(variantIndex, level = 1){
  const variant=variantIndex||0;

  // T-REX ONLY - Carefully recreated from TRexBuddy.html
  // Original: 320×380px, scaled to 240×280px (0.75 scale factor)
  const prehistoricDesigns={
    0:`
      <div style="position:relative;width:240px;height:280px;animation:trex-stomp 2s ease-in-out infinite;">
        <!-- TAIL (z-index:10) - 160×80 → 120×60, bottom:70→52, left:-40→-30 -->
        <div style="position:absolute;width:120px;height:60px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:0 100% 20% 50% / 0 100% 20% 50%;bottom:52px;left:-30px;z-index:10;transform-origin:right center;animation:trex-tail-sway 2s ease-in-out infinite;">
          <!-- Spike s-tail-1: top:-18→-14, left:40→30 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-14px;left:30px;transform:rotate(-1deg);"></div>
          <!-- Spike s-tail-2: top:-19→-14, left:5→4 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-14px;left:4px;transform:rotate(-11deg);"></div>
        </div>
        <!-- LEFT LEG (z-index:10) - with walking animation -->
        <div style="position:absolute;width:45px;height:60px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 11px 11px;bottom:15px;left:68px;z-index:10;transform-origin:top center;animation:trex-leg-left 0.8s ease-in-out infinite;">
          <!-- Toe claws -->
          <div style="position:absolute;bottom:-3px;left:4px;display:flex;gap:2px;">
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <!-- RIGHT LEG (z-index:10) - with walking animation -->
        <div style="position:absolute;width:45px;height:60px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 11px 11px;bottom:15px;left:128px;z-index:10;transform-origin:top center;animation:trex-leg-right 0.8s ease-in-out infinite;">
          <div style="position:absolute;bottom:-3px;left:4px;display:flex;gap:2px;">
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <!-- BODY (z-index:20) - with breathing animation -->
        <div style="position:absolute;width:128px;height:150px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;top:82px;left:64px;z-index:20;transform-origin:center bottom;animation:trex-breathe 3s ease-in-out infinite;">
          <!-- Spike s-body-1 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-14px;left:-4px;transform:rotate(15deg);"></div>
          <!-- Spike s-body-2 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:2px;left:-4px;transform:rotate(15deg);"></div>
          <!-- Belly patch -->
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:96px;height:108px;background:#fef9c3;border-radius:50%;opacity:0.4;"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:35px;height:25px;background:rgba(255,255,255,0.3);border-radius:50%;top:15px;left:20px;filter:blur(4px);"></div>
        </div>
        <!-- ARMS (z-index:35) - arm-group at top:195→146 -->
        <!-- Left arm: 45×18 → 34×14, left:95→71, transform-origin:left center -->
        <div style="position:absolute;width:34px;height:14px;background:#4ade80;border:3px solid #064e3b;border-radius:8px;top:146px;left:71px;transform-origin:left center;animation:trex-arm-wave 0.8s ease-in-out infinite alternate;z-index:35;">
          <!-- Claw: 14×14 → 10×10, right:-10→-8, top:0 -->
          <div style="position:absolute;right:-8px;top:0;width:10px;height:10px;background:#cbd5e1;clip-path:polygon(0 20%,100% 50%,0 80%);border:1px solid #064e3b;"></div>
        </div>
        <!-- Right arm: right:25→19, transform:scaleX(-1), transform-origin:left center -->
        <div style="position:absolute;width:34px;height:14px;background:#4ade80;border:3px solid #064e3b;border-radius:8px;top:146px;right:19px;transform-origin:left center;transform:scaleX(-1);animation:trex-arm-wave 0.8s ease-in-out infinite alternate;z-index:35;">
          <div style="position:absolute;right:-8px;top:0;width:10px;height:10px;background:#cbd5e1;clip-path:polygon(0 20%,100% 50%,0 80%);border:1px solid #064e3b;"></div>
        </div>
        <!-- HEAD (z-index:40) - 210×140 → 158×105, top:30→22, left:100→75 - with head bob -->
        <div style="position:absolute;width:158px;height:105px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:30px 75px 30px 30px;top:22px;left:75px;z-index:40;transform-origin:bottom center;animation:trex-head-bob 3s ease-in-out infinite;">
          <!-- Eyes: top:35→26, right:75→56, gap:25→19 -->
          <div style="position:absolute;top:26px;right:56px;display:flex;gap:19px;">
            <!-- Each eye: 32×38 → 24×28 -->
            <div style="width:24px;height:28px;background:#1a1a1a;border-radius:50%;position:relative;overflow:hidden;animation:trex-blink 4s infinite;">
              <!-- Sparkle/pupil: animated to look around -->
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:4px;left:4px;animation:trex-eye-look 6s ease-in-out infinite;"></div>
            </div>
            <div style="width:24px;height:28px;background:#1a1a1a;border-radius:50%;position:relative;overflow:hidden;animation:trex-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:4px;left:4px;animation:trex-eye-look 6s ease-in-out infinite;"></div>
            </div>
          </div>
          <!-- Nostrils -->
          <div style="position:absolute;right:26px;top:68px;display:flex;gap:6px;">
            <div style="width:4px;height:8px;background:#064e3b;border-radius:50%;opacity:0.4;"></div>
            <div style="width:4px;height:8px;background:#064e3b;border-radius:50%;opacity:0.4;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:58px;right:38px;width:14px;height:7px;background:radial-gradient(ellipse,#fca5a5,transparent);border-radius:50%;opacity:0.5;"></div>
          <div style="position:absolute;top:58px;right:82px;width:14px;height:7px;background:radial-gradient(ellipse,#fca5a5,transparent);border-radius:50%;opacity:0.5;"></div>
          <!-- Mouth area: bottom:20→15, right:-1, width:140→105 -->
          <div style="position:absolute;bottom:15px;right:-1px;width:105px;">
            <!-- Lower jaw (animates open/close) - pivots from top -->
            <div style="transform-origin:100% 0%;animation:trex-roar 4s ease-in-out infinite;">
              <!-- Mouth line: height:40→30, border-bottom:5→4px -->
              <div style="width:100%;height:30px;border-bottom:4px solid #064e3b;border-radius:0 0 40% 10%;"></div>
              <!-- Teeth row: positioned at mouth line border, right:22→16, gap:3→2 -->
              <div style="display:flex;gap:2px;position:absolute;top:26px;right:16px;">
                <!-- 6 teeth: 14×18 → 10×14 -->
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
                <div style="width:10px;height:14px;background:white;border:1px solid #ddd;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,

    // ===== BRONTO - Prehistoric Variant 1 =====
    1:`
      <div style="position:relative;width:240px;height:280px;animation:bronto-float 3s ease-in-out infinite;">
        <!-- TAIL (z-index 10) - with whip animation -->
        <div style="position:absolute;width:130px;height:40px;background:linear-gradient(145deg,#2dd4bf,#0d9488);border:4px solid #134e4a;border-radius:60px 0 0 60px;bottom:85px;left:-55px;z-index:10;transform-origin:right center;animation:bronto-tail-sway 4s ease-in-out infinite;">
          <!-- Tail highlight -->
          <div style="position:absolute;width:40px;height:12px;background:rgba(255,255,255,0.25);border-radius:50%;top:8px;left:30px;filter:blur(2px);"></div>
        </div>
        <!-- BACK LEGS (shadows) - with walking animation -->
        <div style="position:absolute;width:35px;height:50px;background:#0d9488;border:4px solid #134e4a;border-radius:10px;bottom:15px;left:85px;z-index:5;filter:brightness(0.8);transform-origin:top center;animation:bronto-leg-back-left 2s ease-in-out infinite;">
          <div style="position:absolute;bottom:2px;left:5px;display:flex;gap:2px;">
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
          </div>
        </div>
        <div style="position:absolute;width:35px;height:50px;background:#0d9488;border:4px solid #134e4a;border-radius:10px;bottom:15px;left:145px;z-index:5;filter:brightness(0.8);transform-origin:top center;animation:bronto-leg-back-right 2s ease-in-out infinite;">
          <div style="position:absolute;bottom:2px;left:5px;display:flex;gap:2px;">
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
          </div>
        </div>
        <!-- BODY (z-index 20) - with subtle sway -->
        <div style="position:absolute;width:180px;height:110px;background:linear-gradient(145deg,#2dd4bf,#0d9488);border:4px solid #134e4a;border-radius:60px 70px 50px 50px;bottom:50px;left:35px;z-index:20;transform-origin:center bottom;animation:bronto-body-sway 4s ease-in-out infinite;">
          <div style="position:absolute;bottom:0;left:25px;width:130px;height:45px;background:#f0fdfa;border-radius:50%;opacity:0.3;"></div>
          <!-- Spots -->
          <div style="position:absolute;top:15px;left:15px;width:20px;height:15px;background:#14b8a6;border-radius:50%;opacity:0.3;"></div>
          <div style="position:absolute;top:25px;left:100px;width:25px;height:20px;background:#14b8a6;border-radius:50%;opacity:0.3;"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:50px;height:30px;background:rgba(255,255,255,0.25);border-radius:50%;top:12px;left:25px;filter:blur(5px);"></div>
        </div>
        <!-- FRONT LEGS - with walking animation -->
        <div style="position:absolute;width:35px;height:55px;background:#0d9488;border:4px solid #134e4a;border-radius:10px;bottom:15px;left:60px;z-index:10;transform-origin:top center;animation:bronto-leg-front-left 2s ease-in-out infinite;">
          <div style="position:absolute;bottom:2px;left:5px;display:flex;gap:2px;">
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
          </div>
        </div>
        <div style="position:absolute;width:35px;height:55px;background:#0d9488;border:4px solid #134e4a;border-radius:10px;bottom:15px;left:125px;z-index:10;transform-origin:top center;animation:bronto-leg-front-right 2s ease-in-out infinite;">
          <div style="position:absolute;bottom:2px;left:5px;display:flex;gap:2px;">
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
            <div style="width:8px;height:6px;background:#f1f5f9;border:2px solid #134e4a;border-radius:50% 50% 0 0;"></div>
          </div>
        </div>
        <!-- NECK (z-index 15) - with grazing motion -->
        <div style="position:absolute;bottom:130px;left:150px;width:80px;height:120px;z-index:15;transform-origin:bottom left;animation:bronto-graze 8s ease-in-out infinite;">
          <svg width="80" height="120" viewBox="0 0 100 200" style="overflow:visible;">
            <path d="M 80,200 Q 120,100 60,20 L 20,40 Q 60,110 30,200 Z" fill="#2dd4bf" stroke="#134e4a" stroke-width="5"/>
          </svg>
          <!-- HEAD - with munching -->
          <div style="position:absolute;width:85px;height:60px;background:radial-gradient(ellipse at 35% 30%,#5eead4,#2dd4bf,#0d9488);border:4px solid #134e4a;border-radius:50% 70% 40% 50% / 60% 60% 40% 40%;top:-15px;left:10px;z-index:40;transform-origin:bottom center;animation:bronto-munch 2s ease-in-out infinite;">
            <!-- Head highlight -->
            <div style="position:absolute;width:25px;height:15px;background:rgba(255,255,255,0.35);border-radius:50%;top:8px;left:12px;filter:blur(3px);"></div>
            <!-- Eyes -->
            <div style="display:flex;gap:10px;margin-top:15px;margin-left:20px;">
              <div style="width:18px;height:20px;background:#1a1a1a;border-radius:50%;position:relative;animation:bronto-blink 4s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:4px;left:4px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.5;"></div>
              </div>
              <div style="width:18px;height:20px;background:#1a1a1a;border-radius:50%;position:relative;animation:bronto-blink 4s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:4px;left:4px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.5;"></div>
              </div>
            </div>
            <!-- Nostrils -->
            <div style="position:absolute;bottom:18px;right:15px;display:flex;gap:5px;opacity:0.4;">
              <div style="width:4px;height:5px;background:#134e4a;border-radius:50%;"></div>
              <div style="width:4px;height:5px;background:#134e4a;border-radius:50%;"></div>
            </div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:8px;right:18px;width:30px;height:12px;border-bottom:3px solid #134e4a;border-radius:0 0 50% 20%;"></div>
            <!-- Blush -->
            <div style="position:absolute;top:35px;left:15px;width:12px;height:6px;background:radial-gradient(ellipse,#99f6e4,transparent);border-radius:50%;opacity:0.7;"></div>
            <div style="position:absolute;top:35px;right:25px;width:12px;height:6px;background:radial-gradient(ellipse,#99f6e4,transparent);border-radius:50%;opacity:0.7;"></div>
          </div>
        </div>
      </div>
    `,

    // ===== STEGO - Prehistoric Variant 2 =====
    2:`
      <div style="position:relative;width:240px;height:280px;animation:stego-happy-stomp 1.5s ease-in-out infinite;">
        <!-- BACK PLATES - with glow animation (faster, wave effect) -->
        <div style="position:absolute;width:22px;height:28px;background:linear-gradient(#fbbf24,#d97706);border:3px solid #4c1d95;clip-path:polygon(50% 0%,100% 40%,80% 100%,20% 100%,0% 40%);top:114px;left:50px;transform:rotate(-45deg);z-index:15;animation:stego-plate-glow 1.5s ease-in-out infinite 0s;"></div>
        <div style="position:absolute;width:28px;height:34px;background:linear-gradient(#fbbf24,#d97706);border:3px solid #4c1d95;clip-path:polygon(50% 0%,100% 40%,80% 100%,20% 100%,0% 40%);top:96px;left:74px;transform:rotate(-25deg);z-index:15;animation:stego-plate-glow 1.5s ease-in-out infinite 0.15s;"></div>
        <div style="position:absolute;width:34px;height:40px;background:linear-gradient(#fbbf24,#d97706);border:3px solid #4c1d95;clip-path:polygon(50% 0%,100% 40%,80% 100%,20% 100%,0% 40%);top:84px;left:105px;transform:rotate(0deg);z-index:15;animation:stego-plate-glow 1.5s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:28px;height:34px;background:linear-gradient(#fbbf24,#d97706);border:3px solid #4c1d95;clip-path:polygon(50% 0%,100% 40%,80% 100%,20% 100%,0% 40%);top:92px;left:141px;transform:rotate(25deg);z-index:15;animation:stego-plate-glow 1.5s ease-in-out infinite 0.45s;"></div>
        <div style="position:absolute;width:24px;height:30px;background:linear-gradient(#fbbf24,#d97706);border:3px solid #4c1d95;clip-path:polygon(50% 0%,100% 40%,80% 100%,20% 100%,0% 40%);top:104px;left:173px;transform:rotate(45deg);z-index:15;animation:stego-plate-glow 1.5s ease-in-out infinite 0.6s;"></div>
        <!-- TAIL with spikes (z-index 5) -->
        <div style="position:absolute;width:100px;height:70px;left:-35px;bottom:55px;z-index:5;transform-origin:right center;animation:stego-tail-sway 3s ease-in-out infinite;">
          <svg viewBox="0 0 160 130" style="width:100%;height:100%;overflow:visible;">
            <path d="M 160,100 Q 90,100 30,30 Q 20,15 30,5 Q 60,30 160,60 Z" fill="#7e22ce" stroke="#4c1d95" stroke-width="4"/>
          </svg>
          <div style="position:absolute;width:8px;height:25px;background:linear-gradient(to bottom,#fbbf24,#d97706);border:2px solid #4c1d95;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-10px;left:12px;transform:rotate(-38deg);"></div>
          <div style="position:absolute;width:8px;height:25px;background:linear-gradient(to bottom,#fbbf24,#d97706);border:2px solid #4c1d95;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-16px;left:24px;transform:rotate(0deg);"></div>
          <div style="position:absolute;width:8px;height:25px;background:linear-gradient(to bottom,#fbbf24,#d97706);border:2px solid #4c1d95;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-10px;left:36px;transform:rotate(45deg);"></div>
        </div>
        <!-- BACK LEGS (shadows) - with walking animation -->
        <div style="position:absolute;width:45px;height:50px;background:#7e22ce;border:4px solid #4c1d95;border-radius:10px;bottom:18px;left:85px;z-index:5;filter:brightness(0.7);transform-origin:top center;animation:stego-leg-back-left 1.2s ease-in-out infinite;">
          <div style="position:absolute;bottom:0;left:4px;display:flex;gap:3px;">
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
          </div>
        </div>
        <div style="position:absolute;width:45px;height:50px;background:#7e22ce;border:4px solid #4c1d95;border-radius:10px;bottom:22px;left:160px;z-index:5;filter:brightness(0.7);transform-origin:top center;animation:stego-leg-back-right 1.2s ease-in-out infinite;">
          <div style="position:absolute;bottom:0;left:4px;display:flex;gap:3px;">
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
          </div>
        </div>
        <!-- BODY (z-index 20) -->
        <div style="position:absolute;width:175px;height:105px;background:radial-gradient(ellipse at 35% 30%,#c084fc,#a855f7,#7e22ce);border:4px solid #4c1d95;border-radius:70px 85px 45px 45px;bottom:55px;left:45px;z-index:20;overflow:hidden;">
          <div style="position:absolute;bottom:-10px;left:18px;width:140px;height:60px;background:#f5f3ff;border-radius:50%;opacity:0.25;"></div>
          <!-- Spots -->
          <div style="position:absolute;top:12px;left:15px;width:15px;height:12px;background:#d8b4fe;border-radius:50%;opacity:0.4;"></div>
          <div style="position:absolute;top:22px;left:90px;width:20px;height:16px;background:#d8b4fe;border-radius:50%;opacity:0.4;"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:45px;height:28px;background:rgba(255,255,255,0.25);border-radius:50%;top:10px;left:22px;filter:blur(5px);"></div>
        </div>
        <!-- FRONT LEGS - with walking animation -->
        <div style="position:absolute;width:45px;height:55px;background:#7e22ce;border:4px solid #4c1d95;border-radius:10px;bottom:15px;left:65px;z-index:10;transform-origin:top center;animation:stego-leg-front-left 1.2s ease-in-out infinite;">
          <div style="position:absolute;bottom:0;left:4px;display:flex;gap:3px;">
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
          </div>
        </div>
        <div style="position:absolute;width:45px;height:55px;background:#7e22ce;border:4px solid #4c1d95;border-radius:10px;bottom:15px;left:140px;z-index:10;transform-origin:top center;animation:stego-leg-front-right 1.2s ease-in-out infinite;">
          <div style="position:absolute;bottom:0;left:4px;display:flex;gap:3px;">
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
            <div style="width:10px;height:8px;background:#f1f5f9;border:2px solid #4c1d95;border-radius:50% 50% 2px 2px;"></div>
          </div>
        </div>
        <!-- HEAD ASSEMBLY (z-index 35) - with head scan animation -->
        <div style="position:absolute;bottom:75px;left:185px;width:80px;height:65px;z-index:35;transform-origin:left center;animation:stego-head-scan 6s ease-in-out infinite;">
          <!-- Stubby neck -->
          <div style="position:absolute;width:35px;height:30px;background:radial-gradient(ellipse at 40% 30%,#c084fc,#a855f7);border:4px solid #4c1d95;left:10px;top:30px;border-radius:10px;"></div>
          <!-- Head -->
          <div style="position:absolute;width:75px;height:55px;background:radial-gradient(ellipse at 35% 30%,#d8b4fe,#a855f7,#7e22ce);border:4px solid #4c1d95;border-radius:50% 70% 45% 50% / 60% 60% 40% 45%;left:20px;top:5px;">
            <!-- Head highlight -->
            <div style="position:absolute;width:22px;height:14px;background:rgba(255,255,255,0.3);border-radius:50%;top:6px;left:10px;filter:blur(2px);"></div>
            <!-- Eyes -->
            <div style="display:flex;gap:10px;padding-left:22px;margin-top:14px;">
              <div style="width:16px;height:18px;background:#1a1a1a;border-radius:50%;position:relative;animation:stego-blink 4s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:4px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.6;"></div>
              </div>
              <div style="width:16px;height:18px;background:#1a1a1a;border-radius:50%;position:relative;animation:stego-blink 4s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:4px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.6;"></div>
              </div>
            </div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:6px;left:28px;width:28px;height:8px;border-bottom:3px solid #4c1d95;border-radius:0 0 50% 50%;"></div>
            <!-- Blush -->
            <div style="position:absolute;top:32px;left:25px;width:10px;height:5px;background:radial-gradient(ellipse,#f0abfc,transparent);border-radius:50%;opacity:0.6;"></div>
            <div style="position:absolute;top:32px;right:20px;width:10px;height:5px;background:radial-gradient(ellipse,#f0abfc,transparent);border-radius:50%;opacity:0.6;"></div>
          </div>
        </div>
      </div>
    `,

    // ===== LIL T-REX - Prehistoric Variant 3 =====
    3:`
      <div style="position:relative;width:240px;height:280px;animation:liltrex-stomp 2s ease-in-out infinite;">
        <!-- TAIL (z-index 10) -->
        <div style="position:absolute;width:110px;height:55px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:0 100% 20% 50% / 0 100% 20% 50%;bottom:58px;left:-15px;z-index:10;transform-origin:right center;animation:liltrex-tail-sway 2s ease-in-out infinite;">
          <div style="position:absolute;width:16px;height:16px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-12px;left:35px;"></div>
          <div style="position:absolute;width:16px;height:16px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-12px;left:10px;"></div>
          <!-- Tail highlight -->
          <div style="position:absolute;width:30px;height:15px;background:rgba(255,255,255,0.2);border-radius:50%;top:15px;left:35px;filter:blur(3px);"></div>
        </div>
        <!-- LEGS (z-index 10) - with fast running animation -->
        <div style="position:absolute;width:40px;height:55px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 8px 8px;bottom:12px;left:72px;z-index:10;transform-origin:top center;animation:liltrex-leg-left 0.5s ease-in-out infinite;">
          <div style="position:absolute;bottom:-4px;left:4px;display:flex;gap:2px;">
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <div style="position:absolute;width:40px;height:55px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 8px 8px;bottom:12px;left:125px;z-index:10;transform-origin:top center;animation:liltrex-leg-right 0.5s ease-in-out infinite;">
          <div style="position:absolute;bottom:-4px;left:4px;display:flex;gap:2px;">
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:9px;height:10px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <!-- BODY (z-index 20) -->
        <div style="position:absolute;width:122px;height:138px;background:radial-gradient(ellipse at 38% 30%,#86efac,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:50% 50% 40% 40% / 60% 60% 35% 35%;top:88px;left:58px;z-index:20;">
          <div style="position:absolute;width:16px;height:16px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-10px;left:-2px;transform:rotate(-80deg);"></div>
          <div style="position:absolute;width:16px;height:16px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:5px;left:-4px;transform:rotate(-90deg);"></div>
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80px;height:90px;background:#fef9c3;border-radius:50%;opacity:0.5;"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:32px;height:22px;background:rgba(255,255,255,0.25);border-radius:50%;top:12px;left:18px;filter:blur(4px);"></div>
        </div>
        <!-- ARMS (z-index 35) -->
        <div style="position:absolute;width:28px;height:12px;background:#4ade80;border:3px solid #064e3b;border-radius:7px;top:158px;left:48px;transform-origin:right center;animation:liltrex-arm-left 0.6s ease-in-out infinite alternate;z-index:35;">
          <div style="position:absolute;right:-6px;top:1px;width:8px;height:8px;background:#cbd5e1;clip-path:polygon(0 20%,100% 50%,0 80%);border:1px solid #064e3b;"></div>
        </div>
        <div style="position:absolute;width:28px;height:12px;background:#4ade80;border:3px solid #064e3b;border-radius:7px;top:158px;right:45px;transform-origin:left center;transform:scaleX(-1);animation:liltrex-arm-right 0.6s ease-in-out infinite alternate;z-index:35;">
          <div style="position:absolute;right:-6px;top:1px;width:8px;height:8px;background:#cbd5e1;clip-path:polygon(0 20%,100% 50%,0 80%);border:1px solid #064e3b;"></div>
        </div>
        <!-- HEAD (z-index 40) -->
        <div style="position:absolute;width:148px;height:95px;background:radial-gradient(ellipse at 38% 30%,#86efac,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:35% 60% 35% 35% / 50% 50% 40% 40%;top:28px;left:70px;z-index:40;">
          <!-- Head highlight -->
          <div style="position:absolute;width:40px;height:25px;background:rgba(255,255,255,0.25);border-radius:50%;top:8px;left:20px;filter:blur(5px);"></div>
          <!-- Eyes with look animation -->
          <div style="position:absolute;top:22px;right:30px;display:flex;gap:12px;">
            <div style="width:28px;height:32px;background:#1a1a1a;border-radius:50%;position:relative;overflow:hidden;animation:liltrex-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:5px;animation:liltrex-eye-look 5s ease-in-out infinite;"></div>
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;bottom:6px;right:5px;opacity:0.7;"></div>
            </div>
            <div style="width:28px;height:32px;background:#1a1a1a;border-radius:50%;position:relative;overflow:hidden;animation:liltrex-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:5px;animation:liltrex-eye-look 5s ease-in-out infinite;"></div>
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;bottom:6px;right:5px;opacity:0.7;"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:58px;right:45px;width:14px;height:7px;background:radial-gradient(ellipse,#fca5a5,transparent);border-radius:50%;opacity:0.5;"></div>
          <div style="position:absolute;top:58px;right:90px;width:14px;height:7px;background:radial-gradient(ellipse,#fca5a5,transparent);border-radius:50%;opacity:0.5;"></div>
          <!-- Mouth area with chomp animation -->
          <div style="position:absolute;bottom:10px;right:12px;width:70px;animation:liltrex-chomp 3s ease-in-out infinite;">
            <div style="width:100%;height:8px;border-bottom:4px solid #064e3b;border-radius:0 0 50% 50%;transform:rotate(-3deg);"></div>
            <div style="display:flex;gap:2px;position:absolute;top:6px;right:15px;">
              <div style="width:9px;height:12px;background:white;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
              <div style="width:9px;height:12px;background:white;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
              <div style="width:9px;height:12px;background:white;clip-path:polygon(0 0,100% 0,50% 100%);"></div>
            </div>
          </div>
        </div>
      </div>
    `,

    // ===== CAVEMAN - Prehistoric Variant 4 =====
    4:`
      <style>
        @keyframes caveman-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes caveman-blink{0%,90%,100%{transform:scaleY(1)}95%{transform:scaleY(0.1)}}
        @keyframes club-raise{0%,70%{transform:rotate(-10deg)}80%{transform:rotate(-60deg)}90%,100%{transform:rotate(-10deg)}}
        @keyframes stomp-left{0%,45%,55%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(-5deg)}}
        @keyframes stomp-right{0%,20%,30%,75%,85%,100%{transform:translateY(0) rotate(0deg)}25%{transform:translateY(-12px) rotate(5deg)}80%{transform:translateY(-12px) rotate(5deg)}}
        @keyframes eye-wander{0%,20%{top:50%;left:50%}25%,35%{top:40%;left:70%}40%,50%{top:60%;left:40%}55%,65%{top:45%;left:30%}70%,80%{top:55%;left:65%}85%,100%{top:50%;left:50%}}
        @keyframes mouth-talk{0%,15%,30%,45%,60%,75%,100%{height:14px;top:100px}10%,25%,40%,55%,70%{height:24px;top:95px}}
        @keyframes tooth-chomp{0%,15%,30%,45%,60%,75%,100%{top:94px}10%,25%,40%,55%,70%{top:104px}}
      </style>
      <div style="position:relative;width:240px;height:310px;animation:caveman-bounce 3s ease-in-out infinite;">
        <!-- Ears (scaled 2x) -->
        <div style="position:absolute;width:20px;height:28px;background:#fdd0b1;border:4px solid #000;border-radius:50%;top:70px;left:27px;z-index:15;transform:scale(2);"></div>
        <div style="position:absolute;width:20px;height:28px;background:#fdd0b1;border:4px solid #000;border-radius:50%;top:71px;left:194px;z-index:15;transform:scale(2);"></div>

        <!-- Head -->
        <div style="position:absolute;width:165px;height:138px;background:#fdd0b1;border:4px solid #000;border-radius:50% 50% 45% 45%;top:14px;left:38px;z-index:20;overflow:hidden;">
          <!-- Beard -->
          <div style="position:absolute;width:100%;height:76px;background:#a89f94;bottom:0;border-top:4px solid #000;"></div>
        </div>

        <!-- Nose -->
        <div style="position:absolute;width:62px;height:48px;background:#ffb6c1;border:4px solid #000;border-radius:50%;top:48px;left:50%;transform:translateX(-50%);z-index:25;"></div>

        <!-- Mouth (animated open/close) -->
        <div style="position:absolute;width:69px;height:14px;background:#8b0000;border:4px solid #000;border-radius:50%;top:100px;left:50%;transform:translateX(-50%);z-index:24;animation:mouth-talk 2s ease-in-out infinite;overflow:hidden;">
          <div style="position:absolute;width:100%;height:50%;background:#fdd0b1;top:0;"></div>
        </div>

        <!-- Tooth (moves with mouth) -->
        <div style="position:absolute;width:17px;height:17px;background:white;border:3px solid #000;border-radius:4px;top:94px;left:90px;z-index:26;animation:tooth-chomp 2s ease-in-out infinite;"></div>

        <!-- Eyes with wandering pupils -->
        <div style="position:absolute;width:31px;height:31px;background:white;border:3px solid #000;border-radius:50%;top:28px;left:80px;z-index:30;animation:caveman-blink 4s infinite;overflow:hidden;">
          <div style="position:absolute;width:10px;height:10px;background:black;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:eye-wander 6s ease-in-out infinite;"></div>
        </div>
        <div style="position:absolute;width:31px;height:31px;background:white;border:3px solid #000;border-radius:50%;top:28px;right:80px;z-index:30;animation:caveman-blink 4s infinite;overflow:hidden;">
          <div style="position:absolute;width:10px;height:10px;background:black;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:eye-wander 6s ease-in-out infinite;"></div>
        </div>

        <!-- Eyebrows -->
        <div style="position:absolute;width:45px;height:14px;background:black;border-radius:7px;top:17px;left:72px;transform:rotate(-10deg);z-index:35;"></div>
        <div style="position:absolute;width:45px;height:14px;background:black;border-radius:7px;top:17px;right:72px;transform:rotate(10deg);z-index:35;"></div>

        <!-- Body -->
        <div style="position:absolute;width:193px;height:152px;background:#fdd0b1;border:4px solid #000;border-radius:50%;top:110px;left:24px;z-index:10;overflow:hidden;">
          <!-- Tunic -->
          <div style="position:absolute;bottom:0;width:100%;height:83px;background:#ff7f50;border-top:4px solid #000;clip-path:polygon(0 0,100% 0,95% 100%,85% 90%,75% 100%,65% 90%,55% 100%,45% 90%,35% 100%,25% 90%,15% 100%,5% 90%,0 100%);">
            <!-- Spots -->
            <div style="position:absolute;width:21px;height:14px;background:black;border-radius:50%;top:14px;left:21px;"></div>
            <div style="position:absolute;width:17px;height:17px;background:black;border-radius:50%;top:35px;right:28px;"></div>
            <div style="position:absolute;width:28px;height:21px;background:black;border-radius:50%;bottom:7px;left:55px;"></div>
          </div>
        </div>

        <!-- Hands -->
        <div style="position:absolute;width:35px;height:35px;background:#fdd0b1;border:4px solid #000;border-radius:50%;top:138px;left:4px;z-index:12;"></div>
        <div style="position:absolute;width:35px;height:35px;background:#fdd0b1;border:4px solid #000;border-radius:50%;top:138px;right:4px;z-index:12;"></div>

        <!-- Club (raises up and down) -->
        <div style="position:absolute;width:28px;height:97px;background:#8b4513;border:4px solid #000;border-radius:7px 7px 14px 14px;top:72px;right:7px;z-index:20;transform-origin:bottom center;animation:club-raise 2s ease-in-out infinite;">
          <div style="position:absolute;width:7px;height:14px;background:#5c2e0e;border-radius:50%;opacity:0.6;top:21px;left:7px;"></div>
          <div style="position:absolute;width:7px;height:14px;background:#5c2e0e;border-radius:50%;opacity:0.6;top:55px;right:4px;"></div>
        </div>

        <!-- Feet (alternating stomps) -->
        <div style="position:absolute;width:69px;height:48px;background:#fdd0b1;border:4px solid #000;border-radius:40% 40% 30% 30%;bottom:30px;left:53px;z-index:10;transform-origin:center bottom;animation:stomp-left 2s ease-in-out infinite;">
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;left:4px;"></div>
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;left:24px;"></div>
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;right:4px;"></div>
        </div>
        <div style="position:absolute;width:69px;height:48px;background:#fdd0b1;border:4px solid #000;border-radius:40% 40% 30% 30%;bottom:28px;left:122px;z-index:13;transform-origin:center bottom;animation:stomp-right 2s ease-in-out infinite;">
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;left:4px;"></div>
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;left:24px;"></div>
          <div style="position:absolute;width:17px;height:17px;background:#fdd0b1;border:3px solid #000;border-radius:50%;bottom:-7px;right:4px;"></div>
        </div>
      </div>
    `
  };

  const design = prehistoricDesigns[variant]||prehistoricDesigns[0];
  const shadowHTML = `<div class="adult-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}

