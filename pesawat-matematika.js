/* ===== JELAJAH MATEMATIKA v5 - hurufa.com - t.me/hurufacom =====
   File ini disimpan di GitHub (repo hrf-games) dan dipanggil dari Blogger.
   Pasang di Tampilan HTML postingan Blogger cukup dua baris ini:
     <div id="pesawat-matematika"></div>
     <script src="https://cdn.jsdelivr.net/gh/hrfsetengahhari/hrf-games@main/pesawat-matematika.js"></script>
   Isi soal, level, dan koleksi ada di blok "DATA GAME" di bawah. */
(function(){
  var host=document.getElementById('pesawat-matematika');
  if(!host){ var cs=document.currentScript; host=document.createElement('div'); host.id='pesawat-matematika'; if(cs&&cs.parentNode) cs.parentNode.insertBefore(host,cs); else document.body.appendChild(host); }
  if(document.getElementById('pa-app')) return;
  host.innerHTML='';
  if(!document.getElementById('pa-font')){
    var l=document.createElement('link'); l.id='pa-font'; l.rel='stylesheet';
    l.href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Fredoka:wght@500;600;700&family=Noto+Naskh+Arabic:wght@700&display=swap";
    (document.head||host).appendChild(l);
  }
  var st=document.createElement('style');
  st.textContent="#pa-app,#pa-app *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}\n#pa-app *{line-height:inherit;letter-spacing:normal;text-transform:none}\n#pa-app span,#pa-app em,#pa-app i,#pa-app u,#pa-app small,#pa-app b{color:inherit;font-style:normal;text-decoration:none}\n#pa-app canvas{border:0;max-width:none;padding:0;margin:0}\n#pa-app{position:relative;width:100%;max-width:560px;height:min(85vh,780px);min-height:540px;margin:0 auto;overflow:hidden;background:#8fd3ff;border-radius:20px;box-shadow:0 6px 24px rgba(0,0,0,.18);font-family:'Baloo 2',system-ui,sans-serif;color:#1d2b3a;user-select:none;-webkit-user-select:none;line-height:1.2;text-align:left;overscroll-behavior:none}\n#pa-app.pa-full,#pa-app:fullscreen{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;max-width:none;min-height:0;border-radius:0;z-index:2147483000;margin:0}\n#pa-app canvas.pa-cv{position:absolute;top:0;left:0;width:100%;height:100%;display:block;max-width:none;border:0;padding:0;margin:0}\n#pa-app #pa-scene{touch-action:none}\n#pa-app #pa-fx{pointer-events:none;z-index:60}\n#pa-app .pa-ar{font-family:'Noto Naskh Arabic','Amiri',serif;direction:rtl}\n#pa-app button{font-family:'Baloo 2',system-ui,sans-serif;cursor:pointer;text-transform:none;letter-spacing:normal;line-height:1.2;color:#1d2b3a}\n#pa-app .pa-loading{padding:40px;text-align:center;font-weight:800}\n\n#pa-app #pa-hud{position:absolute;left:8px;right:8px;top:calc(env(safe-area-inset-top) + 22px);z-index:10;padding:10px 10px 22px;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:6px;background:rgba(255,255,255,.96);box-shadow:0 6px 18px rgba(0,0,0,.25);border-radius:24px;transition:transform .3s}\n#pa-app #pa-hud.pa-hide{transform:translateY(-200%)}\n#pa-app #pa-pointsBox{justify-self:start;text-align:center;background:linear-gradient(#fff6c9,#ffe27a);border-radius:16px;padding:3px 8px 0;box-shadow:0 3px 0 #e2b72c;min-width:78px}\n#pa-app #pa-pointsBox small{display:block;font-size:12px;font-weight:800;color:#a2770b;letter-spacing:.3px;white-space:nowrap}\n#pa-app #pa-points{display:block;font-size:34px;font-weight:800;line-height:1.15;color:#c2410c;white-space:nowrap}\n#pa-app #pa-points.pa-bump{animation:pabump .4s}\n@keyframes pabump{0%{transform:scale(1)}40%{transform:scale(1.35)}100%{transform:scale(1)}}\n#pa-app #pa-targetBox{text-align:center;line-height:1;min-height:80px;display:flex;flex-direction:column;justify-content:center;align-items:center;min-width:0;transform-origin:50% 62%;animation:pawig 4s ease-in-out infinite}\n#pa-app #pa-targetBox small{display:block;white-space:nowrap;font-size:13px;font-weight:800;opacity:.65;letter-spacing:.3px;margin-bottom:3px}\n#pa-app #pa-target{display:inline-block;min-width:132px;max-width:100%;font-size:56px;font-weight:800;line-height:1.1;color:#fff;background:linear-gradient(#ffa24d,#ff6a1f);border-radius:20px;padding:2px 14px 0;box-shadow:0 5px 0 #c94d0e;white-space:nowrap;direction:ltr;unicode-bidi:isolate}\n#pa-app #pa-target.pa-arnum{font-family:'Noto Naskh Arabic','Baloo 2',serif;font-size:48px;padding:0 14px 8px}\n#pa-app #pa-target.pa-long{font-size:38px;padding:8px 12px 4px}\n#pa-app #pa-target.pa-xlong{font-size:29px;padding:12px 10px 8px}\n#pa-app #pa-target.pa-pic{font-size:23px;padding:12px 8px 9px;min-width:0}\n#pa-app #pa-target.pa-text{font-size:18px;line-height:1.15;white-space:normal;max-width:215px;padding:8px 10px 6px}\n#pa-app #pa-target.pa-pop{animation:papop .35s}\n@keyframes papop{0%{transform:scale(.6)}70%{transform:scale(1.15)}100%{transform:scale(1)}}\n#pa-app #pa-timer{justify-self:end;text-align:center;background:#dff1ff;border-radius:16px;padding:3px 10px 0;min-width:72px;box-shadow:0 3px 0 #a9d3f2}\n#pa-app #pa-timer small{display:block;font-size:12px;font-weight:800;opacity:.6}\n#pa-app #pa-time{display:block;font-size:36px;font-weight:800;line-height:1.1}\n#pa-app #pa-timer.pa-low{background:#ffd9d5;color:#e2483d;animation:pablink .5s infinite alternate}\n@keyframes pablink{to{transform:scale(1.08)}}\n#pa-app #pa-timebar{position:absolute;left:16px;right:16px;bottom:8px;height:7px;border-radius:9px;background:#e6edf3;overflow:hidden}\n#pa-app #pa-timefill{height:100%;width:100%;background:linear-gradient(90deg,#24a35a,#8fd14f);transition:width .2s linear}\n\n#pa-app .pa-float{position:absolute;z-index:11;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;transition:opacity .3s;bottom:calc(env(safe-area-inset-bottom) + 10px);width:60px;height:60px}\n#pa-app .pa-float:active{transform:translateY(4px)}\n#pa-app #pa-pauseBtn{left:8px;background:#fff;gap:7px;box-shadow:0 5px 0 #b8c2cc}\n#pa-app #pa-pauseBtn i{display:block;width:8px;height:24px;border-radius:3px;background:#1d2b3a}\n#pa-app #pa-hintBtn{left:76px;background:linear-gradient(#fffbe0,#ffe98a);box-shadow:0 5px 0 #d9b93a;font-size:19px;flex-direction:column;line-height:1}\n#pa-app #pa-hintBtn small{font-size:12px;font-weight:800;color:#8a6a00}\n#pa-app #pa-hintBtn.pa-dim{opacity:.45}\n#pa-app #pa-hornBtn{right:8px;background:linear-gradient(#ffe066,#f5b301);color:#7a4a00;font-size:16px;box-shadow:0 5px 0 #b07f00}\n#pa-app #pa-turboBtn{right:76px;background:#dfe7ee;color:#5d6b78;font-size:12px;box-shadow:0 5px 0 #9fb0bf;flex-direction:column;line-height:1.1;overflow:hidden}\n#pa-app #pa-turboBtn b{font-size:17px}\n#pa-app #pa-turboBtn.pa-ready{color:#fff;box-shadow:0 5px 0 #17803f;animation:papulse 1s ease-in-out infinite}\n#pa-app .pa-float.pa-off{opacity:0;pointer-events:none}\n\n#pa-app .pa-overlay{position:absolute;top:0;left:0;right:0;bottom:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;justify-content:safe center;gap:12px;padding:calc(env(safe-area-inset-top) + 18px) 16px calc(env(safe-area-inset-bottom) + 18px);text-align:center;background:linear-gradient(rgba(178,226,252,.95),rgba(232,248,255,.95));overflow:hidden}\n#pa-app .pa-overlay.pa-hidden{display:none}\n#pa-app #pa-countdown{padding:0;background:transparent;pointer-events:none}\n#pa-app .pa-cloud{position:absolute;width:150px;height:50px;background:#fff;border-radius:50px;opacity:.9;animation:padrift linear infinite}\n#pa-app .pa-cloud::before,#pa-app .pa-cloud::after{content:\"\";position:absolute;background:#fff;border-radius:50%}\n#pa-app .pa-cloud::before{width:70px;height:70px;left:22px;top:-34px}\n#pa-app .pa-cloud::after{width:52px;height:52px;left:78px;top:-22px}\n@keyframes padrift{from{transform:translateX(-200px)}to{transform:translateX(760px)}}\n#pa-app .pa-title{position:relative;font-family:'Fredoka','Baloo 2',system-ui,sans-serif;font-weight:700;font-size:clamp(38px,11.5vw,58px);line-height:1.05;letter-spacing:.5px;color:#fff;-webkit-text-stroke:2px #e0621b;paint-order:stroke fill;text-shadow:0 3px 0 #c4501a,0 10px 16px rgba(20,60,110,.25)}\n#pa-app .pa-title.pa-t2{font-size:34px}\n#pa-app #pa-startScreen{background:linear-gradient(#7fc4f2,#bfe6fb 55%,#eaf7ff);gap:8px}\n#pa-app .pa-tag{position:relative;font-size:17px;font-weight:800;line-height:1.25;margin-top:4px}\n#pa-app .pa-tag b{color:#d4560f}\n#pa-app .pa-hero{position:relative;flex:1 1 auto;min-height:60px;max-height:250px;width:100%;max-width:400px}\n#pa-app .pa-hero svg{position:absolute;left:0;top:0;width:100%;height:100%;display:block;overflow:visible}\n#pa-app .pa-bob{animation:pabob 3.2s ease-in-out infinite}\n#pa-app .pa-bob2{animation-delay:-1.3s}\n#pa-app .pa-bob3{animation-duration:2.6s}\n@keyframes pabob{50%{transform:translateY(-8px)}}\n#pa-app .pa-pick{position:relative;font-size:17px;font-weight:800}\n#pa-app .pa-tiers{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%;max-width:420px}\n#pa-app .pa-tier{border:3px solid #2b8fd6;border-radius:18px;background:#fff;box-shadow:0 5px 0 #2b8fd6;padding:8px 2px 5px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:62px;color:#1d2b3a}\n#pa-app .pa-tier:active{transform:translateY(3px);box-shadow:0 2px 0 #2b8fd6}\n#pa-app .pa-tier b{font-size:17px;line-height:1.1}\n#pa-app .pa-tier span{font-size:13px;font-weight:700;opacity:.8}\n#pa-app .pa-tier em{font-size:13px;font-weight:600;line-height:1.3;margin-top:3px}\n#pa-app .pa-tier.pa-on{background:#2b8fd6;box-shadow:0 5px 0 #1b6aa6;color:#fff}\n#pa-app .pa-tiersBig{grid-template-columns:1fr;max-width:340px;gap:12px}\n#pa-app .pa-tiersBig .pa-tier{min-height:96px;padding:10px 8px 8px}\n#pa-app .pa-tiersBig .pa-tier b{font-size:22px}\n#pa-app #pa-name{font-family:'Baloo 2',system-ui,sans-serif;font-size:17px;font-weight:700;border:3px solid #7cb6dd;border-radius:999px;padding:6px 12px 4px;width:190px;max-width:58%;height:40px;text-align:center;background:#fff;color:#1d2b3a;-webkit-user-select:text;user-select:text;outline:none;box-shadow:none}\n#pa-app #pa-name:focus{border-color:#ff8a3d}\n#pa-app #pa-levelScreen .pa-smallbtn{padding:9px 11px 7px;font-size:14px}\n#pa-app #pa-levelScreen .pa-row{gap:6px;flex-wrap:nowrap}\n#pa-app #pa-levelScreen .pa-accent{padding:9px 8px 7px;font-size:13px;white-space:nowrap}\n#pa-app #pa-rapotScreen{gap:8px}\n#pa-app #pa-rapotImg{position:relative;flex:0 1 auto;min-height:0;max-height:66%;max-width:100%;object-fit:contain;border-radius:14px;box-shadow:0 6px 18px rgba(0,0,0,.25);border:0;padding:0;-webkit-user-select:auto;user-select:auto;-webkit-touch-callout:default}\n#pa-app .pa-lead{position:relative;max-width:420px;font-size:16px;font-weight:600;line-height:1.35;background:rgba(255,255,255,.8);padding:10px 14px;border-radius:16px}\n#pa-app .pa-lead b{color:#d4560f}\n#pa-app .pa-bigbtn{position:relative;font-weight:800;font-size:clamp(24px,7.5vw,36px);letter-spacing:1px;padding:14px 40px 10px;border-radius:999px;border:none;color:#fff;background:linear-gradient(#ffb15c,#ff6a1f);box-shadow:0 8px 0 #c94d0e,0 16px 28px rgba(0,0,0,.22);animation:papulse 1.4s ease-in-out infinite}\n#pa-app .pa-bigbtn:active{transform:translateY(6px);box-shadow:0 2px 0 #c94d0e;animation:none}\n@keyframes papulse{50%{transform:scale(1.06)}}\n#pa-app .pa-smallbtn{position:relative;border:none;background:#fff;border-radius:999px;padding:9px 16px 7px;font-weight:700;font-size:15px;color:#1d2b3a;box-shadow:0 3px 0 rgba(0,0,0,.14);min-height:40px}\n#pa-app .pa-smallbtn:active{transform:translateY(2px)}\n#pa-app .pa-smallbtn.pa-accent{background:linear-gradient(#fff6c9,#ffe27a);box-shadow:0 3px 0 #e2b72c}\n#pa-app .pa-exit{display:none}\n#pa-app.pa-full .pa-exit{display:inline-block}\n#pa-app .pa-row{position:relative;display:flex;gap:8px;flex-wrap:wrap;justify-content:center}\n#pa-app #pa-countNum.pa-bism{font-size:20px;-webkit-text-stroke:0;text-shadow:none;color:#1f7a45;background:rgba(255,255,255,.92);border-radius:28px;padding:10px 28px 12px;box-shadow:0 6px 0 rgba(0,0,0,.12)}\n#pa-app #pa-countNum.pa-bism u{display:block;text-decoration:none;font-family:'Noto Naskh Arabic','Amiri',serif;font-size:58px;line-height:1.5;direction:rtl}\n#pa-app #pa-countNum.pa-bism span{display:block;font-family:'Fredoka','Baloo 2',sans-serif;font-size:26px;font-weight:700;color:#d4560f}\n#pa-app #pa-countNum{font-size:110px;font-weight:800;color:#fff;-webkit-text-stroke:3px #e0621b;text-shadow:0 8px 0 #e0621b}\n#pa-app #pa-countNum.pa-go{animation:papop .5s}\n#pa-app #pa-countLvl{font-size:24px;font-weight:800;color:#1f7a45;background:rgba(255,255,255,.9);border-radius:999px;padding:5px 18px 2px;max-width:92%}\n#pa-app .pa-stars{position:relative;font-size:42px;letter-spacing:6px;min-height:50px}\n#pa-app .pa-stats{position:relative;font-size:16px;font-weight:700;background:rgba(255,255,255,.85);border-radius:14px;padding:6px 14px;max-width:420px;line-height:1.35}\n#pa-app .pa-stats b{color:#c2410c;font-size:22px}\n#pa-app #pa-review{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:420px}\n#pa-app .pa-chip{unicode-bidi:isolate;background:#fff;border-radius:14px;padding:4px 12px 2px;box-shadow:0 2px 0 rgba(0,0,0,.1);font-weight:800;font-size:19px;color:#1f7a45;direction:ltr;unicode-bidi:isolate;font-family:'Baloo 2','Noto Naskh Arabic',sans-serif}\n#pa-app .pa-note{position:relative;font-size:12px;opacity:.65}\n#pa-app .pa-brand{position:relative;font-size:13px;font-weight:800;color:#1f7a45;opacity:.85}\n#pa-app .pa-starTotal{position:relative;white-space:nowrap;font-size:17px;font-weight:800;background:#fff;border-radius:999px;padding:4px 16px 1px;box-shadow:0 3px 0 rgba(0,0,0,.1)}\n\n#pa-app #pa-levelScreen{gap:8px;justify-content:flex-start}\n#pa-app #pa-map{position:relative;flex:1 1 auto;min-height:0;width:100%;max-width:440px;overflow-y:auto;overflow-x:hidden;border-radius:20px;box-shadow:inset 0 0 0 3px #fff;-webkit-overflow-scrolling:touch;touch-action:pan-y}\n#pa-app .pa-mapin{position:relative;width:100%}\n#pa-app .pa-mapin svg{position:absolute;left:0;top:0;max-width:none}\n#pa-app .pa-mapdeco svg{position:static}\n#pa-app .pa-mapdeco{position:absolute;pointer-events:none}\n#pa-app .pa-rl{position:absolute;left:0;right:0;text-align:center;pointer-events:none;z-index:2}\n#pa-app .pa-rl span{display:inline-block;font-family:'Fredoka','Baloo 2',sans-serif;font-size:21px;font-weight:700;line-height:1;padding:9px 18px 8px;border-radius:999px;background:#fff;color:#1d2b3a;box-shadow:0 4px 0 rgba(0,0,0,.14),0 8px 16px rgba(0,0,0,.12);border:3px solid #7cc4f2;animation:parl 2.6s ease-in-out infinite}\n#pa-app .pa-rl span u{display:inline-block;text-decoration:none;margin-right:6px;animation:parli 2.6s ease-in-out infinite}\n#pa-app .pa-rl1 span{border-color:#2b8fd6;color:#0f5c99}\n#pa-app .pa-rl2 span{border-color:#ff8a4d;color:#b2470f}\n#pa-app .pa-rl3 span{border-color:#6a7fd1;color:#1b2c63}\n@keyframes parl{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-5px) scale(1.05)}}\n@keyframes parli{0%,100%{transform:rotate(-12deg) scale(1)}50%{transform:rotate(12deg) scale(1.2)}}\n#pa-app .pa-mc{width:58px;height:19px;border-radius:20px;background:#fff;opacity:.92;animation:pamc 7s ease-in-out infinite alternate}\n#pa-app .pa-mc::before,#pa-app .pa-mc::after{content:\"\";position:absolute;background:inherit;border-radius:50%}\n#pa-app .pa-mc::before{width:26px;height:26px;left:8px;top:-13px}\n#pa-app .pa-mc::after{width:20px;height:20px;left:28px;top:-9px}\n#pa-app .pa-mc.pa-sm{transform:scale(.7);animation-name:pamc2}\n#pa-app .pa-mc.pa-dusk{background:#fff1e6}\n@keyframes pamc{from{transform:translateX(-12px)}to{transform:translateX(12px)}}\n@keyframes pamc2{from{transform:translateX(10px) scale(.7)}to{transform:translateX(-10px) scale(.7)}}\n#pa-app .pa-ms{animation:pams 2.2s ease-in-out infinite}\n#pa-app .pa-ms svg{display:block}\n@keyframes pams{0%,100%{opacity:.35;transform:scale(.7) rotate(0)}50%{opacity:1;transform:scale(1.15) rotate(20deg)}}\n#pa-app .pa-lvl{position:absolute;transform:translate(-50%,-50%);width:116px;min-height:78px;border:none;border-radius:18px;background:linear-gradient(#ffffff,#e4f4ff);box-shadow:0 5px 0 #7cb6dd;padding:5px 4px 3px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#1d2b3a}\n#pa-app .pa-lvl:active{transform:translate(-50%,-46%);box-shadow:0 1px 0 #7cb6dd}\n#pa-app .pa-lvl b{font-size:24px;line-height:1;color:#ff6a1f}\n#pa-app .pa-lvl span{font-size:12px;font-weight:800;line-height:1.1}\n#pa-app .pa-lvl em{font-style:normal;font-size:10.5px;font-weight:700;opacity:.7;line-height:1.1}\n#pa-app .pa-lvl i{font-style:normal;font-size:12px;letter-spacing:1px;line-height:1.2}\n#pa-app .pa-lvl.pa-locked{background:linear-gradient(#dfe7ee,#c8d4de);box-shadow:0 5px 0 #9fb0bf;color:#6f7f8c}\n#pa-app .pa-lvl.pa-locked b{font-size:20px}\n#pa-app .pa-lvl.pa-next{background:linear-gradient(#fff6c9,#ffe27a);box-shadow:0 5px 0 #e2b72c;animation:panext 1.4s ease-in-out infinite}\n@keyframes panext{50%{transform:translate(-50%,-50%) scale(1.07)}}\n#pa-app .pa-lvl.pa-hi{animation:pahi .85s ease-in-out 4!important;z-index:3;box-shadow:0 5px 0 #e2b72c,0 0 0 6px rgba(255,210,63,.65),0 10px 22px rgba(0,0,0,.2)}\n@keyframes pahi{0%,100%{transform:translate(-50%,-50%) rotate(0) scale(1)}15%{transform:translate(-50%,-50%) rotate(-9deg) scale(1.14)}35%{transform:translate(-50%,-50%) rotate(8deg) scale(1.16)}55%{transform:translate(-50%,-50%) rotate(-6deg) scale(1.12)}75%{transform:translate(-50%,-50%) rotate(4deg) scale(1.06)}}\n#pa-app .pa-lvl.pa-shake{animation:pashake .4s!important}\n@keyframes pashake{0%,100%{transform:translate(-50%,-50%)}20%,60%{transform:translate(-56%,-50%)}40%,80%{transform:translate(-44%,-50%)}}\n#pa-app #pa-lockMsg{position:relative;min-height:20px;font-size:15px;font-weight:800;color:#c2410c}\n\n#pa-app .pa-panel{position:relative;width:100%;max-width:420px;background:rgba(255,255,255,.85);border-radius:18px;padding:10px;overflow-y:auto;min-height:0}\n#pa-app .pa-panel h4{font-size:15px;font-weight:800;margin:2px 0 6px;color:#1f7a45}\n#pa-app .pa-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:10px}\n#pa-app .pa-item{border:none;border-radius:14px;background:linear-gradient(#ffffff,#e4f4ff);box-shadow:0 4px 0 #7cb6dd;padding:4px 2px 3px;display:flex;flex-direction:column;align-items:center;min-height:86px;justify-content:center}\n#pa-app .pa-item canvas{width:54px;height:54px;display:block}\n#pa-app .pa-item span{font-size:10.5px;font-weight:800;line-height:1.1;padding:0 2px}\n#pa-app .pa-item em{font-style:normal;font-size:11px;font-weight:700;color:#a2770b}\n#pa-app .pa-item u{text-decoration:none;font-size:26px;line-height:54px;height:54px}\n#pa-app .pa-item.pa-locked{background:linear-gradient(#dfe7ee,#c8d4de);box-shadow:0 4px 0 #9fb0bf}\n#pa-app .pa-item.pa-locked canvas,#pa-app .pa-item.pa-locked u{opacity:.35}\n#pa-app .pa-item.pa-on{background:linear-gradient(#e2ffe9,#b9f2c8);box-shadow:0 4px 0 #24a35a}\n#pa-app .pa-item.pa-on em{color:#17803f}\n#pa-app .pa-mis{display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:9px 12px 7px;margin-bottom:8px;text-align:left;font-weight:700;font-size:15px;box-shadow:0 3px 0 rgba(0,0,0,.08)}\n#pa-app .pa-mis b{flex:0 0 auto;min-width:54px;text-align:center;background:#dff1ff;border-radius:999px;padding:3px 8px 1px;font-size:14px}\n#pa-app .pa-mis.pa-done{background:#e2ffe9}\n#pa-app .pa-mis.pa-done b{background:#24a35a;color:#fff}\n\n@keyframes pawig{0%,24%,100%{transform:rotate(0) scale(1)}3%{transform:rotate(-4deg) scale(1.05)}6%{transform:rotate(4deg) scale(1.06)}9%{transform:rotate(-3deg) scale(1.04)}12%{transform:rotate(2.5deg) scale(1.03)}15%{transform:rotate(-1.5deg) scale(1.01)}18%{transform:rotate(0) scale(1)}}\n@media (prefers-reduced-motion:reduce){#pa-app #pa-targetBox{animation:none}}\n#pa-app #pa-name.pa-need{border-color:#e2483d;animation:paneed .9s ease-in-out infinite}\n@keyframes paneed{50%{box-shadow:0 0 0 6px rgba(226,72,61,.3)}}\n#pa-app .pa-rapotBig{position:relative;border:none;border-radius:999px;width:min(100%,340px);min-height:54px;padding:13px 24px 10px;font-weight:800;font-size:19px;color:#fff;background:linear-gradient(#ffb15c,#ff6a1f);box-shadow:0 6px 0 #c94d0e,0 10px 18px rgba(0,0,0,.15)}\n#pa-app .pa-rapotBig:active{transform:translateY(4px);box-shadow:0 2px 0 #c94d0e}\n#pa-app #pa-cityBtn{left:10px;bottom:calc(env(safe-area-inset-bottom) + 82px);width:56px;height:56px;background:linear-gradient(#e6f4ff,#b9dcf7);box-shadow:0 5px 0 #7cb6dd;flex-direction:column;line-height:1;gap:1px}\n#pa-app #pa-cityBtn span{font-size:22px}\n#pa-app #pa-cityBtn small{font-size:10px;font-weight:800;color:#1b5fa8}\n#pa-app #pa-cityPanel{max-height:62%;touch-action:pan-y;-webkit-overflow-scrolling:touch}\n#pa-app .pa-cityg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n#pa-app .pa-city{border:none;border-radius:14px;background:linear-gradient(#ffffff,#e4f4ff);box-shadow:0 4px 0 #7cb6dd;padding:6px 2px 4px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:76px;color:#1d2b3a}\n#pa-app .pa-city:active{transform:translateY(3px);box-shadow:0 1px 0 #7cb6dd}\n#pa-app .pa-city b{font-size:22px;line-height:1;color:#ff6a1f}\n#pa-app .pa-city span{font-size:12px;font-weight:800;line-height:1.1}\n#pa-app .pa-city i{font-size:11px;letter-spacing:1px;line-height:1.3}\n#pa-app .pa-city.pa-locked{background:linear-gradient(#dfe7ee,#c8d4de);box-shadow:0 4px 0 #9fb0bf;color:#6f7f8c}\n#pa-app .pa-city.pa-locked b{font-size:18px}\n#pa-app .pa-city.pa-on{background:linear-gradient(#e2ffe9,#b9f2c8);box-shadow:0 4px 0 #24a35a}\n#pa-app .pa-crown{border:none;border-radius:999px;width:44px;height:40px;font-size:20px;line-height:1;background:linear-gradient(#fff6c9,#ffd23f);box-shadow:0 3px 0 #d9a300;display:flex;align-items:center;justify-content:center;flex:0 0 auto}\n#pa-app .pa-crown.pa-isPrem{background:linear-gradient(#e2ffe9,#7fe0a0);box-shadow:0 3px 0 #24a35a}\n#pa-app #pa-name{max-width:48%}\n#pa-app .pa-lvl.pa-prem{background:linear-gradient(#fffbe6,#ffe9a6);box-shadow:0 5px 0 #d9a300;color:#8a5a00}\n#pa-app .pa-lvl.pa-prem b{font-size:20px;color:#c98a00}\n#pa-app .pa-lvl.pa-prem em{opacity:.85}\n#pa-app .pa-city.pa-prem{background:linear-gradient(#fffbe6,#ffe9a6);box-shadow:0 4px 0 #d9a300;color:#8a5a00}\n#pa-app .pa-item.pa-prem{background:linear-gradient(#fffbe6,#ffe9a6);box-shadow:0 4px 0 #d9a300}\n#pa-app .pa-item.pa-prem canvas,#pa-app .pa-item.pa-prem u{opacity:.55}\n#pa-app .pa-item.pa-prem em{color:#a2770b}\n#pa-app .pa-mis.pa-premMis{background:#fff7d6;cursor:pointer}\n#pa-app .pa-mis.pa-premMis b{background:#ffd23f}\n#pa-app .pa-mis small{font-size:12px;color:#a2770b;font-weight:800}\n#pa-app #pa-premScreen{background:linear-gradient(rgba(255,246,210,.97),rgba(232,248,255,.97));gap:9px}\n#pa-app .pa-premBadge{position:relative;font-size:46px;line-height:1;animation:parl 2.4s ease-in-out infinite}\n#pa-app .pa-premLead{position:relative;max-width:400px;font-size:16px;font-weight:700;line-height:1.35}\n#pa-app .pa-premLead b{color:#c2410c}\n#pa-app .pa-premList{max-width:400px;text-align:left;font-size:14.5px;font-weight:700;line-height:1.35;flex:0 1 auto}\n#pa-app .pa-premList div{display:flex;gap:8px;padding:5px 2px;border-bottom:1px dashed #e3d7a8}\n#pa-app .pa-premList div:last-child{border-bottom:0}\n#pa-app .pa-premList u{text-decoration:none;flex:0 0 22px;text-align:center}\n#pa-app .pa-premCode{position:relative;display:flex;gap:8px;width:100%;max-width:400px}\n#pa-app #pa-code{flex:1 1 auto;min-width:0;font-family:'Baloo 2',monospace;font-size:17px;font-weight:800;letter-spacing:1px;text-transform:uppercase;border:3px solid #e2b72c;border-radius:999px;padding:7px 12px 5px;height:44px;text-align:center;background:#fff;color:#1d2b3a;-webkit-user-select:text;user-select:text;outline:none}\n#pa-app #pa-code:focus{border-color:#ff8a3d}\n#pa-app .pa-codeMsg{position:relative;min-height:20px;font-size:14.5px;font-weight:800;color:#c2410c;max-width:400px}\n#pa-app .pa-codeMsg.pa-ok{color:#17803f}\n#pa-app .pa-premLink{position:relative;display:inline-block;text-decoration:none;font-weight:800;font-size:20px;color:#fff;background:linear-gradient(#ffd23f,#f5a300);border-radius:999px;padding:13px 28px 10px;box-shadow:0 6px 0 #b07f00,0 10px 18px rgba(0,0,0,.15);min-width:240px;text-align:center}\n#pa-app .pa-premLink:active{transform:translateY(4px);box-shadow:0 2px 0 #b07f00}\n#pa-app .pa-teaser{display:inline-block;margin-top:4px;color:#8a5a00;background:#fff3c4;border-radius:12px;padding:3px 10px 1px}\n#pa-app .pa-simTag{position:relative;display:inline-block;margin-top:-2px;font-family:'Fredoka','Baloo 2',sans-serif;font-weight:700;font-size:16px;letter-spacing:2px;text-transform:uppercase;color:#1b5fa8;background:#fff;border:3px solid #7cc4f2;border-radius:999px;padding:4px 16px 2px;box-shadow:0 3px 0 rgba(0,0,0,.1)}";
  host.appendChild(st);
  var root=document.createElement('div'); root.id='pa-app'; host.appendChild(root);
})();
(function(){
var app=document.getElementById('pa-app'); if(!app) return;

/* =====================================================================
   DATA GAME  (bagian yang boleh diubah-ubah)
   - ISLAMI  : bank soal islami. t = teks soal, n = bilangan yang dijumlah.
   - TIERS   : 3 tingkat (TK, SD kecil, SD besar), masing-masing 16 level.
               Lihat keterangan "Tiap baris level" di bawah.
   - SKINS / TRAILS : koleksi pesawat dan jejak asap, cost = jumlah bintang.
   - MISSIONS: misi harian (3 dipilih otomatis tiap hari).
   ===================================================================== */
var rand=function(a){return a[Math.floor(Math.random()*a.length)];};
var ri=function(a,b){return a+Math.floor(Math.random()*(b-a+1));};
function Q(terms,miss,op){
  op=op||'+'; if(miss==null) miss=-1;
  var s=op==='-'?terms[0]-terms[1]:op==='x'?terms[0]*terms[1]:op==='/'?terms[0]/terms[1]:terms.reduce(function(a,b){return a+b;},0);
  return {terms:terms,miss:miss,op:op,total:s,ans:miss>=0?terms[miss]:s};
}
function sumTo(lo,hi){ var s=ri(lo,hi),a=ri(1,s-1); return Q([a,s-a]); }
function sub(lo,hi){ var a=ri(lo,hi); return Q([a,ri(1,a-1)],-1,'-'); }
/* mul(tabel, lo, hi): perkalian dari tabel tertentu; div(tabel): pembagian tanpa sisa */
function mul(ta,lo,hi){
  var a=rand(ta),b=ri(lo||1,hi||10),q=Math.random()<.5?Q([a,b],-1,'x'):Q([b,a],-1,'x'),t=q.total;
  q.pref=[t+a,t-a,t+b,t-b,t+1,t-1]; return q;
}
function div(ta){ var b=rand(ta),c=ri(1,10); return Q([b*c,b],-1,'/'); }
var FRUIT=['\ud83c\udf4e','\ud83c\udf4a','\ud83c\udf4b','\ud83c\udf53','\ud83c\udf47','\ud83c\udf50'];
var ISLAMI=[
  {t:'Rakaat Subuh + rakaat Magrib',n:[2,3]},
  {t:'Rakaat Zuhur + rakaat Asar',n:[4,4]},
  {t:'Rakaat Isya + rakaat Subuh',n:[4,2]},
  {t:'Rakaat Magrib + rakaat Isya',n:[3,4]},
  {t:'Rakaat Subuh + rakaat Zuhur',n:[2,4]},
  {t:'Rakaat Asar + rakaat Magrib',n:[4,3]},
  {t:'Rakaat Zuhur + rakaat Isya',n:[4,4]},
  {t:'Rakaat Zuhur + Asar + Magrib',n:[4,4,3]},
  {t:'Rakaat Subuh + Zuhur + Asar',n:[2,4,4]},
  {t:'Rakaat Magrib + Isya + Subuh',n:[3,4,2]},
  {t:'Rakaat shalat Jumat + rakaat Asar',n:[2,4]},
  {t:'Rukun Islam + rukun iman',n:[5,6]},
  {t:'Shalat wajib sehari + rukun iman',n:[5,6]},
  {t:'Rukun Islam + shalat wajib sehari',n:[5,5]},
  {t:'Rukun iman + rakaat Subuh',n:[6,2]},
  {t:'Rukun Islam + rakaat Magrib',n:[5,3]},
  {t:'Rukun iman + rakaat Isya',n:[6,4]},
  {t:'Bulan hijriah + rukun Islam',n:[12,5]},
  {t:'Bulan hijriah + rukun iman',n:[12,6]},
  {t:'Hari dalam sepekan + rukun iman',n:[7,6]},
  {t:'Hari dalam sepekan + rukun Islam',n:[7,5]},
  {t:'Juz Al-Qur\'an + rukun Islam',n:[30,5]},
  {t:'Juz Al-Qur\'an + rukun iman',n:[30,6]},
  {t:'Shalat wajib sehari + rakaat Subuh',n:[5,2]}
];
var REGIONS=[
  {name:'Pulau Jawa',icon:'\u2600\ufe0f',theme:'day'},
  {name:'Lautan Nusantara',icon:'\ud83c\udf0a',theme:'sea'},
  {name:'Langit Senja',icon:'\ud83c\udf05',theme:'dusk'},
  {name:'Malam di Tanah Suci',icon:'\ud83c\udf19',theme:'night'}
];
var CITIES=['Jakarta','Bandung','Yogyakarta','Surabaya','Makassar','Balikpapan','Medan','Banda Aceh','Kolombo','Muskat','Dubai','Riyadh','Jeddah','Thaif','Madinah','Makkah'];
/* Bahan soal yang dipakai di beberapa tingkat */
var G={
  buah:function(){ var a=ri(1,4),q=Q([a,ri(1,Math.min(3,6-a))]); q.pic=rand(FRUIT); return q; },
  kurangBuah:function(){ var a=ri(2,4),q=Q([a,ri(1,Math.min(a-1,6-a))],-1,'-'); q.pic=rand(FRUIT); return q; },
  pair10:function(){ var a=ri(1,9),q=Q([a,10-a]); q.pair=true; return q; },
  hilang:function(){ var s=ri(4,10),a=ri(1,s-1); return Q([a,s-a],Math.random()<.5?0:1); },
  tiga:function(){ var t; do{ t=[ri(1,6),ri(1,6),ri(1,6)]; }while(t[0]+t[1]+t[2]>15); return Q(t); },
  puluhan:function(){ var k=ri(1,9); return Q([k*10,ri(1,10-k)*10]); },
  pulSat:function(){ var a=ri(1,8)*10+ri(0,8); return Q([a,ri(1,9-a%10)]); },
  dua:function(){ var t1=ri(1,8),t2=ri(1,9-t1),u1=ri(0,8),u2=ri(1,9-u1); return Q([t1*10+u1,t2*10+u2]); },
  simpan:function(){ var u1=ri(2,9),u2=ri(10-u1,9),t1=ri(1,7),t2=ri(1,8-t1); return Q([t1*10+u1,t2*10+u2]); },
  islami:function(){ var it=rand(ISLAMI),q=Q(it.n.slice()); q.text=it.t; return q; }
};
/* Tiap baris level: [nama, detik awan sampai, pembuat soal, tanda, campuran]
   tanda: 'A' jawaban angka Arab, 'AA' soal+jawaban angka Arab, 'T' puluhan, 'C' simpan/pinjam, 'H' ratusan */
function mk(rows){
  return rows.map(function(d,i){
    var f=d[3]||'';
    return {city:CITIES[i],name:d[0],tt:d[1],gen:d[2],isl:d[2]===G.islami,ansAr:f==='A'||f==='AA',qAr:f==='AA',tens:f==='T',carry:f==='C',hund:f==='H',mix:d[4]||null};
  });
}
var TIERS=[
 {id:'tk',age:'4-6 tahun',name:'TK',desc:'Tambah, lalu kurang di level atas',levels:mk([
  ['Hitung buah',6.4,G.buah],
  ['Hasil sampai 5',6.2,function(){ return sumTo(2,5); }],
  ['Tambah 1 atau 2',6.0,function(){ return Q([ri(1,8),ri(1,2)]); }],
  ['Hasil sampai 7',6.0,function(){ return sumTo(4,7); }],
  ['Hasil sampai 10',6.0,function(){ return sumTo(5,10); }],
  ['Jawab angka Arab',6.2,function(){ return sumTo(3,10); },'A'],
  ['Angka kembar',6.0,function(){ var a=ri(1,5); return Q([a,a]); }],
  ['Semua angka Arab',6.4,function(){ return sumTo(3,10); },'AA'],
  ['Kurang buah',6.6,G.kurangBuah],
  ['Kurang sampai 5',6.2,function(){ return sub(2,5); }],
  ['Tiga bilangan kecil',6.6,function(){ return Q([ri(1,3),ri(1,3),ri(1,3)]); }],
  ['Kurang sampai 10',6.2,function(){ return sub(4,10); }],
  ['Angka hilang',6.6,function(){ var s=ri(3,8),a=ri(1,s-1); return Q([a,s-a],Math.random()<.5?0:1); }],
  ['Pasangan 10',7.0,G.pair10],
  ['Tambah dan kurang',6.2,function(){ return Math.random()<.5?sumTo(4,10):sub(3,10); }],
  ['Tantangan campuran',6.4,null,'',[4,5,6,9,10,11,12,13,14]]
 ])},
 {id:'sd1',age:'7-9 tahun',name:'SD kecil',desc:'Tambah, kurang, lalu perkalian',levels:mk([
  ['Hasil sampai 10',5.2,function(){ return sumTo(3,10); }],
  ['Hasil 11 - 20',5.4,function(){ var a=ri(2,10); return Q([a,ri(Math.max(1,11-a),10)]); }],
  ['Semua angka Arab',5.6,function(){ return Q([ri(1,10),ri(1,10)]); },'AA'],
  ['Angka hilang',5.8,G.hilang],
  ['Pasangan 10',6.4,G.pair10],
  ['Kurang sampai 10',5.4,function(){ return sub(3,10); }],
  ['Tiga bilangan',6.0,G.tiga],
  ['Kurang sampai 20',5.8,function(){ return Q([ri(11,20),ri(2,9)],-1,'-'); }],
  ['Puluhan',5.4,G.puluhan,'T'],
  ['Puluhan + satuan',5.6,G.pulSat],
  ['Soal islami',7.0,G.islami],
  ['Dua angka',6.2,G.dua],
  ['Dua angka (simpan)',6.8,G.simpan,'C'],
  ['Perkalian 2, 5, 10',6.2,function(){ return mul([2,5,10]); }],
  ['Perkalian 3 dan 4',6.6,function(){ return mul([3,4]); }],
  ['Tantangan campuran',6.2,null,'',[1,3,5,6,7,8,9,10,11,12,13,14]]
 ])},
 {id:'sd2',age:'10-12 tahun',name:'SD besar',desc:'Semua, sampai kali dan bagi',levels:mk([
  ['Dua angka (simpan)',6.2,G.simpan,'C'],
  ['Kurang dua angka',6.2,function(){ var t1=ri(2,9),t2=ri(1,t1-1),u1=ri(1,9),u2=ri(0,u1); return Q([t1*10+u1,t2*10+u2],-1,'-'); }],
  ['Kurang (meminjam)',6.8,function(){ var u1=ri(0,8),u2=ri(u1+1,9),t1=ri(2,9),t2=ri(1,t1-1); return Q([t1*10+u1,t2*10+u2],-1,'-'); },'C'],
  ['Soal islami',6.6,G.islami],
  ['Tiga bilangan',6.8,function(){ return Q([ri(5,20),ri(5,20),ri(5,20)]); }],
  ['Ratusan',5.6,function(){ var k=ri(1,8); return Q([k*100,ri(1,9-k)*100]); },'H'],
  ['Angka hilang',6.6,function(){ var s=ri(20,60),a=ri(5,s-5); return Q([a,s-a],Math.random()<.5?0:1); }],
  ['Perkalian 2 - 5',5.8,function(){ return mul([2,3,4,5]); }],
  ['Perkalian 6 - 9',6.4,function(){ return mul([6,7,8,9]); }],
  ['Perkalian angka Arab',6.6,function(){ return mul([2,3,4,5,6,7,8,9]); },'AA'],
  ['Perkalian puluhan',6.2,function(){ var a=ri(1,9)*10,q=Q([a,ri(2,5)],-1,'x'),t=q.total; q.pref=[t+10,t-10,t+a,t-a]; return q; }],
  ['Pembagian 2 - 5',6.2,function(){ return div([2,3,4,5]); }],
  ['Pembagian 6 - 9',6.6,function(){ return div([6,7,8,9]); }],
  ['Kali hilang',6.8,function(){ return Q([ri(2,9),ri(2,9)],Math.random()<.5?0:1,'x'); }],
  ['Kali dan bagi',6.4,function(){ return Math.random()<.5?mul([2,3,4,5,6,7,8,9],2,10):div([2,3,4,5,6,7,8,9]); }],
  ['Tantangan campuran',6.4,null,'',[0,2,4,6,8,9,10,11,12,13,14]]
 ])}
];
var STORM=5;                      /* jumlah soal badai di level bos (tiap level ke-4) */
TIERS.forEach(function(T){ T.levels.forEach(function(L,i){ L.boss=(i%4===3); L.goal=L.boss?12:10; L.time=Math.round(L.goal*L.tt+25); L.region=Math.floor(i/4); }); });
var LEVELS=TIERS[1].levels;       /* diganti sesuai tingkat yang dipilih */

var SKINS=[
  {id:'oranye',name:'Oranye',cost:0,shape:'prop',body:['#e0451f','#ff7a3d'],wing:['#ffd23f','#f5a300'],tip:'#ff5a3c',ink:'#d4400f'},
  {id:'biru',name:'Biru Langit',cost:4,shape:'prop',body:['#1f6fd1','#4aa8ff'],wing:['#ffffff','#cfe6ff'],tip:'#ffb02e',ink:'#1f6fd1'},
  {id:'hijau',name:'Hijau Daun',cost:8,shape:'prop',body:['#178a48','#3fcf78'],wing:['#fff3a8','#ffd94a'],tip:'#178a48',ink:'#178a48'},
  {id:'ungu',name:'Ungu Anggur',cost:13,shape:'prop',body:['#6a3fd1','#a482ff'],wing:['#ffd0ea','#ff9fd0'],tip:'#6a3fd1',ink:'#6a3fd1'},
  {id:'jet',name:'Jet Perak',cost:19,shape:'jet',body:['#8a98a8','#e8eef4'],wing:['#dfe7ee','#aab8c6'],tip:'#3da5ff',ink:'#2b6a9a'},
  {id:'bi',name:'Sayap Ganda',cost:26,shape:'bi',body:['#b3261e','#f0554a'],wing:['#fff6dc','#f1dba6'],tip:'#b3261e',ink:'#b3261e'},
  {id:'kertas',name:'Pesawat Kertas',cost:34,shape:'paper',body:['#ffffff','#e3ecf4'],wing:['#ffffff','#d5e2ee'],tip:'#ff6a1f',ink:'#ff6a1f'},
  {id:'emas',name:'Jet Emas',cost:42,shape:'jet',body:['#c98a00','#ffe27a'],wing:['#ffe98a','#f5b301'],tip:'#ff6a1f',ink:'#8a5a00'}
];
var TRAILS=[
  {id:'putih',name:'Asap Putih',cost:0,icon:'\u2601\ufe0f'},
  {id:'pelangi',name:'Pelangi',cost:6,icon:'\ud83c\udf08'},
  {id:'bintang',name:'Bintang',cost:16,icon:'\u2728'},
  {id:'gelembung',name:'Gelembung',cost:24,icon:'\u26aa'}
];
var MISSIONS=[
  {id:'combo',n:5,t:'Jawab benar 5 kali beruntun'},
  {id:'perfect',n:1,t:'Selesaikan 1 level tanpa salah'},
  {id:'levels',n:2,t:'Selesaikan 2 level'},
  {id:'balloon',n:2,t:'Dapatkan 2 balon hadiah'},
  {id:'correct',n:30,t:'Jawab benar 30 soal'},
  {id:'endless',n:15,t:'15 benar di mode Tantangan'},
  {id:'gold',n:3,t:'Jawab 3 awan emas'}
];
/* ---------- PREMIUM ----------
   FREE_LEVELS  : jumlah level gratis per tingkat (level 1-4 = Pulau Jawa).
   PREMIUM_URL  : halaman penjelasan & pembelian premium.
   PREMIUM_KEY  : kunci rahasia pembuat kode. HARUS SAMA dengan kunci di alat Pembuat Kode.
                  Kalau diganti, semua kode lama tidak berlaku lagi.
   BLOKIR       : tulis kode yang bocor/dibagikan sembarangan supaya tidak bisa dipakai lagi,
                  contoh: ['HRF-ABCD-2705-WXYZ']
   FREE_SKINS / FREE_TRAILS : koleksi yang bisa dipakai tanpa premium. */
var FREE_LEVELS=4;
var PREMIUM_URL='https://www.hurufa.com/p/premium2.html';
var PREMIUM_KEY='hrf-3Hu7Xa1BFPLVhBiXCkCs';
var BLOKIR=[];
var FREE_SKINS=['oranye','biru'];
var FREE_TRAILS=['putih'];
/* ======================= AKHIR DATA GAME ======================= */

/* ---------- Markup (dibuat lewat JS supaya aman di Blogger) ---------- */
var CL=function(top,dur,del){ return '<div class="pa-cloud" style="top:'+top+'%;animation-duration:'+dur+'s;animation-delay:-'+del+'s">&nbsp;</div>'; };
var SND='<button class="pa-smallbtn pa-soundBtn">\ud83d\udd0a Suara: Nyala</button>';
var EXIT='<button class="pa-smallbtn pa-exit">\u2715 Keluar layar penuh</button>';
function heroBalloon(cx,cy,r,num,c1,c2,c3,cls){
  return '<g class="pa-bob '+cls+'">'
   +'<path d="M'+(cx-r*0.55)+' '+(cy+r*0.8)+' L'+(cx-r*0.22)+' '+(cy+r*1.45)+' M'+(cx+r*0.55)+' '+(cy+r*0.8)+' L'+(cx+r*0.22)+' '+(cy+r*1.45)+'" stroke="#8a5a2b" stroke-width="1.5" fill="none"/>'
   +'<rect x="'+(cx-r*0.3)+'" y="'+(cy+r*1.4)+'" width="'+r*0.6+'" height="'+r*0.42+'" rx="3" fill="#b9773a"/>'
   +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+r+'" ry="'+r*1.08+'" fill="'+c1+'"/>'
   +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+r*0.66+'" ry="'+r*1.08+'" fill="'+c2+'"/>'
   +'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+r*0.3+'" ry="'+r*1.08+'" fill="'+c3+'"/>'
   +'<circle cx="'+cx+'" cy="'+cy+'" r="'+r*0.46+'" fill="#fff"/>'
   +'<text x="'+cx+'" y="'+(cy+r*0.2)+'" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="'+r*0.62+'" fill="#d4560f">'+num+'</text></g>';
}
var HERO='<svg viewBox="0 0 360 210" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
 +'<g fill="#fff" opacity=".95"><circle cx="15" cy="212" r="44"/><circle cx="92" cy="224" r="50"/><circle cx="175" cy="230" r="48"/><circle cx="258" cy="222" r="52"/><circle cx="340" cy="212" r="46"/></g>'
 +heroBalloon(52,118,27,3,'#ff6b5a','#ffd66b','#4aa8ff','')
 +heroBalloon(312,62,30,5,'#4aa8ff','#fff3d6','#ff6b5a','pa-bob2')
 +'<g class="pa-bob pa-bob3">'
 +'<path d="M112 96 L96 56 Q94 49 102 49 L122 49 L150 92 Z" fill="#1f9486"/>'
 +'<path d="M104 100 L80 90 Q72 89 75 97 L96 112 Z" fill="#5cc46a"/>'
 +'<path d="M98 106 C98 82 150 73 214 75 C256 76 286 90 286 106 C286 124 252 135 206 135 C150 135 98 126 98 106 Z" fill="#35b3a4"/>'
 +'<path d="M102 114 C140 125 240 126 284 111 C278 126 248 135 206 135 C160 135 112 128 102 114 Z" fill="#9be6d8"/>'
 +'<path d="M238 84 Q262 86 273 99 L244 99 Z" fill="#dff3ff" stroke="#1f8a7d" stroke-width="3" stroke-linejoin="round"/>'
 +'<circle cx="164" cy="98" r="8" fill="#dff3ff" stroke="#1f8a7d" stroke-width="3"/><circle cx="189" cy="98" r="8" fill="#dff3ff" stroke="#1f8a7d" stroke-width="3"/><circle cx="214" cy="98" r="8" fill="#dff3ff" stroke="#1f8a7d" stroke-width="3"/>'
 +'<text x="128" y="119" font-family="Baloo 2,sans-serif" font-weight="800" font-size="9.5" fill="#0f6f64" text-anchor="middle">hurufa.com</text>'
 +'<path d="M168 112 L222 112 L190 162 Q184 169 175 164 L152 150 Z" fill="#5cc46a" stroke="#3fa552" stroke-width="2" stroke-linejoin="round"/>'
 +'<circle cx="287" cy="106" r="8" fill="#ffc83d"/>'
 +'<ellipse cx="293" cy="106" rx="7" ry="36" fill="#5d6b78" opacity=".22"/><ellipse cx="293" cy="106" rx="3.5" ry="34" fill="#5d6b78" opacity=".6"/>'
 +'</g></svg>';
app.innerHTML=[
'<canvas id="pa-scene" class="pa-cv">&nbsp;</canvas>',
'<div id="pa-hud" class="pa-hide">',
' <div id="pa-pointsBox"><small id="pa-benar">BENAR 0/10</small><span id="pa-points">0</span></div>',
' <div id="pa-targetBox"><small id="pa-targetLabel">BERAPA HASILNYA?</small><span id="pa-target">-</span></div>',
' <div id="pa-timer"><small id="pa-timeLabel">DETIK</small><span id="pa-time">60</span></div>',
' <div id="pa-timebar"><div id="pa-timefill">&nbsp;</div></div>',
'</div>',
'<button class="pa-float pa-off" id="pa-pauseBtn" aria-label="Jeda"><i>&nbsp;</i><i>&nbsp;</i></button>',
'<button class="pa-float pa-off" id="pa-cityBtn" aria-label="Ganti kota"><span>\ud83c\udfd9\ufe0f</span><small>KOTA</small></button>',
'<button class="pa-float pa-off" id="pa-hintBtn" aria-label="Petunjuk">\ud83d\udca1<small id="pa-hintN">3</small></button>',
'<button class="pa-float pa-off" id="pa-turboBtn" aria-label="Turbo: lewati satu soal"><b>\u26fd</b><span>TURBO</span></button>',
'<button class="pa-float pa-off" id="pa-hornBtn" aria-label="Wuss, terbang lebih cepat">WUSS!</button>',

'<div class="pa-overlay" id="pa-startScreen">',
 CL(4,38,8),CL(44,50,30),
' <div class="pa-title">Jelajah<br>Matematika</div>',
' <div class="pa-simTag">Simulasi</div>',
' <div class="pa-tag">Terbang dari Jakarta sampai Makkah<br><b>Awan Jawaban</b> dan <b>Balon Hadiah</b></div>',
' <div class="pa-hero">',HERO,'</div>',
' <div class="pa-pick">Pilih tingkat soal</div>',
' <div class="pa-tiers" id="pa-tiers">&nbsp;</div>',
' <button class="pa-bigbtn" id="pa-startBtn">MULAI \u25b6</button>',
' <div class="pa-row">',SND,EXIT,'</div>',
' <div class="pa-brand">hurufa.com</div>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-levelScreen">',
' <div class="pa-title pa-t2">Peta Terbang</div>',
' <div class="pa-row"><input id="pa-name" type="text" maxlength="16" placeholder="Namamu (wajib)" aria-label="Nama pemain" autocomplete="off"><div class="pa-starTotal" id="pa-starTotal">\u2b50 0</div><button class="pa-crown" id="pa-crownBtn" aria-label="Premium">\ud83d\udc51</button></div>',
' <div id="pa-map" role="group" aria-label="Pilih level">&nbsp;</div>',
' <div id="pa-lockMsg">&nbsp;</div>',
' <div class="pa-row">',
'  <button class="pa-smallbtn pa-accent" id="pa-hangarBtn">\ud83c\udfa8 Hangar</button>',
'  <button class="pa-smallbtn pa-accent" id="pa-misBtn">\ud83c\udfaf Misi</button>',
'  <button class="pa-smallbtn pa-accent" id="pa-endlessBtn">\u267e\ufe0f Tantangan</button>',
' </div>',
' <button class="pa-rapotBig pa-rapotBtn">\ud83d\udcdc Rapot &amp; Bagikan</button>',
' <div class="pa-row">',
'  <button class="pa-smallbtn" id="pa-backBtn">\u25c0</button>',
'  <button class="pa-smallbtn pa-tierBtn" id="pa-tierBtn">\ud83c\udf93 Tingkat</button>',
'  <button class="pa-smallbtn" id="pa-relaxBtn">\u23f1\ufe0f Waktu</button>',
'  <button class="pa-smallbtn pa-soundBtn pa-short">\ud83d\udd0a</button>',
'  <button class="pa-smallbtn pa-exit">\u2715</button>',
' </div>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-tierScreen">',
' <div class="pa-title pa-t2">Ganti Tingkat</div>',
' <div class="pa-tiers pa-tiersBig" id="pa-tiers2">&nbsp;</div>',
' <div class="pa-note">Bintang dan level tiap tingkat disimpan sendiri-sendiri</div>',
' <button class="pa-smallbtn pa-toMap">\u25c0 Kembali ke peta</button>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-rapotScreen">',
' <div class="pa-title pa-t2">Rapot</div>',
' <img id="pa-rapotImg" alt="Rapot pemain">',
' <div id="pa-rapotMsg" class="pa-note">Tekan lama gambar untuk menyimpan</div>',
' <div class="pa-row"><button class="pa-smallbtn pa-accent" id="pa-shareBtn">\ud83d\udce4 Bagikan</button><button class="pa-smallbtn pa-accent" id="pa-saveBtn">\u2b07\ufe0f Simpan</button><button class="pa-smallbtn pa-toMap">\u25c0 Peta</button></div>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-hangarScreen">',
' <div class="pa-title pa-t2">Hangar</div>',
' <div class="pa-starTotal" id="pa-starTotal2">\u2b50 0</div>',
' <div class="pa-panel"><h4>Pesawat</h4><div class="pa-grid" id="pa-skins">&nbsp;</div><h4>Jejak asap</h4><div class="pa-grid" id="pa-trails">&nbsp;</div></div>',
' <div id="pa-hangarMsg" class="pa-note">Kumpulkan bintang untuk membuka koleksi baru</div>',
' <button class="pa-smallbtn pa-toMap">\u25c0 Kembali ke peta</button>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-misScreen">',
' <div class="pa-title pa-t2">Misi Hari Ini</div>',
' <div class="pa-panel" id="pa-misList">&nbsp;</div>',
' <div class="pa-note">Setiap misi selesai = +1 \u2b50. Misi baru muncul setiap hari.</div>',
' <button class="pa-smallbtn pa-toMap">\u25c0 Kembali ke peta</button>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-premScreen">',
' <div class="pa-premBadge">\ud83d\udc51</div>',
' <div class="pa-title pa-t2">Hurufa Premium</div>',
' <div class="pa-premLead" id="pa-premLead">&nbsp;</div>',
' <div class="pa-panel pa-premList" id="pa-premList">&nbsp;</div>',
' <div class="pa-premCode" id="pa-premCodeBox"><input id="pa-code" type="text" maxlength="22" placeholder="HRF-XXXX-XXXX-XXXX" aria-label="Kode premium" autocomplete="off" autocapitalize="characters" spellcheck="false"><button class="pa-smallbtn pa-accent" id="pa-codeBtn">Buka</button></div>',
' <div id="pa-codeMsg" class="pa-codeMsg">&nbsp;</div>',
' <a class="pa-premLink" id="pa-premLink" target="_blank" rel="noopener">\ud83d\udc51 Lihat Premium</a>',
' <button class="pa-smallbtn" id="pa-premBack">\u25c0 Kembali</button>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-cityScreen">',
' <div class="pa-title pa-t2">Ganti Kota</div>',
' <div class="pa-note" id="pa-cityNote">&nbsp;</div>',
' <div class="pa-panel" id="pa-cityPanel"><div class="pa-cityg" id="pa-cityGrid">&nbsp;</div></div>',
' <button class="pa-smallbtn pa-accent" id="pa-cityBack">\u25b6 Lanjut main</button>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-countdown"><div id="pa-countLvl">Level 1</div><div id="pa-countNum">3</div></div>',

'<div class="pa-overlay pa-hidden" id="pa-pauseScreen">',
' <div class="pa-title" style="font-size:50px">Jeda</div>',
' <button class="pa-bigbtn" id="pa-resumeBtn">LANJUT \u25b6</button>',
' <div class="pa-row">',SND,'<button class="pa-smallbtn" id="pa-quitBtn">\ud83d\uddfa\ufe0f Peta</button><button class="pa-smallbtn pa-cityGo">\ud83c\udfd9\ufe0f Ganti kota</button><button class="pa-smallbtn pa-tierBtn">\ud83c\udf93 Ganti tingkat</button>',EXIT,'</div>',
'</div>',

'<div class="pa-overlay pa-hidden" id="pa-endScreen">',
 CL(12,40,12),CL(72,52,26),
' <div class="pa-title pa-t2" id="pa-endTitle">Waktu habis!</div>',
' <div class="pa-stars" id="pa-stars">&nbsp;</div>',
' <div class="pa-stats" id="pa-endStats">&nbsp;</div>',
' <div id="pa-reviewWrap" class="pa-row" style="flex-direction:column;align-items:center;gap:6px">',
'  <div style="font-weight:700">Yuk ulangi soal ini:</div>',
'  <div id="pa-review">&nbsp;</div>',
' </div>',
' <button class="pa-bigbtn" id="pa-againBtn">COBA LAGI \u25b6</button>',
' <div class="pa-row">',
'  <button class="pa-smallbtn" id="pa-retryBtn">\u21bb Ulangi</button>',
'  <button class="pa-smallbtn" id="pa-menuBtn">\ud83d\uddfa\ufe0f Peta</button>',
'  <button class="pa-smallbtn pa-exit">\u2715</button>',
' </div>',
' <button class="pa-rapotBig pa-rapotBtn">\ud83d\udcdc Rapot &amp; Bagikan</button>',
' <div class="pa-brand">hurufa.com &nbsp;|&nbsp; t.me/hurufacom</div>',
'</div>',
'<canvas id="pa-fx" class="pa-cv">&nbsp;</canvas>'
].join('');

var $=function(s){return app.querySelector(s);};
var $$=function(s){return Array.prototype.slice.call(app.querySelectorAll(s));};
var scene=$('#pa-scene'), ctx=scene.getContext('2d'), fx=$('#pa-fx'), fctx=fx.getContext('2d');

/* ---------- Angka & teks soal ---------- */
function arab(n){ return String(n).replace(/[0-9]/g,function(d){ return String.fromCharCode(0x0660+ +d); }); }
function fmt(n,ar){ return ar?arab(n):String(n); }
function rep(s,n){ return new Array(n+1).join(s); }
function opSym(q){ return q.op==='-'?' \u2212 ':q.op==='x'?' \u00d7 ':q.op==='/'?' : ':' + '; }
function ltr(s){ return s.split(' ').map(function(w){ return '\u200E'+w; }).join(' '); }
function hudText(q){
  if(q.pair) return String(q.total);
  if(q.text) return q.text;
  if(q.pic) return rep(q.pic,q.terms[0])+opSym(q)+rep(q.pic,q.terms[1]);
  var s=q.terms.map(function(n,i){ return i===q.miss?'?':fmt(n,q.qAr); }).join(opSym(q));
  if(q.miss>=0) s+=' = '+fmt(q.total,q.qAr);
  if(q.qAr) s=ltr(s);
  return s;
}
function eqText(q){
  var ar=q.qAr||(q.ansAr&&!q.text&&!q.pic);
  var s=q.terms.map(function(n){ return fmt(n,ar); }).join(opSym(q))+' = '+fmt(q.total,ar);
  return ar?ltr(s):s;
}

/* ---------- Simpanan (hanya di perangkat ini) ---------- */
var SKEY='hurufa_pesawat_v3';
var S={tier:1,name:'',prog:[],best:[],statC:[],statT:[],bestEnd:[],bonus:0,skin:'oranye',trail:'putih',redo:[],day:'',mis:[],guided:false,relax:false};
function save(){ try{ localStorage.setItem(SKEY,JSON.stringify(S)); }catch(e){} }
(function(){
  try{
    var raw=localStorage.getItem(SKEY), o=JSON.parse(raw||'{}'), k;
    if(o&&typeof o==='object') for(k in S) if(o[k]!=null&&typeof o[k]===typeof S[k]&&Array.isArray(o[k])===Array.isArray(S[k])) S[k]=o[k];
    if(!raw){ /* bawa koleksi dari versi lama */
      var old=JSON.parse(localStorage.getItem('hurufa_pesawat_v2')||'{}');
      if(old&&typeof old==='object'){ if(typeof old.skin==='string') S.skin=old.skin; if(typeof old.trail==='string') S.trail=old.trail; if(typeof old.bonus==='number') S.bonus=old.bonus; }
    }
  }catch(e){}
  var num=function(v,max){ return Math.max(0,Math.min(max,Math.floor(+v||0))); };
  S.tier=num(S.tier,TIERS.length-1); S.name=String(S.name).slice(0,16); S.bonus=num(S.bonus,9999);
  S.prog=TIERS.map(function(T,t){ return T.levels.map(function(_,i){ return num((S.prog[t]||[])[i],3); }); });
  S.best=TIERS.map(function(T,t){ return T.levels.map(function(_,i){ return num((S.best[t]||[])[i],1e7); }); });
  ['statC','statT','bestEnd'].forEach(function(k){ var a=S[k]; S[k]=TIERS.map(function(_,t){ return num(a[t],1e7); }); });
  S.redo=S.redo.filter(function(q){ return q&&Array.isArray(q.terms)&&typeof q.total==='number'; }).slice(0,6);
  LEVELS=TIERS[S.tier].levels;
})();
function fixItems(){ if(premItem('skin',S.skin)) S.skin=FREE_SKINS[0]; if(premItem('trail',S.trail)) S.trail=FREE_TRAILS[0]; if(!isPremium()) S.relax=false; }
fixItems();
function P(){ return S.prog[S.tier]; }
function B(){ return S.best[S.tier]; }

function unlocked(i){ return i===0||P()[i-1]>0; }
function totalStars(){ var n=S.bonus; S.prog.forEach(function(a){ a.forEach(function(v){ n+=v; }); }); return n; }
function sumArr(a){ return a.reduce(function(x,y){return x+y;},0); }
function byId(arr,id){ for(var i=0;i<arr.length;i++) if(arr[i].id===id) return arr[i]; return arr[0]; }

/* ---------- Kode premium (berlaku untuk semua game hurufa.com di perangkat ini) ---------- */
var PKEY='hurufa_premium', CODE_AB='23456789ABCDEFGHJKMNPQRSTUVWXYZ', BULAN=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
function cyrb53(str,seed){
  var h1=0xdeadbeef^seed,h2=0x41c6ce57^seed,i,ch;
  for(i=0;i<str.length;i++){ ch=str.charCodeAt(i); h1=Math.imul(h1^ch,2654435761); h2=Math.imul(h2^ch,1597334677); }
  h1=Math.imul(h1^(h1>>>16),2246822507); h1^=Math.imul(h2^(h2>>>13),3266489909);
  h2=Math.imul(h2^(h2>>>16),2246822507); h2^=Math.imul(h1^(h1>>>13),3266489909);
  return 4294967296*(2097151&h2)+(h1>>>0);
}
function codeSig(r,ym){ var n=cyrb53(PREMIUM_KEY+'|'+r+'|'+ym,7), o=''; for(var i=0;i<4;i++){ o+=CODE_AB[n%31]; n=Math.floor(n/31); } return o; }
/* hasil: {code, y, m} kalau sah, null kalau salah. Format: HRF-XXXX-YYMM-CCCC (YYMM = berlaku sampai akhir bulan itu) */
function parseCode(t){
  t=String(t||'').toUpperCase().replace(/[^0-9A-Z]/g,'');
  if(t.length!==15||t.slice(0,3)!=='HRF') return null;
  var r=t.slice(3,7), ym=t.slice(7,11).replace(/O/g,'0').replace(/[IL]/g,'1'), c=t.slice(11,15);
  if(!/^\d{4}$/.test(ym)) return null;
  var code='HRF-'+r+'-'+ym+'-'+c;
  if(codeSig(r,ym)!==c||BLOKIR.indexOf(code)>=0) return null;
  var m=+ym.slice(2); if(m<1||m>12) return null;
  return {code:code,y:2000+ +ym.slice(0,2),m:m};
}
function codeActive(c){ if(!c) return false; var end=new Date(c.y,c.m,1); return new Date()<end; }
var PREM=null;
function loadPremium(){ PREM=null; try{ var c=parseCode(localStorage.getItem(PKEY)); if(codeActive(c)) PREM=c; }catch(e){} }
loadPremium();
function isPremium(){ return !!PREM; }
function premLevel(i){ return i>=FREE_LEVELS&&!isPremium(); }
function premItem(kind,id){ return !isPremium()&&(kind==='skin'?FREE_SKINS:FREE_TRAILS).indexOf(id)<0; }
function premUntil(){ return PREM?BULAN[PREM.m-1]+' '+PREM.y:''; }

/* ---------- Misi harian ---------- */
function today(){ var d=new Date(); return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate(); }
function initMissions(){
  if(S.day===today()&&S.mis.length===3) return;
  var d=new Date(), k=d.getFullYear()*372+d.getMonth()*31+d.getDate(), L=MISSIONS.length;
  S.mis=[0,2,4].map(function(o){ return {id:MISSIONS[(k+o)%L].id,v:0,done:false}; });
  S.day=today(); save();
}
function track(id,amt,isMax){
  var hit=false;
  S.mis.forEach(function(m,mi){
    if(m.id!==id||m.done||(mi>0&&!isPremium())) return;
    var def=byId(MISSIONS,id);
    m.v=isMax?Math.max(m.v,amt):m.v+amt; hit=true;
    if(m.v>=def.n){ m.v=def.n; m.done=true; S.bonus++; addFloat('Misi selesai! +1 \u2b50',W/2,H*0.3,'#1a8f4c',2.2); sfxCoins(); }
  });
  if(hit) save();
}

/* ---------- State ---------- */
var W=0,H=0,DPR=1;
var road={x:0,w:0,lane:0};
var car={lane:1,x:0,y:0,w:0,h:0,tilt:0,wob:0};
var gateH=0,hudH=80;
var state='menu', lvl=0, LV=LEVELS[0], theme='day';
var gates=[], decor=[], dust=[], floats=[], parts=[], bullets=[], shots=[], balloons=[], gunSide=1;
var correctN=0,wrongN=0,total=0,streak=0,score=0,timeLeft=60,mistakes=[],redoNew=[],lastKey='',boost=false;
var gateN=0,fuel=0,FUEL=4,hints=3,shield=false,goldLeft=0,rainbowT=0,gotStar=false,turboLock=false,guide=false;
var stormA=0,stormWas=false,lightT=3,light=0;
var scroll=0,speed=0,shake=0,dustT=0,timed=true;

function laneX(i){ return road.x+road.lane*(i+.5); }
function coming(){ for(var i=0;i<gates.length;i++) if(gates[i].state==='coming') return gates[i]; return null; }
function stormOn(){ return state==='run'&&LV.boss&&correctN>=LV.goal-STORM; }
function resize(){
  var r=app.getBoundingClientRect(); W=r.width; H=r.height; if(!W||!H) return;
  DPR=Math.min(window.devicePixelRatio||1,2.5);
  [scene,fx].forEach(function(c){ c.width=Math.round(W*DPR); c.height=Math.round(H*DPR); });
  ctx.setTransform(DPR,0,0,DPR,0,0); fctx.setTransform(DPR,0,0,DPR,0,0);
  layout();
}
function refreshHud(){ var hud=$('#pa-hud'); hudH=hud.classList.contains('pa-hide')?0:hud.offsetTop+hud.offsetHeight; }
function layout(){
  road.w=Math.min(W*0.78,420); road.x=(W-road.w)/2; road.lane=road.w/3;
  car.w=road.lane*0.48; car.h=car.w*1.8;
  car.y=H-car.h*0.7-Math.max(78,H*0.10);
  car.x=laneX(car.lane);
  gateH=road.lane*0.8;
  refreshHud();
  buildDecor();
}

/* ---------- Dekorasi: awan, balon udara, layang-layang, pulau, perahu ---------- */
var COLORS=['#ff6fa1','#ffb02e','#7c5cff','#24a35a','#ff5a3c'];
var MIXES={day:[['cloud',.62],['hot',.14],['kite',.24]],sea:[['cloud',.36],['isle',.34],['boat',.30]],dusk:[['cloud',.6],['kite',.22],['hot',.18]],night:[['cloud',.74],['hot',.26]]};
function newDecor(side,y){
  var r=Math.random(), mix=MIXES[theme], type='cloud', acc=0;
  for(var i=0;i<mix.length;i++){ acc+=mix[i][1]; if(r<acc){ type=mix[i][0]; break; } }
  var s=type==='cloud'?18+Math.random()*26:type==='hot'?11+Math.random()*5:type==='isle'?12+Math.random()*10:7+Math.random()*3;
  var x=side?W*0.5+Math.random()*W*0.6:-W*0.1+Math.random()*W*0.6;
  if(type!=='cloud'){ var sw=Math.max(road.x,24); x=side?road.x+road.w+Math.random()*sw:Math.random()*sw; }
  return {side:side,x:x,y:y,type:type,s:s,c:rand(COLORS),ph:Math.random()*6,sp:0.55+Math.random()*0.3};
}
function buildDecor(){
  decor=[]; var span=H+240, n=Math.ceil(span/90);
  [0,1].forEach(function(side){ for(var k=0;k<n;k++) decor.push(newDecor(side,-120+k*span/n+Math.random()*30)); });
}

/* ---------- Soal & gerbang ---------- */
function newQuestion(){
  var q;
  if(S.redo.length&&!LV.endless&&(gateN===2||gateN===5)){ q=S.redo.shift(); q.tries=0; q.counted=false; q.redo=true; save(); return q; }
  if(teaserDue()){ teaserDone=true; q=S.tier===1?mulTeaser():divTeaser(); q.teaser=true; q.tries=0; return q; }
  if(!LV.endless&&!LV.isl&&gateN%10===6&&(S.tier>0||lvl>=2)){
    var lim=[10,20,99][S.tier], pool=ISLAMI.filter(function(it){ return sumArr(it.n)<=lim; });
    if(pool.length){ var it=rand(pool); q=Q(it.n.slice()); q.text=it.t; q.ansAr=!!LV.ansAr; q.tries=0; return q; }
  }
  var src=LV; if(LV.mix) src=LEVELS[rand(LV.mix)];
  q=src.gen(); q.tens=!!src.tens; q.carry=!!src.carry; q.hund=!!src.hund; q.qAr=!!src.qAr; q.ansAr=!!src.ansAr;
  if(LV.mix&&!q.qAr&&!q.pic&&!q.text&&!q.pair&&!q.ansAr) q.ansAr=Math.random()<0.25;
  q.tries=0; return q;
}
function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)),t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function makeOpts(q){
  var guard=0;
  if(q.pair){
    var N=q.total, set=[[q.terms[0],q.terms[1]]];
    while(set.length<3&&guard++<400){
      var s=N+rand([-2,-1,1,2]), x=ri(1,s-1), y=s-x;
      if(y<1||y>9||x>9||set.some(function(p){ return p[0]===x&&p[1]===y; })) continue;
      set.push([x,y]);
    }
    var order=shuffle([0,1,2]);
    return {labels:order.map(function(k){ return set[k][0]+' + '+set[k][1]; }),correct:order.indexOf(0)};
  }
  var a=q.ans, pref;
  if(q.pref) pref=q.pref.slice();
  else if(q.hund) pref=[a+100,a-100,a+200,a-200];
  else if(q.tens) pref=[a+10,a-10,a+20,a-20];
  else if(q.carry) pref=[a-10,a+1,a-1,a+10];
  else if(a>=20) pref=[a+1,a-1,a+10,a-10,a+2];
  else pref=[a+1,a-1,a+2,a-2,a+3];
  pref=pref.filter(function(x,i,arr){ return x>=1&&x!==a&&arr.indexOf(x)===i; }).slice(0,4);
  var opts=[a];
  while(opts.length<3&&pref.length) opts.push(pref.splice(Math.floor(Math.random()*pref.length),1)[0]);
  while(opts.length<3&&guard++<200){ var z=ri(1,a+5); if(opts.indexOf(z)<0) opts.push(z); }
  shuffle(opts);
  return {labels:opts.map(function(o){ return fmt(o,q.ansAr); }),correct:opts.indexOf(a)};
}
function setHud(q){
  var el=$('#pa-target'), txt=hudText(q), cls='';
  el.textContent=txt;
  if(q.text) cls='pa-text'; else if(q.pic) cls='pa-pic';
  else { if(q.qAr) cls='pa-arnum'; if(txt.length>8) cls+=' pa-xlong'; else if(txt.length>5) cls+=' pa-long'; }
  el.className=cls;
  var ask=q.teaser?'BONUS! INTIP PREMIUM':q.pair?'AWAN MANA JUMLAHNYA':q.miss>=0?'ANGKA BERAPA?':q.pic?(q.op==='-'?'SISA BERAPA BUAH?':'ADA BERAPA BUAH?'):'BERAPA HASILNYA?';
  $('#pa-targetLabel').textContent=(LV.endless||q.pair||q.teaser)?ask:'LEVEL '+(lvl+1)+' \u00b7 '+ask;
  void el.offsetWidth; el.classList.add('pa-pop');
  refreshHud();
}
function spawnGate(rq){
  var q=rq, guard=0;
  if(!q){
    do{ q=newQuestion(); }while(!q.redo&&eqText(q)===lastKey&&guard++<30);
    lastKey=eqText(q); gateN++;
  }
  setHud(q);
  var o=makeOpts(q);
  var g={y:hudH-gateH-12,labels:o.labels,correct:o.correct,state:'coming',pick:-1,q:q,ox:[0,0,0],hint:q.tries>=2,gold:false,swapY:0,wig:0};
  if(goldLeft>0){ g.gold=true; goldLeft--; }
  if(!rq&&!guide&&S.tier>0&&(LV.endless||lvl>=8)&&Math.random()<0.3) g.swapY=hudH+(car.y-hudH)*0.28;
  if(guide){ if(g.correct===1){ var t=g.labels[1]; g.labels[1]=g.labels[2]; g.labels[2]=t; g.correct=2; } g.hint=true; }
  gates.push(g);
  if(!rq&&!guide&&gateN>1&&!balloons.length&&Math.random()<0.3) balloons.push({lane:ri(0,2),y:g.y+gateH+95,r:road.lane*0.2,c:rand(COLORS),ph:Math.random()*6});
  updateBtns();
}
function travelTime(){ return Math.max(LV.tt*0.75,LV.tt-correctN*0.07)/(boost?3.5:1); }
function curSpeed(){
  if(state!=='run') return H*0.22;
  return ((car.y-car.h*0.5)-(hudH-12))/travelTime();
}
function updateHudNums(bump){
  var el=$('#pa-points'); el.textContent=score;
  var b=$('#pa-benar');
  if(LV.endless) b.textContent='BENAR '+correctN;
  else if(stormOn()) b.textContent='BADAI '+(correctN-(LV.goal-STORM))+'/'+STORM;
  else b.textContent='BENAR '+correctN+'/'+LV.goal;
  if(bump){ el.classList.remove('pa-bump'); void el.offsetWidth; el.classList.add('pa-bump'); }
}
function updateBtns(){
  $('#pa-hintN').textContent=hints;
  $('#pa-hintBtn').classList.toggle('pa-dim',hints<=0);
  var tb=$('#pa-turboBtn'), p=Math.round(fuel/FUEL*100);
  tb.classList.toggle('pa-ready',fuel>=FUEL);
  tb.style.background='linear-gradient(to top,'+(fuel>=FUEL?'#24a35a':'#8fd9a8')+' '+p+'%,#dfe7ee '+p+'%)';
}
function popBalloon(bl){
  bl.dead=true; burst(laneX(bl.lane),bl.y,26,0.7); sfxPop();
  var r=Math.random(), x=laneX(bl.lane), y=bl.y-20;
  if(!gotStar&&r<0.22){ gotStar=true; S.bonus++; save(); addFloat('+1 \u2b50',x,y,'#d48a00',1.6,'big'); sfxCoins(); }
  else if(timed&&r<0.6){ timeLeft+=5; addFloat('+5 detik',x,y,'#1a8f4c',1.5); }
  else if(!shield&&r<0.85){ shield=true; addFloat('Perisai!',x,y,'#2b6a9a',1.5); }
  else { fuel=FUEL; addFloat('Tangki penuh!',x,y,'#17803f',1.5); updateBtns(); }
  track('balloon',1);
}
function startStorm(){
  addFloat('Badai! Jawab '+STORM+' soal',W/2,H*0.56,'#1b2c63',2.4); sfxThunder(); light=1; lightT=3;
}
function resolve(g){
  if(g.q.teaser) teaserSeen=true;
  g.state='done'; g.pick=car.lane; total++; S.statT[S.tier]++; boost=false; turboLock=false;
  var q=g.q;
  if(g.pick===g.correct){
    correctN++; streak++; S.statC[S.tier]++;
    var pts=(10+Math.min(streak-1,5)*2)*(g.gold?2:1); score+=pts;
    if(!g.turbo) fuel=Math.min(FUEL,fuel+1);
    burst(laneX(g.correct),g.y+gateH*0.5,g.gold?70:46);
    sfxWhoosh(); if(g.gold) sfxCoins();
    addFloat('Benar!',car.x,car.y-car.h*0.9,'#1a8f4c',1.1,'big');
    addFloat('+'+pts+(streak>1?'  Kombo x'+streak:''),car.x,car.y-car.h*0.9+40,'#d4560f',1.0);
    track('correct',1); track('combo',streak,true); if(g.gold) track('gold',1);
    if(LV.endless){ timeLeft=Math.min(99,timeLeft+2); track('endless',correctN,true); }
    updateHudNums(true);
    if(correctN>=LV.goal){ endGame(true); return; }
    if(streak%5===0){
      goldLeft=3; rainbowT=4; if(timed&&!LV.endless) timeLeft+=3;
      addFloat('Pelangi! 3 awan emas x2',W/2,H*0.45,'#d4560f',2); burst(W/2,H*0.45,60,1.4); sfxCoins();
    }
    if(LV.boss&&correctN===LV.goal-STORM) startStorm(); else if(streak%5!==0) praise(false);
    updateHudNums(false);
    spawnGate();
  }else{
    streak=0; q.tries=(q.tries||0)+1; shake=6; car.wob=1; sfxSoft();
    if(shield){ shield=false; addFloat('Perisai melindungi!',car.x,car.y-car.h*0.9,'#2b6a9a',1.4); }
    else if(!q.counted){ wrongN++; q.counted=true; }
    var eq=eqText(q);
    addFloat(eq,W/2,g.y-10,'#1a8f4c',2.0,'ar');
    addFloat('Coba lagi ya!',car.x,car.y-car.h*0.9,'#d4560f',1.3);
    if(mistakes.indexOf(eq)<0){
      mistakes.push(eq);
      var c={}; for(var k in q) if(k!=='tries'&&k!=='counted'&&k!=='redo') c[k]=q[k];
      redoNew.push(c);
    }
    spawnGate(q);
  }
}
function keepRedo(){
  redoNew.forEach(function(c){ if(S.redo.length<6) S.redo.push(c); });
  redoNew=[]; save();
}

