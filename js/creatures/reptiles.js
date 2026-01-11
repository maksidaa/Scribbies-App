function renderAdultReptile(variantIndex){
  const variant=variantIndex||0;

  const reptileDesigns={
    // ===== GECKO - Reptiles Variant 0 =====
    // Source: gecko_buddy.html (scaled 0.7x to fit 240x280 canvas, 3D effects added)
    0:`
      <div style="position:relative;width:240px;height:280px;">
        <!-- Tail (SVG curved) - right side, behind body -->
        <div style="position:absolute;right:5px;top:75px;width:112px;height:91px;z-index:5;transform-origin:left center;animation:gecko-tail-sway 3s ease-in-out infinite;">
          <svg viewBox="0 0 160 130" style="width:100%;height:100%;overflow:visible;">
            <defs>
              <linearGradient id="geckoTailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#b8e06d;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#8cc63f;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#65a30d;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M 0,100 Q 70,100 130,30 Q 140,15 130,5 Q 100,30 0,60 Z" fill="url(#geckoTailGrad)" stroke="#3f6212" stroke-width="4" stroke-linejoin="round"/>
          </svg>
          <div style="position:absolute;top:42px;left:28px;width:7px;height:5px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:28px;left:56px;width:5px;height:4px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
        </div>

        <!-- Back right leg (behind body, darker) -->
        <div style="position:absolute;top:135px;left:152px;width:25px;height:40px;background:transparent;z-index:10;transform-origin:top center;--leg-rest:10deg;--leg-run1:-25deg;--leg-run2:40deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #9dd64a 0%, #7ab332 50%, #5c8a24 100%);border:3px solid #3f6212;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(180,220,100,0.4), inset -2px -2px 4px rgba(60,100,30,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #9dd64a, #7ab332);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #9dd64a, #7ab332);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #9dd64a, #7ab332);border:2px solid #3f6212;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Body -->
        <div style="position:absolute;top:107px;left:70px;width:98px;height:60px;background:radial-gradient(ellipse at 35% 30%, #e8ffb8 0%, #c0ee6d 25%, #8cc63f 55%, #65a30d 100%);border:3px solid #3f6212;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;z-index:20;animation:gecko-breathe 3s infinite;box-shadow:inset 8px 8px 20px rgba(230,255,180,0.7), inset -5px -5px 14px rgba(50,80,15,0.4);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:32px;height:22px;background:rgba(255,255,255,0.65);border-radius:50%;top:5px;left:10px;filter:blur(4px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:16px;right:18px;filter:blur(2px);"></div>
          <!-- Belly with gradient -->
          <div style="position:absolute;bottom:3px;left:14px;width:70px;height:24px;background:radial-gradient(ellipse at 50% 40%, #fffff5 0%, #fbfde3 60%, #f0f5d0 100%);border-radius:50%;opacity:0.95;"></div>
          <!-- Scale spots -->
          <div style="position:absolute;top:10px;left:21px;width:8px;height:7px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:18px;left:42px;width:7px;height:5px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:7px;left:63px;width:5px;height:4px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
        </div>

        <!-- Head wrapper (expanded to contain eyes and tongue without negative positions) -->
        <div style="position:absolute;top:55px;left:12px;width:132px;height:80px;z-index:30;transform:rotate(-10deg);animation:gecko-breathe 3s infinite;">
          <!-- Head shape with 3D gradient -->
          <div style="position:absolute;top:0;left:12px;width:112px;height:80px;background:radial-gradient(ellipse at 35% 30%, #e8ffb8 0%, #c0ee6d 25%, #8cc63f 55%, #65a30d 100%);border:3px solid #3f6212;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;box-shadow:inset 8px 8px 20px rgba(230,255,180,0.7), inset -5px -5px 14px rgba(50,80,15,0.4);">
            <!-- Head highlight spot (primary) -->
            <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:5px;left:14px;filter:blur(5px);"></div>
            <!-- Head highlight spot (secondary) -->
            <div style="position:absolute;width:18px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:18px;right:22px;filter:blur(2px);"></div>
            <!-- Belly/chin with gradient -->
            <div style="position:absolute;bottom:3px;left:14px;width:84px;height:28px;background:radial-gradient(ellipse at 50% 40%, #fffff5 0%, #fbfde3 60%, #f0f5d0 100%);border-radius:50%;"></div>
            <!-- Nostrils -->
            <div style="position:absolute;top:45px;left:38px;width:3px;height:2px;background:#3f6212;border-radius:50%;"></div>
            <div style="position:absolute;top:45px;left:70px;width:3px;height:2px;background:#3f6212;border-radius:50%;"></div>
            <!-- Mouth interior (dark, visible when open) -->
            <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%) scaleY(0);width:30px;height:12px;background:radial-gradient(ellipse at 50% 30%, #5c3d2e, #3d2820);border-radius:50%;opacity:0;animation:gecko-mouth-inside 10s ease-in-out infinite;"></div>
            <!-- Mouth line (animates open) -->
            <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%) rotate(-2deg);width:49px;height:17px;border-bottom:3px solid #3f6212;border-radius:50%;transform-origin:top center;animation:gecko-mouth-open 10s ease-in-out infinite;"></div>
            <!-- Head spot -->
            <div style="position:absolute;top:7px;left:52px;width:5px;height:4px;background:#65a30d;border-radius:50%;opacity:0.7;"></div>
          </div>

          <!-- Right eye with 3D effect -->
          <div style="position:absolute;top:7px;right:0;width:40px;height:40px;transform:rotate(8deg);z-index:35;">
            <div style="width:100%;height:100%;background:radial-gradient(ellipse at 35% 30%, #f97316 0%, #ea580c 50%, #c2410c 100%);border:3px solid #3f2e18;border-radius:50%;overflow:hidden;position:relative;animation:gecko-blink 4s infinite;box-shadow:inset 3px 3px 8px rgba(255,180,100,0.5), inset -2px -2px 6px rgba(150,50,10,0.3);">
              <!-- Eye highlight -->
              <div style="position:absolute;width:10px;height:8px;background:rgba(255,255,255,0.3);border-radius:50%;top:4px;left:6px;filter:blur(2px);"></div>
              <div style="position:absolute;width:24px;height:24px;background:radial-gradient(circle at 30% 30%, #3d2814, #2a1a10);border-radius:50%;top:8px;left:7px;animation:gecko-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:3px;left:3px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Left eye with 3D effect -->
          <div style="position:absolute;top:7px;left:8px;width:40px;height:40px;transform:rotate(-8deg);z-index:35;">
            <div style="width:100%;height:100%;background:radial-gradient(ellipse at 35% 30%, #f97316 0%, #ea580c 50%, #c2410c 100%);border:3px solid #3f2e18;border-radius:50%;overflow:hidden;position:relative;animation:gecko-blink 4s infinite 0.1s;box-shadow:inset 3px 3px 8px rgba(255,180,100,0.5), inset -2px -2px 6px rgba(150,50,10,0.3);">
              <!-- Eye highlight -->
              <div style="position:absolute;width:10px;height:8px;background:rgba(255,255,255,0.3);border-radius:50%;top:4px;left:6px;filter:blur(2px);"></div>
              <div style="position:absolute;width:24px;height:24px;background:radial-gradient(circle at 30% 30%, #3d2814, #2a1a10);border-radius:50%;top:8px;left:7px;animation:gecko-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:3px;left:3px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Tongue (curved SVG with gradient) - originates from inside mouth -->
          <div style="position:absolute;bottom:18px;left:20px;width:70px;height:55px;z-index:40;transform-origin:72% 100%;animation:gecko-tongue-lick 10s ease-in-out infinite;">
            <svg viewBox="0 0 70 55" style="width:100%;height:100%;overflow:visible;animation:gecko-tongue-extend 10s ease-in-out infinite;">
              <defs>
                <radialGradient id="geckoTongueGrad" cx="30%" cy="30%">
                  <stop offset="0%" style="stop-color:#ff8a9b;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ff6b81;stop-opacity:1" />
                </radialGradient>
              </defs>
              <path d="M 45,55 C 35,55 30,50 22,40 C 14,30 8,22 8,14 C 8,6 16,2 26,6 C 36,10 38,22 30,32 C 40,42 55,55 55,55 Z" fill="url(#geckoTongueGrad)" stroke="#e84057" stroke-width="1"/>
              <ellipse cx="17" cy="10" rx="18" ry="12" fill="url(#geckoTongueGrad)"/>
            </svg>
          </div>
        </div>

        <!-- Front left leg with 3D -->
        <div style="position:absolute;top:145px;left:75px;width:25px;height:40px;background:transparent;z-index:25;transform-origin:top center;--leg-rest:15deg;--leg-run1:-25deg;--leg-run2:45deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #b8e06d 0%, #8cc63f 50%, #65a30d 100%);border:3px solid #3f6212;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(200,240,120,0.4), inset -2px -2px 4px rgba(80,130,40,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Back left leg with 3D -->
        <div style="position:absolute;top:145px;left:131px;width:25px;height:40px;background:transparent;z-index:25;transform-origin:top center;--leg-rest:-10deg;--leg-run1:35deg;--leg-run2:-35deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #b8e06d 0%, #8cc63f 50%, #65a30d 100%);border:3px solid #3f6212;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(200,240,120,0.4), inset -2px -2px 4px rgba(80,130,40,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #b8e06d, #8cc63f);border:2px solid #3f6212;border-radius:50%;"></div>
          </div>
        </div>
      </div>
    `,
    // ===== FROG - Reptiles Variant 1 =====
    // Source: frog_buddy.html (scaled to 240x280, 3D effects added, fly-catching animations)
    1:`
      <div style="position:relative;width:240px;height:280px;animation:frog-hop 8s ease-in-out infinite;">
        <!-- Buzzing Fly -->
        <div style="position:absolute;top:40px;left:60px;z-index:50;animation:frog-fly-buzz 8s linear infinite;">
          <div style="position:relative;width:12px;height:10px;">
            <!-- Fly body -->
            <div style="position:absolute;width:10px;height:8px;background:radial-gradient(circle at 40% 30%, #555, #222);border-radius:50%;top:2px;left:1px;"></div>
            <!-- Fly head -->
            <div style="position:absolute;width:5px;height:5px;background:#333;border-radius:50%;top:0;left:6px;"></div>
            <!-- Fly eyes -->
            <div style="position:absolute;width:2px;height:2px;background:#c41;border-radius:50%;top:0;left:8px;"></div>
            <!-- Wings -->
            <div style="position:absolute;width:8px;height:4px;background:rgba(200,220,255,0.6);border-radius:50%;top:-1px;left:0;transform-origin:right center;animation:frog-fly-wings 0.05s linear infinite;"></div>
            <div style="position:absolute;width:8px;height:4px;background:rgba(200,220,255,0.6);border-radius:50%;top:5px;left:0;transform-origin:right center;animation:frog-fly-wings 0.05s linear infinite 0.025s;"></div>
          </div>
        </div>

        <!-- Back feet (behind body) -->
        <div style="position:absolute;top:175px;left:25px;z-index:15;animation:frog-leg-jump 8s ease-in-out infinite;">
          <div style="width:42px;height:30px;background:radial-gradient(ellipse at 35% 30%, #6ee7a0 0%, #4ade80 50%, #22c55e 100%);border:3px solid #16a34a;border-radius:50%;transform:rotate(-20deg);box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4), inset -2px -2px 4px rgba(20,120,60,0.3);"></div>
        </div>
        <div style="position:absolute;top:175px;right:25px;z-index:15;animation:frog-leg-jump 8s ease-in-out infinite;">
          <div style="width:42px;height:30px;background:radial-gradient(ellipse at 35% 30%, #6ee7a0 0%, #4ade80 50%, #22c55e 100%);border:3px solid #16a34a;border-radius:50%;transform:rotate(20deg);box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4), inset -2px -2px 4px rgba(20,120,60,0.3);"></div>
        </div>

        <!-- Body (pear-shaped) -->
        <div style="position:absolute;top:80px;left:45px;width:150px;height:130px;background:radial-gradient(ellipse at 35% 30%, #c0ffd8 0%, #7ef5a8 25%, #4ade80 55%, #16a34a 100%);border-radius:50% 50% 42% 42% / 65% 65% 38% 38%;z-index:20;box-shadow:inset 10px 10px 24px rgba(200,255,220,0.75), inset -6px -6px 16px rgba(10,80,40,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:50px;height:38px;background:rgba(255,255,255,0.7);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:26px;height:18px;background:rgba(255,255,255,0.45);border-radius:50%;top:32px;right:25px;filter:blur(3px);"></div>

          <!-- Eyes (positioned on top of body) -->
          <div style="position:absolute;top:-25px;width:100%;display:flex;justify-content:center;gap:10px;">
            <div class="s-eye" style="width:46px;height:48px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f0f0f0 70%, #e0e0e0 100%);border-radius:50%;border:4px solid #16a34a;position:relative;animation:frog-blink 4s infinite;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.8), inset -2px -2px 6px rgba(180,180,180,0.3);">
              <!-- Upper eyelid -->
              <div style="position:absolute;top:-2px;left:50%;transform:translateX(-50%);width:40px;height:14px;background:linear-gradient(to bottom, #22c55e 0%, #4ade80 100%);border-radius:50% 50% 40% 40% / 100% 100% 40% 40%;z-index:5;"></div>
              <div style="position:absolute;width:24px;height:28px;background:radial-gradient(circle at 30% 30%, #333, #1a1a1a);border-radius:50%;top:10px;left:11px;animation:frog-eye-track 8s ease-in-out infinite;">
                <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:4px;"></div>
                <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:6px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:46px;height:48px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f0f0f0 70%, #e0e0e0 100%);border-radius:50%;border:4px solid #16a34a;position:relative;animation:frog-blink 4s infinite;box-shadow:inset 2px 2px 8px rgba(255,255,255,0.8), inset -2px -2px 6px rgba(180,180,180,0.3);">
              <!-- Upper eyelid -->
              <div style="position:absolute;top:-2px;left:50%;transform:translateX(-50%);width:40px;height:14px;background:linear-gradient(to bottom, #22c55e 0%, #4ade80 100%);border-radius:50% 50% 40% 40% / 100% 100% 40% 40%;z-index:5;"></div>
              <div style="position:absolute;width:24px;height:28px;background:radial-gradient(circle at 30% 30%, #333, #1a1a1a);border-radius:50%;top:10px;left:11px;animation:frog-eye-track 8s ease-in-out infinite;">
                <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:4px;"></div>
                <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:6px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:space-around;padding:0 15px;">
            <div style="width:18px;height:10px;background:#fda4af;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            <div style="width:18px;height:10px;background:#fda4af;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          </div>

          <!-- Nostrils -->
          <div style="position:absolute;top:44px;left:50%;transform:translateX(-50%);display:flex;gap:12px;z-index:25;">
            <div style="width:4px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;transform:rotate(15deg);"></div>
            <div style="width:4px;height:2px;background:rgba(0,0,0,0.3);border-radius:2px;transform:rotate(-15deg);"></div>
          </div>

          <!-- Mouth interior (dark, visible when open) -->
          <div style="position:absolute;top:60px;left:50%;transform:translateX(-50%) scaleY(0);width:35px;height:18px;background:radial-gradient(ellipse at 50% 30%, #5c3d2e, #3d2820);border-radius:50%;opacity:0;z-index:22;animation:frog-mouth-inside 8s ease-in-out infinite;"></div>

          <!-- Mouth line (animates open) -->
          <div style="position:absolute;width:50px;height:14px;border-bottom:3.5px solid #16a34a;border-radius:0 0 25px 25px;top:55px;left:50%;transform:translateX(-50%);z-index:24;opacity:0.8;transform-origin:top center;animation:frog-mouth-open 8s ease-in-out infinite;"></div>

          <!-- Tongue (shoots out from mouth to catch fly) -->
          <div style="position:absolute;top:-25px;left:50%;transform:translateX(-50%) scaleY(0);width:14px;height:90px;z-index:21;transform-origin:bottom center;opacity:0;animation:frog-tongue-shoot 8s ease-in-out infinite;">
            <div style="width:100%;height:100%;background:linear-gradient(to top, #ff6b81, #ff8a9b);border-radius:7px 7px 50% 50%;">
              <!-- Tongue tip (sticky pad) -->
              <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:20px;height:14px;background:radial-gradient(ellipse at 50% 60%, #ff5070, #ff6b81);border-radius:50%;"></div>
            </div>
          </div>

          <!-- Vocal sac -->
          <div style="position:absolute;width:65px;height:40px;background:radial-gradient(ellipse at 40% 30%, #e0fff0 0%, #d1fae5 30%, #bbf7d0 60%, #a7f3d0 100%);border-radius:50%;bottom:10px;left:50%;transform:translateX(-50%);z-index:21;animation:frog-croak 3s ease-in-out infinite;border:2px solid rgba(0,0,0,0.05);box-shadow:inset 4px 4px 12px rgba(255,255,255,0.6), inset -2px -2px 6px rgba(100,180,140,0.2);">
            <!-- Vocal sac highlight -->
            <div style="position:absolute;width:18px;height:12px;background:rgba(255,255,255,0.45);border-radius:50%;top:6px;left:12px;filter:blur(2px);"></div>
          </div>
        </div>

        <!-- Front feet -->
        <div style="position:absolute;top:175px;left:72px;z-index:25;animation:frog-leg-jump 8s ease-in-out infinite;">
          <div style="width:38px;height:28px;background:radial-gradient(ellipse at 35% 30%, #6ee7a0 0%, #4ade80 50%, #22c55e 100%);border:3px solid #16a34a;border-radius:50%;transform:rotate(8deg);box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4), inset -2px -2px 4px rgba(20,120,60,0.3);"></div>
        </div>
        <div style="position:absolute;top:175px;right:72px;z-index:25;animation:frog-leg-jump 8s ease-in-out infinite;">
          <div style="width:38px;height:28px;background:radial-gradient(ellipse at 35% 30%, #6ee7a0 0%, #4ade80 50%, #22c55e 100%);border:3px solid #16a34a;border-radius:50%;transform:rotate(-8deg);box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4), inset -2px -2px 4px rgba(20,120,60,0.3);"></div>
        </div>
      </div>
    `,
    // ===== TURTLE - Reptiles Variant 2 =====
    // Source: turtle_buddy.html (scaled to 240x280, 3D effects added)
    2:`
      <div style="position:relative;width:240px;height:280px;animation:turtle-bounce 2.5s ease-in-out infinite;">
        <!-- Tail -->
        <div style="position:absolute;width:14px;height:25px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:3px solid #16a34a;border-radius:50% 50% 50% 50% / 20% 20% 80% 80%;bottom:60px;left:113px;z-index:5;transform-origin:top center;animation:turtle-tail-wiggle 0.8s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(200,255,220,0.4);"></div>

        <!-- Back flippers (behind shell) -->
        <div style="position:absolute;top:185px;left:65px;width:48px;height:32px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:4px solid #16a34a;border-radius:50% 50% 40% 40%;z-index:5;transform-origin:top center;animation:turtle-walk-right 0.8s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4);"></div>
        <div style="position:absolute;top:185px;right:65px;width:48px;height:32px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:4px solid #16a34a;border-radius:50% 50% 40% 40%;z-index:5;transform-origin:top center;animation:turtle-walk-left 0.8s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4);"></div>

        <!-- Shell underside -->
        <div style="position:absolute;width:154px;height:65px;background:radial-gradient(ellipse at 50% 30%, #fef9c3 0%, #fef08a 50%, #fde047 100%);border:4px solid #78350f;border-radius:40% 40% 50% 50% / 30% 30% 70% 70%;top:150px;left:43px;z-index:10;box-shadow:inset 0 -8px 10px rgba(0,0,0,0.05), inset 3px 3px 8px rgba(255,255,230,0.5);"></div>

        <!-- Shell (dome) -->
        <div style="position:absolute;width:160px;height:90px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 25%, #b45309 55%, #78350f 100%);border-radius:50% 50% 20% 20% / 100% 100% 0% 0%;top:95px;left:40px;z-index:20;border:4px solid #78350f;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(255,220,130,0.7), inset -5px -5px 14px rgba(80,40,8,0.4);">
          <!-- Shell highlight (primary) -->
          <div style="position:absolute;width:48px;height:32px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Shell highlight (secondary) -->
          <div style="position:absolute;width:24px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:22px;right:30px;filter:blur(3px);"></div>
          <!-- Shell pattern overlay -->
          <div style="position:absolute;inset:0;opacity:0.12;background-image:repeating-conic-gradient(#fcd34d 0% 25%, transparent 0% 50%);background-size:30px 30px;"></div>
        </div>

        <!-- Neck -->
        <div style="position:absolute;width:36px;height:70px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:4px solid #16a34a;border-bottom:none;left:102px;top:65px;z-index:30;border-radius:25px 25px 10px 10px;box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4);"></div>

        <!-- Head -->
        <div style="position:absolute;width:75px;height:72px;background:radial-gradient(ellipse at 35% 30%, #d1fae5 0%, #a7f3d0 25%, #86efac 55%, #16a34a 100%);border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:35px;left:82px;z-index:40;border:4px solid #16a34a;box-shadow:inset 8px 8px 20px rgba(220,255,235,0.7), inset -5px -5px 14px rgba(15,90,45,0.35);animation:turtle-head-tuck 2.5s ease-in-out infinite;">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:26px;height:20px;background:rgba(255,255,255,0.65);border-radius:50%;top:6px;left:10px;filter:blur(4px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.4);border-radius:50%;top:18px;right:14px;filter:blur(2px);"></div>

          <!-- Eyes -->
          <div style="position:absolute;top:12px;width:100%;display:flex;justify-content:center;gap:8px;">
            <div style="width:24px;height:26px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f5f5f5 70%, #e8e8e8 100%);border-radius:50%;border:3px solid #16a34a;position:relative;animation:turtle-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.8);">
              <div style="position:absolute;width:14px;height:16px;background:radial-gradient(circle at 30% 30%, #333, #1a1a1a);border-radius:50%;top:4px;left:4px;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:2px;left:2px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.5;"></div>
              </div>
            </div>
            <div style="width:24px;height:26px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f5f5f5 70%, #e8e8e8 100%);border-radius:50%;border:3px solid #16a34a;position:relative;animation:turtle-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.8);">
              <div style="position:absolute;width:14px;height:16px;background:radial-gradient(circle at 30% 30%, #333, #1a1a1a);border-radius:50%;top:4px;left:4px;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:2px;left:2px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:38px;width:100%;display:flex;justify-content:space-around;padding:0 10px;">
            <div style="width:12px;height:7px;background:#fda4af;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            <div style="width:12px;height:7px;background:#fda4af;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          </div>

          <!-- Nostrils -->
          <div style="position:absolute;top:49px;left:50%;transform:translateX(-50%);display:flex;gap:8px;">
            <div style="width:3px;height:2px;background:rgba(0,0,0,0.3);border-radius:1px;transform:rotate(15deg);"></div>
            <div style="width:3px;height:2px;background:rgba(0,0,0,0.3);border-radius:1px;transform:rotate(-15deg);"></div>
          </div>

          <!-- Mouth -->
          <div style="position:absolute;width:22px;height:6px;border-bottom:3px solid #16a34a;border-radius:0 0 15px 15px;top:53px;left:50%;transform:translateX(-50%);"></div>
        </div>

        <!-- Front flippers -->
        <div style="position:absolute;top:175px;left:45px;width:48px;height:32px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:4px solid #16a34a;border-radius:50% 50% 40% 40%;z-index:50;transform-origin:top center;animation:turtle-walk-left 0.8s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4);"></div>
        <div style="position:absolute;top:175px;right:45px;width:48px;height:32px;background:radial-gradient(ellipse at 35% 30%, #a7f3d0 0%, #86efac 50%, #16a34a 100%);border:4px solid #16a34a;border-radius:50% 50% 40% 40%;z-index:50;transform-origin:top center;animation:turtle-walk-right 0.8s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(200,255,220,0.4);"></div>
      </div>
    `,
    // ===== COBRA - Reptiles Variant 3 =====
    // Source: cobra_buddy.html (scaled to 240x280, 3D effects added)
    3:`
      <div style="position:relative;width:240px;height:280px;animation:cobra-sway 3s ease-in-out infinite alternate, cobra-hypnotic-rise 5s ease-in-out infinite;">
        <!-- Tail tip (behind coils) -->
        <div style="position:absolute;width:40px;height:27px;bottom:80px;left:25px;background:radial-gradient(ellipse at 35% 30%, #c9a281 0%, #b08968 50%, #5c4033 100%);border:3px solid #5c4033;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:cobra-tail-wag 0.6s ease-in-out infinite alternate;box-shadow:inset 2px 2px 6px rgba(220,180,140,0.4);"></div>

        <!-- Coil base -->
        <div style="position:absolute;width:150px;height:60px;background:radial-gradient(ellipse at 35% 30%, #f0dcc8 0%, #dbb896 25%, #b08968 55%, #5c4033 100%);border:3px solid #5c4033;border-radius:30px;bottom:45px;left:45px;z-index:10;box-shadow:inset 8px 8px 20px rgba(245,225,200,0.7), inset -5px -5px 14px rgba(40,25,15,0.4);">
          <div style="position:absolute;width:40px;height:26px;background:rgba(255,255,255,0.6);border-radius:50%;top:5px;left:15px;filter:blur(5px);"></div>
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;right:28px;filter:blur(3px);"></div>
        </div>

        <!-- Coil middle -->
        <div style="position:absolute;width:116px;height:54px;background:radial-gradient(ellipse at 35% 30%, #f0dcc8 0%, #dbb896 25%, #b08968 55%, #5c4033 100%);border:3px solid #5c4033;border-radius:27px;bottom:85px;left:62px;z-index:12;box-shadow:inset 8px 8px 20px rgba(245,225,200,0.7), inset -5px -5px 14px rgba(40,25,15,0.4);">
          <div style="position:absolute;width:32px;height:20px;background:rgba(255,255,255,0.6);border-radius:50%;top:4px;left:10px;filter:blur(5px);"></div>
          <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.35);border-radius:50%;top:14px;right:20px;filter:blur(3px);"></div>
        </div>

        <!-- Neck stalk - extends down like purple snake (sways from base) -->
        <div style="position:absolute;width:50px;height:96px;background:radial-gradient(ellipse at 35% 30%, #c9a281 0%, #b08968 50%, #5c4033 100%);border:3px solid #5c4033;border-bottom:none;border-top:none;top:95px;left:95px;z-index:25;border-radius:7px;box-shadow:inset 2px 2px 8px rgba(220,180,140,0.4);animation:cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Belly stripe -->
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:radial-gradient(ellipse at 50% 30%, #f5ebe0 0%, #ede0d4 60%, #ddd0c4 100%);opacity:0.85;"></div>
        </div>

        <!-- Cobra hood with flare and sway animation -->
        <div style="position:absolute;width:164px;height:136px;top:40px;left:38px;border-radius:50% 50% 50% 50% / 30% 30% 80% 80%;background:repeating-linear-gradient(to bottom, transparent, transparent 13px, #2d1a0f 13px, #2d1a0f 16px), radial-gradient(ellipse at 35% 30%, #f5e8d8 0%, #e0c8a8 25%, #c9a281 55%, #b08968 100%);border:3px solid #5c4033;z-index:18;box-shadow:inset 0 0 20px rgba(0,0,0,0.25), inset 10px 10px 24px rgba(250,235,210,0.65), inset -6px -6px 16px rgba(50,30,20,0.35);overflow:hidden;animation:cobra-hood-flare 4s ease-in-out infinite, cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Hood highlight (primary) -->
          <div style="position:absolute;width:55px;height:42px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:18px;filter:blur(7px);"></div>
          <!-- Hood highlight (secondary) -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.4);border-radius:50%;top:28px;right:30px;filter:blur(4px);"></div>
          <!-- Hood markings - positioned lower and wider to be visible around head -->
          <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:140px;height:55px;opacity:0.9;">
            <div style="position:absolute;width:30px;height:30px;background:radial-gradient(circle at 35% 30%, #c9a281, #b08968);border:3px solid #ede0d4;border-radius:50%;top:0;left:0;"></div>
            <div style="position:absolute;width:30px;height:30px;background:radial-gradient(circle at 35% 30%, #c9a281, #b08968);border:3px solid #ede0d4;border-radius:50%;top:0;right:0;"></div>
            <div style="position:absolute;top:15px;left:46px;width:40px;height:27px;border:3px solid #ede0d4;border-top:none;border-radius:0 0 50% 50%;"></div>
          </div>
        </div>

        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:102px;height:82px;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;top:28px;left:68px;z-index:30;background:radial-gradient(ellipse at 35% 30%, #f0dcc8 0%, #dbb896 25%, #b08968 55%, #5c4033 100%);border:3px solid #5c4033;box-shadow:inset 8px 8px 20px rgba(245,225,200,0.7), inset -5px -5px 14px rgba(40,25,15,0.4);animation:cobra-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.65);border-radius:50%;top:6px;left:10px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.4);border-radius:50%;top:20px;right:18px;filter:blur(3px);"></div>

          <!-- Eyes (yellow with vertical slit pupils) -->
          <div style="position:absolute;top:15px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:3px solid #5c4033;position:relative;animation:cobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:3px solid #5c4033;position:relative;animation:cobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          </div>

          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:40px;height:23px;background:radial-gradient(ellipse at 50% 30%, #6b4423 0%, #5c4033 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:10px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <div style="position:absolute;top:17px;right:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:17px;left:50%;margin-left:-3px;width:4px;height:23px;background:#ef4444;transform-origin:top;animation:cobra-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    // ===== EMERALD PYTHON - Reptiles Variant 4 =====
    // Source: emerald_python.html (scaled to 240x280, 3D effects added)
    4:`
      <div style="position:relative;width:240px;height:280px;animation:emerald-sway 3s ease-in-out infinite alternate;">
        <!-- Tail tip -->
        <div style="position:absolute;width:36px;height:24px;bottom:82px;left:35px;background:radial-gradient(ellipse at 35% 30%, #34d399 0%, #10b981 50%, #047857 100%);border:3px solid #064e3b;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:emerald-tail-wag 0.6s ease-in-out infinite alternate;box-shadow:inset 2px 2px 6px rgba(110,231,183,0.4);">
          <div style="position:absolute;width:10px;height:8px;background:rgba(110,231,183,0.5);border-radius:50%;top:4px;left:6px;"></div>
        </div>

        <!-- Coil base with breathing pulse -->
        <div style="position:absolute;width:132px;height:54px;background:radial-gradient(ellipse at 35% 30%, #6ee7b7 0%, #34d399 25%, #10b981 55%, #047857 100%);border:3px solid #064e3b;border-radius:27px;bottom:50px;left:55px;z-index:10;box-shadow:inset 8px 8px 20px rgba(160,255,210,0.7), inset -5px -5px 14px rgba(4,60,45,0.4);animation:python-pulse 4s ease-in-out infinite;">
          <div style="position:absolute;width:32px;height:20px;background:rgba(255,255,255,0.6);border-radius:50%;top:6px;left:16px;filter:blur(5px);"></div>
          <div style="position:absolute;width:18px;height:12px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;right:25px;filter:blur(3px);"></div>
        </div>

        <!-- Coil middle with breathing pulse -->
        <div style="position:absolute;width:102px;height:48px;background:radial-gradient(ellipse at 35% 30%, #6ee7b7 0%, #34d399 25%, #10b981 55%, #047857 100%);border:3px solid #064e3b;border-radius:24px;bottom:85px;left:70px;z-index:12;box-shadow:inset 8px 8px 20px rgba(160,255,210,0.7), inset -5px -5px 14px rgba(4,60,45,0.4);animation:python-pulse 4s ease-in-out infinite 0.5s;">
          <div style="position:absolute;width:26px;height:16px;background:rgba(255,255,255,0.6);border-radius:50%;top:5px;left:12px;filter:blur(5px);"></div>
          <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.35);border-radius:50%;top:14px;right:20px;filter:blur(3px);"></div>
        </div>

        <!-- Neck stalk -->
        <div style="position:absolute;width:50px;height:96px;background:radial-gradient(ellipse at 35% 30%, #34d399 0%, #10b981 50%, #047857 100%);border:3px solid #064e3b;border-bottom:none;border-top:none;top:95px;left:95px;z-index:25;border-radius:12px;box-shadow:inset 2px 2px 8px rgba(110,231,183,0.4);">
          <!-- Belly scutes -->
          <div style="position:absolute;top:0;left:9px;width:32px;height:100%;background:repeating-linear-gradient(to bottom, #fef9c3 0px, #fef9c3 7px, #064e3b 7px, #064e3b 8px);opacity:0.95;border-left:2px solid #064e3b;border-right:2px solid #064e3b;"></div>
        </div>

        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:96px;height:66px;border-radius:40% 40% 50% 50% / 50% 50% 30% 30%;top:60px;left:72px;z-index:30;background:radial-gradient(ellipse at 35% 30%, #6ee7b7 0%, #34d399 25%, #10b981 55%, #047857 100%);border:3px solid #064e3b;box-shadow:inset 8px 8px 20px rgba(160,255,210,0.7), inset -5px -5px 14px rgba(4,60,45,0.35);animation:python-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.65);border-radius:50%;top:6px;left:12px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.4);border-radius:50%;top:16px;right:18px;filter:blur(3px);"></div>
          <!-- Blotch pattern -->
          <div style="position:absolute;width:18px;height:14px;background:rgba(110,231,183,0.5);border-radius:50%;top:12px;right:20px;"></div>

          <!-- Eyes (yellow with vertical pupils) -->
          <div style="position:absolute;top:12px;width:100%;display:flex;justify-content:center;gap:10px;">
            <div class="s-eye" style="width:24px;height:24px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border:2px solid #064e3b;border-radius:50%;position:relative;animation:emerald-blink 4s infinite;box-shadow:inset 2px 2px 5px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:5px;height:16px;background:radial-gradient(ellipse at 50% 30%, #064e3b 0%, #022c22 100%);border-radius:50%;top:3px;left:9px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:24px;height:24px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border:2px solid #064e3b;border-radius:50%;position:relative;animation:emerald-blink 4s infinite;box-shadow:inset 2px 2px 5px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:5px;height:16px;background:radial-gradient(ellipse at 50% 30%, #064e3b 0%, #022c22 100%);border-radius:50%;top:3px;left:9px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:0;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:38px;width:100%;display:flex;justify-content:space-around;padding:0 15px;">
            <div style="width:15px;height:6px;background:#86efac;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
            <div style="width:15px;height:6px;background:#86efac;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          </div>

          <!-- Snout with heat pits -->
          <div style="position:absolute;bottom:-2px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:56px;height:20px;background:radial-gradient(ellipse at 50% 30%, #10b981 0%, #047857 100%);border:2px solid #064e3b;border-radius:20% 20% 30% 30% / 50% 50% 40% 40%;position:relative;">
              <!-- Heat pits row -->
              <div style="display:flex;justify-content:space-evenly;width:100%;padding-top:2px;">
                <div style="width:5px;height:5px;background:#022c22;border-radius:50%;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.6);"></div>
                <div style="width:5px;height:5px;background:#022c22;border-radius:50%;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.6);"></div>
                <div style="width:5px;height:5px;background:#022c22;border-radius:50%;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.6);"></div>
                <div style="width:5px;height:5px;background:#022c22;border-radius:50%;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.6);"></div>
                <div style="width:5px;height:5px;background:#022c22;border-radius:50%;box-shadow:inset 1px 1px 2px rgba(0,0,0,0.6);"></div>
              </div>
              <!-- Nostrils -->
              <div style="position:absolute;bottom:3px;left:10px;width:4px;height:2px;background:#022c22;border-radius:50%;transform:rotate(20deg);"></div>
              <div style="position:absolute;bottom:3px;right:10px;width:4px;height:2px;background:#022c22;border-radius:50%;transform:rotate(-20deg);"></div>
              <!-- Fangs -->
              <div style="position:absolute;top:18px;left:12px;width:5px;height:9px;background:#fefce8;clip-path:polygon(0 0, 100% 0, 50% 100%);border-top:1px solid #064e3b;"></div>
              <div style="position:absolute;top:18px;right:12px;width:5px;height:9px;background:#fefce8;clip-path:polygon(0 0, 100% 0, 50% 100%);border-top:1px solid #064e3b;"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:14px;left:50%;margin-left:-2px;width:4px;height:18px;background:#db2777;transform-origin:top;animation:emerald-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-5px;left:-1px;width:4px;height:6px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-5px;right:-1px;width:4px;height:6px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    // ===== PURPLE SNAKE - Reptiles Variant 5 =====
    // Source: purple_snake_buddy.html (scaled to 240x280, 3D effects added)
    5:`
      <div style="position:relative;width:240px;height:280px;animation:purple-sway 3s ease-in-out infinite alternate;">
        <!-- Tail tip -->
        <div style="position:absolute;width:36px;height:24px;bottom:82px;left:35px;background:radial-gradient(ellipse at 35% 30%, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%);border:3px solid #4c1d95;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:purple-tail-wag 0.6s ease-in-out infinite alternate;box-shadow:inset 2px 2px 6px rgba(200,180,255,0.4);"></div>

        <!-- Coil base -->
        <div style="position:absolute;width:132px;height:54px;background:radial-gradient(ellipse at 35% 30%, #ddd6fe 0%, #c4b5fd 25%, #8b5cf6 55%, #6d28d9 100%);border:3px solid #4c1d95;border-radius:27px;bottom:50px;left:55px;z-index:10;box-shadow:inset 8px 8px 20px rgba(230,220,255,0.7), inset -5px -5px 14px rgba(60,20,120,0.4);">
          <div style="position:absolute;width:32px;height:20px;background:rgba(255,255,255,0.6);border-radius:50%;top:6px;left:16px;filter:blur(5px);"></div>
          <div style="position:absolute;width:18px;height:12px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;right:25px;filter:blur(3px);"></div>
        </div>

        <!-- Coil middle -->
        <div style="position:absolute;width:102px;height:48px;background:radial-gradient(ellipse at 35% 30%, #ddd6fe 0%, #c4b5fd 25%, #8b5cf6 55%, #6d28d9 100%);border:3px solid #4c1d95;border-radius:24px;bottom:85px;left:70px;z-index:12;box-shadow:inset 8px 8px 20px rgba(230,220,255,0.7), inset -5px -5px 14px rgba(60,20,120,0.4);">
          <div style="position:absolute;width:26px;height:16px;background:rgba(255,255,255,0.6);border-radius:50%;top:5px;left:12px;filter:blur(5px);"></div>
          <div style="position:absolute;width:14px;height:10px;background:rgba(255,255,255,0.35);border-radius:50%;top:14px;right:20px;filter:blur(3px);"></div>
        </div>

        <!-- Neck stalk -->
        <div style="position:absolute;width:50px;height:96px;background:radial-gradient(ellipse at 35% 30%, #a78bfa 0%, #8b5cf6 50%, #6d28d9 100%);border:3px solid #4c1d95;border-bottom:none;border-top:none;top:95px;left:95px;z-index:25;border-radius:12px;box-shadow:inset 2px 2px 8px rgba(200,180,255,0.4);">
          <!-- Belly stripe -->
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:linear-gradient(to right, #ddd6fe, #8b5cf6);opacity:0.85;"></div>
        </div>

        <!-- Head with curious head tilt -->
        <div style="position:absolute;width:90px;height:72px;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;top:55px;left:75px;z-index:30;background:radial-gradient(ellipse at 35% 30%, #ddd6fe 0%, #c4b5fd 25%, #8b5cf6 55%, #4c1d95 100%);border:3px solid #4c1d95;box-shadow:inset 8px 8px 20px rgba(230,220,255,0.7), inset -5px -5px 14px rgba(60,20,120,0.35);animation:snake-head-tilt 5s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:28px;height:20px;background:rgba(255,255,255,0.65);border-radius:50%;top:6px;left:12px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:15px;height:11px;background:rgba(255,255,255,0.4);border-radius:50%;top:18px;right:16px;filter:blur(3px);"></div>

          <!-- Eyes (yellow with vertical slit pupils) -->
          <div style="position:absolute;top:13px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:26px;height:29px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:2px solid #4c1d95;position:relative;animation:purple-blink 4s infinite;box-shadow:0 0 4px #facc15, inset 2px 2px 5px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 30%, #4c1d95 0%, #312e81 100%);border-radius:50%;top:5px;left:10px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:26px;height:29px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:2px solid #4c1d95;position:relative;animation:purple-blink 4s infinite;box-shadow:0 0 4px #facc15, inset 2px 2px 5px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 30%, #4c1d95 0%, #312e81 100%);border-radius:50%;top:5px;left:10px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:42px;width:100%;display:flex;justify-content:space-around;padding:0 10px;">
            <div style="width:12px;height:7px;background:#c084fc;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
            <div style="width:12px;height:7px;background:#c084fc;border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          </div>

          <!-- Snout -->
          <div style="position:absolute;bottom:-1px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:52px;height:18px;background:radial-gradient(ellipse at 50% 30%, #8b5cf6 0%, #4c1d95 100%);border:3px solid #4c1d95;border-radius:20% 20% 40% 40% / 50% 50% 50% 50%;position:relative;box-shadow:inset 1px 1px 3px rgba(221,214,254,0.3);">
              <!-- Nostrils -->
              <div style="display:flex;width:100%;justify-content:space-between;padding:3px 10px;">
                <div style="width:4px;height:2px;background:#4c1d95;border-radius:50%;transform:rotate(25deg);opacity:0.8;"></div>
                <div style="width:4px;height:2px;background:#4c1d95;border-radius:50%;transform:rotate(-25deg);opacity:0.8;"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:16px;left:9px;width:6px;height:10px;background:#f3f4f6;clip-path:polygon(0 0, 100% 0, 50% 100%);border-top:1px solid #4c1d95;"></div>
              <div style="position:absolute;top:16px;right:9px;width:6px;height:10px;background:#f3f4f6;clip-path:polygon(0 0, 100% 0, 50% 100%);border-top:1px solid #4c1d95;"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:12px;left:50%;margin-left:-2px;width:4px;height:20px;background:#db2777;transform-origin:top;animation:purple-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-5px;left:-1px;width:4px;height:6px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-5px;right:-1px;width:4px;height:6px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    // ===== RATTLESNAKE - Reptiles Variant 6 =====
    // Source: rattlesnake_buddy.html (scaled to 240x280, 3D effects added)
    6:`
      <div style="position:relative;width:240px;height:280px;animation:rattle-bounce 2s ease-in-out infinite;">
        <!-- Slither container - centered vertically -->
        <div style="position:absolute;top:90px;left:10px;width:220px;height:100px;transform-origin:35px 35px;animation:rattle-slither 2.5s ease-in-out infinite;">
          <!-- SVG Body with diamond pattern -->
          <svg viewBox="0 0 220 100" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;">
            <defs>
              <linearGradient id="rattleGrad6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#fbbf24" />
                <stop offset="50%" style="stop-color:#d97706" />
                <stop offset="100%" style="stop-color:#b45309" />
              </linearGradient>
            </defs>
            <!-- Main body - smooth S-curve -->
            <path d="M 35,35 C 70,10 90,10 120,35 C 150,60 170,65 195,55" fill="none" stroke="url(#rattleGrad6)" stroke-width="28" stroke-linecap="round"/>
            <!-- Diamond pattern overlay -->
            <path d="M 50,33 C 75,12 95,12 120,35 C 145,58 165,62 188,54" fill="none" stroke="rgba(120,53,15,0.4)" stroke-width="14" stroke-linecap="butt" stroke-dasharray="12 20"/>
            <!-- Body highlight -->
            <path d="M 50,30 C 75,8 95,8 118,30 C 142,52 162,58 185,50" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="10" stroke-linecap="round"/>
          </svg>

          <!-- Rattle assembly - positioned at tail end -->
          <div style="position:absolute;top:42px;left:190px;display:flex;align-items:center;z-index:15;transform:rotate(-15deg);">
            <div style="display:flex;transform-origin:left center;animation:rattle-buzz 0.08s linear infinite;">
              <div style="width:12px;height:18px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
              <div style="width:10px;height:15px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;margin-left:-4px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
              <div style="width:8px;height:12px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;margin-left:-3px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.4);"></div>
            </div>
          </div>

          <!-- Head -->
          <div style="position:absolute;width:50px;height:45px;background:radial-gradient(ellipse at 35% 30%, #fde68a 0%, #fbbf24 25%, #d97706 55%, #78350f 100%);border-radius:50% 50% 48% 48% / 60% 60% 45% 45%;top:8px;left:8px;z-index:20;box-shadow:inset 6px 6px 14px rgba(255,240,180,0.7), inset -4px -4px 10px rgba(100,50,10,0.4), 0 4px 10px rgba(0,0,0,0.2);">
            <!-- Head highlight (primary) -->
            <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.65);border-radius:50%;top:5px;left:8px;filter:blur(4px);"></div>
            <!-- Head highlight (secondary) -->
            <div style="position:absolute;width:10px;height:8px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;right:10px;filter:blur(2px);"></div>

            <!-- Eyes (yellow with vertical slit pupils) -->
            <div style="position:absolute;top:8px;width:100%;display:flex;justify-content:center;gap:4px;">
              <div class="s-eye" style="width:17px;height:18px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:50%;position:relative;animation:rattle-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,200,0.6);">
                <div style="position:absolute;width:4px;height:12px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:3px;left:6px;animation:snake-eye-look 4s ease-in-out infinite;">
                  <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:0;"></div>
                </div>
              </div>
              <div class="s-eye" style="width:17px;height:18px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:50%;position:relative;animation:rattle-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,200,0.6);">
                <div style="position:absolute;width:4px;height:12px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:3px;left:6px;animation:snake-eye-look 4s ease-in-out infinite;">
                  <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:2px;left:0;"></div>
                </div>
              </div>
            </div>

            <!-- Blush -->
            <div style="position:absolute;top:26px;width:100%;display:flex;justify-content:space-around;padding:0 8px;">
              <div style="width:10px;height:6px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
              <div style="width:10px;height:6px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            </div>

            <!-- Snout -->
            <div style="position:absolute;width:26px;height:15px;background:radial-gradient(ellipse at 50% 30%, #92400e 0%, #78350f 100%);border-radius:40% 40% 55% 55%;bottom:2px;left:50%;transform:translateX(-50%);z-index:21;display:flex;flex-direction:column;align-items:center;padding-top:3px;">
              <!-- Nostrils -->
              <div style="display:flex;gap:6px;">
                <div style="width:3px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:3px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;width:4px;height:5px;background:#fff;bottom:-3px;left:6px;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);"></div>
              <div style="position:absolute;width:4px;height:5px;background:#fff;bottom:-3px;right:6px;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);"></div>
              <!-- Tongue -->
              <div style="position:absolute;width:3px;height:12px;background:#ef4444;bottom:-12px;left:50%;transform:translateX(-50%) scaleY(0);transform-origin:top;animation:rattle-tongue 3s infinite;z-index:21;border-radius:1px;">
                <div style="position:absolute;bottom:0;left:-2px;width:3px;height:6px;background:#ef4444;border-radius:0 0 1px 1px;transform:rotate(-30deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:0;right:-2px;width:3px;height:6px;background:#ef4444;border-radius:0 0 1px 1px;transform:rotate(30deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    // ===== RATTLESNAKE COILED - Reptiles Variant 7 =====
    // Source: rattlesnake_coiled_buddy.html (scaled to 240x280, 3D effects added)
    7:`
      <div style="position:relative;width:240px;height:280px;animation:coiled-bounce 3s ease-in-out infinite;">
        <!-- Rattle assembly (left side) -->
        <div style="position:absolute;bottom:100px;left:15px;z-index:5;display:flex;align-items:center;transform-origin:right center;animation:coiled-rattle 0.08s linear infinite alternate;">
          <div style="width:11px;height:14px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;margin-right:-3px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.3);z-index:1;"></div>
          <div style="width:13px;height:18px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;margin-right:-3px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.3);z-index:2;"></div>
          <div style="width:14px;height:20px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;margin-right:-3px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.3);z-index:3;"></div>
          <div style="width:15px;height:22px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #c27803 70%, #92400e 100%);border:2px solid #78350f;border-radius:4px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.3);z-index:4;"></div>
        </div>

        <!-- Coil base -->
        <div style="position:absolute;width:148px;height:60px;background:radial-gradient(ellipse at 35% 30%, #fde68a 0%, #fbbf24 25%, #d97706 55%, #78350f 100%);border:3px solid #78350f;border-radius:30px;bottom:65px;left:45px;z-index:10;box-shadow:inset 8px 8px 20px rgba(255,240,180,0.7), inset -5px -5px 14px rgba(100,40,8,0.4);">
          <!-- Primary highlight -->
          <div style="position:absolute;width:38px;height:24px;background:rgba(255,255,255,0.6);border-radius:50%;top:5px;left:14px;filter:blur(5px);"></div>
          <!-- Secondary highlight -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.35);border-radius:50%;top:12px;right:28px;filter:blur(3px);"></div>
          <!-- Diamond spots -->
          <div style="position:absolute;top:24px;left:27px;width:11px;height:11px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:28px;left:67px;width:12px;height:12px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:24px;left:107px;width:11px;height:11px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
        </div>

        <!-- Coil middle -->
        <div style="position:absolute;width:114px;height:54px;background:radial-gradient(ellipse at 35% 30%, #fde68a 0%, #fbbf24 25%, #d97706 55%, #78350f 100%);border:3px solid #78350f;border-radius:27px;bottom:105px;left:63px;z-index:12;box-shadow:inset 8px 8px 20px rgba(255,240,180,0.7), inset -5px -5px 14px rgba(100,40,8,0.4);">
          <!-- Primary highlight -->
          <div style="position:absolute;width:30px;height:18px;background:rgba(255,255,255,0.6);border-radius:50%;top:5px;left:12px;filter:blur(5px);"></div>
          <!-- Secondary highlight -->
          <div style="position:absolute;width:16px;height:12px;background:rgba(255,255,255,0.35);border-radius:50%;top:14px;right:22px;filter:blur(3px);"></div>
          <!-- Diamond spots -->
          <div style="position:absolute;top:20px;left:20px;width:9px;height:9px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:23px;left:54px;width:11px;height:11px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:20px;left:88px;width:9px;height:9px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
        </div>

        <!-- Neck stalk - bottom aligns with coil junction -->
        <div style="position:absolute;width:50px;height:80px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #78350f 100%);border:3px solid #78350f;border-bottom:none;border-top:none;top:95px;left:95px;z-index:15;border-radius:8px;box-shadow:inset 2px 2px 8px rgba(254,243,199,0.4);">
          <!-- Belly stripe -->
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:#fef3c7;opacity:0.85;"></div>
          <!-- Diamond spots on neck -->
          <div style="position:absolute;top:15px;right:8px;width:8px;height:8px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:45px;right:9px;width:9px;height:9px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
        </div>

        <!-- Head -->
        <div style="position:absolute;width:100px;height:80px;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;top:50px;left:70px;z-index:30;background:radial-gradient(ellipse at 35% 30%, #fde68a 0%, #fbbf24 25%, #d97706 55%, #78350f 100%);border:3px solid #78350f;box-shadow:inset 8px 8px 20px rgba(255,240,180,0.7), inset -5px -5px 14px rgba(100,40,8,0.35);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:32px;height:24px;background:rgba(255,255,255,0.65);border-radius:50%;top:6px;left:12px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.4);border-radius:50%;top:18px;right:18px;filter:blur(3px);"></div>
          <!-- Diamond spots on head -->
          <div style="position:absolute;top:7px;left:10px;width:7px;height:7px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:4px;left:47px;width:8px;height:8px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>
          <div style="position:absolute;top:10px;right:10px;width:7px;height:7px;background:#92400e;transform:rotate(45deg);opacity:0.8;"></div>

          <!-- Eyes - Yellow with vertical slit pupils -->
          <div style="position:absolute;top:15px;width:100%;display:flex;justify-content:center;gap:5px;">
            <div class="s-eye" style="width:29px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fbbf24 50%, #b45309 100%);border-radius:55% 55% 45% 45%;position:relative;animation:coiled-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.6);border:2px solid #92400e;">
              <div style="position:absolute;width:5px;height:20px;background:linear-gradient(to bottom, #1a1a1a, #000);border-radius:40%;top:5px;left:50%;transform:translateX(-50%);animation:snake-eye-look 5s ease-in-out infinite;">
                <div style="position:absolute;width:3px;height:3px;background:rgba(255,255,255,0.9);border-radius:50%;top:2px;left:1px;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:29px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fbbf24 50%, #b45309 100%);border-radius:55% 55% 45% 45%;position:relative;animation:coiled-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.6);border:2px solid #92400e;">
              <div style="position:absolute;width:5px;height:20px;background:linear-gradient(to bottom, #1a1a1a, #000);border-radius:40%;top:5px;left:50%;transform:translateX(-50%);animation:snake-eye-look 5s ease-in-out infinite;">
                <div style="position:absolute;width:3px;height:3px;background:rgba(255,255,255,0.9);border-radius:50%;top:2px;left:1px;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:47px;width:100%;display:flex;justify-content:space-around;padding:0 10px;">
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          </div>

          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:39px;height:23px;background:radial-gradient(ellipse at 50% 30%, #92400e 0%, #78350f 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:11px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:8px;width:5px;height:6px;background:#fff;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <div style="position:absolute;top:17px;right:8px;width:5px;height:6px;background:#fff;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:10px;left:50%;margin-left:-2px;width:4px;height:23px;background:#ef4444;transform-origin:top;animation:coiled-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    8:` <!-- Rainbow Snake -->
      <div style="position:relative;width:240px;height:280px;display:flex;justify-content:center;align-items:center;animation:rainbow-bounce 2s ease-in-out infinite;">
        <!-- SVG Body Container -->
        <div style="position:absolute;top:90px;left:0;width:240px;height:120px;animation:rainbow-wiggle 3s ease-in-out infinite;">
          <svg viewBox="0 0 400 200" style="width:100%;height:100%;overflow:visible;">
            <defs>
              <linearGradient id="rainbowGrad8" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#ef4444"/>
                <stop offset="20%" style="stop-color:#f59e0b"/>
                <stop offset="40%" style="stop-color:#facc15"/>
                <stop offset="60%" style="stop-color:#22c55e"/>
                <stop offset="80%" style="stop-color:#3b82f6"/>
                <stop offset="100%" style="stop-color:#a855f7"/>
              </linearGradient>
            </defs>
            <!-- Main rainbow body -->
            <path d="M 45,95 C 100,20 160,170 230,95 C 280,40 340,120 380,85" fill="none" stroke="url(#rainbowGrad8)" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Diamond pattern overlay -->
            <path d="M 60,95 C 110,30 170,160 230,95 C 270,50 330,110 370,85" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="10" stroke-dasharray="8 25"/>
          </svg>
        </div>
        <!-- Head with curious head tilt -->
        <div style="position:absolute;width:38px;height:35px;background:radial-gradient(circle at 35% 30%,#f87171,#ef4444,#b91c1c);border-radius:50% 50% 48% 48% / 65% 65% 45% 45%;top:120px;left:8px;z-index:20;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.4),0 4px 8px rgba(0,0,0,0.2);animation:snake-head-tilt 5s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Eyes (amber with vertical slit pupils) -->
          <div style="display:flex;gap:3px;justify-content:center;margin-top:6px;">
            <div class="s-eye" style="width:13px;height:14px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:50%;position:relative;animation:rainbow-blink 4s infinite;box-shadow:inset 1px 1px 3px rgba(255,255,200,0.6);">
              <div style="width:3px;height:10px;background:#1a1a1a;border-radius:50%;position:absolute;top:2px;left:5px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;top:1px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:13px;height:14px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:50%;position:relative;animation:rainbow-blink 4s infinite;box-shadow:inset 1px 1px 3px rgba(255,255,200,0.6);">
              <div style="width:3px;height:10px;background:#1a1a1a;border-radius:50%;position:absolute;top:2px;left:5px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;top:1px;left:0;"></div>
              </div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:20px;width:100%;display:flex;justify-content:space-around;padding:0 6px;">
            <div style="width:7px;height:4px;background:#fca5a5;border-radius:50%;opacity:0.8;"></div>
            <div style="width:7px;height:4px;background:#fca5a5;border-radius:50%;opacity:0.8;"></div>
          </div>
          <!-- Snout -->
          <div style="position:absolute;width:20px;height:12px;background:#991b1b;border-radius:40% 40% 60% 60%;bottom:2px;left:50%;transform:translateX(-50%);z-index:21;">
            <div style="display:flex;gap:5px;justify-content:center;padding-top:2px;">
              <div style="width:3px;height:1px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
              <div style="width:3px;height:1px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
            </div>
            <!-- Fangs -->
            <div style="position:absolute;bottom:-2px;left:5px;width:3px;height:4px;background:#fff;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);"></div>
            <div style="position:absolute;bottom:-2px;right:5px;width:3px;height:4px;background:#fff;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);"></div>
            <!-- Tongue -->
            <div style="position:absolute;width:2px;height:7px;background:#ff4757;bottom:-7px;left:50%;transform:translateX(-50%) scaleY(0);transform-origin:top;animation:rainbow-tongue 3s infinite;z-index:21;">
              <div style="position:absolute;bottom:-4px;left:-1px;width:2px;height:5px;background:#ff4757;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);transform:rotate(-30deg);transform-origin:top center;"></div>
              <div style="position:absolute;bottom:-4px;right:-1px;width:2px;height:5px;background:#ff4757;clip-path:polygon(50% 100%, 0% 0%, 100% 0%);transform:rotate(30deg);transform-origin:top center;"></div>
            </div>
          </div>
        </div>
        <!-- 3D highlight spots -->
        <div style="position:absolute;top:145px;left:80px;width:10px;height:10px;background:radial-gradient(circle,rgba(255,255,255,0.6),transparent);border-radius:50%;filter:blur(2px);"></div>
        <div style="position:absolute;top:155px;left:140px;width:8px;height:8px;background:radial-gradient(circle,rgba(255,255,255,0.5),transparent);border-radius:50%;filter:blur(2px);"></div>
      </div>
    `,
    9:` <!-- Purple Cobra -->
      <div style="position:relative;width:240px;height:280px;display:flex;justify-content:center;align-items:center;animation:pcobra-sway 3s ease-in-out infinite alternate, cobra-hypnotic-rise 5s ease-in-out infinite;">
        <!-- Tail tip -->
        <div style="position:absolute;width:36px;height:24px;bottom:80px;left:25px;background:radial-gradient(circle at 35% 30%,#a78bfa,#8b5cf6,#6d28d9);border:2px solid #4c1d95;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:pcobra-tail 0.6s ease-in-out infinite alternate;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.2);"></div>
        <!-- Cobra Hood with flare and sway animation -->
        <div style="position:absolute;width:164px;height:136px;top:40px;left:38px;border-radius:50% 50% 50% 50% / 30% 30% 80% 80%;background:repeating-linear-gradient(to bottom, transparent, transparent 13px, #5b21b6 13px, #5b21b6 16px), linear-gradient(to bottom, #a78bfa, #8b5cf6);border:3px solid #4c1d95;z-index:18;box-shadow:inset 0 0 15px rgba(0,0,0,0.2), inset 4px 4px 12px rgba(167,139,250,0.3);overflow:hidden;animation:cobra-hood-flare 4s ease-in-out infinite, cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Hood highlight -->
          <div style="position:absolute;width:40px;height:30px;background:rgba(255,255,255,0.2);border-radius:50%;top:15px;left:25px;filter:blur(5px);"></div>
          <!-- Hood Markings - positioned lower and wider to be visible around head -->
          <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:140px;height:55px;opacity:0.9;">
            <div style="position:absolute;width:30px;height:30px;background:#8b5cf6;border:3px solid #ddd6fe;border-radius:50%;top:0;left:0;box-shadow:0 0 10px #ddd6fe;"></div>
            <div style="position:absolute;width:30px;height:30px;background:#8b5cf6;border:3px solid #ddd6fe;border-radius:50%;top:0;right:0;box-shadow:0 0 10px #ddd6fe;"></div>
            <div style="position:absolute;top:15px;left:46px;width:40px;height:27px;border:3px solid #ddd6fe;border-top:none;border-radius:0 0 50% 50%;box-shadow:0 3px 10px #ddd6fe;"></div>
          </div>
        </div>
        <!-- Neck - extends down like main cobra (sways from base) -->
        <div style="position:absolute;width:50px;height:96px;top:95px;left:95px;z-index:25;background:linear-gradient(145deg, #8b5cf6, #6d28d9);border:2px solid #4c1d95;border-bottom:none;border-top:none;border-radius:6px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.2);animation:cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:linear-gradient(to right, #ddd6fe, #8b5cf6);opacity:0.9;"></div>
        </div>
        <!-- Coil Middle -->
        <div style="position:absolute;width:116px;height:54px;bottom:85px;left:62px;z-index:12;background:radial-gradient(circle at 35% 30%,#a78bfa,#8b5cf6,#6d28d9);border:2px solid #4c1d95;border-radius:27px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.2);"></div>
        <!-- Coil Base -->
        <div style="position:absolute;width:150px;height:60px;bottom:45px;left:45px;z-index:10;background:radial-gradient(circle at 35% 30%,#a78bfa,#8b5cf6,#6d28d9);border:2px solid #4c1d95;border-radius:30px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.2);"></div>
        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:102px;height:82px;top:28px;left:68px;z-index:30;background:radial-gradient(circle at 35% 30%,#a78bfa,#8b5cf6,#4c1d95);border:3px solid #4c1d95;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;box-shadow:inset 3px 3px 10px rgba(255,255,255,0.3), inset -2px -2px 6px rgba(76,29,149,0.2);animation:cobra-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight -->
          <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.3);border-radius:50%;top:10px;left:15px;filter:blur(3px);"></div>
          <!-- Eyes (Yellow with vertical slit) -->
          <div style="position:absolute;top:15px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:3px solid #4c1d95;position:relative;animation:pcobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#312e81;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #facc15 70%, #eab308 100%);border-radius:55% 55% 45% 45%;border:3px solid #4c1d95;position:relative;animation:pcobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#312e81;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:14px;height:8px;background:#c084fc;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
            <div style="width:14px;height:8px;background:#c084fc;border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          </div>
          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:40px;height:23px;background:radial-gradient(ellipse at 50% 30%, #7c3aed 0%, #4c1d95 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:10px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <div style="position:absolute;top:17px;right:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:17px;left:50%;margin-left:-3px;width:4px;height:23px;background:#db2777;transform-origin:top;animation:pcobra-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#db2777;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 3D highlight spots -->
        <div style="position:absolute;top:85px;left:75px;width:8px;height:8px;background:radial-gradient(circle,rgba(255,255,255,0.5),transparent);border-radius:50%;filter:blur(1px);"></div>
        <div style="position:absolute;top:100px;left:155px;width:6px;height:6px;background:radial-gradient(circle,rgba(255,255,255,0.4),transparent);border-radius:50%;filter:blur(1px);"></div>
      </div>
    `,
    10:` <!-- Flaming Cobra -->
      <div style="position:relative;width:240px;height:280px;display:flex;justify-content:center;align-items:center;animation:fcobra-sway 3s ease-in-out infinite alternate, cobra-hypnotic-rise 5s ease-in-out infinite;filter:drop-shadow(0 0 12px rgba(234,88,12,0.7)) drop-shadow(0 0 36px rgba(255,165,0,0.6));">
        <!-- Flame layers - moved up 20px -->
        <div style="position:absolute;left:50%;top:0px;transform:translateX(-50%) rotate(45deg);width:300px;height:300px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fde047 5%, #fb923c 30%, #c2410c 70%, transparent 90%);box-shadow:0 0 50px #fb923c,inset 0 0 36px #fde047;pointer-events:none;mix-blend-mode:screen;z-index:1;opacity:0.6;animation:fcobra-flicker 2.5s infinite alternate ease-in-out;"></div>
        <div style="position:absolute;left:50%;top:30px;transform:translateX(-50%) rotate(45deg);width:270px;height:270px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fde047 5%, #fb923c 30%, #c2410c 70%, transparent 90%);box-shadow:0 0 48px #fb923c,inset 0 0 36px #fde047;pointer-events:none;mix-blend-mode:screen;z-index:2;opacity:0.8;animation:fcobra-flicker 2s infinite alternate-reverse ease-in-out 0.3s;"></div>
        <div style="position:absolute;left:50%;top:60px;transform:translateX(-50%) rotate(45deg);width:240px;height:240px;border-radius:0 50% 50% 50%;background:radial-gradient(circle at 75% 75%, #fff 0%, #fde047 30%, #fb923c 60%, transparent 90%);pointer-events:none;mix-blend-mode:screen;z-index:3;opacity:0.9;animation:fcobra-flicker 1.5s infinite alternate ease-in-out 0.7s;"></div>
        <!-- Tail tip -->
        <div style="position:absolute;width:36px;height:24px;bottom:80px;left:25px;background:radial-gradient(circle at 35% 30%,#fb923c,#c2410c);border:2px solid #7c2d12;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:fcobra-tail 0.6s ease-in-out infinite alternate;box-shadow:inset 1px 1px 3px rgba(255,255,0,0.5),0 0 6px rgba(234,88,12,0.7);"></div>
        <!-- Cobra Hood with flare and sway animation -->
        <div style="position:absolute;width:164px;height:136px;top:40px;left:38px;border-radius:50% 50% 50% 50% / 30% 30% 80% 80%;background:repeating-linear-gradient(to bottom, transparent, transparent 13px, #ea580c 13px, #ea580c 16px), linear-gradient(to bottom, #facc15, #fb923c);border:3px solid #7c2d12;z-index:18;box-shadow:inset 0 0 15px rgba(0,0,0,0.2), inset 4px 4px 12px rgba(251,146,60,0.3);overflow:hidden;animation:cobra-hood-flare 4s ease-in-out infinite, cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Hood highlight -->
          <div style="position:absolute;width:40px;height:30px;background:rgba(255,255,255,0.2);border-radius:50%;top:15px;left:25px;filter:blur(5px);"></div>
          <!-- Hood Markings - positioned lower and wider to be visible around head -->
          <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:140px;height:55px;opacity:0.9;">
            <div style="position:absolute;width:30px;height:30px;background:#fb923c;border:3px solid #fde047;border-radius:50%;top:0;left:0;box-shadow:0 0 10px #fde047;"></div>
            <div style="position:absolute;width:30px;height:30px;background:#fb923c;border:3px solid #fde047;border-radius:50%;top:0;right:0;box-shadow:0 0 10px #fde047;"></div>
            <div style="position:absolute;top:15px;left:46px;width:40px;height:27px;border:3px solid #fde047;border-top:none;border-radius:0 0 50% 50%;box-shadow:0 3px 10px #fde047;"></div>
          </div>
        </div>
        <!-- Neck - extends down like main cobra (sways from base) -->
        <div style="position:absolute;width:50px;height:96px;top:95px;left:95px;z-index:25;background:linear-gradient(145deg, #fb923c, #c2410c);border:2px solid #7c2d12;border-bottom:none;border-top:none;border-radius:6px;box-shadow:inset 1px 1px 3px rgba(255,255,0,0.5),0 0 6px rgba(234,88,12,0.7);animation:cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:linear-gradient(to right, #fde047, #fb923c);opacity:0.9;"></div>
        </div>
        <!-- Coil Middle -->
        <div style="position:absolute;width:116px;height:54px;bottom:85px;left:62px;z-index:12;background:radial-gradient(circle at 35% 30%,#fb923c,#c2410c);border:2px solid #7c2d12;border-radius:27px;box-shadow:inset 1px 1px 3px rgba(255,255,0,0.5),0 0 6px rgba(234,88,12,0.7);"></div>
        <!-- Coil Base -->
        <div style="position:absolute;width:150px;height:60px;bottom:45px;left:45px;z-index:10;background:radial-gradient(circle at 35% 30%,#fb923c,#c2410c);border:2px solid #7c2d12;border-radius:30px;box-shadow:inset 1px 1px 3px rgba(255,255,0,0.5),0 0 6px rgba(234,88,12,0.7);"></div>
        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:102px;height:82px;top:28px;left:68px;z-index:30;background:radial-gradient(circle at 35% 30%,#fb923c,#c2410c,#7c2d12);border:3px solid #7c2d12;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;box-shadow:inset 3px 3px 10px rgba(255,255,0,0.5), inset -2px -2px 6px rgba(124,45,18,0.2);animation:cobra-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight -->
          <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.3);border-radius:50%;top:10px;left:15px;filter:blur(3px);"></div>
          <!-- Eyes (Yellow glowing with vertical slit) -->
          <div style="position:absolute;top:15px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef9c3 0%, #fef08a 70%, #fbbf24 100%);border-radius:55% 55% 45% 45%;border:3px solid #7c2d12;position:relative;animation:fcobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#ea580c;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;box-shadow:0 0 3px white;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef9c3 0%, #fef08a 70%, #fbbf24 100%);border-radius:55% 55% 45% 45%;border:3px solid #7c2d12;position:relative;animation:fcobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#ea580c;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;box-shadow:0 0 3px white;"></div>
              </div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:14px;height:8px;background:#fed7aa;border-radius:50%;opacity:0.7;filter:blur(1px);box-shadow:0 0 6px #fed7aa;"></div>
            <div style="width:14px;height:8px;background:#fed7aa;border-radius:50%;opacity:0.7;filter:blur(1px);box-shadow:0 0 6px #fed7aa;"></div>
          </div>
          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:40px;height:23px;background:radial-gradient(ellipse at 50% 30%, #c2410c 0%, #7c2d12 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:10px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);box-shadow:0 0 6px white;"></div>
              <div style="position:absolute;top:17px;right:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);box-shadow:0 0 6px white;"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:17px;left:50%;margin-left:-3px;width:4px;height:23px;background:#ef4444;transform-origin:top;animation:fcobra-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    11:` <!-- Ice Cobra -->
      <div style="position:relative;width:240px;height:280px;display:flex;justify-content:center;align-items:center;animation:icobra-sway 3s ease-in-out infinite alternate, cobra-hypnotic-rise 5s ease-in-out infinite;filter:drop-shadow(0 0 12px rgba(56,189,248,0.6)) drop-shadow(0 0 30px rgba(186,230,253,0.4));">
        <!-- Frost mist -->
        <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%);width:210px;height:60px;background:radial-gradient(ellipse at center bottom, rgba(186,230,253,0.8) 0%, transparent 70%);z-index:0;animation:icobra-mist 4s ease-in-out infinite;"></div>
        <!-- Snowflakes -->
        <div style="position:absolute;top:100px;left:48%;z-index:1;filter:drop-shadow(0 0 5px white) drop-shadow(0 0 10px rgba(56,189,248,0.6));animation:icobra-snow 4s ease-in-out infinite;"><div style="position:relative;width:3px;height:27px;background:white;border-radius:2px;"><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(60deg);"></div><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(-60deg);"></div></div></div>
        <div style="position:absolute;top:165px;left:20%;z-index:1;filter:drop-shadow(0 0 5px white) drop-shadow(0 0 10px rgba(56,189,248,0.6));animation:icobra-snow 3s ease-in-out infinite reverse 0.5s;"><div style="position:relative;width:2px;height:18px;background:white;border-radius:2px;"><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(60deg);"></div><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(-60deg);"></div></div></div>
        <div style="position:absolute;top:175px;left:80%;z-index:1;filter:drop-shadow(0 0 5px white) drop-shadow(0 0 10px rgba(56,189,248,0.6));animation:icobra-snow 3.5s ease-in-out infinite 1s;"><div style="position:relative;width:2px;height:21px;background:white;border-radius:2px;"><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(60deg);"></div><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(-60deg);"></div></div></div>
        <div style="position:absolute;top:210px;left:72%;z-index:1;filter:drop-shadow(0 0 5px white) drop-shadow(0 0 10px rgba(56,189,248,0.6));animation:icobra-snow 3s ease-in-out infinite 0.8s;"><div style="position:relative;width:2px;height:17px;background:white;border-radius:2px;"><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(60deg);"></div><div style="position:absolute;top:0;left:0;width:100%;height:100%;background:white;border-radius:2px;transform:rotate(-60deg);"></div></div></div>
        <!-- Tail tip -->
        <div style="position:absolute;width:36px;height:24px;bottom:80px;left:25px;background:radial-gradient(circle at 35% 30%,#bae6fd,#7dd3fc,#0284c7);border:2px solid #0c4a6e;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:icobra-tail 0.6s ease-in-out infinite alternate;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.4),0 0 5px rgba(186,230,253,0.8);"></div>
        <!-- Cobra Hood with flare and sway animation -->
        <div style="position:absolute;width:164px;height:136px;top:40px;left:38px;border-radius:50% 50% 50% 50% / 30% 30% 80% 80%;background:repeating-linear-gradient(to bottom, transparent, transparent 13px, #0369a1 13px, #0369a1 16px), linear-gradient(to bottom, #bae6fd, #7dd3fc);border:3px solid #0c4a6e;z-index:18;box-shadow:inset 0 0 15px rgba(0,0,0,0.2), inset 4px 4px 12px rgba(186,230,253,0.3);overflow:hidden;animation:cobra-hood-flare 4s ease-in-out infinite, cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Hood highlight -->
          <div style="position:absolute;width:40px;height:30px;background:rgba(255,255,255,0.2);border-radius:50%;top:15px;left:25px;filter:blur(5px);"></div>
          <!-- Hood Markings - positioned lower and wider to be visible around head -->
          <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:140px;height:55px;opacity:0.9;">
            <div style="position:absolute;width:30px;height:30px;background:#7dd3fc;border:3px solid #e0f2fe;border-radius:50%;top:0;left:0;box-shadow:0 0 10px #e0f2fe;"></div>
            <div style="position:absolute;width:30px;height:30px;background:#7dd3fc;border:3px solid #e0f2fe;border-radius:50%;top:0;right:0;box-shadow:0 0 10px #e0f2fe;"></div>
            <div style="position:absolute;top:15px;left:46px;width:40px;height:27px;border:3px solid #e0f2fe;border-top:none;border-radius:0 0 50% 50%;box-shadow:0 3px 10px #e0f2fe;"></div>
          </div>
        </div>
        <!-- Neck - extends down like main cobra (sways from base) -->
        <div style="position:absolute;width:50px;height:96px;top:95px;left:95px;z-index:25;background:linear-gradient(145deg, #7dd3fc, #0284c7);border:2px solid #0c4a6e;border-bottom:none;border-top:none;border-radius:6px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.4),0 0 5px rgba(186,230,253,0.8);animation:cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:linear-gradient(to right, #e0f2fe, #7dd3fc);opacity:0.9;"></div>
        </div>
        <!-- Coil Middle -->
        <div style="position:absolute;width:116px;height:54px;bottom:85px;left:62px;z-index:12;background:radial-gradient(circle at 35% 30%,#bae6fd,#7dd3fc,#0284c7);border:2px solid #0c4a6e;border-radius:27px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.4),0 0 5px rgba(186,230,253,0.8);"></div>
        <!-- Coil Base -->
        <div style="position:absolute;width:150px;height:60px;bottom:45px;left:45px;z-index:10;background:radial-gradient(circle at 35% 30%,#bae6fd,#7dd3fc,#0284c7);border:2px solid #0c4a6e;border-radius:30px;box-shadow:inset 1px 1px 6px rgba(255,255,255,0.4),0 0 5px rgba(186,230,253,0.8);"></div>
        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:102px;height:82px;top:28px;left:68px;z-index:30;background:radial-gradient(circle at 35% 30%,#bae6fd,#7dd3fc,#0c4a6e);border:3px solid #0c4a6e;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;box-shadow:inset 3px 3px 10px rgba(255,255,255,0.5), inset -2px -2px 6px rgba(12,74,110,0.2);animation:cobra-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight -->
          <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.35);border-radius:50%;top:10px;left:15px;filter:blur(3px);"></div>
          <!-- Eyes (Icy pale with vertical slit) -->
          <div style="position:absolute;top:15px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #f0f9ff 0%, #e0f2fe 70%, #bae6fd 100%);border-radius:55% 55% 45% 45%;border:3px solid #0c4a6e;position:relative;animation:icobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#1e3a8a;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;box-shadow:0 0 3px white;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #f0f9ff 0%, #e0f2fe 70%, #bae6fd 100%);border-radius:55% 55% 45% 45%;border:3px solid #0c4a6e;position:relative;animation:icobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:#1e3a8a;border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;box-shadow:0 0 3px white;"></div>
              </div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:14px;height:8px;background:#bae6fd;border-radius:50%;opacity:0.6;filter:blur(1px);box-shadow:0 0 5px #bae6fd;"></div>
            <div style="width:14px;height:8px;background:#bae6fd;border-radius:50%;opacity:0.6;filter:blur(1px);box-shadow:0 0 5px #bae6fd;"></div>
          </div>
          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:40px;height:23px;background:radial-gradient(ellipse at 50% 30%, #0284c7 0%, #0c4a6e 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:10px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);box-shadow:0 0 5px white;"></div>
              <div style="position:absolute;top:17px;right:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);box-shadow:0 0 5px white;"></div>
              <!-- Ice blue tongue -->
              <div style="position:absolute;top:17px;left:50%;margin-left:-3px;width:4px;height:23px;background:#60a5fa;transform-origin:top;animation:icobra-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#60a5fa;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#60a5fa;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    12:` <!-- King Cobra -->
      <div style="position:relative;width:240px;height:280px;animation:cobra-sway 3s ease-in-out infinite alternate, cobra-hypnotic-rise 5s ease-in-out infinite;">
        <!-- Tail tip (behind coils) -->
        <div style="position:absolute;width:40px;height:27px;bottom:80px;left:25px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:3px solid #78350f;border-radius:50% 0 0 50%;z-index:5;transform-origin:right center;animation:cobra-tail-wag 0.6s ease-in-out infinite alternate;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.4);"></div>

        <!-- Coil base -->
        <div style="position:absolute;width:150px;height:60px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:3px solid #78350f;border-radius:30px;bottom:45px;left:45px;z-index:10;box-shadow:inset 3px 3px 10px rgba(254,243,199,0.4), inset -2px -2px 6px rgba(120,53,15,0.3);">
          <div style="position:absolute;width:30px;height:18px;background:rgba(254,243,199,0.3);border-radius:50%;top:8px;left:20px;filter:blur(3px);"></div>
        </div>

        <!-- Coil middle -->
        <div style="position:absolute;width:116px;height:54px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:3px solid #78350f;border-radius:27px;bottom:85px;left:62px;z-index:12;box-shadow:inset 3px 3px 10px rgba(254,243,199,0.4), inset -2px -2px 6px rgba(120,53,15,0.3);">
          <div style="position:absolute;width:25px;height:15px;background:rgba(254,243,199,0.3);border-radius:50%;top:6px;left:15px;filter:blur(3px);"></div>
        </div>

        <!-- Neck stalk - extends down like purple snake (sways from base) -->
        <div style="position:absolute;width:50px;height:96px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:3px solid #78350f;border-bottom:none;border-top:none;top:95px;left:95px;z-index:25;border-radius:7px;box-shadow:inset 2px 2px 8px rgba(254,243,199,0.4);animation:cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Belly stripe -->
          <div style="position:absolute;top:0;left:13px;width:24px;height:100%;background:radial-gradient(ellipse at 50% 30%, #fef3c7 0%, #fde68a 60%, #fcd34d 100%);opacity:0.85;"></div>
        </div>

        <!-- Cobra hood with flare and sway animation -->
        <div style="position:absolute;width:164px;height:136px;top:40px;left:38px;border-radius:50% 50% 50% 50% / 30% 30% 80% 80%;background:repeating-linear-gradient(to bottom, transparent, transparent 13px, #92400e 13px, #92400e 16px), radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #fbbf24 40%, #d97706 100%);border:3px solid #78350f;z-index:18;box-shadow:inset 0 0 15px rgba(0,0,0,0.2), inset 4px 4px 12px rgba(254,243,199,0.3);overflow:hidden;animation:cobra-hood-flare 4s ease-in-out infinite, cobra-neck-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Hood highlight -->
          <div style="position:absolute;width:40px;height:30px;background:rgba(255,255,255,0.25);border-radius:50%;top:15px;left:25px;filter:blur(5px);"></div>
          <!-- Hood markings - positioned lower and wider to be visible around head -->
          <div style="position:absolute;top:55px;left:50%;transform:translateX(-50%);width:140px;height:55px;opacity:0.9;">
            <div style="position:absolute;width:30px;height:30px;background:radial-gradient(circle at 35% 30%, #fbbf24, #b45309);border:3px solid #fef3c7;border-radius:50%;top:0;left:0;"></div>
            <div style="position:absolute;width:30px;height:30px;background:radial-gradient(circle at 35% 30%, #fbbf24, #b45309);border:3px solid #fef3c7;border-radius:50%;top:0;right:0;"></div>
            <div style="position:absolute;top:15px;left:46px;width:40px;height:27px;border:3px solid #fef3c7;border-top:none;border-radius:0 0 50% 50%;"></div>
          </div>
        </div>

        <!-- Head with hypnotic sway -->
        <div style="position:absolute;width:102px;height:82px;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;top:28px;left:68px;z-index:30;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:3px solid #78350f;box-shadow:inset 3px 3px 10px rgba(254,243,199,0.5), inset -2px -2px 6px rgba(120,53,15,0.2);animation:cobra-head-sway 6s ease-in-out infinite;transform-origin:center bottom;">
          <!-- Head highlight -->
          <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.35);border-radius:50%;top:10px;left:15px;filter:blur(3px);"></div>

          <!-- CROWN - Royal golden crown (sits on top of head) -->
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);z-index:40;">
            <!-- Crown base -->
            <div style="width:60px;height:18px;background:linear-gradient(to bottom, #fef08a 0%, #fbbf24 50%, #d97706 100%);border:2px solid #92400e;border-radius:4px 4px 0 0;position:relative;">
              <!-- Jewel band -->
              <div style="position:absolute;bottom:2px;left:5px;display:flex;gap:8px;">
                <div style="width:8px;height:8px;background:radial-gradient(circle at 30% 30%, #ef4444, #991b1b);border-radius:50%;border:1px solid #fef08a;box-shadow:0 0 4px #ef4444;"></div>
                <div style="width:8px;height:8px;background:radial-gradient(circle at 30% 30%, #3b82f6, #1e40af);border-radius:50%;border:1px solid #fef08a;box-shadow:0 0 4px #3b82f6;"></div>
                <div style="width:8px;height:8px;background:radial-gradient(circle at 30% 30%, #22c55e, #166534);border-radius:50%;border:1px solid #fef08a;box-shadow:0 0 4px #22c55e;"></div>
              </div>
            </div>
            <!-- Crown points -->
            <div style="position:absolute;top:-16px;left:5px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:18px solid #fbbf24;filter:drop-shadow(0 0 2px #fef08a);"></div>
            <div style="position:absolute;top:-22px;left:22px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:24px solid #fbbf24;filter:drop-shadow(0 0 2px #fef08a);">
              <div style="position:absolute;top:-6px;left:-3px;width:6px;height:6px;background:radial-gradient(circle at 30% 30%, #a855f7, #7c3aed);border-radius:50%;border:1px solid #fef08a;box-shadow:0 0 6px #a855f7;"></div>
            </div>
            <div style="position:absolute;top:-16px;right:5px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:18px solid #fbbf24;filter:drop-shadow(0 0 2px #fef08a);"></div>
          </div>

          <!-- Eyes (yellow with vertical slit pupils) -->
          <div style="position:absolute;top:18px;width:100%;display:flex;justify-content:center;gap:6px;">
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef9c3 0%, #fef08a 70%, #fbbf24 100%);border-radius:55% 55% 45% 45%;border:3px solid #78350f;position:relative;animation:cobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
            <div class="s-eye" style="width:30px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fef9c3 0%, #fef08a 70%, #fbbf24 100%);border-radius:55% 55% 45% 45%;border:3px solid #78350f;position:relative;animation:cobra-blink 4s infinite;box-shadow:inset 2px 2px 6px rgba(255,255,200,0.6);">
              <div style="position:absolute;width:6px;height:22px;background:radial-gradient(ellipse at 50% 30%, #1a1a1a 0%, #000 100%);border-radius:50%;top:5px;left:12px;animation:snake-eye-look 4s ease-in-out infinite;">
                <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:0;"></div>
              </div>
            </div>
          </div>

          <!-- Blush -->
          <div style="position:absolute;top:50px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
            <div style="width:14px;height:8px;background:#fca5a5;border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          </div>

          <!-- Snout -->
          <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);z-index:35;">
            <div style="width:40px;height:23px;background:radial-gradient(ellipse at 50% 30%, #b45309 0%, #92400e 100%);border-radius:40% 40% 60% 60%;display:flex;justify-content:center;padding-top:5px;position:relative;">
              <!-- Nostrils -->
              <div style="display:flex;gap:10px;">
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(15deg);"></div>
                <div style="width:4px;height:2px;background:rgba(0,0,0,0.5);border-radius:1px;transform:rotate(-15deg);"></div>
              </div>
              <!-- Fangs -->
              <div style="position:absolute;top:17px;left:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <div style="position:absolute;top:17px;right:7px;width:7px;height:10px;background:white;clip-path:polygon(0 0, 100% 0, 50% 100%);"></div>
              <!-- Tongue -->
              <div style="position:absolute;top:17px;left:50%;margin-left:-3px;width:4px;height:23px;background:#ef4444;transform-origin:top;animation:cobra-tongue 3s infinite;z-index:1;">
                <div style="position:absolute;bottom:-6px;left:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(-35deg);transform-origin:top center;"></div>
                <div style="position:absolute;bottom:-6px;right:-1px;width:4px;height:7px;background:#ef4444;clip-path:polygon(0 0, 100% 0, 50% 100%);transform:rotate(35deg);transform-origin:top center;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    13:` <!-- Golden Gecko -->
      <div style="position:relative;width:240px;height:280px;">
        <!-- Tail (SVG curved) - right side, behind body -->
        <div style="position:absolute;right:5px;top:75px;width:112px;height:91px;z-index:5;transform-origin:left center;animation:gecko-tail-sway 3s ease-in-out infinite;">
          <svg viewBox="0 0 160 130" style="width:100%;height:100%;overflow:visible;">
            <defs>
              <linearGradient id="goldGeckoTailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
              </linearGradient>
            </defs>
            <path d="M 0,100 Q 70,100 130,30 Q 140,15 130,5 Q 100,30 0,60 Z" fill="url(#goldGeckoTailGrad)" stroke="#92400e" stroke-width="4" stroke-linejoin="round"/>
          </svg>
          <div style="position:absolute;top:42px;left:28px;width:7px;height:5px;background:#d97706;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:28px;left:56px;width:5px;height:4px;background:#d97706;border-radius:50%;opacity:0.7;"></div>
        </div>

        <!-- Back right leg (behind body, darker) -->
        <div style="position:absolute;top:135px;left:152px;width:25px;height:40px;background:transparent;z-index:10;transform-origin:top center;--leg-rest:10deg;--leg-run1:-25deg;--leg-run2:40deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #f59e0b 50%, #d97706 100%);border:3px solid #92400e;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.4), inset -2px -2px 4px rgba(146,64,14,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Body -->
        <div style="position:absolute;top:107px;left:70px;width:98px;height:60px;background:radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #f59e0b 50%, #d97706 100%);border:3px solid #92400e;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;z-index:20;animation:gecko-breathe 3s infinite;box-shadow:inset 4px 4px 12px rgba(254,243,199,0.5), inset -3px -3px 8px rgba(146,64,14,0.3);">
          <!-- Body highlight spot -->
          <div style="position:absolute;width:25px;height:18px;background:rgba(255,255,255,0.4);border-radius:50%;top:8px;left:15px;filter:blur(3px);"></div>
          <!-- Belly with gradient -->
          <div style="position:absolute;bottom:3px;left:14px;width:70px;height:24px;background:radial-gradient(ellipse at 50% 40%, #fffbeb 0%, #fef3c7 60%, #fde68a 100%);border-radius:50%;opacity:0.95;"></div>
          <!-- Scale spots -->
          <div style="position:absolute;top:10px;left:21px;width:8px;height:7px;background:#b45309;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:18px;left:42px;width:7px;height:5px;background:#b45309;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:7px;left:63px;width:5px;height:4px;background:#b45309;border-radius:50%;opacity:0.7;"></div>
        </div>

        <!-- Head wrapper -->
        <div style="position:absolute;top:55px;left:12px;width:132px;height:80px;z-index:30;transform:rotate(-10deg);animation:gecko-breathe 3s infinite;">
          <!-- Head shape with 3D gradient -->
          <div style="position:absolute;top:0;left:12px;width:112px;height:80px;background:radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #f59e0b 50%, #d97706 100%);border:3px solid #92400e;border-radius:45% 55% 45% 45% / 55% 55% 45% 45%;box-shadow:inset 4px 4px 12px rgba(254,243,199,0.5), inset -3px -3px 8px rgba(146,64,14,0.3);">
            <!-- Head highlight spot -->
            <div style="position:absolute;width:28px;height:20px;background:rgba(255,255,255,0.45);border-radius:50%;top:8px;left:18px;filter:blur(3px);"></div>
            <!-- Belly/chin with gradient -->
            <div style="position:absolute;bottom:3px;left:14px;width:84px;height:28px;background:radial-gradient(ellipse at 50% 40%, #fffbeb 0%, #fef3c7 60%, #fde68a 100%);border-radius:50%;"></div>
            <!-- Nostrils -->
            <div style="position:absolute;top:45px;left:38px;width:3px;height:2px;background:#92400e;border-radius:50%;"></div>
            <div style="position:absolute;top:45px;left:70px;width:3px;height:2px;background:#92400e;border-radius:50%;"></div>
            <!-- Mouth interior -->
            <div style="position:absolute;bottom:12px;left:50%;transform:translateX(-50%) scaleY(0);width:30px;height:12px;background:radial-gradient(ellipse at 50% 30%, #5c3d2e, #3d2820);border-radius:50%;opacity:0;animation:gecko-mouth-inside 10s ease-in-out infinite;"></div>
            <!-- Mouth line -->
            <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%) rotate(-2deg);width:49px;height:17px;border-bottom:3px solid #92400e;border-radius:50%;transform-origin:top center;animation:gecko-mouth-open 10s ease-in-out infinite;"></div>
            <!-- Head spot -->
            <div style="position:absolute;top:7px;left:52px;width:5px;height:4px;background:#b45309;border-radius:50%;opacity:0.7;"></div>
          </div>

          <!-- Right eye with amber/orange 3D effect -->
          <div style="position:absolute;top:7px;right:0;width:40px;height:40px;transform:rotate(8deg);z-index:35;">
            <div style="width:100%;height:100%;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #f59e0b 50%, #d97706 100%);border:3px solid #78350f;border-radius:50%;overflow:hidden;position:relative;animation:gecko-blink 4s infinite;box-shadow:inset 3px 3px 8px rgba(254,243,199,0.5), inset -2px -2px 6px rgba(146,64,14,0.3);">
              <!-- Eye highlight -->
              <div style="position:absolute;width:10px;height:8px;background:rgba(255,255,255,0.35);border-radius:50%;top:4px;left:6px;filter:blur(2px);"></div>
              <div style="position:absolute;width:24px;height:24px;background:radial-gradient(circle at 30% 30%, #3d2814, #2a1a10);border-radius:50%;top:8px;left:7px;animation:gecko-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:3px;left:3px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Left eye with amber/orange 3D effect -->
          <div style="position:absolute;top:7px;left:8px;width:40px;height:40px;transform:rotate(-8deg);z-index:35;">
            <div style="width:100%;height:100%;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #f59e0b 50%, #d97706 100%);border:3px solid #78350f;border-radius:50%;overflow:hidden;position:relative;animation:gecko-blink 4s infinite 0.1s;box-shadow:inset 3px 3px 8px rgba(254,243,199,0.5), inset -2px -2px 6px rgba(146,64,14,0.3);">
              <!-- Eye highlight -->
              <div style="position:absolute;width:10px;height:8px;background:rgba(255,255,255,0.35);border-radius:50%;top:4px;left:6px;filter:blur(2px);"></div>
              <div style="position:absolute;width:24px;height:24px;background:radial-gradient(circle at 30% 30%, #3d2814, #2a1a10);border-radius:50%;top:8px;left:7px;animation:gecko-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:3px;left:3px;"></div>
                <div style="position:absolute;width:3px;height:3px;background:white;border-radius:50%;bottom:5px;right:5px;opacity:0.5;"></div>
              </div>
            </div>
          </div>

          <!-- Tongue (curved SVG with gradient) -->
          <div style="position:absolute;bottom:18px;left:20px;width:70px;height:55px;z-index:40;transform-origin:72% 100%;animation:gecko-tongue-lick 10s ease-in-out infinite;">
            <svg viewBox="0 0 70 55" style="width:100%;height:100%;overflow:visible;animation:gecko-tongue-extend 10s ease-in-out infinite;">
              <defs>
                <radialGradient id="goldGeckoTongueGrad" cx="30%" cy="30%">
                  <stop offset="0%" style="stop-color:#ff8a9b;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ff6b81;stop-opacity:1" />
                </radialGradient>
              </defs>
              <path d="M 45,55 C 35,55 30,50 22,40 C 14,30 8,22 8,14 C 8,6 16,2 26,6 C 36,10 38,22 30,32 C 40,42 55,55 55,55 Z" fill="url(#goldGeckoTongueGrad)" stroke="#e84057" stroke-width="1"/>
              <ellipse cx="17" cy="10" rx="18" ry="12" fill="url(#goldGeckoTongueGrad)"/>
            </svg>
          </div>
        </div>

        <!-- Front left leg with 3D -->
        <div style="position:absolute;top:145px;left:75px;width:25px;height:40px;background:transparent;z-index:25;transform-origin:top center;--leg-rest:15deg;--leg-run1:-25deg;--leg-run2:45deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #f59e0b 50%, #d97706 100%);border:3px solid #92400e;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.4), inset -2px -2px 4px rgba(146,64,14,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
          </div>
        </div>

        <!-- Back left leg with 3D -->
        <div style="position:absolute;top:145px;left:131px;width:25px;height:40px;background:transparent;z-index:25;transform-origin:top center;--leg-rest:-10deg;--leg-run1:35deg;--leg-run2:-35deg;animation:gecko-leg-burst 5s ease-in-out infinite;">
          <div style="position:absolute;top:0;left:2px;width:21px;height:32px;background:radial-gradient(ellipse at 35% 30%, #fcd34d 0%, #f59e0b 50%, #d97706 100%);border:3px solid #92400e;border-radius:10px;box-shadow:inset 2px 2px 6px rgba(254,243,199,0.4), inset -2px -2px 4px rgba(146,64,14,0.3);"></div>
          <div style="position:absolute;bottom:0;left:0;width:26px;height:9px;display:flex;gap:1px;">
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
            <div style="width:7px;height:7px;background:radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b);border:2px solid #92400e;border-radius:50%;"></div>
          </div>
        </div>
      </div>
    `
  };

  const design = reptileDesigns[variant]||reptileDesigns[0];
  const shadowHTML = `<div class="adult-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}

function getBuddyColors(category, level = 1) {
  // Define color palettes for each category
  const colorPalettes = {
    mammals: {
      main: '#f4ede4',    // Beige
      dark: '#a68f81',    // Brown
      accent: '#ffc9d1'   // Pink
    },
    birds: {
      main: '#fce7f3',    // Light pink
      dark: '#ec4899',    // Pink
      accent: '#fef3c7'   // Light yellow
    },
    reptiles: {
      main: '#dcfce7',    // Light green
      dark: '#22c55e',    // Green
      accent: '#fef3c7'   // Light yellow
    },
    aquatic: {
      main: '#dbeafe',    // Light blue
      dark: '#3b82f6',    // Blue
      accent: '#e0f2fe'   // Cyan
    },
    insects: {
      main: '#fef9c3',    // Light yellow
      dark: '#eab308',    // Yellow
      accent: '#fdba74'   // Orange
    },
    fantasy: {
      main: '#fae8ff',    // Light purple
      dark: '#d946ef',    // Magenta
      accent: '#fef3c7'   // Light yellow
    }
  };

  return colorPalettes[category] || colorPalettes.mammals;
}

