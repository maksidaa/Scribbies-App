function renderAdultAlien(variantIndex){
  const variant = variantIndex !== undefined ? variantIndex : (S.creatureVariant || 0);
  const shadowHTML = '<div class="adult-shadow"></div>';

  // Flying Eye (Ophanim) - variant 10
  if(variant === 10){
    const flyingEyeDesign = `
<!-- FLYING EYE (OPHANIM) - Biblical Creature with Orbital Eye Rings -->
<div data-part="container" style="position:relative;width:240px;height:285px;animation:flying-eye-float 3s ease-in-out infinite;">

  <!-- Flame effects behind creature -->
  <div style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;overflow:visible;">
    <!-- Left flame wisps -->
    <div style="position:absolute;width:30px;height:50px;top:80px;left:15px;background:linear-gradient(to top,rgba(255,200,100,0),rgba(255,180,80,0.4),rgba(255,220,150,0.6));border-radius:50% 50% 20% 20%;filter:blur(4px);animation:flame-flicker 1.5s ease-in-out infinite;"></div>
    <div style="position:absolute;width:25px;height:40px;top:100px;left:5px;background:linear-gradient(to top,rgba(255,200,100,0),rgba(255,150,50,0.3));border-radius:50%;filter:blur(5px);animation:flame-flicker 1.8s ease-in-out infinite 0.3s;"></div>
    <!-- Right flame wisps -->
    <div style="position:absolute;width:30px;height:50px;top:80px;right:15px;background:linear-gradient(to top,rgba(255,200,100,0),rgba(255,180,80,0.4),rgba(255,220,150,0.6));border-radius:50% 50% 20% 20%;filter:blur(4px);animation:flame-flicker 1.5s ease-in-out infinite 0.2s;"></div>
    <div style="position:absolute;width:25px;height:40px;top:100px;right:5px;background:linear-gradient(to top,rgba(255,200,100,0),rgba(255,150,50,0.3));border-radius:50%;filter:blur(5px);animation:flame-flicker 1.8s ease-in-out infinite 0.5s;"></div>
  </div>

  <!-- Outer orbital ring (largest) - tilted back -->
  <div style="position:absolute;width:220px;height:80px;top:90px;left:10px;z-index:5;transform:rotateX(70deg);animation:orbit-spin 12s linear infinite;">
    <!-- Ring structure -->
    <div style="position:absolute;width:100%;height:100%;border:12px solid transparent;border-radius:50%;background:linear-gradient(90deg,#d97706,#f59e0b,#fbbf24,#f59e0b,#d97706) border-box;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;box-shadow:0 0 15px rgba(245,158,11,0.5),inset 0 0 10px rgba(251,191,36,0.3);"></div>
    <!-- Eyes on outer ring (12 eyes) -->
    ${[...Array(12)].map((_,i)=>{const angle=(i*30)*Math.PI/180;const x=100+95*Math.cos(angle);const y=40+35*Math.sin(angle);return`<div style="position:absolute;width:14px;height:14px;left:${x}px;top:${y}px;transform:translate(-50%,-50%) rotateX(-70deg);"><div style="width:100%;height:100%;background:radial-gradient(circle at 40% 40%,#fff,#e0e7ff);border:2px solid #b45309;border-radius:50%;box-shadow:0 0 6px rgba(59,130,246,0.5);"><div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle,#3b82f6,#1d4ed8);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"><div style="position:absolute;width:2px;height:2px;background:#000;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div></div></div></div>`;}).join('')}
  </div>

  <!-- Middle orbital ring - tilted left -->
  <div style="position:absolute;width:180px;height:70px;top:95px;left:30px;z-index:10;transform:rotateX(60deg) rotateZ(45deg);animation:orbit-spin 10s linear infinite reverse;">
    <!-- Ring structure -->
    <div style="position:absolute;width:100%;height:100%;border:10px solid transparent;border-radius:50%;background:linear-gradient(90deg,#b45309,#d97706,#f59e0b,#d97706,#b45309) border-box;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;box-shadow:0 0 12px rgba(217,119,6,0.5),inset 0 0 8px rgba(245,158,11,0.3);"></div>
    <!-- Eyes on middle ring (10 eyes) -->
    ${[...Array(10)].map((_,i)=>{const angle=(i*36)*Math.PI/180;const x=85+75*Math.cos(angle);const y=35+28*Math.sin(angle);return`<div style="position:absolute;width:12px;height:12px;left:${x}px;top:${y}px;transform:translate(-50%,-50%) rotateZ(-45deg) rotateX(-60deg);"><div style="width:100%;height:100%;background:radial-gradient(circle at 40% 40%,#fff,#e0e7ff);border:2px solid #92400e;border-radius:50%;box-shadow:0 0 5px rgba(59,130,246,0.4);"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle,#3b82f6,#1d4ed8);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"><div style="position:absolute;width:2px;height:2px;background:#000;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div></div></div></div>`;}).join('')}
  </div>

  <!-- Inner orbital ring - tilted right -->
  <div style="position:absolute;width:160px;height:60px;top:100px;left:40px;z-index:15;transform:rotateX(65deg) rotateZ(-30deg);animation:orbit-spin 8s linear infinite;">
    <!-- Ring structure -->
    <div style="position:absolute;width:100%;height:100%;border:8px solid transparent;border-radius:50%;background:linear-gradient(90deg,#92400e,#b45309,#d97706,#b45309,#92400e) border-box;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;box-shadow:0 0 10px rgba(180,83,9,0.5),inset 0 0 6px rgba(217,119,6,0.3);"></div>
    <!-- Eyes on inner ring (8 eyes) -->
    ${[...Array(8)].map((_,i)=>{const angle=(i*45)*Math.PI/180;const x=76+65*Math.cos(angle);const y=30+22*Math.sin(angle);return`<div style="position:absolute;width:10px;height:10px;left:${x}px;top:${y}px;transform:translate(-50%,-50%) rotateZ(30deg) rotateX(-65deg);"><div style="width:100%;height:100%;background:radial-gradient(circle at 40% 40%,#fff,#e0e7ff);border:2px solid #78350f;border-radius:50%;box-shadow:0 0 4px rgba(59,130,246,0.3);"><div style="position:absolute;width:4px;height:4px;background:radial-gradient(circle,#3b82f6,#1d4ed8);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"><div style="position:absolute;width:1px;height:1px;background:#000;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div></div></div></div>`;}).join('')}
  </div>

  <!-- Central eye body (main eyeball) -->
  <div style="position:absolute;width:100px;height:100px;top:85px;left:70px;z-index:40;">
    <!-- Golden fleshy outer ring -->
    <div style="position:absolute;width:100%;height:100%;background:radial-gradient(circle at 35% 35%,#fcd34d,#f59e0b 30%,#d97706 60%,#b45309 80%,#92400e);border-radius:50%;box-shadow:inset 8px 8px 20px rgba(254,243,199,0.4),inset -5px -5px 15px rgba(120,53,15,0.4),0 0 30px rgba(245,158,11,0.6),0 0 60px rgba(217,119,6,0.3);"></div>
    <!-- Bumpy/wrinkled texture overlay -->
    <div style="position:absolute;width:90%;height:90%;top:5%;left:5%;background:radial-gradient(circle at 20% 20%,rgba(254,243,199,0.3) 0%,transparent 20%),radial-gradient(circle at 70% 30%,rgba(254,243,199,0.2) 0%,transparent 15%),radial-gradient(circle at 40% 70%,rgba(254,243,199,0.25) 0%,transparent 18%),radial-gradient(circle at 80% 75%,rgba(254,243,199,0.2) 0%,transparent 12%);border-radius:50%;"></div>

    <!-- Inner eyelid ring (pink/red) -->
    <div style="position:absolute;width:70px;height:70px;top:15px;left:15px;background:radial-gradient(circle,#be185d 0%,#9d174d 40%,#831843 70%);border-radius:50%;box-shadow:inset 3px 3px 10px rgba(251,207,232,0.3),inset -2px -2px 8px rgba(80,10,40,0.4);"></div>

    <!-- White of the eye (sclera) -->
    <div style="position:absolute;width:55px;height:55px;top:22.5px;left:22.5px;background:radial-gradient(circle at 40% 35%,#fff,#f0f9ff 50%,#e0f2fe 80%,#bae6fd);border-radius:50%;box-shadow:inset 2px 2px 8px rgba(186,230,253,0.5),0 0 10px rgba(255,255,255,0.5);overflow:hidden;">
      <!-- Subtle blood vessel lines -->
      <div style="position:absolute;width:1px;height:15px;background:linear-gradient(to bottom,transparent,rgba(239,68,68,0.3),transparent);top:5px;left:8px;transform:rotate(-20deg);"></div>
      <div style="position:absolute;width:1px;height:12px;background:linear-gradient(to bottom,transparent,rgba(239,68,68,0.25),transparent);top:8px;right:10px;transform:rotate(25deg);"></div>
    </div>

    <!-- Iris (blue with golden ring) -->
    <div style="position:absolute;width:38px;height:38px;top:31px;left:31px;background:radial-gradient(circle at 45% 45%,#60a5fa,#3b82f6 40%,#2563eb 70%,#1d4ed8);border:3px solid #d97706;border-radius:50%;box-shadow:0 0 15px rgba(59,130,246,0.6),inset 2px 2px 6px rgba(147,197,253,0.4);animation:flying-eye-look 4s ease-in-out infinite;">
      <!-- Iris detail lines -->
      <div style="position:absolute;width:100%;height:100%;background:repeating-conic-gradient(from 0deg,transparent 0deg 10deg,rgba(30,58,138,0.2) 10deg 12deg);border-radius:50%;"></div>
    </div>

    <!-- Pupil -->
    <div style="position:absolute;width:16px;height:16px;top:42px;left:42px;background:radial-gradient(circle at 40% 40%,#1e1b4b,#000);border-radius:50%;box-shadow:0 0 5px rgba(0,0,0,0.5);animation:flying-eye-look 4s ease-in-out infinite;"></div>

    <!-- Eye highlight/reflection -->
    <div style="position:absolute;width:10px;height:10px;top:35px;left:35px;background:radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.6));border-radius:50%;"></div>
    <div style="position:absolute;width:5px;height:5px;top:52px;left:54px;background:rgba(255,255,255,0.7);border-radius:50%;"></div>
  </div>

  <!-- Tiny floating sparkles -->
  <div style="position:absolute;width:4px;height:4px;background:#fcd34d;border-radius:50%;top:60px;left:40px;box-shadow:0 0 8px #fcd34d;animation:alien-glow 2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:3px;height:3px;background:#60a5fa;border-radius:50%;top:50px;right:50px;box-shadow:0 0 6px #60a5fa;animation:alien-glow 2.3s ease-in-out infinite 0.4s;"></div>
  <div style="position:absolute;width:4px;height:4px;background:#f59e0b;border-radius:50%;bottom:80px;left:30px;box-shadow:0 0 8px #f59e0b;animation:alien-glow 1.8s ease-in-out infinite 0.7s;"></div>
  <div style="position:absolute;width:3px;height:3px;background:#3b82f6;border-radius:50%;bottom:90px;right:40px;box-shadow:0 0 6px #3b82f6;animation:alien-glow 2.1s ease-in-out infinite 0.2s;"></div>
</div>
    `;
    return '<div style="position:relative;">' + flyingEyeDesign + shadowHTML + '</div>';
  }

  // Default alien design with features borrowed from teen variants
  const alienDesign = `
<!-- COSMIC ALIEN BUDDY - Extra Cute with Glowing Features -->
<div data-part="container" style="position:relative;width:200px;height:240px;animation:alien-waddle 1.2s ease-in-out infinite;">
  <!-- Cosmic glow aura behind alien -->
  <div style="position:absolute;width:140px;height:140px;background:radial-gradient(circle,rgba(0,255,255,0.25),rgba(138,43,226,0.15),transparent 70%);border-radius:50%;top:30px;left:30px;z-index:1;animation:alien-glow 3s ease-in-out infinite;"></div>

  <!-- Left Antenna - Neon Cyan/Pink -->
  <div style="position:absolute;width:8px;height:45px;top:12px;left:58px;z-index:25;transform-origin:bottom center;animation:alien-antenna-l 2.5s ease-in-out infinite;">
    <div style="width:100%;height:100%;background:linear-gradient(to top,rgba(0,255,255,0.9),rgba(255,0,255,0.95));border:2px solid rgba(138,43,226,0.6);border-radius:20px 20px 8px 8px;box-shadow:0 0 8px rgba(0,255,255,0.5);"></div>
    <!-- Glowing tip orb -->
    <div style="position:absolute;width:16px;height:16px;background:radial-gradient(circle at 40% 40%,rgba(0,255,255,1),rgba(0,206,209,0.9));border:2px solid rgba(0,180,180,0.6);border-radius:50%;top:-10px;left:50%;transform:translateX(-50%);box-shadow:0 0 15px rgba(0,255,255,0.8),0 0 25px rgba(0,255,255,0.4);animation:alien-glow 1.5s ease-in-out infinite;"></div>
  </div>

  <!-- Right Antenna - Neon Pink/Cyan -->
  <div style="position:absolute;width:8px;height:45px;top:12px;right:58px;z-index:25;transform-origin:bottom center;animation:alien-antenna-r 2.5s ease-in-out infinite;">
    <div style="width:100%;height:100%;background:linear-gradient(to top,rgba(255,0,255,0.9),rgba(0,255,255,0.95));border:2px solid rgba(138,43,226,0.6);border-radius:20px 20px 8px 8px;box-shadow:0 0 8px rgba(255,0,255,0.5);"></div>
    <!-- Glowing tip orb -->
    <div style="position:absolute;width:16px;height:16px;background:radial-gradient(circle at 40% 40%,rgba(255,0,255,1),rgba(218,112,214,0.9));border:2px solid rgba(180,0,180,0.6);border-radius:50%;top:-10px;left:50%;transform:translateX(-50%);box-shadow:0 0 15px rgba(255,0,255,0.8),0 0 25px rgba(255,0,255,0.4);animation:alien-glow 1.5s ease-in-out infinite 0.5s;"></div>
  </div>

  <!-- Stubby Arms (connected to body) -->
  <div style="position:absolute;width:18px;height:28px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa,#8b5cf6);border:2px solid #7c3aed;border-radius:50%;top:118px;left:48px;z-index:19;transform-origin:top right;animation:alien-arm-wave-l 2s ease-in-out infinite;box-shadow:0 0 8px rgba(138,43,226,0.3);">
    <!-- 3 stubby fingers -->
    <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:16px;height:10px;">
      <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;left:0;"></div>
      <div style="position:absolute;width:5px;height:10px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;left:5px;"></div>
      <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;right:0;"></div>
    </div>
  </div>
  <div style="position:absolute;width:18px;height:28px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa,#8b5cf6);border:2px solid #7c3aed;border-radius:50%;top:118px;right:48px;z-index:19;transform-origin:top left;animation:alien-arm-wave-r 2s ease-in-out infinite;box-shadow:0 0 8px rgba(138,43,226,0.3);">
    <!-- 3 stubby fingers -->
    <div style="position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);width:16px;height:10px;">
      <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;left:0;"></div>
      <div style="position:absolute;width:5px;height:10px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;left:5px;"></div>
      <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse,#c4b5fd,#a78bfa);border:1px solid #7c3aed;border-radius:50%;right:0;"></div>
    </div>
  </div>

  <!-- Body (oval) -->
  <div style="position:absolute;width:70px;height:55px;background:radial-gradient(ellipse at 40% 30%,#c4b5fd,#a78bfa,#8b5cf6);border:3px solid #7c3aed;border-radius:50%;top:110px;left:65px;z-index:20;box-shadow:inset 6px 6px 15px rgba(200,180,255,0.5),inset -4px -4px 10px rgba(100,50,180,0.3),0 0 20px rgba(138,43,226,0.3);">
    <!-- Belly highlight -->
    <div style="position:absolute;width:40px;height:30px;background:radial-gradient(ellipse at 50% 40%,rgba(237,233,254,0.6),transparent);border-radius:50%;top:8px;left:50%;transform:translateX(-50%);"></div>
    <!-- Glowing energy core -->
    <div style="position:absolute;width:22px;height:22px;background:radial-gradient(circle,rgba(255,255,255,0.9),rgba(0,255,255,0.7),rgba(255,0,255,0.5));border-radius:50%;bottom:6px;left:50%;transform:translateX(-50%);box-shadow:0 0 15px rgba(0,255,255,0.6),0 0 25px rgba(255,0,255,0.3);animation:alien-glow 2s ease-in-out infinite;"></div>
  </div>

  <!-- Stubby Waddling Legs -->
  <div style="position:absolute;width:20px;height:25px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa,#8b5cf6);border:2px solid #7c3aed;border-radius:50%;top:155px;left:72px;z-index:18;box-shadow:0 0 8px rgba(138,43,226,0.3);transform-origin:top center;animation:teen-leg-walk 0.6s ease-in-out infinite;">
    <!-- Stubby Foot -->
    <div style="position:absolute;width:26px;height:10px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa);border:2px solid #7c3aed;border-radius:50%;bottom:-4px;left:50%;transform:translateX(-50%);"></div>
  </div>
  <div style="position:absolute;width:20px;height:25px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa,#8b5cf6);border:2px solid #7c3aed;border-radius:50%;top:155px;right:72px;z-index:18;box-shadow:0 0 8px rgba(138,43,226,0.3);transform-origin:top center;animation:teen-leg-walk 0.6s ease-in-out infinite 0.3s;">
    <!-- Stubby Foot -->
    <div style="position:absolute;width:26px;height:10px;background:radial-gradient(ellipse at 50% 30%,#c4b5fd,#a78bfa);border:2px solid #7c3aed;border-radius:50%;bottom:-4px;left:50%;transform:translateX(-50%);"></div>
  </div>

  <!-- Big Adorable Head with Space Helmet -->
  <div style="position:absolute;width:140px;height:130px;top:5px;left:30px;z-index:30;animation:alien-happy 6s ease-in-out infinite;">

    <!-- SPACE HELMET - Glass Dome -->
    <div style="position:absolute;width:140px;height:120px;top:0;left:0;z-index:35;pointer-events:none;">
      <!-- Glass dome -->
      <div style="width:100%;height:100%;background:radial-gradient(ellipse at 30% 25%,rgba(255,255,255,0.3),rgba(200,230,255,0.15) 40%,rgba(150,200,255,0.1) 70%,rgba(100,180,255,0.05));border:4px solid rgba(180,200,220,0.8);border-radius:50% 50% 45% 45% / 55% 55% 40% 40%;box-shadow:inset 0 0 30px rgba(255,255,255,0.3),inset -5px -5px 20px rgba(100,150,200,0.2),0 0 15px rgba(100,200,255,0.3);"></div>
      <!-- Glass reflection highlight -->
      <div style="position:absolute;width:50px;height:35px;background:radial-gradient(ellipse,rgba(255,255,255,0.5),transparent);border-radius:50%;top:15px;left:20px;"></div>
      <div style="position:absolute;width:25px;height:18px;background:radial-gradient(ellipse,rgba(255,255,255,0.3),transparent);border-radius:50%;top:45px;right:25px;"></div>
      <!-- Helmet ring/seal at bottom -->
      <div style="position:absolute;width:110px;height:16px;background:linear-gradient(to bottom,#9ca3af,#6b7280,#4b5563);border:2px solid #374151;border-radius:8px;bottom:2px;left:50%;transform:translateX(-50%);box-shadow:inset 0 2px 4px rgba(255,255,255,0.3),inset 0 -2px 4px rgba(0,0,0,0.3);"></div>
      <!-- Helmet bolts -->
      <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,#d1d5db,#6b7280);border:1px solid #4b5563;border-radius:50%;bottom:6px;left:22px;"></div>
      <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%,#d1d5db,#6b7280);border:1px solid #4b5563;border-radius:50%;bottom:6px;right:22px;"></div>
    </div>

    <!-- Main head shape - chrome lavender (inside helmet) -->
    <div style="position:absolute;width:100px;height:85px;top:20px;left:20px;background:radial-gradient(ellipse at 40% 30%,#ede9fe,#c4b5fd 40%,#a78bfa,#8b5cf6);border:3px solid #7c3aed;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;overflow:hidden;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.4),inset -5px -5px 15px rgba(100,50,180,0.2),0 0 25px rgba(138,43,226,0.4);z-index:32;">
      <!-- Spots pattern - bioluminescent -->
      <div style="position:absolute;width:8px;height:8px;background:rgba(0,255,255,0.7);border-radius:50%;top:8px;left:8px;box-shadow:0 0 10px rgba(0,255,255,0.6);"></div>
      <div style="position:absolute;width:5px;height:5px;background:rgba(255,0,255,0.7);border-radius:50%;top:5px;right:12px;box-shadow:0 0 8px rgba(255,0,255,0.6);"></div>
      <div style="position:absolute;width:6px;height:6px;background:rgba(0,255,255,0.6);border-radius:50%;top:24px;left:14px;box-shadow:0 0 8px rgba(0,255,255,0.5);"></div>
    </div>

    <!-- HUGE Adorable Eyes (inside helmet) -->
    <div style="position:absolute;top:42px;left:20px;width:100px;display:flex;justify-content:center;gap:4px;z-index:33;">
      <!-- Left Eye -->
      <div style="width:32px;height:36px;background:radial-gradient(ellipse at 45% 45%,#1f2937,#0f172a);border:3px solid #7c3aed;border-radius:50%;position:relative;overflow:hidden;animation:alien-blink 5s infinite;box-shadow:0 0 15px rgba(255,140,0,0.4);">
        <!-- Iris - glowing orange/amber -->
        <div style="position:absolute;width:18px;height:20px;background:radial-gradient(ellipse at 40% 40%,rgba(255,215,0,0.9),rgba(255,140,0,0.95),rgba(255,69,0,0.8));border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:alien-eye-look 5s ease-in-out infinite;box-shadow:0 0 10px rgba(255,140,0,0.6);">
          <!-- Pupil -->
          <div style="position:absolute;width:8px;height:10px;background:#0f172a;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div>
        </div>
      </div>
      <!-- Right Eye -->
      <div style="width:32px;height:36px;background:radial-gradient(ellipse at 45% 45%,#1f2937,#0f172a);border:3px solid #7c3aed;border-radius:50%;position:relative;overflow:hidden;animation:alien-blink 5s infinite;box-shadow:0 0 15px rgba(255,140,0,0.4);">
        <!-- Iris - glowing orange/amber -->
        <div style="position:absolute;width:18px;height:20px;background:radial-gradient(ellipse at 40% 40%,rgba(255,215,0,0.9),rgba(255,140,0,0.95),rgba(255,69,0,0.8));border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:alien-eye-look 5s ease-in-out infinite;box-shadow:0 0 10px rgba(255,140,0,0.6);">
          <!-- Pupil -->
          <div style="position:absolute;width:8px;height:10px;background:#0f172a;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
          <!-- Highlight -->
          <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div>
        </div>
      </div>
    </div>

    <!-- Cute pink blush (inside helmet) -->
    <div style="position:absolute;top:76px;left:20px;width:100px;display:flex;justify-content:center;gap:36px;z-index:33;">
      <div style="width:12px;height:5px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(2px);"></div>
      <div style="width:12px;height:5px;background:#f472b6;border-radius:50%;opacity:0.5;filter:blur(2px);"></div>
    </div>

    <!-- Happy cat-like smile (inside helmet) -->
    <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);z-index:33;">
      <div style="width:22px;height:10px;border-bottom:3px solid #7c3aed;border-radius:0 0 50% 50%;"></div>
    </div>
  </div>

  <!-- Floating sparkles around alien -->
  <div style="position:absolute;width:5px;height:5px;background:rgba(255,215,0,0.9);border-radius:50%;top:12px;left:28px;box-shadow:0 0 8px rgba(255,215,0,0.7);animation:alien-glow 2s ease-in-out infinite;"></div>
  <div style="position:absolute;width:4px;height:4px;background:rgba(0,255,255,0.9);border-radius:50%;top:8px;right:32px;box-shadow:0 0 6px rgba(0,255,255,0.7);animation:alien-glow 2.5s ease-in-out infinite 0.3s;"></div>
  <div style="position:absolute;width:4px;height:4px;background:rgba(255,0,255,0.9);border-radius:50%;bottom:50px;left:22px;box-shadow:0 0 6px rgba(255,0,255,0.7);animation:alien-glow 2s ease-in-out infinite 0.6s;"></div>
  <div style="position:absolute;width:4px;height:4px;background:rgba(255,255,255,0.95);border-radius:50%;bottom:45px;right:28px;box-shadow:0 0 8px rgba(255,255,255,0.8);animation:alien-glow 2.2s ease-in-out infinite 0.9s;"></div>
</div>
  `;

  return '<div style="position:relative;">' + alienDesign + shadowHTML + '</div>';
}