/* ---------- Soal bonus "intip premium" di akhir level gratis terakhir ---------- */
var teaserDone=false, teaserSeen=false;
function teaserDue(){ return !teaserDone&&!isPremium()&&!LV.endless&&lvl===FREE_LEVELS-1&&S.tier>0&&correctN===LV.goal-1; }
function mulTeaser(){ return mul([2,5,10],1,5); }
function divTeaser(){ return div([2,3,4,5]); }

/* ---------- Pujian Masya Allah (sesekali saja) ---------- */
var praiseN=0, praiseT=-1e9, PRAISE_AT=[3,7,12,18,26,34];
function praise(force){
  var now=performance.now();
  if(praiseN>=3||now-praiseT<20000) return;
  if(!force&&PRAISE_AT.indexOf(streak)<0) return;
  praiseN++; praiseT=now;
  addFloat('\u0645\u064e\u0627 \u0634\u064e\u0627\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f',W/2,H*0.33,'#1a8f4c',2.0,'arab');
  addFloat('Masya Allah!',W/2,H*0.33+50,'#d4560f',2.0,'big');
  burst(W/2,H*0.36,40,1);
}

/* ---------- Loop ---------- */
var last=performance.now();
function frame(now){
  var dt=Math.min(0.05,(now-last)/1000); last=now;
  update(dt); render(); renderFx(dt);
  requestAnimationFrame(frame);
}
function update(dt){
  if(state==='pause') return;
  speed+=(curSpeed()-speed)*Math.min(1,dt*(boost?6:3));
  scroll+=speed*dt;
  decor.forEach(function(d){ d.y+=speed*dt*(d.type==='cloud'?d.sp:1); if(d.y>H+60){ var nd=newDecor(d.side,d.y-(H+240)); for(var k in nd) d[k]=nd[k]; } });
  var tx=laneX(car.lane);
  car.tilt+=(((tx-car.x)/road.lane)*0.35-car.tilt)*Math.min(1,dt*10);
  car.x+=(tx-car.x)*Math.min(1,dt*14);
  car.wob=Math.max(0,car.wob-dt*2.2);
  shake=Math.max(0,shake-dt*40); light=Math.max(0,light-dt*3); rainbowT=Math.max(0,rainbowT-dt);
  stormA+=((stormOn()?1:0)-stormA)*Math.min(1,dt*2);
  if(stormOn()){ lightT-=dt; if(lightT<=0){ lightT=2.5+Math.random()*3; light=1; sfxThunder(); } }
  if(state==='run'||state==='count'){
    dustT+=dt;
    if(dustT>(boost?0.03:0.06)){
      dustT=0;
      dust.push({x:car.x+(Math.random()<.5?-1:1)*car.w*0.75,y:car.y+car.h*0.05,r:3+Math.random()*3,a:.5,c:rand(RB)});
    }
  }
  dust.forEach(function(p){ p.y+=speed*dt*0.9; p.r+=dt*14; p.a-=dt*0.9; });
  dust=dust.filter(function(p){return p.a>0;});
  /* bintang yang ditembakkan pesawat */
  shots.forEach(function(s){ s.d-=dt; });
  shots=shots.filter(function(s){
    if(s.d>0) return true;
    gunSide=-gunSide;
    bullets.push({x:car.x+gunSide*car.w*0.32,y:car.y-car.h*0.35,vy:-Math.max(900,H*1.7),life:0});
    sfxStar(); return false;
  });
  bullets.forEach(function(b){
    b.y+=b.vy*dt; b.life+=dt;
    balloons.forEach(function(bl){
      if(b.dead||bl.dead) return;
      if(Math.abs(b.x-laneX(bl.lane))<road.lane*0.42&&b.y<=bl.y+bl.r&&b.y>=bl.y-bl.r-24){ b.dead=true; popBalloon(bl); }
    });
    gates.forEach(function(g){
      if(b.dead||g.state!=='coming') return;
      var k=Math.floor((b.x-road.x)/road.lane);
      if(k<0||k>2) return;
      if(b.y<=g.y+gateH&&b.y>=g.y-20){ b.dead=true; burst(b.x,g.y+gateH,5,0.25); g.hitK=k; g.hitT=0.15; }
    });
  });
  gates.forEach(function(g){
    if(g.hitT) g.hitT=Math.max(0,g.hitT-dt);
    g.wig+=dt;
    for(var k=0;k<3;k++){ var o=g.ox[k]; if(o){ var st=dt*road.lane*2.4; g.ox[k]=Math.abs(o)<=st?0:o-(o>0?st:-st); } }
  });
  bullets=bullets.filter(function(b){ return !b.dead&&b.y>-30; });
  floats.forEach(function(f){ f.t+=dt; f.y-=dt*50; });
  floats=floats.filter(function(f){return f.t<f.life;});
  if(state==='run'){
    var g0=coming();
    var frozen=guide&&g0&&g0.y>=hudH+(car.y-hudH)*0.22;
    if(!frozen){
      for(var i=0;i<gates.length&&state==='run';i++){
        var g=gates[i]; g.y+=speed*dt;
        if(g.state!=='coming') continue;
        if(g.swapY&&g.y>=g.swapY){
          g.swapY=0;
          var a=ri(0,2), b=(a+ri(1,2))%3, t=g.labels[a]; g.labels[a]=g.labels[b]; g.labels[b]=t;
          if(g.correct===a) g.correct=b; else if(g.correct===b) g.correct=a;
          g.ox[a]=(b-a)*road.lane; g.ox[b]=(a-b)*road.lane; sfxSwish();
        }
        if(g.y+gateH>=car.y-car.h*0.5) resolve(g);
      }
      gates=gates.filter(function(g){return g.y<H+20;});
      balloons.forEach(function(bl){
        bl.y+=speed*dt;
        if(!bl.dead&&bl.lane===car.lane&&bl.y+bl.r>=car.y-car.h*0.45&&bl.y<car.y+car.h*0.3) popBalloon(bl);
      });
      balloons=balloons.filter(function(bl){ return !bl.dead&&bl.y<H+60; });
      if(state==='run'){
        if(timed){ timeLeft-=dt*(boost?3.5:1); if(timeLeft<=0){ timeLeft=0; updateTimer(); endGame(false); return; } }
        updateTimer(); engineUpdate();
      }
    }
  }else if(state==='end'){
    gates.forEach(function(g){ g.y+=speed*dt; });
    balloons.forEach(function(bl){ bl.y+=speed*dt; });
  }
}
function updateTimer(){
  if(!timed){ $('#pa-time').textContent='\u221e'; $('#pa-timer').classList.remove('pa-low'); $('#pa-timefill').style.width='100%'; return; }
  var s=Math.ceil(timeLeft);
  $('#pa-time').textContent=s; $('#pa-timer').classList.toggle('pa-low',s<=10);
  $('#pa-timefill').style.width=Math.min(100,timeLeft/LV.time*100)+'%';
}

