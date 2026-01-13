function renderAdultMammal(variantIndex, level = 1){
  const variant=variantIndex||0;
  const colors = getBuddyColors('mammals', level);
  const openWrapper = `<div class="buddy-node" style="--dynamic-main: ${colors.main}; --dynamic-dark: ${colors.dark}; --dynamic-accent: ${colors.accent};">`;
  const closeWrapper = `</div>`;

  const mammalDesigns={
    // ===== BUNNY BUDDY - Mammals Variant 0 =====
    // Source: BunnyBuddy.html (scaled to fit 240x280 canvas)
    0:`
      <div style="position:relative;width:240px;height:280px;animation:bunny-hop 3s ease-in-out infinite;">
        <!-- Ears - one straight, one floppy (scaled to fit inside canvas) -->
        <div style="position:absolute;width:36px;height:90px;background:#ffffff;border:4px solid #d6ccc2;border-radius:50% 50% 20% 20%;z-index:30;transform-origin:bottom center;top:5px;left:68px;animation:bunny-ear-wiggle 3s ease-in-out infinite;">
          <div style="position:absolute;width:16px;height:65px;background:#ffcad4;border-radius:40%;top:12px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <div style="position:absolute;width:36px;height:90px;background:#ffffff;border:4px solid #d6ccc2;border-radius:50% 50% 50% 50% / 40% 80% 20% 60%;z-index:30;transform-origin:bottom center;top:5px;right:68px;transform:rotate(20deg);">
          <div style="position:absolute;width:16px;height:65px;background:#ffcad4;border-radius:40%;top:12px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Head - wide squishy cheeks -->
        <div style="position:absolute;width:120px;height:100px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:4px solid #d6ccc2;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;top:70px;left:60px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.75), inset -5px -5px 14px rgba(180,180,175,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:22px;right:24px;filter:blur(3px);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:28px;width:100%;display:flex;justify-content:center;gap:28px;">
            <div style="width:20px;height:22px;background:#3d348b;border-radius:50%;position:relative;animation:bunny-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.6;"></div>
            </div>
            <div style="width:20px;height:22px;background:#3d348b;border-radius:50%;position:relative;animation:bunny-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:3px;right:3px;opacity:0.6;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;top:54px;left:50%;transform:translateX(-50%);width:14px;height:10px;background:#ffafcc;border-radius:50%;z-index:50;"></div>
          <!-- Mouth - w shape -->
          <div style="position:absolute;top:65px;left:50%;transform:translateX(-50%);display:flex;z-index:99;">
            <div style="width:12px;height:8px;border:2.5px solid #d6ccc2;border-top:none;border-radius:0 0 8px 8px;margin:0 -1px;"></div>
            <div style="width:12px;height:8px;border:2.5px solid #d6ccc2;border-top:none;border-radius:0 0 8px 8px;margin:0 -1px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:58px;left:12px;width:22px;height:11px;background:#ffcfd2;border-radius:50%;filter:blur(2px);opacity:0.8;"></div>
          <div style="position:absolute;top:58px;right:12px;width:22px;height:11px;background:#ffcfd2;border-radius:50%;filter:blur(2px);opacity:0.8;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:140px;height:105px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:4px solid #d6ccc2;border-radius:50% 50% 40% 40%;top:150px;left:50px;z-index:20;box-shadow:inset 8px 8px 22px rgba(255,255,255,0.75), inset -6px -6px 16px rgba(180,180,175,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:25px;right:30px;filter:blur(3px);"></div>
          <!-- Front paws -->
          <div style="position:absolute;width:30px;height:26px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:3px solid #d6ccc2;border-radius:13px;z-index:25;top:70px;left:22px;transform:rotate(10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,175,0.35);"></div>
          <div style="position:absolute;width:30px;height:26px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:3px solid #d6ccc2;border-radius:13px;z-index:25;top:70px;right:22px;transform:rotate(-10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,175,0.35);"></div>
          <!-- Back feet with beans -->
          <div style="position:absolute;width:48px;height:72px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:3px solid #d6ccc2;border-radius:26px;z-index:21;top:28px;left:-24px;transform:rotate(-15deg);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:inset 5px 5px 14px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(180,180,175,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:2px;">
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:28px;height:22px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;margin-top:3px;box-shadow:inset 3px 3px 6px rgba(255,255,255,0.5);"></div>
          </div>
          <div style="position:absolute;width:48px;height:72px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:3px solid #d6ccc2;border-radius:26px;z-index:21;top:28px;right:-24px;transform:rotate(15deg);display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:inset 5px 5px 14px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(180,180,175,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:2px;">
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
              <div style="width:10px;height:14px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:28px;height:22px;background:radial-gradient(ellipse at 40% 35%, #ffd8de 0%, #ffcad4 50%, #f5b8c0 100%);border-radius:50%;margin-top:3px;box-shadow:inset 3px 3px 6px rgba(255,255,255,0.5);"></div>
          </div>
        </div>
        <!-- Tail - fluffy -->
        <div style="position:absolute;width:42px;height:42px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #fafafa 25%, #f0f0eb 55%, #e0e0db 100%);border:4px solid #d6ccc2;border-radius:50%;bottom:30px;right:15px;z-index:10;animation:tail-wiggle 2s ease-in-out infinite;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(180,180,175,0.35);"></div>
      </div>
    `,
    // ===== KITTY - Mammals Variant 1 =====
    // Source: KittyBuddy.html (converted to inline styles, adjusted to 280px height)
    1:`
      <div style="position:relative;width:240px;height:280px;animation:kitty-bounce 2.5s ease-in-out infinite;">
        <!-- Ears -->
        <div style="position:absolute;width:54px;height:40px;background:#f3f4f6;border:3px solid #d1d5db;border-radius:50% 50% 10% 10% / 100% 100% 10% 10%;z-index:30;transform-origin:bottom center;top:31px;left:60px;transform:rotate(-28deg);">
          <div style="position:absolute;width:32px;height:24px;background:#fecdd3;border-radius:50% 50% 10% 10% / 100% 100% 10% 10%;bottom:2px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <div style="position:absolute;width:54px;height:40px;background:#f3f4f6;border:3px solid #d1d5db;border-radius:50% 50% 10% 10% / 100% 100% 10% 10%;z-index:30;transform-origin:bottom center;top:31px;right:60px;transform:rotate(28deg);">
          <div style="position:absolute;width:32px;height:24px;background:#fecdd3;border-radius:50% 50% 10% 10% / 100% 100% 10% 10%;bottom:2px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:120px;height:95px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:4px solid #d1d5db;border-radius:50% 50% 48% 48% / 55% 55% 45% 45%;top:50px;left:60px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.75), inset -5px -5px 14px rgba(180,180,180,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:22px;right:24px;filter:blur(3px);"></div>
          <!-- Whiskers -->
          <div style="position:absolute;top:55px;width:100%;">
            <div style="position:absolute;width:40px;height:2px;background:#d1d5db;opacity:0.5;left:-25px;transform:rotate(10deg);"></div>
            <div style="position:absolute;width:40px;height:2px;background:#d1d5db;opacity:0.5;left:-25px;top:8px;transform:rotate(0deg);"></div>
            <div style="position:absolute;width:40px;height:2px;background:#d1d5db;opacity:0.5;right:-25px;transform:rotate(-10deg);"></div>
            <div style="position:absolute;width:40px;height:2px;background:#d1d5db;opacity:0.5;right:-25px;top:8px;transform:rotate(0deg);"></div>
          </div>
          <!-- Eyes -->
          <div style="position:absolute;top:25px;width:100%;display:flex;justify-content:center;gap:20px;">
            <div style="width:28px;height:28px;background:#1a1a1a;border-radius:50%;position:relative;border:3px solid #2dd4bf;animation:kitty-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
            <div style="width:28px;height:28px;background:#1a1a1a;border-radius:50%;position:relative;border:3px solid #2dd4bf;animation:kitty-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:12px;height:8px;background:#fda4af;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;top:55px;left:50%;transform:translateX(-50%);z-index:45;"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:62px;left:50%;transform:translateX(-50%);display:flex;z-index:44;">
            <div style="width:12px;height:8px;border:2px solid #d1d5db;border-top:none;border-radius:0 0 10px 10px;"></div>
            <div style="width:12px;height:8px;border:2px solid #d1d5db;border-top:none;border-radius:0 0 10px 10px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:58px;width:100%;display:flex;justify-content:space-around;padding:0 16px;">
            <div style="width:16px;height:8px;background:#ffe4e6;border-radius:50%;opacity:0.6;"></div>
            <div style="width:16px;height:8px;background:#ffe4e6;border-radius:50%;opacity:0.6;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:130px;height:100px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:4px solid #d1d5db;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:125px;left:55px;z-index:20;box-shadow:inset 8px 8px 22px rgba(255,255,255,0.75), inset -6px -6px 16px rgba(180,180,180,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:40px;height:28px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:24px;right:28px;filter:blur(3px);"></div>
          <!-- Side paws -->
          <div style="position:absolute;width:34px;height:28px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:3px solid #d1d5db;border-radius:50%;z-index:25;top:50px;left:-15px;transform:rotate(-30deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,180,0.35);"></div>
          <div style="position:absolute;width:34px;height:28px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:3px solid #d1d5db;border-radius:50%;z-index:25;top:50px;right:-15px;transform:rotate(30deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,180,0.35);"></div>
          <!-- Front paws with beans -->
          <div style="position:absolute;width:34px;height:28px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:3px solid #d1d5db;border-radius:12px 12px 15px 15px;z-index:25;bottom:-10px;left:30px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:4px;animation:paw-step 0.8s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,180,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:1px;">
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:12px;height:9px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50% 50% 40% 40%;margin-top:2px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
          </div>
          <div style="position:absolute;width:34px;height:28px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:3px solid #d1d5db;border-radius:12px 12px 15px 15px;z-index:25;bottom:-10px;right:30px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:4px;animation:paw-step 0.8s ease-in-out infinite reverse;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(180,180,180,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:1px;">
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:4px;height:5px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:12px;height:9px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50% 50% 40% 40%;margin-top:2px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
          </div>
        </div>
        <!-- Tail -->
        <div style="position:absolute;width:100px;height:20px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f9fafb 25%, #f3f4f6 55%, #e5e7eb 100%);border:4px solid #d1d5db;border-radius:20px;bottom:66px;right:-25px;z-index:-10;transform-origin:left center;animation:tail-swish 1.5s ease-in-out infinite;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(180,180,180,0.35);"></div>
      </div>
    `,
    // ===== KOALA - Mammals Variant 2 =====
    // Source: Koala_Buddy.html (converted to inline styles, adjusted to 280px height)
    2:`
      <div style="position:relative;width:240px;height:280px;animation:koala-bounce 3s ease-in-out infinite;">
        <!-- Ears -->
        <div style="position:absolute;width:90px;height:90px;background:#a5a5a5;border:4px solid #7a7a7a;border-radius:50%;z-index:30;top:20px;left:-10px;overflow:hidden;transform-origin:bottom center;animation:koala-ear-wiggle-l 4s ease-in-out infinite;">
          <div style="position:absolute;width:60px;height:60px;background:#ffffff;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.8;"></div>
        </div>
        <div style="position:absolute;width:90px;height:90px;background:#a5a5a5;border:4px solid #7a7a7a;border-radius:50%;z-index:30;top:20px;right:-10px;overflow:hidden;transform-origin:bottom center;animation:koala-ear-wiggle-r 4s ease-in-out infinite;">
          <div style="position:absolute;width:60px;height:60px;background:#ffffff;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.8;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:160px;height:130px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:4px solid #7a7a7a;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:40px;left:40px;z-index:40;box-shadow:inset 8px 8px 22px rgba(240,240,240,0.7), inset -6px -6px 16px rgba(80,80,80,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:45px;height:32px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:26px;right:28px;filter:blur(3px);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:center;gap:40px;">
            <div style="width:18px;height:18px;background:#1a1a1a;border-radius:50%;position:relative;animation:koala-blink 5s infinite;">
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
            <div style="width:18px;height:18px;background:#1a1a1a;border-radius:50%;position:relative;animation:koala-blink 5s infinite;">
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
          </div>
          <!-- Nose (sniffing) -->
          <div style="position:absolute;width:32px;height:48px;background:#3d3d3d;border-radius:45% 45% 50% 50% / 40% 40% 60% 60%;top:45px;left:50%;transform:translateX(-50%);z-index:50;animation:sniff 0.8s infinite;"></div>
          <!-- Blush -->
          <div style="position:absolute;top:75px;width:100%;display:flex;justify-content:space-around;padding:0 16px;">
            <div style="width:16px;height:8px;background:#ffcfd2;border-radius:50%;opacity:0.6;"></div>
            <div style="width:16px;height:8px;background:#ffcfd2;border-radius:50%;opacity:0.6;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:140px;height:110px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:4px solid #7a7a7a;border-radius:50% 50% 42% 42% / 65% 65% 35% 35%;top:140px;left:50px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(240,240,240,0.7), inset -6px -6px 16px rgba(80,80,80,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:24px;right:28px;filter:blur(3px);"></div>
          <div style="position:absolute;width:80px;height:64px;background:rgba(255,255,255,0.3);border-radius:50%;bottom:8px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Front paws -->
        <div style="position:absolute;width:42px;height:35px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:3.5px solid #7a7a7a;border-radius:50%;z-index:45;top:155px;left:35px;animation:hand-wave-l 3s ease-in-out infinite;box-shadow:inset 5px 5px 12px rgba(240,240,240,0.7), inset -3px -3px 8px rgba(80,80,80,0.35);"></div>
        <div style="position:absolute;width:42px;height:35px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:3.5px solid #7a7a7a;border-radius:50%;z-index:45;top:155px;right:35px;animation:hand-wave-r 3s ease-in-out infinite;box-shadow:inset 5px 5px 12px rgba(240,240,240,0.7), inset -3px -3px 8px rgba(80,80,80,0.35);"></div>
        <!-- Back paws -->
        <div style="position:absolute;width:50px;height:40px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:3.5px solid #7a7a7a;border-radius:20px 20px 15px 15px;top:220px;left:45px;z-index:21;transform:rotate(-10deg);box-shadow:inset 5px 5px 12px rgba(240,240,240,0.7), inset -3px -3px 8px rgba(80,80,80,0.35);"></div>
        <div style="position:absolute;width:50px;height:40px;background:radial-gradient(ellipse at 35% 30%, #e0e0e0 0%, #c5c5c5 25%, #a5a5a5 55%, #7a7a7a 100%);border:3.5px solid #7a7a7a;border-radius:20px 20px 15px 15px;top:220px;right:45px;z-index:21;transform:rotate(10deg);box-shadow:inset 5px 5px 12px rgba(240,240,240,0.7), inset -3px -3px 8px rgba(80,80,80,0.35);"></div>
      </div>
    `,
    // ===== FOX - Mammals Variant 3 =====
    // Source: FoxBuddy.html (converted to inline styles)
    3:`
      <div style="position:relative;width:240px;height:280px;animation:fox-bounce 3s ease-in-out infinite;">
        <!-- Ears with wiggle -->
        <div style="position:absolute;width:55px;height:75px;background:#f97316;border:4px solid #271b12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;left:40px;transform:rotate(-25deg);animation:ear-wiggle-l 5s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#271b12;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>
        <div style="position:absolute;width:55px;height:75px;background:#f97316;border:4px solid #271b12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;right:40px;transform:rotate(25deg);animation:ear-wiggle-r 7s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#271b12;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>
        <!-- Tail with tip -->
        <div style="position:absolute;width:130px;height:60px;background:radial-gradient(ellipse at 35% 30%, #fdba74 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:40px;bottom:50px;right:-40px;z-index:5;transform-origin:left center;animation:tail-swish 2s ease-in-out infinite;overflow:hidden;box-shadow:inset 6px 6px 16px rgba(254,215,170,0.7), inset -4px -4px 10px rgba(140,45,15,0.4);">
          <div style="position:absolute;width:50px;height:100%;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f0f0f0 40%, #e0e0e0 100%);right:0;top:0;border-radius:0 40px 40px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);"></div>
        </div>
        <!-- Back paws -->
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 25%, #271b12 55%, #1a1414 100%);border:3.5px solid #1a1414;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:-60px;transform:rotate(-5deg);box-shadow:inset 4px 4px 10px rgba(80,60,45,0.7), inset -2px -2px 6px rgba(10,10,10,0.4);"></div>
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 25%, #271b12 55%, #1a1414 100%);border:3.5px solid #1a1414;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:12px;transform:rotate(5deg);box-shadow:inset 4px 4px 10px rgba(80,60,45,0.7), inset -2px -2px 6px rgba(10,10,10,0.4);"></div>
        <!-- Body with chest patch -->
        <div style="position:absolute;width:150px;height:125px;background:radial-gradient(ellipse at 35% 30%, #fdba74 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:45px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.7), inset -6px -6px 16px rgba(140,45,15,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:46px;height:34px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(6px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.4);border-radius:50%;top:26px;right:30px;filter:blur(3px);"></div>
          <div style="position:absolute;width:100px;height:90px;background:#ffffff;border-radius:50%;top:-10px;left:50%;transform:translateX(-50%);opacity:0.9;"></div>
        </div>
        <!-- Front paws with fingers -->
        <div style="position:absolute;width:42px;height:32px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 25%, #271b12 55%, #1a1414 100%);border:3px solid #1a1414;border-radius:14px;top:145px;left:40px;z-index:45;display:flex;justify-content:center;gap:3px;padding-top:2px;animation:hand-wave-l 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(80,60,45,0.7), inset -2px -2px 6px rgba(10,10,10,0.4);">
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
        </div>
        <div style="position:absolute;width:42px;height:32px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 25%, #271b12 55%, #1a1414 100%);border:3px solid #1a1414;border-radius:14px;top:145px;right:40px;z-index:45;display:flex;justify-content:center;gap:3px;padding-top:2px;animation:hand-wave-r 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(80,60,45,0.7), inset -2px -2px 6px rgba(10,10,10,0.4);">
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
          <div style="width:11px;height:11px;background:radial-gradient(ellipse at 35% 30%, #4a3828 0%, #3a2820 50%, #271b12 100%);border:2px solid #1a1414;border-radius:50%;margin-top:-7px;box-shadow:inset 2px 2px 4px rgba(80,60,45,0.6);"></div>
        </div>
        <!-- Head with face mask -->
        <div style="position:absolute;width:155px;height:115px;background:radial-gradient(ellipse at 35% 30%, #fdba74 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:28px;left:43px;z-index:40;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.7), inset -6px -6px 16px rgba(140,45,15,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.65);border-radius:50%;top:8px;left:16px;filter:blur(5px);z-index:42;"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.4);border-radius:50%;top:24px;right:26px;filter:blur(3px);z-index:42;"></div>
          <div style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:41;">
            <div style="position:absolute;width:34px;height:55px;background:#ffffff;top:55px;left:50%;transform:translateX(-50%);border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;opacity:0.95;"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;left:10px;opacity:0.95;transform:rotate(-20deg);"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;right:10px;opacity:0.95;transform:rotate(20deg);"></div>
          </div>
          <div style="position:absolute;top:45px;width:100%;display:flex;justify-content:center;gap:40px;z-index:50;">
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:rotate(-12deg);animation:fox-blink-l 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:scaleX(-1) rotate(-12deg);animation:fox-blink-r 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
          </div>
          <div style="position:absolute;width:60px;height:40px;bottom:-8px;left:50%;transform:translateX(-50%);z-index:60;">
            <div style="position:absolute;width:18px;height:12px;background:#111827;border-radius:50%;top:0;left:50%;transform:translateX(-50%);"></div>
            <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);display:flex;">
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            </div>
          </div>
          <div style="position:absolute;top:75px;width:100%;display:flex;justify-content:space-around;padding:0 32px;z-index:50;">
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
          </div>
        </div>
      </div>
    `,
    // ===== MOUSE - Mammals Variant 4 =====
    // Source: MouseBuddy.html (converted to inline styles)
    4:`
      <div style="position:relative;width:240px;height:280px;animation:joyful-bounce 2s ease-in-out infinite;">
        <!-- Ears -->
        <div style="position:absolute;width:95px;height:95px;background:#f4ede4;border:4px solid #a68f81;border-radius:50%;z-index:30;top:-15px;left:15px;">
          <div style="position:absolute;width:60px;height:60px;background:#ffc2d1;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
        </div>
        <div style="position:absolute;width:95px;height:95px;background:#f4ede4;border:4px solid #a68f81;border-radius:50%;z-index:30;top:-15px;right:15px;">
          <div style="position:absolute;width:60px;height:60px;background:#ffc2d1;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:140px;height:125px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:4px solid #a68f81;border-radius:55% 55% 45% 45%;top:35px;left:50px;z-index:40;box-shadow:inset 8px 8px 22px rgba(255,255,255,0.75), inset -6px -6px 16px rgba(160,140,125,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:40px;height:28px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:24px;right:26px;filter:blur(3px);"></div>
          <!-- Whiskers left -->
          <div style="position:absolute;top:75px;left:-40px;width:50px;height:30px;">
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:0;transform:rotate(15deg);"></div>
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:10px;transform:rotate(0deg);"></div>
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:20px;transform:rotate(-15deg);"></div>
          </div>
          <!-- Whiskers right -->
          <div style="position:absolute;top:75px;right:-40px;width:50px;height:30px;">
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:0;right:0;transform:rotate(-15deg);"></div>
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:10px;right:0;transform:rotate(0deg);"></div>
            <div style="position:absolute;width:45px;height:2px;background:#a68f81;opacity:0.6;top:20px;right:0;transform:rotate(15deg);"></div>
          </div>
          <!-- Eyes -->
          <div style="position:absolute;top:44px;width:100%;display:flex;justify-content:center;gap:36px;">
            <div style="width:24px;height:24px;background:#4a3f3a;border-radius:50%;position:relative;animation:mouse-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:3px;left:4px;"></div>
            </div>
            <div style="width:24px;height:24px;background:#4a3f3a;border-radius:50%;position:relative;animation:mouse-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:3px;left:4px;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;top:68px;left:50%;transform:translateX(-50%);width:20px;height:15px;background:#ff9eb5;border-radius:50%;z-index:60;animation:sniff 0.6s infinite;"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:84px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:10px;height:7px;border:3px solid #a68f81;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            <div style="width:10px;height:7px;border:3px solid #a68f81;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:72px;left:10px;width:28px;height:14px;background:#ffb3c1;border-radius:50%;filter:blur(3px);"></div>
          <div style="position:absolute;top:72px;right:10px;width:28px;height:14px;background:#ffb3c1;border-radius:50%;filter:blur(3px);"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:145px;height:115px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:4px solid #a68f81;border-radius:50% 50% 42% 42% / 60% 60% 40% 40%;top:125px;left:48px;z-index:20;box-shadow:inset 8px 8px 22px rgba(255,255,255,0.75), inset -6px -6px 16px rgba(160,140,125,0.4);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:24px;filter:blur(3px);"></div>
          <!-- Front paws -->
          <div style="position:absolute;width:30px;height:25px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:3.5px solid #a68f81;border-radius:50%;top:35px;left:25px;z-index:30;transform:rotate(10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(160,140,125,0.35);"></div>
          <div style="position:absolute;width:30px;height:25px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:3.5px solid #a68f81;border-radius:50%;top:35px;right:25px;z-index:30;transform:rotate(-10deg);box-shadow:inset 4px 4px 10px rgba(255,255,255,0.7), inset -2px -2px 6px rgba(160,140,125,0.35);"></div>
          <!-- Back feet -->
          <div style="position:absolute;width:45px;height:35px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:3.5px solid #a68f81;border-radius:50%;top:85px;left:-12px;z-index:19;transform:rotate(-20deg);box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(160,140,125,0.35);"></div>
          <div style="position:absolute;width:45px;height:35px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #faf5f0 25%, #f4ede4 55%, #d6ccc2 100%);border:3.5px solid #a68f81;border-radius:50%;top:85px;right:-12px;z-index:19;transform:rotate(20deg);box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7), inset -3px -3px 8px rgba(160,140,125,0.35);"></div>
        </div>
        <!-- Tail -->
        <div style="position:absolute;width:100px;height:10px;background:radial-gradient(ellipse at 35% 30%, #ffd8e3 0%, #ffc2d1 40%, #f5b0c0 100%);border:3.5px solid #a68f81;border-radius:20px;bottom:65px;right:-33px;z-index:10;transform-origin:left center;animation:tail-wag 2s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.6), inset -2px -2px 5px rgba(200,150,160,0.35);"></div>
      </div>
    `,
    // ===== TRASH PANDA - Mammals Variant 5 =====
    // Source: TrashPandyBuddy.html (converted to inline styles)
    5:`
      <div style="position:relative;width:240px;height:280px;animation:raccoon-bounce 3s ease-in-out infinite;">
        <!-- Ears -->
        <div style="position:absolute;width:48px;height:48px;background:#9ca3af;border:4px solid #374151;border-radius:50% 50% 10% 10%;z-index:30;top:15px;left:45px;transform:rotate(-20deg);">
          <div style="position:absolute;width:24px;height:24px;background:#f3f4f6;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <div style="position:absolute;width:48px;height:48px;background:#9ca3af;border:4px solid #374151;border-radius:50% 50% 10% 10%;z-index:30;top:15px;right:45px;transform:rotate(20deg);">
          <div style="position:absolute;width:24px;height:24px;background:#f3f4f6;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <!-- Tail -->
        <div style="position:absolute;width:120px;height:45px;background:repeating-linear-gradient(to right,#374151,#374151 25px,#9ca3af 25px,#9ca3af 50px);border:4px solid #374151;border-radius:30px;bottom:55px;right:-25px;z-index:5;transform-origin:left center;animation:tail-swish 2s ease-in-out infinite;box-shadow:inset 6px 6px 14px rgba(200,200,210,0.4), inset -4px -4px 10px rgba(30,35,45,0.4);"></div>
        <!-- Back paws -->
        <div style="position:absolute;width:44px;height:34px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 25%, #374151 55%, #1f2937 100%);border:3.5px solid #111827;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:-55px;transform:rotate(-5deg);box-shadow:inset 4px 4px 10px rgba(107,114,128,0.7), inset -2px -2px 6px rgba(20,20,25,0.4);"></div>
        <div style="position:absolute;width:44px;height:34px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 25%, #374151 55%, #1f2937 100%);border:3.5px solid #111827;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:11px;transform:rotate(5deg);box-shadow:inset 4px 4px 10px rgba(107,114,128,0.7), inset -2px -2px 6px rgba(20,20,25,0.4);"></div>
        <!-- Body -->
        <div style="position:absolute;width:150px;height:120px;background:radial-gradient(ellipse at 35% 30%, #f3f4f6 0%, #d1d5db 25%, #9ca3af 55%, #6b7280 100%);border:4px solid #374151;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:45px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(243,244,246,0.75), inset -6px -6px 16px rgba(75,85,99,0.4);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:44px;height:32px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:22px;filter:blur(3px);"></div>
          <div style="position:absolute;width:90px;height:70px;background:#f3f4f6;border-radius:50%;bottom:-10px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Front paws with fingers -->
        <div style="position:absolute;width:40px;height:30px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 25%, #374151 55%, #1f2937 100%);border:3px solid #111827;border-radius:12px;top:145px;left:40px;z-index:45;display:flex;justify-content:center;align-items:flex-start;gap:2px;padding-top:2px;animation:hand-wave-l 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(107,114,128,0.7), inset -2px -2px 6px rgba(20,20,25,0.4);">
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
        </div>
        <div style="position:absolute;width:40px;height:30px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 25%, #374151 55%, #1f2937 100%);border:3px solid #111827;border-radius:12px;top:145px;right:40px;z-index:45;display:flex;justify-content:center;align-items:flex-start;gap:2px;padding-top:2px;animation:hand-wave-r 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(107,114,128,0.7), inset -2px -2px 6px rgba(20,20,25,0.4);">
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #6b7280 0%, #4b5563 50%, #374151 100%);border:2px solid #111827;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(107,114,128,0.6);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:140px;height:115px;background:radial-gradient(ellipse at 35% 30%, #f3f4f6 0%, #d1d5db 25%, #9ca3af 55%, #6b7280 100%);border:4px solid #374151;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:30px;left:50px;z-index:40;box-shadow:inset 8px 8px 22px rgba(243,244,246,0.75), inset -6px -6px 16px rgba(75,85,99,0.4);">
          <!-- Head highlight spot (primary) -->
          <div style="position:absolute;width:40px;height:28px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight spot (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:24px;right:26px;filter:blur(3px);"></div>
          <!-- Mask patches -->
          <div style="position:absolute;width:55px;height:42px;background:#374151;top:35px;left:10px;border-radius:50%;transform:rotate(-10deg);"></div>
          <div style="position:absolute;width:55px;height:42px;background:#374151;top:35px;right:10px;border-radius:50%;transform:rotate(10deg);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:40px;width:100%;display:flex;justify-content:center;gap:32px;z-index:45;">
            <div style="width:22px;height:24px;background:#000;border-radius:50%;position:relative;animation:raccoon-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
            <div style="width:22px;height:24px;background:#000;border-radius:50%;position:relative;animation:raccoon-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:18px;height:12px;background:#111827;border-radius:50%;top:75px;left:50%;transform:translateX(-50%);z-index:50;"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:82px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:12px;height:8px;border:2.5px solid #374151;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            <div style="width:12px;height:8px;border:2.5px solid #374151;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:68px;left:16px;width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.4;"></div>
          <div style="position:absolute;top:68px;right:16px;width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.4;"></div>
        </div>
      </div>
    `,
    // ===== RED PANDA - Mammals Variant 6 =====
    // Source: RedPanda.html (white ears with orange inner, matching source)
    6:`
      <div style="position:relative;width:240px;height:280px;animation:red-panda-bounce 3s ease-in-out infinite;">
        <!-- Ears - WHITE outer with ORANGE inner (matching source proportions) -->
        <div style="position:absolute;width:55px;height:50px;background:#ffffff;border:4px solid #2d2323;border-radius:50% 50% 10% 10%;z-index:30;top:25px;left:30px;transform:rotate(-25deg);">
          <div style="position:absolute;width:30px;height:30px;background:#ea580c;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <div style="position:absolute;width:55px;height:50px;background:#ffffff;border:4px solid #2d2323;border-radius:50% 50% 10% 10%;z-index:30;top:25px;right:30px;transform:rotate(25deg);">
          <div style="position:absolute;width:30px;height:30px;background:#ea580c;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Striped tail -->
        <div style="position:absolute;width:133px;height:69px;background:repeating-linear-gradient(to right,#ea580c 0px,#ea580c 17px,#7c2d12 17px,#7c2d12 25.5px);border:4.2px solid #7c2d12;border-radius:42px;bottom:35px;right:-42px;z-index:5;transform-origin:left center;animation:tail-swish 2.5s ease-in-out infinite;box-shadow:inset 7px 7px 16px rgba(254,150,100,0.5), inset -5px -5px 12px rgba(80,30,15,0.4);"></div>
        <!-- Back paws -->
        <div style="position:absolute;width:53px;height:42px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 25%, #2d2323 55%, #1a1414 100%);border:4.2px solid #1a1414;border-radius:26.5px;top:246px;left:50%;z-index:21;margin-left:-69px;transform:rotate(7.5deg);box-shadow:inset 5px 5px 12px rgba(74,58,53,0.7), inset -3px -3px 8px rgba(15,12,12,0.4);"></div>
        <div style="position:absolute;width:53px;height:42px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 25%, #2d2323 55%, #1a1414 100%);border:4.2px solid #1a1414;border-radius:26.5px;top:246px;left:50%;z-index:21;margin-left:16px;transform:rotate(-7.5deg);box-shadow:inset 5px 5px 12px rgba(74,58,53,0.7), inset -3px -3px 8px rgba(15,12,12,0.4);"></div>
        <!-- Body -->
        <div style="position:absolute;width:159px;height:133px;background:radial-gradient(ellipse at 35% 30%, #fed7aa 0%, #f97316 25%, #ea580c 55%, #c2410c 100%);border:4.2px solid #7c2d12;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:139px;left:41px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.75), inset -6px -6px 16px rgba(124,45,18,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:46px;height:34px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.45);border-radius:50%;top:28px;right:26px;filter:blur(3px);"></div>
          <div style="position:absolute;width:117px;height:101px;background:#fb923c;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-45%);opacity:0.9;"></div>
        </div>
        <!-- Front paws with fingers -->
        <div style="position:absolute;width:45px;height:34px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 25%, #2d2323 55%, #1a1414 100%);border:3.2px solid #1a1414;border-radius:15px;top:166px;left:36px;z-index:45;display:flex;justify-content:center;gap:3.2px;padding-top:2px;animation:hand-wave-l 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(74,58,53,0.7), inset -2px -2px 6px rgba(15,12,12,0.4);">
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
        </div>
        <div style="position:absolute;width:45px;height:34px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 25%, #2d2323 55%, #1a1414 100%);border:3.2px solid #1a1414;border-radius:15px;top:166px;right:36px;z-index:45;display:flex;justify-content:center;gap:3.2px;padding-top:2px;animation:hand-wave-r 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(74,58,53,0.7), inset -2px -2px 6px rgba(15,12,12,0.4);">
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
          <div style="width:12px;height:12px;background:radial-gradient(ellipse at 35% 30%, #4a3a35 0%, #3d2e28 50%, #2d2323 100%);border:2.1px solid #1a1414;border-radius:50%;margin-top:-7.4px;box-shadow:inset 2px 2px 4px rgba(74,58,53,0.6);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:164px;height:122px;background:radial-gradient(ellipse at 35% 30%, #fed7aa 0%, #f97316 25%, #ea580c 55%, #c2410c 100%);border:4.2px solid #7c2d12;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:40px;left:38px;z-index:40;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.75), inset -6px -6px 16px rgba(124,45,18,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:28px;filter:blur(3px);"></div>
          <!-- White face patches -->
          <div style="position:absolute;width:48px;height:21px;background:#ffffff;border-radius:50%;top:32px;left:16px;opacity:0.95;"></div>
          <div style="position:absolute;width:48px;height:21px;background:#ffffff;border-radius:50%;top:32px;right:16px;opacity:0.95;"></div>
          <div style="position:absolute;width:58px;height:48px;background:#ffffff;border-radius:50%;bottom:11px;left:16px;opacity:0.95;"></div>
          <div style="position:absolute;width:58px;height:48px;background:#ffffff;border-radius:50%;bottom:11px;right:16px;opacity:0.95;"></div>
          <div style="position:absolute;width:37px;height:53px;background:#ffffff;border-radius:50%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.95;"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:48px;width:100%;display:flex;justify-content:center;gap:42px;z-index:50;">
            <div style="width:23px;height:26.5px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:rotate(-12deg);animation:red-panda-blink 4s infinite;">
              <div style="position:absolute;width:7.4px;height:7.4px;background:white;border-radius:50%;top:4.2px;left:5.3px;"></div>
            </div>
            <div style="width:23px;height:26.5px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:scaleX(-1) rotate(-12deg);animation:red-panda-blink 4s infinite;">
              <div style="position:absolute;width:7.4px;height:7.4px;background:white;border-radius:50%;top:4.2px;left:5.3px;"></div>
            </div>
          </div>
          <!-- Nose and mouth -->
          <div style="position:absolute;width:64px;height:42px;bottom:-8.5px;left:50%;transform:translateX(-50%);z-index:60;">
            <div style="position:absolute;width:19px;height:13px;background:#1a1414;border-radius:50%;top:0;left:50%;transform:translateX(-50%);"></div>
            <div style="position:absolute;top:13px;left:50%;transform:translateX(-50%);display:flex;">
              <div style="width:13px;height:8.5px;border:2.7px solid #7c2d12;border-top:none;border-radius:0 0 10.6px 10.6px;margin:0 -0.5px;"></div>
              <div style="width:13px;height:8.5px;border:2.7px solid #7c2d12;border-top:none;border-radius:0 0 10.6px 10.6px;margin:0 -0.5px;"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:74px;width:100%;display:flex;justify-content:space-around;padding:0 26.5px;z-index:50;">
            <div style="width:21px;height:11px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
            <div style="width:21px;height:11px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
          </div>
        </div>
      </div>
    `,
    // ===== SLOTH BUDDY - Mammals Variant 7 =====
    // Source: Sloth_Buddy.html (converted to inline styles)
    7:`
      <div style="position:relative;width:240px;height:280px;animation:sloth-hang 6s ease-in-out infinite;">
        <!-- Back legs -->
        <div style="position:absolute;width:40px;height:75px;background:radial-gradient(ellipse at 35% 30%, #c9a87c 0%, #a68a64 25%, #8d734d 55%, #6b5a3a 100%);border:4px solid #582f0e;border-radius:20px;z-index:10;top:178px;left:62px;transform:rotate(-6deg);animation:leg-wiggle-bl 6s ease-in-out infinite;box-shadow:inset 5px 5px 14px rgba(201,168,124,0.7), inset -3px -3px 8px rgba(88,47,14,0.35);">
          <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);display:flex;gap:2px;">
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
          </div>
        </div>
        <div style="position:absolute;width:40px;height:75px;background:radial-gradient(ellipse at 35% 30%, #c9a87c 0%, #a68a64 25%, #8d734d 55%, #6b5a3a 100%);border:4px solid #582f0e;border-radius:20px;z-index:10;top:178px;right:62px;transform:rotate(6deg);animation:leg-wiggle-br 6s ease-in-out infinite;box-shadow:inset 5px 5px 14px rgba(201,168,124,0.7), inset -3px -3px 8px rgba(88,47,14,0.35);">
          <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);display:flex;gap:2px;">
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="width:5px;height:16px;background:radial-gradient(ellipse at 40% 30%, #faf5f0 0%, #f5ebe0 50%, #e5dcd0 100%);border:2px solid #582f0e;border-radius:0 0 5px 5px;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:140px;height:124px;background:radial-gradient(ellipse at 35% 30%, #e6d4be 0%, #c9a87c 25%, #a68a64 55%, #7f5539 100%);border:4px solid #582f0e;border-radius:50% 50% 40% 40%;top:103px;left:50px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(230,212,190,0.75), inset -6px -6px 16px rgba(88,47,14,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:22px;filter:blur(3px);"></div>
          <div style="position:absolute;width:90px;height:74px;background:#e6ccb2;border-radius:50%;bottom:8px;left:50%;transform:translateX(-50%);opacity:0.5;"></div>
        </div>
        <!-- Front arms -->
        <div style="position:absolute;width:38px;height:99px;background:radial-gradient(ellipse at 35% 30%, #c9a87c 0%, #a68a64 50%, #7f5539 100%);border:4px solid #582f0e;border-radius:19px;z-index:45;top:91px;left:21px;transform:rotate(30deg);animation:arm-sway-l 6s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(201,168,124,0.3), inset -2px -2px 6px rgba(127,85,57,0.2);">
          <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);display:flex;gap:2px;">
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
          </div>
        </div>
        <div style="position:absolute;width:38px;height:99px;background:radial-gradient(ellipse at 35% 30%, #c9a87c 0%, #a68a64 50%, #7f5539 100%);border:4px solid #582f0e;border-radius:19px;z-index:45;top:91px;right:21px;transform:rotate(-30deg);animation:arm-sway-r 6s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(201,168,124,0.3), inset -2px -2px 6px rgba(127,85,57,0.2);">
          <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);display:flex;gap:2px;">
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
            <div style="width:5px;height:16px;background:#f5ebe0;border:2px solid #582f0e;border-radius:0 0 5px 5px;"></div>
          </div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:128px;height:111px;background:radial-gradient(ellipse at 35% 30%, #e6d4be 0%, #c9a87c 25%, #a68a64 55%, #7f5539 100%);border:4px solid #582f0e;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:21px;left:56px;z-index:50;display:flex;justify-content:center;align-items:center;box-shadow:inset 8px 8px 22px rgba(230,212,190,0.75), inset -6px -6px 16px rgba(88,47,14,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:38px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:24px;right:24px;filter:blur(3px);"></div>
          <div style="width:103px;height:87px;background:#e6ccb2;border:3px solid #582f0e;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;position:relative;overflow:hidden;">
            <!-- Eye patches -->
            <div style="position:absolute;width:58px;height:40px;background:#7f5539;border-radius:50% 20% 50% 20%;top:15px;left:-18px;transform:rotate(-12deg);">
              <div style="width:16px;height:16px;background:#2a1a0a;border-radius:50%;position:absolute;top:12px;left:36px;animation:sloth-blink 8s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:2px;left:2px;"></div>
              </div>
            </div>
            <div style="position:absolute;width:58px;height:40px;background:#7f5539;border-radius:50% 20% 50% 20%;top:15px;right:-18px;transform:scaleX(-1) rotate(-12deg);">
              <div style="width:16px;height:16px;background:#2a1a0a;border-radius:50%;position:absolute;top:12px;left:36px;animation:sloth-blink 8s infinite;">
                <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;top:2px;left:2px;"></div>
              </div>
            </div>
            <!-- Nose -->
            <div style="position:absolute;width:18px;height:12px;background:#582f0e;border-radius:40% 40% 50% 50%;top:56px;left:50%;transform:translateX(-50%);z-index:10;"></div>
            <!-- Smile -->
            <div style="position:absolute;width:36px;height:15px;border-bottom:3px solid #582f0e;border-radius:50%;top:60px;left:50%;transform:translateX(-50%);opacity:0.9;"></div>
            <!-- Blush -->
            <div style="position:absolute;width:20px;height:10px;background:#ffb3c1;border-radius:50%;top:60px;left:10px;opacity:0.4;filter:blur(1.5px);"></div>
            <div style="position:absolute;width:20px;height:10px;background:#ffb3c1;border-radius:50%;top:60px;right:10px;opacity:0.4;filter:blur(1.5px);"></div>
          </div>
        </div>
      </div>
    `,
    // ===== FOX IN SOX - Mammals Variant 8 =====
    // Source: Fox_In_Sox_Buddy.html (converted to inline styles with socks)
    8:`
      <div style="position:relative;width:240px;height:280px;animation:fox-bounce 3s ease-in-out infinite;">
        <!-- Ears with wiggle -->
        <div style="position:absolute;width:55px;height:75px;background:#f97316;border:4px solid #271b12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;left:40px;transform:rotate(-25deg);animation:ear-wiggle-l 5s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#271b12;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>
        <div style="position:absolute;width:55px;height:75px;background:#f97316;border:4px solid #271b12;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;z-index:30;overflow:hidden;transform-origin:bottom center;top:-10px;right:40px;transform:rotate(25deg);animation:ear-wiggle-r 7s ease-in-out infinite;">
          <div style="position:absolute;width:100%;height:25px;background:#271b12;top:0;"></div>
          <div style="position:absolute;width:28px;height:40px;background:#ffffff;border-radius:40%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.6;"></div>
        </div>
        <!-- Tail with tip -->
        <div style="position:absolute;width:130px;height:60px;background:radial-gradient(ellipse at 35% 30%, #fdba74 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:40px;bottom:50px;right:-40px;z-index:5;transform-origin:left center;animation:tail-swish 2s ease-in-out infinite;overflow:hidden;box-shadow:inset 6px 6px 16px rgba(254,215,170,0.7), inset -4px -4px 10px rgba(140,45,15,0.4);">
          <div style="position:absolute;width:50px;height:100%;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f0f0f0 40%, #e0e0e0 100%);right:0;top:0;border-radius:0 40px 40px 0;clip-path:polygon(25% 0%,100% 0%,100% 100%,0% 100%,40% 50%);"></div>
        </div>
        <!-- Back paws with socks -->
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #38bdf8 0%, #0ea5e9 40%, #0284c7 100%);border:3.5px solid #0369a1;border-radius:18px 18px 14px 14px;top:230px;left:50%;margin-left:-70px;z-index:21;transform:rotate(15deg);overflow:visible;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.6), inset -2px -2px 6px rgba(3,105,161,0.35);">
          <div style="position:absolute;top:-8px;left:-3.5px;width:calc(100% + 7px);height:12px;background:repeating-linear-gradient(to right,#0ea5e9,#0ea5e9 4px,#0369a1 4px,#0369a1 5px);border:3.5px solid #0369a1;border-radius:6px;z-index:10;"></div>
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:70%;height:3px;background:repeating-linear-gradient(to right,#bae6fd,#bae6fd 3px,transparent 3px,transparent 6px);z-index:15;border-radius:2px;"></div>
        </div>
        <div style="position:absolute;width:48px;height:38px;background:radial-gradient(ellipse at 35% 30%, #38bdf8 0%, #0ea5e9 40%, #0284c7 100%);border:3.5px solid #0369a1;border-radius:18px 18px 14px 14px;top:230px;left:50%;margin-left:22px;z-index:21;transform:rotate(-15deg);overflow:visible;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.6), inset -2px -2px 6px rgba(3,105,161,0.35);">
          <div style="position:absolute;top:-8px;left:-3.5px;width:calc(100% + 7px);height:12px;background:repeating-linear-gradient(to right,#0ea5e9,#0ea5e9 4px,#0369a1 4px,#0369a1 5px);border:3.5px solid #0369a1;border-radius:6px;z-index:10;"></div>
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:70%;height:3px;background:repeating-linear-gradient(to right,#bae6fd,#bae6fd 3px,transparent 3px,transparent 6px);z-index:15;border-radius:2px;"></div>
        </div>
        <!-- Body with chest patch -->
        <div style="position:absolute;width:150px;height:125px;background:radial-gradient(ellipse at 35% 30%, #fed7aa 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:45px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.75), inset -6px -6px 16px rgba(39,27,18,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:44px;height:32px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:24px;filter:blur(3px);"></div>
          <div style="position:absolute;width:100px;height:90px;background:#ffffff;border-radius:50%;top:-10px;left:50%;transform:translateX(-50%);opacity:0.9;"></div>
        </div>
        <!-- Front paws with horizontal socks -->
        <div style="position:absolute;width:42px;height:35px;background:radial-gradient(ellipse at 35% 30%, #38bdf8 0%, #0ea5e9 40%, #0284c7 100%);border:3.5px solid #0369a1;border-radius:14px;top:135px;left:33px;z-index:45;transform-origin:bottom;transform:rotate(-90deg);animation:hand-wave-l-horiz 3s ease-in-out infinite;overflow:visible;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.6), inset -2px -2px 6px rgba(3,105,161,0.35);">
          <div style="position:absolute;bottom:-10px;left:-3.5px;width:calc(100% + 7px);height:12px;background:repeating-linear-gradient(to right,#0ea5e9,#0ea5e9 4px,#0369a1 4px,#0369a1 5px);border:3.5px solid #0369a1;border-radius:6px;z-index:10;"></div>
          <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:70%;height:3px;background:repeating-linear-gradient(to right,#bae6fd,#bae6fd 3px,transparent 3px,transparent 6px);z-index:15;border-radius:2px;"></div>
        </div>
        <div style="position:absolute;width:42px;height:35px;background:radial-gradient(ellipse at 35% 30%, #38bdf8 0%, #0ea5e9 40%, #0284c7 100%);border:3.5px solid #0369a1;border-radius:14px;top:135px;right:33px;z-index:45;transform-origin:bottom;transform:rotate(90deg);animation:hand-wave-r-horiz 3s ease-in-out infinite;overflow:visible;box-shadow:inset 4px 4px 10px rgba(125,211,252,0.6), inset -2px -2px 6px rgba(3,105,161,0.35);">
          <div style="position:absolute;bottom:-10px;left:-3.5px;width:calc(100% + 7px);height:12px;background:repeating-linear-gradient(to right,#0ea5e9,#0ea5e9 4px,#0369a1 4px,#0369a1 5px);border:3.5px solid #0369a1;border-radius:6px;z-index:10;"></div>
          <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:70%;height:3px;background:repeating-linear-gradient(to right,#bae6fd,#bae6fd 3px,transparent 3px,transparent 6px);z-index:15;border-radius:2px;"></div>
        </div>
        <!-- Head with face mask -->
        <div style="position:absolute;width:155px;height:115px;background:radial-gradient(ellipse at 35% 30%, #fed7aa 0%, #fb923c 25%, #f97316 55%, #c2410c 100%);border:4px solid #271b12;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:28px;left:43px;z-index:40;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,215,170,0.75), inset -6px -6px 16px rgba(39,27,18,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:16px;filter:blur(5px);z-index:42;"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:28px;filter:blur(3px);z-index:42;"></div>
          <div style="position:absolute;width:100%;height:100%;top:0;left:0;z-index:41;">
            <div style="position:absolute;width:34px;height:55px;background:#ffffff;top:55px;left:50%;transform:translateX(-50%);border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;opacity:0.95;"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;left:10px;opacity:0.95;transform:rotate(-20deg);"></div>
            <div style="position:absolute;background:#ffffff;border-radius:50%;width:60px;height:55px;bottom:10px;right:10px;opacity:0.95;transform:rotate(20deg);"></div>
          </div>
          <div style="position:absolute;top:45px;width:100%;display:flex;justify-content:center;gap:40px;z-index:50;">
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:rotate(-12deg);animation:fox-blink-l 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
            <div style="width:22px;height:25px;background:#000;position:relative;border-radius:70% 30% 70% 30% / 60% 40% 60% 40%;transform:scaleX(-1) rotate(-12deg);animation:fox-blink-r 4s infinite;">
              <div style="position:absolute;width:7px;height:7px;background:white;border-radius:50%;top:4px;left:5px;"></div>
            </div>
          </div>
          <div style="position:absolute;width:60px;height:40px;bottom:-8px;left:50%;transform:translateX(-50%);z-index:60;">
            <div style="position:absolute;width:18px;height:12px;background:#111827;border-radius:50%;top:0;left:50%;transform:translateX(-50%);"></div>
            <div style="position:absolute;top:12px;left:50%;transform:translateX(-50%);display:flex;">
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
              <div style="width:12px;height:8px;border:2.5px solid #271b12;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            </div>
          </div>
          <div style="position:absolute;top:75px;width:100%;display:flex;justify-content:space-around;padding:0 32px;z-index:50;">
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
            <div style="width:16px;height:8px;background:#fecdd3;border-radius:50%;opacity:0.5;"></div>
          </div>
        </div>
      </div>
    `,
    9:`
      <div style="position:relative;width:240px;height:280px;display:inline-block;animation:panda-bounce 3s ease-in-out infinite;">
        <!-- Ears overlapping head -->
        <div style="position:absolute;width:44px;height:40px;background:#1a1a1a;border:3px solid #2d2d2d;border-radius:50% 50% 20% 20%;z-index:35;transform-origin:bottom center;top:42.4px;left:65.6px;transform:rotate(-30deg);">
          <div style="position:absolute;width:28px;height:28px;background:#ffcad4;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.9;"></div>
        </div>
        <div style="position:absolute;width:44px;height:40px;background:#1a1a1a;border:3px solid #2d2d2d;border-radius:50% 50% 20% 20%;z-index:35;transform-origin:bottom center;top:42.4px;right:65.6px;transform:rotate(30deg);">
          <div style="position:absolute;width:28px;height:28px;background:#ffcad4;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.9;"></div>
        </div>
        <!-- Legs - still -->
        <div style="position:absolute;width:36px;height:40px;background:#1a1a1a;border:3px solid #2d2d2d;border-radius:16px;top:214.4px;left:64px;z-index:21;transform:rotate(10deg);"></div>
        <div style="position:absolute;width:36px;height:40px;background:#1a1a1a;border:3px solid #2d2d2d;border-radius:16px;top:214.4px;right:64px;z-index:21;transform:rotate(-10deg);"></div>
        <!-- Body -->
        <div style="position:absolute;width:128px;height:112px;background:radial-gradient(ellipse at 35% 30%, #2d2d2d 0%, #1a1a1a 50%, #0a0a0a 100%);border:3px solid #2d2d2d;border-radius:50%;top:124px;left:56px;z-index:20;overflow:hidden;box-shadow:inset 5px 5px 15px rgba(45,45,45,0.5), inset -4px -4px 10px rgba(10,10,10,0.4);">
          <!-- Body highlight -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.15);border-radius:50%;top:10%;left:18%;filter:blur(3px);"></div>
          <div style="position:absolute;width:88px;height:80px;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #f5f5f5 60%, #e5e5e5 100%);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-45%);box-shadow:inset 0 3px 8px rgba(255,255,255,0.6);"></div>
        </div>
        <!-- Static left arm -->
        <div style="position:absolute;width:30.4px;height:52px;background:radial-gradient(ellipse at 35% 30%, #2d2d2d 0%, #1a1a1a 50%, #0a0a0a 100%);border:3px solid #2d2d2d;border-radius:16px;z-index:19;top:132px;left:42.4px;transform:rotate(-30deg);box-shadow:inset 3px 3px 8px rgba(45,45,45,0.4), inset -2px -2px 6px rgba(10,10,10,0.3);"></div>
        <!-- Waving right arm -->
        <div style="position:absolute;width:30.4px;height:52px;background:radial-gradient(ellipse at 35% 30%, #2d2d2d 0%, #1a1a1a 50%, #0a0a0a 100%);border:3px solid #2d2d2d;border-radius:16px;z-index:19;top:132px;right:52.8px;transform-origin:bottom;animation:arm-wave 2s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(45,45,45,0.4), inset -2px -2px 6px rgba(10,10,10,0.3);"></div>
        <!-- Head -->
        <div style="position:absolute;width:124px;height:100px;background:radial-gradient(ellipse at 35% 30%, #ffffff 0%, #f5f5f5 50%, #e5e5e5 100%);border:3px solid #1a1a1a;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:52px;left:58.4px;z-index:40;box-shadow:inset 4px 4px 12px rgba(255,255,255,0.5), inset -3px -3px 8px rgba(229,229,229,0.4);">
          <!-- Head highlight -->
          <div style="position:absolute;width:28px;height:20px;background:rgba(255,255,255,0.4);border-radius:50%;top:10%;left:18%;filter:blur(3px);"></div>
          <!-- Eye patches with eyes -->
          <div style="position:absolute;width:36px;height:44px;background:#1a1a1a;border-radius:50% 50% 45% 45%;top:28px;left:17.6px;transform:rotate(15deg);display:flex;align-items:center;justify-content:center;">
            <div style="width:19.2px;height:19.2px;background:#ffffff;border-radius:50%;position:relative;display:flex;align-items:center;justify-content:center;animation:panda-blink 4s infinite;">
              <div style="width:12.8px;height:12.8px;background:#2d2d2d;border-radius:50%;position:relative;overflow:hidden;">
                <div style="position:absolute;width:5.6px;height:5.6px;background:white;border-radius:50%;top:1.6px;left:1.6px;"></div>
              </div>
            </div>
          </div>
          <div style="position:absolute;width:36px;height:44px;background:#1a1a1a;border-radius:50% 50% 45% 45%;top:28px;right:17.6px;transform:rotate(-15deg);display:flex;align-items:center;justify-content:center;">
            <div style="width:19.2px;height:19.2px;background:#ffffff;border-radius:50%;position:relative;display:flex;align-items:center;justify-content:center;animation:panda-blink 4s infinite;">
              <div style="width:12.8px;height:12.8px;background:#2d2d2d;border-radius:50%;position:relative;overflow:hidden;">
                <div style="position:absolute;width:5.6px;height:5.6px;background:white;border-radius:50%;top:1.6px;left:1.6px;"></div>
              </div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:16px;height:11.2px;background:#1a1a1a;border-radius:50% 50% 40% 40%;top:68px;left:50%;transform:translateX(-50%);"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:78.4px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:9.6px;height:6.4px;border:2px solid #1a1a1a;border-top:none;border-radius:0 0 8px 8px;"></div>
            <div style="width:9.6px;height:6.4px;border:2px solid #1a1a1a;border-top:none;border-radius:0 0 8px 8px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:70.4px;width:100%;display:flex;justify-content:space-around;padding:0 3.2px;">
            <div style="width:4.8px;height:2.4px;background:#ffc9d1;border-radius:50%;opacity:0.6;filter:blur(1.6px);"></div>
            <div style="width:4.8px;height:2.4px;background:#ffc9d1;border-radius:50%;opacity:0.6;filter:blur(1.6px);"></div>
          </div>
        </div>
      </div>
    `,
    // ===== PUPPY - Mammals Variant 10 =====
    // Source: PuppyBuddy.html (converted to inline styles, scaled to 280px height)
    10:`
      <div style="position:relative;width:240px;height:280px;animation:puppy-bounce 2.5s ease-in-out infinite;">
        <!-- Ears (floppy) - use puppy-ear animations, positioned beside head -->
        <div style="position:absolute;width:38px;height:65px;background:#d97706;border:4px solid #92400e;border-radius:50% 50% 50% 50% / 30% 30% 70% 70%;z-index:30;transform-origin:top center;top:60px;left:52px;transform:rotate(20deg);animation:puppy-ear-l 2.5s ease-in-out infinite;"></div>
        <div style="position:absolute;width:38px;height:65px;background:#d97706;border:4px solid #92400e;border-radius:50% 50% 50% 50% / 30% 30% 70% 70%;z-index:30;transform-origin:top center;top:60px;right:52px;transform:rotate(-20deg);animation:puppy-ear-r 2.5s ease-in-out infinite;"></div>
        <!-- Head -->
        <div style="position:absolute;width:115px;height:100px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #fbbf24 25%, #d97706 55%, #92400e 100%);border:4px solid #d97706;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:45px;left:62px;z-index:40;box-shadow:inset 8px 8px 22px rgba(254,240,138,0.75), inset -6px -6px 16px rgba(146,64,14,0.4);">
          <!-- Head highlight (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Head highlight (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:22px;right:22px;filter:blur(3px);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:25px;width:100%;display:flex;justify-content:center;gap:12px;">
            <div style="width:32px;height:32px;background:#1a1a1a;border-radius:50%;position:relative;border:2px solid #d97706;animation:puppy-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:4px;"></div>
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;bottom:8px;right:8px;opacity:0.6;"></div>
            </div>
            <div style="width:32px;height:32px;background:#1a1a1a;border-radius:50%;position:relative;border:2px solid #d97706;animation:puppy-blink 4s infinite;">
              <div style="position:absolute;width:10px;height:10px;background:white;border-radius:50%;top:4px;left:4px;"></div>
              <div style="position:absolute;width:6px;height:6px;background:white;border-radius:50%;bottom:8px;right:8px;opacity:0.6;"></div>
            </div>
          </div>
          <!-- Muzzle dots -->
          <div style="position:absolute;top:62px;width:100%;display:flex;justify-content:center;gap:35px;">
            <div style="position:relative;width:12px;height:10px;">
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;bottom:0;left:50%;transform:translateX(-50%);"></div>
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;top:0;left:0;"></div>
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;top:0;right:0;"></div>
            </div>
            <div style="position:relative;width:12px;height:10px;">
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;bottom:0;left:50%;transform:translateX(-50%);"></div>
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;top:0;left:0;"></div>
              <div style="position:absolute;width:3px;height:3px;background:#d97706;border-radius:50%;opacity:0.9;top:0;right:0;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:18px;height:12px;background:#451a03;border-radius:40% 40% 50% 50%;top:55px;left:50%;transform:translateX(-50%);z-index:45;"></div>
          <!-- Tongue -->
          <div style="position:absolute;width:16px;height:18px;background:#fb7185;border:2px solid #be123c;border-radius:0 0 10px 10px;top:72px;left:50%;transform:translateX(-50%);z-index:35;animation:panting 0.5s ease-in-out infinite;">
            <div style="position:absolute;width:1.5px;height:10px;background:#be123c;left:50%;transform:translateX(-50%);top:0;opacity:0.4;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:52px;left:12px;width:12px;height:8px;background:#fda4af;border-radius:50%;opacity:0.7;"></div>
          <div style="position:absolute;top:52px;right:12px;width:12px;height:8px;background:#fda4af;border-radius:50%;opacity:0.7;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:140px;height:110px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #fbbf24 25%, #d97706 55%, #92400e 100%);border:4px solid #d97706;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:50px;z-index:20;box-shadow:inset 8px 8px 22px rgba(254,240,138,0.75), inset -6px -6px 16px rgba(146,64,14,0.4);">
          <!-- Body highlight (primary) -->
          <div style="position:absolute;width:42px;height:30px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:26px;right:24px;filter:blur(3px);"></div>
          <!-- Belly -->
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:80px;height:48px;background:#fef3c7;border-radius:50%;opacity:0.6;"></div>
          <!-- Tail -->
          <div style="position:absolute;width:65px;height:18px;background:radial-gradient(ellipse at 35% 30%, #fbbf24 0%, #d97706 50%, #92400e 100%);border:4px solid #d97706;border-radius:20px;bottom:15px;right:-58px;z-index:-10;transform-origin:left center;animation:tail-wag-diagonal 0.3s ease-in-out infinite;box-shadow:inset 2px 2px 6px rgba(251,191,36,0.3);"></div>
          <!-- Side paws -->
          <div style="position:absolute;width:36px;height:30px;background:radial-gradient(ellipse at 40% 35%, #fbbf24, #d97706);border:3px solid #d97706;border-radius:50%;top:50px;left:-18px;z-index:25;transform:rotate(-40deg);box-shadow:inset 2px 2px 4px rgba(251,191,36,0.3);"></div>
          <div style="position:absolute;width:36px;height:30px;background:radial-gradient(ellipse at 60% 35%, #fbbf24, #d97706);border:3px solid #d97706;border-radius:50%;top:50px;right:-18px;z-index:25;transform:rotate(40deg);box-shadow:inset -2px 2px 4px rgba(251,191,36,0.3);"></div>
          <!-- Front paws with beans -->
          <div style="position:absolute;width:36px;height:30px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #fbbf24 40%, #d97706 100%);border:3px solid #d97706;border-radius:12px 12px 15px 15px;bottom:-12px;left:32px;z-index:25;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:4px;animation:paw-step 0.8s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(254,240,138,0.7), inset -2px -2px 6px rgba(180,100,10,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:1px;">
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:14px;height:10px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50% 50% 40% 40%;margin-top:2px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
          </div>
          <div style="position:absolute;width:36px;height:30px;background:radial-gradient(ellipse at 35% 30%, #fef08a 0%, #fbbf24 40%, #d97706 100%);border:3px solid #d97706;border-radius:12px 12px 15px 15px;bottom:-12px;right:32px;z-index:25;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:4px;animation:paw-step 0.8s ease-in-out infinite reverse;box-shadow:inset 4px 4px 10px rgba(254,240,138,0.7), inset -2px -2px 6px rgba(180,100,10,0.35);">
            <div style="display:flex;gap:2px;margin-bottom:1px;">
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
              <div style="width:5px;height:6px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50%;box-shadow:inset 1px 1px 2px rgba(255,255,255,0.5);"></div>
            </div>
            <div style="width:14px;height:10px;background:radial-gradient(ellipse at 40% 35%, #ffe4e6 0%, #fecdd3 50%, #f5c0c5 100%);border-radius:50% 50% 40% 40%;margin-top:2px;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5);"></div>
          </div>
        </div>
      </div>
    `,
    // ===== SQUIRREL - Mammals Variant 11 =====
    // Created from scratch using existing mammal patterns
    // Enhanced with gradients, highlights, and shadows for depth
    11:`
      <div style="position:relative;width:240px;height:280px;animation:squirrel-bounce 2.5s ease-in-out infinite;">
        <!-- Big Fluffy Tail (starts behind body, angled 45 degrees) -->
        <div style="position:absolute;width:70px;height:115px;background:radial-gradient(ellipse at 30% 25%, #d97706 0%, #b45309 50%, #92400e 100%);border:4px solid #78350f;border-radius:50% 50% 40% 40% / 50% 50% 50% 50%;top:85px;right:35px;z-index:10;transform-origin:bottom center;transform:rotate(-45deg);animation:squirrel-tail-swish 3s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(251,191,36,0.4), inset -2px -2px 6px rgba(120,53,15,0.3);">
          <!-- Tail highlight spot -->
          <div style="position:absolute;width:18px;height:12px;background:rgba(254,243,199,0.6);border-radius:50%;top:12px;left:15px;filter:blur(2px);"></div>
          <!-- Tail fluff highlights -->
          <div style="position:absolute;width:50px;height:35px;background:radial-gradient(ellipse, rgba(217,119,6,0.7), transparent);border-radius:50%;top:8px;left:50%;transform:translateX(-50%);"></div>
          <div style="position:absolute;width:40px;height:28px;background:radial-gradient(ellipse, rgba(251,191,36,0.5), transparent);border-radius:50%;top:35px;left:50%;transform:translateX(-50%);"></div>
          <div style="position:absolute;width:30px;height:22px;background:radial-gradient(ellipse, rgba(254,243,199,0.4), transparent);border-radius:50%;top:62px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Ears (small, pointed) -->
        <div style="position:absolute;width:28px;height:40px;background:radial-gradient(ellipse at 40% 30%, #d97706 0%, #b45309 60%, #92400e 100%);border:3px solid #78350f;border-radius:50% 50% 10% 10% / 70% 70% 30% 30%;z-index:35;transform-origin:bottom center;top:25px;left:72px;transform:rotate(-15deg);animation:squirrel-ear-l 4s ease-in-out infinite;box-shadow:inset 1px 1px 4px rgba(251,191,36,0.3);">
          <div style="position:absolute;width:14px;height:22px;background:radial-gradient(ellipse at 50% 40%, #fef3c7, #fde68a);border-radius:50% 50% 10% 10% / 70% 70% 30% 30%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <div style="position:absolute;width:28px;height:40px;background:radial-gradient(ellipse at 60% 30%, #d97706 0%, #b45309 60%, #92400e 100%);border:3px solid #78350f;border-radius:50% 50% 10% 10% / 70% 70% 30% 30%;z-index:35;transform-origin:bottom center;top:25px;right:72px;transform:rotate(15deg);animation:squirrel-ear-r 4s ease-in-out infinite;box-shadow:inset -1px 1px 4px rgba(251,191,36,0.3);">
          <div style="position:absolute;width:14px;height:22px;background:radial-gradient(ellipse at 50% 40%, #fef3c7, #fde68a);border-radius:50% 50% 10% 10% / 70% 70% 30% 30%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.8;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:110px;height:95px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #d97706 25%, #b45309 55%, #92400e 100%);border:4px solid #78350f;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;top:45px;left:65px;z-index:40;box-shadow:inset 8px 8px 22px rgba(254,243,199,0.75), inset -6px -6px 16px rgba(120,53,15,0.4);">
          <!-- Head highlight spot (primary) -->
          <div style="position:absolute;width:36px;height:26px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Head highlight spot (secondary) -->
          <div style="position:absolute;width:18px;height:13px;background:rgba(255,255,255,0.45);border-radius:50%;top:22px;right:20px;filter:blur(3px);"></div>
          <!-- Cheek pouches (puffy for storing acorns) -->
          <div style="position:absolute;width:35px;height:28px;background:radial-gradient(ellipse at 40% 40%, #f59e0b, #d97706);border-radius:50%;bottom:18px;left:-5px;box-shadow:inset 2px 2px 4px rgba(254,243,199,0.3);"></div>
          <div style="position:absolute;width:35px;height:28px;background:radial-gradient(ellipse at 60% 40%, #f59e0b, #d97706);border-radius:50%;bottom:18px;right:-5px;box-shadow:inset -2px 2px 4px rgba(254,243,199,0.3);"></div>
          <!-- White muzzle area -->
          <div style="position:absolute;width:50px;height:35px;background:radial-gradient(ellipse at 50% 35%, #ffffff, #fef3c7);border-radius:50%;bottom:8px;left:50%;transform:translateX(-50%);box-shadow:inset 0 2px 6px rgba(255,255,255,0.5);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:22px;width:100%;display:flex;justify-content:center;gap:24px;">
            <div style="width:22px;height:24px;background:radial-gradient(circle at 30% 30%, #374151, #1a1a1a);border-radius:50%;position:relative;animation:squirrel-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.1);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.5;"></div>
            </div>
            <div style="width:22px;height:24px;background:radial-gradient(circle at 30% 30%, #374151, #1a1a1a);border-radius:50%;position:relative;animation:squirrel-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.1);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.5;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:12px;height:10px;background:radial-gradient(circle at 40% 35%, #92400e, #78350f);border-radius:50%;top:52px;left:50%;transform:translateX(-50%);z-index:47;box-shadow:inset 1px 1px 2px rgba(254,243,199,0.2);"></div>
          <!-- Buck Teeth (behind mouth, in front of muzzle) -->
          <div style="position:absolute;top:59px;left:50%;transform:translateX(-50%);display:flex;gap:0px;z-index:43;">
            <div style="width:9px;height:14px;background:linear-gradient(180deg, #ffffff 0%, #f5f5f0 100%);border:1.5px solid #d6ccc2;border-radius:1px 1px 4px 4px;box-shadow:inset 1px 0 2px rgba(255,255,255,0.8);"></div>
            <div style="width:9px;height:14px;background:linear-gradient(180deg, #ffffff 0%, #f5f5f0 100%);border:1.5px solid #d6ccc2;border-radius:1px 1px 4px 4px;box-shadow:inset -1px 0 2px rgba(255,255,255,0.8);"></div>
          </div>
          <!-- Mouth (in front of teeth) -->
          <div style="position:absolute;top:62px;left:50%;transform:translateX(-50%);display:flex;z-index:46;">
            <div style="width:10px;height:6px;border:2px solid #78350f;border-top:none;border-radius:0 0 8px 8px;background:#fef3c7;"></div>
            <div style="width:10px;height:6px;border:2px solid #78350f;border-top:none;border-radius:0 0 8px 8px;background:#fef3c7;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:50px;left:8px;width:14px;height:8px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
          <div style="position:absolute;top:50px;right:8px;width:14px;height:8px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.7;filter:blur(1px);"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:120px;height:100px;background:radial-gradient(ellipse at 40% 30%, #fef3c7 0%, #d97706 25%, #b45309 55%, #92400e 100%);border:4px solid #78350f;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;top:120px;left:60px;z-index:20;box-shadow:inset 8px 8px 22px rgba(254,243,199,0.75), inset -6px -6px 16px rgba(120,53,15,0.4);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:38px;height:28px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:24px;right:22px;filter:blur(3px);"></div>
          <!-- Cream belly -->
          <div style="position:absolute;width:70px;height:60px;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #fef3c7 60%, #fde68a 100%);border-radius:50%;bottom:8px;left:50%;transform:translateX(-50%);box-shadow:inset 0 3px 8px rgba(255,255,255,0.6);"></div>
        </div>
        <!-- Front paws (small, holding position like it could hold an acorn) -->
        <div style="position:absolute;width:28px;height:24px;background:radial-gradient(ellipse at 35% 35%, #f59e0b, #d97706);border:3px solid #78350f;border-radius:12px;z-index:45;top:155px;left:55px;transform:rotate(-25deg);box-shadow:inset 2px 2px 4px rgba(254,243,199,0.3);"></div>
        <div style="position:absolute;width:28px;height:24px;background:radial-gradient(ellipse at 65% 35%, #f59e0b, #d97706);border:3px solid #78350f;border-radius:12px;z-index:45;top:155px;right:55px;transform:rotate(25deg);box-shadow:inset -2px 2px 4px rgba(254,243,199,0.3);"></div>
        <!-- Back paws -->
        <div style="position:absolute;width:38px;height:32px;background:radial-gradient(ellipse at 40% 35%, #d97706, #b45309);border:3px solid #78350f;border-radius:15px 15px 12px 12px;top:200px;left:55px;z-index:21;transform:rotate(-8deg);box-shadow:inset 2px 2px 5px rgba(251,191,36,0.25);">
          <!-- Toe beans -->
          <div style="display:flex;gap:2px;position:absolute;bottom:4px;left:50%;transform:translateX(-50%);">
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
          </div>
        </div>
        <div style="position:absolute;width:38px;height:32px;background:radial-gradient(ellipse at 60% 35%, #d97706, #b45309);border:3px solid #78350f;border-radius:15px 15px 12px 12px;top:200px;right:55px;z-index:21;transform:rotate(8deg);box-shadow:inset -2px 2px 5px rgba(251,191,36,0.25);">
          <!-- Toe beans -->
          <div style="display:flex;gap:2px;position:absolute;bottom:4px;left:50%;transform:translateX(-50%);">
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:6px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
          </div>
        </div>
      </div>
    `,
    // ===== BEAR - Mammals Variant 12 =====
    // Created using existing mammal patterns - cute brown bear
    12:`
      <div style="position:relative;width:240px;height:280px;animation:bear-bounce 3s ease-in-out infinite;">
        <!-- Ears (small, round) -->
        <div style="position:absolute;width:50px;height:50px;background:radial-gradient(ellipse at 40% 30%, #92400e 0%, #78350f 60%, #5c3317 100%);border:4px solid #5c3317;border-radius:50%;z-index:30;top:18px;left:40px;box-shadow:inset 2px 2px 6px rgba(180,120,60,0.3), inset -2px -2px 4px rgba(60,30,15,0.25);transform-origin:bottom center;animation:bear-ear-l 2.5s ease-in-out infinite;">
          <div style="position:absolute;width:28px;height:28px;background:radial-gradient(ellipse at 50% 45%, #fecdd3 0%, #fda4af 70%);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.85;"></div>
        </div>
        <div style="position:absolute;width:50px;height:50px;background:radial-gradient(ellipse at 60% 30%, #92400e 0%, #78350f 60%, #5c3317 100%);border:4px solid #5c3317;border-radius:50%;z-index:30;top:18px;right:40px;box-shadow:inset -2px 2px 6px rgba(180,120,60,0.3), inset 2px -2px 4px rgba(60,30,15,0.25);transform-origin:bottom center;animation:bear-ear-r 2.5s ease-in-out infinite;">
          <div style="position:absolute;width:28px;height:28px;background:radial-gradient(ellipse at 50% 45%, #fecdd3 0%, #fda4af 70%);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.85;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:150px;height:125px;background:radial-gradient(ellipse at 35% 30%, #d4a574 0%, #a3643d 25%, #92400e 55%, #78350f 100%);border:4px solid #5c3317;border-radius:50% 50% 48% 48% / 55% 55% 45% 45%;top:35px;left:45px;z-index:40;box-shadow:inset 8px 8px 22px rgba(212,165,116,0.75), inset -6px -6px 16px rgba(60,30,15,0.4);">
          <!-- Head highlight spot (primary) -->
          <div style="position:absolute;width:46px;height:34px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:18px;filter:blur(5px);"></div>
          <!-- Head highlight spot (secondary) -->
          <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.45);border-radius:50%;top:28px;right:28px;filter:blur(3px);"></div>
          <!-- Muzzle (cream colored, oval) -->
          <div style="position:absolute;width:75px;height:58px;background:radial-gradient(ellipse at 50% 40%, #fef3c7 0%, #fde68a 60%, #fcd34d 100%);border-radius:50% 50% 50% 50% / 45% 45% 55% 55%;bottom:10px;left:50%;transform:translateX(-50%);box-shadow:inset 0 3px 10px rgba(255,255,255,0.6);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:35px;width:100%;display:flex;justify-content:center;gap:40px;">
            <div style="width:22px;height:24px;background:radial-gradient(circle at 30% 30%, #4a3f3a, #1a1a1a);border-radius:50%;position:relative;animation:bear-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.1);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.5;"></div>
            </div>
            <div style="width:22px;height:24px;background:radial-gradient(circle at 30% 30%, #4a3f3a, #1a1a1a);border-radius:50%;position:relative;animation:bear-blink 4s infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.1);">
              <div style="position:absolute;width:8px;height:8px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;bottom:4px;right:4px;opacity:0.5;"></div>
            </div>
          </div>
          <!-- Nose -->
          <div style="position:absolute;width:24px;height:18px;background:radial-gradient(circle at 40% 35%, #4a3f3a, #2d2320);border-radius:50% 50% 45% 45% / 50% 50% 50% 50%;top:68px;left:50%;transform:translateX(-50%);z-index:50;box-shadow:inset 1px 1px 3px rgba(120,100,80,0.3);"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:84px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:14px;height:10px;border:3px solid #92400e;border-top:none;border-radius:0 0 12px 12px;background:rgba(254,240,138,0.5);"></div>
            <div style="width:14px;height:10px;border:3px solid #92400e;border-top:none;border-radius:0 0 12px 12px;background:rgba(254,240,138,0.5);"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:60px;left:18px;width:18px;height:10px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.7;filter:blur(2px);"></div>
          <div style="position:absolute;top:60px;right:18px;width:18px;height:10px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.7;filter:blur(2px);"></div>
        </div>
        <!-- Body (chunky) -->
        <div style="position:absolute;width:155px;height:115px;background:radial-gradient(ellipse at 38% 30%, #d4a574 0%, #a3643d 25%, #92400e 55%, #78350f 100%);border:4px solid #5c3317;border-radius:50% 50% 45% 45% / 55% 55% 45% 45%;top:130px;left:42px;z-index:20;box-shadow:inset 8px 8px 22px rgba(212,165,116,0.75), inset -6px -6px 16px rgba(60,30,15,0.4);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:48px;height:34px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:18px;filter:blur(5px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:24px;height:18px;background:rgba(255,255,255,0.45);border-radius:50%;top:28px;right:28px;filter:blur(3px);"></div>
          <!-- Belly patch -->
          <div style="position:absolute;width:90px;height:70px;background:radial-gradient(ellipse at 50% 45%, #fef3c7 0%, #fde68a 70%, #fcd34d 100%);border-radius:50%;bottom:12px;left:50%;transform:translateX(-50%);box-shadow:inset 0 4px 10px rgba(255,255,255,0.5);"></div>
        </div>
        <!-- Front paws (chunky with pads) -->
        <div style="position:absolute;width:45px;height:38px;background:radial-gradient(ellipse at 40% 35%, #92400e, #78350f);border:3.5px solid #5c3317;border-radius:50%;z-index:45;top:155px;left:30px;transform:rotate(15deg);box-shadow:inset 2px 2px 6px rgba(180,120,60,0.25);animation:bear-wave-l 3s ease-in-out infinite;">
          <!-- Paw pad -->
          <div style="position:absolute;bottom:5px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:2px;">
            <div style="display:flex;gap:2px;">
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            </div>
            <div style="width:16px;height:12px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:40%;"></div>
          </div>
        </div>
        <div style="position:absolute;width:45px;height:38px;background:radial-gradient(ellipse at 60% 35%, #92400e, #78350f);border:3.5px solid #5c3317;border-radius:50%;z-index:45;top:155px;right:30px;transform:rotate(-15deg);box-shadow:inset -2px 2px 6px rgba(180,120,60,0.25);animation:bear-wave-r 3s ease-in-out infinite;">
          <!-- Paw pad -->
          <div style="position:absolute;bottom:5px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:2px;">
            <div style="display:flex;gap:2px;">
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
              <div style="width:7px;height:8px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            </div>
            <div style="width:16px;height:12px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:40%;"></div>
          </div>
        </div>
        <!-- Back paws -->
        <div style="position:absolute;width:52px;height:42px;background:radial-gradient(ellipse at 45% 35%, #92400e, #78350f);border:3.5px solid #5c3317;border-radius:22px 22px 16px 16px;top:210px;left:48px;z-index:21;box-shadow:inset 2px 2px 6px rgba(180,120,60,0.2);transform-origin:top center;animation:bear-paw-l 2s ease-in-out infinite;">
          <!-- Toe beans -->
          <div style="display:flex;gap:3px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%);">
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
          </div>
        </div>
        <div style="position:absolute;width:52px;height:42px;background:radial-gradient(ellipse at 55% 35%, #92400e, #78350f);border:3.5px solid #5c3317;border-radius:22px 22px 16px 16px;top:210px;right:48px;z-index:21;box-shadow:inset -2px 2px 6px rgba(180,120,60,0.2);transform-origin:top center;animation:bear-paw-r 2s ease-in-out infinite;">
          <!-- Toe beans -->
          <div style="display:flex;gap:3px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%);">
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
            <div style="width:8px;height:10px;background:radial-gradient(ellipse, #fecdd3, #fda4af);border-radius:50%;"></div>
          </div>
        </div>
        <!-- Small tail -->
        <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse at 50% 40%, #a3643d, #78350f);border:3px solid #5c3317;border-radius:50%;bottom:55px;right:38px;z-index:10;box-shadow:inset 1px 1px 4px rgba(180,120,60,0.3);animation:bear-tail-wiggle 2s ease-in-out infinite;"></div>
      </div>
    `,
    // ===== HORSE - Mammal Variant 13 =====
    // Original: 320×380 → Scaled: 240×285 (0.75 factor)
    // Structure: ears → tail → back legs → neck → body → front legs → head
    13:`
      <div style="position:relative;width:240px;height:285px;animation:horse-bounce 2.5s ease-in-out infinite;">
        <!-- EARS (on head, z-index 30) -->
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 40% 30%, #c99b7a, #b07d62, #8d5d46);border:3px solid #8d5d46;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;left:62px;transform:rotate(-15deg);z-index:30;box-shadow:inset 3px 3px 8px rgba(220,180,150,0.5),inset -2px -2px 5px rgba(100,70,50,0.3);">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #d9b9a6, #c9a090);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <div style="position:absolute;width:26px;height:41px;background:radial-gradient(ellipse at 60% 30%, #c99b7a, #b07d62, #8d5d46);border:3px solid #8d5d46;border-radius:50% 50% 10% 10% / 80% 80% 20% 20%;top:-15px;right:75px;transform:rotate(15deg);z-index:30;box-shadow:inset 3px 3px 8px rgba(220,180,150,0.5),inset -2px -2px 5px rgba(100,70,50,0.3);">
          <div style="position:absolute;width:14px;height:26px;background:radial-gradient(ellipse, #d9b9a6, #c9a090);border-radius:50% 50% 20% 20%;bottom:4px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>

        <!-- TAIL (mane colored, z-index 5) -->
        <div style="position:absolute;width:30px;height:83px;background:radial-gradient(ellipse at 40% 20%, #5a4232, #4a3728, #3a2a1c);border:3px solid #8d5d46;border-radius:10px 40px 40px 40px;top:128px;right:53px;z-index:5;transform-origin:top center;animation:horse-tail-swish 2s ease-in-out infinite;box-shadow:inset 3px 3px 8px rgba(90,70,50,0.4),inset -2px -2px 5px rgba(30,20,15,0.3);">
          <div style="position:absolute;width:10px;height:30px;background:rgba(255,255,255,0.1);border-radius:50%;top:10px;left:5px;filter:blur(2px);"></div>
        </div>

        <!-- BACK LEGS (shadow legs, z-index 15) -->
        <div style="position:absolute;width:29px;height:60px;background:radial-gradient(ellipse at 50% 30%, #9a7050, #8d5d46);border:3px solid #8d5d46;border-radius:8px 8px 11px 11px;top:173px;left:86px;z-index:15;filter:brightness(0.9);box-shadow:inset 2px 2px 6px rgba(180,140,100,0.25),inset -2px -2px 4px rgba(80,50,35,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #3d3030, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 1px 1px 3px rgba(60,50,45,0.3);"></div>
        </div>
        <div style="position:absolute;width:29px;height:60px;background:radial-gradient(ellipse at 50% 30%, #9a7050, #8d5d46);border:3px solid #8d5d46;border-radius:8px 8px 11px 11px;top:173px;left:154px;z-index:15;filter:brightness(0.9);box-shadow:inset 2px 2px 6px rgba(180,140,100,0.25),inset -2px -2px 4px rgba(80,50,35,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #3d3030, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 1px 1px 3px rgba(60,50,45,0.3);"></div>
        </div>

        <!-- NECK (z-index 21) -->
        <div style="position:absolute;width:49px;height:68px;background:radial-gradient(ellipse at 35% 30%, #c99b7a 0%, #b07d62 40%, #8d5d46 100%);border-left:4px solid #8d5d46;border-right:4px solid #8d5d46;clip-path:polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);top:79px;left:86px;z-index:21;box-shadow:inset 5px 5px 12px rgba(220,180,150,0.4),inset -4px -4px 10px rgba(100,70,50,0.3);">
          <div style="position:absolute;width:8px;height:40px;background:rgba(255,255,255,0.15);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
        </div>

        <!-- BODY (z-index 20) -->
        <div style="position:absolute;width:135px;height:105px;background:radial-gradient(ellipse at 38% 28%, #c99b7a 0%, #b07d62 35%, #8d5d46 70%, #7a5040 100%);border:4px solid #8d5d46;border-radius:60px 75px 60px 60px;top:113px;left:45px;z-index:20;box-shadow:inset 10px 10px 25px rgba(220,180,150,0.5),inset -6px -6px 15px rgba(100,70,50,0.35);">
          <div style="position:absolute;width:45px;height:30px;background:rgba(255,255,255,0.4);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.25);border-radius:50%;top:28px;right:25px;filter:blur(4px);"></div>
          <div style="position:absolute;top:3px;left:8px;width:48px;height:24px;background:rgba(120,80,50,0.1);border-radius:50%;"></div>
        </div>

        <!-- FRONT LEGS (z-index 25) -->
        <div style="position:absolute;width:29px;height:60px;background:radial-gradient(ellipse at 40% 30%, #c99b7a, #b07d62, #8d5d46);border:3px solid #8d5d46;border-radius:8px 8px 11px 11px;top:180px;left:56px;z-index:25;box-shadow:inset 3px 3px 8px rgba(220,180,150,0.4),inset -2px -2px 5px rgba(100,70,50,0.3);animation:horse-leg-kick 1s ease-in-out infinite;">
          <div style="position:absolute;width:3px;height:25px;background:rgba(255,255,255,0.15);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #3d3030, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(70,55,50,0.3);"></div>
        </div>
        <div style="position:absolute;width:29px;height:60px;background:radial-gradient(ellipse at 40% 30%, #c99b7a, #b07d62, #8d5d46);border:3px solid #8d5d46;border-radius:8px 8px 11px 11px;top:180px;left:135px;z-index:25;box-shadow:inset 3px 3px 8px rgba(220,180,150,0.4),inset -2px -2px 5px rgba(100,70,50,0.3);animation:horse-leg-kick 1s ease-in-out infinite reverse;">
          <div style="position:absolute;width:3px;height:25px;background:rgba(255,255,255,0.15);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #3d3030, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(70,55,50,0.3);"></div>
        </div>

        <!-- HEAD (z-index 40) -->
        <div style="position:absolute;width:98px;height:120px;background:radial-gradient(ellipse at 38% 28%, #c99b7a 0%, #b07d62 35%, #8d5d46 70%, #7a5040 100%);border:4px solid #8d5d46;border-radius:50% 50% 45% 45% / 40% 40% 60% 60%;top:0px;left:64px;z-index:40;box-shadow:inset 8px 8px 20px rgba(220,180,150,0.5),inset -5px -5px 12px rgba(100,70,50,0.35);">
          <!-- Head highlight -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.45);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Mane tuft -->
          <div style="position:absolute;width:45px;height:30px;background:radial-gradient(ellipse at 50% 60%, #5a4232, #4a3728);border:2px solid #8d5d46;border-radius:50% 50% 20% 20%;top:-11px;left:50%;transform:translateX(-50%);z-index:45;box-shadow:inset 2px 2px 5px rgba(90,70,50,0.3);"></div>
          <!-- Eyes -->
          <div style="display:flex;gap:34px;margin-top:34px;justify-content:center;">
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #3d3030, #2d2323);border-radius:50%;position:relative;animation:horse-blink 4s infinite;box-shadow:inset 1px 1px 2px rgba(60,50,45,0.3);">
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #3d3030, #2d2323);border-radius:50%;position:relative;animation:horse-blink 4s infinite;box-shadow:inset 1px 1px 2px rgba(60,50,45,0.3);">
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
            </div>
          </div>
          <!-- Muzzle -->
          <div style="position:absolute;bottom:0;width:100%;height:56px;background:radial-gradient(ellipse at 50% 40%, #e8d0be, #d9b9a6, #c9a896);border-top:3px solid #8d5d46;border-radius:0 0 50% 50% / 0 0 80% 80%;box-shadow:inset 4px 4px 10px rgba(255,240,220,0.4),inset -3px -3px 8px rgba(140,100,80,0.2);">
            <!-- Nostrils -->
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #8d5d46, #7a5040);border-radius:50%;bottom:26px;left:26px;transform:rotate(15deg);opacity:0.6;"></div>
            <div style="position:absolute;width:9px;height:12px;background:radial-gradient(ellipse, #8d5d46, #7a5040);border-radius:50%;bottom:26px;right:26px;transform:rotate(-15deg);opacity:0.6;"></div>
            <!-- Mouth -->
            <div style="position:absolute;bottom:11px;left:50%;transform:translateX(-50%);width:30px;height:8px;border-bottom:3px solid #8d5d46;border-radius:50%;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:72px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #fb6f92, transparent);border-radius:50%;opacity:0.25;filter:blur(1px);"></div>
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #fb6f92, transparent);border-radius:50%;opacity:0.25;filter:blur(1px);"></div>
          </div>
        </div>
      </div>
    `,
    // ===== COW - Mammal Variant 14 =====
    // Structure: tail → back legs → neck → body → front legs → head (with ears/horns inside head)
    14:`
      <div style="position:relative;width:240px;height:285px;animation:cow-graze 3s ease-in-out infinite;">
        <!-- TAIL (z-index 5) - positioned to overlap with body, behind it -->
        <div style="position:absolute;width:12px;height:70px;background:radial-gradient(ellipse at 50% 30%, #f0f0f0, #d8d8d8);border:2px solid #888;border-radius:5px;top:130px;left:155px;z-index:5;transform-origin:top center;animation:cow-tail-swish 2.5s ease-in-out infinite;">
          <div style="position:absolute;width:18px;height:22px;background:radial-gradient(ellipse at 50% 60%, #3a3a3a, #2a2a2a);border:2px solid #1a1a1a;border-radius:40% 40% 50% 50%;bottom:-10px;left:50%;transform:translateX(-50%);box-shadow:inset 2px 2px 4px rgba(80,80,80,0.3);"></div>
        </div>

        <!-- BACK LEGS (z-index 15) - matching horse: left:86px, left:154px -->
        <div style="position:absolute;width:30px;height:60px;background:radial-gradient(ellipse at 50% 30%, #e0e0e0, #c8c8c8);border:3px solid #888;border-radius:8px 8px 10px 10px;top:173px;left:86px;z-index:15;filter:brightness(0.9);box-shadow:inset 2px 2px 6px rgba(255,255,255,0.4),inset -2px -2px 4px rgba(100,100,100,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #4a4040, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 1px 1px 3px rgba(80,70,70,0.3);"></div>
        </div>
        <div style="position:absolute;width:30px;height:60px;background:radial-gradient(ellipse at 50% 30%, #e0e0e0, #c8c8c8);border:3px solid #888;border-radius:8px 8px 10px 10px;top:173px;left:154px;z-index:15;filter:brightness(0.9);box-shadow:inset 2px 2px 6px rgba(255,255,255,0.4),inset -2px -2px 4px rgba(100,100,100,0.25);">
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #4a4040, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 1px 1px 3px rgba(80,70,70,0.3);"></div>
        </div>

        <!-- NECK (z-index 20) - matching horse: top:79px, left:86px -->
        <div style="position:absolute;width:49px;height:68px;background:radial-gradient(at 35% 30%, rgb(255, 255, 255) 0%, rgb(240, 240, 240) 40%, rgb(224, 224, 224) 100%);border-left:4px solid #888;border-right:4px solid #888;clip-path:polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);top:79px;left:86px;z-index:20;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.6),inset -4px -4px 10px rgba(150,150,150,0.25);">
          <div style="position:absolute;width:8px;height:40px;background:rgba(255,255,255,0.2);border-radius:50%;top:10px;left:8px;filter:blur(3px);"></div>
        </div>

        <!-- BODY (z-index 20) - matching horse: top:113px, left:45px, 135x105 -->
        <div style="position:absolute;width:135px;height:105px;background:radial-gradient(ellipse at 38% 28%, #ffffff 0%, #f5f5f5 35%, #e8e8e8 70%, #d8d8d8 100%);border:4px solid #888;border-radius:60px 75px 60px 60px;top:113px;left:45px;z-index:20;box-shadow:inset 10px 10px 25px rgba(255,255,255,0.8),inset -6px -6px 15px rgba(150,150,150,0.3);">
          <!-- Body highlight -->
          <div style="position:absolute;width:45px;height:30px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:18px;filter:blur(6px);"></div>
          <!-- Black spots on body -->
          <div style="position:absolute;width:35px;height:28px;background:radial-gradient(ellipse, #3a3a3a, #2a2a2a);border-radius:50% 60% 40% 55%;top:15px;right:18px;transform:rotate(-10deg);"></div>
          <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse, #3a3a3a, #2a2a2a);border-radius:45% 55% 50% 45%;top:50px;left:22px;transform:rotate(15deg);"></div>
          <div style="position:absolute;width:20px;height:18px;background:radial-gradient(ellipse, #3a3a3a, #2a2a2a);border-radius:50%;bottom:22px;right:35px;"></div>
          <!-- Udder (small pink) -->
          <div style="position:absolute;width:32px;height:20px;background:radial-gradient(ellipse at 50% 30%, #ffccdd, #ffb6c8, #ff9cb0);border:2px solid #e898a8;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;bottom:-6px;left:50%;transform:translateX(-50%);box-shadow:inset 2px 2px 5px rgba(255,220,230,0.6);"></div>
        </div>

        <!-- FRONT LEGS (z-index 25) - matching horse: top:180px, left:56px, left:135px -->
        <div style="position:absolute;width:30px;height:60px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f0f0f0, #d8d8d8);border:3px solid #888;border-radius:8px 8px 10px 10px;top:180px;left:56px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.6),inset -2px -2px 5px rgba(120,120,120,0.25);">
          <div style="position:absolute;width:3px;height:25px;background:rgba(255,255,255,0.25);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <!-- Black spot on leg -->
          <div style="position:absolute;width:14px;height:12px;background:radial-gradient(ellipse, #3a3a3a, #2a2a2a);border-radius:50%;top:10px;right:4px;"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #4a4040, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(80,70,70,0.3);"></div>
        </div>
        <div style="position:absolute;width:30px;height:60px;background:radial-gradient(ellipse at 40% 30%, #ffffff, #f0f0f0, #d8d8d8);border:3px solid #888;border-radius:8px 8px 10px 10px;top:180px;left:135px;z-index:25;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.6),inset -2px -2px 5px rgba(120,120,120,0.25);">
          <div style="position:absolute;width:3px;height:25px;background:rgba(255,255,255,0.25);border-radius:2px;top:8px;left:6px;filter:blur(1px);"></div>
          <div style="position:absolute;bottom:-2px;width:100%;height:17px;background:radial-gradient(ellipse at 50% 40%, #4a4040, #2d2323);border-radius:0 0 8px 8px;box-shadow:inset 2px 2px 4px rgba(80,70,70,0.3);"></div>
        </div>

        <!-- HEAD (z-index 40) with ears, horns inside -->
        <div style="position:absolute;width:98px;height:120px;background:radial-gradient(at 38% 28%, rgb(255, 255, 255) 0%, rgb(245, 245, 245) 35%, rgb(232, 232, 232) 70%, rgb(216, 216, 216) 100%);border:4px solid #888;border-radius:50% 50% 45% 45% / 40% 40% 60% 60%;top:22px;left:57px;z-index:40;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.7),inset -5px -5px 12px rgba(150,150,150,0.3);overflow:visible;">
          <!-- EARS (floppy, on sides of head) -->
          <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse at 50% 40%, #f8f8f8, #e8e8e8, #d0d0d0);border:3px solid #888;border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;top:8px;left:-18px;transform:rotate(-30deg);z-index:30;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.7),inset -1px -1px 3px rgba(100,100,100,0.2);">
            <div style="position:absolute;width:14px;height:11px;background:radial-gradient(ellipse, #ffb6c1, #ff9caa);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.6;"></div>
          </div>
          <div style="position:absolute;width:28px;height:22px;background:radial-gradient(ellipse at 50% 40%, #f8f8f8, #e8e8e8, #d0d0d0);border:3px solid #888;border-radius:50% 50% 40% 40% / 60% 60% 40% 40%;top:8px;right:-18px;transform:rotate(30deg);z-index:30;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.7),inset -1px -1px 3px rgba(100,100,100,0.2);">
            <div style="position:absolute;width:14px;height:11px;background:radial-gradient(ellipse, #ffb6c1, #ff9caa);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0.6;"></div>
          </div>
          <!-- HORNS (on top of head) -->
          <div style="position:absolute;width:10px;height:22px;background:radial-gradient(ellipse at 40% 30%, #f5e6d3, #d4c4a8, #b8a888);border:2px solid #a09070;border-radius:40% 40% 20% 20%;top:-12px;left:18px;transform:rotate(-15deg);z-index:45;box-shadow:inset 2px 2px 4px rgba(255,250,240,0.6),inset -1px -1px 3px rgba(140,120,90,0.3);"></div>
          <div style="position:absolute;width:10px;height:22px;background:radial-gradient(ellipse at 60% 30%, #f5e6d3, #d4c4a8, #b8a888);border:2px solid #a09070;border-radius:40% 40% 20% 20%;top:-12px;right:18px;transform:rotate(15deg);z-index:45;box-shadow:inset 2px 2px 4px rgba(255,250,240,0.6),inset -1px -1px 3px rgba(140,120,90,0.3);"></div>
          <!-- COWBELL -->
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:28px;height:12px;background:linear-gradient(to top, rgb(251, 191, 36), rgb(252, 211, 77));border-radius:4px 4px 0 0;border-top:2px solid rgb(217, 119, 6);border-left:2px solid rgb(217, 119, 6);border-right:2px solid rgb(217, 119, 6);box-shadow:0 0 10px rgba(255, 215, 0, 0.5);z-index:50;"></div>
          <!-- Head highlight -->
          <div style="position:absolute;width:30px;height:22px;background:rgba(255,255,255,0.6);border-radius:50%;top:18px;left:14px;filter:blur(5px);"></div>
          <!-- Black spot on head -->
          <div style="position:absolute;width:30px;height:24px;background:radial-gradient(ellipse, #3a3a3a, #2a2a2a);border-radius:50% 45% 55% 50%;top:12px;right:10px;transform:rotate(10deg);"></div>
          <!-- Eyes -->
          <div style="display:flex;gap:34px;margin-top:40px;justify-content:center;">
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #4a3a30, #1a1a1a);border-radius:50%;position:relative;animation:cow-blink 4s infinite;box-shadow:inset 1px 1px 2px rgba(80,60,50,0.3);">
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.5;"></div>
            </div>
            <div style="width:15px;height:18px;background:radial-gradient(circle at 35% 35%, #4a3a30, #1a1a1a);border-radius:50%;position:relative;animation:cow-blink 4s infinite;box-shadow:inset 1px 1px 2px rgba(80,60,50,0.3);">
              <div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:3px;left:3px;"></div>
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:3px;opacity:0.5;"></div>
            </div>
          </div>
          <!-- Muzzle with overflow visible for grass -->
          <div style="position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:75px;height:50px;background:radial-gradient(ellipse at 50% 40%, #ffe4e1, #ffd0cc, #ffbeb8);border:3px solid #dda0a0;border-radius:45%;box-shadow:inset 4px 4px 10px rgba(255,240,235,0.7),inset -3px -3px 8px rgba(200,150,140,0.25);overflow:visible;">
            <!-- Nostrils (fixed, don't move) -->
            <div style="position:absolute;width:10px;height:12px;background:radial-gradient(ellipse, #c08080, #a06060);border-radius:50%;top:12px;left:14px;transform:rotate(10deg);"></div>
            <div style="position:absolute;width:10px;height:12px;background:radial-gradient(ellipse, #c08080, #a06060);border-radius:50%;top:12px;right:14px;transform:rotate(-10deg);"></div>
            <!-- Lower jaw (slides side to side randomly) -->
            <div style="position:absolute;bottom:0;left:3px;width:100%;height:22px;animation:cow-chew 4s ease-in-out infinite;overflow:visible;">
              <!-- Mouth line -->
              <div style="position:absolute;top:1px;left:50%;transform:translateX(-50%);width:28px;height:6px;border-bottom:3px solid #c09090;border-radius:50%;"></div>
              <!-- Straw sticking out of corner of mouth -->
              <div style="position:absolute;top:5px;left:34px;width:2.5px;height:26px;background:linear-gradient(rgb(218, 165, 32), rgb(184, 134, 11));border-radius:1px;transform:rotate(-20deg);transform-origin:center top;"></div>
              <div style="position:absolute;top:7px;left:33px;width:2px;height:18px;background:linear-gradient(rgb(212, 166, 52), rgb(166, 124, 0));border-radius:1px;transform:rotate(-8deg);transform-origin:center top;"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:72px;width:100%;display:flex;justify-content:space-around;padding:0 12px;">
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #ffb6c1, transparent);border-radius:50%;opacity:0.3;filter:blur(1px);"></div>
            <div style="width:18px;height:9px;background:radial-gradient(ellipse, #ffb6c1, transparent);border-radius:50%;opacity:0.3;filter:blur(1px);"></div>
          </div>
        </div>
      </div>
    `,
    // ===== GOLDEN RACCOON - Mammals Variant 15 =====
    // A legendary golden version of the Trash Panda with shimmering effects
    15:`
      <div style="position:relative;width:240px;height:280px;animation:raccoon-bounce 3s ease-in-out infinite;">
        <!-- Golden sparkles around the creature -->
        <div style="position:absolute;width:6px;height:6px;background:#fef08a;border-radius:50%;top:15px;left:30px;box-shadow:0 0 8px #fbbf24,0 0 16px #f59e0b;animation:sparkle-twinkle 1.5s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:5px;background:#fef08a;border-radius:50%;top:40px;right:25px;box-shadow:0 0 6px #fbbf24,0 0 12px #f59e0b;animation:sparkle-twinkle 1.8s ease-in-out infinite 0.3s;"></div>
        <div style="position:absolute;width:4px;height:4px;background:#fef08a;border-radius:50%;bottom:100px;left:15px;box-shadow:0 0 5px #fbbf24,0 0 10px #f59e0b;animation:sparkle-twinkle 2s ease-in-out infinite 0.6s;"></div>
        <div style="position:absolute;width:5px;height:5px;background:#fef08a;border-radius:50%;bottom:120px;right:20px;box-shadow:0 0 6px #fbbf24,0 0 12px #f59e0b;animation:sparkle-twinkle 1.6s ease-in-out infinite 0.9s;"></div>
        <!-- Golden glow aura -->
        <div style="position:absolute;width:220px;height:260px;top:10px;left:10px;background:radial-gradient(circle,rgba(251,191,36,0.15),transparent 60%);border-radius:50%;filter:blur(10px);animation:pulse-grow 3s ease-in-out infinite;"></div>
        <!-- Ears -->
        <div style="position:absolute;width:48px;height:48px;background:#f59e0b;border:4px solid #78350f;border-radius:50% 50% 10% 10%;z-index:30;top:15px;left:45px;transform:rotate(-20deg);">
          <div style="position:absolute;width:24px;height:24px;background:#fef3c7;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);opacity:0.9;"></div>
        </div>
        <div style="position:absolute;width:48px;height:48px;background:#f59e0b;border:4px solid #78350f;border-radius:50% 50% 10% 10%;z-index:30;top:15px;right:45px;transform:rotate(20deg);">
          <div style="position:absolute;width:24px;height:24px;background:#fef3c7;border-radius:50% 50% 10% 10%;bottom:3px;left:50%;transform:translateX(-50%);opacity:0.9;"></div>
        </div>
        <!-- Tail with golden stripes -->
        <div style="position:absolute;width:120px;height:45px;background:repeating-linear-gradient(to right,#78350f,#78350f 25px,#fbbf24 25px,#fbbf24 50px);border:4px solid #78350f;border-radius:30px;bottom:55px;right:-25px;z-index:5;transform-origin:left center;animation:tail-swish 2s ease-in-out infinite;box-shadow:inset 6px 6px 14px rgba(254,243,199,0.5), inset -4px -4px 10px rgba(120,53,15,0.4),0 0 20px rgba(251,191,36,0.3);"></div>
        <!-- Back paws -->
        <div style="position:absolute;width:44px;height:34px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 25%, #92400e 55%, #78350f 100%);border:3.5px solid #451a03;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:-55px;transform:rotate(-5deg);box-shadow:inset 4px 4px 10px rgba(217,119,6,0.7), inset -2px -2px 6px rgba(69,26,3,0.4);"></div>
        <div style="position:absolute;width:44px;height:34px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 25%, #92400e 55%, #78350f 100%);border:3.5px solid #451a03;border-radius:18px 18px 14px 14px;top:215px;left:50%;z-index:21;margin-left:11px;transform:rotate(5deg);box-shadow:inset 4px 4px 10px rgba(217,119,6,0.7), inset -2px -2px 6px rgba(69,26,3,0.4);"></div>
        <!-- Body -->
        <div style="position:absolute;width:150px;height:120px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 55%, #d97706 100%);border:4px solid #78350f;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:120px;left:45px;z-index:20;overflow:hidden;box-shadow:inset 8px 8px 22px rgba(254,243,199,0.8), inset -6px -6px 16px rgba(180,83,9,0.3),0 0 30px rgba(251,191,36,0.25);">
          <!-- Body highlight spot (primary) -->
          <div style="position:absolute;width:44px;height:32px;background:rgba(255,255,255,0.75);border-radius:50%;top:8px;left:14px;filter:blur(5px);"></div>
          <!-- Body highlight spot (secondary) -->
          <div style="position:absolute;width:22px;height:16px;background:rgba(255,255,255,0.5);border-radius:50%;top:26px;right:22px;filter:blur(3px);"></div>
          <div style="position:absolute;width:90px;height:70px;background:#fef3c7;border-radius:50%;bottom:-10px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Front paws with fingers -->
        <div style="position:absolute;width:40px;height:30px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 25%, #92400e 55%, #78350f 100%);border:3px solid #451a03;border-radius:12px;top:145px;left:40px;z-index:45;display:flex;justify-content:center;align-items:flex-start;gap:2px;padding-top:2px;animation:hand-wave-l 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(217,119,6,0.7), inset -2px -2px 6px rgba(69,26,3,0.4);">
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
        </div>
        <div style="position:absolute;width:40px;height:30px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 25%, #92400e 55%, #78350f 100%);border:3px solid #451a03;border-radius:12px;top:145px;right:40px;z-index:45;display:flex;justify-content:center;align-items:flex-start;gap:2px;padding-top:2px;animation:hand-wave-r 3s ease-in-out infinite;box-shadow:inset 4px 4px 10px rgba(217,119,6,0.7), inset -2px -2px 6px rgba(69,26,3,0.4);">
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
          <div style="width:10px;height:10px;background:radial-gradient(ellipse at 35% 30%, #d97706 0%, #b45309 50%, #92400e 100%);border:2px solid #451a03;border-radius:50%;margin-top:-6px;box-shadow:inset 2px 2px 4px rgba(217,119,6,0.6);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:140px;height:115px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 55%, #d97706 100%);border:4px solid #78350f;border-radius:50% 50% 48% 48% / 60% 60% 40% 40%;top:30px;left:50px;z-index:40;box-shadow:inset 8px 8px 22px rgba(254,243,199,0.8), inset -6px -6px 16px rgba(180,83,9,0.3),0 0 25px rgba(251,191,36,0.2);">
          <!-- Head highlight spot (primary) -->
          <div style="position:absolute;width:40px;height:28px;background:rgba(255,255,255,0.75);border-radius:50%;top:8px;left:16px;filter:blur(5px);"></div>
          <!-- Head highlight spot (secondary) -->
          <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:24px;right:26px;filter:blur(3px);"></div>
          <!-- Dark mask patches -->
          <div style="position:absolute;width:55px;height:42px;background:#78350f;top:35px;left:10px;border-radius:50%;transform:rotate(-10deg);"></div>
          <div style="position:absolute;width:55px;height:42px;background:#78350f;top:35px;right:10px;border-radius:50%;transform:rotate(10deg);"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:40px;width:100%;display:flex;justify-content:center;gap:32px;z-index:45;">
            <div style="width:22px;height:24px;background:#451a03;border-radius:50%;position:relative;animation:raccoon-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:#fef08a;border-radius:50%;top:3px;left:3px;"></div>
            </div>
            <div style="width:22px;height:24px;background:#451a03;border-radius:50%;position:relative;animation:raccoon-blink 4s infinite;">
              <div style="position:absolute;width:8px;height:8px;background:#fef08a;border-radius:50%;top:3px;left:3px;"></div>
            </div>
          </div>
          <!-- Golden nose -->
          <div style="position:absolute;width:18px;height:12px;background:#451a03;border-radius:50%;top:75px;left:50%;transform:translateX(-50%);z-index:50;box-shadow:0 0 8px rgba(251,191,36,0.4);"></div>
          <!-- Mouth -->
          <div style="position:absolute;top:82px;left:50%;transform:translateX(-50%);display:flex;">
            <div style="width:12px;height:8px;border:2.5px solid #78350f;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
            <div style="width:12px;height:8px;border:2.5px solid #78350f;border-top:none;border-radius:0 0 10px 10px;margin:0 -0.5px;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:68px;left:16px;width:16px;height:8px;background:#fed7aa;border-radius:50%;opacity:0.5;"></div>
          <div style="position:absolute;top:68px;right:16px;width:16px;height:8px;background:#fed7aa;border-radius:50%;opacity:0.5;"></div>
        </div>
      </div>
    `
  };

  const design = mammalDesigns[variant]||mammalDesigns[0];
  const shadowHTML = `<div class="adult-shadow"></div>`;
  return `<div style="position:relative;">${design}${shadowHTML}</div>`;
}


