function renderAdultAquatic(variantIndex){
  const variant=variantIndex||0;

  const aquaticDesigns={
    // ===== AXOLOTL BUDDY - Aquatic Variant 0 =====
    0:`
<!-- AXOLOTL BUDDY - Cute Pink Salamander with Animated Legs -->
<div data-part="container" style="position:relative;width:200px;height:180px;animation:axo-float 4s ease-in-out infinite;">
  <!-- Bubbles rising from behind whole body -->
  <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:40px;left:35px;z-index:1;animation:bubble-rise 3s ease-in-out infinite,bubble-wobble 1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:30px;left:70px;z-index:1;animation:bubble-rise-slow 4s ease-in-out infinite 0.8s,bubble-wobble 1.2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:7px;height:7px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:50px;left:100px;z-index:1;animation:bubble-rise 3.5s ease-in-out infinite 1.5s,bubble-wobble 0.9s ease-in-out infinite;"></div>
  <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:35px;right:50px;z-index:1;animation:bubble-rise 2.8s ease-in-out infinite 0.3s,bubble-wobble 1.1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:45px;right:30px;z-index:1;animation:bubble-rise-slow 3.8s ease-in-out infinite 2s,bubble-wobble 1s ease-in-out infinite;"></div>
  <!-- Tail with fin -->
  <div style="position:absolute;width:107px;height:67px;right:-27px;top:73px;z-index:5;transform-origin:left center;animation:axo-tail-swish 3s ease-in-out infinite;">
    <svg viewBox="0 0 160 100" style="overflow:visible;">
      <path d="M 0,20 Q 80,0 145,45 Q 155,50 145,55 Q 80,100 0,80 Z" fill="rgba(255, 175, 204, 0.5)" stroke="#fb6f92" stroke-width="1.5"/>
      <path d="M 0,35 Q 70,30 120,50 Q 70,70 0,65 Z" fill="#ffafcc" stroke="#fb6f92" stroke-width="3"/>
    </svg>
  </div>

  <!-- Back Legs with paddle animation -->
  <div style="position:absolute;width:16px;height:21px;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:2px solid #fb6f92;border-radius:8px;top:123px;left:63px;transform-origin:top center;animation:axo-leg-back-l 2s ease-in-out infinite;z-index:19;"></div>
  <div style="position:absolute;width:16px;height:21px;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:2px solid #fb6f92;border-radius:8px;top:123px;right:63px;transform-origin:top center;animation:axo-leg-back-r 2s ease-in-out infinite 0.5s;z-index:19;"></div>

  <!-- Front Legs with paddle animation -->
  <div style="position:absolute;width:16px;height:21px;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:2px solid #fb6f92;border-radius:8px;top:107px;left:43px;transform-origin:top center;animation:axo-leg-paddle-l 2s ease-in-out infinite;z-index:19;"></div>
  <div style="position:absolute;width:16px;height:21px;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:2px solid #fb6f92;border-radius:8px;top:107px;right:43px;transform-origin:top center;animation:axo-leg-paddle-r 2s ease-in-out infinite 0.5s;z-index:19;"></div>

  <!-- Body -->
  <div style="position:absolute;width:100px;height:67px;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:3px solid #fb6f92;border-radius:50% 50% 42% 42% / 65% 65% 38% 38%;top:73px;left:50px;z-index:20;overflow:hidden;">
    <div style="position:absolute;width:60px;height:40px;background:radial-gradient(ellipse at 50% 30%, #ffe5ec, #ffafcc);border-radius:50%;bottom:-10px;left:50%;transform:translateX(-50%);"></div>
  </div>

  <!-- Head with Gills -->
  <div style="position:absolute;width:107px;height:77px;top:20px;left:47px;z-index:40;animation:axo-happy-wiggle 8s ease-in-out infinite;">
    <!-- Left Gills -->
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;left:-23px;transform-origin:right center;transform:rotate(35deg);animation:gill-fan-l-1 3s ease-in-out infinite;"></div>
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;left:-23px;transform-origin:right center;transform:rotate(0deg);animation:gill-fan-l-2 3s ease-in-out infinite;"></div>
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;left:-23px;transform-origin:right center;transform:rotate(-35deg);animation:gill-fan-l-3 3s ease-in-out infinite;"></div>

    <!-- Right Gills -->
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;right:-23px;transform-origin:left center;transform:rotate(-35deg);animation:gill-fan-r-1 3s ease-in-out infinite;"></div>
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;right:-23px;transform-origin:left center;transform:rotate(0deg);animation:gill-fan-r-2 3s ease-in-out infinite;"></div>
    <div style="position:absolute;width:43px;height:11px;background:radial-gradient(ellipse at 50% 50%, #ff8fab, #ff5d8f);border:2px solid #fb6f92;border-radius:13px;z-index:-1;top:30px;right:-23px;transform-origin:left center;transform:rotate(35deg);animation:gill-fan-r-3 3s ease-in-out infinite;"></div>

    <!-- Head Shape -->
    <div style="width:100%;height:100%;background:radial-gradient(ellipse at 40% 30%, #ffe5ec, #ffafcc);border:3px solid #fb6f92;border-radius:55% 55% 45% 45% / 65% 65% 35% 35%;position:relative;z-index:41;">
      <!-- Eyes with look animation -->
      <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:center;gap:47px;">
        <div style="width:12px;height:12px;background:#2d2323;border-radius:50%;position:relative;animation:axo-blink 5s infinite;">
          <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;animation:axo-eye-look 6s ease-in-out infinite;"></div>
        </div>
        <div style="width:12px;height:12px;background:#2d2323;border-radius:50%;position:relative;animation:axo-blink 5s infinite;">
          <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;animation:axo-eye-look 6s ease-in-out infinite;"></div>
        </div>
      </div>

      <!-- Blush -->
      <div style="position:absolute;width:15px;height:7px;background:#ff5d8f;border-radius:50%;top:43px;left:13px;opacity:0.3;filter:blur(2px);"></div>
      <div style="position:absolute;width:15px;height:7px;background:#ff5d8f;border-radius:50%;top:43px;right:13px;opacity:0.3;filter:blur(2px);"></div>

      <!-- Mouth -->
      <div style="position:absolute;width:37px;height:10px;border-bottom:2.5px solid #fb6f92;border-radius:0 0 17px 17px;top:47px;left:50%;transform:translateX(-50%);"></div>
    </div>
  </div>
</div>
    `,

    // ===== NARWHAL BUDDY - Aquatic Variant 1 =====
    1:`
<!-- NARWHAL BUDDY - Cute Gray Whale with Golden Tusk -->
<div data-part="container" style="position:relative;width:200px;height:220px;animation:narwhal-bob 4s ease-in-out infinite;">
  <!-- Bubbles rising from behind whole body -->
  <div style="position:absolute;width:9px;height:9px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:60px;left:30px;z-index:1;animation:bubble-rise 3s ease-in-out infinite,bubble-wobble 1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:7px;height:7px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:80px;left:60px;z-index:1;animation:bubble-rise-slow 4s ease-in-out infinite 0.6s,bubble-wobble 1.1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:70px;left:100px;z-index:1;animation:bubble-rise 3.5s ease-in-out infinite 1.3s,bubble-wobble 0.9s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:55px;right:50px;z-index:1;animation:bubble-rise 2.8s ease-in-out infinite 0.4s,bubble-wobble 1.2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:7px;height:7px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(200,220,255,0.4));border:1px solid rgba(150,200,255,0.5);border-radius:50%;bottom:65px;right:25px;z-index:1;animation:bubble-rise-slow 3.8s ease-in-out infinite 1.8s,bubble-wobble 0.8s ease-in-out infinite;"></div>
  <!-- Golden Tusk -->
  <div style="position:absolute;width:9px;height:65px;background:repeating-linear-gradient(45deg,#fde68a,#fde68a 6px,#f59e0b 6px,#f59e0b 12px);border:2px solid #334155;border-radius:50% 50% 20% 20% / 100% 100% 0% 0%;top:8px;left:50%;transform:translateX(-50%);z-index:30;transform-origin:bottom center;animation:narwhal-tusk-wobble 4s ease-in-out infinite;"></div>

  <!-- Forked Tail -->
  <div style="position:absolute;width:100px;height:50px;bottom:30px;left:50%;transform:translateX(-50%);z-index:10;transform-origin:top center;animation:narwhal-tail-flip 1.5s ease-in-out infinite;">
    <svg viewBox="0 0 160 80" style="overflow:visible;">
      <path d="M 80,15 Q 40,0 5,50 Q 40,65 80,35 Q 120,65 155,50 Q 120,0 80,15 Z" fill="#64748b" stroke="#334155" stroke-width="3"/>
    </svg>
  </div>

  <!-- Flippers -->
  <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse at 50% 30%,#94a3b8,#64748b);border:2px solid #334155;border-radius:50%;top:105px;left:28px;transform:rotate(25deg);animation:narwhal-flip-l 3s ease-in-out infinite;z-index:25;"></div>
  <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse at 50% 30%,#94a3b8,#64748b);border:2px solid #334155;border-radius:50%;top:105px;right:28px;transform:rotate(-25deg);animation:narwhal-flip-r 3s ease-in-out infinite;z-index:25;"></div>

  <!-- Body with spots -->
  <div style="position:absolute;width:125px;height:100px;background:radial-gradient(circle at 20% 30%,#94a3b8 0%,#94a3b8 8%,transparent 12%),radial-gradient(circle at 40% 15%,#94a3b8 0%,#94a3b8 6%,transparent 10%),radial-gradient(circle at 75% 25%,#94a3b8 0%,#94a3b8 7%,transparent 11%),radial-gradient(ellipse at 40% 30%,#94a3b8,#64748b);border:3px solid #334155;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:55px;left:38px;z-index:20;overflow:hidden;">
    <div style="position:absolute;width:88px;height:56px;background:radial-gradient(ellipse at 50% 30%,#f1f5f9,#e2e8f0);border-radius:50%;bottom:-16px;left:50%;transform:translateX(-50%);"></div>
  </div>

  <!-- Face -->
  <div style="position:absolute;width:125px;height:62px;top:68px;left:38px;z-index:45;display:flex;flex-direction:column;align-items:center;">
    <!-- Eyes -->
    <div style="display:flex;gap:28px;margin-top:16px;">
      <div style="width:13px;height:13px;background:#1e293b;border-radius:50%;position:relative;animation:narwhal-blink 5s infinite;">
        <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;"></div>
      </div>
      <div style="width:13px;height:13px;background:#1e293b;border-radius:50%;position:relative;animation:narwhal-blink 5s infinite;">
        <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;"></div>
      </div>
    </div>
    <!-- Mouth -->
    <div style="width:23px;height:10px;border-bottom:2px solid #334155;border-radius:50%;margin-top:2px;"></div>
    <!-- Blush -->
    <div style="position:absolute;top:30px;width:100%;display:flex;justify-content:center;gap:47px;">
      <div style="width:13px;height:5px;background:#fca5a5;border-radius:50%;opacity:0.4;filter:blur(1px);"></div>
      <div style="width:13px;height:5px;background:#fca5a5;border-radius:50%;opacity:0.4;filter:blur(1px);"></div>
    </div>
  </div>
</div>
    `,

    // ===== JELLYFISH BUDDY - Aquatic Variant 2 =====
    2:`
<!-- JELLYFISH BUDDY - Pink/Purple Pulsing Jelly -->
<div data-part="container" style="position:relative;width:160px;height:260px;animation:jelly-pulse 5s ease-in-out infinite;">
  <!-- Bubbles rising from behind whole body -->
  <div style="position:absolute;width:7px;height:7px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(220,200,255,0.4));border:1px solid rgba(200,150,255,0.5);border-radius:50%;bottom:100px;left:15px;z-index:1;animation:bubble-rise 3s ease-in-out infinite,bubble-wobble 1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(220,200,255,0.4));border:1px solid rgba(200,150,255,0.5);border-radius:50%;bottom:120px;left:45px;z-index:1;animation:bubble-rise-slow 4s ease-in-out infinite 0.7s,bubble-wobble 1.2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(220,200,255,0.4));border:1px solid rgba(200,150,255,0.5);border-radius:50%;bottom:90px;left:80px;z-index:1;animation:bubble-rise 3.5s ease-in-out infinite 1.4s,bubble-wobble 0.9s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(220,200,255,0.4));border:1px solid rgba(200,150,255,0.5);border-radius:50%;bottom:110px;right:35px;z-index:1;animation:bubble-rise 2.9s ease-in-out infinite 0.3s,bubble-wobble 1.1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(220,200,255,0.4));border:1px solid rgba(200,150,255,0.5);border-radius:50%;bottom:130px;right:15px;z-index:1;animation:bubble-rise-slow 3.7s ease-in-out infinite 1.9s,bubble-wobble 1s ease-in-out infinite;"></div>
  <!-- Tentacles SVG -->
  <svg style="position:absolute;top:75px;left:0;width:100%;height:180px;z-index:20;overflow:visible;" viewBox="0 0 160 180">
    <path d="M 45,10 Q 25,50 45,95 T 45,160" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.1s;"/>
    <path d="M 60,10 Q 45,65 60,115 T 60,155" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.3s;"/>
    <path d="M 80,10 Q 75,65 80,140" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.5s;"/>
    <path d="M 100,10 Q 115,65 100,115 T 100,155" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.2s;"/>
    <path d="M 115,10 Q 135,50 115,95 T 115,160" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.4s;"/>
    <!-- Foreground colored tentacles -->
    <path d="M 45,10 Q 25,50 45,95 T 45,160" fill="none" stroke="#e9d5ff" stroke-width="8" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.1s;"/>
    <path d="M 60,10 Q 45,65 60,115 T 60,155" fill="none" stroke="#fbcfe8" stroke-width="8" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.3s;"/>
    <path d="M 80,10 Q 75,65 80,140" fill="none" stroke="#fbcfe8" stroke-width="14" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.5s;"/>
    <path d="M 100,10 Q 115,65 100,115 T 100,155" fill="none" stroke="#fbcfe8" stroke-width="8" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.2s;"/>
    <path d="M 115,10 Q 135,50 115,95 T 115,160" fill="none" stroke="#e9d5ff" stroke-width="8" stroke-linecap="round" style="animation:jelly-tentacle 3s ease-in-out infinite;transform-origin:top center;animation-delay:0.4s;"/>
  </svg>

  <!-- Jelly Bell (head) -->
  <div style="position:absolute;width:125px;height:100px;left:18px;top:0;background:linear-gradient(to bottom,#f472b6,#a855f7);border:3px solid #c084fc;border-radius:50% 50% 15% 15% / 60% 60% 15% 15%;z-index:30;overflow:hidden;">
    <!-- Pattern dots -->
    <div style="position:absolute;top:0;left:0;width:100%;height:100%;background-image:radial-gradient(circle at 20% 35%,rgba(255,255,255,0.4) 0%,transparent 15%),radial-gradient(circle at 80% 25%,rgba(255,255,255,0.3) 0%,transparent 12%),radial-gradient(circle at 50% 55%,rgba(255,255,255,0.25) 0%,transparent 18%);z-index:31;"></div>
    <!-- Face -->
    <div style="position:absolute;top:44px;width:100%;display:flex;flex-direction:column;align-items:center;z-index:40;">
      <div style="display:flex;gap:22px;">
        <div style="width:12px;height:12px;background:#4c1d95;border-radius:50%;position:relative;animation:jelly-blink 6s infinite;">
          <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;"></div>
        </div>
        <div style="width:12px;height:12px;background:#4c1d95;border-radius:50%;position:relative;animation:jelly-blink 6s infinite;">
          <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:2px;"></div>
        </div>
      </div>
      <div style="width:19px;height:9px;border-bottom:3px solid #4c1d95;border-radius:50%;margin-top:3px;opacity:0.9;"></div>
      <!-- Blush -->
      <div style="position:absolute;top:10px;width:100%;display:flex;justify-content:center;gap:47px;">
        <div style="width:13px;height:5px;background:#fda4af;border-radius:50%;opacity:0.4;filter:blur(1.5px);"></div>
        <div style="width:13px;height:5px;background:#fda4af;border-radius:50%;opacity:0.4;filter:blur(1.5px);"></div>
      </div>
    </div>
  </div>

  <!-- Wavy Frill -->
  <svg style="position:absolute;width:110px;height:40px;top:83px;left:25px;z-index:35;overflow:visible;" viewBox="0 0 140 40">
    <g style="animation:jelly-frill 3s ease-in-out infinite;transform-origin:top center;">
      <path d="M 0,0 C 10,22 20,22 30,0 C 40,22 50,22 60,0 C 70,22 80,22 90,0 C 100,22 110,22 120,0 C 130,22 140,22 140,0 L 140,7 L 0,7 Z" fill="#a855f7"/>
      <path d="M 0,0 C 10,22 20,22 30,0 C 40,22 50,22 60,0 C 70,22 80,22 90,0 C 100,22 110,22 120,0 C 130,22 140,22 140,0" fill="none" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  </svg>
</div>
    `,

    // ===== OCTOPUS BUDDY - Aquatic Variant 3 =====
    3:`
<!-- OCTOPUS BUDDY - Purple Head with Purple Curling Tentacles -->
<div data-part="container" style="position:relative;width:200px;height:240px;animation:octo-float 4s ease-in-out infinite;">
  <!-- Bubbles rising from behind whole body -->
  <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(180,150,220,0.4));border:1px solid rgba(150,100,200,0.5);border-radius:50%;bottom:80px;left:25px;z-index:1;animation:bubble-rise 3s ease-in-out infinite,bubble-wobble 1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(180,150,220,0.4));border:1px solid rgba(150,100,200,0.5);border-radius:50%;bottom:100px;left:55px;z-index:1;animation:bubble-rise-slow 4s ease-in-out infinite 0.6s,bubble-wobble 1.2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:7px;height:7px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(180,150,220,0.4));border:1px solid rgba(150,100,200,0.5);border-radius:50%;bottom:90px;left:100px;z-index:1;animation:bubble-rise 3.5s ease-in-out infinite 1.3s,bubble-wobble 0.9s ease-in-out infinite;"></div>
  <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(180,150,220,0.4));border:1px solid rgba(150,100,200,0.5);border-radius:50%;bottom:110px;right:55px;z-index:1;animation:bubble-rise 2.8s ease-in-out infinite 0.3s,bubble-wobble 1.1s ease-in-out infinite;"></div>
  <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,rgba(255,255,255,0.9),rgba(180,150,220,0.4));border:1px solid rgba(150,100,200,0.5);border-radius:50%;bottom:85px;right:30px;z-index:1;animation:bubble-rise-slow 3.8s ease-in-out infinite 1.8s,bubble-wobble 1s ease-in-out infinite;"></div>

  <!-- 8 Curling Tentacles with SVG - Suckers grouped with tentacles so they animate together -->
  <svg style="position:absolute;top:65px;left:-15px;width:230px;height:175px;z-index:15;overflow:visible;" viewBox="0 0 230 175">
    <!-- BACK LAYER: Outer curling-UP tentacles with suckers -->
    <!-- Left outer - curls up and out dramatically -->
    <g style="animation:octo-tentacle-1 2.8s ease-in-out infinite;transform-origin:55px 15px;">
      <path d="M 55,15 Q 25,35 10,20 Q -5,5 5,-15 C 15,-30 30,-25 25,-10" fill="none" stroke="#4c1d95" stroke-width="16" stroke-linecap="round"/>
      <path d="M 55,15 Q 25,35 10,20 Q -5,5 5,-15 C 15,-30 30,-25 25,-10" fill="none" stroke="#8b5cf6" stroke-width="12" stroke-linecap="round"/>
      <circle cx="42" cy="22" r="4" fill="#e9d5ff"/><circle cx="30" cy="28" r="3.5" fill="#e9d5ff"/><circle cx="18" cy="22" r="3" fill="#e9d5ff"/><circle cx="8" cy="10" r="2.5" fill="#e9d5ff"/><circle cx="8" cy="-5" r="2" fill="#e9d5ff"/><circle cx="15" cy="-15" r="1.5" fill="#e9d5ff"/>
    </g>
    <!-- Right outer - curls up and out dramatically -->
    <g style="animation:octo-tentacle-2 2.8s ease-in-out infinite;transform-origin:175px 15px;">
      <path d="M 175,15 Q 205,35 220,20 Q 235,5 225,-15 C 215,-30 200,-25 205,-10" fill="none" stroke="#4c1d95" stroke-width="16" stroke-linecap="round"/>
      <path d="M 175,15 Q 205,35 220,20 Q 235,5 225,-15 C 215,-30 200,-25 205,-10" fill="none" stroke="#8b5cf6" stroke-width="12" stroke-linecap="round"/>
      <circle cx="188" cy="22" r="4" fill="#e9d5ff"/><circle cx="200" cy="28" r="3.5" fill="#e9d5ff"/><circle cx="212" cy="22" r="3" fill="#e9d5ff"/><circle cx="222" cy="10" r="2.5" fill="#e9d5ff"/><circle cx="222" cy="-5" r="2" fill="#e9d5ff"/><circle cx="215" cy="-15" r="1.5" fill="#e9d5ff"/>
    </g>

    <!-- MID-BACK: Second outer tentacles - curl up but less dramatic -->
    <!-- Left -->
    <g style="animation:octo-tentacle-3 2.5s ease-in-out infinite 0.2s;transform-origin:70px 18px;">
      <path d="M 70,18 Q 40,50 25,45 Q 5,40 -5,20 C -10,5 5,0 15,10" fill="none" stroke="#5b21b6" stroke-width="14" stroke-linecap="round"/>
      <path d="M 70,18 Q 40,50 25,45 Q 5,40 -5,20 C -10,5 5,0 15,10" fill="none" stroke="#a78bfa" stroke-width="10" stroke-linecap="round"/>
      <circle cx="55" cy="32" r="3.5" fill="#e9d5ff"/><circle cx="40" cy="45" r="3" fill="#e9d5ff"/><circle cx="25" cy="45" r="2.5" fill="#e9d5ff"/><circle cx="10" cy="38" r="2" fill="#e9d5ff"/><circle cx="0" cy="25" r="1.5" fill="#e9d5ff"/>
    </g>
    <!-- Right -->
    <g style="animation:octo-tentacle-4 2.5s ease-in-out infinite 0.2s;transform-origin:160px 18px;">
      <path d="M 160,18 Q 190,50 205,45 Q 225,40 235,20 C 240,5 225,0 215,10" fill="none" stroke="#5b21b6" stroke-width="14" stroke-linecap="round"/>
      <path d="M 160,18 Q 190,50 205,45 Q 225,40 235,20 C 240,5 225,0 215,10" fill="none" stroke="#a78bfa" stroke-width="10" stroke-linecap="round"/>
      <circle cx="175" cy="32" r="3.5" fill="#e9d5ff"/><circle cx="190" cy="45" r="3" fill="#e9d5ff"/><circle cx="205" cy="45" r="2.5" fill="#e9d5ff"/><circle cx="220" cy="38" r="2" fill="#e9d5ff"/><circle cx="230" cy="25" r="1.5" fill="#e9d5ff"/>
    </g>

    <!-- MID-FRONT: Hanging tentacles with dramatic S-curves -->
    <!-- Left mid - strong S-curve -->
    <g style="animation:octo-tentacle-2 2.3s ease-in-out infinite 0.4s;transform-origin:85px 22px;">
      <path d="M 85,22 Q 55,50 65,85 Q 75,120 50,145 Q 35,165 55,175 C 70,180 75,165 60,155" fill="none" stroke="#6d28d9" stroke-width="13" stroke-linecap="round"/>
      <path d="M 85,22 Q 55,50 65,85 Q 75,120 50,145 Q 35,165 55,175 C 70,180 75,165 60,155" fill="none" stroke="#c4b5fd" stroke-width="9" stroke-linecap="round"/>
      <circle cx="70" cy="38" r="4" fill="#f5f3ff"/><circle cx="62" cy="55" r="3.5" fill="#f5f3ff"/><circle cx="64" cy="72" r="3.5" fill="#f5f3ff"/><circle cx="68" cy="90" r="3" fill="#f5f3ff"/><circle cx="65" cy="108" r="3" fill="#f5f3ff"/><circle cx="55" cy="125" r="2.5" fill="#f5f3ff"/><circle cx="45" cy="142" r="2.5" fill="#f5f3ff"/><circle cx="42" cy="158" r="2" fill="#f5f3ff"/><circle cx="52" cy="170" r="1.5" fill="#f5f3ff"/>
    </g>
    <!-- Right mid - strong S-curve -->
    <g style="animation:octo-tentacle-1 2.3s ease-in-out infinite 0.4s;transform-origin:145px 22px;">
      <path d="M 145,22 Q 175,50 165,85 Q 155,120 180,145 Q 195,165 175,175 C 160,180 155,165 170,155" fill="none" stroke="#6d28d9" stroke-width="13" stroke-linecap="round"/>
      <path d="M 145,22 Q 175,50 165,85 Q 155,120 180,145 Q 195,165 175,175 C 160,180 155,165 170,155" fill="none" stroke="#c4b5fd" stroke-width="9" stroke-linecap="round"/>
      <circle cx="160" cy="38" r="4" fill="#f5f3ff"/><circle cx="168" cy="55" r="3.5" fill="#f5f3ff"/><circle cx="166" cy="72" r="3.5" fill="#f5f3ff"/><circle cx="162" cy="90" r="3" fill="#f5f3ff"/><circle cx="165" cy="108" r="3" fill="#f5f3ff"/><circle cx="175" cy="125" r="2.5" fill="#f5f3ff"/><circle cx="185" cy="142" r="2.5" fill="#f5f3ff"/><circle cx="188" cy="158" r="2" fill="#f5f3ff"/><circle cx="178" cy="170" r="1.5" fill="#f5f3ff"/>
    </g>

    <!-- FRONT: Center tentacles - elegant S-curve hang -->
    <!-- Left center -->
    <g style="animation:octo-tentacle-4 2s ease-in-out infinite 0.6s;transform-origin:100px 25px;">
      <path d="M 100,25 Q 80,55 90,90 Q 100,125 75,155 Q 60,175 80,180 C 95,182 95,165 82,158" fill="none" stroke="#7c3aed" stroke-width="12" stroke-linecap="round"/>
      <path d="M 100,25 Q 80,55 90,90 Q 100,125 75,155 Q 60,175 80,180 C 95,182 95,165 82,158" fill="none" stroke="#ddd6fe" stroke-width="8" stroke-linecap="round"/>
      <circle cx="90" cy="40" r="3.5" fill="#f5f3ff"/><circle cx="85" cy="55" r="3.5" fill="#f5f3ff"/><circle cx="86" cy="72" r="3" fill="#f5f3ff"/><circle cx="90" cy="90" r="3" fill="#f5f3ff"/><circle cx="92" cy="108" r="2.5" fill="#f5f3ff"/><circle cx="85" cy="125" r="2.5" fill="#f5f3ff"/><circle cx="75" cy="142" r="2" fill="#f5f3ff"/><circle cx="68" cy="158" r="2" fill="#f5f3ff"/><circle cx="72" cy="172" r="1.5" fill="#f5f3ff"/>
    </g>
    <!-- Right center -->
    <g style="animation:octo-tentacle-3 2s ease-in-out infinite 0.6s;transform-origin:130px 25px;">
      <path d="M 130,25 Q 150,55 140,90 Q 130,125 155,155 Q 170,175 150,180 C 135,182 135,165 148,158" fill="none" stroke="#7c3aed" stroke-width="12" stroke-linecap="round"/>
      <path d="M 130,25 Q 150,55 140,90 Q 130,125 155,155 Q 170,175 150,180 C 135,182 135,165 148,158" fill="none" stroke="#ddd6fe" stroke-width="8" stroke-linecap="round"/>
      <circle cx="140" cy="40" r="3.5" fill="#f5f3ff"/><circle cx="145" cy="55" r="3.5" fill="#f5f3ff"/><circle cx="144" cy="72" r="3" fill="#f5f3ff"/><circle cx="140" cy="90" r="3" fill="#f5f3ff"/><circle cx="138" cy="108" r="2.5" fill="#f5f3ff"/><circle cx="145" cy="125" r="2.5" fill="#f5f3ff"/><circle cx="155" cy="142" r="2" fill="#f5f3ff"/><circle cx="162" cy="158" r="2" fill="#f5f3ff"/><circle cx="158" cy="172" r="1.5" fill="#f5f3ff"/>
    </g>
  </svg>

  <!-- Purple Head/Mantle -->
  <div style="position:absolute;width:115px;height:100px;top:0;left:42px;z-index:20;animation:octo-head-squish 3s ease-in-out infinite;">
    <!-- Main head shape - Purple to match tentacles -->
    <div style="width:100%;height:100%;background:radial-gradient(ellipse at 40% 25%,#a78bfa,#8b5cf6 50%,#7c3aed);border:3px solid #6d28d9;border-radius:50% 50% 48% 48% / 55% 55% 45% 45%;position:relative;overflow:hidden;">
      <!-- Spots pattern (lighter purple) -->
      <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle,#ddd6fe,transparent);border-radius:50%;top:12px;left:12px;opacity:0.7;"></div>
      <div style="position:absolute;width:10px;height:10px;background:radial-gradient(circle,#ddd6fe,transparent);border-radius:50%;top:8px;left:40px;opacity:0.5;"></div>
      <div style="position:absolute;width:12px;height:12px;background:radial-gradient(circle,#ddd6fe,transparent);border-radius:50%;top:22px;right:12px;opacity:0.6;"></div>
      <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle,#ddd6fe,transparent);border-radius:50%;top:40px;left:18px;opacity:0.4;"></div>
      <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle,#ddd6fe,transparent);border-radius:50%;top:32px;right:28px;opacity:0.35;"></div>
      <!-- Main highlight (white shine) -->
      <div style="position:absolute;width:25px;height:18px;background:radial-gradient(ellipse,rgba(255,255,255,0.6),transparent);border-radius:50%;top:10px;left:18px;"></div>
      <div style="position:absolute;width:12px;height:10px;background:radial-gradient(ellipse,rgba(255,255,255,0.4),transparent);border-radius:50%;top:15px;left:50px;"></div>
    </div>
  </div>

  <!-- Face -->
  <div style="position:absolute;width:115px;height:75px;top:30px;left:42px;z-index:30;animation:octo-happy-wiggle 6s ease-in-out infinite;">
    <!-- Eyebrows (darker purple) -->
    <div style="position:absolute;top:2px;width:100%;display:flex;justify-content:center;gap:42px;">
      <div style="width:14px;height:5px;background:#5b21b6;border-radius:50%;transform:rotate(-10deg);animation:octo-brow-raise 5s ease-in-out infinite;"></div>
      <div style="width:14px;height:5px;background:#5b21b6;border-radius:50%;transform:rotate(10deg);animation:octo-brow-raise 5s ease-in-out infinite;"></div>
    </div>

    <!-- Big Eyes with brown/orange irises -->
    <div style="position:absolute;top:12px;width:100%;display:flex;justify-content:center;gap:18px;">
      <!-- Left Eye -->
      <div style="width:34px;height:34px;background:radial-gradient(circle at 45% 45%,#ffffff,#faf5ff);border:3px solid #6d28d9;border-radius:50%;position:relative;box-shadow:inset 2px 2px 5px rgba(0,0,0,0.1);animation:octo-blink 4s infinite;">
        <div style="position:absolute;width:18px;height:18px;background:radial-gradient(circle at 40% 35%,#f97316,#ea580c,#c2410c);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:octo-eye-look-around 4s ease-in-out infinite;">
          <div style="position:absolute;width:10px;height:10px;background:#1f2937;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
          <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:10px;left:9px;opacity:0.6;"></div>
        </div>
      </div>
      <!-- Right Eye -->
      <div style="width:34px;height:34px;background:radial-gradient(circle at 45% 45%,#ffffff,#faf5ff);border:3px solid #6d28d9;border-radius:50%;position:relative;box-shadow:inset 2px 2px 5px rgba(0,0,0,0.1);animation:octo-blink 4s infinite;">
        <div style="position:absolute;width:18px;height:18px;background:radial-gradient(circle at 40% 35%,#f97316,#ea580c,#c2410c);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:octo-eye-look-around 4s ease-in-out infinite;">
          <div style="position:absolute;width:10px;height:10px;background:#1f2937;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
          <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:10px;left:9px;opacity:0.6;"></div>
        </div>
      </div>
    </div>

    <!-- Blush (pink) -->
    <div style="position:absolute;top:42px;width:100%;display:flex;justify-content:center;gap:55px;">
      <div style="width:14px;height:6px;background:#fda4af;border-radius:50%;opacity:0.5;filter:blur(2px);"></div>
      <div style="position:absolute;width:14px;height:6px;background:#fda4af;border-radius:50%;opacity:0.5;filter:blur(2px);"></div>
    </div>

    <!-- Cute smile -->
    <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);">
      <div style="width:18px;height:10px;border:none;background:transparent;">
        <div style="width:18px;height:8px;border-bottom:3px solid #6d28d9;border-left:2px solid transparent;border-right:2px solid transparent;border-radius:0 0 50% 50%;"></div>
      </div>
    </div>
  </div>
</div>
    `,

  };

  // Check if we have a CSS design for this variant
  if(aquaticDesigns[variant]){
    const design = aquaticDesigns[variant];
    const shadowHTML = `<div class="adult-shadow"></div>`;
    return `<div style="position:relative;">${design}${shadowHTML}</div>`;
  }else{
    // Return emoji placeholder for other aquatic creatures
    const aquaticEmojis = ['🐋','🐬','🦭','🦈','🐙','🦑','🦞','🦀','🦑','🪼'];
    const emoji = aquaticEmojis[variant] || '🐟';
    return `<div style="position:relative;width:200px;height:180px;display:flex;align-items:center;justify-content:center;"><div style="font-size:100px;">${emoji}</div><div class="adult-shadow"></div></div>`;
  }
}

// ==================== ADULT ALIEN ====================