/* ---------- Gambar ---------- */
var RB=['#ff5a5a','#ffa23d','#ffd23f','#5ccf6a','#3da5ff','#9b6bff'];
function rr(c,x,y,w,h,r){ c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r); c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath(); }
function circ(c,x,y,r,col){ c.fillStyle=col; c.beginPath(); c.arc(x,y,r,0,Math.PI*2); c.fill(); }
function circle(x,y,r,col){ circ(ctx,x,y,r,col); }
function star(c,x,y,r,col,rot){
  c.fillStyle=col; c.beginPath();
  for(var i=0;i<10;i++){ var a=(rot||0)-Math.PI/2+i*Math.PI/5, q=i%2?r*0.45:r; c.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q); }
  c.closePath(); c.fill();
}
function drawCloud(d){
  var x=d.x,y=d.y,s=d.s, col=theme==='night'?'#c9d4f2':theme==='dusk'?'#fff1e6':'#ffffff';
  ctx.globalAlpha=theme==='night'?0.75:0.92;
  circle(x+4,y+6,s*0.9,'rgba(40,80,140,.16)');
  circle(x-s*0.9,y+s*0.15,s*0.62,col); circle(x+s*0.9,y+s*0.2,s*0.58,col);
  circle(x-s*0.3,y-s*0.25,s*0.78,col); circle(x+s*0.35,y-s*0.1,s*0.7,col);
  ctx.fillStyle=col; rr(ctx,x-s*1.4,y,s*2.8,s*0.75,s*0.37); ctx.fill();
  ctx.globalAlpha=1;
}
function drawHot(d){ /* balon udara, tanpa penumpang */
  var x=d.x,y=d.y,s=d.s;
  ctx.strokeStyle='#8a5a2b'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(x-s*0.5,y+s*0.6); ctx.lineTo(x-s*0.25,y+s*1.25); ctx.moveTo(x+s*0.5,y+s*0.6); ctx.lineTo(x+s*0.25,y+s*1.25); ctx.stroke();
  ctx.fillStyle='#a8642c'; ctx.fillRect(x-s*0.28,y+s*1.2,s*0.56,s*0.4);
  circle(x,y,s,d.c);
  ctx.fillStyle='rgba(255,255,255,.55)'; ctx.beginPath(); ctx.ellipse(x,y,s*0.35,s,0,0,Math.PI*2); ctx.fill();
}
function drawKite(d){ /* layang-layang */
  var x=d.x,y=d.y,s=d.s*1.5, sw=Math.sin(performance.now()/500+d.ph)*0.2;
  ctx.save(); ctx.translate(x,y); ctx.rotate(sw);
  ctx.fillStyle=d.c; ctx.beginPath(); ctx.moveTo(0,-s); ctx.lineTo(s*0.7,0); ctx.lineTo(0,s*1.2); ctx.lineTo(-s*0.7,0); ctx.closePath(); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.8)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(0,-s); ctx.lineTo(0,s*1.2); ctx.moveTo(-s*0.7,0); ctx.lineTo(s*0.7,0); ctx.stroke();
  ctx.strokeStyle=d.c; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(0,s*1.2); ctx.quadraticCurveTo(s*0.6,s*1.7,0,s*2.2); ctx.quadraticCurveTo(-s*0.6,s*2.7,0,s*3.1); ctx.stroke();
  ctx.restore();
}
function drawIsle(d){ /* pulau kecil dilihat dari atas */
  var x=d.x,y=d.y,s=d.s;
  ctx.fillStyle='rgba(255,255,255,.35)'; ctx.beginPath(); ctx.ellipse(x,y,s*1.55,s*1.15,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#f6e2a8'; ctx.beginPath(); ctx.ellipse(x,y,s*1.3,s*0.95,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#3fae62'; ctx.beginPath(); ctx.ellipse(x,y,s*0.95,s*0.65,0,0,Math.PI*2); ctx.fill();
  circle(x-s*0.3,y-s*0.1,s*0.3,'#2e9450'); circle(x+s*0.35,y+s*0.1,s*0.25,'#2e9450');
}
function drawBoat(d){ /* perahu layar kosong */
  var x=d.x,y=d.y,s=d.s*1.3;
  ctx.fillStyle='rgba(255,255,255,.5)'; ctx.beginPath(); ctx.ellipse(x,y+s*1.2,s*0.35,s*0.9,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#a8642c'; ctx.beginPath(); ctx.moveTo(x,y-s); ctx.quadraticCurveTo(x+s*0.6,y,x+s*0.4,y+s); ctx.lineTo(x-s*0.4,y+s); ctx.quadraticCurveTo(x-s*0.6,y,x,y-s); ctx.fill();
  ctx.fillStyle='#ffffff'; ctx.beginPath(); ctx.moveTo(x,y-s*0.6); ctx.lineTo(x+s*0.75,y+s*0.4); ctx.lineTo(x,y+s*0.4); ctx.closePath(); ctx.fill();
}
var SKY={day:['#6cc4f5','#c4ecff'],sea:['#1f93cf','#7fd8f0'],dusk:['#ff8f6b','#ffd9a0'],night:['#101d47','#3b4f96']};
function drawSky(){
  var sky=ctx.createLinearGradient(0,0,0,H), cs=SKY[theme], y, i;
  sky.addColorStop(0,cs[0]); sky.addColorStop(1,cs[1]);
  ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
  var st=150, off=(scroll*0.4)%st;
  if(theme==='night'){
    for(i=0;i<46;i++){
      var sx=(i*89.7)%W, sy=((i*57.3+scroll*0.12)%(H+20))-10, tw=0.5+0.5*Math.sin(performance.now()/400+i);
      circle(sx,sy,1+(i%3)*0.6,'rgba(255,255,255,'+(0.35+tw*0.5)+')');
    }
    circle(W-40,hudH+44,22,'#ffe9a8'); circle(W-31,hudH+38,19,cs[0]); /* bulan sabit polos */
  }else if(theme==='sea'){
    ctx.strokeStyle='rgba(255,255,255,.4)'; ctx.lineWidth=2; ctx.lineCap='round';
    var wo=scroll%70;
    for(y=wo-70;y<H+70;y+=70) for(i=0;i<5;i++){ var wx=((i*113+Math.floor((y-wo)/70+scroll/70)*61)%W+W)%W; ctx.beginPath(); ctx.moveTo(wx-12,y); ctx.quadraticCurveTo(wx,y-7,wx+12,y); ctx.stroke(); }
  }else{
    var sc=theme==='dusk'?'#ff7a3d':'#ffe27a';
    circle(W-38,hudH+40,theme==='dusk'?44:34,theme==='dusk'?'rgba(255,170,90,.4)':'rgba(255,225,120,.35)'); circle(W-38,hudH+40,theme==='dusk'?28:22,sc);
  }
  if(theme!=='sea'){
    ctx.fillStyle=theme==='night'?'rgba(255,255,255,.12)':'rgba(255,255,255,.35)';
    for(y=off-st;y<H+st;y+=st){ var k=Math.round((y-off)/st-scroll*0.4/st); var cx=((k*97)%W+W)%W; rr(ctx,cx-60,y,120,22,11); ctx.fill(); }
  }
  /* jalur terbang */
  ctx.fillStyle='rgba(255,255,255,.10)'; ctx.fillRect(road.x,0,road.w,H);
  ctx.fillStyle='rgba(255,255,255,.7)';
  var dl=22, o3=scroll%(dl*2);
  for(i=0;i<=3;i++){ var lx=road.x+road.lane*i-1.5; for(y=o3-dl*2;y<H;y+=dl*2){ rr(ctx,lx,y,3,dl,1.5); ctx.fill(); } }
  decor.forEach(function(d){ if(d.type==='hot') drawHot(d); else if(d.type==='kite') drawKite(d); else if(d.type==='isle') drawIsle(d); else if(d.type==='boat') drawBoat(d); });
}
function drawStorm(){
  if(stormA<0.02) return;
  ctx.fillStyle='rgba(30,40,70,'+(0.42*stormA)+')'; ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(220,235,255,'+(0.55*stormA)+')'; ctx.lineWidth=2; ctx.lineCap='round';
  var t=performance.now()/1000;
  for(var i=0;i<34;i++){
    var x=((i*71.3+t*60)%(W+40))-20, y=((i*133.7+t*(620+i%5*60))%(H+60))-30;
    ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x-6,y+20); ctx.stroke();
  }
  if(light>0){ ctx.fillStyle='rgba(255,255,255,'+(light*0.5)+')'; ctx.fillRect(0,0,W,H); }
}
function drawRainbow(){
  if(rainbowT<=0) return;
  var a=Math.min(1,rainbowT)*0.75, R=W*0.62, cy=H*0.62;
  ctx.globalAlpha=a; ctx.lineWidth=9;
  RB.forEach(function(c,i){ ctx.strokeStyle=c; ctx.beginPath(); ctx.arc(W/2,cy,R-i*9,Math.PI,0); ctx.stroke(); });
  ctx.globalAlpha=1;
}
function drawGate(g){
  var y=g.y, ly=y+gateH+10, bh=4;
  RB.forEach(function(c,i){ ctx.fillStyle=c; ctx.fillRect(road.x,ly+i*bh,road.w,bh); });
  circle(road.x,ly+bh*3,bh*4,'#fff'); circle(road.x+road.w,ly+bh*3,bh*4,'#fff');
  ctx.textAlign='center'; ctx.textBaseline='middle';
  g.labels.forEach(function(lb,k){
    var bw=road.lane*0.86, bx=road.x+road.lane*k+(road.lane-bw)/2+g.ox[k], by=y;
    if(g.state==='coming'&&g.hitT&&g.hitK===k) bx+=(Math.random()-.5)*6;
    var isHint=g.state==='coming'&&g.hint&&k===g.correct;
    if(isHint) by+=Math.sin(g.wig*9)*4;
    var fill=g.gold?'#fff3b8':'#ffffff', stroke=g.gold?'#f5b301':'#7cc4f2';
    if(g.state==='done'){
      if(k===g.correct){ fill='#d6f7e1'; stroke='#24a35a'; }
      else if(k===g.pick){ fill='#ffe9d6'; stroke='#f08a3c'; }
      else { fill='#eef0f2'; stroke='#c4cad2'; }
    }
    if(isHint){ ctx.fillStyle='rgba(255,210,63,'+(0.45+0.3*Math.sin(g.wig*9))+')'; rr(ctx,bx-7,by-7,bw+14,gateH+14,20); ctx.fill(); stroke='#f5a300'; }
    ctx.fillStyle='rgba(0,0,0,.22)'; rr(ctx,bx+3,by+5,bw,gateH,14); ctx.fill();
    ctx.fillStyle=fill; rr(ctx,bx,by,bw,gateH,14); ctx.fill();
    ctx.lineWidth=4; ctx.strokeStyle=stroke; rr(ctx,bx+2,by+2,bw-4,gateH-4,12); ctx.stroke();
    ctx.fillStyle='#1d2b3a';
    if(g.q.pair){ ctx.font='800 '+(gateH*0.36)+'px "Baloo 2",sans-serif'; ctx.fillText(lb,bx+bw/2,by+gateH*0.55,bw*0.88); }
    else if(g.q.ansAr){ ctx.font='700 '+(gateH*0.6)+'px "Noto Naskh Arabic","Amiri",serif'; ctx.fillText(lb,bx+bw/2,by+gateH*0.56,bw*0.86); }
    else { ctx.font='800 '+(gateH*(lb.length>=4?0.4:lb.length===3?0.48:0.58))+'px "Baloo 2",sans-serif'; ctx.fillText(lb,bx+bw/2,by+gateH*0.58,bw*0.86); }
    if(g.gold&&g.state==='coming') star(ctx,bx+bw-9,by+9,9,'#f5a300',g.wig);
    if(g.state==='done'&&k===g.correct){
      circle(bx+bw-8,by+8,11,'#24a35a');
      ctx.font='800 14px "Baloo 2",sans-serif'; ctx.fillStyle='#fff'; ctx.fillText('\u2713',bx+bw-8,by+9);
    }
  });
}
function drawBalloons(){
  balloons.forEach(function(bl){
    var x=laneX(bl.lane)+Math.sin(performance.now()/500+bl.ph)*4, y=bl.y, r=bl.r;
    ctx.strokeStyle='rgba(255,255,255,.9)'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.moveTo(x,y+r*1.15); ctx.quadraticCurveTo(x+6,y+r*1.7,x,y+r*2.2); ctx.stroke();
    ctx.fillStyle=bl.c; ctx.beginPath(); ctx.ellipse(x,y,r,r*1.15,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x-4,y+r*1.12); ctx.lineTo(x+4,y+r*1.12); ctx.lineTo(x,y+r*1.3); ctx.closePath(); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.55)'; ctx.beginPath(); ctx.ellipse(x-r*0.35,y-r*0.4,r*0.2,r*0.32,-0.5,0,Math.PI*2); ctx.fill();
    /* kotak hadiah */
    ctx.fillStyle='#fff'; rr(ctx,x-r*0.42,y+r*2.15,r*0.84,r*0.7,3); ctx.fill();
    ctx.fillStyle='#ff5a3c'; ctx.fillRect(x-r*0.08,y+r*2.15,r*0.16,r*0.7); ctx.fillRect(x-r*0.42,y+r*2.42,r*0.84,r*0.14);
  });
}
/* Pesawat: dipakai di permainan dan di hangar */
function drawPlane(c,x,y,w,h,sk,roll,t){
  c.save(); c.translate(x,y); c.rotate(roll*0.6);
  c.textAlign='center'; c.textBaseline='middle';
  var bg=c.createLinearGradient(-w*0.1,0,w*0.1,0); bg.addColorStop(0,sk.body[0]); bg.addColorStop(.5,sk.body[1]); bg.addColorStop(1,sk.body[0]);
  var wg=c.createLinearGradient(0,-h*0.1,0,h*0.2); wg.addColorStop(0,sk.wing[0]); wg.addColorStop(1,sk.wing[1]);
  if(sk.shape==='paper'){
    c.fillStyle='rgba(29,79,122,.18)'; c.beginPath(); c.moveTo(8,-h/2+14); c.lineTo(w*0.42+8,h*0.45+14); c.lineTo(8,h*0.3+14); c.lineTo(-w*0.42+8,h*0.45+14); c.closePath(); c.fill();
    c.fillStyle=wg; c.beginPath(); c.moveTo(0,-h/2); c.lineTo(w*0.42,h*0.45); c.lineTo(0,h*0.28); c.lineTo(-w*0.42,h*0.45); c.closePath(); c.fill();
    c.fillStyle='#c9d6e2'; c.beginPath(); c.moveTo(0,-h/2); c.lineTo(w*0.09,h*0.36); c.lineTo(0,h*0.28); c.lineTo(-w*0.09,h*0.36); c.closePath(); c.fill();
    c.strokeStyle=sk.tip; c.lineWidth=2; c.beginPath(); c.moveTo(0,-h/2); c.lineTo(w*0.42,h*0.45); c.moveTo(0,-h/2); c.lineTo(-w*0.42,h*0.45); c.stroke();
    c.fillStyle=sk.ink; c.font='800 '+Math.max(6,h*0.09)+'px "Baloo 2",sans-serif';
    c.save(); c.translate(w*0.17,h*0.2); c.rotate(1.15); c.fillText('hurufa.com',0,0,h*0.5); c.restore();
    c.restore(); return;
  }
  var jet=sk.shape==='jet';
  /* bayangan */
  c.save(); c.translate(10,18); c.scale(0.9,0.9); c.globalAlpha=.18; c.fillStyle='#1d4f7a';
  rr(c,-w/2,-h*0.08,w,h*0.2,h*0.1); c.fill(); rr(c,-w*0.11,-h/2,w*0.22,h,w*0.11); c.fill(); c.restore();
  /* sayap */
  c.save(); c.scale(1-Math.abs(roll)*0.25,1);
  if(jet){
    c.fillStyle=wg; c.beginPath(); c.moveTo(0,-h*0.16); c.lineTo(w/2,h*0.16); c.lineTo(w/2,h*0.26); c.lineTo(0,h*0.12); c.lineTo(-w/2,h*0.26); c.lineTo(-w/2,h*0.16); c.closePath(); c.fill();
    c.fillStyle=sk.tip; rr(c,-w/2-2,h*0.13,w*0.07,h*0.16,3); c.fill(); rr(c,w/2-w*0.07+2,h*0.13,w*0.07,h*0.16,3); c.fill();
    c.fillStyle=sk.ink; c.font='800 '+Math.max(6,h*0.085)+'px "Baloo 2",sans-serif';
    c.fillText('hurufa',-w*0.25,h*0.115,w*0.2); c.fillText('.com',w*0.25,h*0.115,w*0.18);
  }else{
    if(sk.shape==='bi'){ c.fillStyle=sk.wing[1]; rr(c,-w*0.42,h*0.06,w*0.84,h*0.18,h*0.09); c.fill(); c.fillStyle=sk.body[0]; c.fillRect(-w*0.3,h*0.02,w*0.025,h*0.14); c.fillRect(w*0.275,h*0.02,w*0.025,h*0.14); }
    c.fillStyle=wg; rr(c,-w/2,-h*0.1,w,h*0.22,h*0.11); c.fill();
    c.fillStyle=sk.tip; rr(c,-w/2,-h*0.1,w*0.12,h*0.22,h*0.11); c.fill(); rr(c,w/2-w*0.12,-h*0.1,w*0.12,h*0.22,h*0.11); c.fill();
    c.fillStyle=sk.ink; c.font='800 '+Math.max(7,h*0.12)+'px "Baloo 2",sans-serif';
    c.fillText('hurufa',-w*0.24,h*0.012,w*0.24); c.fillText('.com',w*0.24,h*0.012,w*0.2);
  }
  c.restore();
  /* sayap ekor */
  c.fillStyle=sk.wing[0]; rr(c,-w*0.22,h*0.34,w*0.44,h*0.1,h*0.05); c.fill();
  /* badan */
  c.fillStyle=bg; c.beginPath();
  c.moveTo(0,-h/2); c.bezierCurveTo(w*0.13,-h/2,w*0.11,-h*0.2,w*0.1,0); c.lineTo(w*0.05,h*0.46); c.quadraticCurveTo(0,h*0.5,-w*0.05,h*0.46); c.lineTo(-w*0.1,0); c.bezierCurveTo(-w*0.11,-h*0.2,-w*0.13,-h/2,0,-h/2); c.fill();
  c.fillStyle=sk.body[0]; rr(c,-w*0.018,h*0.26,w*0.036,h*0.22,3); c.fill();
  /* kokpit kosong */
  c.fillStyle='#2b6a9a'; c.beginPath(); c.ellipse(0,-h*0.2,w*0.06,h*0.1,0,0,Math.PI*2); c.fill();
  c.fillStyle='rgba(255,255,255,.6)'; c.beginPath(); c.ellipse(-w*0.02,-h*0.24,w*0.018,h*0.04,0,0,Math.PI*2); c.fill();
  if(jet){
    c.fillStyle='rgba(255,170,40,'+(0.6+0.3*Math.sin(t*30))+')'; c.beginPath(); c.moveTo(-w*0.04,h*0.48); c.lineTo(0,h*(0.62+0.05*Math.sin(t*40))); c.lineTo(w*0.04,h*0.48); c.closePath(); c.fill();
  }else{
    c.save(); c.translate(0,-h/2+2); circ(c,0,0,w*0.035,'#1d2b3a');
    var a=t*40; c.fillStyle='rgba(40,50,60,.55)';
    for(var i=0;i<2;i++){ c.save(); c.rotate(a+i*Math.PI); c.scale(1,0.25); c.beginPath(); c.ellipse(w*0.1,0,w*0.1,w*0.035,0,0,Math.PI*2); c.fill(); c.restore(); }
    c.restore();
  }
  c.restore();
}
function drawCar(){
  var t=performance.now()/1000, y=car.y+Math.sin(t*2.5)*2;
  var roll=car.tilt+Math.sin(car.wob*20)*car.wob*0.25;
  if(shield){ ctx.strokeStyle='rgba(61,165,255,'+(0.55+0.25*Math.sin(t*5))+')'; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(car.x,y,car.w*1.15,0,Math.PI*2); ctx.stroke(); ctx.fillStyle='rgba(61,165,255,.12)'; ctx.fill(); }
  drawPlane(ctx,car.x,y,car.w*1.9,car.h*0.95,byId(SKINS,S.skin),roll,t);
}
function drawDust(){
  var tr=S.trail;
  dust.forEach(function(p){
    if(tr==='bintang'){ ctx.globalAlpha=Math.min(1,p.a*2); star(ctx,p.x,p.y,p.r*0.9,'#ffd23f',p.r); ctx.globalAlpha=1; }
    else if(tr==='gelembung'){ ctx.strokeStyle='rgba(255,255,255,'+Math.min(1,p.a*2)+')'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.stroke(); }
    else if(tr==='pelangi'){ ctx.globalAlpha=Math.min(1,p.a*1.6); circle(p.x,p.y,p.r,p.c); ctx.globalAlpha=1; }
    else { ctx.fillStyle='rgba(255,255,255,'+p.a+')'; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }
  });
}
function drawBullets(){
  bullets.forEach(function(b){
    var tl=Math.min(40,b.life*900);
    var tg=ctx.createLinearGradient(0,b.y,0,b.y+tl);
    tg.addColorStop(0,'rgba(255,225,120,.7)'); tg.addColorStop(1,'rgba(255,225,120,0)');
    ctx.fillStyle=tg; rr(ctx,b.x-3,b.y,6,tl,3); ctx.fill();
    star(ctx,b.x,b.y,9,'#ffd23f',b.life*12); star(ctx,b.x,b.y,4.5,'#fff',b.life*12);
  });
}
function drawGuide(){
  var g=coming(); if(!guide||!g) return;
  var t=performance.now()/1000, x=laneX(g.correct), y=car.y-car.h*0.2+Math.sin(t*5)*8;
  ctx.strokeStyle='rgba(255,255,255,'+(0.5+0.4*Math.sin(t*5))+')'; ctx.lineWidth=5;
  ctx.beginPath(); ctx.arc(x,car.y-car.h*0.25,26+Math.sin(t*5)*5,0,Math.PI*2); ctx.stroke();
  ctx.font='46px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top'; ctx.fillStyle='#1d2b3a';
  ctx.fillText('\ud83d\udc46',x,y);
  ctx.font='800 20px "Baloo 2",sans-serif'; ctx.textBaseline='middle'; ctx.lineWidth=6; ctx.strokeStyle='#fff'; ctx.lineJoin='round';
  ctx.strokeText('Ketuk jalur yang benar!',W/2,H*0.5); ctx.fillText('Ketuk jalur yang benar!',W/2,H*0.5);
}
function fire(){
  if(state!=='run'||shots.length>6) return;
  [0.12,0.2,0.28,0.36].forEach(function(d){ shots.push({d:d}); });
}
function render(){
  if(!W) return;
  ctx.save();
  if(shake>0) ctx.translate((Math.random()-.5)*shake,(Math.random()-.5)*shake);
  drawSky();
  decor.forEach(function(d){ if(d.type==='cloud') drawCloud(d); });
  drawStorm();
  drawRainbow();
  gates.forEach(drawGate);
  drawBalloons();
  drawDust();
  drawBullets();
  drawCar();
  drawGuide();
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.lineJoin='round';
  floats.forEach(function(f){
    var a=1-Math.max(0,(f.t-f.life*0.6)/(f.life*0.4));
    var sc=f.kind==='big'?Math.min(1,0.5+f.t*5):1;
    ctx.globalAlpha=a;
    if(f.kind==='arab'){ ctx.font='700 '+(44*Math.min(1,0.6+f.t*4))+'px "Noto Naskh Arabic","Amiri",serif'; ctx.lineWidth=9; ctx.strokeStyle='#fff'; ctx.strokeText(f.text,f.x,f.y); ctx.fillStyle=f.c; ctx.fillText(f.text,f.x,f.y); return; }
    var sz=f.kind==='big'?50*sc:f.kind==='ar'?(f.text.length>16?22:f.text.length>11?28:34):22;
    ctx.font='800 '+sz+'px "Baloo 2","Noto Naskh Arabic",sans-serif';
    ctx.lineWidth=f.kind==='big'?9:6; ctx.strokeStyle='#fff';
    ctx.strokeText(f.text,f.x,f.y); ctx.fillStyle=f.c; ctx.fillText(f.text,f.x,f.y);
  });
  ctx.globalAlpha=1;
  ctx.restore();
}
function addFloat(text,x,y,c,life,kind){
  if(!W) return;
  ctx.font='800 22px "Baloo 2",sans-serif';
  var half=Math.min(W/2-6,ctx.measureText(text).width*(kind==='big'?1.2:0.55)+8);
  x=Math.max(half,Math.min(W-half,x));
  floats.push({text:text,x:x,y:y,c:c,t:0,life:life||1.1,kind:kind||''});
}

