function renderAdultMystical(variantIndex, level = 1){
  const variant=variantIndex||0;

  const mysticalDesigns={
    // ===== FAIRY - Mystical Variant 0 =====
    // Ethereal blob creature with energy wings, halo, and sparkles
    0:`
      <div style="position:relative;width:240px;height:280px;animation:fairy-float 3s ease-in-out infinite;">
        <!-- Floating sparkles around creature -->
        <div style="position:absolute;left:25px;top:60px;width:10px;height:10px;background:rgba(255,215,0,0.95);border-radius:50%;box-shadow:0 0 12px rgba(255,215,0,0.8);animation:star-rise 3s ease-in-out infinite;"></div>
        <div style="position:absolute;right:30px;top:80px;width:8px;height:8px;background:rgba(200,180,255,0.95);border-radius:50%;box-shadow:0 0 10px rgba(200,180,255,0.8);animation:star-rise 3.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;left:40px;top:150px;width:7px;height:7px;background:rgba(255,182,193,0.95);border-radius:50%;box-shadow:0 0 9px rgba(255,182,193,0.7);animation:star-rise 2.8s ease-in-out infinite 1s;"></div>
        <div style="position:absolute;right:45px;top:130px;width:9px;height:9px;background:rgba(255,255,255,0.98);border-radius:50%;box-shadow:0 0 11px rgba(255,255,255,0.9);animation:star-rise 4s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;left:55px;bottom:60px;width:6px;height:6px;background:rgba(173,216,230,0.9);border-radius:50%;box-shadow:0 0 8px rgba(173,216,230,0.7);animation:star-rise 3.2s ease-in-out infinite 0.8s;"></div>
        <div style="position:absolute;right:60px;bottom:70px;width:8px;height:8px;background:rgba(255,215,0,0.9);border-radius:50%;box-shadow:0 0 10px rgba(255,215,0,0.7);animation:star-rise 3.8s ease-in-out infinite 1.2s;"></div>

        <!-- Energy wings (left - like bunny ears but wing-shaped) -->
        <div style="position:absolute;width:50px;height:80px;background:radial-gradient(ellipse at 35% 30%,rgba(255,255,255,0.95) 0%,rgba(240,235,255,0.85) 25%,rgba(220,210,250,0.75) 55%,rgba(200,185,245,0.65) 100%);border:4px solid #c0b0e0;border-radius:60% 30% 60% 30%;z-index:15;top:45px;left:20px;transform:rotate(-15deg);transform-origin:bottom right;animation:fairy-wing-left 0.6s ease-in-out infinite;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.8),inset -5px -5px 14px rgba(180,160,220,0.3),0 0 20px rgba(200,180,255,0.5);">
          <div style="position:absolute;width:26px;height:20px;background:rgba(255,255,255,0.6);border-radius:50%;top:12px;left:10px;filter:blur(5px);"></div>
        </div>
        <!-- Energy wings (right) -->
        <div style="position:absolute;width:50px;height:80px;background:radial-gradient(ellipse at 65% 30%,rgba(255,255,255,0.95) 0%,rgba(240,235,255,0.85) 25%,rgba(220,210,250,0.75) 55%,rgba(200,185,245,0.65) 100%);border:4px solid #c0b0e0;border-radius:30% 60% 30% 60%;z-index:15;top:45px;right:20px;transform:rotate(15deg);transform-origin:bottom left;animation:fairy-wing-right 0.6s ease-in-out infinite;box-shadow:inset -8px 8px 20px rgba(255,255,255,0.8),inset 5px -5px 14px rgba(180,160,220,0.3),0 0 20px rgba(200,180,255,0.5);">
          <div style="position:absolute;width:26px;height:20px;background:rgba(255,255,255,0.6);border-radius:50%;top:12px;right:10px;filter:blur(5px);"></div>
        </div>

        <!-- Golden halo -->
        <div style="position:absolute;left:50%;top:35px;transform:translateX(-50%);width:90px;height:16px;background:radial-gradient(ellipse,rgba(255,235,150,0.9) 0%,rgba(255,215,0,0.7) 50%,rgba(255,235,205,0.4) 100%);border-radius:50%;box-shadow:0 0 25px rgba(255,215,0,0.7);z-index:50;"></div>

        <!-- Head - chunky like bunny, ethereal white -->
        <div style="position:absolute;width:120px;height:100px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:4px solid #d0d0e8;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;top:55px;left:60px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.75),inset -5px -5px 14px rgba(200,200,230,0.4),0 0 30px rgba(220,210,255,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:22px;right:24px;filter:blur(3px);"></div>
          <!-- Eyes - mystical purple like teens -->
          <div style="position:absolute;top:28px;width:100%;display:flex;justify-content:center;gap:28px;">
            <div style="width:20px;height:22px;background:radial-gradient(circle at 35% 35%,#a080d0 0%,#8b5cf6 50%,#6d28d9 100%);border-radius:50%;position:relative;animation:fairy-blink 4s infinite;box-shadow:0 0 12px rgba(139,92,246,0.5);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.6;"></div>
            </div>
            <div style="width:20px;height:22px;background:radial-gradient(circle at 35% 35%,#a080d0 0%,#8b5cf6 50%,#6d28d9 100%);border-radius:50%;position:relative;animation:fairy-blink 4s infinite;box-shadow:0 0 12px rgba(139,92,246,0.5);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.6;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;top:54px;left:50%;transform:translateX(-50%);width:14px;height:10px;background:#e8d0f0;border-radius:50%;z-index:50;"></div>
          <!-- Mouth - w shape like bunny -->
          <div style="position:absolute;top:65px;left:50%;transform:translateX(-50%);display:flex;z-index:99;">
            <div style="width:12px;height:8px;border:2.5px solid #c8b8e0;border-top:none;border-radius:0 0 8px 8px;margin:0 -1px;"></div>
            <div style="width:12px;height:8px;border:2.5px solid #c8b8e0;border-top:none;border-radius:0 0 8px 8px;margin:0 -1px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:58px;left:12px;width:22px;height:11px;background:#e8d0f8;border-radius:50%;filter:blur(2px);opacity:0.8;"></div>
          <div style="position:absolute;top:58px;right:12px;width:22px;height:11px;background:#e8d0f8;border-radius:50%;filter:blur(2px);opacity:0.8;"></div>
        </div>

        <!-- Body - chunky round like bunny, ethereal glow -->
        <div style="position:absolute;width:140px;height:105px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:4px solid #d0d0e8;border-radius:50% 50% 40% 40%;top:140px;left:50px;z-index:20;box-shadow:inset 8px 8px 22px rgba(255,255,255,0.75),inset -6px -6px 16px rgba(200,200,230,0.4),0 0 25px rgba(220,210,255,0.35);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:25px;right:30px;filter:blur(3px);"></div>
          <!-- Glowing core (like mystical teen) -->
          <div style="position:absolute;width:50px;height:40px;background:radial-gradient(circle at 50% 50%,rgba(255,235,150,0.6) 0%,rgba(255,215,0,0.4) 50%,rgba(255,235,205,0.2) 100%);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 20px rgba(255,215,0,0.4);"></div>
          <!-- Front paws - simple round like bunny -->
          <div style="position:absolute;width:30px;height:26px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:3px solid #d0d0e8;border-radius:13px;z-index:25;top:70px;left:22px;transform:rotate(10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7),inset -2px -2px 6px rgba(200,200,230,0.35);"></div>
          <div style="position:absolute;width:30px;height:26px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:3px solid #d0d0e8;border-radius:13px;z-index:25;top:70px;right:22px;transform:rotate(-10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7),inset -2px -2px 6px rgba(200,200,230,0.35);"></div>
          <!-- Back feet - simple round -->
          <div style="position:absolute;width:44px;height:30px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:3px solid #d0d0e8;border-radius:50%;z-index:21;top:65px;left:-18px;box-shadow:inset 5px 5px 14px rgba(255,255,255,0.7),inset -3px -3px 8px rgba(200,200,230,0.35);"></div>
          <div style="position:absolute;width:44px;height:30px;background:radial-gradient(ellipse at 35% 30%,#ffffff 0%,#fafaff 25%,#f0f0fa 55%,#e5e5f5 100%);border:3px solid #d0d0e8;border-radius:50%;z-index:21;top:65px;right:-18px;box-shadow:inset 5px 5px 14px rgba(255,255,255,0.7),inset -3px -3px 8px rgba(200,200,230,0.35);"></div>
        </div>

        <!-- Wispy tail (ethereal energy trail) -->
        <div style="position:absolute;width:35px;height:50px;background:radial-gradient(ellipse at 50% 30%,rgba(255,255,255,0.8) 0%,rgba(230,220,255,0.6) 50%,rgba(200,180,245,0.3) 100%);border:3px solid rgba(200,185,235,0.7);border-radius:50% 50% 60% 40%;bottom:20px;right:25px;z-index:10;transform:rotate(20deg);box-shadow:0 0 18px rgba(200,180,255,0.5);animation:tail-wiggle 2s ease-in-out infinite;"></div>
      </div>
    `,

    // ===== UNICORN - Mystical Variant 10 =====
    // Majestic white/lavender unicorn with rainbow mane, golden horn, and magical sparkles
    10:`
      <div style="position:relative;width:240px;height:305px;animation:unicorn-float 2.8s ease-in-out infinite;">
        <!-- Ambient sparkles floating around -->
        <div style="position:absolute;width:6px;height:6px;background:rgba(255,215,0,0.9);border-radius:50%;top:30px;left:30px;box-shadow:0 0 8px rgba(255,215,0,0.8);animation:star-rise 3s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:5px;background:rgba(255,182,193,0.9);border-radius:50%;top:70px;right:25px;box-shadow:0 0 6px rgba(255,182,193,0.8);animation:star-rise 3.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:4px;height:4px;background:rgba(173,216,230,0.9);border-radius:50%;top:110px;left:20px;box-shadow:0 0 6px rgba(173,216,230,0.8);animation:star-rise 4s ease-in-out infinite 1s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:rgba(221,160,221,0.9);border-radius:50%;top:50px;left:180px;box-shadow:0 0 6px rgba(221,160,221,0.8);animation:star-rise 3.2s ease-in-out infinite 0.3s;"></div>

        <!-- Horn sparkles orbiting -->
        <div style="position:absolute;top:-25px;left:108px;width:8px;height:8px;z-index:60;">
          <div style="position:absolute;width:5px;height:5px;background:#fff;border-radius:50%;box-shadow:0 0 6px #ffd700,0 0 12px #ffd700;animation:horn-sparkle-orbit 2.5s linear infinite;"></div>
          <div style="position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;box-shadow:0 0 5px #ff99cc,0 0 10px #ff99cc;animation:horn-sparkle-orbit 3s linear infinite 0.8s;"></div>
          <div style="position:absolute;width:3px;height:3px;background:#fff;border-radius:50%;box-shadow:0 0 4px #99ccff,0 0 8px #99ccff;animation:horn-sparkle-orbit 2.8s linear infinite 1.5s;"></div>
        </div>

        <!-- EARS with twitch animation (z-index 30) -->
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8f0ff, #e8daf0);border:3px solid #d8c0e8;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;left:62px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8),inset -2px -2px 5px rgba(200,180,220,0.3);animation:ear-twitch-l 4s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #ffcce6, #ffb8d9);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 60% 30%, #ffffff, #f8f0ff, #e8daf0);border:3px solid #d8c0e8;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;right:75px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8),inset -2px -2px 5px rgba(200,180,220,0.3);animation:ear-twitch-r 4.5s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #ffcce6, #ffb8d9);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>

        <!-- TAIL (rainbow, longer and more flowing, z-index 5) -->
        <div style="position:absolute;width:38px;height:100px;background:linear-gradient(180deg, #ff9999 0%, #ffcc99 18%, #ffff99 36%, #99ff99 54%, #99ccff 72%, #cc99ff 90%, #ff99cc 100%);border:3px solid #d8c0e8;border-radius:15px 50px 50px 50px;top:125px;right:48px;z-index:5;transform-origin:top center;animation:unicorn-tail-swish 2.2s ease-in-out infinite;box-shadow:inset 3px 3px 10px rgba(255,255,255,0.5),inset -2px -2px 8px rgba(150,100,180,0.2);">
          <div style="position:absolute;width:14px;height:50px;background:rgba(255,255,255,0.35);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
        </div>

        <!-- BACK LEGS (longer, with golden hooves, z-index 15) -->
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 50% 30%, #f0e8f8, #e0d0f0);border:3px solid #d8c0e8;border-radius:8px 8px 11px 11px;top:173px;left:86px;z-index:15;filter:brightness(0.95);box-shadow:inset 2px 2px 6px rgba(255,255,255,0.5),inset -2px -2px 4px rgba(180,150,200,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ffd700 0%, #daa520 50%, #b8860b 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
        </div>
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 50% 30%, #f0e8f8, #e0d0f0);border:3px solid #d8c0e8;border-radius:8px 8px 11px 11px;top:173px;left:154px;z-index:15;filter:brightness(0.95);box-shadow:inset 2px 2px 6px rgba(255,255,255,0.5),inset -2px -2px 4px rgba(180,150,200,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ffd700 0%, #daa520 50%, #b8860b 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
        </div>

        <!-- NECK with flowing mane (z-index 21) -->
        <div style="position:absolute;width:49px;height:68px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f8f0ff 40%, #e8daf0 100%);border-left:4px solid #d8c0e8;border-right:4px solid #d8c0e8;clip-path:polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);top:79px;left:86px;z-index:21;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7),inset -4px -4px 10px rgba(200,180,220,0.3);overflow:visible;">
          <div style="position:absolute;width:8px;height:40px;background:rgba(255,255,255,0.3);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
          <!-- Flowing mane strands down neck -->
          <div style="position:absolute;left:-12px;top:5px;width:18px;height:55px;background:linear-gradient(180deg, #ff9999, #ffcc99, #ffff99, #99ff99, #99ccff);border-radius:40% 10% 60% 40%;z-index:22;animation:mane-flow 2s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
          <div style="position:absolute;left:-8px;top:15px;width:14px;height:45px;background:linear-gradient(180deg, #ffcc99, #ffff99, #99ff99, #99ccff, #cc99ff);border-radius:40% 10% 60% 40%;z-index:23;animation:mane-flow 2.2s ease-in-out infinite 0.2s;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
          <div style="position:absolute;left:-4px;top:25px;width:12px;height:38px;background:linear-gradient(180deg, #ffff99, #99ff99, #99ccff, #cc99ff, #ff99cc);border-radius:40% 10% 60% 40%;z-index:24;animation:mane-flow 1.8s ease-in-out infinite 0.4s;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
        </div>

        <!-- BODY with iridescent shimmer (z-index 20) -->
        <div style="position:absolute;width:135px;height:105px;background:radial-gradient(ellipse at 38% 28%, #ffffff 0%, #faf5ff 35%, #f0e8f8 70%, #e8daf0 100%);border:4px solid #d8c0e8;border-radius:60px 75px 60px 60px;top:113px;left:45px;z-index:20;box-shadow:inset 10px 10px 25px rgba(255,255,255,0.8),inset -6px -6px 15px rgba(200,180,220,0.3);overflow:hidden;">
          <div style="position:absolute;width:45px;height:30px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:28px;right:25px;filter:blur(4px);"></div>
          <!-- Iridescent shimmer overlay -->
          <div style="position:absolute;top:0;left:-100%;width:300%;height:100%;background:linear-gradient(90deg, transparent 0%, rgba(255,182,193,0.15) 20%, rgba(173,216,230,0.15) 40%, rgba(221,160,221,0.15) 60%, rgba(255,255,150,0.1) 80%, transparent 100%);animation:iridescent-shimmer 4s ease-in-out infinite;"></div>
        </div>

        <!-- FRONT LEGS (longer, with golden hooves, z-index 25) -->
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8f0ff, #e8daf0);border:3px solid #d8c0e8;border-radius:8px 8px 11px 11px;top:180px;left:56px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.6),inset -2px -2px 5px rgba(200,180,220,0.3);animation:unicorn-leg-kick 1.2s ease-in-out infinite;">
          <div style="position:absolute;width:3px;height:30px;background:rgba(255,255,255,0.3);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ffd700 0%, #daa520 50%, #b8860b 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
        </div>
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8f0ff, #e8daf0);border:3px solid #d8c0e8;border-radius:8px 8px 11px 11px;top:180px;left:135px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.6),inset -2px -2px 5px rgba(200,180,220,0.3);animation:unicorn-leg-kick 1.2s ease-in-out infinite reverse;">
          <div style="position:absolute;width:3px;height:30px;background:rgba(255,255,255,0.3);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ffd700 0%, #daa520 50%, #b8860b 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
        </div>

        <!-- HEAD (z-index 40) -->
        <div style="position:absolute;width:98px;height:120px;background:radial-gradient(ellipse at 38% 28%, #ffffff 0%, #faf5ff 35%, #f0e8f8 70%, #e8daf0 100%);border:4px solid #d8c0e8;border-radius:50% 50% 45% 45% / 40% 40% 60% 60%;top:0px;left:64px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.8),inset -5px -5px 12px rgba(200,180,220,0.3);overflow:visible;">
          <!-- Head highlight -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.6);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>

          <!-- HORN (taller, more dramatic, with glow animation) -->
          <div style="position:absolute;width:12px;height:55px;background:linear-gradient(135deg, #ffd700 0%, #ffec80 20%, #ffd700 40%, #daa520 60%, #ffd700 80%, #ffec80 100%);border:2px solid #daa520;border-radius:40% 40% 15% 15% / 20% 20% 80% 80%;top:-48px;left:50%;transform:translateX(-50%);z-index:50;animation:horn-glow 2s ease-in-out infinite;clip-path:polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);overflow:visible;">
            <!-- Spiral grooves -->
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(180,140,0,0.5);top:10px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(180,140,0,0.5);top:18px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(180,140,0,0.5);top:26px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(180,140,0,0.5);top:34px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(180,140,0,0.5);top:42px;transform:rotate(-8deg);"></div>
            <!-- HORN TIP STARBURST -->
            <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);width:24px;height:24px;z-index:55;">
              <!-- Central glow orb -->
              <div style="position:absolute;width:10px;height:10px;background:radial-gradient(circle,#fff 0%,#fffacd 40%,#ffd700 80%,transparent 100%);border-radius:50%;top:7px;left:7px;animation:horn-tip-pulse 1.5s ease-in-out infinite;box-shadow:0 0 10px #ffd700,0 0 20px #ffec80,0 0 30px rgba(255,215,0,0.5);"></div>
              <!-- Rotating rays -->
              <div style="position:absolute;width:24px;height:24px;animation:horn-tip-rays 4s linear infinite;">
                <div style="position:absolute;width:2px;height:8px;background:linear-gradient(to top,transparent,#ffd700,#fff);top:-2px;left:11px;border-radius:2px;"></div>
                <div style="position:absolute;width:2px;height:8px;background:linear-gradient(to bottom,transparent,#ffd700,#fff);bottom:-2px;left:11px;border-radius:2px;"></div>
                <div style="position:absolute;width:8px;height:2px;background:linear-gradient(to left,transparent,#ffd700,#fff);left:-2px;top:11px;border-radius:2px;"></div>
                <div style="position:absolute;width:8px;height:2px;background:linear-gradient(to right,transparent,#ffd700,#fff);right:-2px;top:11px;border-radius:2px;"></div>
              </div>
              <!-- Diagonal rays (rotating opposite) -->
              <div style="position:absolute;width:24px;height:24px;animation:horn-tip-rays 4s linear infinite reverse;">
                <div style="position:absolute;width:2px;height:6px;background:linear-gradient(to top,transparent,#ffec80,#fff);top:0px;left:11px;border-radius:2px;transform:rotate(45deg);transform-origin:bottom center;"></div>
                <div style="position:absolute;width:2px;height:6px;background:linear-gradient(to top,transparent,#ffec80,#fff);top:0px;left:11px;border-radius:2px;transform:rotate(-45deg);transform-origin:bottom center;"></div>
                <div style="position:absolute;width:2px;height:6px;background:linear-gradient(to bottom,transparent,#ffec80,#fff);bottom:0px;left:11px;border-radius:2px;transform:rotate(45deg);transform-origin:top center;"></div>
                <div style="position:absolute;width:2px;height:6px;background:linear-gradient(to bottom,transparent,#ffec80,#fff);bottom:0px;left:11px;border-radius:2px;transform:rotate(-45deg);transform-origin:top center;"></div>
              </div>
              <!-- Sparkle particles -->
              <div style="position:absolute;width:3px;height:3px;background:#fff;border-radius:50%;top:2px;left:5px;box-shadow:0 0 4px #ffd700;animation:horn-tip-starburst 2s ease-in-out infinite;"></div>
              <div style="position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;top:4px;right:4px;box-shadow:0 0 3px #ffec80;animation:horn-tip-starburst 2s ease-in-out infinite 0.5s;"></div>
              <div style="position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;bottom:4px;left:4px;box-shadow:0 0 3px #ffd700;animation:horn-tip-starburst 2s ease-in-out infinite 1s;"></div>
              <div style="position:absolute;width:3px;height:3px;background:#fff;border-radius:50%;bottom:2px;right:5px;box-shadow:0 0 4px #ffec80;animation:horn-tip-starburst 2s ease-in-out infinite 1.5s;"></div>
            </div>
          </div>

          <!-- Rainbow mane tuft (larger) -->
          <div style="position:absolute;width:55px;height:40px;background:linear-gradient(180deg, #ff9999 0%, #ffcc99 20%, #ffff99 40%, #99ff99 60%, #99ccff 80%, #cc99ff 100%);border:2px solid #d8c0e8;border-radius:50% 50% 30% 30%;top:-12px;left:50%;transform:translateX(-50%);z-index:45;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.5);animation:mane-flow 2s ease-in-out infinite;"></div>

          <!-- Eyes with look animation -->
          <div style="display:flex;gap:34px;margin-top:34px;justify-content:center;">
            <div style="width:16px;height:20px;background:radial-gradient(circle at 35% 35%, #9966cc, #4a2080);border-radius:50%;position:relative;animation:unicorn-blink 4s infinite;box-shadow:0 0 12px rgba(153,102,204,0.5),0 0 20px rgba(153,102,204,0.3);">
              <!-- Animated pupil/iris -->
              <div style="position:absolute;width:10px;height:12px;background:radial-gradient(circle at 40% 40%, #663399, #2d1050);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <!-- Main sparkle with animation -->
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <!-- Secondary sparkle -->
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:3px;opacity:0.7;"></div>
              <!-- Third tiny sparkle -->
              <div style="position:absolute;width:2px;height:2px;background:rgba(255,200,255,0.8);border-radius:50%;top:8px;right:5px;"></div>
            </div>
            <div style="width:16px;height:20px;background:radial-gradient(circle at 35% 35%, #9966cc, #4a2080);border-radius:50%;position:relative;animation:unicorn-blink 4s infinite;box-shadow:0 0 12px rgba(153,102,204,0.5),0 0 20px rgba(153,102,204,0.3);">
              <!-- Animated pupil/iris -->
              <div style="position:absolute;width:10px;height:12px;background:radial-gradient(circle at 40% 40%, #663399, #2d1050);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <!-- Main sparkle with animation -->
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <!-- Secondary sparkle -->
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:3px;opacity:0.7;"></div>
              <!-- Third tiny sparkle -->
              <div style="position:absolute;width:2px;height:2px;background:rgba(255,200,255,0.8);border-radius:50%;top:8px;right:5px;"></div>
            </div>
          </div>

          <!-- Muzzle -->
          <div style="position:absolute;bottom:0;width:100%;height:56px;background:radial-gradient(ellipse at 50% 40%, #fff0f5, #ffe4ec, #ffd6e0);border-top:3px solid #d8c0e8;border-radius:0 0 50% 50% / 0 0 80% 80%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -3px -3px 8px rgba(220,180,200,0.2);">
            <!-- Nostrils -->
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #e8c0d8, #d8a0c0);border-radius:50%;bottom:26px;left:26px;transform:rotate(15deg);opacity:0.6;"></div>
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #e8c0d8, #d8a0c0);border-radius:50%;bottom:26px;right:26px;transform:rotate(-15deg);opacity:0.6;"></div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:11px;left:50%;transform:translateX(-50%);width:30px;height:8px;border-bottom:3px solid #d8c0e8;border-radius:50%;"></div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:72px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:20px;height:10px;background:radial-gradient(ellipse, #ffb6c1, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
            <div style="width:20px;height:10px;background:radial-gradient(ellipse, #ffb6c1, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          </div>
        </div>
      </div>
    `,

    // ===== FLAMING UNICORN - Mystical Variant 11 =====
    // Fiery unicorn engulfed in flames with ember mane and glowing hooves
    11:`
      <div style="position:relative;width:240px;height:305px;animation:unicorn-float 2.8s ease-in-out infinite;filter:drop-shadow(0 0 15px rgba(234,88,12,0.7)) drop-shadow(0 0 40px rgba(255,165,0,0.5));">
        <!-- Flame aura layers - rising high above the head -->
        <div style="position:absolute;left:50%;top:-60px;transform:translateX(-50%) rotate(45deg);width:320px;height:320px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fde047 5%, #fb923c 30%, #c2410c 70%, transparent 90%);box-shadow:0 0 60px #fb923c;pointer-events:none;mix-blend-mode:screen;z-index:1;opacity:0.5;animation:fcobra-flicker 2.5s infinite alternate ease-in-out;"></div>
        <div style="position:absolute;left:50%;top:-30px;transform:translateX(-50%) rotate(45deg);width:280px;height:280px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fde047 5%, #fb923c 30%, #c2410c 70%, transparent 90%);box-shadow:0 0 50px #fb923c;pointer-events:none;mix-blend-mode:screen;z-index:2;opacity:0.6;animation:fcobra-flicker 2s infinite alternate-reverse ease-in-out 0.3s;"></div>
        <div style="position:absolute;left:50%;top:20px;transform:translateX(-50%) rotate(45deg);width:240px;height:240px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fef08a 5%, #fbbf24 30%, #f97316 70%, transparent 90%);box-shadow:0 0 40px #fbbf24;pointer-events:none;mix-blend-mode:screen;z-index:3;opacity:0.4;animation:fcobra-flicker 1.8s infinite alternate ease-in-out 0.6s;"></div>

        <!-- Fire ember particles floating around -->
        <div style="position:absolute;width:8px;height:8px;background:rgba(255,200,50,0.95);border-radius:50%;top:30px;left:30px;box-shadow:0 0 12px rgba(255,165,0,0.9);animation:star-rise 2.5s ease-in-out infinite;"></div>
        <div style="position:absolute;width:6px;height:6px;background:rgba(255,100,50,0.9);border-radius:50%;top:70px;right:25px;box-shadow:0 0 8px rgba(234,88,12,0.8);animation:star-rise 3s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:rgba(255,220,100,0.9);border-radius:50%;top:110px;left:20px;box-shadow:0 0 8px rgba(255,200,50,0.8);animation:star-rise 3.5s ease-in-out infinite 1s;"></div>
        <div style="position:absolute;width:7px;height:7px;background:rgba(255,140,50,0.9);border-radius:50%;top:50px;left:180px;box-shadow:0 0 10px rgba(255,100,50,0.8);animation:star-rise 2.8s ease-in-out infinite 0.3s;"></div>

        <!-- Fire sparkles orbiting horn -->
        <div style="position:absolute;top:-25px;left:108px;width:8px;height:8px;z-index:60;">
          <div style="position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;box-shadow:0 0 8px #ff6600,0 0 16px #ff9900;animation:horn-sparkle-orbit 2s linear infinite;"></div>
          <div style="position:absolute;width:5px;height:5px;background:#ffd700;border-radius:50%;box-shadow:0 0 6px #ff4400,0 0 12px #ff6600;animation:horn-sparkle-orbit 2.5s linear infinite 0.8s;"></div>
          <div style="position:absolute;width:4px;height:4px;background:#ff9900;border-radius:50%;box-shadow:0 0 5px #ff2200,0 0 10px #ff4400;animation:horn-sparkle-orbit 2.2s linear infinite 1.5s;"></div>
        </div>

        <!-- EARS with flame tips (z-index 30) -->
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 40% 30%, #fb923c, #ea580c, #c2410c);border:3px solid #7c2d12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;left:62px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,200,100,0.6),inset -2px -2px 5px rgba(124,45,18,0.4);animation:ear-twitch-l 4s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #fde047, #fbbf24);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 60% 30%, #fb923c, #ea580c, #c2410c);border:3px solid #7c2d12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;right:75px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,200,100,0.6),inset -2px -2px 5px rgba(124,45,18,0.4);animation:ear-twitch-r 4.5s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #fde047, #fbbf24);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>

        <!-- TAIL (flaming rainbow - fire colors with magical hues) -->
        <div style="position:absolute;width:40px;height:110px;background:linear-gradient(180deg, #fef08a 0%, #fbbf24 12%, #f97316 25%, #ef4444 38%, #ec4899 50%, #a855f7 65%, #6366f1 78%, #3b82f6 90%, #22d3ee 100%);border:3px solid #7c2d12;border-radius:15px 50px 50px 50px;top:120px;right:46px;z-index:5;transform-origin:top center;animation:unicorn-tail-swish 1.8s ease-in-out infinite;box-shadow:inset 3px 3px 10px rgba(255,255,200,0.5),inset -2px -2px 8px rgba(124,45,18,0.3),0 0 25px rgba(234,88,12,0.6),0 0 15px rgba(168,85,247,0.4);">
          <div style="position:absolute;width:14px;height:55px;background:rgba(255,255,200,0.4);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
          <!-- Flame wisps extending from tail -->
          <div style="position:absolute;width:25px;height:70px;background:linear-gradient(180deg, rgba(254,240,138,0.6), rgba(251,191,36,0.5), rgba(236,72,153,0.4), rgba(168,85,247,0.3), transparent);border-radius:50%;bottom:-15px;left:5px;filter:blur(4px);animation:mane-flow 1.5s ease-in-out infinite;"></div>
        </div>

        <!-- BACK LEGS (fiery orange, with glowing hooves) -->
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 50% 30%, #fb923c, #ea580c);border:3px solid #7c2d12;border-radius:8px 8px 11px 11px;top:173px;left:86px;z-index:15;box-shadow:inset 2px 2px 6px rgba(255,200,100,0.5),inset -2px -2px 4px rgba(124,45,18,0.3);">
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ff6600 0%, #ff4400 50%, #cc2200 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,200,100,0.5),0 0 15px rgba(255,100,0,0.6);"></div>
        </div>
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 50% 30%, #fb923c, #ea580c);border:3px solid #7c2d12;border-radius:8px 8px 11px 11px;top:173px;left:154px;z-index:15;box-shadow:inset 2px 2px 6px rgba(255,200,100,0.5),inset -2px -2px 4px rgba(124,45,18,0.3);">
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ff6600 0%, #ff4400 50%, #cc2200 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,200,100,0.5),0 0 15px rgba(255,100,0,0.6);"></div>
        </div>

        <!-- NECK with flowing flaming rainbow mane (z-index 21) -->
        <div style="position:absolute;width:49px;height:68px;background:radial-gradient(ellipse at 35% 30%, #fb923c 0%, #ea580c 40%, #c2410c 100%);border-left:4px solid #7c2d12;border-right:4px solid #7c2d12;clip-path:polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);top:79px;left:86px;z-index:21;box-shadow:inset 5px 5px 12px rgba(255,200,100,0.5),inset -4px -4px 10px rgba(124,45,18,0.3);overflow:visible;">
          <div style="position:absolute;width:8px;height:40px;background:rgba(255,255,200,0.3);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
          <!-- Flowing flaming rainbow mane strands -->
          <div style="position:absolute;left:-14px;top:0px;width:20px;height:60px;background:linear-gradient(180deg, #fef08a, #fbbf24, #f97316, #ef4444, #ec4899, #a855f7);border-radius:40% 10% 60% 40%;z-index:22;animation:mane-flow 1.5s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,200,0.4),0 0 12px rgba(234,88,12,0.5),0 0 8px rgba(168,85,247,0.3);"></div>
          <div style="position:absolute;left:-10px;top:10px;width:16px;height:50px;background:linear-gradient(180deg, #fbbf24, #f97316, #ef4444, #ec4899, #a855f7, #6366f1);border-radius:40% 10% 60% 40%;z-index:23;animation:mane-flow 1.7s ease-in-out infinite 0.2s;box-shadow:inset 2px 2px 5px rgba(255,255,200,0.4),0 0 10px rgba(234,88,12,0.5),0 0 6px rgba(99,102,241,0.3);"></div>
          <div style="position:absolute;left:-6px;top:20px;width:14px;height:42px;background:linear-gradient(180deg, #f97316, #ef4444, #ec4899, #a855f7, #6366f1, #3b82f6);border-radius:40% 10% 60% 40%;z-index:24;animation:mane-flow 1.3s ease-in-out infinite 0.4s;box-shadow:inset 2px 2px 5px rgba(255,255,200,0.4),0 0 8px rgba(234,88,12,0.5),0 0 5px rgba(59,130,246,0.3);"></div>
        </div>

        <!-- BODY with fire shimmer (z-index 20) -->
        <div style="position:absolute;width:135px;height:105px;background:radial-gradient(ellipse at 38% 28%, #fbbf24 0%, #fb923c 35%, #ea580c 70%, #c2410c 100%);border:4px solid #7c2d12;border-radius:60px 75px 60px 60px;top:113px;left:45px;z-index:20;box-shadow:inset 10px 10px 25px rgba(255,255,200,0.5),inset -6px -6px 15px rgba(124,45,18,0.3);overflow:hidden;">
          <div style="position:absolute;width:45px;height:30px;background:rgba(255,255,200,0.4);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,200,0.3);border-radius:50%;top:28px;right:25px;filter:blur(4px);"></div>
          <!-- Fire shimmer overlay -->
          <div style="position:absolute;top:0;left:-100%;width:300%;height:100%;background:linear-gradient(90deg, transparent 0%, rgba(255,200,50,0.2) 20%, rgba(255,150,50,0.2) 40%, rgba(255,100,50,0.15) 60%, rgba(255,200,100,0.1) 80%, transparent 100%);animation:iridescent-shimmer 3s ease-in-out infinite;"></div>
        </div>

        <!-- FRONT LEGS with glowing hooves (z-index 25) -->
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 40% 30%, #fbbf24, #fb923c, #ea580c);border:3px solid #7c2d12;border-radius:8px 8px 11px 11px;top:180px;left:56px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,200,100,0.5),inset -2px -2px 5px rgba(124,45,18,0.3);animation:unicorn-leg-kick 1.2s ease-in-out infinite;">
          <div style="position:absolute;width:3px;height:30px;background:rgba(255,255,200,0.3);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ff6600 0%, #ff4400 50%, #cc2200 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,200,100,0.5),0 0 15px rgba(255,100,0,0.6);"></div>
        </div>
        <div style="position:absolute;width:29px;height:75px;background:radial-gradient(ellipse at 40% 30%, #fbbf24, #fb923c, #ea580c);border:3px solid #7c2d12;border-radius:8px 8px 11px 11px;top:180px;left:135px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,200,100,0.5),inset -2px -2px 5px rgba(124,45,18,0.3);animation:unicorn-leg-kick 1.2s ease-in-out infinite reverse;">
          <div style="position:absolute;width:3px;height:30px;background:rgba(255,255,200,0.3);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:20px;background:linear-gradient(180deg, #ff6600 0%, #ff4400 50%, #cc2200 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,200,100,0.5),0 0 15px rgba(255,100,0,0.6);"></div>
        </div>

        <!-- HEAD (z-index 40) -->
        <div style="position:absolute;width:98px;height:120px;background:radial-gradient(ellipse at 38% 28%, #fbbf24 0%, #fb923c 35%, #ea580c 70%, #c2410c 100%);border:4px solid #7c2d12;border-radius:50% 50% 45% 45% / 40% 40% 60% 60%;top:0px;left:64px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,200,100,0.5),inset -5px -5px 12px rgba(124,45,18,0.3);overflow:visible;">
          <!-- Head highlight -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,200,0.4);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>

          <!-- FLAMING HORN (fire-colored with fire tip) -->
          <div style="position:absolute;width:12px;height:55px;background:linear-gradient(135deg, #ff6600 0%, #ff9900 20%, #ffcc00 40%, #ff6600 60%, #ff4400 80%, #cc2200 100%);border:2px solid #7c2d12;border-radius:40% 40% 15% 15% / 20% 20% 80% 80%;top:-48px;left:50%;transform:translateX(-50%);z-index:50;animation:horn-glow 1.5s ease-in-out infinite;clip-path:polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%);overflow:visible;box-shadow:0 0 15px rgba(255,100,0,0.8);">
            <!-- Spiral grooves -->
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(120,20,0,0.6);top:10px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(120,20,0,0.6);top:18px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(120,20,0,0.6);top:26px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(120,20,0,0.6);top:34px;transform:rotate(-8deg);"></div>
            <div style="position:absolute;width:120%;left:-10%;height:2px;background:rgba(120,20,0,0.6);top:42px;transform:rotate(-8deg);"></div>
            <!-- HORN TIP FIRE BURST -->
            <div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);width:30px;height:30px;z-index:55;">
              <!-- Fire orb -->
              <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle,#fff 0%,#fde047 30%,#fb923c 60%,#ea580c 100%);border-radius:50%;top:8px;left:8px;animation:horn-tip-pulse 1s ease-in-out infinite;box-shadow:0 0 15px #ff6600,0 0 30px #ff9900,0 0 45px rgba(255,100,0,0.5);"></div>
              <!-- Fire rays -->
              <div style="position:absolute;width:30px;height:30px;animation:horn-tip-rays 3s linear infinite;">
                <div style="position:absolute;width:3px;height:12px;background:linear-gradient(to top,transparent,#ff6600,#fde047);top:-4px;left:13px;border-radius:2px;"></div>
                <div style="position:absolute;width:3px;height:10px;background:linear-gradient(to bottom,transparent,#ff6600,#fde047);bottom:-2px;left:13px;border-radius:2px;"></div>
                <div style="position:absolute;width:10px;height:3px;background:linear-gradient(to left,transparent,#ff6600,#fde047);left:-2px;top:13px;border-radius:2px;"></div>
                <div style="position:absolute;width:10px;height:3px;background:linear-gradient(to right,transparent,#ff6600,#fde047);right:-2px;top:13px;border-radius:2px;"></div>
              </div>
              <!-- Fire particles -->
              <div style="position:absolute;width:4px;height:4px;background:#fde047;border-radius:50%;top:2px;left:6px;box-shadow:0 0 5px #ff9900;animation:horn-tip-starburst 1.5s ease-in-out infinite;"></div>
              <div style="position:absolute;width:3px;height:3px;background:#fb923c;border-radius:50%;top:4px;right:5px;box-shadow:0 0 4px #ff6600;animation:horn-tip-starburst 1.5s ease-in-out infinite 0.5s;"></div>
              <div style="position:absolute;width:3px;height:3px;background:#fbbf24;border-radius:50%;bottom:5px;left:5px;box-shadow:0 0 4px #ff9900;animation:horn-tip-starburst 1.5s ease-in-out infinite 1s;"></div>
            </div>
          </div>

          <!-- Flaming rainbow mane tuft -->
          <div style="position:absolute;width:60px;height:45px;background:linear-gradient(180deg, #fef08a 0%, #fbbf24 15%, #f97316 30%, #ef4444 45%, #ec4899 60%, #a855f7 75%, #6366f1 90%, #3b82f6 100%);border:2px solid #7c2d12;border-radius:50% 50% 30% 30%;top:-15px;left:50%;transform:translateX(-50%);z-index:45;box-shadow:inset 2px 2px 8px rgba(255,255,200,0.5),0 0 18px rgba(234,88,12,0.6),0 0 12px rgba(168,85,247,0.4);animation:mane-flow 1.5s ease-in-out infinite;"></div>

          <!-- Eyes (fiery orange/red) -->
          <div style="display:flex;gap:34px;margin-top:34px;justify-content:center;">
            <div style="width:16px;height:20px;background:radial-gradient(circle at 35% 35%, #fde047, #fbbf24, #ea580c);border-radius:50%;position:relative;animation:unicorn-blink 4s infinite;box-shadow:0 0 12px rgba(255,165,0,0.6),0 0 20px rgba(234,88,12,0.4);">
              <div style="position:absolute;width:10px;height:12px;background:radial-gradient(circle at 40% 40%, #ea580c, #7c2d12);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:3px;opacity:0.7;"></div>
            </div>
            <div style="width:16px;height:20px;background:radial-gradient(circle at 35% 35%, #fde047, #fbbf24, #ea580c);border-radius:50%;position:relative;animation:unicorn-blink 4s infinite;box-shadow:0 0 12px rgba(255,165,0,0.6),0 0 20px rgba(234,88,12,0.4);">
              <div style="position:absolute;width:10px;height:12px;background:radial-gradient(circle at 40% 40%, #ea580c, #7c2d12);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:3px;opacity:0.7;"></div>
            </div>
          </div>

          <!-- Muzzle -->
          <div style="position:absolute;bottom:0;width:100%;height:56px;background:radial-gradient(ellipse at 50% 40%, #fbbf24, #fb923c, #ea580c);border-top:3px solid #7c2d12;border-radius:0 0 50% 50% / 0 0 80% 80%;box-shadow:inset 4px 4px 10px rgba(255,200,100,0.4),inset -3px -3px 8px rgba(124,45,18,0.2);">
            <!-- Nostrils -->
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #c2410c, #7c2d12);border-radius:50%;bottom:26px;left:26px;transform:rotate(15deg);opacity:0.7;"></div>
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #c2410c, #7c2d12);border-radius:50%;bottom:26px;right:26px;transform:rotate(-15deg);opacity:0.7;"></div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:11px;left:50%;transform:translateX(-50%);width:30px;height:8px;border-bottom:3px solid #7c2d12;border-radius:50%;"></div>
          </div>

          <!-- Blush (warm orange) -->
          <div style="position:absolute;top:72px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:20px;height:10px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
            <div style="width:20px;height:10px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          </div>
        </div>
      </div>
    `,

    // ===== PEGASUS - Mystical Variant 12 =====
    // Majestic white winged horse with flowing mane and feathered wings
    12:`
      <div style="position:relative;width:280px;height:320px;overflow:visible;animation:pegasus-float 3.5s ease-in-out infinite;">
        <!-- Cloud wisps at the bottom -->
        <div style="position:absolute;bottom:10px;left:20px;width:240px;height:50px;z-index:1;">
          <div style="position:absolute;width:80px;height:35px;background:radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.9), rgba(230,240,255,0.6), transparent);border-radius:50%;left:0;bottom:0;filter:blur(6px);animation:cloud-drift 4s ease-in-out infinite;"></div>
          <div style="position:absolute;width:100px;height:40px;background:radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.85), rgba(220,235,255,0.5), transparent);border-radius:50%;left:70px;bottom:5px;filter:blur(8px);animation:cloud-drift 5s ease-in-out infinite 0.5s;"></div>
          <div style="position:absolute;width:70px;height:30px;background:radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.8), rgba(210,230,255,0.4), transparent);border-radius:50%;right:10px;bottom:0;filter:blur(5px);animation:cloud-drift 4.5s ease-in-out infinite 1s;"></div>
        </div>

        <!-- Ambient sparkles floating around -->
        <div style="position:absolute;width:6px;height:6px;background:rgba(255,255,255,0.95);border-radius:50%;top:20px;left:50px;box-shadow:0 0 10px rgba(200,220,255,0.9),0 0 20px rgba(180,200,255,0.5);animation:star-rise 3s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:5px;background:rgba(220,235,255,0.9);border-radius:50%;top:60px;right:40px;box-shadow:0 0 8px rgba(180,200,255,0.8);animation:star-rise 3.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:4px;height:4px;background:rgba(200,215,255,0.9);border-radius:50%;top:100px;left:30px;box-shadow:0 0 6px rgba(170,190,255,0.7);animation:star-rise 4s ease-in-out infinite 1s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:rgba(230,240,255,0.9);border-radius:50%;top:40px;right:60px;box-shadow:0 0 8px rgba(200,220,255,0.8);animation:star-rise 3.2s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:4px;height:4px;background:rgba(255,255,255,0.9);border-radius:50%;bottom:80px;left:60px;box-shadow:0 0 6px rgba(180,200,255,0.7);animation:star-rise 3.8s ease-in-out infinite 0.8s;"></div>

        <!-- LEFT WING (spread horizontally like eagle) -->
        <div style="position:absolute;top:90px;left:-85px;z-index:8;transform-origin:right center;animation:pegasus-wing-left 1.8s ease-in-out infinite;">
          <!-- Wing structure using CSS divs for horizontal spread -->
          <div style="position:relative;width:100px;height:80px;">
            <!-- Primary feathers (longest, at wing tip) - fanning outward -->
            <div style="position:absolute;width:50px;height:10px;background:linear-gradient(to left, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:40px;left:0;transform:rotate(-25deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:55px;height:11px;background:linear-gradient(to left, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:35px;left:5px;transform:rotate(-18deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:60px;height:12px;background:linear-gradient(to left, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:30px;left:10px;transform:rotate(-10deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:62px;height:12px;background:linear-gradient(to left, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:26px;left:12px;transform:rotate(-3deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:60px;height:11px;background:linear-gradient(to left, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:24px;left:14px;transform:rotate(5deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:55px;height:10px;background:linear-gradient(to left, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:23px;left:18px;transform:rotate(12deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:48px;height:9px;background:linear-gradient(to left, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:3px 0 0 3px;top:24px;left:22px;transform:rotate(18deg);transform-origin:right center;box-shadow:inset 2px 1px 3px rgba(255,255,255,0.6);"></div>
            <!-- Secondary feathers (shorter, near body) -->
            <div style="position:absolute;width:35px;height:28px;background:radial-gradient(ellipse at 70% 50%, #ffffff, #f1f5f9, #e2e8f0);border:2px solid #94a3b8;border-radius:40% 10% 10% 40%;top:22px;right:0;box-shadow:inset 3px 3px 6px rgba(255,255,255,0.7);"></div>
            <!-- Highlight -->
            <div style="position:absolute;width:20px;height:12px;background:rgba(255,255,255,0.5);border-radius:50%;top:28px;right:8px;filter:blur(3px);"></div>
          </div>
        </div>

        <!-- RIGHT WING (spread horizontally like eagle, mirrored) -->
        <div style="position:absolute;top:90px;right:-85px;z-index:8;transform-origin:left center;animation:pegasus-wing-right 1.8s ease-in-out infinite;">
          <!-- Wing structure using CSS divs for horizontal spread -->
          <div style="position:relative;width:100px;height:80px;">
            <!-- Primary feathers (longest, at wing tip) - fanning outward -->
            <div style="position:absolute;width:50px;height:10px;background:linear-gradient(to right, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:40px;right:0;transform:rotate(25deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:55px;height:11px;background:linear-gradient(to right, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:35px;right:5px;transform:rotate(18deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:60px;height:12px;background:linear-gradient(to right, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:30px;right:10px;transform:rotate(10deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:62px;height:12px;background:linear-gradient(to right, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:26px;right:12px;transform:rotate(3deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:60px;height:11px;background:linear-gradient(to right, #ffffff, #f1f5f9, #e2e8f0);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:24px;right:14px;transform:rotate(-5deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:55px;height:10px;background:linear-gradient(to right, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:23px;right:18px;transform:rotate(-12deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <div style="position:absolute;width:48px;height:9px;background:linear-gradient(to right, #f8fafc, #e2e8f0, #cbd5e1);border:1.5px solid #94a3b8;border-radius:0 3px 3px 0;top:24px;right:22px;transform:rotate(-18deg);transform-origin:left center;box-shadow:inset -2px 1px 3px rgba(255,255,255,0.6);"></div>
            <!-- Secondary feathers (shorter, near body) -->
            <div style="position:absolute;width:35px;height:28px;background:radial-gradient(ellipse at 30% 50%, #ffffff, #f1f5f9, #e2e8f0);border:2px solid #94a3b8;border-radius:10% 40% 40% 10%;top:22px;left:0;box-shadow:inset -3px 3px 6px rgba(255,255,255,0.7);"></div>
            <!-- Highlight -->
            <div style="position:absolute;width:20px;height:12px;background:rgba(255,255,255,0.5);border-radius:50%;top:28px;left:8px;filter:blur(3px);"></div>
          </div>
        </div>

        <!-- EARS (z-index 30) -->
        <div style="position:absolute;width:22px;height:36px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:8px;left:102px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.9),inset -2px -2px 5px rgba(148,163,184,0.2);animation:ear-twitch-l 4s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:10px;height:20px;background:radial-gradient(ellipse, #fce7f3, #fbcfe8);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>
        <div style="position:absolute;width:22px;height:36px;background:radial-gradient(ellipse at 60% 30%, #ffffff, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:8px;right:102px;z-index:30;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.9),inset -2px -2px 5px rgba(148,163,184,0.2);animation:ear-twitch-r 4.5s ease-in-out infinite;transform-origin:bottom center;">
          <div style="position:absolute;width:10px;height:20px;background:radial-gradient(ellipse, #fce7f3, #fbcfe8);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>

        <!-- TAIL (flowing silver-blue mane) -->
        <div style="position:absolute;width:35px;height:90px;background:linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 30%, #a5b4c4 60%, #94a3b8 100%);border:3px solid #64748b;border-radius:15px 50px 50px 50px;top:145px;right:55px;z-index:5;transform-origin:top center;animation:pegasus-tail-flow 2.5s ease-in-out infinite;box-shadow:inset 3px 3px 10px rgba(255,255,255,0.6),inset -2px -2px 8px rgba(100,116,139,0.2);">
          <div style="position:absolute;width:12px;height:45px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
        </div>
        <!-- Extra tail wisps -->
        <div style="position:absolute;width:20px;height:70px;background:linear-gradient(180deg, #cbd5e1 0%, #94a3b8 100%);border:2px solid #64748b;border-radius:10px 40px 40px 40px;top:160px;right:45px;z-index:4;transform-origin:top center;animation:pegasus-tail-flow 2.8s ease-in-out infinite 0.2s;opacity:0.8;"></div>

        <!-- BACK LEGS (z-index 15) -->
        <div style="position:absolute;width:26px;height:70px;background:radial-gradient(ellipse at 50% 30%, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:8px 8px 10px 10px;top:188px;left:108px;z-index:15;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.7),inset -2px -2px 4px rgba(148,163,184,0.2);">
          <div style="position:absolute;bottom:-2px;width:100%;height:18px;background:linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
        </div>
        <div style="position:absolute;width:26px;height:70px;background:radial-gradient(ellipse at 50% 30%, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:8px 8px 10px 10px;top:188px;left:168px;z-index:15;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.7),inset -2px -2px 4px rgba(148,163,184,0.2);">
          <div style="position:absolute;bottom:-2px;width:100%;height:18px;background:linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
        </div>

        <!-- NECK with flowing mane (z-index 21) -->
        <div style="position:absolute;width:45px;height:60px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%);border-left:4px solid #cbd5e1;border-right:4px solid #cbd5e1;clip-path:polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);top:95px;left:118px;z-index:21;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.8),inset -4px -4px 10px rgba(148,163,184,0.2);overflow:visible;">
          <div style="position:absolute;width:8px;height:35px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
          <!-- Flowing silver mane strands down neck -->
          <div style="position:absolute;left:-10px;top:5px;width:16px;height:50px;background:linear-gradient(180deg, #e2e8f0, #cbd5e1, #a5b4c4, #94a3b8);border-radius:40% 10% 60% 40%;z-index:22;animation:mane-flow 2s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;left:-6px;top:12px;width:12px;height:42px;background:linear-gradient(180deg, #cbd5e1, #a5b4c4, #94a3b8, #64748b);border-radius:40% 10% 60% 40%;z-index:23;animation:mane-flow 2.2s ease-in-out infinite 0.2s;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;left:-2px;top:20px;width:10px;height:35px;background:linear-gradient(180deg, #a5b4c4, #94a3b8, #64748b, #475569);border-radius:40% 10% 60% 40%;z-index:24;animation:mane-flow 1.8s ease-in-out infinite 0.4s;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.5);"></div>
        </div>

        <!-- BODY with iridescent shimmer (z-index 20) -->
        <div style="position:absolute;width:125px;height:95px;background:radial-gradient(ellipse at 38% 28%, #ffffff 0%, #fafafa 35%, #f5f5f5 70%, #f1f5f9 100%);border:4px solid #cbd5e1;border-radius:60px 70px 55px 55px;top:130px;left:78px;z-index:20;box-shadow:inset 10px 10px 25px rgba(255,255,255,0.9),inset -6px -6px 15px rgba(148,163,184,0.2);overflow:hidden;">
          <div style="position:absolute;width:40px;height:28px;background:rgba(255,255,255,0.7);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:25px;right:22px;filter:blur(4px);"></div>
          <!-- Iridescent shimmer overlay -->
          <div style="position:absolute;top:0;left:-100%;width:300%;height:100%;background:linear-gradient(90deg, transparent 0%, rgba(200,220,255,0.15) 20%, rgba(220,200,255,0.15) 40%, rgba(200,255,220,0.1) 60%, rgba(255,220,200,0.1) 80%, transparent 100%);animation:iridescent-shimmer 4s ease-in-out infinite;"></div>
        </div>

        <!-- FRONT LEGS (z-index 25) -->
        <div style="position:absolute;width:26px;height:70px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:8px 8px 10px 10px;top:195px;left:88px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8),inset -2px -2px 5px rgba(148,163,184,0.2);animation:pegasus-prance-left 1.5s ease-in-out infinite;">
          <div style="position:absolute;width:3px;height:28px;background:rgba(255,255,255,0.4);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:18px;background:linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
        </div>
        <div style="position:absolute;width:26px;height:70px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f8fafc, #f1f5f9);border:3px solid #cbd5e1;border-radius:8px 8px 10px 10px;top:195px;left:158px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8),inset -2px -2px 5px rgba(148,163,184,0.2);animation:pegasus-prance-right 1.5s ease-in-out infinite;">
          <div style="position:absolute;width:3px;height:28px;background:rgba(255,255,255,0.4);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:18px;background:linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
        </div>

        <!-- HEAD (z-index 40) -->
        <div style="position:absolute;width:90px;height:105px;background:radial-gradient(ellipse at 38% 28%, #ffffff 0%, #fafafa 35%, #f5f5f5 70%, #f1f5f9 100%);border:4px solid #cbd5e1;border-radius:50% 50% 45% 45% / 40% 40% 60% 60%;top:18px;left:95px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.9),inset -5px -5px 12px rgba(148,163,184,0.2);overflow:visible;">
          <!-- Head highlight -->
          <div style="position:absolute;width:28px;height:20px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>

          <!-- Silver mane tuft (no horn - this is Pegasus not unicorn) -->
          <div style="position:absolute;width:50px;height:35px;background:linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 30%, #cbd5e1 60%, #94a3b8 100%);border:2px solid #64748b;border-radius:50% 50% 30% 30%;top:-10px;left:50%;transform:translateX(-50%);z-index:45;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.6);animation:mane-flow 2s ease-in-out infinite;"></div>

          <!-- Eyes with gentle expression -->
          <div style="display:flex;gap:30px;margin-top:30px;justify-content:center;">
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #60a5fa, #3b82f6, #1d4ed8);border-radius:50%;position:relative;animation:pegasus-blink 4s infinite;box-shadow:0 0 12px rgba(59,130,246,0.4),0 0 20px rgba(59,130,246,0.2);">
              <div style="position:absolute;width:9px;height:11px;background:radial-gradient(circle at 40% 40%, #1e40af, #1e3a8a);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.7;"></div>
            </div>
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #60a5fa, #3b82f6, #1d4ed8);border-radius:50%;position:relative;animation:pegasus-blink 4s infinite;box-shadow:0 0 12px rgba(59,130,246,0.4),0 0 20px rgba(59,130,246,0.2);">
              <div style="position:absolute;width:9px;height:11px;background:radial-gradient(circle at 40% 40%, #1e40af, #1e3a8a);border-radius:50%;top:4px;left:3px;animation:eye-look 6s ease-in-out infinite;"></div>
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;animation:eye-sparkle 2s ease-in-out infinite;"></div>
              <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.7;"></div>
            </div>
          </div>

          <!-- Muzzle -->
          <div style="position:absolute;bottom:0;width:100%;height:50px;background:radial-gradient(ellipse at 50% 40%, #ffffff, #fafafa, #f5f5f5);border-top:3px solid #cbd5e1;border-radius:0 0 50% 50% / 0 0 80% 80%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7),inset -3px -3px 8px rgba(148,163,184,0.15);">
            <!-- Nostrils -->
            <div style="position:absolute;width:8px;height:10px;background:radial-gradient(ellipse, #e2e8f0, #cbd5e1);border-radius:50%;bottom:22px;left:24px;transform:rotate(15deg);opacity:0.5;"></div>
            <div style="position:absolute;width:8px;height:10px;background:radial-gradient(ellipse, #e2e8f0, #cbd5e1);border-radius:50%;bottom:22px;right:24px;transform:rotate(-15deg);opacity:0.5;"></div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:28px;height:7px;border-bottom:3px solid #cbd5e1;border-radius:50%;"></div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:62px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #fce7f3, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #fce7f3, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          </div>
        </div>
      </div>
    `,

    // ===== KITSUNE - Mystical Variant 13 =====
    // Blue/white mystical fox with 9 large fluffy blue/white magical tails
    13:`
      <style>
      @keyframes kitsune-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
      @keyframes kitsune-blink{0%,90%,100%{transform:scaleY(1)}93%,97%{transform:scaleY(0.1)}}
      @keyframes tail-swish-1{0%,100%{transform:rotate(-72deg)}50%{transform:rotate(-68deg)}}
      @keyframes tail-swish-2{0%,100%{transform:rotate(-54deg)}50%{transform:rotate(-48deg)}}
      @keyframes tail-swish-3{0%,100%{transform:rotate(-36deg)}50%{transform:rotate(-30deg)}}
      @keyframes tail-swish-4{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(-12deg)}}
      @keyframes tail-swish-5{0%,100%{transform:rotate(0deg)}50%{transform:rotate(6deg)}}
      @keyframes tail-swish-6{0%,100%{transform:rotate(18deg)}50%{transform:rotate(24deg)}}
      @keyframes tail-swish-7{0%,100%{transform:rotate(36deg)}50%{transform:rotate(42deg)}}
      @keyframes tail-swish-8{0%,100%{transform:rotate(54deg)}50%{transform:rotate(60deg)}}
      @keyframes tail-swish-9{0%,100%{transform:rotate(72deg)}50%{transform:rotate(78deg)}}
      @keyframes flame-flicker{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}}
      @keyframes magic-glow{0%,100%{box-shadow:0 0 20px rgba(96,165,250,0.5)}50%{box-shadow:0 0 35px rgba(147,197,253,0.7)}}
      @keyframes sparkle-float{0%,100%{transform:translateY(0) scale(1);opacity:1}50%{transform:translateY(-10px) scale(1.2);opacity:0.6}}
      @keyframes ear-wiggle{0%,85%,100%{transform:rotate(-25deg)}90%{transform:rotate(-30deg)}}
      @keyframes ear-wiggle-r{0%,85%,100%{transform:rotate(25deg)}90%{transform:rotate(30deg)}}
      @keyframes tail-glow{0%,100%{filter:drop-shadow(0 0 8px rgba(96,165,250,0.6))}50%{filter:drop-shadow(0 0 16px rgba(147,197,253,0.9))}}
      </style>
      <div style="position:relative;width:240px;height:280px;animation:kitsune-bounce 3s ease-in-out infinite;">
        <!-- 9 LARGE FLUFFY HORIZONTAL TAILS (blue/white magical) -->
        <div style="position:absolute;top:144px;left:118px;z-index:5;animation:tail-glow 2s ease-in-out infinite;transform:scale(1.06) rotate(-90deg);height:109px;width:100px;">
          <!-- Tail 1 (far left) -->
          <div style="position:absolute;width:256px;height:82px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(-72deg);animation:tail-swish-1 2.5s ease-in-out infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:97px;height:71px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:174px;"></div>
            <div style="position:absolute;width:44px;height:36px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:32px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 2 -->
          <div style="position:absolute;width:271px;height:82px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(-54deg);animation:tail-swish-2 2.5s ease-in-out 0.1s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:97px;height:75px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:195px;"></div>
            <div style="position:absolute;width:44px;height:36px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:44px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 3 -->
          <div style="position:absolute;width:287px;height:87px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(-36deg);animation:tail-swish-3 2.5s ease-in-out 0.2s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:98px;height:82px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:204px;"></div>
            <div style="position:absolute;width:48px;height:38px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:48px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 4 -->
          <div style="position:absolute;width:294px;height:91px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(-18deg);animation:tail-swish-4 2.5s ease-in-out 0.3s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:98px;height:82px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:215px;"></div>
            <div style="position:absolute;width:51px;height:41px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:51px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 5 (center - largest) -->
          <div style="position:absolute;width:305px;height:97px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(0deg);animation:tail-swish-5 2.5s ease-in-out 0.4s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 25px rgba(56,189,248,0.6);overflow:hidden;">
            <div style="position:absolute;width:109px;height:87px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:216px;"></div>
            <div style="position:absolute;width:54px;height:44px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:54px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 6 -->
          <div style="position:absolute;width:294px;height:91px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(18deg);animation:tail-swish-6 2.5s ease-in-out 0.3s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:98px;height:82px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:215px;"></div>
            <div style="position:absolute;width:51px;height:41px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:51px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 7 -->
          <div style="position:absolute;width:287px;height:87px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(36deg);animation:tail-swish-7 2.5s ease-in-out 0.2s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:98px;height:82px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:204px;"></div>
            <div style="position:absolute;width:48px;height:38px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:48px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 8 -->
          <div style="position:absolute;width:271px;height:82px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(54deg);animation:tail-swish-8 2.5s ease-in-out 0.1s infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:97px;height:75px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:195px;"></div>
            <div style="position:absolute;width:44px;height:36px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:44px;border-radius:50%;filter:blur(3px);"></div>
          </div>
          <!-- Tail 9 (far right) -->
          <div style="position:absolute;width:256px;height:82px;background:radial-gradient(at 35% 40%, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 80%, #0ea5e9 100%);border:4px solid #0369a1;border-radius:45px;transform-origin:left center;transform:rotate(72deg);animation:tail-swish-9 2.5s ease-in-out infinite;box-shadow:inset 6px 6px 18px rgba(255,255,255,0.9),inset -4px -4px 12px rgba(14,165,233,0.3),0 0 20px rgba(56,189,248,0.5);overflow:hidden;">
            <div style="position:absolute;width:97px;height:71px;background:radial-gradient(at 50% 40%, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%);right:0;top:0;border-radius:0 45px 45px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);left:174px;"></div>
            <div style="position:absolute;width:44px;height:36px;background:radial-gradient(circle,rgba(255,255,255,0.8),transparent);top:13px;left:32px;border-radius:50%;filter:blur(3px);"></div>
          </div>
        </div>

        <!-- FOX EARS (blue/white with dark tips) -->
        <div style="position:absolute;width:55px;height:75px;background:radial-gradient(ellipse at 35% 30%, #7dd3fc 0%, #38bdf8 40%, #0ea5e9 100%);border:4px solid #0c4a6e;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;left:40px;transform:rotate(-25deg);animation:ear-wiggle 5s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#0c4a6e;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <div style="position:absolute;width:55px;height:75px;background:radial-gradient(ellipse at 35% 30%, #7dd3fc 0%, #38bdf8 40%, #0ea5e9 100%);border:4px solid #0c4a6e;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;right:40px;transform:rotate(25deg);animation:ear-wiggle-r 7s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#0c4a6e;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>

        <!-- BACK PAWS (blue/white) -->
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 25%, #0c4a6e 55%, #082f49 100%);border:3.5px solid #082f49;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:-60px;transform:rotate(-5deg);box-shadow:inset 4px 4px 10px rgba(125,211,252,0.5), inset -2px -2px 6px rgba(8,47,73,0.4);"></div>
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 25%, #0c4a6e 55%, #082f49 100%);border:3.5px solid #082f49;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:12px;transform:rotate(5deg);box-shadow:inset 4px 4px 10px rgba(125,211,252,0.5), inset -2px -2px 6px rgba(8,47,73,0.4);"></div>

        <!-- BODY with chest patch and magical glow (blue/white) -->
        <div style="position:absolute;width:150px;height:125px;background:radial-gradient(ellipse at 35% 30%, #bae6fd 0%, #7dd3fc 25%, #38bdf8 55%, #0ea5e9 100%);border:4px solid #0c4a6e;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:45px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(224,242,254,0.7), inset -6px -6px 16px rgba(14,165,233,0.4);animation:magic-glow 3s ease-in-out infinite;">
          <div style="position:absolute;width:46px;height:34px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.4);border-radius:50%;top:26px;right:30px;filter:blur(3px);"></div>
          <div style="position:absolute;width:100px;height:90px;background:#ffffff;border-radius:50%;top:-10px;left:50%;transform:translateX(-50%);opacity:0.95;"></div>
          <!-- Mystical marking on chest -->
          <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle,#c4b5fd,#a78bfa);border-radius:50%;top:35px;left:50%;transform:translateX(-50%);box-shadow:0 0 8px #a78bfa;"></div>
        </div>

        <!-- FRONT PAWS with fingers (blue/white) -->
        <div style="position:absolute;width:42px;height:32px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 25%, #0c4a6e 55%, #082f49 100%);border:3px solid #082f49;border-radius:14px;top:145px;left:40px;z-index:45;display:flex;justify-content:center;gap:3px;padding-top:2px;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.5), inset -2px -2px 6px rgba(8,47,73,0.4);">
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
        </div>
        <div style="position:absolute;width:42px;height:32px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 25%, #0c4a6e 55%, #082f49 100%);border:3px solid #082f49;border-radius:14px;top:145px;right:40px;z-index:45;display:flex;justify-content:center;gap:3px;padding-top:2px;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.5), inset -2px -2px 6px rgba(8,47,73,0.4);">
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #0369a1 0%, #075985 50%, #0c4a6e 100%);border:2px solid #082f49;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(125,211,252,0.4);"></div>
        </div>

        <!-- HEAD with face mask (blue/white) -->
        <div style="position:absolute;width:155px;height:115px;background:radial-gradient(ellipse at 35% 30%, #bae6fd 0%, #7dd3fc 25%, #38bdf8 55%, #0ea5e9 100%);border:4px solid #0c4a6e;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:28px;left:43px;z-index:40;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(224,242,254,0.7), inset -6px -6px 16px rgba(14,165,233,0.4);">
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(5px);z-index:42;"></div>
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:24px;right:26px;filter:blur(3px);z-index:42;"></div>
          <!-- White face mask -->
          <div style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:41;">
            <div style="position:absolute;width:34px;height:55px;background:#ffffff;top:55px;left:50%;transform:translateX(-50%);border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;opacity:0.95;"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;left:10px;opacity:0.95;transform:rotate(-20deg);"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;right:10px;opacity:0.95;transform:rotate(20deg);"></div>
          </div>
          <!-- Mystical forehead marking -->
          <div style="position:absolute;width:10px;height:10px;background:radial-gradient(circle, #c4b5fd, #a78bfa);border-radius:50%;top:18px;left:50%;transform:translateX(-50%);z-index:55;box-shadow:0 0 10px #a78bfa;"></div>
          <!-- Eyes (fox almond eyes) -->
          <div style="position:absolute;top:45px;width:100%;display:flex;justify-content:center;gap:40px;z-index:50;">
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:rotate(-12deg);animation:kitsune-blink 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:scaleX(-1) rotate(-12deg);animation:kitsune-blink 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
          </div>
          <!-- Nose and mouth -->
          <div style="position:absolute;width:60px;height:40px;bottom:-8px;left:50%;transform:translateX(-50%);z-index:60;">
            <div style="position:absolute;width:18px;height:12px;background:#111827;border-radius:50%;top:0;left:50%;transform:translateX(-50%);"></div>
            <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);display:flex;">
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:75px;width:100%;display:flex;justify-content:space-around;padding:0 32px;z-index:50;">
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
          </div>
        </div>

        <!-- MAGICAL SPARKLES floating around -->
        <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle,#60a5fa,#3b82f6);border-radius:50%;top:10px;left:30px;box-shadow:0 0 12px #60a5fa;animation:sparkle-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle,#93c5fd,#60a5fa);border-radius:50%;top:50px;left:15px;box-shadow:0 0 10px #93c5fd;animation:sparkle-float 2.5s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle,#60a5fa,#3b82f6);border-radius:50%;top:20px;right:25px;box-shadow:0 0 12px #60a5fa;animation:sparkle-float 2s ease-in-out infinite 0.6s;"></div>
        <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle,#a5b4fc,#818cf8);border-radius:50%;top:60px;right:10px;box-shadow:0 0 10px #a5b4fc;animation:sparkle-float 2.5s ease-in-out infinite 0.9s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle,#fbbf24,#f59e0b);border-radius:50%;top:90px;left:20px;box-shadow:0 0 8px #fbbf24;animation:sparkle-float 3s ease-in-out infinite 1.2s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle,#fbbf24,#f59e0b);border-radius:50%;top:100px;right:15px;box-shadow:0 0 8px #fbbf24;animation:sparkle-float 3s ease-in-out infinite 1.5s;"></div>
      </div>
    `
  };

  const design = mysticalDesigns[variant]||mysticalDesigns[0];
  const shadowHTML = `<div class="adult-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}
