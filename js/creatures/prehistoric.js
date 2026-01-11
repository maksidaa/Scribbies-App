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
        <!-- LEFT LEG (z-index:10) - 60×80 → 45×60, bottom:20→15, left:90→68 -->
        <div style="position:absolute;width:45px;height:60px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 11px 11px;bottom:15px;left:68px;z-index:10;">
          <!-- Toe claws: 14×16 → 10×12, bottom:-4→-3, left:5→4 -->
          <div style="position:absolute;bottom:-3px;left:4px;display:flex;gap:2px;">
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <!-- RIGHT LEG (z-index:10) - left:170→128 -->
        <div style="position:absolute;width:45px;height:60px;background:#16a34a;border:4px solid #064e3b;border-radius:15px 15px 11px 11px;bottom:15px;left:128px;z-index:10;">
          <div style="position:absolute;bottom:-3px;left:4px;display:flex;gap:2px;">
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
            <div style="width:10px;height:12px;background:#cbd5e1;border:2px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);"></div>
          </div>
        </div>
        <!-- BODY (z-index:20) - 170×200 → 128×150, top:110→82, left:85→64 -->
        <div style="position:absolute;width:128px;height:150px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;top:82px;left:64px;z-index:20;">
          <!-- Spike s-body-1: top:-18→-14, left:-5→-4 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:-14px;left:-4px;transform:rotate(15deg);"></div>
          <!-- Spike s-body-2: top:2, left:-5→-4 -->
          <div style="position:absolute;width:18px;height:18px;background:#facc15;border:3px solid #064e3b;clip-path:polygon(50% 0%,0% 100%,100% 100%);top:2px;left:-4px;transform:rotate(15deg);"></div>
          <!-- Belly patch: 128×144 → 96×108 -->
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:96px;height:108px;background:#fef9c3;border-radius:50%;opacity:0.4;"></div>
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
        <!-- HEAD (z-index:40) - 210×140 → 158×105, top:30→22, left:100→75 -->
        <div style="position:absolute;width:158px;height:105px;background:linear-gradient(145deg,#4ade80,#16a34a);border:4px solid #064e3b;border-radius:30px 75px 30px 30px;top:22px;left:75px;z-index:40;">
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
          <!-- Nostrils: right:35→26, top:90→68, gap:8→6 -->
          <div style="position:absolute;right:26px;top:68px;display:flex;gap:6px;">
            <!-- Each: 6×10 → 4×8 -->
            <div style="width:4px;height:8px;background:#064e3b;border-radius:50%;opacity:0.4;"></div>
            <div style="width:4px;height:8px;background:#064e3b;border-radius:50%;opacity:0.4;"></div>
          </div>
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