/* ---------- Konfeti ---------- */
var CC=['#ff7a2f','#ffd23f','#24a35a','#3da5ff','#ff5d8f','#9b6bff','#ffffff'];
function burst(x,y,n,spread){
  spread=spread||1;
  for(var i=0;i<n;i++) parts.push({x:x,y:y,vx:(Math.random()-.5)*560*spread,vy:-Math.random()*520-140,g:900,
    w:6+Math.random()*6,h:8+Math.random()*9,r:Math.random()*6,vr:(Math.random()-.5)*14,
    c:rand(CC),life:1.4+Math.random(),t:0,circ:Math.random()<.25});
}
function rain(n){
  for(var i=0;i<n;i++) parts.push({x:Math.random()*W,y:-20-Math.random()*H*0.6,vx:(Math.random()-.5)*90,vy:80+Math.random()*120,g:60,
    w:7+Math.random()*6,h:9+Math.random()*9,r:Math.random()*6,vr:(Math.random()-.5)*10,
    c:rand(CC),life:4+Math.random()*2,t:0,circ:Math.random()<.2});
}
function renderFx(dt){
  if(!W) return;
  fctx.clearRect(0,0,W,H);
  parts.forEach(function(p){
    p.t+=dt; p.vy+=p.g*dt; p.vx*=0.985; if(p.g>500) p.vy*=0.985;
    p.x+=p.vx*dt; p.y+=p.vy*dt; p.r+=p.vr*dt;
    fctx.globalAlpha=Math.max(0,Math.min(1,(p.life-p.t)*2)); fctx.fillStyle=p.c;
    fctx.save(); fctx.translate(p.x,p.y); fctx.rotate(p.r); fctx.scale(1,Math.cos(p.r*1.7));
    if(p.circ){ fctx.beginPath(); fctx.arc(0,0,p.w*0.5,0,Math.PI*2); fctx.fill(); }
    else fctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
    fctx.restore();
  });
  fctx.globalAlpha=1;
  parts=parts.filter(function(p){ return p.t<p.life&&p.y<H+40; });
}

