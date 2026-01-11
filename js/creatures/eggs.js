function renderEgg(categoryKey){
  const category=categoryKey||S.creatureCategory||'birds';

  const eggDesigns={
    // Birds - Pale blue speckled egg with feather wisps
    birds:`
      <div style="position:relative;width:160px;height:210px;display:inline-block;animation:egg-wobble 2.5s ease-in-out infinite;">
        <div style="position:absolute;width:140px;height:185px;left:10px;top:10px;background:radial-gradient(ellipse at 32% 28%, #f0f9ff 0%, #bae6fd 35%, #7dd3fc 70%, #38bdf8 100%);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;border:5px solid #0ea5e9;box-shadow:inset -15px -15px 40px rgba(255,255,255,0.75),inset 8px 8px 20px rgba(14,165,233,0.3),0 12px 30px rgba(14,165,233,0.25),0 0 60px rgba(56,189,248,0.15);">
          <!-- 3D Highlight -->
          <div style="position:absolute;width:40px;height:60px;background:rgba(255,255,255,0.6);border-radius:50%;top:10%;left:15%;transform:rotate(-20deg);filter:blur(3px);"></div>
          <div style="position:absolute;width:20px;height:30px;background:rgba(255,255,255,0.4);border-radius:50%;top:18%;left:22%;filter:blur(1px);"></div>
          <!-- Animated speckles -->
          <div style="position:absolute;width:10px;height:9px;background:radial-gradient(circle,#b45309,#78350f);border-radius:50%;top:20%;left:28%;opacity:0.7;box-shadow:2px 2px 4px rgba(0,0,0,0.15);animation:sparkle-twinkle 3s ease-in-out infinite;"></div>
          <div style="position:absolute;width:8px;height:7px;background:radial-gradient(circle,#b45309,#78350f);border-radius:50%;top:35%;left:62%;opacity:0.6;box-shadow:1px 1px 3px rgba(0,0,0,0.1);animation:sparkle-twinkle 2.5s ease-in-out infinite 0.5s;"></div>
          <div style="position:absolute;width:9px;height:8px;background:radial-gradient(circle,#b45309,#78350f);border-radius:50%;top:50%;left:40%;opacity:0.65;box-shadow:1px 1px 3px rgba(0,0,0,0.1);animation:sparkle-twinkle 2.8s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:7px;height:6px;background:radial-gradient(circle,#92400e,#78350f);border-radius:50%;top:28%;left:72%;opacity:0.55;animation:sparkle-twinkle 3.2s ease-in-out infinite 0.7s;"></div>
          <div style="position:absolute;width:8px;height:7px;background:radial-gradient(circle,#b45309,#78350f);border-radius:50%;top:62%;left:55%;opacity:0.6;animation:sparkle-twinkle 2.6s ease-in-out infinite 0.2s;"></div>
          <div style="position:absolute;width:6px;height:5px;background:radial-gradient(circle,#92400e,#78350f);border-radius:50%;top:42%;left:22%;opacity:0.5;animation:sparkle-twinkle 3s ease-in-out infinite 0.8s;"></div>
          <!-- Feather wisps floating -->
          <div style="position:absolute;width:3px;height:12px;background:linear-gradient(to bottom,rgba(255,255,255,0.8),transparent);top:8%;right:25%;transform:rotate(15deg);animation:egg-float 2s ease-in-out infinite;"></div>
          <div style="position:absolute;width:2px;height:10px;background:linear-gradient(to bottom,rgba(255,255,255,0.6),transparent);top:5%;left:30%;transform:rotate(-10deg);animation:egg-float 2.5s ease-in-out infinite 0.5s;"></div>
        </div>
      </div>
    `,
    // Aquatic - Teal translucent egg cluster with bubbles and water ripples
    aquatic:`
      <div style="position:relative;width:170px;height:210px;display:inline-block;animation:egg-float 3s ease-in-out infinite;">
        <!-- Water shimmer effect -->
        <div style="position:absolute;width:160px;height:200px;left:5px;top:5px;background:linear-gradient(135deg,transparent 40%,rgba(255,255,255,0.1) 45%,transparent 50%);animation:egg-glow 2s ease-in-out infinite;"></div>
        <!-- Main egg -->
        <div style="position:absolute;width:115px;height:155px;left:28px;top:15px;background:radial-gradient(ellipse at 28% 25%, rgba(255,255,255,0.95) 0%, rgba(153,246,228,0.9) 25%, rgba(45,212,191,0.85) 55%, rgba(20,184,166,0.9) 100%);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;border:5px solid #14b8a6;box-shadow:inset -12px -12px 30px rgba(255,255,255,0.6),0 0 40px rgba(20,184,166,0.4),0 12px 30px rgba(20,184,166,0.25);">
          <div style="position:absolute;width:35px;height:55px;background:rgba(255,255,255,0.6);border-radius:50%;top:8%;left:12%;transform:rotate(-15deg);filter:blur(3px);"></div>
          <div style="position:absolute;width:18px;height:28px;background:rgba(255,255,255,0.4);border-radius:50%;top:15%;left:20%;filter:blur(1px);"></div>
          <!-- Internal fish silhouette hint -->
          <div style="position:absolute;width:25px;height:12px;background:rgba(20,184,166,0.3);border-radius:50% 30% 30% 50%;top:45%;left:40%;transform:rotate(-10deg);animation:wiggle 2s ease-in-out infinite;"></div>
        </div>
        <!-- Small eggs with animation -->
        <div style="position:absolute;width:45px;height:58px;left:0px;top:70px;background:radial-gradient(ellipse at 32% 28%, rgba(255,255,255,0.85), rgba(153,246,228,0.8), rgba(45,212,191,0.8));border-radius:50%;border:4px solid #14b8a6;box-shadow:0 0 20px rgba(20,184,166,0.35),inset -5px -5px 12px rgba(255,255,255,0.4);animation:egg-pulse 2s ease-in-out infinite;">
          <div style="position:absolute;width:12px;height:18px;background:rgba(255,255,255,0.5);border-radius:50%;top:12%;left:15%;filter:blur(1px);"></div>
        </div>
        <div style="position:absolute;width:38px;height:50px;right:5px;top:90px;background:radial-gradient(ellipse at 32% 28%, rgba(255,255,255,0.85), rgba(153,246,228,0.8), rgba(45,212,191,0.8));border-radius:50%;border:4px solid #14b8a6;box-shadow:0 0 18px rgba(20,184,166,0.3),inset -4px -4px 10px rgba(255,255,255,0.35);animation:egg-pulse 2.5s ease-in-out infinite 0.4s;">
          <div style="position:absolute;width:10px;height:15px;background:rgba(255,255,255,0.5);border-radius:50%;top:12%;left:15%;filter:blur(1px);"></div>
        </div>
        <!-- Rising bubbles -->
        <div style="position:absolute;width:12px;height:12px;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(153,246,228,0.3));border-radius:50%;top:8px;right:30px;box-shadow:0 0 8px rgba(255,255,255,0.5);animation:egg-float 1.8s ease-in-out infinite;"></div>
        <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(153,246,228,0.3));border-radius:50%;top:25px;right:18px;box-shadow:0 0 6px rgba(255,255,255,0.4);animation:egg-float 2.2s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), rgba(153,246,228,0.3));border-radius:50%;top:40px;right:35px;animation:egg-float 2s ease-in-out infinite 0.6s;"></div>
        <div style="position:absolute;width:10px;height:10px;background:radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(153,246,228,0.3));border-radius:50%;top:15px;left:15px;box-shadow:0 0 6px rgba(255,255,255,0.4);animation:egg-float 2.5s ease-in-out infinite 0.2s;"></div>
      </div>
    `,
    // Reptiles - Leathery tan egg with scales and cracks
    reptiles:`
      <div style="position:relative;width:160px;height:200px;display:inline-block;animation:egg-pulse 3.5s ease-in-out infinite;">
        <div style="position:absolute;width:135px;height:175px;left:12px;top:10px;background:radial-gradient(ellipse at 32% 28%, #fffbeb 0%, #fef3c7 25%, #fde68a 55%, #fcd34d 85%, #f59e0b 100%);border-radius:50% 50% 48% 48% / 55% 55% 45% 45%;border:5px solid #d97706;box-shadow:inset -15px -15px 40px rgba(255,255,255,0.55),inset 8px 8px 25px rgba(180,83,9,0.25),0 12px 30px rgba(217,119,6,0.25),0 0 50px rgba(252,211,77,0.15);">
          <!-- 3D Highlight -->
          <div style="position:absolute;width:38px;height:58px;background:rgba(255,255,255,0.5);border-radius:50%;top:8%;left:15%;transform:rotate(-15deg);filter:blur(4px);"></div>
          <div style="position:absolute;width:20px;height:30px;background:rgba(255,255,255,0.35);border-radius:50%;top:15%;left:22%;filter:blur(1px);"></div>
          <!-- Leathery scale texture patches with animation -->
          <div style="position:absolute;width:24px;height:18px;background:radial-gradient(ellipse, rgba(180,83,9,0.4), rgba(120,53,15,0.2));border-radius:50%;top:18%;left:22%;animation:egg-pulse 3s ease-in-out infinite;"></div>
          <div style="position:absolute;width:28px;height:20px;background:radial-gradient(ellipse, rgba(180,83,9,0.35), rgba(120,53,15,0.18));border-radius:50%;top:38%;left:55%;animation:egg-pulse 2.5s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:22px;height:16px;background:radial-gradient(ellipse, rgba(180,83,9,0.4), rgba(120,53,15,0.22));border-radius:50%;top:58%;left:30%;animation:egg-pulse 2.8s ease-in-out infinite 0.5s;"></div>
          <div style="position:absolute;width:18px;height:14px;background:radial-gradient(ellipse, rgba(180,83,9,0.32), rgba(120,53,15,0.15));border-radius:50%;top:30%;left:68%;animation:egg-pulse 3.2s ease-in-out infinite 0.2s;"></div>
          <div style="position:absolute;width:20px;height:15px;background:radial-gradient(ellipse, rgba(180,83,9,0.35), rgba(120,53,15,0.18));border-radius:50%;top:72%;left:55%;animation:egg-pulse 2.6s ease-in-out infinite 0.7s;"></div>
          <!-- Hairline crack hints -->
          <div style="position:absolute;width:2px;height:25px;background:linear-gradient(to bottom, transparent, rgba(120,53,15,0.3), transparent);top:25%;left:48%;transform:rotate(15deg);border-radius:2px;"></div>
          <div style="position:absolute;width:2px;height:18px;background:linear-gradient(to bottom, transparent, rgba(120,53,15,0.25), transparent);top:55%;left:42%;transform:rotate(-10deg);border-radius:2px;"></div>
          <!-- Internal movement hint -->
          <div style="position:absolute;width:18px;height:10px;background:rgba(180,83,9,0.15);border-radius:50%;top:48%;left:45%;animation:wiggle 2.5s ease-in-out infinite;"></div>
        </div>
      </div>
    `,
    // Insects - Amber honeycomb egg cluster with honey drips
    insects:`
      <div style="position:relative;width:160px;height:190px;display:inline-block;">
        <!-- Honeycomb background pattern hint -->
        <div style="position:absolute;width:150px;height:180px;left:5px;top:5px;background:radial-gradient(ellipse,rgba(251,191,36,0.15),transparent 70%);border-radius:50%;"></div>
        <!-- Honey drips -->
        <div style="position:absolute;width:6px;height:25px;background:linear-gradient(to bottom,#fbbf24,#f59e0b);left:25%;top:0;border-radius:0 0 3px 3px;animation:egg-float 3s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:20px;background:linear-gradient(to bottom,#fcd34d,#f59e0b);right:30%;top:5px;border-radius:0 0 3px 3px;animation:egg-float 2.5s ease-in-out infinite 0.5s;"></div>
        <!-- Main large egg -->
        <div style="position:absolute;width:60px;height:78px;left:50px;top:15px;background:radial-gradient(ellipse at 32% 28%, #fffbeb 0%, #fef3c7 25%, #fcd34d 60%, #f59e0b 90%, #d97706 100%);border-radius:50%;border:4px solid #d97706;box-shadow:inset -8px -8px 20px rgba(255,255,255,0.65),inset 5px 5px 12px rgba(180,83,9,0.25),0 8px 20px rgba(217,119,6,0.3),0 0 40px rgba(251,191,36,0.2);animation:egg-pulse 2.5s ease-in-out infinite;">
          <div style="position:absolute;width:18px;height:28px;background:rgba(255,255,255,0.55);border-radius:50%;top:10%;left:15%;transform:rotate(-15deg);filter:blur(2px);"></div>
          <div style="position:absolute;width:10px;height:15px;background:rgba(255,255,255,0.35);border-radius:50%;top:18%;left:22%;filter:blur(1px);"></div>
          <!-- Internal larva hint -->
          <div style="position:absolute;width:15px;height:8px;background:rgba(180,83,9,0.2);border-radius:50%;top:45%;left:40%;animation:wiggle 2s ease-in-out infinite;"></div>
        </div>
        <!-- Medium eggs -->
        <div style="position:absolute;width:55px;height:70px;left:8px;top:65px;background:radial-gradient(ellipse at 32% 28%, #fffbeb 0%, #fef3c7 25%, #fcd34d 60%, #f59e0b 90%, #d97706 100%);border-radius:50%;border:4px solid #d97706;box-shadow:inset -6px -6px 15px rgba(255,255,255,0.6),inset 4px 4px 10px rgba(180,83,9,0.22),0 6px 15px rgba(217,119,6,0.25);animation:egg-pulse 2.2s ease-in-out infinite 0.3s;">
          <div style="position:absolute;width:14px;height:22px;background:rgba(255,255,255,0.5);border-radius:50%;top:10%;left:15%;transform:rotate(-15deg);filter:blur(2px);"></div>
        </div>
        <div style="position:absolute;width:55px;height:70px;right:8px;top:65px;background:radial-gradient(ellipse at 32% 28%, #fffbeb 0%, #fef3c7 25%, #fcd34d 60%, #f59e0b 90%, #d97706 100%);border-radius:50%;border:4px solid #d97706;box-shadow:inset -6px -6px 15px rgba(255,255,255,0.6),inset 4px 4px 10px rgba(180,83,9,0.22),0 6px 15px rgba(217,119,6,0.25);animation:egg-pulse 2.8s ease-in-out infinite 0.6s;">
          <div style="position:absolute;width:14px;height:22px;background:rgba(255,255,255,0.5);border-radius:50%;top:10%;left:15%;transform:rotate(-15deg);filter:blur(2px);"></div>
        </div>
        <!-- Small eggs -->
        <div style="position:absolute;width:48px;height:62px;left:56px;top:115px;background:radial-gradient(ellipse at 32% 28%, #fffbeb 0%, #fef3c7 25%, #fcd34d 60%, #f59e0b 90%, #d97706 100%);border-radius:50%;border:4px solid #d97706;box-shadow:inset -5px -5px 12px rgba(255,255,255,0.55),0 5px 12px rgba(217,119,6,0.2);animation:egg-pulse 2s ease-in-out infinite 0.9s;">
          <div style="position:absolute;width:12px;height:18px;background:rgba(255,255,255,0.5);border-radius:50%;top:10%;left:18%;transform:rotate(-15deg);filter:blur(1px);"></div>
        </div>
        <!-- Floating pollen/sparkles -->
        <div style="position:absolute;width:5px;height:5px;background:#fef08a;border-radius:50%;top:20%;left:20%;box-shadow:0 0 6px #fcd34d;animation:sparkle-twinkle 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:4px;height:4px;background:#fef3c7;border-radius:50%;top:35%;right:15%;box-shadow:0 0 5px #fbbf24;animation:sparkle-twinkle 2.5s ease-in-out infinite 0.4s;"></div>
      </div>
    `,
    // Mammals - Warm cream/tan egg with soft fur hints and heartbeat glow
    mammals:`
      <div style="position:relative;width:155px;height:200px;display:inline-block;animation:egg-wobble 3s ease-in-out infinite;">
        <!-- Warm glow -->
        <div style="position:absolute;width:145px;height:190px;left:5px;top:5px;background:radial-gradient(ellipse,rgba(251,191,36,0.12),transparent 60%);border-radius:50%;animation:egg-pulse 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:135px;height:175px;left:10px;top:10px;background:radial-gradient(ellipse at 32% 28%, #ffffff 0%, #fffbeb 20%, #fef3c7 45%, #fde68a 75%, #fcd34d 95%, #f59e0b 100%);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;border:5px solid #d97706;box-shadow:inset -18px -18px 45px rgba(255,255,255,0.8),inset 10px 10px 25px rgba(217,119,6,0.18),0 12px 30px rgba(217,119,6,0.25),0 0 50px rgba(251,191,36,0.15);">
          <!-- 3D Highlight -->
          <div style="position:absolute;width:40px;height:65px;background:rgba(255,255,255,0.7);border-radius:50%;top:8%;left:12%;transform:rotate(-20deg);filter:blur(4px);"></div>
          <div style="position:absolute;width:22px;height:35px;background:rgba(255,255,255,0.5);border-radius:50%;top:15%;left:20%;filter:blur(1px);"></div>
          <!-- Soft freckle/fur pattern patches -->
          <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse, rgba(251,191,36,0.4), transparent);border-radius:50%;top:25%;left:20%;filter:blur(4px);animation:egg-pulse 3s ease-in-out infinite;"></div>
          <div style="position:absolute;width:24px;height:18px;background:radial-gradient(ellipse, rgba(251,191,36,0.35), transparent);border-radius:50%;top:48%;left:55%;filter:blur(3px);animation:egg-pulse 2.5s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:20px;height:16px;background:radial-gradient(ellipse, rgba(251,191,36,0.32), transparent);border-radius:50%;top:65%;left:32%;filter:blur(3px);animation:egg-pulse 2.8s ease-in-out infinite 0.6s;"></div>
          <!-- Heartbeat glow in center -->
          <div style="position:absolute;width:30px;height:35px;background:radial-gradient(ellipse,rgba(251,146,60,0.25),transparent);top:40%;left:42%;border-radius:50%;filter:blur(8px);animation:egg-pulse 1s ease-in-out infinite;"></div>
          <!-- Tiny paw print hint -->
          <div style="position:absolute;width:8px;height:8px;background:rgba(180,83,9,0.15);border-radius:50%;top:55%;left:48%;"></div>
          <div style="position:absolute;width:4px;height:4px;background:rgba(180,83,9,0.12);border-radius:50%;top:52%;left:46%;"></div>
          <div style="position:absolute;width:4px;height:4px;background:rgba(180,83,9,0.12);border-radius:50%;top:52%;left:52%;"></div>
        </div>
      </div>
    `,
    // Prehistoric - Massive ancient fossil egg with cracks and ancient markings
    prehistoric:`
      <div style="position:relative;width:180px;height:225px;display:inline-block;animation:egg-pulse 4s ease-in-out infinite;">
        <!-- Ancient dust particles -->
        <div style="position:absolute;width:4px;height:4px;background:#d6d3d1;border-radius:50%;top:8%;left:25%;opacity:0.6;animation:egg-float 3s ease-in-out infinite;"></div>
        <div style="position:absolute;width:3px;height:3px;background:#a8a29e;border-radius:50%;top:5%;right:30%;opacity:0.5;animation:egg-float 2.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:155px;height:195px;left:12px;top:12px;background:radial-gradient(ellipse at 32% 28%, #f5f5f4 0%, #e7e5e4 18%, #d6d3d1 35%, #a8a29e 60%, #78716c 85%, #57534e 100%);border-radius:50% 50% 48% 48% / 55% 55% 45% 45%;border:6px solid #57534e;box-shadow:inset -15px -15px 40px rgba(255,255,255,0.4),inset 8px 8px 25px rgba(0,0,0,0.3),0 15px 35px rgba(87,83,78,0.35),0 0 50px rgba(120,113,108,0.15);">
          <!-- 3D Highlight -->
          <div style="position:absolute;width:42px;height:68px;background:rgba(255,255,255,0.4);border-radius:50%;top:6%;left:12%;transform:rotate(-15deg);filter:blur(5px);"></div>
          <div style="position:absolute;width:22px;height:35px;background:rgba(255,255,255,0.3);border-radius:50%;top:12%;left:20%;filter:blur(1px);"></div>
          <!-- Weathered rocky texture patches -->
          <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse, rgba(87,83,78,0.5), rgba(68,64,60,0.25));border-radius:35%;top:15%;left:20%;animation:egg-pulse 3s ease-in-out infinite;"></div>
          <div style="position:absolute;width:35px;height:25px;background:radial-gradient(ellipse, rgba(87,83,78,0.45), rgba(68,64,60,0.2));border-radius:40%;top:35%;left:55%;animation:egg-pulse 2.5s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:24px;height:18px;background:radial-gradient(ellipse, rgba(87,83,78,0.5), rgba(68,64,60,0.25));border-radius:35%;top:55%;left:25%;animation:egg-pulse 2.8s ease-in-out infinite 0.5s;"></div>
          <div style="position:absolute;width:26px;height:20px;background:radial-gradient(ellipse, rgba(87,83,78,0.4), rgba(68,64,60,0.18));border-radius:40%;top:70%;left:50%;animation:egg-pulse 3.2s ease-in-out infinite 0.2s;"></div>
          <!-- Deep fossil cracks with glow -->
          <div style="position:absolute;width:3px;height:50px;background:linear-gradient(to bottom, transparent, rgba(68,64,60,0.6), rgba(87,83,78,0.4), transparent);top:18%;left:42%;transform:rotate(8deg);border-radius:2px;"></div>
          <div style="position:absolute;width:3px;height:35px;background:linear-gradient(to bottom, transparent, rgba(68,64,60,0.5), transparent);top:45%;left:62%;transform:rotate(-12deg);border-radius:2px;"></div>
          <div style="position:absolute;width:2px;height:28px;background:linear-gradient(to bottom, transparent, rgba(68,64,60,0.45), transparent);top:30%;left:30%;transform:rotate(-5deg);border-radius:2px;"></div>
          <!-- Ancient fossil imprint hints -->
          <div style="position:absolute;width:20px;height:15px;border:2px solid rgba(68,64,60,0.25);border-radius:50% 50% 0 0;top:38%;left:38%;transform:rotate(-10deg);border-bottom:none;"></div>
          <!-- Internal prehistoric life hint -->
          <div style="position:absolute;width:22px;height:14px;background:rgba(87,83,78,0.2);border-radius:40%;top:48%;left:45%;animation:wiggle 3s ease-in-out infinite;"></div>
        </div>
      </div>
    `,
    // Aliens - Bioluminescent glowing pod with pulsing energy tendrils
    alien:`
      <div style="position:relative;width:165px;height:215px;display:inline-block;">
        <!-- Energy tendrils reaching out -->
        <div style="position:absolute;width:8px;height:35px;background:linear-gradient(to top,#22d3ee,transparent);top:10px;left:25%;filter:blur(2px);animation:egg-float 2s ease-in-out infinite;border-radius:4px;"></div>
        <div style="position:absolute;width:6px;height:28px;background:linear-gradient(to top,#a855f7,transparent);top:15px;right:28%;filter:blur(2px);animation:egg-float 2.5s ease-in-out infinite 0.4s;border-radius:4px;"></div>
        <div style="position:absolute;width:5px;height:22px;background:linear-gradient(to top,#22d3ee,transparent);top:20px;left:42%;filter:blur(1px);animation:egg-float 1.8s ease-in-out infinite 0.7s;border-radius:4px;"></div>
        <!-- Multi-layer pulsing glow -->
        <div style="position:absolute;width:155px;height:205px;left:5px;top:5px;background:radial-gradient(ellipse, rgba(34,211,238,0.35), rgba(139,92,246,0.2), transparent 65%);border-radius:50%;filter:blur(15px);animation:alien-glow 1.5s ease-in-out infinite;"></div>
        <div style="position:absolute;width:145px;height:190px;left:10px;top:12px;background:radial-gradient(ellipse at 32% 28%, #f3e8ff 0%, #e9d5ff 18%, #c084fc 40%, #a855f7 65%, #7c3aed 90%, #6d28d9 100%);border-radius:45% 45% 50% 50% / 55% 55% 45% 45%;border:5px solid #6d28d9;box-shadow:0 0 50px rgba(139,92,246,0.6),0 0 80px rgba(34,211,238,0.3),inset -12px -12px 30px rgba(255,255,255,0.5),inset 8px 8px 20px rgba(109,40,217,0.3);animation:egg-pulse 2.5s ease-in-out infinite;">
          <!-- 3D Highlight / Metallic sheen -->
          <div style="position:absolute;width:45px;height:90px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent);top:10%;left:10%;transform:rotate(-8deg);border-radius:50%;"></div>
          <div style="position:absolute;width:25px;height:40px;background:rgba(255,255,255,0.35);border-radius:50%;top:15%;left:18%;filter:blur(2px);"></div>
          <!-- Bioluminescent glow spots - brighter and more active -->
          <div style="position:absolute;width:18px;height:18px;background:radial-gradient(circle,#22d3ee 0%,rgba(34,211,238,0.6) 40%,transparent 100%);top:25%;left:50%;border-radius:50%;box-shadow:0 0 20px #22d3ee,0 0 35px rgba(34,211,238,0.6);animation:sparkle-twinkle 1.5s ease-in-out infinite;"></div>
          <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle,#22d3ee 0%,rgba(34,211,238,0.5) 40%,transparent 100%);top:50%;left:32%;border-radius:50%;box-shadow:0 0 15px #22d3ee,0 0 25px rgba(34,211,238,0.5);animation:sparkle-twinkle 2s ease-in-out infinite 0.4s;"></div>
          <div style="position:absolute;width:12px;height:12px;background:radial-gradient(circle,#22d3ee 0%,rgba(34,211,238,0.5) 40%,transparent 100%);top:68%;left:55%;border-radius:50%;box-shadow:0 0 12px #22d3ee,0 0 20px rgba(34,211,238,0.4);animation:sparkle-twinkle 1.6s ease-in-out infinite 0.7s;"></div>
          <div style="position:absolute;width:10px;height:10px;background:radial-gradient(circle,#a855f7 0%,rgba(168,85,247,0.5) 40%,transparent 100%);top:38%;left:68%;border-radius:50%;box-shadow:0 0 10px #a855f7;animation:sparkle-twinkle 2.2s ease-in-out infinite 0.2s;"></div>
          <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle,#22d3ee 0%,rgba(34,211,238,0.4) 40%,transparent 100%);top:78%;left:38%;border-radius:50%;box-shadow:0 0 8px #22d3ee;animation:sparkle-twinkle 1.8s ease-in-out infinite 0.9s;"></div>
          <!-- Circuitry/vein patterns -->
          <div style="position:absolute;width:2px;height:40px;background:linear-gradient(to bottom,transparent,rgba(34,211,238,0.4),transparent);top:30%;left:42%;transform:rotate(5deg);"></div>
          <div style="position:absolute;width:2px;height:30px;background:linear-gradient(to bottom,transparent,rgba(34,211,238,0.35),transparent);top:45%;left:58%;transform:rotate(-8deg);"></div>
          <!-- Internal alien form hint -->
          <div style="position:absolute;width:20px;height:28px;background:rgba(34,211,238,0.15);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;top:42%;left:42%;animation:wiggle 2s ease-in-out infinite;"></div>
        </div>
      </div>
    `,
    // Mystical - Swirly magical orb egg
    mystical:`
      <div style="position:relative;width:165px;height:215px;display:inline-block;animation:egg-float 4s ease-in-out infinite;">
        <!-- Outer mystical aura ring -->
        <div style="position:absolute;width:185px;height:235px;left:-10px;top:-10px;background:radial-gradient(ellipse, rgba(139,92,246,0.25), rgba(99,102,241,0.15) 40%, transparent 70%);border-radius:50%;filter:blur(12px);animation:pulse-grow 3s ease-in-out infinite;"></div>
        <!-- Floating mystical particles -->
        <div style="position:absolute;width:8px;height:8px;background:#e9d5ff;border-radius:50%;top:-5px;left:30%;box-shadow:0 0 12px #a78bfa;animation:egg-float 2.5s ease-in-out infinite;"></div>
        <div style="position:absolute;width:6px;height:6px;background:#c4b5fd;border-radius:50%;top:15px;right:10px;box-shadow:0 0 10px #8b5cf6;animation:egg-float 3s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:#ddd6fe;border-radius:50%;bottom:25px;left:5px;box-shadow:0 0 8px #7c3aed;animation:egg-float 2.8s ease-in-out infinite 1s;"></div>
        <!-- Swirling energy ring -->
        <div style="position:absolute;width:130px;height:175px;left:18px;top:20px;border:2px dashed rgba(139,92,246,0.3);border-radius:50%;animation:spin 8s linear infinite;"></div>
        <div style="position:absolute;width:135px;height:180px;left:15px;top:18px;background:radial-gradient(ellipse at 32% 28%, #f5f3ff 0%, #ede9fe 15%, #ddd6fe 30%, #c4b5fd 50%, #a78bfa 70%, #8b5cf6 85%, #7c3aed 100%);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;border:4px solid #6d28d9;box-shadow:0 0 40px rgba(139,92,246,0.5),0 0 60px rgba(99,102,241,0.3),inset -15px -15px 35px rgba(255,255,255,0.5),inset 8px 8px 20px rgba(109,40,217,0.25);">
          <!-- 3D Highlight -->
          <div style="position:absolute;width:35px;height:55px;background:rgba(255,255,255,0.55);border-radius:50%;top:8%;left:15%;transform:rotate(-15deg);filter:blur(4px);"></div>
          <div style="position:absolute;width:18px;height:28px;background:rgba(255,255,255,0.35);border-radius:50%;top:12%;left:22%;filter:blur(2px);"></div>
          <!-- Animated swirl pattern -->
          <div style="position:absolute;width:70px;height:70px;border:3px solid rgba(255,255,255,0.4);border-radius:50%;top:15%;left:18%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-30deg);animation:spin 6s linear infinite reverse;"></div>
          <div style="position:absolute;width:45px;height:45px;border:2.5px solid rgba(255,255,255,0.35);border-radius:50%;top:28%;left:28%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-50deg);animation:spin 4s linear infinite;"></div>
          <div style="position:absolute;width:25px;height:25px;border:2px solid rgba(255,255,255,0.3);border-radius:50%;top:38%;left:38%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-70deg);animation:spin 3s linear infinite reverse;"></div>
          <!-- Inner mystical form hint -->
          <div style="position:absolute;width:30px;height:40px;background:radial-gradient(ellipse,rgba(255,255,255,0.4),rgba(196,181,253,0.3));border-radius:50%;top:45%;left:50%;transform:translate(-50%,-50%);animation:wiggle 2.5s ease-in-out infinite;"></div>
          <!-- Magic sparkles - enhanced -->
          <div style="position:absolute;width:8px;height:8px;background:#fff;border-radius:50%;top:20%;left:65%;box-shadow:0 0 8px #fff,0 0 15px #a78bfa;animation:sparkle-twinkle 1.8s ease-in-out infinite;"></div>
          <div style="position:absolute;width:7px;height:7px;background:#fff;border-radius:50%;top:55%;left:22%;box-shadow:0 0 7px #fff,0 0 12px #a78bfa;animation:sparkle-twinkle 2.2s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;top:72%;left:60%;box-shadow:0 0 6px #fff,0 0 10px #c4b5fd;animation:sparkle-twinkle 1.6s ease-in-out infinite 0.6s;"></div>
          <div style="position:absolute;width:5px;height:5px;background:#fff;border-radius:50%;top:35%;left:78%;box-shadow:0 0 5px #fff,0 0 8px #8b5cf6;animation:sparkle-twinkle 2.4s ease-in-out infinite 0.2s;"></div>
          <div style="position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;top:48%;left:72%;box-shadow:0 0 6px #fff,0 0 10px #ddd6fe;animation:sparkle-twinkle 2s ease-in-out infinite 0.9s;"></div>
          <div style="position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;top:82%;left:40%;box-shadow:0 0 4px #fff;animation:sparkle-twinkle 2.6s ease-in-out infinite 1.2s;"></div>
          <!-- Moon and star symbols -->
          <div style="position:absolute;top:25%;left:42%;font-size:14px;opacity:0.5;animation:sparkle-twinkle 3s ease-in-out infinite;">🌙</div>
          <div style="position:absolute;top:65%;left:32%;font-size:10px;opacity:0.4;animation:sparkle-twinkle 2.5s ease-in-out infinite 0.5s;">✨</div>
        </div>
        <!-- Mystical runes floating outside -->
        <div style="position:absolute;width:12px;height:12px;bottom:15px;left:0;font-size:10px;opacity:0.4;animation:egg-float 3.5s ease-in-out infinite;">⭐</div>
        <div style="position:absolute;width:10px;height:10px;top:40px;right:-5px;font-size:8px;opacity:0.35;animation:egg-float 4s ease-in-out infinite 1s;">🔮</div>
      </div>
    `
  };

  const design = eggDesigns[category]||eggDesigns.mammals;
  const shadowHTML = `<div class="egg-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}

