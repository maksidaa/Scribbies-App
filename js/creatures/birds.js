function renderAdultBird(variantIndex){
  const variant=variantIndex||0;

  const birdDesigns={
    0:` <!-- Peacock (Upgraded with fan dance & strut - 19 feathers with multiple eyes) -->
      <div style="position:relative;width:120px;height:135px;display:inline-block;">
        <!-- Ground shadow -->
        <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:36px;height:8px;background:#000;border-radius:50%;filter:blur(3px);opacity:0.2;"></div>

        <!-- Fan feathers with eye patterns (19 feathers like original) -->
        <!-- Outer feathers (shortest) -->
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:68px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-92deg;--y:10px;z-index:1;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:68px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:92deg;--y:10px;z-index:1;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:72px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-80deg;--y:8px;z-index:1;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.1s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:72px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:80deg;--y:8px;z-index:1;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.1s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
          </div>
        </div>
        <!-- Mid-outer feathers -->
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:80px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-68deg;--y:5px;z-index:2;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.2s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:80px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:68deg;--y:5px;z-index:2;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.2s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:86px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-56deg;--y:3px;z-index:2;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.3s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:86px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:56deg;--y:3px;z-index:2;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.3s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <!-- Mid feathers -->
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:92px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-45deg;--y:0px;z-index:3;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.4s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:92px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:45deg;--y:0px;z-index:3;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.4s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:98px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-35deg;--y:0px;z-index:3;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.5s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:98px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:35deg;--y:0px;z-index:3;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.5s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <!-- Inner feathers (tallest) -->
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:104px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-25deg;--y:0px;z-index:4;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.6s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:104px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:25deg;--y:0px;z-index:4;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.6s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:108px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-16deg;--y:0px;z-index:4;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.7s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:108px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:16deg;--y:0px;z-index:4;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.7s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:112px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:-8deg;--y:0px;z-index:5;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.8s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:112px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:8deg;--y:0px;z-index:5;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.8s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
          </div>
        </div>
        <!-- Center feather (tallest) -->
        <div style="position:absolute;bottom:38px;left:50%;margin-left:-10px;width:20px;height:118px;transform-origin:bottom center;animation:peacock-fan-dance 8s ease-in-out infinite;--angle:0deg;--y:0px;z-index:6;">
          <div style="width:100%;height:100%;background:repeating-linear-gradient(90deg,transparent 0,transparent 1px,#065f46 1px,#065f46 2px);border-radius:50% 50% 90% 90%;display:flex;flex-direction:column;align-items:center;padding-top:2px;">
            <div style="width:18px;height:20px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;animation:peacock-shimmer 2s ease-in-out infinite 0.9s;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.9;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.85;"></div>
            <div style="width:10px;height:14px;margin-top:-5px;background:radial-gradient(ellipse at 50% 45%,#1e3a8a 0%,#3b82f6 25%,#14b8a6 35%,#fbbf24 45%,#4d7c0f 60%,transparent 65%);border-radius:50%;flex-shrink:0;opacity:0.8;"></div>
          </div>
        </div>

        <!-- Bird body with strut -->
        <div style="position:absolute;width:100%;height:100%;animation:peacock-strut 1s ease-in-out infinite;z-index:20;">
          <!-- Legs with walking animation -->
          <div style="position:absolute;bottom:8px;left:48px;width:3px;height:22px;background:repeating-linear-gradient(to bottom,#d97706,#d97706 3px,#b45309 3px,#b45309 4px);border:1px solid #78350f;border-radius:2px;transform-origin:top center;animation:peacock-leg-left 1s ease-in-out infinite;z-index:9;">
            <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:14px;height:6px;">
              <div style="position:absolute;left:50%;transform:translateX(-50%);width:5px;height:7px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;"></div>
              <div style="position:absolute;left:1px;width:4px;height:6px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;transform:rotate(-25deg);"></div>
              <div style="position:absolute;right:1px;width:4px;height:6px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;transform:rotate(25deg);"></div>
            </div>
          </div>
          <div style="position:absolute;bottom:8px;left:62px;width:3px;height:22px;background:repeating-linear-gradient(to bottom,#d97706,#d97706 3px,#b45309 3px,#b45309 4px);border:1px solid #78350f;border-radius:2px;transform-origin:top center;animation:peacock-leg-right 1s ease-in-out infinite;z-index:9;">
            <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:14px;height:6px;">
              <div style="position:absolute;left:50%;transform:translateX(-50%);width:5px;height:7px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;"></div>
              <div style="position:absolute;left:1px;width:4px;height:6px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;transform:rotate(-25deg);"></div>
              <div style="position:absolute;right:1px;width:4px;height:6px;background:#d97706;border:1px solid #78350f;border-radius:50% 50% 40% 40%;transform:rotate(25deg);"></div>
            </div>
          </div>

          <!-- Wings -->
          <div style="position:absolute;bottom:42px;left:39px;width:14px;height:26px;background:linear-gradient(to bottom,#1d4ed8,#1e3a8a);border-radius:50% 20% 50% 50%;border:2px solid #172554;transform:rotate(12deg);z-index:9;"></div>
          <div style="position:absolute;bottom:42px;left:66px;width:14px;height:26px;background:linear-gradient(to bottom,#1d4ed8,#1e3a8a);border-radius:20% 50% 50% 50%;border:2px solid #172554;transform:rotate(-12deg);z-index:9;"></div>

          <!-- Body -->
          <div style="position:absolute;bottom:28px;left:50%;transform:translateX(-50%);width:32px;height:40px;background:radial-gradient(circle at 30% 30%,#2563eb 0%,#1e40af 60%,#1e3a8a 100%);border-radius:100% 100% 65% 75% / 90% 90% 95% 75%;box-shadow:inset 4px 4px 8px rgba(255,255,255,0.3),inset -3px -3px 6px rgba(0,0,0,0.4);border:2px solid #172554;z-index:10;"></div>

          <!-- Neck -->
          <div style="position:absolute;bottom:62px;left:50%;transform:translateX(-50%);width:10px;height:26px;background:linear-gradient(to right,#1d4ed8,#2563eb,#1d4ed8);border-radius:50% 50% 0 0;border:2px solid #172554;border-bottom:none;z-index:11;"></div>

          <!-- Head -->
          <div style="position:absolute;bottom:84px;left:50%;transform:translateX(-50%);width:28px;height:26px;z-index:20;">
            <div style="width:100%;height:100%;background:radial-gradient(circle at 35% 35%,#60a5fa 0%,#2563eb 50%,#1e40af 100%);border-radius:48%;border:2px solid #172554;box-shadow:inset 3px 3px 6px rgba(255,255,255,0.4);">
              <!-- White face patch -->
              <div style="position:absolute;top:6px;left:4px;width:18px;height:10px;background:#ffffff;border-radius:8px;opacity:0.9;"></div>
              <!-- Eyes -->
              <div style="position:absolute;top:8px;left:6px;width:5px;height:5px;background:#0f172a;border-radius:50%;animation:blink 4s infinite;">
                <div style="position:absolute;top:1px;left:1px;width:2px;height:2px;background:white;border-radius:50%;"></div>
              </div>
              <div style="position:absolute;top:8px;right:6px;width:5px;height:5px;background:#0f172a;border-radius:50%;animation:blink 4s infinite;">
                <div style="position:absolute;top:1px;right:1px;width:2px;height:2px;background:white;border-radius:50%;"></div>
              </div>
              <!-- Beak -->
              <div style="position:absolute;top:14px;left:50%;transform:translateX(-50%);width:8px;height:6px;background:radial-gradient(circle at 50% 20%,#fbbf24,#d97706);border-radius:10% 10% 50% 50%;border:1px solid #92400e;"></div>
              <!-- Blush -->
              <div style="position:absolute;top:14px;left:3px;width:4px;height:3px;background:#f472b6;border-radius:50%;opacity:0.4;filter:blur(1px);"></div>
              <div style="position:absolute;top:14px;right:3px;width:4px;height:3px;background:#f472b6;border-radius:50%;opacity:0.4;filter:blur(1px);"></div>
            </div>

            <!-- Crest -->
            <div style="position:absolute;top:-14px;left:5px;transform:translateX(-50%);width:22px;height:16px;z-index:-1;animation:peacock-crest 1s ease-in-out infinite;">
              <div style="position:absolute;bottom:0;left:3px;width:1px;height:12px;background:#1e3a8a;transform:rotate(-20deg);">
                <div style="position:absolute;top:-3px;left:-2px;width:5px;height:5px;background:radial-gradient(circle,#3b82f6,#1e3a8a);border-radius:50%;"></div>
              </div>
              <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:1px;height:14px;background:#1e3a8a;">
                <div style="position:absolute;top:-3px;left:-2px;width:5px;height:5px;background:radial-gradient(circle,#3b82f6,#1e3a8a);border-radius:50%;"></div>
              </div>
              <div style="position:absolute;bottom:0;right:3px;width:1px;height:12px;background:#1e3a8a;transform:rotate(20deg);">
                <div style="position:absolute;top:-3px;left:-2px;width:5px;height:5px;background:radial-gradient(circle,#3b82f6,#1e3a8a);border-radius:50%;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sparkles -->
        <div style="position:absolute;top:8px;left:12px;width:3px;height:3px;background:white;border-radius:50%;box-shadow:0 0 5px white;opacity:0.8;animation:peacock-shimmer 2s infinite;"></div>
        <div style="position:absolute;top:22px;right:15px;width:2px;height:2px;background:#fbbf24;border-radius:50%;box-shadow:0 0 4px gold;opacity:0.8;animation:peacock-shimmer 3s infinite 1s;"></div>
      </div>
    `,
    1:` <!-- Scarlet Macaw -->
      <div style="position:relative;width:150px;height:220px;display:inline-block;animation:toucan-bob 2.5s ease-in-out infinite;">
        <!-- Floating tropical particles -->
        <div style="position:absolute;width:6px;height:4px;background:radial-gradient(ellipse, #ef4444, #dc2626);border-radius:50%;top:25px;left:18px;opacity:0.6;animation:tropical-float 4s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:3px;background:radial-gradient(ellipse, #3b82f6, #2563eb);border-radius:50%;top:40px;right:22px;opacity:0.5;animation:tropical-float 5s ease-in-out infinite 1s;"></div>
        <!-- Long tail feathers -->
        <div style="position:absolute;top:130px;left:55px;width:35px;height:90px;z-index:5;animation:tail-sway 2s ease-in-out infinite;transform-origin:center top;">
          <!-- Red tail feathers (longest) -->
          <div style="position:absolute;width:10px;height:85px;background:linear-gradient(180deg, #dc2626 0%, #ef4444 25%, #f87171 50%, #ef4444 75%, #dc2626 100%);border:2px solid #991b1b;border-radius:40% 40% 15% 15%;left:-4px;top:0;transform:rotate(-8deg);"></div>
          <div style="position:absolute;width:12px;height:90px;background:linear-gradient(180deg, #dc2626 0%, #ef4444 20%, #fca5a5 50%, #ef4444 80%, #dc2626 100%);border:2px solid #991b1b;border-radius:40% 40% 15% 15%;left:6px;top:-5px;"></div>
          <div style="position:absolute;width:10px;height:85px;background:linear-gradient(180deg, #dc2626 0%, #ef4444 25%, #f87171 50%, #ef4444 75%, #dc2626 100%);border:2px solid #991b1b;border-radius:40% 40% 15% 15%;left:16px;top:0;transform:rotate(8deg);"></div>
          <!-- Blue accent feathers -->
          <div style="position:absolute;width:8px;height:55px;background:linear-gradient(180deg, #2563eb 0%, #3b82f6 50%, #2563eb 100%);border:1px solid #1d4ed8;border-radius:40% 40% 20% 20%;left:26px;top:5px;transform:rotate(12deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:144px;left:55px;z-index:10;animation:toucan-hop 4s ease-in-out infinite;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 35% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 40% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:144px;left:75px;z-index:10;animation:toucan-hop 4s ease-in-out infinite 0.2s;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 65% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 60% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:95px;left:18px;width:50px;z-index:15;transform-origin:right center;animation:toucan-wing-flap 2s ease-in-out infinite reverse;">
          <!-- Yellow inner feathers -->
          <div style="position:absolute;width:45px;height:30px;background:linear-gradient(225deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);border-radius:60% 5px 5px 60%;top:8px;right:0;z-index:1;border:1px solid #b45309;"></div>
          <!-- Blue outer feathers -->
          <div style="position:absolute;width:50px;height:28px;background:linear-gradient(180deg, #2563eb 0%, #3b82f6 40%, #1d4ed8 100%);border-radius:70% 8px 8px 70%;top:0;right:0;z-index:2;border:2px solid #1e40af;"></div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:95px;right:25px;width:50px;z-index:15;transform-origin:left center;animation:toucan-wing-flap 2s ease-in-out infinite;">
          <!-- Yellow inner feathers -->
          <div style="position:absolute;width:45px;height:30px;background:linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);border-radius:5px 60% 60% 5px;top:8px;left:0;z-index:1;border:1px solid #b45309;"></div>
          <!-- Blue outer feathers -->
          <div style="position:absolute;width:50px;height:28px;background:linear-gradient(180deg, #2563eb 0%, #3b82f6 40%, #1d4ed8 100%);border-radius:8px 70% 70% 8px;top:0;left:0;z-index:2;border:2px solid #1e40af;"></div>
        </div>
        <!-- Body (red) -->
        <div style="position:absolute;width:55px;height:55px;background:radial-gradient(ellipse at 40% 28%, #f87171 0%, #ef4444 20%, #dc2626 45%, #b91c1c 100%);border:2px solid #991b1b;border-radius:55% 55% 50% 50%;top:100px;left:47px;z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(255,200,200,0.25);border-radius:50%;top:5px;left:7px;filter:blur(3px);"></div>
        </div>
        <!-- Head (red) - side profile -->
        <div style="position:absolute;width:43px;height:40px;top:55px;left:50px;z-index:40;background:radial-gradient(ellipse at 40% 28%, #f87171 0%, #ef4444 25%, #dc2626 50%, #b91c1c 100%);border:2px solid #991b1b;border-radius:50%;overflow:visible;animation:toucan-head-turn 6s ease-in-out infinite;">
          <!-- White face patch around eyes -->
          <div style="position:absolute;width:33px;height:28px;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #fefefe 40%, #fef2f2 70%, #fee2e2 100%);border:1px solid #fecaca;border-radius:50%;top:8px;left:50%;transform:translateX(-50%);z-index:1;"></div>
          <!-- Left eye with yellow ring -->
          <div style="position:absolute;top:10px;left:3px;width:14px;height:14px;background:radial-gradient(circle at 50% 50%, #fefce8 0%, #fef08a 40%, #facc15 70%, #eab308 100%);border:2px solid #ca8a04;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 35% 30%, #ffffff 0%, #f5f5f5 60%, #e5e5e5 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Right eye with yellow ring -->
          <div style="position:absolute;top:10px;right:3px;width:14px;height:14px;background:radial-gradient(circle at 50% 50%, #fefce8 0%, #fef08a 40%, #facc15 70%, #eab308 100%);border:2px solid #ca8a04;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 65% 30%, #ffffff 0%, #f5f5f5 60%, #e5e5e5 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Parrot beak (based on Toucan, shorter, pale yellow-orange) -->
          <div style="position:absolute;top:4px;left:20px;z-index:45;transform-origin:left center;width:36px;height:34px;">
            <!-- Upper beak -->
            <div style="width:30px;height:24px;background:linear-gradient(95deg, #fefce8 0%, #fef3c7 25%, #fde68a 50%, #fcd34d 75%, #f59e0b 100%);border:2px solid #b45309;border-radius:25px 50% 5px 40% / 80% 90% 15% 55%;position:relative;z-index:2;transform:rotate(5deg);transform-origin:left center;">
              <div style="position:absolute;width:16px;height:3px;background:linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%);border-radius:50%;top:4px;left:4px;filter:blur(1px);"></div>
              <!-- Nostril -->
              <div style="position:absolute;width:2px;height:2px;background:#92400e;border-radius:50%;top:8px;left:4px;"></div>
            </div>
            <!-- Lower beak -->
            <div style="position:absolute;width:22px;height:13px;background:linear-gradient(95deg, #fefce8 0%, #fef3c7 30%, #fde68a 60%, #fcd34d 100%);border:2px solid #b45309;border-radius:20px 85% 15px 35% / 60% 95% 30% 90%;top:20px;left:2px;z-index:1;transform-origin:left center;animation:toucan-beak-clack 5s ease-in-out infinite;">
              <div style="position:absolute;width:12px;height:2px;background:rgba(255,255,255,0.4);border-radius:50%;top:4px;left:3px;filter:blur(1px);"></div>
            </div>
          </div>
        </div>
        <!-- Red chest/throat -->
        <div style="position:absolute;width:38px;height:40px;background:radial-gradient(ellipse at 50% 25%, #fca5a5 0%, #f87171 35%, #ef4444 60%, #dc2626 100%);border:2px solid #991b1b;border-radius:45% 45% 50% 50%;top:85px;left:55px;z-index:35;">
          <div style="position:absolute;width:14px;height:12px;background:rgba(255,200,200,0.4);border-radius:50%;top:6px;left:10px;filter:blur(3px);"></div>
        </div>
      </div>
    `,
    2:` <!-- Majestic Swan - Front View with Turning Head -->
      <div style="position:relative;width:140px;height:160px;display:inline-block;animation:swan-float 4s ease-in-out infinite;">
        <!-- Subtle water reflection -->
        <div style="position:absolute;bottom:5px;left:50%;transform:translateX(-50%);width:90px;height:15px;background:linear-gradient(180deg, rgba(147,197,253,0.25) 0%, transparent 100%);border-radius:50%;filter:blur(3px);"></div>
        <!-- Black feet -->
        <div style="position:absolute;top:135px;left:62px;z-index:10;">
          <div style="width:6px;height:10px;background:radial-gradient(ellipse at 40% 30%, #334155 0%, #1e293b 100%);border:1px solid #0f172a;border-radius:40%;"></div>
          <div style="position:absolute;top:8px;left:-3px;width:12px;height:6px;">
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:0;top:1px;transform:rotate(-20deg);"></div>
            <div style="position:absolute;width:3px;height:5px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:4px;top:1px;"></div>
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;right:0;top:1px;transform:rotate(20deg);"></div>
          </div>
        </div>
        <div style="position:absolute;top:135px;left:73px;z-index:10;">
          <div style="width:6px;height:10px;background:radial-gradient(ellipse at 60% 30%, #334155 0%, #1e293b 100%);border:1px solid #0f172a;border-radius:40%;"></div>
          <div style="position:absolute;top:8px;left:-3px;width:12px;height:6px;">
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:0;top:1px;transform:rotate(-20deg);"></div>
            <div style="position:absolute;width:3px;height:5px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:4px;top:1px;"></div>
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;right:0;top:1px;transform:rotate(20deg);"></div>
          </div>
        </div>
        <!-- Left wing (folded, gentle flap) -->
        <div style="position:absolute;top:90px;left:32px;width:35px;height:45px;z-index:15;transform-origin:right center;animation:swan-wing-left 4s ease-in-out infinite;">
          <div style="width:32px;height:40px;background:linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #e2e8f0 100%);border-radius:60% 30% 50% 40%;border:2px solid #cbd5e1;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8);"></div>
        </div>
        <!-- Right wing (folded, gentle flap) -->
        <div style="position:absolute;top:91px;left:75px;width:35px;height:45px;z-index:15;transform-origin:left center;animation:swan-wing-right 4s ease-in-out infinite;">
          <div style="width:32px;height:40px;background:linear-gradient(225deg, #ffffff 0%, #f8fafc 40%, #e2e8f0 100%);border-radius:30% 60% 40% 50%;border:2px solid #cbd5e1;box-shadow:inset -3px 3px 8px rgba(255,255,255,0.8);"></div>
        </div>
        <!-- Body (front view, plump oval) -->
        <div style="position:absolute;width:60px;height:55px;background:radial-gradient(ellipse at 45% 35%, #ffffff 0%, #fafafa 30%, #f1f5f9 60%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:50%;top:90px;left:50%;transform:translateX(-50%);z-index:20;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.9),0 3px 8px rgba(148,163,184,0.15);">
          <div style="position:absolute;width:18px;height:14px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:10px;filter:blur(3px);"></div>
        </div>
        <!-- Neck (SVG curved like flamingo, but shorter, centered) -->
        <div style="position:absolute;top:25px;left:50%;transform:translateX(-50%);z-index:25;">
          <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
            <path d="M25 78 Q35 60 28 42 Q21 25 25 8" stroke="#cbd5e1" stroke-width="16" stroke-linecap="round" fill="none" opacity="0.4"/>
            <path d="M25 78 Q35 60 28 42 Q21 25 25 8" stroke="url(#swanNeck7)" stroke-width="14" stroke-linecap="round" fill="none"/>
            <path d="M24 72 Q32 56 27 42 Q22 28 24 14" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <defs>
              <linearGradient id="swanNeck7" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style="stop-color:#f1f5f9"/>
                <stop offset="50%" style="stop-color:#ffffff"/>
                <stop offset="100%" style="stop-color:#fafafa"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <!-- Head (front view) -->
        <div style="position:absolute;width:32px;height:30px;top:24px;left:53px;z-index:40;background:radial-gradient(ellipse at 40% 35%, #ffffff 0%, #fafafa 40%, #f1f5f9 80%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:50%;overflow:visible;">
          <!-- Left eye -->
          <div style="position:absolute;top:8px;left:5px;width:7px;height:8px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;z-index:3;animation:toucan-blink 5s ease-in-out infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Right eye -->
          <div style="position:absolute;top:8px;right:5px;width:7px;height:8px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;z-index:3;animation:toucan-blink 5s ease-in-out infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Black forehead marking -->
          <div style="position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:14px;height:10px;background:radial-gradient(ellipse at 50% 70%, #1e293b 0%, #0f172a 80%, #000 100%);border-radius:50% 50% 40% 40%;z-index:4;"></div>
          <!-- Orange triangular beak (pointing down) -->
          <div style="position:absolute;top:16px;left:50%;transform:translateX(-50%);z-index:45;">
            <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:12px solid #f97316;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.15));"></div>
          </div>
        </div>
      </div>
    `,
    3:` <!-- Fancy Flamingo - detailed with leg tuck animation and swing wings -->
      <div style="position:relative;width:240px;height:280px;display:flex;align-items:center;justify-content:center;">
        <div style="transform:scale(0.55);transform-origin:center;">
          <div style="position:relative;width:300px;height:440px;animation:flamingo-sway 3s ease-in-out infinite;">
            <!-- Left foot (repositioned) -->
            <div style="position:absolute;bottom:5px;left:101px;z-index:9;">
              <div style="position:relative;width:70px;height:40px;">
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                <div style="position:absolute;width:58px;height:28px;background:linear-gradient(180deg, rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.1) 100%);top:8px;left:6px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:-1px;top:3px;transform:rotate(-25deg);transform-origin:right center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;left:2px;top:50%;transform:translateY(-50%);"></div></div>
                <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"><div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;left:50%;transform:translateX(-50%);bottom:2px;"></div></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:39px;top:6px;transform:rotate(19deg);transform-origin:left center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #7c2d12, #c2410c);border-radius:50%;right:2px;top:50%;transform:translateY(-50%);"></div></div>
              </div>
            </div>
            <!-- Right leg with tuck animation -->
            <div style="position:absolute;bottom:42px;left:180px;z-index:8;">
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:5px;bottom:110px;left:5px;transform-origin:top center;animation:flamingo-upper-leg-tuck 8s ease-in-out infinite;">
                <div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:3px;"></div>
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;bottom:-10px;left:-2px;"></div>
                <div style="position:absolute;width:8px;height:100px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:4px;bottom:-108px;left:1px;transform-origin:top center;animation:flamingo-lower-leg-fold 8s ease-in-out infinite;">
                  <div style="position:absolute;width:2px;height:80px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:2px;"></div>
                  <div style="position:absolute;bottom:-39px;left:-31px;transform-origin:top center;animation:flamingo-foot-tuck 8s ease-in-out infinite;">
                    <div style="position:relative;width:70px;height:40px;">
                      <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                      <div style="position:absolute;width:58px;height:28px;background:linear-gradient(rgba(251,146,60,0.45) 0%, rgba(251,146,60,0.1) 100%);top:1px;left:5px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:0px;top:7px;transform:rotate(-21deg);transform-origin:right center;z-index:2;"></div>
                      <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;left:40px;top:7px;transform:rotate(16deg);transform-origin:left center;z-index:2;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Left leg (standing) -->
            <div style="position:absolute;bottom:42px;left:130px;z-index:10;">
              <div style="position:absolute;width:8px;height:95px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:4px;bottom:0;left:2px;"><div style="position:absolute;width:2px;height:75px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:2px;"></div></div>
              <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:50%;bottom:93px;left:-1px;"></div>
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:5px;bottom:105px;left:1px;transform:rotate(-5deg);"><div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.3);border-radius:2px;top:10px;left:3px;"></div></div>
            </div>
            <!-- Tail feathers (rotated -82deg) -->
            <div style="position:absolute;top:200px;left:70px;z-index:15;transform-origin:right center;transform:rotate(-82deg);animation:tail-wag 2s ease-in-out infinite;">
              <div style="position:absolute;width:35px;height:18px;background:radial-gradient(ellipse at 50% 50%, #fda4af, #fb7185);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;top:3px;left:-18px;transform:rotate(25deg);box-shadow:inset 2px 2px 5px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:30px;height:15px;background:radial-gradient(ellipse at 50% 50%, #fecdd3, #fda4af);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;left:-10px;top:22px;transform:rotate(5deg);animation:breathe-custom 3s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:25px;height:12px;background:radial-gradient(ellipse at 50% 50%, #fff1f2, #fecdd3);border:2px solid #9f1239;border-radius:50% 20% 50% 50%;left:-3px;top:34px;transform:rotate(-10deg);box-shadow:inset 2px 2px 3px rgba(255,255,255,0.4);"></div>
            </div>
            <!-- Left wing (swing animation) -->
            <div style="position:absolute;top:186px;left:80px;z-index:18;transform-origin:right top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 60% 40%, #fecdd3, #fda4af, #fb7185);border:3px solid #9f1239;border-radius:60% 40% 70% 30%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.5),inset -2px -2px 6px rgba(159,18,57,0.2);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(159,18,57,0.3);top:15px;left:5px;transform:rotate(-10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(159,18,57,0.3);top:25px;left:8px;transform:rotate(-8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(159,18,57,0.3);top:35px;left:10px;transform:rotate(-5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Right wing (swing animation) -->
            <div style="position:absolute;top:186px;left:192px;z-index:18;transform-origin:left top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 40% 40%, #fecdd3, #fda4af, #fb7185);border:3px solid #9f1239;border-radius:40% 60% 30% 70%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.5),inset -2px -2px 6px rgba(159,18,57,0.2);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(159,18,57,0.3);top:15px;right:5px;transform:rotate(10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(159,18,57,0.3);top:25px;right:8px;transform:rotate(8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(159,18,57,0.3);top:35px;right:10px;transform:rotate(5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Body (repositioned) -->
            <div style="position:absolute;width:120px;height:80px;background:radial-gradient(ellipse at 45% 35%, #fff1f2 0%, #fecdd3 30%, #fda4af 60%, #fb7185 100%);border:4px solid #9f1239;border-radius:55% 55% 50% 50%;top:179px;left:97px;z-index:20;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.6),inset -5px -5px 12px rgba(159,18,57,0.2);">
              <div style="position:absolute;width:40px;height:25px;background:rgba(255,255,255,0.5);border-radius:50%;top:10px;left:20px;filter:blur(5px);"></div>
              <div style="position:absolute;width:20px;height:15px;background:rgba(255,255,255,0.3);border-radius:50%;top:20px;right:25px;filter:blur(4px);"></div>
            </div>
            <!-- Neck (repositioned) -->
            <div style="position:absolute;top:42px;left:114px;z-index:25;transform-origin:bottom center;animation:neck-bob 4s ease-in-out infinite;">
              <svg width="80" height="160" viewBox="0 0 80 160" fill="none"><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="#9f1239" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.3"/><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="url(#fancyNeck8)" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M50 150 Q62 118 45 82 Q28 46 40 18" stroke="rgba(255,255,255,0.4)" stroke-width="6" stroke-linecap="round" fill="none"/><defs><linearGradient id="fancyNeck8" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fb7185"/><stop offset="50%" style="stop-color:#fda4af"/><stop offset="100%" style="stop-color:#fecdd3"/></linearGradient></defs></svg>
            </div>
            <!-- Head (repositioned) -->
            <div style="position:absolute;width:65px;height:55px;background:radial-gradient(ellipse at 40% 35%, #fff1f2 0%, #fecdd3 40%, #fda4af 80%, #fb7185 100%);border:3px solid #9f1239;border-radius:50% 50% 45% 45%;top:9px;left:136px;z-index:40;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.6),inset -3px -3px 8px rgba(159,18,57,0.2);overflow:visible;">
              <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:6px;left:10px;filter:blur(4px);"></div>
              <!-- Tuft -->
              <div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);z-index:45;">
                <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 80%, #fda4af, #fb7185);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:-8px;--base-rotate:-15deg;transform:rotate(-15deg);transform-origin:bottom center;animation:tuft-sway 2s ease-in-out infinite;"></div>
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fecdd3, #fda4af);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:-2px;--base-rotate:0deg;transform-origin:bottom center;animation:tuft-sway 2.2s ease-in-out infinite 0.1s;"></div>
                <div style="position:absolute;width:6px;height:20px;background:radial-gradient(ellipse at 50% 80%, #fda4af, #fb7185);border:1px solid #9f1239;border-radius:50% 50% 30% 30%;left:5px;--base-rotate:15deg;transform:rotate(15deg);transform-origin:bottom center;animation:tuft-sway 1.8s ease-in-out infinite 0.2s;"></div>
              </div>
              <!-- Eyes -->
              <div style="position:absolute;top:16px;left:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <div style="position:absolute;top:16px;right:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <!-- Beak -->
              <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:40px;height:20px;background:radial-gradient(ellipse at 50% 30%, #fdba74, #fb923c);border:2px solid #c2410c;border-radius:30% 30% 50% 50%;z-index:41;"><div style="position:absolute;width:12px;height:6px;background:rgba(255,255,255,0.4);border-radius:50%;top:3px;left:8px;filter:blur(1px);"></div></div>
              <div style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:30px;height:14px;background:radial-gradient(ellipse at 50% 20%, #44403c, #1c1917);border:2px solid #0c0a09;border-radius:20% 20% 50% 50%;z-index:42;"></div>
              <!-- Blush -->
              <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:space-around;padding:0 8px;">
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #f472b6, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #f472b6, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    4:` <!-- Royal Swan (updated design with crown) -->
      <div style="position:relative;width:140px;height:160px;display:inline-block;animation:swan-float 4s ease-in-out infinite;">
        <!-- Royal golden aura -->
        <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:130px;height:150px;background:radial-gradient(circle,rgba(255,215,0,0.12),transparent 60%);border-radius:50%;animation:pulse-grow 3s ease-in-out infinite;"></div>
        <!-- Subtle water reflection -->
        <div style="position:absolute;bottom:5px;left:50%;transform:translateX(-50%);width:90px;height:15px;background:linear-gradient(180deg, rgba(255,215,0,0.2) 0%, transparent 100%);border-radius:50%;filter:blur(3px);"></div>
        <!-- Black feet -->
        <div style="position:absolute;top:135px;left:62px;z-index:10;">
          <div style="width:6px;height:10px;background:radial-gradient(ellipse at 40% 30%, #334155 0%, #1e293b 100%);border:1px solid #0f172a;border-radius:40%;"></div>
          <div style="position:absolute;top:8px;left:-3px;width:12px;height:6px;">
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:0;top:1px;transform:rotate(-20deg);"></div>
            <div style="position:absolute;width:3px;height:5px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:4px;top:1px;"></div>
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;right:0;top:1px;transform:rotate(20deg);"></div>
          </div>
        </div>
        <div style="position:absolute;top:135px;left:73px;z-index:10;">
          <div style="width:6px;height:10px;background:radial-gradient(ellipse at 60% 30%, #334155 0%, #1e293b 100%);border:1px solid #0f172a;border-radius:40%;"></div>
          <div style="position:absolute;top:8px;left:-3px;width:12px;height:6px;">
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:0;top:1px;transform:rotate(-20deg);"></div>
            <div style="position:absolute;width:3px;height:5px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;left:4px;top:1px;"></div>
            <div style="position:absolute;width:5px;height:3px;background:#1e293b;border:1px solid #0f172a;border-radius:50%;right:0;top:1px;transform:rotate(20deg);"></div>
          </div>
        </div>
        <!-- Left wing (folded, gentle flap, golden shimmer) -->
        <div style="position:absolute;top:90px;left:32px;width:35px;height:45px;z-index:15;transform-origin:right center;animation:swan-wing-left 4s ease-in-out infinite;">
          <div style="width:32px;height:40px;background:linear-gradient(135deg, #ffffff 0%, #f8fafc 40%, #fffbeb 100%);border-radius:60% 30% 50% 40%;border:2px solid #cbd5e1;box-shadow:inset 3px 3px 8px rgba(255,255,255,0.8),0 0 8px rgba(255,215,0,0.2);"></div>
        </div>
        <!-- Right wing (folded, gentle flap, golden shimmer) -->
        <div style="position:absolute;top:91px;left:75px;width:35px;height:45px;z-index:15;transform-origin:left center;animation:swan-wing-right 4s ease-in-out infinite;">
          <div style="width:32px;height:40px;background:linear-gradient(225deg, #ffffff 0%, #f8fafc 40%, #fffbeb 100%);border-radius:30% 60% 40% 50%;border:2px solid #cbd5e1;box-shadow:inset -3px 3px 8px rgba(255,255,255,0.8),0 0 8px rgba(255,215,0,0.2);"></div>
        </div>
        <!-- Body (front view, plump oval) -->
        <div style="position:absolute;width:60px;height:55px;background:radial-gradient(ellipse at 45% 35%, #ffffff 0%, #fafafa 30%, #f1f5f9 60%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:50%;top:90px;left:50%;transform:translateX(-50%);z-index:20;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.9),0 3px 8px rgba(148,163,184,0.15);">
          <div style="position:absolute;width:18px;height:14px;background:rgba(255,255,255,0.7);border-radius:50%;top:8px;left:10px;filter:blur(3px);"></div>
        </div>
        <!-- Neck (SVG curved like flamingo, but shorter, centered) -->
        <div style="position:absolute;top:25px;left:50%;transform:translateX(-50%);z-index:25;">
          <svg width="50" height="80" viewBox="0 0 50 80" fill="none">
            <path d="M25 78 Q35 60 28 42 Q21 25 25 8" stroke="#cbd5e1" stroke-width="16" stroke-linecap="round" fill="none" opacity="0.4"/>
            <path d="M25 78 Q35 60 28 42 Q21 25 25 8" stroke="url(#swanNeck9)" stroke-width="14" stroke-linecap="round" fill="none"/>
            <path d="M24 72 Q32 56 27 42 Q22 28 24 14" stroke="rgba(255,255,255,0.5)" stroke-width="4" stroke-linecap="round" fill="none"/>
            <defs>
              <linearGradient id="swanNeck9" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style="stop-color:#f1f5f9"/>
                <stop offset="50%" style="stop-color:#ffffff"/>
                <stop offset="100%" style="stop-color:#fafafa"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <!-- Head (front view) -->
        <div style="position:absolute;width:32px;height:30px;top:24px;left:53px;z-index:40;background:radial-gradient(ellipse at 40% 35%, #ffffff 0%, #fafafa 40%, #f1f5f9 80%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:50%;overflow:visible;">
          <!-- Left eye -->
          <div style="position:absolute;top:8px;left:5px;width:7px;height:8px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;z-index:3;animation:toucan-blink 5s ease-in-out infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Right eye -->
          <div style="position:absolute;top:8px;right:5px;width:7px;height:8px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;z-index:3;animation:toucan-blink 5s ease-in-out infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Black forehead marking -->
          <div style="position:absolute;top:-1px;left:50%;transform:translateX(-50%);width:14px;height:10px;background:radial-gradient(ellipse at 50% 70%, #1e293b 0%, #0f172a 80%, #000 100%);border-radius:50% 50% 40% 40%;z-index:4;"></div>
          <!-- Orange triangular beak (pointing down) -->
          <div style="position:absolute;top:16px;left:50%;transform:translateX(-50%);z-index:45;">
            <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:12px solid #f97316;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.15));"></div>
          </div>
          <!-- Golden Crown -->
          <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:28px;height:12px;background:linear-gradient(to top,#fbbf24,#fcd34d);border-radius:4px 4px 0 0;border:2px solid #d97706;border-bottom:none;box-shadow:0 0 10px rgba(255,215,0,0.5);z-index:50;">
            <!-- Crown points -->
            <div style="position:absolute;top:-8px;left:2px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid #fbbf24;"></div>
            <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:10px solid #fcd34d;"></div>
            <div style="position:absolute;top:-8px;right:2px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid #fbbf24;"></div>
            <!-- Ruby jewel -->
            <div style="position:absolute;top:2px;left:50%;transform:translateX(-50%);width:6px;height:6px;background:radial-gradient(circle at 35% 35%,#f87171,#dc2626,#991b1b);border-radius:50%;box-shadow:0 0 6px rgba(220,20,60,0.7);"></div>
          </div>
        </div>
        <!-- Royal sparkles -->
        <div style="position:absolute;left:30px;top:40px;width:4px;height:4px;background:rgba(255,215,0,0.9);border-radius:50%;box-shadow:0 0 8px rgba(255,215,0,0.8);animation:twinkle 2.5s ease-in-out infinite;"></div>
        <div style="position:absolute;right:35px;top:60px;width:3px;height:3px;background:rgba(255,215,0,0.85);border-radius:50%;box-shadow:0 0 6px rgba(255,215,0,0.7);animation:twinkle 3s ease-in-out infinite 0.8s;"></div>
      </div>
    `,
    5:` <!-- Penguin Buddy -->
      <div style="position:relative;width:115px;height:125px;display:inline-block;animation:penguin-waddle 6s ease-in-out infinite;">
        <!-- Tail -->
        <div style="position:absolute;top:100px;left:50%;transform:translateX(-50%);z-index:5;animation:penguin-tail 6s ease-in-out infinite;">
          <div style="width:14px;height:12px;background:radial-gradient(ellipse at 50% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:40% 40% 60% 60%;"></div>
        </div>
        <!-- Left foot -->
        <div style="position:absolute;top:105px;left:38px;z-index:10;transform-origin:top center;animation:penguin-foot-l 6s ease-in-out infinite;">
          <div style="width:18px;height:9px;background:radial-gradient(ellipse at 50% 35%, #fdba74, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 45% 45%;"></div>
        </div>
        <!-- Right foot -->
        <div style="position:absolute;top:105px;right:38px;z-index:10;transform-origin:top center;animation:penguin-foot-r 6s ease-in-out infinite;">
          <div style="width:18px;height:9px;background:radial-gradient(ellipse at 50% 35%, #fdba74, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 45% 45%;"></div>
        </div>
        <!-- Left flipper -->
        <div style="position:absolute;top:46px;left:29px;z-index:15;transform-origin:center top;transform:rotate(-32deg);animation:penguin-flip-l 6s ease-in-out infinite;">
          <div style="width:16px;height:34px;background:radial-gradient(ellipse at 60% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:25% 25% 65% 65%;"></div>
        </div>
        <!-- Right flipper -->
        <div style="position:absolute;top:45px;left:71px;z-index:15;transform-origin:center top;transform:rotate(34deg);animation:penguin-flip-r 6s ease-in-out infinite;">
          <div style="width:16px;height:34px;background:radial-gradient(ellipse at 40% 30%, #475569, #1e293b);border:1px solid #0f172a;border-radius:25% 25% 65% 65%;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:65px;height:74px;background:radial-gradient(ellipse at 45% 35%, #475569, #1e293b);border:2px solid #0f172a;border-radius:50% 50% 45% 45% / 60% 60% 40% 40%;top:34px;left:50%;transform:translateX(-50%);z-index:20;overflow:hidden;">
          <!-- Belly -->
          <div style="position:absolute;width:46px;height:58px;background:radial-gradient(ellipse at 50% 40%, #ffffff, #e2e8f0);border-radius:50% 50% 45% 45%;bottom:-4px;left:50%;transform:translateX(-50%);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:46px;height:42px;background:radial-gradient(ellipse at 45% 35%, #475569, #1e293b);border:2px solid #0f172a;border-radius:50% 50% 45% 45%;top:8px;left:50%;transform:translateX(-50%);z-index:40;overflow:visible;">
          <!-- White face patches -->
          <div style="position:absolute;width:15px;height:18px;background:radial-gradient(ellipse, #ffffff, #e2e8f0);border-radius:50%;top:10px;left:4px;"></div>
          <div style="position:absolute;width:15px;height:18px;background:radial-gradient(ellipse, #ffffff, #e2e8f0);border-radius:50%;top:10px;right:4px;"></div>
          <!-- Eyes -->
          <div style="position:absolute;top:14px;left:9px;width:7px;height:7px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <div style="position:absolute;top:14px;right:9px;width:7px;height:7px;background:#000;border-radius:50%;animation:blink 4s infinite;">
            <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
          </div>
          <!-- Beak -->
          <div style="position:absolute;top:22px;left:50%;transform:translateX(-50%);width:10px;height:8px;background:radial-gradient(ellipse at 50% 30%, #fcd34d, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 50% 50% / 40% 40% 60% 60%;z-index:41;"></div>
          <!-- Blush -->
          <div style="position:absolute;top:24px;left:4px;width:6px;height:3px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.5;"></div>
          <div style="position:absolute;top:24px;right:4px;width:6px;height:3px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.5;"></div>
        </div>
      </div>
    `,
    6:` <!-- Quacky Duck -->
      <div style="position:relative;width:115px;height:145px;display:inline-block;animation:duck-waddle 5s ease-in-out infinite;">
        <!-- Tail -->
        <div style="position:absolute;top:72px;left:50%;transform:translateX(-50%);z-index:5;animation:duck-tail-wag 5s ease-in-out infinite;">
          <div style="width:12px;height:9px;background:radial-gradient(ellipse at 50% 60%, #fef3c7, #fde047, #eab308);border:1px solid #a16207;border-radius:30% 30% 60% 60%;"></div>
          <div style="position:absolute;width:5px;height:8px;background:radial-gradient(ellipse at 50% 70%, #fef9c3, #fde047);border:1px solid #a16207;border-radius:50% 50% 30% 30%;left:3px;top:-5px;transform:rotate(10deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:95px;left:38px;z-index:10;transform-origin:top center;animation:duck-leg-l 5s ease-in-out infinite;">
          <div style="width:9px;height:14px;background:radial-gradient(ellipse at 40% 40%, #fdba74, #fb923c, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:-4px;width:20px;height:10px;">
            <div style="position:absolute;width:16px;height:8px;background:linear-gradient(180deg, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0.15) 100%);top:2px;left:2px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:0;top:1px;transform:rotate(-25deg);"></div>
            <div style="position:absolute;width:3px;height:8px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:8px;top:2px;"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;right:0;top:1px;transform:rotate(25deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:95px;right:38px;z-index:10;transform-origin:top center;animation:duck-leg-r 5s ease-in-out infinite;">
          <div style="width:9px;height:14px;background:radial-gradient(ellipse at 60% 40%, #fdba74, #fb923c, #ea580c);border:1px solid #c2410c;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:-4px;width:20px;height:10px;">
            <div style="position:absolute;width:16px;height:8px;background:linear-gradient(180deg, rgba(251,146,60,0.5) 0%, rgba(251,146,60,0.15) 100%);top:2px;left:2px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:0;top:1px;transform:rotate(-25deg);"></div>
            <div style="position:absolute;width:3px;height:8px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;left:8px;top:2px;"></div>
            <div style="position:absolute;width:9px;height:3px;background:radial-gradient(ellipse, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:50%;right:0;top:1px;transform:rotate(25deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:58px;left:22px;z-index:18;transform-origin:right center;animation:duck-wing-l 0.4s ease-in-out infinite;">
          <div style="width:20px;height:26px;background:radial-gradient(ellipse at 60% 35%, #fef9c3, #fde047, #eab308);border:2px solid #a16207;border-radius:55% 45% 65% 35%;">
            <div style="position:absolute;width:12px;height:1px;background:rgba(161,98,7,0.3);top:7px;left:3px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(161,98,7,0.3);top:12px;left:4px;"></div>
            <div style="position:absolute;width:8px;height:1px;background:rgba(161,98,7,0.3);top:17px;left:5px;"></div>
          </div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:58px;right:22px;z-index:18;transform-origin:left center;animation:duck-wing-r 0.4s ease-in-out infinite;">
          <div style="width:20px;height:26px;background:radial-gradient(ellipse at 40% 35%, #fef9c3, #fde047, #eab308);border:2px solid #a16207;border-radius:45% 55% 35% 65%;">
            <div style="position:absolute;width:12px;height:1px;background:rgba(161,98,7,0.3);top:7px;right:3px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(161,98,7,0.3);top:12px;right:4px;"></div>
            <div style="position:absolute;width:8px;height:1px;background:rgba(161,98,7,0.3);top:17px;right:5px;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:54px;height:44px;background:radial-gradient(ellipse at 45% 35%, #fef9c3, #fde047 35%, #eab308 70%, #ca8a04);border:2px solid #a16207;border-radius:50%;top:55px;left:50%;transform:translateX(-50%);z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(255,255,255,0.45);border-radius:50%;top:5px;left:8px;filter:blur(3px);"></div>
          <div style="position:absolute;width:30px;height:22px;background:radial-gradient(ellipse at 50% 40%, #fffbeb, #fef3c7);border-radius:50%;bottom:5px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:50px;height:44px;background:radial-gradient(ellipse at 45% 35%, #fef9c3, #fde047 40%, #eab308 80%, #ca8a04);border:2px solid #a16207;border-radius:50%;top:23px;left:32px;z-index:40;animation:duck-head-bob 3s ease-in-out infinite;">
          <div style="position:absolute;width:14px;height:16px;background:rgba(255,255,255,0.45);border-radius:50%;top:4px;left:7px;filter:blur(3px);"></div>
          <!-- Happy eyes -->
          <div style="position:absolute;top:12px;left:9px;width:10px;height:9px;background:radial-gradient(circle at 40% 35%, #1c1917, #000);border-radius:50% 50% 50% 50% / 70% 70% 30% 30%;">
            <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:1px;left:2px;"></div>
          </div>
          <div style="position:absolute;top:12px;right:9px;width:10px;height:9px;background:radial-gradient(circle at 40% 35%, #1c1917, #000);border-radius:50% 50% 50% 50% / 70% 70% 30% 30%;">
            <div style="position:absolute;width:4px;height:4px;background:white;border-radius:50%;top:1px;left:2px;"></div>
          </div>
          <!-- Quacking bill -->
          <div style="position:absolute;top:24px;left:50%;transform:translateX(-50%);z-index:41;">
            <div style="width:22px;height:9px;background:radial-gradient(ellipse at 50% 30%, #fdba74, #fb923c 50%, #ea580c);border:2px solid #c2410c;border-radius:45% 45% 50% 50% / 50% 50% 50% 50%;position:relative;z-index:2;">
              <div style="position:absolute;width:2px;height:2px;background:rgba(194,65,12,0.5);border-radius:50%;top:3px;left:6px;"></div>
              <div style="position:absolute;width:2px;height:2px;background:rgba(194,65,12,0.5);border-radius:50%;top:3px;right:6px;"></div>
            </div>
            <div style="position:absolute;width:18px;height:5px;background:radial-gradient(ellipse at 50% 60%, #fdba74, #fb923c);border:1px solid #c2410c;border-radius:30% 30% 50% 50%;top:7px;left:50%;transform:translateX(-50%);z-index:1;animation:duck-quack 2s ease-in-out infinite;"></div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:23px;left:3px;width:7px;height:4px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
          <div style="position:absolute;top:23px;right:3px;width:7px;height:4px;background:radial-gradient(ellipse, #fda4af, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    7:` <!-- Rooster Buddy -->
      <div style="position:relative;width:115px;height:145px;animation:rooster-strut 1.8s ease-in-out infinite;">
        <!-- Tail feathers - centered behind body -->
        <div style="position:absolute;top:42px;left:41px;z-index:5;animation:rooster-tail-sway 2.5s ease-in-out infinite;transform-origin:bottom center;">
          <!-- Outer green (left) -->
          <div style="position:absolute;width:8px;height:42px;background:linear-gradient(180deg, #064e3b 0%, #047857 25%, #10b981 45%, #34d399 55%, #10b981 75%, #047857 90%, #064e3b 100%);border:1px solid #022c22;border-radius:50% 50% 15% 15%;left:-15px;top:4px;transform:rotate(-30deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.3);"></div>
          <!-- Inner purple (left) -->
          <div style="position:absolute;width:8px;height:46px;background:linear-gradient(180deg, #1e1b4b 0%, #3730a3 20%, #6366f1 40%, #818cf8 50%, #6366f1 60%, #3730a3 80%, #1e1b4b 100%);border:1px solid #0f0a3c;border-radius:50% 50% 15% 15%;left:-8px;top:-2px;transform:rotate(-15deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.25);"></div>
          <!-- Center dark (tallest) -->
          <div style="position:absolute;width:9px;height:52px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 20%, #334155 40%, #475569 50%, #334155 60%, #1e293b 80%, #0f172a 100%);border:1px solid #020617;border-radius:50% 50% 15% 15%;left:-4px;top:-8px;transform-origin:bottom center;box-shadow:inset 1px 1px 5px rgba(255,255,255,0.2);"></div>
          <!-- Inner purple (right) -->
          <div style="position:absolute;width:8px;height:46px;background:linear-gradient(180deg, #1e1b4b 0%, #3730a3 20%, #6366f1 40%, #818cf8 50%, #6366f1 60%, #3730a3 80%, #1e1b4b 100%);border:1px solid #0f0a3c;border-radius:50% 50% 15% 15%;left:0px;top:-2px;transform:rotate(15deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.25);"></div>
          <!-- Outer green (right) -->
          <div style="position:absolute;width:8px;height:42px;background:linear-gradient(180deg, #064e3b 0%, #047857 25%, #10b981 45%, #34d399 55%, #10b981 75%, #047857 90%, #064e3b 100%);border:1px solid #022c22;border-radius:50% 50% 15% 15%;left:8px;top:4px;transform:rotate(30deg);transform-origin:bottom center;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.3);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:100px;left:41px;z-index:10;transform-origin:top center;animation:rooster-leg-l 1.8s ease-in-out infinite;">
          <div style="width:9px;height:15px;background:radial-gradient(ellipse at 35% 30%, #fef3c7 0%, #fde68a 30%, #eab308 60%, #ca8a04 100%);border:1px solid #92400e;border-radius:50% 50% 40% 40%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;top:13px;left:3px;width:4px;height:15px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:30%;"></div>
          <div style="position:absolute;top:26px;left:-2px;width:14px;height:8px;">
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:0;top:3px;transform:rotate(-35deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:6px;top:1px;"></div>
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;right:0;top:3px;transform:rotate(35deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:100px;right:41px;z-index:10;transform-origin:top center;animation:rooster-leg-r 1.8s ease-in-out infinite;">
          <div style="width:9px;height:15px;background:radial-gradient(ellipse at 65% 30%, #fef3c7 0%, #fde68a 30%, #eab308 60%, #ca8a04 100%);border:1px solid #92400e;border-radius:50% 50% 40% 40%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.5);"></div>
          <div style="position:absolute;top:13px;left:3px;width:4px;height:15px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:30%;"></div>
          <div style="position:absolute;top:26px;left:-2px;width:14px;height:8px;">
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:0;top:3px;transform:rotate(-35deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;left:6px;top:1px;"></div>
            <div style="position:absolute;width:8px;height:3px;background:radial-gradient(ellipse, #fde68a, #ca8a04);border:1px solid #92400e;border-radius:50%;right:0;top:3px;transform:rotate(35deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:68px;left:19px;z-index:18;transform-origin:right center;animation:rooster-wing 1.8s ease-in-out infinite;">
          <div style="width:23px;height:29px;background:radial-gradient(ellipse at 55% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 50%, #d97706 75%, #b45309 100%);border:1px solid #92400e;border-radius:55% 45% 65% 35%;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.55),inset -1px -1px 4px rgba(146,64,14,0.35);">
            <div style="position:absolute;width:14px;height:1px;background:rgba(146,64,14,0.4);top:9px;left:3px;"></div>
            <div style="position:absolute;width:12px;height:1px;background:rgba(146,64,14,0.35);top:13px;left:4px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(146,64,14,0.3);top:17px;left:5px;"></div>
          </div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:68px;right:19px;z-index:18;transform-origin:left center;animation:rooster-wing 1.8s ease-in-out infinite reverse;">
          <div style="width:23px;height:29px;background:radial-gradient(ellipse at 45% 30%, #fef3c7 0%, #fcd34d 25%, #f59e0b 50%, #d97706 75%, #b45309 100%);border:1px solid #92400e;border-radius:45% 55% 35% 65%;box-shadow:inset 2px 2px 6px rgba(255,255,255,0.55),inset -1px -1px 4px rgba(146,64,14,0.35);">
            <div style="position:absolute;width:14px;height:1px;background:rgba(146,64,14,0.4);top:9px;right:3px;"></div>
            <div style="position:absolute;width:12px;height:1px;background:rgba(146,64,14,0.35);top:13px;right:4px;"></div>
            <div style="position:absolute;width:10px;height:1px;background:rgba(146,64,14,0.3);top:17px;right:5px;"></div>
          </div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:54px;height:44px;background:radial-gradient(ellipse at 40% 28%, #fef3c7 0%, #fcd34d 20%, #f59e0b 40%, #d97706 65%, #b45309 85%, #92400e 100%);border:2px solid #78350f;border-radius:55% 55% 45% 45%;top:65px;left:30px;z-index:20;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.4);">
          <div style="position:absolute;width:17px;height:13px;background:rgba(255,255,255,0.55);border-radius:50%;top:4px;left:7px;filter:blur(3px);"></div>
          <div style="position:absolute;width:30px;height:21px;background:radial-gradient(ellipse at 50% 35%, #fffbeb 0%, #fef3c7 40%, #fcd34d 80%, transparent 100%);border-radius:50%;bottom:6px;left:50%;transform:translateX(-50%);opacity:0.7;"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:44px;height:40px;background:radial-gradient(ellipse at 40% 28%, #fef3c7 0%, #fcd34d 25%, #f59e0b 45%, #d97706 70%, #b45309 100%);border:2px solid #78350f;border-radius:50%;top:32px;left:35px;z-index:40;box-shadow:inset 3px 3px 9px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.35);overflow:visible;animation:rooster-crow 5s ease-in-out infinite;">
          <div style="position:absolute;width:13px;height:14px;background:rgba(255,255,255,0.5);border-radius:50%;top:3px;left:6px;filter:blur(2px);"></div>
          <!-- Comb -->
          <div style="position:absolute;top:-16px;left:50%;transform:translateX(-50%);z-index:45;">
            <div style="position:relative;width:30px;height:20px;">
              <div style="position:absolute;width:10px;height:15px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;left:0;top:5px;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.4);"></div>
              <div style="position:absolute;width:12px;height:20px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;left:8px;top:0;box-shadow:inset 2px 2px 5px rgba(255,255,255,0.45);"></div>
              <div style="position:absolute;width:10px;height:15px;background:radial-gradient(ellipse at 55% 25%, #fecaca 0%, #fca5a5 20%, #ef4444 45%, #dc2626 70%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:50% 50% 35% 35%;right:0;top:5px;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.4);"></div>
            </div>
          </div>
          <!-- Eyes with moving pupils -->
          <div style="position:absolute;top:11px;left:7px;width:10px;height:10px;background:radial-gradient(circle at 35% 30%, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);border:1px solid #78350f;border-radius:50%;overflow:hidden;animation:rooster-blink 4s ease-in-out infinite;">
            <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #44403c 0%, #1c1917 50%, #000 100%);border-radius:50%;top:3px;left:3px;animation:rooster-eye-look 6s ease-in-out infinite;">
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
            </div>
          </div>
          <div style="position:absolute;top:11px;right:7px;width:10px;height:10px;background:radial-gradient(circle at 65% 30%, #fffbeb 0%, #fef3c7 50%, #fde68a 100%);border:1px solid #78350f;border-radius:50%;overflow:hidden;animation:rooster-blink 4s ease-in-out infinite;">
            <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #44403c 0%, #1c1917 50%, #000 100%);border-radius:50%;top:3px;left:3px;animation:rooster-eye-look 6s ease-in-out infinite;">
              <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
            </div>
          </div>
          <!-- Beak with crowing animation -->
          <div style="position:absolute;top:20px;left:50%;transform:translateX(-50%);z-index:41;">
            <div style="width:15px;height:8px;background:radial-gradient(ellipse at 50% 25%, #fffbeb 0%, #fef3c7 30%, #fde68a 60%, #eab308 100%);border:1px solid #a16207;border-radius:25% 25% 55% 55%;position:relative;z-index:2;box-shadow:inset 1px 1px 3px rgba(255,255,255,0.5);"></div>
            <div style="position:absolute;width:12px;height:5px;background:radial-gradient(ellipse at 50% 60%, #fef3c7 0%, #fde68a 50%, #eab308 100%);border:1px solid #a16207;border-radius:25% 25% 55% 55%;top:6px;left:50%;transform:translateX(-50%);z-index:1;animation:rooster-beak-crow 5s ease-in-out infinite;"></div>
          </div>
          <!-- Wattle -->
          <div style="position:absolute;top:31px;left:50%;transform:translateX(-50%);z-index:39;animation:rooster-wattle 1.8s ease-in-out infinite;">
            <div style="width:12px;height:15px;background:radial-gradient(ellipse at 45% 25%, #fecaca 0%, #fca5a5 25%, #ef4444 50%, #dc2626 75%, #b91c1c 100%);border:1px solid #7f1d1d;border-radius:40% 40% 55% 55%;box-shadow:inset 1px 1px 4px rgba(255,255,255,0.35);">
              <div style="position:absolute;width:4px;height:6px;background:rgba(255,255,255,0.4);border-radius:50%;top:2px;left:2px;filter:blur(1px);"></div>
            </div>
          </div>
          <!-- Blush -->
          <div style="position:absolute;top:19px;left:3px;width:6px;height:4px;background:radial-gradient(ellipse, #fca5a5, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
          <div style="position:absolute;top:19px;right:3px;width:6px;height:4px;background:radial-gradient(ellipse, #fca5a5, transparent);border-radius:50%;opacity:0.5;filter:blur(1px);"></div>
        </div>
      </div>
    `,
    8:` <!-- Toucan Buddy -->
      <div style="position:relative;width:150px;height:220px;display:inline-block;animation:toucan-bob 2.5s ease-in-out infinite;">
        <!-- Floating tropical particles -->
        <div style="position:absolute;width:6px;height:4px;background:radial-gradient(ellipse, #22c55e, #15803d);border-radius:50%;top:25px;left:18px;opacity:0.6;animation:tropical-float 4s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:3px;background:radial-gradient(ellipse, #f97316, #ea580c);border-radius:50%;top:40px;right:22px;opacity:0.5;animation:tropical-float 5s ease-in-out infinite 1s;"></div>
        <!-- Tail feathers -->
        <div style="position:absolute;top:145px;left:62px;width:20px;height:48px;z-index:5;animation:tail-sway 2s ease-in-out infinite;transform-origin:center top;">
          <div style="position:absolute;width:8px;height:43px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 50%, #1e293b 70%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:-2px;top:0;transform:rotate(-3deg);"></div>
          <div style="position:absolute;width:9px;height:48px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 25%, #475569 50%, #1e293b 75%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:4px;top:-3px;"></div>
          <div style="position:absolute;width:8px;height:43px;background:linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #334155 50%, #1e293b 70%, #0f172a 100%);border:2px solid #020617;border-radius:40% 40% 25% 25%;left:10px;top:0;transform:rotate(3deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:144px;left:60px;z-index:10;animation:toucan-hop 4s ease-in-out infinite;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 35% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 40% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:144px;left:74px;z-index:10;animation:toucan-hop 4s ease-in-out infinite 0.2s;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 65% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 60% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Left wing -->
        <div style="position:absolute;top:110px;left:28px;width:40px;z-index:15;transform-origin:right center;animation:toucan-wing-flap 2s ease-in-out infinite reverse;">
          <div style="position:absolute;width:38px;height:25px;background:linear-gradient(225deg, #f97316 0%, #fbbf24 50%, #fcd34d 100%);border-radius:60% 5px 5px 60%;top:3px;right:0;z-index:1;border:1px solid #ea580c;"></div>
          <div style="position:absolute;width:40px;height:23px;background:linear-gradient(180deg, #374151 0%, #1f2937 40%, #111827 100%);border-radius:70% 8px 8px 70%;top:0;right:0;z-index:2;border:2px solid #030712;"></div>
        </div>
        <!-- Right wing -->
        <div style="position:absolute;top:110px;right:28px;width:40px;z-index:15;transform-origin:left center;animation:toucan-wing-flap 2s ease-in-out infinite;">
          <div style="position:absolute;width:38px;height:25px;background:linear-gradient(135deg, #f97316 0%, #fbbf24 50%, #fcd34d 100%);border-radius:5px 60% 60% 5px;top:3px;left:0;z-index:1;border:1px solid #ea580c;"></div>
          <div style="position:absolute;width:40px;height:23px;background:linear-gradient(180deg, #374151 0%, #1f2937 40%, #111827 100%);border-radius:8px 70% 70% 8px;top:0;left:0;z-index:2;border:2px solid #030712;"></div>
        </div>
        <!-- Body -->
        <div style="position:absolute;width:55px;height:50px;background:radial-gradient(ellipse at 40% 28%, #475569 0%, #334155 20%, #1e293b 45%, #0f172a 100%);border:2px solid #020617;border-radius:55% 55% 50% 50%;top:105px;left:48px;z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(100,150,255,0.12);border-radius:50%;top:5px;left:7px;filter:blur(3px);"></div>
        </div>
        <!-- Head -->
        <div style="position:absolute;width:43px;height:40px;top:58px;left:54px;z-index:40;background:radial-gradient(ellipse at 40% 28%, #475569 0%, #334155 25%, #1e293b 50%, #0f172a 100%);border:2px solid #020617;border-radius:50%;overflow:visible;animation:toucan-head-turn 6s ease-in-out infinite;">
          <!-- White face patch -->
          <div style="position:absolute;width:33px;height:30px;background:radial-gradient(ellipse at 50% 35%, #ffffff 0%, #fefefe 40%, #f8fafc 70%, #f1f5f9 100%);border:1px solid #e2e8f0;border-radius:50%;top:9px;left:50%;transform:translateX(-50%);z-index:1;"></div>
          <!-- Orange circles around eyes -->
          <div style="position:absolute;top:7px;left:1px;width:19px;height:19px;background:radial-gradient(circle at 45% 45%, #ffedd5 0%, #fdba74 25%, #fb923c 50%, #f97316 80%, #ea580c 100%);border:1px solid #c2410c;border-radius:50%;z-index:2;"></div>
          <div style="position:absolute;top:7px;right:1px;width:19px;height:19px;background:radial-gradient(circle at 55% 45%, #ffedd5 0%, #fdba74 25%, #fb923c 50%, #f97316 80%, #ea580c 100%);border:1px solid #c2410c;border-radius:50%;z-index:2;"></div>
          <!-- Eyes with blue rings -->
          <div style="position:absolute;top:10px;left:4px;width:13px;height:13px;background:radial-gradient(circle at 50% 50%, #0ea5e9 0%, #0284c7 40%, #0369a1 70%, #075985 100%);border:2px solid #0c4a6e;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 35% 30%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <div style="position:absolute;top:10px;right:4px;width:13px;height:13px;background:radial-gradient(circle at 50% 50%, #0ea5e9 0%, #0284c7 40%, #0369a1 70%, #075985 100%);border:2px solid #0c4a6e;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 65% 30%, #ffffff 0%, #f1f5f9 60%, #e2e8f0 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Massive beak -->
          <div style="position:absolute;top:0px;left:17px;z-index:45;transform-origin:left center;width:88px;height:30px;">
            <!-- Upper beak -->
            <div style="width:86px;height:30px;background:linear-gradient(95deg, #f59e0b 0%, #f97316 15%, #ef4444 30%, #dc2626 45%, #22c55e 62%, #14b8a6 80%, #0f172a 100%);border:2px solid #78350f;border-radius:25px 50% 5px 40% / 80% 90% 15% 55%;position:relative;z-index:2;transform:rotate(5deg);transform-origin:left center;">
              <div style="position:absolute;width:58px;height:5px;background:linear-gradient(90deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.15) 100%);border-radius:50%;top:3px;left:8px;filter:blur(2px);"></div>
              <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 20%, transparent 50%, rgba(255,255,255,0.15) 70%, transparent 100%);border-radius:25px 15px 85% 40% / 90% 30% 95% 60%;animation:beak-shimmer 3s ease-in-out infinite;"></div>
              <div style="position:absolute;width:4px;height:3px;background:radial-gradient(ellipse, #78350f, #451a03);border-radius:50%;top:8px;left:5px;"></div>
            </div>
            <!-- Lower beak -->
            <div style="position:absolute;width:63px;height:17px;background:linear-gradient(95deg, #fde68a 0%, #f59e0b 18%, #ea580c 35%, #dc2626 55%, #0f172a 100%);border:2px solid #78350f;border-radius:20px 85% 15px 35% / 60% 95% 30% 90%;top:26px;left:3px;z-index:1;transform-origin:left center;animation:toucan-beak-clack 5s ease-in-out infinite;">
              <div style="position:absolute;width:53px;height:4px;background:rgba(255,255,255,0.35);border-radius:50%;top:5px;left:8px;filter:blur(1px);"></div>
            </div>
          </div>
        </div>
        <!-- White throat bib -->
        <div style="position:absolute;width:35px;height:43px;background:radial-gradient(ellipse at 50% 25%, #ffffff 0%, #fefefe 35%, #f8fafc 60%, #f1f5f9 85%, #e2e8f0 100%);border:2px solid #cbd5e1;border-radius:45% 45% 50% 50%;top:88px;left:58px;z-index:35;">
          <div style="position:absolute;width:14px;height:15px;background:rgba(255,255,255,0.7);border-radius:50%;top:6px;left:8px;filter:blur(3px);"></div>
        </div>
      </div>
    `,
    9:` <!-- Golden Flamingo - Legendary golden variant with sparkles and glow -->
      <div style="position:relative;width:240px;height:280px;display:flex;align-items:center;justify-content:center;">
        <div style="transform:scale(0.55);transform-origin:center;filter:drop-shadow(0 0 15px rgba(255,215,0,0.6)) drop-shadow(0 0 30px rgba(255,200,100,0.4));">
          <div style="position:relative;width:300px;height:440px;animation:flamingo-sway 3s ease-in-out infinite;">
            <!-- Golden sparkles around the flamingo -->
            <div style="position:absolute;width:10px;height:10px;background:rgba(255,215,0,0.95);border-radius:50%;top:20px;left:100px;box-shadow:0 0 12px rgba(255,215,0,0.8);animation:twinkle 2s ease-in-out infinite;"></div>
            <div style="position:absolute;width:8px;height:8px;background:rgba(255,200,100,0.9);border-radius:50%;top:100px;left:70px;box-shadow:0 0 10px rgba(255,200,100,0.7);animation:twinkle 2.5s ease-in-out infinite 0.5s;"></div>
            <div style="position:absolute;width:7px;height:7px;background:rgba(255,220,150,0.9);border-radius:50%;top:180px;right:90px;box-shadow:0 0 8px rgba(255,220,150,0.7);animation:twinkle 2.2s ease-in-out infinite 1s;"></div>
            <div style="position:absolute;width:9px;height:9px;background:rgba(255,215,0,0.95);border-radius:50%;top:60px;right:100px;box-shadow:0 0 10px rgba(255,215,0,0.8);animation:twinkle 1.8s ease-in-out infinite 0.3s;"></div>
            <!-- Left foot (golden) -->
            <div style="position:absolute;bottom:5px;left:101px;z-index:9;">
              <div style="position:relative;width:70px;height:40px;">
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                <div style="position:absolute;width:58px;height:28px;background:linear-gradient(180deg, rgba(251,191,36,0.45) 0%, rgba(251,191,36,0.1) 100%);top:8px;left:6px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:-1px;top:3px;transform:rotate(-25deg);transform-origin:right center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;left:2px;top:50%;transform:translateY(-50%);"></div></div>
                <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"><div style="position:absolute;width:6px;height:6px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;left:50%;transform:translateX(-50%);bottom:2px;"></div></div>
                <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:39px;top:6px;transform:rotate(19deg);transform-origin:left center;z-index:2;"><div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle, #92400e, #b45309);border-radius:50%;right:2px;top:50%;transform:translateY(-50%);"></div></div>
              </div>
            </div>
            <!-- Right leg with tuck animation (golden) -->
            <div style="position:absolute;bottom:42px;left:180px;z-index:8;">
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:5px;bottom:110px;left:5px;transform-origin:top center;animation:flamingo-upper-leg-tuck 8s ease-in-out infinite;">
                <div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:3px;"></div>
                <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;bottom:-10px;left:-2px;"></div>
                <div style="position:absolute;width:8px;height:100px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:4px;bottom:-108px;left:1px;transform-origin:top center;animation:flamingo-lower-leg-fold 8s ease-in-out infinite;">
                  <div style="position:absolute;width:2px;height:80px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:2px;"></div>
                  <div style="position:absolute;bottom:-39px;left:-31px;transform-origin:top center;animation:flamingo-foot-tuck 8s ease-in-out infinite;">
                    <div style="position:relative;width:70px;height:40px;">
                      <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:0;z-index:4;"></div>
                      <div style="position:absolute;width:58px;height:28px;background:linear-gradient(rgba(251,191,36,0.45) 0%, rgba(251,191,36,0.1) 100%);top:1px;left:5px;clip-path:polygon(50% 0%, 0% 100%, 100% 100%);z-index:1;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:0px;top:7px;transform:rotate(-21deg);transform-origin:right center;z-index:2;"></div>
                      <div style="position:absolute;width:10px;height:26px;background:radial-gradient(ellipse at 40% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:50%;transform:translateX(-50%);top:10px;z-index:3;"></div>
                      <div style="position:absolute;width:30px;height:9px;background:radial-gradient(ellipse at 50% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;left:40px;top:7px;transform:rotate(16deg);transform-origin:left center;z-index:2;"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Left leg (standing, golden) -->
            <div style="position:absolute;bottom:42px;left:130px;z-index:10;">
              <div style="position:absolute;width:8px;height:95px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:4px;bottom:0;left:2px;"><div style="position:absolute;width:2px;height:75px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:2px;"></div></div>
              <div style="position:absolute;width:14px;height:14px;background:radial-gradient(circle at 40% 40%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:50%;bottom:93px;left:-1px;"></div>
              <div style="position:absolute;width:10px;height:80px;background:radial-gradient(ellipse at 30% 50%, #fde68a, #fbbf24);border:2px solid #b45309;border-radius:5px;bottom:105px;left:1px;transform:rotate(-5deg);"><div style="position:absolute;width:2px;height:60px;background:rgba(255,255,255,0.4);border-radius:2px;top:10px;left:3px;"></div></div>
            </div>
            <!-- Tail feathers (golden gradient) -->
            <div style="position:absolute;top:200px;left:70px;z-index:15;transform-origin:right center;transform:rotate(-82deg);animation:tail-wag 2s ease-in-out infinite;">
              <div style="position:absolute;width:35px;height:18px;background:radial-gradient(ellipse at 50% 50%, #fef08a, #fbbf24);border:2px solid #92400e;border-radius:50% 20% 50% 50%;top:3px;left:-18px;transform:rotate(25deg);box-shadow:inset 2px 2px 5px rgba(255,255,255,0.5),0 0 10px rgba(255,215,0,0.4);"></div>
              <div style="position:absolute;width:30px;height:15px;background:radial-gradient(ellipse at 50% 50%, #fde68a, #f59e0b);border:2px solid #92400e;border-radius:50% 20% 50% 50%;left:-10px;top:22px;transform:rotate(5deg);animation:breathe-custom 3s ease-in-out infinite;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.5),0 0 8px rgba(255,215,0,0.3);"></div>
              <div style="position:absolute;width:25px;height:12px;background:radial-gradient(ellipse at 50% 50%, #fff7ed, #fde68a);border:2px solid #92400e;border-radius:50% 20% 50% 50%;left:-3px;top:34px;transform:rotate(-10deg);box-shadow:inset 2px 2px 3px rgba(255,255,255,0.5),0 0 6px rgba(255,215,0,0.3);"></div>
            </div>
            <!-- Left wing (golden, swing animation) -->
            <div style="position:absolute;top:186px;left:80px;z-index:18;transform-origin:right top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 60% 40%, #fef08a, #fde68a, #fbbf24);border:3px solid #92400e;border-radius:60% 40% 70% 30%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.2),0 0 15px rgba(255,215,0,0.4);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(146,64,14,0.4);top:15px;left:5px;transform:rotate(-10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(146,64,14,0.4);top:25px;left:8px;transform:rotate(-8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(146,64,14,0.4);top:35px;left:10px;transform:rotate(-5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Right wing (golden, swing animation) -->
            <div style="position:absolute;top:186px;left:192px;z-index:18;transform-origin:left top;animation:swing-custom 1s ease-in-out infinite;">
              <div style="width:45px;height:55px;background:radial-gradient(ellipse at 40% 40%, #fef08a, #fde68a, #fbbf24);border:3px solid #92400e;border-radius:40% 60% 30% 70%;box-shadow:inset 4px 4px 10px rgba(255,255,255,0.6),inset -2px -2px 6px rgba(146,64,14,0.2),0 0 15px rgba(255,215,0,0.4);">
                <div style="position:absolute;width:35px;height:2px;background:rgba(146,64,14,0.4);top:15px;right:5px;transform:rotate(10deg);border-radius:2px;"></div>
                <div style="position:absolute;width:30px;height:2px;background:rgba(146,64,14,0.4);top:25px;right:8px;transform:rotate(8deg);border-radius:2px;"></div>
                <div style="position:absolute;width:25px;height:2px;background:rgba(146,64,14,0.4);top:35px;right:10px;transform:rotate(5deg);border-radius:2px;"></div>
              </div>
            </div>
            <!-- Body (golden gradient with shimmer) -->
            <div style="position:absolute;width:120px;height:80px;background:radial-gradient(ellipse at 45% 35%, #fff7ed 0%, #fef08a 30%, #fde68a 60%, #fbbf24 100%);border:4px solid #92400e;border-radius:55% 55% 50% 50%;top:179px;left:97px;z-index:20;box-shadow:inset 8px 8px 20px rgba(255,255,255,0.7),inset -5px -5px 12px rgba(146,64,14,0.2),0 0 25px rgba(255,215,0,0.4);overflow:hidden;">
              <div style="position:absolute;width:40px;height:25px;background:rgba(255,255,255,0.6);border-radius:50%;top:10px;left:20px;filter:blur(5px);"></div>
              <div style="position:absolute;width:20px;height:15px;background:rgba(255,255,255,0.4);border-radius:50%;top:20px;right:25px;filter:blur(4px);"></div>
              <!-- Golden shimmer overlay -->
              <div style="position:absolute;top:0;left:-100%;width:300%;height:100%;background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,215,0,0.2) 40%, rgba(255,255,255,0.3) 60%, transparent 100%);animation:iridescent-shimmer 3s ease-in-out infinite;"></div>
            </div>
            <!-- Neck (golden gradient) -->
            <div style="position:absolute;top:42px;left:114px;z-index:25;transform-origin:bottom center;animation:neck-bob 4s ease-in-out infinite;">
              <svg width="80" height="160" viewBox="0 0 80 160" fill="none"><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="#92400e" stroke-width="22" stroke-linecap="round" fill="none" opacity="0.3"/><path d="M55 155 Q70 120 50 80 Q30 40 45 10" stroke="url(#goldenNeck)" stroke-width="18" stroke-linecap="round" fill="none"/><path d="M50 150 Q62 118 45 82 Q28 46 40 18" stroke="rgba(255,255,255,0.5)" stroke-width="6" stroke-linecap="round" fill="none"/><defs><linearGradient id="goldenNeck" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fbbf24"/><stop offset="50%" style="stop-color:#fde68a"/><stop offset="100%" style="stop-color:#fef08a"/></linearGradient></defs></svg>
            </div>
            <!-- Head (golden) -->
            <div style="position:absolute;width:65px;height:55px;background:radial-gradient(ellipse at 40% 35%, #fff7ed 0%, #fef08a 40%, #fde68a 80%, #fbbf24 100%);border:3px solid #92400e;border-radius:50% 50% 45% 45%;top:9px;left:136px;z-index:40;box-shadow:inset 5px 5px 12px rgba(255,255,255,0.7),inset -3px -3px 8px rgba(146,64,14,0.2),0 0 20px rgba(255,215,0,0.4);overflow:visible;">
              <div style="position:absolute;width:20px;height:14px;background:rgba(255,255,255,0.6);border-radius:50%;top:6px;left:10px;filter:blur(4px);"></div>
              <!-- Crown/Tuft (more elaborate for legendary) -->
              <div style="position:absolute;top:-22px;left:50%;transform:translateX(-50%);z-index:45;">
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fde68a, #fbbf24);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:-10px;--base-rotate:-15deg;transform:rotate(-15deg);transform-origin:bottom center;animation:tuft-sway 2s ease-in-out infinite;box-shadow:0 0 8px rgba(255,215,0,0.5);"></div>
                <div style="position:absolute;width:8px;height:28px;background:radial-gradient(ellipse at 50% 80%, #fef08a, #fde68a);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:-2px;--base-rotate:0deg;transform-origin:bottom center;animation:tuft-sway 2.2s ease-in-out infinite 0.1s;box-shadow:0 0 10px rgba(255,215,0,0.6);"></div>
                <div style="position:absolute;width:7px;height:24px;background:radial-gradient(ellipse at 50% 80%, #fde68a, #fbbf24);border:2px solid #92400e;border-radius:50% 50% 30% 30%;left:7px;--base-rotate:15deg;transform:rotate(15deg);transform-origin:bottom center;animation:tuft-sway 1.8s ease-in-out infinite 0.2s;box-shadow:0 0 8px rgba(255,215,0,0.5);"></div>
              </div>
              <!-- Eyes -->
              <div style="position:absolute;top:16px;left:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <div style="position:absolute;top:16px;right:12px;width:12px;height:14px;background:radial-gradient(circle at 35% 35%, #1c1917, #000);border-radius:50%;animation:flamingo-blink 4s infinite;"><div style="position:absolute;width:5px;height:5px;background:white;border-radius:50%;top:2px;left:2px;"></div><div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;bottom:4px;right:2px;opacity:0.6;"></div></div>
              <!-- Beak (golden/orange) -->
              <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:40px;height:20px;background:radial-gradient(ellipse at 50% 30%, #fde68a, #f59e0b);border:2px solid #b45309;border-radius:30% 30% 50% 50%;z-index:41;box-shadow:0 0 10px rgba(255,215,0,0.4);"><div style="position:absolute;width:12px;height:6px;background:rgba(255,255,255,0.5);border-radius:50%;top:3px;left:8px;filter:blur(1px);"></div></div>
              <div style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);width:30px;height:14px;background:radial-gradient(ellipse at 50% 20%, #44403c, #1c1917);border:2px solid #0c0a09;border-radius:20% 20% 50% 50%;z-index:42;"></div>
              <!-- Blush (warm golden) -->
              <div style="position:absolute;top:32px;width:100%;display:flex;justify-content:space-around;padding:0 8px;">
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
                <div style="width:14px;height:7px;background:radial-gradient(ellipse, #fed7aa, transparent);border-radius:50%;opacity:0.6;filter:blur(1px);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    10:` <!-- Great Horned Owl (Hooty) - Head scanning owl with ear tufts -->
      <div style="position:relative;width:120px;height:160px;display:inline-block;animation:owl-breathe 4s ease-in-out infinite;">
        <!-- Branch perch -->
        <div style="position:absolute;bottom:18px;left:-30px;width:180px;height:12px;background:linear-gradient(to bottom,#451a03,#271301);border-radius:8px;border:2px solid #000;z-index:5;"></div>

        <!-- Left wing -->
        <div style="position:absolute;top:30px;left:-20px;z-index:2;transform-origin:top right;animation:owl-wing-flap-l 1.2s ease-in-out infinite;">
          <div style="width:60px;height:80px;background:radial-gradient(ellipse at 80% 20%,#78350f,#451a03);border:2px solid #000;border-radius:100% 20% 40% 90%;box-shadow:inset 8px 0 15px rgba(0,0,0,0.5);"></div>
        </div>

        <!-- Right wing -->
        <div style="position:absolute;top:30px;right:-20px;z-index:2;transform-origin:top left;animation:owl-wing-flap-r 1.2s ease-in-out infinite;">
          <div style="width:60px;height:80px;background:radial-gradient(ellipse at 20% 20%,#78350f,#451a03);border:2px solid #000;border-radius:20% 100% 90% 40%;box-shadow:inset -8px 0 15px rgba(0,0,0,0.5);"></div>
        </div>

        <!-- Feet with toes -->
        <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);width:75px;display:flex;justify-content:space-around;z-index:15;">
          <div style="position:relative;width:26px;height:30px;">
            <div style="position:absolute;top:0;left:0;width:26px;height:22px;background:radial-gradient(ellipse,#fdba74,#ea580c);border-radius:40% 40% 20% 20%;border:1px solid #c2410c;"></div>
            <div style="position:absolute;top:10px;left:1px;width:7px;height:15px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;transform:rotate(-15deg);"></div>
            <div style="position:absolute;top:12px;left:10px;width:7px;height:16px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;"></div>
            <div style="position:absolute;top:10px;left:18px;width:7px;height:15px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;transform:rotate(15deg);"></div>
          </div>
          <div style="position:relative;width:26px;height:30px;">
            <div style="position:absolute;top:0;left:0;width:26px;height:22px;background:radial-gradient(ellipse,#fdba74,#ea580c);border-radius:40% 40% 20% 20%;border:1px solid #c2410c;"></div>
            <div style="position:absolute;top:10px;left:1px;width:7px;height:15px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;transform:rotate(-15deg);"></div>
            <div style="position:absolute;top:12px;left:10px;width:7px;height:16px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;"></div>
            <div style="position:absolute;top:10px;left:18px;width:7px;height:15px;background:#ea580c;border:1px solid #9a3412;border-radius:3px;transform:rotate(15deg);"></div>
          </div>
        </div>

        <!-- Body -->
        <div style="position:absolute;top:32px;left:50%;transform:translateX(-50%);width:90px;height:100px;background:radial-gradient(circle at 50% 30%,#78350f,#451a03);border:3px solid #271301;border-radius:50% 50% 45% 45%;z-index:20;overflow:hidden;box-shadow:inset 0 0 15px #000;">
          <!-- Feather striping pattern -->
          <div style="position:absolute;top:15px;left:12px;width:65px;height:75px;background:repeating-linear-gradient(180deg,rgba(254,243,199,0.1),rgba(254,243,199,0.1) 3px,transparent 3px,transparent 9px);border-radius:50%;"></div>
        </div>

        <!-- Head with scanning animation -->
        <div style="position:absolute;top:-20px;left:12px;width:95px;height:82px;z-index:40;transform-origin:center 70%;animation:owl-head-scan 8s ease-in-out infinite;">
          <!-- Left ear tuft -->
          <div style="position:absolute;top:-6px;left:14px;width:22px;height:28px;background:linear-gradient(45deg,#451a03,#271301);border:2px solid #000;clip-path:polygon(0% 0%,100% 50%,70% 100%,10% 100%);transform:rotate(-10deg);z-index:35;"></div>
          <!-- Right ear tuft -->
          <div style="position:absolute;top:-6px;right:14px;width:22px;height:28px;background:linear-gradient(-45deg,#451a03,#271301);border:2px solid #000;clip-path:polygon(100% 0%,0% 50%,30% 100%,90% 100%);transform:rotate(10deg);z-index:35;"></div>

          <!-- Head base -->
          <div style="position:absolute;width:100%;height:100%;background:radial-gradient(circle at 40% 35%,#78350f,#451a03);border:3px solid #271301;border-radius:50%;box-shadow:inset 6px 6px 15px rgba(255,255,255,0.15),0 4px 12px rgba(0,0,0,0.5);z-index:40;">
            <!-- Left eye socket -->
            <div style="position:absolute;top:14px;left:8px;width:38px;height:48px;background:radial-gradient(circle,#b45309,#78350f 90%);border-radius:50%;border:1px solid #451a03;box-shadow:inset 0 0 10px #000;"></div>
            <!-- Right eye socket -->
            <div style="position:absolute;top:14px;right:8px;width:38px;height:48px;background:radial-gradient(circle,#b45309,#78350f 90%);border-radius:50%;border:1px solid #451a03;box-shadow:inset 0 0 10px #000;"></div>
            <!-- Left eye -->
            <div style="position:absolute;top:24px;left:18px;width:20px;height:20px;background:radial-gradient(circle,#fbbf24,#d97706);border:2px solid #000;border-radius:50%;overflow:hidden;">
              <div style="position:absolute;top:4px;left:4px;width:12px;height:12px;background:#000;border-radius:50%;animation:owl-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;top:2px;left:2px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>
              </div>
            </div>
            <!-- Right eye -->
            <div style="position:absolute;top:24px;right:18px;width:20px;height:20px;background:radial-gradient(circle,#fbbf24,#d97706);border:2px solid #000;border-radius:50%;overflow:hidden;">
              <div style="position:absolute;top:4px;left:4px;width:12px;height:12px;background:#000;border-radius:50%;animation:owl-eye-look 6s ease-in-out infinite;">
                <div style="position:absolute;top:2px;left:2px;width:4px;height:4px;background:#fff;border-radius:50%;"></div>
              </div>
            </div>
            <!-- Beak -->
            <div style="position:absolute;top:44px;left:50%;transform:translateX(-50%);width:10px;height:18px;background:linear-gradient(to bottom,#334155,#020617);border:1px solid #000;border-radius:50% 50% 50% 50% / 20% 20% 80% 80%;"></div>
          </div>
        </div>
      </div>
    `,
    11:` <!-- Lovebird -->
      <div style="position:relative;width:150px;height:200px;display:inline-block;animation:toucan-bob 2.5s ease-in-out infinite;">
        <!-- Floating tropical particles -->
        <div style="position:absolute;width:6px;height:4px;background:radial-gradient(ellipse, #22c55e, #16a34a);border-radius:50%;top:25px;left:18px;opacity:0.6;animation:tropical-float 4s ease-in-out infinite;"></div>
        <div style="position:absolute;width:5px;height:3px;background:radial-gradient(ellipse, #f97316, #ea580c);border-radius:50%;top:40px;right:22px;opacity:0.5;animation:tropical-float 5s ease-in-out infinite 1s;"></div>
        <!-- Short tail feathers (lovebirds have short tails) -->
        <div style="position:absolute;top:140px;left:60px;width:25px;height:35px;z-index:5;animation:tail-sway 2s ease-in-out infinite;transform-origin:center top;">
          <div style="position:absolute;width:8px;height:32px;background:linear-gradient(180deg, #16a34a 0%, #22c55e 25%, #4ade80 50%, #22c55e 75%, #16a34a 100%);border:2px solid #15803d;border-radius:40% 40% 20% 20%;left:-2px;top:0;transform:rotate(-6deg);"></div>
          <div style="position:absolute;width:10px;height:35px;background:linear-gradient(180deg, #16a34a 0%, #22c55e 20%, #86efac 50%, #22c55e 80%, #16a34a 100%);border:2px solid #15803d;border-radius:40% 40% 20% 20%;left:5px;top:-3px;"></div>
          <div style="position:absolute;width:8px;height:32px;background:linear-gradient(180deg, #16a34a 0%, #22c55e 25%, #4ade80 50%, #22c55e 75%, #16a34a 100%);border:2px solid #15803d;border-radius:40% 40% 20% 20%;left:12px;top:0;transform:rotate(6deg);"></div>
        </div>
        <!-- Left leg -->
        <div style="position:absolute;top:144px;left:55px;z-index:10;animation:toucan-hop 4s ease-in-out infinite;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 35% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 40% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Right leg -->
        <div style="position:absolute;top:144px;left:75px;z-index:10;animation:toucan-hop 4s ease-in-out infinite 0.2s;">
          <div style="width:8px;height:14px;background:radial-gradient(ellipse at 65% 30%, #94a3b8 0%, #64748b 40%, #475569 100%);border:1px solid #334155;border-radius:50% 50% 40% 40%;"></div>
          <div style="position:absolute;top:12px;left:2px;width:4px;height:16px;background:radial-gradient(ellipse at 60% 30%, #94a3b8 0%, #64748b 50%, #475569 100%);border:1px solid #334155;border-radius:30%;"></div>
          <div style="position:absolute;top:27px;left:-3px;width:14px;height:9px;">
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:0;top:3px;transform:rotate(-30deg);"></div>
            <div style="position:absolute;width:3px;height:7px;background:radial-gradient(ellipse at 40% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;left:5px;top:2px;"></div>
            <div style="position:absolute;width:7px;height:3px;background:radial-gradient(ellipse at 50% 30%, #94a3b8, #475569);border:1px solid #334155;border-radius:50%;right:0;top:3px;transform:rotate(30deg);"></div>
          </div>
        </div>
        <!-- Left wing (green) -->
        <div style="position:absolute;top:95px;left:18px;width:50px;z-index:15;transform-origin:right center;animation:toucan-wing-flap 2s ease-in-out infinite reverse;">
          <div style="position:absolute;width:50px;height:32px;background:linear-gradient(180deg, #16a34a 0%, #22c55e 40%, #15803d 100%);border-radius:70% 8px 8px 70%;top:0;right:0;z-index:2;border:2px solid #166534;"></div>
        </div>
        <!-- Right wing (green) -->
        <div style="position:absolute;top:95px;right:25px;width:50px;z-index:15;transform-origin:left center;animation:toucan-wing-flap 2s ease-in-out infinite;">
          <div style="position:absolute;width:50px;height:32px;background:linear-gradient(180deg, #16a34a 0%, #22c55e 40%, #15803d 100%);border-radius:8px 70% 70% 8px;top:0;left:0;z-index:2;border:2px solid #166534;"></div>
        </div>
        <!-- Body (green bottom, yellow middle) -->
        <div style="position:absolute;width:55px;height:55px;background:radial-gradient(ellipse at 50% 70%, #16a34a 0%, #22c55e 40%, #4ade80 70%, #fde047 100%);border:2px solid #15803d;border-radius:55% 55% 50% 50%;top:100px;left:47px;z-index:20;">
          <div style="position:absolute;width:18px;height:14px;background:rgba(200,255,200,0.25);border-radius:50%;top:5px;left:7px;filter:blur(3px);"></div>
        </div>
        <!-- Head (orange/red) -->
        <div style="position:absolute;width:43px;height:40px;top:55px;left:50px;z-index:40;background:radial-gradient(ellipse at 40% 28%, #fb923c 0%, #f97316 25%, #ea580c 50%, #c2410c 100%);border:2px solid #9a3412;border-radius:50%;overflow:visible;animation:toucan-head-turn 6s ease-in-out infinite;">
          <!-- White eye ring patch -->
          <div style="position:absolute;width:33px;height:28px;background:radial-gradient(ellipse at 50% 40%, #ffffff 0%, #fefefe 40%, #f5f5f5 70%, #e5e5e5 100%);border:1px solid #d4d4d4;border-radius:50%;top:8px;left:50%;transform:translateX(-50%);z-index:1;"></div>
          <!-- Left eye with white ring -->
          <div style="position:absolute;top:10px;left:3px;width:14px;height:14px;background:radial-gradient(circle at 50% 50%, #ffffff 0%, #f5f5f5 50%, #e5e5e5 100%);border:2px solid #a3a3a3;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 35% 30%, #ffffff 0%, #f5f5f5 60%, #e5e5e5 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Right eye with white ring -->
          <div style="position:absolute;top:10px;right:3px;width:14px;height:14px;background:radial-gradient(circle at 50% 50%, #ffffff 0%, #f5f5f5 50%, #e5e5e5 100%);border:2px solid #a3a3a3;border-radius:50%;z-index:3;">
            <div style="position:absolute;width:8px;height:8px;background:radial-gradient(circle at 65% 30%, #ffffff 0%, #f5f5f5 60%, #e5e5e5 100%);border-radius:50%;top:2px;left:2px;overflow:hidden;animation:toucan-blink 4s ease-in-out infinite;">
              <div style="position:absolute;width:5px;height:5px;background:radial-gradient(circle at 35% 35%, #1e293b 0%, #0f172a 50%, #000 100%);border-radius:50%;top:2px;left:2px;">
                <div style="position:absolute;width:2px;height:2px;background:white;border-radius:50%;top:1px;left:1px;"></div>
              </div>
            </div>
          </div>
          <!-- Orange parrot beak (based on Toucan style) -->
          <div style="position:absolute;top:4px;left:20px;z-index:45;transform-origin:left center;width:36px;height:34px;">
            <!-- Upper beak (orange/red) -->
            <div style="width:30px;height:24px;background:linear-gradient(95deg, #fca5a5 0%, #f87171 25%, #ef4444 50%, #dc2626 75%, #b91c1c 100%);border:2px solid #991b1b;border-radius:25px 50% 5px 40% / 80% 90% 15% 55%;position:relative;z-index:2;transform:rotate(5deg);transform-origin:left center;">
              <div style="position:absolute;width:16px;height:3px;background:linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 100%);border-radius:50%;top:4px;left:4px;filter:blur(1px);"></div>
              <!-- Nostril -->
              <div style="position:absolute;width:2px;height:2px;background:#7f1d1d;border-radius:50%;top:8px;left:4px;"></div>
            </div>
            <!-- Lower beak (orange/red) -->
            <div style="position:absolute;width:22px;height:13px;background:linear-gradient(95deg, #fca5a5 0%, #f87171 30%, #ef4444 60%, #dc2626 100%);border:2px solid #991b1b;border-radius:20px 85% 15px 35% / 60% 95% 30% 90%;top:20px;left:2px;z-index:1;transform-origin:left center;animation:toucan-beak-clack 5s ease-in-out infinite;">
              <div style="position:absolute;width:12px;height:2px;background:rgba(255,255,255,0.4);border-radius:50%;top:4px;left:3px;filter:blur(1px);"></div>
            </div>
          </div>
        </div>
        <!-- Yellow/orange chest/throat -->
        <div style="position:absolute;width:38px;height:45px;background:radial-gradient(ellipse at 50% 20%, #fef08a 0%, #fde047 25%, #facc15 50%, #f97316 80%, #ea580c 100%);border:2px solid #c2410c;border-radius:45% 45% 50% 50%;top:82px;left:55px;z-index:35;">
          <div style="position:absolute;width:14px;height:12px;background:rgba(255,255,200,0.4);border-radius:50%;top:6px;left:10px;filter:blur(3px);"></div>
        </div>
      </div>
    `,
  };

  // Wrap in scaling container to match mammal size (240x280)
  const design = birdDesigns[variant]||birdDesigns[0];

  // Flamingos (3, 9) already have 240x280 wrappers - don't double-wrap
  if(variant === 3 || variant === 9){
    return design;
  }

  // Great Horned Owl (10) is already larger (120x160), use smaller scale
  const scale = (variant === 10) ? 1.6 : 2.2;

  return `<div style="position:relative;width:240px;height:280px;display:flex;align-items:center;justify-content:center;">
    <div style="transform:scale(${scale});transform-origin:center center;">${design}</div>
  </div>`;
}

/* ============================================================================
   SCRIBBY DESIGN GUIDE: 3D STYLING PATTERNS
   ============================================================================

   This guide documents the CSS patterns used to create consistent 3D "pop-off-
   the-screen" effects across all adult and teen creature variants.

   --------------------------------------------------------------------------
   ADULT VARIANT 3D STYLING
   --------------------------------------------------------------------------

   Adult variants use a 4-stop radial gradient + inset shadows + highlight
   overlays to create a dimensional, glossy appearance.

   GRADIENT PATTERN:
   -----------------
   background: radial-gradient(ellipse at 35% 30%,
     [PALE_COLOR] 0%,      // Very light/nearly white - creates highlight
     [LIGHT_COLOR] 25%,    // Light version of main color
     [MID_COLOR] 55%,      // Main creature color
     [DARK_COLOR] 100%     // Dark shadow color
   );

   Example color progressions:
   - Gecko green:    #e8ffb8 → #c0ee6d → #8cc63f → #65a30d
   - Frog green:     #c0ffd8 → #7ef5a8 → #4ade80 → #16a34a
   - Cobra brown:    #f0dcc8 → #dbb896 → #b08968 → #5c4033
   - Fox orange:     #fed7aa → #fb923c → #f97316 → #c2410c
   - Bear brown:     #d4a574 → #a3643d → #92400e → #78350f
   - Bunny cream:    #ffffff → #fafafa → #f0f0eb → #e0e0db
   - Trash Panda:    #f3f4f6 → #d1d5db → #9ca3af → #6b7280

   SHADOW PATTERN:
   ---------------
   box-shadow:
     inset 8px 8px 20-22px rgba([LIGHT_RGB], 0.7-0.75),  // Top-left highlight
     inset -5px -6px 14-16px rgba([DARK_RGB], 0.4);      // Bottom-right shadow

   HIGHLIGHT OVERLAYS:
   -------------------
   Add two child divs inside the head/body element:

   Primary Highlight (larger, upper-left):
     position: absolute;
     width: 36-48px;
     height: 26-34px;
     background: rgba(255,255,255, 0.65-0.7);
     border-radius: 50%;
     top: 6-8px;
     left: 12-18px;
     filter: blur(4-6px);

   Secondary Highlight (smaller, center-right):
     position: absolute;
     width: 18-24px;
     height: 12-18px;
     background: rgba(255,255,255, 0.4-0.45);
     border-radius: 50%;
     top: 18-28px;
     right: 18-28px;
     filter: blur(3px);

   --------------------------------------------------------------------------
   TEEN VARIANT DESIGN PATTERNS
   --------------------------------------------------------------------------

   Teen variants are designed to match adult visual quality while having a
   smaller, more compact appearance. They share the same 3D styling approach
   but with additional animation effects.

   KEY DIFFERENCES FROM ADULTS:
   ----------------------------
   1. Smaller overall size (typically 180-200px container vs 240x280)
   2. More expressive animations (writhing for snakes, bouncing for mammals)
   3. Proportionally larger heads compared to body
   4. Same color palette as adult but applied to teen form

   TEEN SNAKE BODY (SVG + Animation):
   ----------------------------------
   Teen snakes use an SVG curved body path with a writhing animation:

   SVG Path Structure:
     <path d="M 30,65 Q 80,15 140,60 Q 180,95 220,65 Q 260,35 300,55"
           stroke="url(#gradientId)" stroke-width="28" stroke-linecap="round"/>

   Writhing Animation:
     @keyframes teen-snake-writhe {
       0%, 100% { transform: scaleX(1) skewY(0deg); }
       25%      { transform: scaleX(1.03) skewY(1.5deg); }
       50%      { transform: scaleX(0.98) skewY(-1deg); }
       75%      { transform: scaleX(1.02) skewY(-1.5deg); }
     }

   TEEN HEAD STYLING:
   ------------------
   Same gradient/shadow/highlight pattern as adults but proportionally sized:
   - Head size: ~55-65% of adult head size
   - Highlight sizes: ~60% of adult highlight sizes
   - Same blur and opacity values

   CONVERTING ADULT TO TEEN:
   -------------------------
   1. Scale down all dimensions by ~0.65-0.75
   2. Keep gradient ratios identical (0%, 25%, 55%, 100%)
   3. Reduce highlight div sizes proportionally
   4. Add more dynamic animation (faster timing, more movement)
   5. Adjust z-index if parts need different stacking

   --------------------------------------------------------------------------
   CATEGORY-SPECIFIC NOTES
   --------------------------------------------------------------------------

   REPTILES:
   - Snakes use SVG paths for bodies with stroke gradients
   - Turtle shell has radial gradient dome effect
   - Gecko/frog have standard div-based bodies

   MAMMALS:
   - Most use div-based body/head with gradient fills
   - Fluffy creatures (squirrel tail, bear) have extra highlight layers
   - Paws typically use simpler 2-color gradients

   BIRDS:
   - Wings often use SVG or layered divs for feathers
   - Beaks are typically solid color with subtle gradients

   ============================================================================ */