/* ---------- Suara: semuanya dari desis (noise), tanpa nada dan tanpa musik ---------- */
var AC=null, soundOn=true, eng=null, bufs={};
function initAudio(){
  try{ if(!AC){ var A=window.AudioContext||window.webkitAudioContext; if(A) AC=new A(); } if(AC&&AC.state==='suspended') AC.resume(); }catch(e){ AC=null; }
}
function noise(type){
  if(bufs[type]) return bufs[type];
  var sr=AC.sampleRate, len=sr*2, b=AC.createBuffer(1,len,sr), d=b.getChannelData(0), l=0, i, wv;
  for(i=0;i<len;i++){
    wv=Math.random()*2-1;
    if(type==='white') d[i]=wv;
    else{ l=(l+0.02*wv)/1.02; d[i]=l*3.5; if(type==='eng') d[i]*=0.55+0.45*Math.sin(2*Math.PI*24*i/sr); }
  }
  if(type==='eng'){ var f=Math.floor(sr*0.02); for(i=0;i<f;i++){ d[i]*=i/f; d[len-1-i]*=i/f; } }
  return bufs[type]=b;
}
function shot(type,filt,f0,f1,dur,peak,q,delay){
  if(!AC||!soundOn) return;
  try{
    var t=AC.currentTime+(delay||0), s=AC.createBufferSource(); s.buffer=noise(type);
    var f=AC.createBiquadFilter(); f.type=filt; f.Q.value=q||0.7;
    f.frequency.setValueAtTime(f0,t); f.frequency.exponentialRampToValueAtTime(f1,t+dur);
    var g=AC.createGain(); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+dur*0.2); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    s.connect(f); f.connect(g); g.connect(AC.destination); s.start(t,Math.random()); s.stop(t+dur+0.05);
  }catch(e){}
}
function sfxWhoosh(){ shot('white','bandpass',380,2600,0.45,0.3,0.9); }           /* angin lewat */
function sfxSoft(){ shot('brown','lowpass',300,110,0.3,0.6,0.7); }                 /* "buk" lembut saat salah */
function sfxWind(){ shot('white','bandpass',300,1100,2.2,0.25,0.5); }
function sfxPop(){ shot('white','lowpass',2500,300,0.08,0.55,0.7); }               /* letupan balon */
function sfxStar(){ shot('white','highpass',3000,5000,0.05,0.05,0.7); }            /* desis kecil tembakan bintang */
function sfxSwish(){ shot('white','bandpass',1800,1000,0.16,0.06,1.2); }           /* pindah jalur */
function sfxCoins(){ [0,0.09,0.18].forEach(function(d){ shot('white','highpass',5000,7000,0.07,0.16,0.7,d); }); } /* gemerincing */
function sfxThunder(){ shot('brown','lowpass',500,60,1.4,1.0,0.5); }               /* gemuruh guntur */
function sfxWin(){ for(var i=0;i<9;i++) shot('white','lowpass',2600,300,0.08,0.4,0.7,Math.random()*1.1); sfxWhoosh(); }  /* letupan konfeti */
function engineStart(){
  if(!AC||!soundOn||eng) return;
  try{
    var t=AC.currentTime;
    var master=AC.createGain(); master.gain.setValueAtTime(0.0001,t); master.gain.exponentialRampToValueAtTime(0.24,t+0.5); master.connect(AC.destination);
    var ns=AC.createBufferSource(); ns.buffer=noise('eng'); ns.loop=true;
    var nf=AC.createBiquadFilter(); nf.type='lowpass'; nf.frequency.value=340;
    ns.connect(nf); nf.connect(master); ns.start();
    eng={master:master,ns:ns,nf:nf};
  }catch(e){ eng=null; }
}
function engineUpdate(){
  if(!eng) return;
  var k=Math.min(1,(LV.endless?Math.min(1,correctN/20):correctN/LV.goal)+(boost?0.5:0)), t=AC.currentTime;
  eng.ns.playbackRate.setTargetAtTime(1+k*0.45,t,0.4);
  eng.nf.frequency.setTargetAtTime(340+k*260,t,0.4);
}
function engineStop(){
  if(!eng) return; var e=eng; eng=null;
  try{ var t=AC.currentTime; e.master.gain.setTargetAtTime(0.0001,t,0.15); e.ns.stop(t+0.7); }catch(x){}
}
function setSound(on){
  soundOn=on;
  $$('.pa-soundBtn').forEach(function(b){ b.textContent=b.classList.contains('pa-short')?(on?'\ud83d\udd0a':'\ud83d\udd07'):(on?'\ud83d\udd0a Suara: Nyala':'\ud83d\udd07 Suara: Mati'); });
  if(!on) engineStop(); else if(state==='run') engineStart();
}

