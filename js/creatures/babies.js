function renderBlob(categoryKey){
  const category=categoryKey||S.creatureCategory||'birds';

  // Category-specific blob designs with rich egg elements
  const blobDesigns={
    // Birds - nest base, speckles, feathers, and animated elements
    birds:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Outer glow aura -->
        <div style="position:absolute;width:85px;height:85px;top:3px;left:3px;background:radial-gradient(circle,rgba(236,72,153,0.15),transparent 60%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(186,230,253,0.85), rgba(125,211,252,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(186,230,253,0.3),0 0 0 9px rgba(125,211,252,0.2),0 4px 12px rgba(56,189,248,0.4);">
          <!-- Speckle pattern from egg -->
          <div style="position:absolute;width:5px;height:5px;background:rgba(120,53,15,0.45);border-radius:50%;top:15%;left:55%;animation:sparkle-twinkle 3s ease-in-out infinite;"></div>
          <div style="position:absolute;width:4px;height:4px;background:rgba(120,53,15,0.4);border-radius:50%;top:55%;left:22%;animation:sparkle-twinkle 3.5s ease-in-out infinite 0.5s;"></div>
          <div style="position:absolute;width:3px;height:3px;background:rgba(120,53,15,0.35);border-radius:50%;top:40%;left:72%;"></div>
          <div style="position:absolute;width:4px;height:4px;background:rgba(120,53,15,0.38);border-radius:50%;top:68%;left:58%;"></div>
          <!-- Internal movement hint -->
          <div style="position:absolute;width:18px;height:22px;background:radial-gradient(ellipse,rgba(255,255,255,0.25),transparent);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:wiggle 2.5s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <!-- Floating feather wisps -->
        <div style="position:absolute;width:12px;height:4px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.7),transparent);border-radius:50%;top:-8px;left:30%;transform:rotate(-20deg);animation:egg-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:10px;height:3px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.5),transparent);border-radius:50%;top:-3px;right:15%;transform:rotate(15deg);animation:egg-float 2.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:8px;height:3px;background:linear-gradient(to right,transparent,rgba(186,230,253,0.6),transparent);border-radius:50%;top:5px;left:-5px;transform:rotate(-10deg);animation:egg-float 3s ease-in-out infinite 1s;"></div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(125,211,252,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(125,211,252,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(125,211,252,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(125,211,252,0.7));"></div>
      </div>
    `,
    // Aquatic - water shimmer, bubbles rising, wave effect
    aquatic:`
      <div class="bl-creature" style="animation:wiggle 3s ease-in-out infinite;">
        <!-- Outer water glow -->
        <div style="position:absolute;width:90px;height:90px;top:0;left:0;background:radial-gradient(circle,rgba(56,189,248,0.2),transparent 60%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(96,165,250,0.85), rgba(59,130,246,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(96,165,250,0.3),0 0 15px rgba(59,130,246,0.4),0 4px 12px rgba(37,99,235,0.4);">
          <!-- Rising bubbles -->
          <div style="position:absolute;width:8px;height:8px;background:rgba(255,255,255,0.55);border-radius:50%;top:18%;left:62%;box-shadow:inset -2px -2px 3px rgba(59,130,246,0.3);animation:egg-float 1.8s ease-in-out infinite;"></div>
          <div style="position:absolute;width:6px;height:6px;background:rgba(255,255,255,0.5);border-radius:50%;top:48%;left:22%;box-shadow:inset -1px -1px 2px rgba(59,130,246,0.3);animation:egg-float 2.2s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:5px;height:5px;background:rgba(255,255,255,0.45);border-radius:50%;top:32%;left:75%;box-shadow:inset -1px -1px 2px rgba(59,130,246,0.2);animation:egg-float 2s ease-in-out infinite 0.6s;"></div>
          <div style="position:absolute;width:4px;height:4px;background:rgba(255,255,255,0.4);border-radius:50%;top:65%;left:68%;animation:egg-float 2.5s ease-in-out infinite 0.9s;"></div>
          <!-- Fish silhouette hint -->
          <div style="position:absolute;width:14px;height:8px;background:rgba(255,255,255,0.15);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;top:55%;left:40%;animation:wiggle 2s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <!-- External floating bubbles -->
        <div style="position:absolute;width:5px;height:5px;background:rgba(255,255,255,0.5);border-radius:50%;top:-10px;left:40%;box-shadow:0 0 4px rgba(56,189,248,0.5);animation:egg-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:4px;height:4px;background:rgba(255,255,255,0.4);border-radius:50%;top:-5px;right:20%;box-shadow:0 0 3px rgba(56,189,248,0.4);animation:egg-float 2.3s ease-in-out infinite 0.5s;"></div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(59,130,246,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(59,130,246,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(59,130,246,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(59,130,246,0.7));"></div>
      </div>
    `,
    // Reptiles - sand base, scale patterns, cracks, movement
    reptiles:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Warm glow -->
        <div style="position:absolute;width:88px;height:88px;top:1px;left:1px;background:radial-gradient(circle,rgba(34,197,94,0.15),transparent 55%);border-radius:50%;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(74,222,128,0.85), rgba(34,197,94,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(74,222,128,0.3),0 0 0 9px rgba(34,197,94,0.2),0 4px 12px rgba(22,163,74,0.4);">
          <!-- Scale pattern overlay -->
          <div style="position:absolute;width:100%;height:100%;background:repeating-conic-gradient(from 0deg at 50% 50%,transparent 0deg,rgba(21,128,61,0.1) 12deg,transparent 24deg);border-radius:50%;"></div>
          <!-- Individual scales -->
          <div style="position:absolute;width:7px;height:4px;background:rgba(21,128,61,0.22);border-radius:50%;top:22%;left:58%;transform:rotate(-10deg);"></div>
          <div style="position:absolute;width:6px;height:3px;background:rgba(21,128,61,0.2);border-radius:50%;top:55%;left:28%;transform:rotate(15deg);"></div>
          <div style="position:absolute;width:5px;height:3px;background:rgba(21,128,61,0.18);border-radius:50%;top:68%;left:62%;"></div>
          <!-- Hairline crack hints -->
          <div style="position:absolute;width:1px;height:8px;background:linear-gradient(to bottom,transparent,rgba(21,128,61,0.15),transparent);top:35%;left:70%;transform:rotate(20deg);"></div>
          <!-- Movement hint -->
          <div style="position:absolute;width:12px;height:15px;background:radial-gradient(ellipse,rgba(255,255,255,0.2),transparent);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:wiggle 3s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
      </div>
    `,
    // Insects - honeycomb, honey drips, pollen sparkles
    insects:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Warm glow -->
        <div style="position:absolute;width:88px;height:88px;top:1px;left:1px;background:radial-gradient(circle,rgba(251,191,36,0.15),transparent 55%);border-radius:50%;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(252,211,77,0.85), rgba(234,179,8,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(252,211,77,0.3),0 0 0 9px rgba(234,179,8,0.2),0 4px 12px rgba(202,138,4,0.4);">
          <!-- Honeycomb pattern overlay -->
          <div style="position:absolute;width:100%;height:100%;background:repeating-conic-gradient(from 30deg at 50% 50%,transparent 0deg,rgba(180,83,9,0.08) 60deg,transparent 60deg);border-radius:50%;"></div>
          <!-- Honeycomb cells -->
          <div style="position:absolute;width:10px;height:10px;border:1px solid rgba(180,83,9,0.2);top:25%;left:55%;transform:rotate(30deg);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);"></div>
          <div style="position:absolute;width:8px;height:8px;border:1px solid rgba(180,83,9,0.15);top:55%;left:28%;transform:rotate(30deg);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);"></div>
          <!-- Larva movement hint -->
          <div style="position:absolute;width:10px;height:14px;background:radial-gradient(ellipse,rgba(255,255,255,0.25),transparent);border-radius:50%;top:48%;left:50%;transform:translate(-50%,-50%);animation:wiggle 2.5s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <!-- Floating pollen sparkles -->
        <div style="position:absolute;width:5px;height:5px;background:#fef3c7;border-radius:50%;top:-8px;left:45%;box-shadow:0 0 5px #fcd34d,0 0 10px rgba(251,191,36,0.5);animation:egg-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:4px;height:4px;background:#fef3c7;border-radius:50%;top:-3px;right:18%;box-shadow:0 0 4px #fcd34d;animation:sparkle-twinkle 2.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:3px;height:3px;background:#fef3c7;border-radius:50%;top:5px;left:0;box-shadow:0 0 3px #fcd34d;animation:egg-float 3s ease-in-out infinite 1s;"></div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(234,179,8,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(234,179,8,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(234,179,8,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(234,179,8,0.7));"></div>
      </div>
    `,
    // Mammals - fur nest, heartbeat, paw prints, warmth
    mammals:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Warm glow aura -->
        <div style="position:absolute;width:92px;height:92px;top:-1px;left:-1px;background:radial-gradient(circle,rgba(251,191,36,0.18),transparent 55%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(217,119,6,0.85), rgba(180,83,9,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(217,119,6,0.3),0 0 0 9px rgba(180,83,9,0.2),0 4px 12px rgba(146,64,14,0.4);">
          <!-- Fur texture overlay -->
          <div style="position:absolute;width:100%;height:100%;background:repeating-linear-gradient(45deg,transparent,transparent 2px,rgba(120,53,15,0.06) 2px,rgba(120,53,15,0.06) 3px);border-radius:50%;"></div>
          <!-- Heartbeat glow -->
          <div style="position:absolute;width:18px;height:18px;background:radial-gradient(circle,rgba(251,191,36,0.5),rgba(217,119,6,0.3),transparent);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);animation:egg-pulse 1.2s ease-in-out infinite;"></div>
          <!-- Tiny paw print hints -->
          <div style="position:absolute;width:6px;height:5px;background:rgba(120,53,15,0.12);border-radius:50%;top:22%;left:62%;"></div>
          <div style="position:absolute;width:2px;height:2px;background:rgba(120,53,15,0.1);border-radius:50%;top:18%;left:58%;"></div>
          <div style="position:absolute;width:2px;height:2px;background:rgba(120,53,15,0.1);border-radius:50%;top:18%;left:66%;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <!-- Floating fur wisps -->
        <div style="position:absolute;width:8px;height:3px;background:linear-gradient(to right,transparent,rgba(217,119,6,0.3),transparent);border-radius:50%;top:-5px;left:40%;transform:rotate(-10deg);animation:egg-float 2.5s ease-in-out infinite;"></div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(180,83,9,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(180,83,9,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(180,83,9,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(180,83,9,0.7));"></div>
      </div>
    `,
    // Prehistoric - ground base, fossils, dust, ancient feel
    prehistoric:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Ancient dust particles -->
        <div style="position:absolute;width:3px;height:3px;background:rgba(217,119,6,0.5);border-radius:50%;top:-8px;left:35%;animation:egg-float 3s ease-in-out infinite;"></div>
        <div style="position:absolute;width:2px;height:2px;background:rgba(217,119,6,0.4);border-radius:50%;top:-5px;right:25%;animation:egg-float 3.5s ease-in-out infinite 0.5s;"></div>
        <div style="position:absolute;width:2px;height:2px;background:rgba(180,83,9,0.35);border-radius:50%;top:5px;left:0;animation:egg-float 4s ease-in-out infinite 1s;"></div>
        <!-- Earth glow -->
        <div style="position:absolute;width:88px;height:88px;top:1px;left:1px;background:radial-gradient(circle,rgba(180,83,9,0.12),transparent 55%);border-radius:50%;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(180,83,9,0.85), rgba(120,53,15,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(180,83,9,0.3),0 0 0 9px rgba(120,53,15,0.2),0 4px 12px rgba(92,45,9,0.4);">
          <!-- Fossil imprint patterns -->
          <div style="position:absolute;width:12px;height:6px;border:1.5px solid rgba(161,98,7,0.25);border-radius:50%;top:52%;left:50%;transform:translateX(-50%);"></div>
          <div style="position:absolute;width:6px;height:10px;border-left:1.5px solid rgba(161,98,7,0.2);border-bottom:1.5px solid rgba(161,98,7,0.15);top:30%;left:62%;border-radius:0 0 0 50%;"></div>
          <div style="position:absolute;width:8px;height:5px;border:1px solid rgba(161,98,7,0.18);border-radius:50%;top:65%;left:28%;"></div>
          <!-- Ancient creature movement -->
          <div style="position:absolute;width:14px;height:18px;background:radial-gradient(ellipse,rgba(255,255,255,0.15),transparent);border-radius:50%;top:45%;left:50%;transform:translate(-50%,-50%);animation:wiggle 3s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(120,53,15,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(120,53,15,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(120,53,15,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(120,53,15,0.7));"></div>
      </div>
    `,
    // Alien - energy tendrils, circuitry, pulsing glow, tech feel
    alien:`
      <div class="bl-creature" style="animation:bl-float 2.5s ease-in-out infinite;">
        <!-- Energy tendrils reaching out -->
        <div style="position:absolute;width:4px;height:18px;background:linear-gradient(to top,rgba(34,211,238,0.5),transparent);border-radius:50%;top:-12px;left:40%;filter:blur(1px);animation:egg-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:3px;height:14px;background:linear-gradient(to top,rgba(168,85,247,0.4),transparent);border-radius:50%;top:-8px;right:30%;filter:blur(1px);animation:egg-float 2.5s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:3px;height:12px;background:linear-gradient(to top,rgba(34,197,94,0.35),transparent);border-radius:50%;top:-5px;left:20%;filter:blur(1px);animation:egg-float 3s ease-in-out infinite 0.6s;"></div>
        <!-- Multi-layer alien aura -->
        <div style="position:absolute;width:100px;height:100px;top:-5px;left:-5px;background:radial-gradient(circle,rgba(34,211,238,0.2),rgba(168,85,247,0.1),transparent 60%);border-radius:50%;animation:pulse-grow 2s ease-in-out infinite;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(192,132,252,0.85), rgba(168,85,247,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(192,132,252,0.4),0 0 15px rgba(34,211,238,0.5),0 0 25px rgba(168,85,247,0.3),0 4px 12px rgba(124,58,237,0.4);">
          <!-- Circuitry patterns -->
          <div style="position:absolute;width:1.5px;height:18px;background:linear-gradient(to bottom,transparent,rgba(34,211,238,0.5),transparent);top:20%;left:65%;"></div>
          <div style="position:absolute;width:1.5px;height:14px;background:linear-gradient(to bottom,transparent,rgba(34,211,238,0.4),transparent);top:50%;left:25%;"></div>
          <div style="position:absolute;width:15px;height:1.5px;background:linear-gradient(to right,transparent,rgba(34,211,238,0.45),transparent);top:55%;left:35%;"></div>
          <div style="position:absolute;width:10px;height:1.5px;background:linear-gradient(to right,transparent,rgba(168,85,247,0.4),transparent);top:35%;left:55%;"></div>
          <!-- Energy nodes -->
          <div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle,#22d3ee,rgba(34,211,238,0.5),transparent);border-radius:50%;top:20%;left:63%;animation:alien-glow 1.5s ease-in-out infinite;"></div>
          <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle,#a78bfa,rgba(168,85,247,0.5),transparent);border-radius:50%;top:62%;left:28%;animation:alien-glow 2s ease-in-out infinite 0.4s;"></div>
          <div style="position:absolute;width:4px;height:4px;background:radial-gradient(circle,#4ade80,rgba(34,197,94,0.5),transparent);border-radius:50%;top:45%;left:72%;animation:alien-glow 1.8s ease-in-out infinite 0.8s;"></div>
          <!-- Internal alien form -->
          <div style="position:absolute;width:14px;height:20px;background:radial-gradient(ellipse,rgba(34,211,238,0.15),transparent);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;top:42%;left:42%;animation:wiggle 2s ease-in-out infinite;"></div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(168,85,247,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(168,85,247,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(34,197,94,0.7));"></div>
      </div>
    `,
    // Mystical - swirling aura, moon/stars, magic particles
    mystical:`
      <div class="bl-creature" style="animation:egg-float 3s ease-in-out infinite;">
        <!-- Mystical aura ring -->
        <div style="position:absolute;width:105px;height:105px;top:-7px;left:-7px;background:radial-gradient(circle,rgba(139,92,246,0.2),rgba(99,102,241,0.1),transparent 60%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <!-- Swirling energy ring -->
        <div style="position:absolute;width:85px;height:85px;top:3px;left:3px;border:1.5px dashed rgba(139,92,246,0.25);border-radius:50%;animation:spin 10s linear infinite;"></div>
        <div class="bl-body" style="background:radial-gradient(circle at 40% 35%, rgba(255,255,255,0.95), rgba(167,139,250,0.85), rgba(139,92,246,0.9));box-shadow:0 0 0 3px rgba(255,255,255,0.4),0 0 0 6px rgba(167,139,250,0.4),0 0 20px rgba(139,92,246,0.5),0 0 35px rgba(99,102,241,0.3),0 4px 12px rgba(109,40,217,0.4);">
          <!-- Animated swirl patterns -->
          <div style="position:absolute;width:28px;height:28px;border:2px solid rgba(255,255,255,0.3);border-radius:50%;top:20%;left:25%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-30deg);animation:spin 5s linear infinite reverse;"></div>
          <div style="position:absolute;width:18px;height:18px;border:1.5px solid rgba(255,255,255,0.25);border-radius:50%;top:38%;left:42%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-50deg);animation:spin 4s linear infinite;"></div>
          <div style="position:absolute;width:10px;height:10px;border:1px solid rgba(255,255,255,0.2);border-radius:50%;top:50%;left:55%;border-right-color:transparent;border-bottom-color:transparent;transform:rotate(-70deg);animation:spin 3s linear infinite reverse;"></div>
          <!-- Magic sparkles -->
          <div style="position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;top:18%;left:68%;box-shadow:0 0 5px #fff,0 0 10px #a78bfa,0 0 15px rgba(139,92,246,0.5);animation:sparkle-twinkle 1.5s ease-in-out infinite;"></div>
          <div style="position:absolute;width:5px;height:5px;background:#fff;border-radius:50%;top:58%;left:22%;box-shadow:0 0 4px #fff,0 0 8px #8b5cf6;animation:sparkle-twinkle 1.8s ease-in-out infinite 0.3s;"></div>
          <div style="position:absolute;width:4px;height:4px;background:#fff;border-radius:50%;top:72%;left:62%;box-shadow:0 0 4px #fff,0 0 6px #c4b5fd;animation:sparkle-twinkle 2s ease-in-out infinite 0.6s;"></div>
          <!-- Moon symbol -->
          <div style="position:absolute;top:30%;left:48%;font-size:10px;opacity:0.5;animation:sparkle-twinkle 3s ease-in-out infinite;">🌙</div>
          <div class="bl-eyes">
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
            <div class="bl-eye"><div class="bl-eye-shine"></div></div>
          </div>
        </div>
        <!-- Floating mystical particles -->
        <div style="position:absolute;width:6px;height:6px;background:#e9d5ff;border-radius:50%;top:-10px;left:40%;box-shadow:0 0 8px #a78bfa;animation:egg-float 2s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:5px;background:#c4b5fd;border-radius:50%;top:-5px;right:18%;box-shadow:0 0 6px #8b5cf6;animation:egg-float 2.5s ease-in-out infinite 0.4s;"></div>
        <div style="position:absolute;width:4px;height:4px;background:#ddd6fe;border-radius:50%;top:5px;left:0;box-shadow:0 0 5px #7c3aed;animation:egg-float 3s ease-in-out infinite 0.8s;"></div>
        <!-- Tiny star -->
        <div style="position:absolute;top:0;right:5%;font-size:8px;opacity:0.4;animation:sparkle-twinkle 2.5s ease-in-out infinite;">⭐</div>
        <div class="bl-arm bl-arm-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(139,92,246,0.7));"></div>
        <div class="bl-arm bl-arm-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(139,92,246,0.7));"></div>
        <div class="bl-leg bl-leg-left" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(99,102,241,0.7));"></div>
        <div class="bl-leg bl-leg-right" style="background:radial-gradient(ellipse at center,rgba(255,255,255,0.9),rgba(99,102,241,0.7));"></div>
      </div>
    `
  };

  const design = blobDesigns[category]||blobDesigns.birds;
  const shadowHTML = `<div class="blob-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}

function renderBaby(categoryKey){
  const category=categoryKey||S.creatureCategory||'birds';

  // Category-specific baby designs - CUTE creatures (not geometric!)
  // Scaled up to ~115px to be noticeably larger than blob (90px)
  const babyDesigns={
    birds:`
      <div style="position:relative;width:115px;height:115px;display:inline-block;animation:bounce-slow 2s ease-in-out infinite;">
        <!-- Round fluffy body -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:82px;height:82px;background:radial-gradient(ellipse at 35% 30%,#fff9c4 0%,#ffeb3b 40%,#ffc107 100%);border-radius:50%;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.6),inset -3px -3px 10px rgba(255,152,0,0.3);">
          <div style="position:absolute;width:20px;height:16px;background:rgba(255,255,255,0.5);border-radius:50%;top:13px;left:16px;filter:blur(3px);"></div>
        </div>
        <!-- Big cute eyes -->
        <div style="position:absolute;left:50%;top:45%;transform:translateX(-50%);display:flex;gap:14px;">
          <div style="width:20px;height:23px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:4px;left:5px;width:7px;height:7px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:20px;height:23px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:4px;left:5px;width:7px;height:7px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Tiny beak -->
        <div style="position:absolute;left:50%;top:62%;transform:translateX(-50%);width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:10px solid #f97316;"></div>
        <!-- Tiny wing hints -->
        <div style="position:absolute;left:13px;top:50%;transform:translateY(-50%);width:10px;height:13px;background:radial-gradient(ellipse at 40% 30%,#ffc107,#f59e0b);border-radius:50%;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
        <div style="position:absolute;right:13px;top:50%;transform:translateY(-50%);width:10px;height:13px;background:radial-gradient(ellipse at 40% 30%,#ffc107,#f59e0b);border-radius:50%;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
      </div>
    `,
    aquatic:`
      <div style="position:relative;width:115px;height:100px;display:inline-block;animation:wiggle 2.5s ease-in-out infinite;">
        <!-- Cute fish body -->
        <div style="position:absolute;left:24px;top:50%;transform:translateY(-50%);width:66px;height:46px;background:radial-gradient(ellipse at 35% 30%,#93c5fd 0%,#3b82f6 50%,#1d4ed8 100%);border-radius:50% 40% 40% 50%;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.5),inset -3px -3px 8px rgba(30,64,175,0.3);">
          <div style="position:absolute;width:16px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:7px;left:10px;filter:blur(3px);"></div>
        </div>
        <!-- Tiny fins -->
        <div style="position:absolute;left:20px;top:50%;transform:translateY(-50%);width:13px;height:20px;background:radial-gradient(ellipse at 40% 40%,#60a5fa,#3b82f6);border-radius:50% 0 0 50%;animation:wiggle 1.5s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.3);"></div>
        <div style="position:absolute;right:13px;top:50%;transform:translateY(-50%);width:20px;height:26px;background:radial-gradient(ellipse at 30% 40%,#60a5fa,#2563eb);clip-path:polygon(0 50%,100% 0,100% 100%);animation:wiggle 1.5s ease-in-out infinite;"></div>
        <!-- Big cute eye -->
        <div style="position:absolute;left:36px;top:50%;transform:translateY(-50%);width:16px;height:16px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
          <div style="position:absolute;top:3px;left:5px;width:5px;height:5px;background:white;border-radius:50%;"></div>
        </div>
        <!-- Tiny bubble -->
        <div style="position:absolute;right:8px;top:30%;font-size:18px;animation:bounce-slow 2s ease-in-out infinite;">🫧</div>
      </div>
    `,
    reptiles:`
      <div style="position:relative;width:115px;height:100px;display:inline-block;animation:wiggle 3s ease-in-out infinite;">
        <!-- Small lizard body -->
        <div style="position:absolute;left:24px;top:50%;transform:translateY(-50%);width:66px;height:40px;background:radial-gradient(ellipse at 35% 30%,#86efac 0%,#22c55e 50%,#16a34a 100%);border-radius:40%;box-shadow:inset 5px 5px 11px rgba(255,255,255,0.4),inset -3px -3px 8px rgba(21,128,61,0.3);">
          <div style="position:absolute;width:16px;height:10px;background:rgba(255,255,255,0.4);border-radius:50%;top:5px;left:10px;filter:blur(3px);"></div>
        </div>
        <!-- Tiny tail -->
        <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:30px;height:16px;background:radial-gradient(ellipse at 40% 40%,#4ade80,#22c55e);border-radius:50% 0 0 50%;animation:wiggle 1.5s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.3);"></div>
        <!-- Big cute eyes -->
        <div style="position:absolute;left:69px;top:50%;transform:translateY(-50%);width:15px;height:15px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
          <div style="position:absolute;top:3px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
        </div>
        <!-- Tiny legs -->
        <div style="position:absolute;left:36px;bottom:13px;width:10px;height:13px;background:radial-gradient(ellipse,#4ade80,#22c55e);border-radius:40%;animation:wiggle 2.3s ease-in-out infinite;"></div>
        <div style="position:absolute;right:30px;bottom:13px;width:10px;height:13px;background:radial-gradient(ellipse,#4ade80,#22c55e);border-radius:40%;animation:wiggle 2.6s ease-in-out infinite;"></div>
      </div>
    `,
    insects:`
      <div style="position:relative;width:115px;height:107px;display:inline-block;animation:wiggle 2s ease-in-out infinite;">
        <!-- Cute caterpillar segments -->
        <div style="position:absolute;left:50%;top:35%;transform:translateX(-50%);width:53px;height:33px;background:radial-gradient(ellipse at 35% 30%,#bef264 0%,#84cc16 50%,#65a30d 100%);border-radius:50%;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.5),inset -2px -2px 7px rgba(77,124,15,0.3);">
          <div style="position:absolute;width:13px;height:8px;background:rgba(255,255,255,0.4);border-radius:50%;top:5px;left:10px;filter:blur(2px);"></div>
        </div>
        <div style="position:absolute;left:50%;top:52%;transform:translateX(-50%);width:46px;height:30px;background:radial-gradient(ellipse at 35% 30%,#bef264 0%,#84cc16 50%,#65a30d 100%);border-radius:50%;box-shadow:inset 3px 3px 7px rgba(255,255,255,0.45),inset -2px -2px 5px rgba(77,124,15,0.25);"></div>
        <div style="position:absolute;left:50%;top:67%;transform:translateX(-50%);width:40px;height:26px;background:radial-gradient(ellipse at 35% 30%,#bef264 0%,#84cc16 50%,#65a30d 100%);border-radius:50%;box-shadow:inset 3px 3px 7px rgba(255,255,255,0.4),inset -2px -2px 5px rgba(77,124,15,0.2);"></div>
        <!-- Cute antennae -->
        <div style="position:absolute;left:35%;top:22%;width:2.5px;height:20px;background:rgba(0,0,0,0.7);border-radius:3px;transform:rotate(-20deg);animation:wiggle 1.5s ease-in-out infinite;"></div>
        <div style="position:absolute;right:35%;top:22%;width:2.5px;height:20px;background:rgba(0,0,0,0.7);border-radius:3px;transform:rotate(20deg);animation:wiggle 1.5s ease-in-out infinite;"></div>
        <div style="position:absolute;left:35%;top:17%;width:7px;height:7px;background:radial-gradient(circle,#374151,#000);border-radius:50%;"></div>
        <div style="position:absolute;right:35%;top:17%;width:7px;height:7px;background:radial-gradient(circle,#374151,#000);border-radius:50%;"></div>
        <!-- Big cute eyes -->
        <div style="position:absolute;left:50%;top:37%;transform:translateX(-50%);display:flex;gap:10px;">
          <div style="width:13px;height:13px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:2px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:13px;height:13px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:2px;left:3px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
        </div>
      </div>
    `,
    mammals:`
      <div style="position:relative;width:115px;height:115px;display:inline-block;animation:bounce-slow 2.2s ease-in-out infinite;">
        <!-- Fluffy round body -->
        <div style="position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:79px;height:74px;background:radial-gradient(ellipse at 35% 30%,#fbbf24 0%,#d97706 50%,#b45309 100%);border-radius:50%;box-shadow:inset 7px 7px 16px rgba(254,243,199,0.5),inset -5px -5px 13px rgba(146,64,14,0.3);">
          <div style="position:absolute;width:23px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:13px;filter:blur(3px);"></div>
        </div>
        <!-- Big fluffy ears -->
        <div style="position:absolute;left:22%;top:22%;width:23px;height:30px;background:radial-gradient(ellipse at 40% 30%,#fbbf24,#d97706);border-radius:50% 50% 20% 20%;box-shadow:inset 3px 3px 7px rgba(254,243,199,0.4),inset 0 0 10px rgba(255,182,193,0.4);animation:wiggle 2.5s ease-in-out infinite;"></div>
        <div style="position:absolute;right:22%;top:22%;width:23px;height:30px;background:radial-gradient(ellipse at 60% 30%,#fbbf24,#d97706);border-radius:50% 50% 20% 20%;box-shadow:inset -3px 3px 7px rgba(254,243,199,0.4),inset 0 0 10px rgba(255,182,193,0.4);animation:wiggle 2.5s ease-in-out infinite;"></div>
        <!-- HUGE cute eyes -->
        <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);display:flex;gap:16px;">
          <div style="width:23px;height:23px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:5px;left:7px;width:8px;height:8px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:23px;height:23px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:5px;left:7px;width:8px;height:8px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Tiny nose -->
        <div style="position:absolute;left:50%;top:66%;transform:translateX(-50%);width:10px;height:8px;background:radial-gradient(circle at 40% 35%,#57534e,#1c1917);border-radius:50%;"></div>
        <!-- Tiny paws -->
        <div style="position:absolute;left:28%;bottom:15%;width:13px;height:15px;background:radial-gradient(ellipse,#fbbf24,#d97706);border-radius:50% 50% 40% 40%;animation:wiggle 2.1s ease-in-out infinite;box-shadow:inset 2px 2px 3px rgba(254,243,199,0.4);"></div>
        <div style="position:absolute;right:28%;bottom:15%;width:13px;height:15px;background:radial-gradient(ellipse,#fbbf24,#d97706);border-radius:50% 50% 40% 40%;animation:wiggle 2.4s ease-in-out infinite;box-shadow:inset 2px 2px 3px rgba(254,243,199,0.4);"></div>
      </div>
    `,
    prehistoric:`
      <div style="position:relative;width:115px;height:115px;display:inline-block;animation:bounce-slow 2s ease-in-out infinite;">
        <!-- Baby dino body (chubby) with 3D -->
        <div style="position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:82px;height:66px;background:radial-gradient(ellipse at 35% 30%,#a16207 0%,#78350f 50%,#451a03 100%);border-radius:45%;box-shadow:inset 7px 7px 16px rgba(180,130,80,0.4),inset -5px -5px 13px rgba(69,26,3,0.3);">
          <div style="position:absolute;width:23px;height:13px;background:rgba(255,255,255,0.35);border-radius:50%;top:8px;left:13px;filter:blur(3px);"></div>
        </div>
        <!-- Tiny bone plates with 3D -->
        <div style="position:absolute;left:30%;top:28%;width:10px;height:15px;background:radial-gradient(ellipse at 40% 30%,#fef3c7,#ddc8b4,#a1887f);border-radius:50% 50% 0 0;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 3px rgba(255,255,255,0.5);"></div>
        <div style="position:absolute;left:50%;top:26%;transform:translateX(-50%);width:10px;height:16px;background:radial-gradient(ellipse at 40% 30%,#fef3c7,#ddc8b4,#a1887f);border-radius:50% 50% 0 0;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 3px rgba(255,255,255,0.5);"></div>
        <div style="position:absolute;right:30%;top:28%;width:10px;height:15px;background:radial-gradient(ellipse at 40% 30%,#fef3c7,#ddc8b4,#a1887f);border-radius:50% 50% 0 0;animation:wiggle 2s ease-in-out infinite;box-shadow:inset 2px 2px 3px rgba(255,255,255,0.5);"></div>
        <!-- Big cute dino eyes -->
        <div style="position:absolute;left:50%;top:50%;transform:translateX(-50%);display:flex;gap:16px;">
          <div style="width:16px;height:16px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:3px;left:5px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
          <div style="width:16px;height:16px;background:radial-gradient(circle at 30% 30%,#374151,#000);border-radius:50%;position:relative;animation:blink 3s infinite;">
            <div style="position:absolute;top:3px;left:5px;width:5px;height:5px;background:white;border-radius:50%;"></div>
          </div>
        </div>
        <!-- Chubby legs with 3D -->
        <div style="position:absolute;left:25%;bottom:12%;width:16px;height:23px;background:radial-gradient(ellipse at 40% 35%,#a16207,#78350f);border-radius:30%;animation:wiggle 2.3s ease-in-out infinite;box-shadow:inset 2px 2px 5px rgba(180,130,80,0.4);"></div>
        <div style="position:absolute;right:25%;bottom:12%;width:16px;height:23px;background:radial-gradient(ellipse at 60% 35%,#a16207,#78350f);border-radius:30%;animation:wiggle 2.7s ease-in-out infinite;box-shadow:inset -2px 2px 5px rgba(180,130,80,0.4);"></div>
      </div>
    `,
    alien:`
      <div style="position:relative;width:115px;height:124px;display:inline-block;animation:blob-float 2s ease-in-out infinite;">
        <!-- Big alien head/body with 3D -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:79px;height:86px;background:radial-gradient(ellipse at 35% 30%,#c4b5fd 0%,#a855f7 35%,#22c55e 70%,#15803d 100%);border-radius:50% 50% 45% 45%;box-shadow:0 0 25px rgba(34,197,94,0.3),inset 7px 7px 20px rgba(233,213,255,0.4),inset -5px -5px 13px rgba(21,128,61,0.3);">
          <div style="position:absolute;width:23px;height:16px;background:rgba(255,255,255,0.35);border-radius:50%;top:13px;left:13px;filter:blur(3px);"></div>
        </div>
        <!-- HUGE alien eyes with 3D -->
        <div style="position:absolute;left:50%;top:46%;transform:translateX(-50%);display:flex;gap:10px;">
          <div style="width:26px;height:33px;background:radial-gradient(ellipse at 40% 35%,#1f2937,#000);border-radius:50%;position:relative;animation:blink 4s infinite;box-shadow:inset 3px 3px 7px rgba(255,255,255,0.1);">
            <div style="position:absolute;top:8px;left:8px;width:8px;height:8px;background:radial-gradient(circle,#4ade80,#22c55e);border-radius:50%;box-shadow:0 0 7px rgba(34,197,94,0.6);"></div>
          </div>
          <div style="width:26px;height:33px;background:radial-gradient(ellipse at 40% 35%,#1f2937,#000);border-radius:50%;position:relative;animation:blink 4s infinite;box-shadow:inset 3px 3px 7px rgba(255,255,255,0.1);">
            <div style="position:absolute;top:8px;left:8px;width:8px;height:8px;background:radial-gradient(circle,#4ade80,#22c55e);border-radius:50%;box-shadow:0 0 7px rgba(34,197,94,0.6);"></div>
          </div>
        </div>
        <!-- Third eye (small) with 3D -->
        <div style="position:absolute;left:50%;top:30%;transform:translateX(-50%);width:13px;height:13px;background:radial-gradient(circle at 35% 35%,#86efac,#22c55e);border-radius:50%;border:2.5px solid rgba(168,85,247,0.7);animation:glow 2s ease-in-out infinite;box-shadow:0 0 10px rgba(34,197,94,0.5);"></div>
        <!-- Tiny antennae with 3D -->
        <div style="position:absolute;left:32%;top:20%;width:3px;height:16px;background:linear-gradient(to bottom,#c4b5fd,#a855f7);border-radius:3px;animation:wiggle 2s ease-in-out infinite;">
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:7px;height:7px;background:radial-gradient(circle,#86efac,#22c55e);border-radius:50%;box-shadow:0 0 5px rgba(34,197,94,0.5);"></div>
        </div>
        <div style="position:absolute;right:32%;top:20%;width:3px;height:16px;background:linear-gradient(to bottom,#c4b5fd,#a855f7);border-radius:3px;animation:wiggle 2s ease-in-out infinite;">
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:7px;height:7px;background:radial-gradient(circle,#86efac,#22c55e);border-radius:50%;box-shadow:0 0 5px rgba(34,197,94,0.5);"></div>
        </div>
        <!-- Wiggling tentacle appendages with 3D -->
        <div style="position:absolute;left:28%;bottom:8%;width:7px;height:23px;background:linear-gradient(to bottom,#c4b5fd,#a855f7);border-radius:50%;animation:wiggle 1.8s ease-in-out infinite;box-shadow:inset 2px 0 3px rgba(255,255,255,0.3);"></div>
        <div style="position:absolute;left:42%;bottom:6%;width:7px;height:26px;background:linear-gradient(to bottom,#86efac,#22c55e);border-radius:50%;animation:wiggle 2.2s ease-in-out infinite;box-shadow:inset 2px 0 3px rgba(255,255,255,0.3);"></div>
        <div style="position:absolute;right:42%;bottom:6%;width:7px;height:26px;background:linear-gradient(to bottom,#86efac,#22c55e);border-radius:50%;animation:wiggle 2.4s ease-in-out infinite;box-shadow:inset -2px 0 3px rgba(255,255,255,0.3);"></div>
        <div style="position:absolute;right:28%;bottom:8%;width:7px;height:23px;background:linear-gradient(to bottom,#c4b5fd,#a855f7);border-radius:50%;animation:wiggle 2s ease-in-out infinite;box-shadow:inset -2px 0 3px rgba(255,255,255,0.3);"></div>
      </div>
    `,
    mystical:`
      <div style="position:relative;width:115px;height:115px;display:inline-block;animation:glow 3s ease-in-out infinite;">
        <!-- Glowing mystical orb with 3D -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:79px;height:79px;background:radial-gradient(ellipse at 35% 30%,#fff 0%,#e9d5ff 20%,#a78bfa 50%,#7c3aed 80%,#5b21b6 100%);border-radius:50%;box-shadow:0 0 26px rgba(139,92,246,0.6),inset 7px 7px 20px rgba(255,255,255,0.6),inset -5px -5px 13px rgba(91,33,182,0.3);">
          <div style="position:absolute;width:23px;height:16px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:13px;filter:blur(3px);"></div>
        </div>
        <!-- Glowing aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:99px;height:99px;background:radial-gradient(circle,rgba(139,92,246,0.2),transparent);border-radius:50%;animation:pulse-grow 2s ease-in-out infinite;"></div>
        <!-- Ethereal wisps (wiggling tendrils) with 3D -->
        <div style="position:absolute;left:18%;top:48%;width:13px;height:30px;background:linear-gradient(to bottom,#c4b5fd,#a78bfa);border-radius:50%;transform:rotate(-25deg);animation:wiggle 2.4s ease-in-out infinite;box-shadow:inset 2px 0 5px rgba(255,255,255,0.4);"></div>
        <div style="position:absolute;right:18%;top:48%;width:13px;height:30px;background:linear-gradient(to bottom,#93c5fd,#3b82f6);border-radius:50%;transform:rotate(25deg);animation:wiggle 2.8s ease-in-out infinite;box-shadow:inset -2px 0 5px rgba(255,255,255,0.4);"></div>
        <div style="position:absolute;left:50%;bottom:12%;transform:translateX(-50%);width:16px;height:23px;background:linear-gradient(to bottom,rgba(255,255,255,0.6),#c4b5fd);border-radius:50%;animation:wiggle 2.6s ease-in-out infinite;box-shadow:inset 0 2px 5px rgba(255,255,255,0.5);"></div>
        <!-- Tiny moon symbol -->
        <div style="position:absolute;left:50%;top:42%;transform:translateX(-50%);font-size:24px;animation:wiggle 3s ease-in-out infinite;">🌙</div>
        <!-- Cute mystical eyes with 3D -->
        <div style="position:absolute;left:50%;top:58%;transform:translateX(-50%);display:flex;gap:13px;">
          <div style="width:16px;height:16px;background:radial-gradient(circle at 35% 35%,#fff 0%,#e9d5ff 40%,#8b5cf6 100%);border-radius:50%;box-shadow:0 0 10px rgba(139,92,246,0.8);animation:blink 3s infinite;"></div>
          <div style="width:16px;height:16px;background:radial-gradient(circle at 35% 35%,#fff 0%,#e9d5ff 40%,#8b5cf6 100%);border-radius:50%;box-shadow:0 0 10px rgba(139,92,246,0.8);animation:blink 3s infinite;"></div>
        </div>
        <!-- Tiny stars -->
        <div style="position:absolute;left:15%;top:30%;font-size:16px;animation:sparkle 1.5s ease-in-out infinite;">⭐</div>
        <div style="position:absolute;right:15%;top:50%;font-size:13px;animation:sparkle 2s ease-in-out infinite;">✨</div>
      </div>
    `
  };

  return babyDesigns[category]||babyDesigns.birds;
}