/* ---------- Layar penuh ---------- */
var nativeFull=false, prevOverflow='';
function goFull(){
  if(!app.classList.contains('pa-full')){
    try{ prevOverflow=document.documentElement.style.overflow; document.documentElement.style.overflow='hidden'; }catch(e){}
    app.classList.add('pa-full');
  }
  var isFull=document.fullscreenElement||document.webkitFullscreenElement;
  if(!isFull){
    var rf=app.requestFullscreen||app.webkitRequestFullscreen;
    if(rf){ try{ var p=rf.call(app,{navigationUI:'hide'}); nativeFull=true; if(p&&p.catch) p.catch(function(){ nativeFull=false; }); }catch(e){ nativeFull=false; } }
  }
  try{ screen.orientation&&screen.orientation.lock&&screen.orientation.lock('portrait').catch(function(){}); }catch(e){}
  setTimeout(resize,150);
}
function exitFull(){
  app.classList.remove('pa-full');
  try{ document.documentElement.style.overflow=prevOverflow; }catch(e){}
  if(document.fullscreenElement||document.webkitFullscreenElement){
    var ef=document.exitFullscreen||document.webkitExitFullscreen; try{ var p=ef.call(document); if(p&&p.catch) p.catch(function(){}); }catch(e){}
  }
  nativeFull=false;
  setTimeout(resize,150);
}
function onFsChange(){
  if(!(document.fullscreenElement||document.webkitFullscreenElement)&&nativeFull){
    nativeFull=false; if(state==='run') pause(); exitFull();
  }
  setTimeout(resize,150);
}

/* ---------- Peta rute ---------- */
function starStr(n){ return rep('\u2b50',n)+rep('\u2606',3-n); }
function renderMap(hi){
  var box=$('#pa-map'), Wm=box.clientWidth||340, step=104, gap=44, n=LEVELS.length, pts=[], i;
  var rTop=function(r){ return r*(4*step+gap); };
  var Hm=rTop(4)+16;
  var nextIdx=-1;
  for(i=0;i<n;i++) if(unlocked(i)&&!P()[i]){ nextIdx=i; break; }
  for(i=0;i<n;i++) pts.push([Math.round(Wm*(0.5+0.27*Math.sin(i*1.25+0.4))),rTop(Math.floor(i/4))+96+(i%4)*step]);
  /* latar satu gradasi yang menyambung mulus antar wilayah */
  var MC=[['#8fd3ff','#c4ecff'],['#35a9dc','#8fe0ee'],['#ffa877','#ffe0ad'],['#1b2c63','#4a5fa8']], st=[], bl=60;
  MC.forEach(function(c,r){
    var a=rTop(r), b=r<3?rTop(r+1):Hm;
    st.push(c[0]+' '+(r?a+bl:0)+'px'); st.push(c[1]+' '+(r<3?b-bl:Hm)+'px');
  });
  var h='<div class="pa-mapin" style="height:'+Hm+'px;background:linear-gradient('+st.join(',')+')">';
  /* hiasan per wilayah: awan (siang, laut, senja) atau bintang berkelip (malam) */
  var starSvg=function(sz,col){ var p=[],k,a,q; for(k=0;k<10;k++){ a=-Math.PI/2+k*Math.PI/5; q=k%2?sz*0.42:sz; p.push((sz+Math.cos(a)*q).toFixed(1)+','+(sz+Math.sin(a)*q).toFixed(1)); } return '<svg width="'+sz*2+'" height="'+sz*2+'"><polygon points="'+p.join(' ')+'" fill="'+col+'"/></svg>'; };
  var deco=function(theme,x,y,big,delay){
    x=Math.max(14,Math.min(Wm-14,x));
    if(theme==='night'){
      var sz=big?11:7;
      return '<div class="pa-mapdeco pa-ms" style="left:'+(x-sz)+'px;top:'+(y-sz)+'px;animation-delay:-'+delay+'s">'+starSvg(sz,big?'#ffe27a':'#ffffff')+'</div>';
    }
    if(theme==='sea'&&!big) return '<div class="pa-mapdeco pa-ms" style="left:'+(x-7)+'px;top:'+(y-7)+'px;animation-delay:-'+delay+'s">'+starSvg(7,'#ffffff')+'</div>';
    return '<div class="pa-mapdeco pa-mc'+(big?'':' pa-sm')+(theme==='dusk'?' pa-dusk':'')+'" style="left:'+(x-29)+'px;top:'+(y-9)+'px;animation-delay:-'+delay+'s">&nbsp;</div>';
  };
  LEVELS.forEach(function(L,k){
    var th=REGIONS[L.region].theme, x=pts[k][0], y=pts[k][1];
    var left=x-58, right=Wm-(x+58), side=right>=left?1:-1;
    var free=side>0?right:left, cx=side>0?x+58+free/2:x-58-free/2;
    h+=deco(th,cx,y-16,true,(k*1.7)%6);
    h+=deco(th,cx+side*Math.min(18,free/4),y+26,false,(k*2.3)%5);
    if(th==='night'){ h+=deco(th,cx-side*Math.min(22,free/3),y+4,false,(k*0.9)%4); h+=deco(th,x+(k%2?-30:30),y+60,false,(k*1.3)%4); }
  });
  REGIONS.forEach(function(R,r){
    h+='<div class="pa-rl pa-rl'+r+'" style="top:'+(rTop(r)+10)+'px"><span style="animation-delay:-'+(r*0.6)+'s"><u>'+R.icon+'</u>'+R.name+'</span></div>';
  });
  h+='<svg width="'+Wm+'" height="'+Hm+'" style="position:absolute;left:0;top:0"><polyline points="'+pts.map(function(p){return p.join(',');}).join(' ')+'" fill="none" stroke="#ffffff" stroke-width="5" stroke-dasharray="1 13" stroke-linecap="round"/></svg>';
  LEVELS.forEach(function(L,k){
    var open=unlocked(k), pm=premLevel(k);
    h+='<button class="pa-lvl'+(pm?' pa-prem':open?'':' pa-locked')+(k===nextIdx&&!pm?' pa-next':'')+'" data-i="'+k+'" style="left:'+pts[k][0]+'px;top:'+pts[k][1]+'px" aria-label="Level '+(k+1)+' '+L.city+': '+L.name+(pm?' (Premium)':open?'':' (terkunci)')+'">'
      +'<b>'+(pm?'\ud83d\udc51 '+(k+1):open?(k+1)+(L.boss?' \u26c8\ufe0f':''):'\ud83d\udd12')+'</b><span>'+L.city+'</span><em>'+L.name+'</em>'+(pm?'<i>Premium</i>':open?'<i>'+starStr(P()[k])+'</i>':'')+'</button>';
  });
  box.innerHTML=h+'</div>';
  $$('#pa-map .pa-lvl').forEach(function(b){
    b.addEventListener('click',function(){
      var k=+b.getAttribute('data-i');
      if(!hasName()){ needName(); return; }
      if(premLevel(k)){ initAudio(); sfxPop(); openPremium('city',k); return; }
      if(!unlocked(k)){
        initAudio(); sfxSoft();
        b.classList.remove('pa-shake'); void b.offsetWidth; b.classList.add('pa-shake');
        $('#pa-lockMsg').textContent='\ud83d\udd12 Selesaikan level '+k+' dulu ya!';
        return;
      }
      startLevel(k);
    });
  });
  var focus=hi!=null?hi:nextIdx<0?0:nextIdx;
  box.scrollTop=Math.max(0,pts[focus][1]-box.clientHeight/2);
  if(hi!=null){
    var hb=$('#pa-map .pa-lvl[data-i="'+hi+'"]');
    if(hb){
      hb.classList.add('pa-hi');
      setTimeout(function(){ hb.classList.remove('pa-hi'); },3400);
      setTimeout(function(){ if(state==='levels'){ $('#pa-lockMsg').textContent=premLevel(hi)?'\ud83d\udc51 '+LEVELS[hi].city+' ada di Premium. Ketuk untuk melihat!':'\u2708\ufe0f Ketuk '+LEVELS[hi].city+' untuk terbang!'; } },60);
    }
  }
  $('#pa-starTotal').textContent='\u2b50 '+totalStars()+' \u00b7 \ud83c\udfc6 '+S.bestEnd[S.tier];
  $('#pa-name').value=S.name;
  $('#pa-tierBtn').textContent='\ud83c\udf93 '+TIERS[S.tier].name;
  $('#pa-lockMsg').innerHTML='&nbsp;';
  $('#pa-relaxBtn').textContent=S.relax?'\ud83c\udf43 Santai':'\u23f1\ufe0f Waktu';
  $('#pa-endlessBtn').textContent=(isPremium()?'\u267e\ufe0f':'\ud83d\udc51')+' Tantangan';
  $('#pa-crownBtn').classList.toggle('pa-isPrem',isPremium());
  nameUi(!hasName());
}
var SCREENS=['#pa-startScreen','#pa-levelScreen','#pa-endScreen','#pa-pauseScreen','#pa-countdown','#pa-hangarScreen','#pa-misScreen','#pa-tierScreen','#pa-rapotScreen','#pa-cityScreen','#pa-premScreen'];
function hideAll(){ SCREENS.forEach(function(id){ show(id,false); }); }
function toLevels(hi){
  if(state==='run'||state==='pause'||state==='count') keepRedo();
  engineStop(); boost=false; runId++;
  state='levels'; gates=[]; shots=[]; bullets=[]; floats=[]; balloons=[]; guide=false;
  $('#pa-hud').classList.add('pa-hide'); floatBtns(false); hudH=0;
  hideAll(); show('#pa-levelScreen',true); renderMap(hi);
}

/* ---------- Hangar ---------- */
function renderHangar(){
  var tot=totalStars();
  $('#pa-starTotal2').textContent='\u2b50 '+tot;
  var hs='', ht='';
  var lab=function(kind,it,on,open){ return on?'\u2713 Dipakai':premItem(kind,it.id)?'\ud83d\udc51 Premium':open?'Pakai':'\ud83d\udd12 \u2b50 '+it.cost; };
  var cls=function(kind,it,on,open){ return premItem(kind,it.id)?' pa-prem':(open?'':' pa-locked')+(on?' pa-on':''); };
  SKINS.forEach(function(sk){
    var open=tot>=sk.cost, on=S.skin===sk.id;
    hs+='<button class="pa-item'+cls('skin',sk,on,open)+'" data-k="skin" data-id="'+sk.id+'"><canvas width="108" height="108">&nbsp;</canvas><span>'+sk.name+'</span><em>'+lab('skin',sk,on,open)+'</em></button>';
  });
  TRAILS.forEach(function(tr){
    var open=tot>=tr.cost, on=S.trail===tr.id;
    ht+='<button class="pa-item'+cls('trail',tr,on,open)+'" data-k="trail" data-id="'+tr.id+'"><u>'+tr.icon+'</u><span>'+tr.name+'</span><em>'+lab('trail',tr,on,open)+'</em></button>';
  });
  $('#pa-skins').innerHTML=hs; $('#pa-trails').innerHTML=ht;
  $$('#pa-skins canvas').forEach(function(cv,i){
    var c=cv.getContext('2d'); c.setTransform(2,0,0,2,0,0); drawPlane(c,27,28,48,43,SKINS[i],0,0.3);
  });
  $$('#pa-hangarScreen .pa-item').forEach(function(b){
    b.addEventListener('click',function(){
      var kind=b.getAttribute('data-k'), id=b.getAttribute('data-id'), it=byId(kind==='skin'?SKINS:TRAILS,id);
      initAudio();
      if(premItem(kind,id)){ sfxPop(); openPremium('Koleksi '+it.name); return; }
      if(totalStars()<it.cost){ sfxSoft(); $('#pa-hangarMsg').textContent='\ud83d\udd12 '+it.name+' butuh \u2b50 '+it.cost+'. Kurang '+(it.cost-totalStars())+' bintang lagi!'; return; }
      S[kind]=id; save(); sfxPop(); renderHangar();
      $('#pa-hangarMsg').textContent=it.name+' dipakai!';
    });
  });
}
function renderMissions(){
  initMissions();
  var h='';
  S.mis.forEach(function(m,mi){
    var def=byId(MISSIONS,m.id), lock=mi>0&&!isPremium();
    h+='<div class="pa-mis'+(m.done?' pa-done':'')+(lock?' pa-premMis':'')+'"><b>'+(lock?'\ud83d\udc51':m.done?'\u2713':Math.min(m.v,def.n)+'/'+def.n)+'</b><span>'+def.t+(lock?' <small>(Premium)</small>':'')+'</span></div>';
  });
  $('#pa-misList').innerHTML=h;
  $$('#pa-misList .pa-premMis').forEach(function(b){ b.addEventListener('click',function(){ openPremium('Misi tambahan'); }); });
}

/* ---------- Nama wajib ---------- */
function hasName(){ return S.name.trim().length>0; }
function nameUi(on){
  $('#pa-name').classList.toggle('pa-need',on);
  if(on) $('#pa-lockMsg').textContent='\u270f\ufe0f Tulis namamu dulu ya, baru bisa terbang!';
}
function needName(){ nameUi(true); initAudio(); sfxSoft(); }

/* ---------- Ganti kota di dalam game ---------- */
function openCity(){
  if(state==='run') pause();
  if(state!=='pause') return;
  show('#pa-pauseScreen',false);
  var h='';
  LEVELS.forEach(function(L,k){
    var open=unlocked(k), on=!LV.endless&&k===lvl, pm=premLevel(k);
    h+='<button class="pa-city'+(pm?' pa-prem':open?'':' pa-locked')+(on?' pa-on':'')+'" data-i="'+k+'" aria-label="Kota '+L.city+(pm?' (Premium)':open?'':' (terkunci)')+'"><b>'+(pm?'\ud83d\udc51':open?(k+1):'\ud83d\udd12')+'</b><span>'+L.city+'</span><i>'+(pm?'Premium':open?starStr(P()[k]):'&nbsp;')+'</i></button>';
  });
  $('#pa-cityGrid').innerHTML=h;
  $$('#pa-cityGrid .pa-city').forEach(function(b){
    b.addEventListener('click',function(){
      var k=+b.getAttribute('data-i');
      if(premLevel(k)){ initAudio(); sfxPop(); openPremium('city',k); return; }
      if(!unlocked(k)){ initAudio(); sfxSoft(); $('#pa-cityNote').textContent='\ud83d\udd12 Selesaikan level '+k+' dulu ya!'; return; }
      startLevel(k);
    });
  });
  $('#pa-cityNote').textContent='Tingkat '+TIERS[S.tier].name+' \u00b7 pilih kota tujuan';
  show('#pa-cityScreen',true);
}

/* ---------- Layar premium ---------- */
var premFrom='levels';
var PREM_TIER=[
  'Pengurangan dengan buah, sampai 5 dan 10, tiga bilangan, angka hilang, pasangan 10',
  'Perkalian 2, 3, 4, 5, 10, puluhan, dua angka, pengurangan sampai 20, soal islami',
  'Perkalian 2 - 9, pembagian 2 - 9, kali hilang, ratusan, tiga bilangan'
];
function openPremium(why,k){
  if(state==='run') pause();
  if(state==='count') toLevels();
  premFrom=(state==='pause'||state==='end')?state:'levels';
  hideAll(); show('#pa-premScreen',true);
  var lead;
  if(isPremium()) lead='Masya Allah, <b>Premium aktif</b> sampai akhir <b>'+premUntil()+'</b>. Semua kota dan koleksi sudah terbuka!';
  else if(why==='city'&&k!=null) lead='Masya Allah, kamu sudah sampai <b>'+LEVELS[FREE_LEVELS-1].city+'</b>! Lanjutkan terbang ke <b>'+LEVELS[k].city+'</b> dan '+(LEVELS.length-FREE_LEVELS-1)+' kota lain sampai Makkah bersama Premium.';
  else if(why==='teaser') lead='Masya Allah, kamu bisa soal bonus tadi! Mau belajar '+(S.tier===1?'<b>perkalian</b>':'<b>pembagian</b>')+' lebih banyak? Lanjutkan di Premium.';
  else lead=(why?'<b>'+why+'</b> ada di Premium. ':'')+'Buka semua kota, materi, dan koleksi bersama Hurufa Premium.';
  $('#pa-premLead').innerHTML=lead;
  var items=[
    ['\ud83d\uddfa\ufe0f','12 kota lagi di tiap tingkat: Lautan Nusantara, Langit Senja, sampai Makkah'],
    ['\ud83e\uddee',TIERS[S.tier].name+': '+PREM_TIER[S.tier]],
    ['\u267e\ufe0f','Mode Tantangan tanpa akhir dan mode Santai tanpa waktu'],
    ['\ud83c\udfa8','Semua pesawat dan jejak asap di Hangar'],
    ['\ud83c\udfaf','3 misi harian (gratis: 1 misi)'],
    ['\ud83d\udd13','Satu kode untuk semua game premium hurufa.com di HP ini']
  ];
  $('#pa-premList').innerHTML=items.map(function(it){ return '<div><u>'+it[0]+'</u><span>'+it[1]+'</span></div>'; }).join('');
  $('#pa-premCodeBox').style.display=isPremium()?'none':'';
  $('#pa-premLink').style.display=isPremium()?'none':'';
  $('#pa-premLink').href=PREMIUM_URL;
  var cm=$('#pa-codeMsg'); cm.className='pa-codeMsg'; cm.innerHTML=isPremium()?'&nbsp;':'Sudah punya kode? Masukkan di sini.';
}
function tryCode(){
  var v=$('#pa-code').value, c=parseCode(v), cm=$('#pa-codeMsg');
  initAudio();
  if(!c){ sfxSoft(); cm.className='pa-codeMsg'; cm.textContent='Kode belum benar. Cek lagi huruf dan angkanya ya.'; return; }
  if(!codeActive(c)){ sfxSoft(); cm.className='pa-codeMsg'; cm.textContent='Kode ini sudah habis masa berlakunya (akhir '+BULAN[c.m-1]+' '+c.y+').'; return; }
  try{ localStorage.setItem(PKEY,c.code); }catch(e){}
  PREM=c; sfxCoins(); sfxWin(); burst(W/2,H*0.35,90,1.4); rain(120);
  openPremium();
  cm.className='pa-codeMsg pa-ok'; cm.textContent='Masya Allah, Premium aktif! Selamat terbang.';
}
function premBack(){
  show('#pa-premScreen',false);
  if(premFrom==='pause'){ show('#pa-pauseScreen',true); }
  else if(premFrom==='end'){ show('#pa-endScreen',true); }
  else toLevels();
}

/* ---------- Pilihan tingkat ---------- */
function updateStartBtn(){ $('#pa-startBtn').textContent=sumArr(P())>0?'\u25b6 LANJUT MAIN':'MULAI \u25b6'; }
function renderTiers(){
  ['#pa-tiers','#pa-tiers2'].forEach(function(sel,big){
    var h='';
    TIERS.forEach(function(T,t){
      var done=S.prog[t].filter(function(v){ return v>0; }).length;
      h+='<button class="pa-tier'+(t===S.tier?' pa-on':'')+'" data-t="'+t+'" data-big="'+big+'"><b>'+T.age+'</b><span>'+T.name+'</span>'
        +(big?'<em>'+T.desc+'<br>\u2b50 '+sumArr(S.prog[t])+' / '+T.levels.length*3+' \u00b7 '+done+' / '+T.levels.length+' level</em>':'')+'</button>';
    });
    $(sel).innerHTML=h;
  });
  $$('.pa-tier').forEach(function(b){
    b.addEventListener('click',function(){
      var t=+b.getAttribute('data-t');
      if(t!==S.tier){ S.tier=t; LEVELS=TIERS[t].levels; S.redo=[]; save(); }
      initAudio(); sfxPop(); renderTiers(); updateStartBtn();
      if(b.getAttribute('data-big')==='1') toLevels();
    });
  });
}
function openTier(){ toLevels(); hideAll(); show('#pa-tierScreen',true); renderTiers(); }

/* ---------- Rapot gambar ---------- */
var rapotCv=null;
function drawRapot(){
  var c=document.createElement('canvas'); c.width=1080; c.height=1350;
  var x=c.getContext('2d'), T=TIERS[S.tier], pr=P(), n=T.levels.length, i;
  var stars=sumArr(pr), done=pr.filter(function(v){ return v>0; }).length;
  var acc=S.statT[S.tier]?Math.round(S.statC[S.tier]/S.statT[S.tier]*100):0;
  var g=x.createLinearGradient(0,0,0,1350); g.addColorStop(0,'#6cc4f5'); g.addColorStop(1,'#d6f1ff');
  x.fillStyle=g; x.fillRect(0,0,1080,1350);
  [[90,70,70],[980,120,90],[40,700,80],[1050,820,90],[160,1330,110],[560,1350,120],[930,1320,110]].forEach(function(p){ circ(x,p[0],p[1],p[2],'rgba(255,255,255,.8)'); });
  x.fillStyle='rgba(0,0,0,.12)'; rr(x,56,62,980,1225,48); x.fill();
  x.fillStyle='#ffffff'; rr(x,50,50,980,1225,48); x.fill();
  x.textAlign='center'; x.textBaseline='alphabetic'; x.lineJoin='round';
  x.font='700 92px "Fredoka","Baloo 2",sans-serif';
  x.fillStyle='#f6d3b8'; x.fillText('Rapot Pilot Cilik',540,173,900);
  x.fillStyle='#e0621b'; x.fillText('Rapot Pilot Cilik',540,165,900);
  x.font='700 36px "Baloo 2",sans-serif'; x.fillStyle='#1f6fd1'; x.fillText('Jelajah Matematika \u00b7 hurufa.com',540,222);
  drawPlane(x,900,360,230,200,byId(SKINS,S.skin),-0.35,0.3);
  x.textAlign='left'; x.textBaseline='alphabetic';
  x.font='700 30px "Baloo 2",sans-serif'; x.fillStyle='#6f7f8c'; x.fillText('Nama',96,296);
  x.font='800 68px "Baloo 2",sans-serif'; x.fillStyle='#1d2b3a'; x.fillText(S.name.trim()||'Pilot Hurufa',96,362,640);
  x.font='700 36px "Baloo 2",sans-serif'; x.fillStyle='#d4560f'; x.fillText('Tingkat: '+T.name+' ('+T.age+')',96,416);
  if(isPremium()){ x.font='800 30px "Baloo 2",sans-serif'; x.textAlign='center'; var pw=x.measureText('\ud83d\udc51 Pilot Premium').width+40; x.fillStyle='#ffe27a'; rr(x,900-pw/2,446,pw,46,23); x.fill(); x.fillStyle='#8a5a00'; x.fillText('\ud83d\udc51 Pilot Premium',900,480); x.textAlign='left'; }
  var d=new Date();
  x.font='600 30px "Baloo 2",sans-serif'; x.fillStyle='#6f7f8c'; x.fillText('Tanggal: '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear(),96,460);
  var boxes=[[stars+' / '+n*3,'Bintang','#fff6c9'],[done+' / '+n,'Level selesai','#e2ffe9'],[acc+'%','Ketepatan','#dff1ff'],[String(S.bestEnd[S.tier]),'Rekor Tantangan','#ffe9d6']];
  x.textAlign='center';
  boxes.forEach(function(b,k){
    var bx=72+k*237;
    x.fillStyle=b[2]; rr(x,bx,500,225,150,28); x.fill();
    x.font='800 58px "Baloo 2",sans-serif'; x.fillStyle='#c2410c'; x.fillText(b[0],bx+112,572,205);
    x.font='700 26px "Baloo 2",sans-serif'; x.fillStyle='#1d2b3a'; x.fillText(b[1],bx+112,620,205);
  });
  for(i=0;i<n;i++){
    var cx=72+(i%4)*237, cy=680+Math.floor(i/4)*118, open=i===0||pr[i-1]>0;
    x.fillStyle=pr[i]>0?'#e2ffe9':open?'#fff6c9':'#eef0f2'; rr(x,cx,cy,225,108,22); x.fill();
    x.textAlign='left';
    x.font='800 28px "Baloo 2",sans-serif'; x.fillStyle=pr[i]>0||open?'#1d2b3a':'#8a99a6'; x.fillText((i+1)+'. '+T.levels[i].city,cx+14,cy+36,200);
    x.font='600 21px "Baloo 2",sans-serif'; x.fillStyle='#6f7f8c'; x.fillText(T.levels[i].name,cx+14,cy+64,200);
    for(var k=0;k<3;k++) star(x,cx+30+k*36,cy+86,15,k<pr[i]?'#f5a300':'#d5dbe1',0);
  }
  x.textAlign='center';
  x.font='700 54px "Noto Naskh Arabic","Amiri",serif'; x.fillStyle='#1a8f4c'; x.fillText('\u0645\u064e\u0627 \u0634\u064e\u0627\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f',540,1206);
  x.font='800 34px "Baloo 2",sans-serif'; x.fillStyle='#d4560f';
  x.fillText(done===0?'Masya Allah, ayo mulai terbang dan kumpulkan bintang!':done<n?'Masya Allah, terus semangat berlatih!':'Masya Allah, semua level selesai!',540,1252,920);
  x.font='800 32px "Baloo 2",sans-serif'; x.fillStyle='#1b4f7a'; x.fillText('hurufa.com   |   t.me/hurufacom',540,1312);
  return c;
}
function openRapot(){
  toLevels(); hideAll(); show('#pa-rapotScreen',true);
  $('#pa-rapotMsg').textContent='Tekan lama gambar untuk menyimpan';
  var go=function(){ try{ rapotCv=drawRapot(); $('#pa-rapotImg').src=rapotCv.toDataURL('image/png'); }catch(e){ $('#pa-rapotMsg').textContent='Rapot belum bisa dibuat di perangkat ini.'; } };
  if(document.fonts&&document.fonts.load){
    Promise.race([Promise.all([document.fonts.load('700 92px "Fredoka"','Rapot'),document.fonts.load('800 40px "Baloo 2"','Rapot'),document.fonts.load('700 54px "Noto Naskh Arabic"','\u0645\u064e\u0627 \u0634\u064e\u0627\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f')]),new Promise(function(r){ setTimeout(r,1500); })]).then(go,go);
  }else go();
}
function shareRapot(){
  var msg=$('#pa-rapotMsg'), fail=function(){ msg.textContent='Belum bisa berbagi langsung di sini. Tekan lama gambarnya, atau pakai tombol Simpan.'; };
  if(!rapotCv||!rapotCv.toBlob) return fail();
  try{
    rapotCv.toBlob(function(bl){
      try{
        var f=new File([bl],'rapot-jelajah-matematika.png',{type:'image/png'});
        if(navigator.canShare&&navigator.canShare({files:[f]})){
          navigator.share({files:[f],title:'Rapot Jelajah Matematika',text:'Rapot '+(S.name||'pilot cilik')+' di Jelajah Matematika - hurufa.com'}).catch(function(){});
          return;
        }
      }catch(e){}
      fail();
    },'image/png');
  }catch(e){ fail(); }
}
function saveRapot(){
  var msg=$('#pa-rapotMsg');
  try{
    var a=document.createElement('a'); a.href=rapotCv.toDataURL('image/png'); a.download='rapot-jelajah-matematika.png';
    a.style.display='none'; a.textContent='rapot'; app.appendChild(a); a.click(); app.removeChild(a);
    msg.textContent='Gambar diunduh. Kalau belum muncul, tekan lama gambarnya lalu pilih simpan.';
  }catch(e){ msg.textContent='Tekan lama gambarnya lalu pilih simpan.'; }
}

/* ---------- Alur permainan ---------- */
var runId=0, ENDLESS={name:'Tantangan',city:'Tantangan',tt:5.8,goal:1e9,time:60,endless:true,boss:false,mix:[]};
function show(id,on){ $(id).classList.toggle('pa-hidden',!on); }
function floatBtns(on){ ['#pa-pauseBtn','#pa-cityBtn','#pa-hornBtn','#pa-hintBtn','#pa-turboBtn'].forEach(function(id){ $(id).classList.toggle('pa-off',!on); }); }
function startLevel(i){
  if(!hasName()){ if(state!=='levels') toLevels(); needName(); return; }
  if((i<0||premLevel(i))&&!isPremium()){ openPremium(i<0?'Mode Tantangan':'city',i<0?null:i); return; }
  if(state==='run'||state==='pause'||state==='count') keepRedo();
  goFull(); initAudio(); initMissions();
  var my=++runId;
  if(i<0){
    LV=ENDLESS; lvl=0; ENDLESS.mix=[];
    LEVELS.forEach(function(L,k){ if(L.gen&&unlocked(k)) ENDLESS.mix.push(k); });
    theme=rand(['day','sea','dusk','night']); timed=true;
  }else{ lvl=i; LV=LEVELS[i]; theme=REGIONS[LV.region].theme; timed=!S.relax; }
  hideAll();
  praiseN=0;praiseT=-1e9;correctN=0;wrongN=0;total=0;streak=0;score=0;timeLeft=LV.time;mistakes=[];redoNew=[];gates=[];floats=[];bullets=[];shots=[];balloons=[];lastKey='';car.lane=1;boost=false;
  teaserDone=false;teaserSeen=false;gateN=0;fuel=0;hints=3;shield=false;goldLeft=0;rainbowT=0;gotStar=false;turboLock=false;stormA=0;light=0;
  guide=!S.guided&&i>=0;
  $('#pa-target').textContent='-'; $('#pa-target').className='';
  $('#pa-targetLabel').textContent=LV.endless?'TANTANGAN':'LEVEL '+(i+1);
  $('#pa-timeLabel').textContent=timed?'DETIK':'SANTAI';
  $('#pa-hud').classList.remove('pa-hide'); floatBtns(true);
  updateHudNums(false); updateTimer(); updateBtns();
  state='count';
  buildDecor();
  engineStart();
  var go=function(){
    if(my!==runId||state!=='count') return;
    var seq=['B','3','2','1','Ayo!'], k=0;
    $('#pa-countLvl').textContent=LV.endless?'\u267e\ufe0f Tantangan tanpa akhir':'Level '+(i+1)+' \u00b7 '+LV.city+' \u00b7 '+LV.name;
    show('#pa-countdown',true);
    var step=function(){
      if(my!==runId||state!=='count') return;
      var n=$('#pa-countNum');
      if(seq[k]==='B'){ n.className='pa-bism'; n.innerHTML='<u>\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u0670\u0647\u0650</u><span>Bismillah</span>'; }
      else { n.className=''; n.textContent=seq[k]; }
      n.classList.remove('pa-go'); void n.offsetWidth; n.classList.add('pa-go');
      sfxPop(); if(k===seq.length-1) sfxWhoosh();
      k++;
      if(k<seq.length) setTimeout(step,k===1?1500:700);
      else setTimeout(function(){
        if(my!==runId||state!=='count') return;
        show('#pa-countdown',false); layout(); state='run'; spawnGate();
      },600);
    };
    step();
  };
  var fontsReady=document.fonts&&document.fonts.load?Promise.race([document.fonts.load('700 40px "Noto Naskh Arabic"','\u0663'),new Promise(function(r){setTimeout(r,1500);})]):Promise.resolve();
  fontsReady.then(function(){ setTimeout(function(){ layout(); go(); },200); },function(){ go(); });
}
function endGame(win){
  state='end'; boost=false; guide=false; engineStop(); floatBtns(false);
  keepRedo();
  var endless=!!LV.endless, stars=0, newUnlock=false, before=totalStars(), record=false;
  if(endless){
    win=false;
    if(correctN>S.bestEnd[S.tier]){ S.bestEnd[S.tier]=correctN; record=correctN>0; }
    if(record){ sfxWin(); rain(120); } else sfxWind();
  }else if(win){
    stars=wrongN===0?3:wrongN<=2?2:1;
    if(!timed) stars=Math.min(stars,2);
    newUnlock=lvl+1<LEVELS.length&&!P()[lvl];
    if(stars>P()[lvl]) P()[lvl]=stars;
    if(score>B()[lvl]){ B()[lvl]=score; record=true; }
    track('levels',1); if(wrongN===0) track('perfect',1);
    sfxWin();
    for(var k=0;k<4;k++) setTimeout(function(){ burst(W*(0.2+Math.random()*0.6),H*(0.3+Math.random()*0.3),70,1.3); },k*250);
    rain(160);
  }else{
    sfxWind();
  }
  save();
  var after=totalStars(), gifts=[];
  SKINS.concat(TRAILS).forEach(function(it){ if(it.cost>before&&it.cost<=after) gifts.push(it.name); });
  var acc=total?Math.round(correctN/total*100):0;
  var lastL=lvl===LEVELS.length-1;
  setTimeout(function(){
    if(state!=='end') return;
    $('#pa-hud').classList.add('pa-hide');
    $('#pa-endTitle').textContent=endless?'Tantangan selesai! \u23f0':win?(lastL?'Sampai di Makkah! \ud83c\udfc6':'Mendarat di '+LV.city+'! \ud83c\udfc1'):'Waktu habis! \u23f0';
    $('#pa-stars').textContent=endless?(record?'\ud83c\udfc6':'\u23f0'):starStr(stars);
    var st=((win||record)?'Masya Allah! ':'')+'<b>'+score+'</b> poin'+(record&&!endless?' \u00b7 Rekor baru!':'');
    if(endless) st+='<br>Benar '+correctN+' soal \u00b7 Rekor terbaik: '+S.bestEnd[S.tier]+(record?' (baru!)':'');
    else st+='<br>Benar '+correctN+' dari '+total+' jawaban ('+acc+'%) \u00b7 Rekor: '+B()[lvl];
    if(win&&newUnlock) st+='<br>\ud83d\udd13 Level '+(lvl+2)+' ('+LEVELS[lvl+1].city+') terbuka!';
    if(win&&!timed) st+='<br>Mode santai: paling banyak 2 bintang';
    if(!win&&!endless) st+='<br>Butuh '+LV.goal+' jawaban benar. Ayo coba lagi!';
    if(gifts.length) st+='<br>\ud83c\udf81 Koleksi baru di Hangar: '+gifts.join(', ');
    if(win&&!isPremium()&&lvl+1>=FREE_LEVELS&&lvl+1<LEVELS.length) st+='<br><span class="pa-teaser">\ud83d\udc51 '+LEVELS[lvl+1].city+' dan kota berikutnya ada di Premium</span>';
    if(teaserSeen&&!isPremium()) st+='<br><span class="pa-teaser">Mau belajar '+(S.tier===1?'perkalian':'pembagian')+'? Lanjut ke Premium!</span>';
    $('#pa-endStats').innerHTML=st;
    var rv=$('#pa-review'); rv.innerHTML='';
    mistakes.slice(0,6).forEach(function(m){ var c=document.createElement('div'); c.className='pa-chip'; c.textContent=m; rv.appendChild(c); });
    $('#pa-reviewWrap').style.display=mistakes.length?'flex':'none';
    var again=$('#pa-againBtn');
    if(endless){ again.textContent='MAIN LAGI \u25b6'; again.setAttribute('data-act','endless'); }
    else if(win&&!lastL){ again.textContent='LEVEL '+(lvl+2)+' \u25b6'; again.setAttribute('data-act','next'); }
    else if(win&&lastL){ again.textContent='PETA \u25b6'; again.setAttribute('data-act','menu'); }
    else { again.textContent='COBA LAGI \u25b6'; again.setAttribute('data-act','retry'); }
    $('#pa-retryBtn').style.display=(win&&!endless)?'':'none';
    show('#pa-endScreen',true);
  },900);
}
function pause(){ if(state!=='run') return; state='pause'; engineStop(); floatBtns(false); show('#pa-pauseScreen',true); }
function resume(){ if(state!=='pause') return; show('#pa-pauseScreen',false); floatBtns(true); state='run'; last=performance.now(); initAudio(); engineStart(); goFull(); if(!coming()) spawnGate(); show('#pa-countdown',false); }
function doBoost(){
  initAudio(); sfxWhoosh(); car.wob=Math.max(car.wob,0.25);
  if(state==='run'&&!guide) boost=true;
}
function doHint(){
  var g=coming(); if(state!=='run'||!g||g.hint) return;
  if(hints<=0){ addFloat('Petunjuk habis',W/2,H*0.5,'#d4560f',1.2); return; }
  hints--; g.hint=true; sfxPop(); updateBtns();
}
function doTurbo(){
  var g=coming(); if(state!=='run'||!g||guide) return;
  if(fuel<FUEL){ addFloat('Isi tangki dulu: '+fuel+'/'+FUEL,W/2,H*0.5,'#5d6b78',1.2); return; }
  fuel=0; g.swapY=0; g.turbo=true; car.lane=g.correct; turboLock=true; boost=true;
  sfxWhoosh(); addFloat('TURBO!',W/2,H*0.5,'#17803f',1.2,'big'); updateBtns();
}

/* ---------- Kontrol ---------- */
function setLane(l){
  if(turboLock) return;
  l=Math.max(0,Math.min(2,l)); if(l!==car.lane&&state==='run') sfxSwish(); car.lane=l; fire();
}
scene.addEventListener('pointerdown',function(e){
  if(state!=='run'&&state!=='count') return;
  var r=scene.getBoundingClientRect();
  setLane(Math.floor((e.clientX-r.left-road.x)/road.lane));
  if(guide&&state==='run'){ guide=false; S.guided=true; save(); }
});
window.addEventListener('keydown',function(e){
  if(state==='run'||state==='count'){
    var used=true;
    if(e.key==='ArrowLeft'||e.key==='a') setLane(car.lane-1);
    else if(e.key==='ArrowRight'||e.key==='d') setLane(car.lane+1);
    else if(e.key==='1'||e.key==='2'||e.key==='3') setLane(+e.key-1);
    else if(e.key===' '||e.key==='ArrowUp'||e.key==='w') doBoost();
    else if(e.key==='h') doHint();
    else if(e.key==='t') doTurbo();
    else if(e.key==='p') pause();
    else used=false;
    if(used){ e.preventDefault(); if(guide&&state==='run'){ guide=false; S.guided=true; save(); } }
  }else if(state==='pause'&&e.key==='p') resume();
});
function on(sel,fn){ $$(sel).forEach(function(b){ b.addEventListener('click',fn); }); }
on('#pa-startBtn',function(){ goFull(); initAudio(); sfxPop(); setTimeout(function(){ burst(W/2,H*0.5,70,1.3); },200); toLevels(); });
on('#pa-backBtn',function(){ hideAll(); show('#pa-startScreen',true); state='menu'; renderTiers(); updateStartBtn(); });
on('.pa-tierBtn',openTier);
on('.pa-rapotBtn',openRapot);
on('#pa-shareBtn',shareRapot);
on('#pa-saveBtn',saveRapot);
$('#pa-name').addEventListener('input',function(){ S.name=this.value.replace(/[<>]/g,'').slice(0,16); save(); if(hasName()){ nameUi(false); $('#pa-lockMsg').innerHTML='&nbsp;'; } else nameUi(true); });
$('#pa-name').addEventListener('keydown',function(e){ e.stopPropagation(); if(e.key==='Enter') this.blur(); });
on('#pa-againBtn',function(){
  var act=this.getAttribute('data-act');
  if(act==='next'){ initAudio(); sfxWhoosh(); toLevels(lvl+1); }
  else if(act==='menu') toLevels();
  else if(act==='endless') startLevel(-1);
  else startLevel(lvl);
});
on('#pa-retryBtn',function(){ startLevel(lvl); });
on('#pa-menuBtn',toLevels);
on('#pa-pauseBtn',pause);
on('#pa-hornBtn',doBoost);
on('#pa-hintBtn',doHint);
on('#pa-turboBtn',doTurbo);
on('#pa-resumeBtn',resume);
on('#pa-quitBtn',toLevels);
on('#pa-endlessBtn',function(){ if(!hasName()){ needName(); return; } startLevel(-1); });
on('#pa-crownBtn',function(){ initAudio(); sfxPop(); openPremium(); });
on('#pa-codeBtn',tryCode);
on('#pa-premBack',premBack);
$('#pa-code').addEventListener('keydown',function(e){ e.stopPropagation(); if(e.key==='Enter') tryCode(); });
on('#pa-cityBtn',openCity);
on('.pa-cityGo',openCity);
on('#pa-cityBack',function(){ show('#pa-cityScreen',false); resume(); });
on('#pa-relaxBtn',function(){ if(!isPremium()){ initAudio(); sfxPop(); openPremium('Mode Santai'); return; } S.relax=!S.relax; save(); initAudio(); sfxPop(); renderMap(); $('#pa-lockMsg').textContent=S.relax?'Santai: tanpa waktu, maksimal 2 bintang':'Waktu nyala: bisa dapat 3 bintang'; });
on('#pa-hangarBtn',function(){ hideAll(); show('#pa-hangarScreen',true); renderHangar(); });
on('#pa-misBtn',function(){ hideAll(); show('#pa-misScreen',true); renderMissions(); });
on('.pa-toMap',toLevels);
on('.pa-soundBtn',function(){ initAudio(); setSound(!soundOn); });
on('.pa-exit',exitFull);
document.addEventListener('visibilitychange',function(){ if(document.hidden) pause(); });
window.addEventListener('resize',resize);
document.addEventListener('fullscreenchange',onFsChange);
document.addEventListener('webkitfullscreenchange',onFsChange);
if(window.ResizeObserver) new ResizeObserver(function(){ resize(); }).observe(app);

initMissions();
renderTiers(); updateStartBtn();
resize();
requestAnimationFrame(frame);
})();
