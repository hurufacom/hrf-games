/* Kebun Sedekah Desa (versi gratis) - hurufa.com | t.me/hurufacom
   Pasang di Blogger: <div id="ksd">Memuat...</div> lalu <script src=".../kebun-sedekah-desa-gratis.js"></script> */
(function(){if(document.getElementById('ksd-css'))return;var h=document.head||document.getElementsByTagName('head')[0];var l=document.createElement('link');l.rel='stylesheet';l.href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Baloo+2:wght@700;800&family=Nunito:wght@400;700;800&display=swap";h.appendChild(l);var s=document.createElement('style');s.id='ksd-css';s.textContent="\n#ksd{--bg:#f4efe2;--ink:#33291d;--soft-ink:#6b5d4a;--green:#3c8d4f;--green-d:#2a6a39;--soft:#e3f2e5;--water:#2f8fd1;--gold:#f2a71b;--gold-d:#b9770a;--card:#fffaf0;--red:#c4482f;position:relative;max-width:540px;margin:0 auto;background:var(--bg);color:var(--ink);font-family:\"Nunito\",system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;font-size:16px;line-height:1.4;border-radius:18px;overflow:hidden;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;text-align:left}\n#ksd *{box-sizing:border-box}\n#ksd div,#ksd span,#ksd p,#ksd small,#ksd b,#ksd i,#ksd em,#ksd h2,#ksd h3{line-height:inherit;font-family:inherit;letter-spacing:normal;text-transform:none}\n#ksd button{font-family:inherit;color:inherit;margin:0;border:0;background:none;cursor:pointer;touch-action:manipulation;text-transform:none;letter-spacing:normal;line-height:1.2;min-height:0;min-width:0;padding:0;box-shadow:none;text-shadow:none;border-radius:0;font-size:inherit;font-weight:inherit;text-align:center}\n#ksd svg{max-width:none;display:block}\n#ksd p,#ksd h2,#ksd h3{margin:0;padding:0}\n#ksd b{font-weight:800}\n#ksd .ksd-off{display:none!important}\n#ksd .ksd-load{padding:40px 16px;text-align:center;font-weight:700}\n#ksd.ksd-full{position:fixed;left:0;top:0;right:0;bottom:0;width:100%;height:100%;max-width:none;margin:0;z-index:2147483000;border-radius:0;overflow:hidden}\n#ksd.ksd-full{height:100vh;height:100dvh}\n#ksd.ksd-full .ksd-start{height:100%;box-sizing:border-box;overflow-y:auto;-webkit-overflow-scrolling:touch}\n#ksd .ksd-sn a{color:var(--green-d);font-weight:800;text-decoration:underline}\n#ksd:fullscreen{width:100%;height:100%;max-width:none}\n#ksd::backdrop{background:#f4efe2}\n/* layar mulai */\n#ksd .ksd-start{display:flex;flex-direction:column;align-items:center;text-align:center;padding:18px 14px 24px;background:linear-gradient(#cfeef3,#f4efe2 42%)}\n#ksd .ksd-hero{width:210px;height:105px;animation:ksd-bob 2.4s ease-in-out infinite}\n@keyframes ksd-bob{50%{transform:translateY(-6px)}}\n#ksd .ksd-st{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:2rem;font-weight:800;line-height:1.05;margin:4px 0 2px;color:var(--green-d)}\n#ksd .ksd-ss{font-size:.95rem;color:var(--soft-ink);margin-bottom:12px}\n#ksd .ksd-had{position:relative;background:#fff;border-radius:18px;padding:14px 16px;font-size:1.05rem;line-height:1.6;margin:0 0 14px;text-align:left;width:100%;box-shadow:0 3px 0 rgba(0,0,0,.06),0 6px 18px rgba(0,0,0,.06);border-left:5px solid var(--green)}\n#ksd .ksd-had b{color:var(--green-d)}\n#ksd .ksd-cur{display:inline-block;width:2px;height:1.1em;background:var(--green);vertical-align:-2px;margin-left:1px;animation:ksd-blink .7s steps(1) infinite}\n@keyframes ksd-blink{50%{opacity:0}}\n#ksd .ksd-steps{display:flex;align-items:stretch;gap:4px;width:100%;margin:0 0 14px}\n#ksd .ksd-stp{flex:1;background:#fff;border-radius:14px;padding:8px 3px;display:flex;flex-direction:column;align-items:center;box-shadow:0 2px 0 rgba(0,0,0,.07)}\n#ksd .ksd-stp i{font-style:normal;font-size:1.6rem;line-height:1.2}\n#ksd .ksd-stp b{font-size:.85rem}\n#ksd .ksd-stp small{font-size:.68rem;color:var(--soft-ink);line-height:1.2}\n#ksd .ksd-arr{align-self:center;font-weight:800;color:var(--green)}\n#ksd .ksd-lvt{font-weight:800;font-size:.95rem;margin:2px 0 6px}\n#ksd .ksd-seg{display:flex;gap:6px;width:100%;margin-bottom:16px}\n#ksd .ksd-seg button{flex:1;min-height:56px;border-radius:14px;border:2px solid var(--green);background:#fff;font-weight:800;font-size:.92rem;line-height:1.15;box-shadow:0 3px 0 var(--green)}\n#ksd .ksd-seg button small{display:block;font-weight:600;font-size:.72rem;color:var(--soft-ink)}\n#ksd .ksd-seg button.ksd-on{background:var(--green);color:#fff}\n#ksd .ksd-seg button.ksd-on small{color:#e3f2e5}\n#ksd .ksd-go{width:100%;max-width:320px;border-radius:999px;background:var(--green);color:#fff;font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.7rem;font-weight:800;padding:18px 10px;box-shadow:0 7px 0 var(--green-d),0 10px 22px rgba(60,141,79,.35);animation:ksd-breathe 1.6s ease-in-out infinite}\n#ksd .ksd-go:active{transform:translateY(5px);box-shadow:0 2px 0 var(--green-d)}\n@keyframes ksd-breathe{50%{transform:scale(1.05)}}\n#ksd .ksd-sn{font-size:.8rem;color:var(--soft-ink);margin-top:14px}\n#ksd .ksd-reset{margin-top:10px;font-size:.82rem;font-weight:700;color:var(--red);padding:8px 12px;border-radius:10px}\n#ksd .ksd-reset.ksd-sure{background:var(--red);color:#fff}\n/* game */\n#ksd .ksd-game{position:relative;display:flex;flex-direction:column;height:100%;max-width:540px;margin:0 auto;background:var(--bg);overflow:hidden}\n#ksd .ksd-hud{flex:none;display:flex;align-items:center;gap:6px;padding:max(6px,env(safe-area-inset-top)) 10px 4px}\n#ksd .ksd-me{flex:1;min-width:0}\n#ksd .ksd-me b{display:block;font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.05rem;line-height:1.05;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--green-d)}\n#ksd .ksd-me small{display:block;font-size:.68rem;color:var(--soft-ink);font-weight:700}\n#ksd .ksd-ib{width:40px;height:40px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 2px 0 rgba(0,0,0,.1);font-size:1.05rem;flex:none}\n#ksd .ksd-ib svg{width:18px;height:18px}\n#ksd .ksd-chips{flex:none;display:flex;align-items:stretch;gap:6px;padding:2px 10px 6px}\n#ksd .ksd-chip{flex:1;display:flex;align-items:center;justify-content:center;gap:4px;background:#fff;border-radius:999px;padding:5px 6px;font-family:\"Baloo 2\",system-ui,sans-serif;font-weight:800;font-size:1.15rem;font-variant-numeric:tabular-nums;box-shadow:0 2px 0 rgba(0,0,0,.08);line-height:1.1}\n#ksd .ksd-chip.ksd-w{color:var(--water)}\n#ksd .ksd-chip.ksd-s{color:var(--gold-d)}\n#ksd .ksd-chip.ksd-full2{background:#ffe7e1;color:var(--red)}\n#ksd .ksd-bump{animation:ksd-bump .4s}\n@keyframes ksd-bump{50%{transform:scale(1.18)}}\n#ksd .ksd-mis{flex:none;display:flex;align-items:center;gap:8px;margin:0 10px 6px;padding:5px 10px;border-radius:12px;background:var(--green);color:#fff;font-size:.8rem;font-weight:700;text-align:left;min-height:32px}\n#ksd .ksd-req a{color:var(--green-d);font-weight:800;text-decoration:underline}\n#ksd .ksd-mis span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#ksd .ksd-mbar{width:56px;height:8px;border-radius:9px;background:rgba(255,255,255,.3);overflow:hidden;flex:none}\n#ksd .ksd-mbar i{display:block;height:100%;background:var(--gold);border-radius:9px;transition:width .4s}\n#ksd .ksd-scene{position:relative;flex:none;height:clamp(64px,10.5vh,92px);background:#bfe6ee;overflow:hidden;transition:height .7s ease}\n#ksd.ksd-trainon .ksd-scene{height:clamp(104px,19vh,170px)}\n#ksd .ksd-scene svg{width:100%;height:100%}\n#ksd .ksd-sky1{stop-color:#bfe6ee;transition:stop-color 1.5s}\n#ksd .ksd-sky2{stop-color:#eaf7ee;transition:stop-color 1.5s}\n#ksd.ksd-dry .ksd-sky1{stop-color:#f7d79a}\n#ksd.ksd-dry .ksd-sky2{stop-color:#fbeccc}\n#ksd .ksd-cloud{animation:ksd-drift 70s linear infinite}\n#ksd .ksd-c2{animation-duration:95s;animation-delay:-40s}\n#ksd .ksd-rays{transform-origin:330px 46px;animation:ksd-spin 80s linear infinite}\n#ksd .ksd-blades{transform-origin:70px 112px;animation:ksd-spin 9s linear infinite}\n#ksd.ksd-windy .ksd-blades{animation-duration:1.2s}\n#ksd .ksd-kite{transform-origin:96px 150px;animation:ksd-sway 5s ease-in-out infinite alternate}\n#ksd .ksd-balloon{animation:ksd-bob 7s ease-in-out infinite alternate}\n#ksd .ksd-deco{display:none}\n#ksd .ksd-deco.ksd-on{display:inline}\n#ksd .ksd-train{transform:translateX(-170px);cursor:pointer}\n#ksd .ksd-train.ksd-run{animation:ksd-train 13s linear forwards}\n@keyframes ksd-drift{from{transform:translateX(-140px)}to{transform:translateX(460px)}}\n@keyframes ksd-spin{to{transform:rotate(360deg)}}\n@keyframes ksd-sway{from{transform:rotate(-4deg)}to{transform:rotate(5deg)}}\n@keyframes ksd-train{to{transform:translateX(430px)}}\n#ksd .ksd-rain{position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;opacity:0;z-index:5;background-image:repeating-linear-gradient(100deg,transparent 0 16px,rgba(255,255,255,.75) 16px 17px,transparent 17px 30px);background-size:100% 60px}\n#ksd .ksd-rain.ksd-on{animation:ksd-rain 3.6s linear}\n@keyframes ksd-rain{0%{opacity:0;background-position:0 0}12%,85%{opacity:1}100%{opacity:0;background-position:-80px 900px}}\n#ksd .ksd-main{flex:1;min-height:0;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:8px 10px 10px}\n#ksd .ksd-view-k{background:linear-gradient(#dfc59b,#cbaa7a);border-top:5px solid #4fa564}\n#ksd .ksd-view-d{background:#e9f3dc;border-top:5px solid #4fa564}\n#ksd .ksd-tools{display:flex;gap:6px;margin-bottom:8px}\n#ksd .ksd-tool{flex:1;min-height:52px;background:#fff;border-radius:14px;border:3px solid transparent;font-weight:800;font-size:.78rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;box-shadow:0 3px 0 rgba(120,84,46,.35)}\n#ksd .ksd-tool i{font-style:normal;font-size:1.3rem;line-height:1}\n#ksd .ksd-tool i svg{width:22px;height:22px}\n#ksd .ksd-tool.ksd-sel{border-color:var(--gold);background:#fff4d6}\n#ksd .ksd-tool.ksd-sel i{animation:ksd-wig .5s}\n@keyframes ksd-wig{30%{transform:rotate(-18deg)}70%{transform:rotate(14deg)}}\n#ksd .ksd-banner{display:flex;align-items:center;gap:8px;width:100%;margin-bottom:8px;border-radius:14px;padding:8px 10px;font-size:.84rem;font-weight:800;text-align:left;line-height:1.25}\n#ksd .ksd-banner i{font-style:normal;font-size:1.4rem}\n#ksd .ksd-banner small{display:block;font-weight:600;opacity:.9}\n#ksd .ksd-bwarn{border:2px solid #f0b429;background:#fff6dc;color:#7a4b00;animation:ksd-bump 1.6s ease-in-out infinite}\n#ksd .ksd-bwarn.ksd-lv2{border-color:#e5533d;background:#ffe7e1;color:#8a2412}\n#ksd .ksd-bevent{background:#fff;color:var(--ink);border:2px dashed var(--gold-d)}\n#ksd .ksd-plots{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}\n#ksd .ksd-plot{position:relative;background:radial-gradient(ellipse at 50% 80%,#ecd6b0,#d3b182 74%);border-radius:14px;border:2px solid rgba(120,84,46,.3);padding:0 0 5px;overflow:hidden;box-shadow:inset 0 3px 0 rgba(255,255,255,.4),0 2px 0 rgba(120,84,46,.22)}\n#ksd .ksd-plot svg{width:100%;height:auto;aspect-ratio:100/86}\n#ksd .ksd-plot.ksd-hint{box-shadow:0 0 0 4px #3c8d4f;animation:ksd-hint 1.2s ease-in-out infinite}\n@keyframes ksd-hint{50%{box-shadow:0 0 0 7px rgba(60,141,79,.45)}}\n#ksd .ksd-plot.ksd-lock{border-style:dashed;border-color:rgba(120,84,46,.5);background:rgba(255,255,255,.32);color:#6b4f33;font-size:.78rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-direction:column;min-height:100px;line-height:1.2}\n#ksd .ksd-plot.ksd-lock b{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1rem;color:#a35f00}\n#ksd .ksd-tag{position:absolute;top:4px;left:4px;right:4px;z-index:2;font-size:.68rem;font-weight:800;text-align:center;border-radius:999px;padding:2px 3px;pointer-events:none;line-height:1.2}\n#ksd .ksd-t-ripe{background:#d9f2dd;color:#1f6b33;animation:ksd-pulse 1s infinite}\n#ksd .ksd-t-thirsty{background:#fff3cd;color:#8a5a00}\n#ksd .ksd-t-weed{background:#fde2d6;color:#9a3b12}\n#ksd .ksd-t-wet{background:#dcefff;color:#1d5f8f}\n#ksd .ksd-t-wind{background:#ffe0b2;color:#8a3c00;animation:ksd-pulse .8s infinite}\n#ksd .ksd-t-empty{background:rgba(255,255,255,.85);color:var(--ink)}\n@keyframes ksd-pulse{50%{transform:scale(1.06)}}\n#ksd .ksd-bub{position:absolute;top:4px;left:3px;right:3px;z-index:3;background:var(--green);color:#fff;font-size:.72rem;font-weight:800;line-height:1.2;text-align:center;border-radius:12px;padding:5px 4px;pointer-events:none;animation:ksd-bubble 1s ease-in-out infinite;box-shadow:0 3px 8px rgba(0,0,0,.2)}\n#ksd .ksd-bub em{position:absolute;left:50%;top:100%;margin:16px 0 0 -12px;font-style:normal;font-size:1.6rem;animation:ksd-hand 1s ease-in-out infinite}\n@keyframes ksd-bubble{50%{transform:translateY(-3px)}}\n@keyframes ksd-hand{50%{transform:translateY(-8px)}}\n#ksd .ksd-pb{display:block;padding:0 7px}\n#ksd .ksd-pn{display:block;font-size:.7rem;font-weight:800;color:#4a3320;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}\n#ksd .ksd-wb,#ksd .ksd-gb{display:block;height:6px;border-radius:3px;overflow:hidden;margin-top:2px}\n#ksd .ksd-wb{background:linear-gradient(90deg,#efbf9a 0 30%,#bfe6b0 30% 85%,#bcdcf3 85%)}\n#ksd .ksd-gb{background:rgba(90,60,30,.22)}\n#ksd .ksd-wb i,#ksd .ksd-gb i{display:block;height:100%;border-radius:3px;transition:width .5s}\n#ksd .ksd-wb i{background:rgba(47,143,209,.85)}\n#ksd .ksd-gb i{background:#8fd46f}\n#ksd .ksd-shake{animation:ksd-shake .3s}\n@keyframes ksd-shake{25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}\n/* desa */\n#ksd .ksd-bask{display:flex;align-items:center;gap:6px;flex-wrap:wrap;background:#fff;border-radius:14px;padding:6px 8px;min-height:46px;margin-bottom:8px;box-shadow:0 2px 0 rgba(0,0,0,.08)}\n#ksd .ksd-bitem{display:flex;align-items:center;gap:2px;font-weight:800;font-size:.9rem}\n#ksd .ksd-bitem svg{width:24px;height:24px}\n#ksd .ksd-empty{color:var(--soft-ink);font-size:.82rem;flex:1}\n#ksd .ksd-kitbtn{margin-left:auto;background:var(--gold);color:#3b2600;border-radius:12px;padding:8px 10px;font-weight:800;font-size:.85rem;box-shadow:0 3px 0 var(--gold-d)}\n#ksd .ksd-sec{font-family:\"Baloo 2\",system-ui,sans-serif;font-weight:800;font-size:1rem;margin:4px 0 6px;color:var(--green-d)}\n#ksd .ksd-trainc{display:flex;align-items:center;gap:8px;width:100%;background:#fff;border-radius:14px;padding:8px 10px;margin-bottom:8px;border:2px dashed #4d9fd6;text-align:left;font-size:.8rem;line-height:1.3}\n#ksd .ksd-trainc.ksd-can{border-style:solid;border-color:#6cbf5a;background:#eef9ea}\n#ksd .ksd-trainc svg.ksd-ti{width:46px;height:30px;flex:none}\n#ksd .ksd-want{display:flex;align-items:center;gap:2px;flex-wrap:wrap;font-weight:800;font-size:.9rem;margin-top:2px}\n#ksd .ksd-want svg{width:22px;height:22px}\n#ksd .ksd-want .ksd-have{color:var(--green)}\n#ksd .ksd-want .ksd-miss{color:var(--red)}\n#ksd .ksd-houses{display:grid;grid-template-columns:repeat(2,1fr);gap:7px}\n#ksd .ksd-house{position:relative;background:#fff;border-radius:14px;padding:7px;display:flex;align-items:center;gap:6px;box-shadow:0 3px 0 rgba(0,0,0,.1);text-align:left;min-height:74px;overflow:hidden}\n#ksd .ksd-house svg.ksd-bsvg{width:52px;height:52px;flex:none}\n#ksd .ksd-req{font-size:.76rem;line-height:1.3;min-width:0}\n#ksd .ksd-req b{font-size:.82rem}\n#ksd .ksd-house.ksd-can{box-shadow:0 0 0 3px #6cbf5a,0 3px 0 rgba(0,0,0,.1);animation:ksd-pulse 1.4s infinite}\n#ksd .ksd-house.ksd-thx{background:#e6f3e8}\n#ksd .ksd-house.ksd-next{background:rgba(255,255,255,.5);border:2px dashed #9bbf3a;box-shadow:none;color:var(--soft-ink)}\n#ksd .ksd-timer{position:absolute;left:0;bottom:0;height:4px;background:var(--gold);transition:width 1s linear}\n#ksd .ksd-time{display:inline-block;background:#fff1cf;color:#8a5a00;border-radius:999px;padding:0 6px;font-size:.68rem;font-weight:800}\n/* bawah */\n#ksd .ksd-nav{flex:none;display:flex;align-items:stretch;gap:5px;padding:6px 8px max(8px,env(safe-area-inset-bottom));background:var(--card);border-top:3px solid var(--green)}\n#ksd .ksd-nb{flex:1;min-height:56px;border-radius:14px;background:var(--soft);color:var(--green-d);font-weight:800;font-size:.72rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;position:relative}\n#ksd .ksd-nb i{font-style:normal;font-size:1.3rem;line-height:1.1}\n#ksd .ksd-nb.ksd-on{background:var(--green);color:#fff}\n#ksd .ksd-nb .ksd-dot{position:absolute;top:4px;right:6px;width:12px;height:12px;border-radius:50%;background:#e5533d;border:2px solid #fff}\n#ksd .ksd-quiz{flex:1.7;background:var(--gold);color:#3b2600;font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.15rem;line-height:1.05;border-radius:16px;box-shadow:0 4px 0 var(--gold-d);display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800}\n#ksd .ksd-quiz small{font-family:\"Nunito\",sans-serif;font-weight:700;font-size:.66rem}\n#ksd .ksd-quiz:active{transform:translateY(3px);box-shadow:0 1px 0 var(--gold-d)}\n#ksd .ksd-pulseb{animation:ksd-bump .55s 4}\n#ksd .ksd-brand{position:absolute;right:8px;bottom:2px;font-size:.6rem;font-weight:800;color:rgba(255,255,255,.75);pointer-events:none;z-index:4}\n/* lembar */\n#ksd .ksd-sheet{position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(30,40,25,.5);display:flex;align-items:flex-end;justify-content:center;z-index:9995}\n#ksd .ksd-card{position:relative;width:100%;max-width:540px;max-height:92%;overflow-y:auto;-webkit-overflow-scrolling:touch;background:var(--card);border-radius:22px 22px 0 0;padding:16px 14px max(18px,env(safe-area-inset-bottom));border-top:5px solid var(--gold);animation:ksd-up .25s;-webkit-user-select:none;user-select:none}\n@keyframes ksd-up{from{transform:translateY(40px);opacity:.3}}\n#ksd .ksd-x{position:absolute;top:8px;right:10px;width:44px;height:44px;border-radius:50%;background:var(--soft);font-size:1.3rem;font-weight:800;line-height:1}\n#ksd .ksd-card h2{font-family:\"Baloo 2\",system-ui,sans-serif;font-weight:800;font-size:1.45rem;line-height:1.15;margin-bottom:8px;padding-right:46px}\n#ksd .ksd-card h3{font-family:\"Baloo 2\",system-ui,sans-serif;font-weight:800;font-size:1.05rem;margin:14px 0 6px;color:var(--green-d)}\n#ksd .ksd-card p{margin-bottom:8px;font-size:.92rem}\n#ksd .ksd-qcat{display:inline-block;font-size:.78rem;font-weight:800;background:var(--green);color:#fff;padding:2px 10px;border-radius:99px;margin-bottom:8px}\n#ksd .ksd-qtools{display:flex;gap:6px;margin:0 0 8px}\n#ksd .ksd-qtools button{background:#fff;border:2px solid var(--green);border-radius:12px;padding:6px 10px;font-weight:800;font-size:.82rem;min-height:40px}\n#ksd .ksd-qvis{display:flex;flex-wrap:wrap;gap:4px;justify-content:center;background:var(--soft);border-radius:14px;padding:8px;margin-bottom:8px}\n#ksd .ksd-qvis svg{width:38px;height:38px}\n#ksd .ksd-opts{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0}\n#ksd .ksd-opts.ksd-wide{grid-template-columns:1fr}\n#ksd .ksd-opt{min-height:58px;padding:8px 10px;border-radius:14px;background:#fff;border:2px solid var(--green);font-size:1.12rem;font-weight:800;box-shadow:0 3px 0 var(--green)}\n#ksd .ksd-opt:disabled{box-shadow:none;opacity:.5;cursor:default}\n#ksd .ksd-opt.ksd-ok{background:var(--green);color:#fff;opacity:1}\n#ksd .ksd-opt.ksd-no{background:var(--red);border-color:var(--red);color:#fff;opacity:.85}\n#ksd .ksd-opt.ksd-help{animation:ksd-shake .5s 3;border-color:var(--gold-d);box-shadow:0 0 0 3px #ffd34d}\n#ksd .ksd-res{border-radius:14px;padding:10px 12px;margin-bottom:10px;background:var(--soft)}\n#ksd .ksd-res.ksd-bad{background:#fbe6df}\n#ksd .ksd-res b{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.05rem;display:block;line-height:1.2}\n#ksd .ksd-res p{margin:2px 0 0}\n#ksd .ksd-row{display:flex;gap:8px}\n#ksd .ksd-btn{flex:1;min-height:54px;border-radius:14px;background:var(--gold);color:#3b2600;font-family:\"Baloo 2\",system-ui,sans-serif;font-weight:800;font-size:1.05rem;box-shadow:0 3px 0 var(--gold-d);padding:6px 12px}\n#ksd .ksd-btn.ksd-ghost{background:var(--soft);color:var(--green-d);box-shadow:0 3px 0 var(--green)}\n#ksd .ksd-list{display:grid;gap:6px}\n#ksd .ksd-item{display:flex;align-items:center;gap:8px;background:#fff;border:2px solid var(--soft);border-radius:14px;padding:6px 8px}\n#ksd .ksd-item > svg{width:44px;height:44px;flex:none}\n#ksd .ksd-item > div{flex:1;min-width:0}\n#ksd .ksd-item b{font-size:.95rem;display:block;line-height:1.15}\n#ksd .ksd-item small{color:var(--soft-ink);font-size:.76rem;display:block;line-height:1.25}\n#ksd .ksd-buy{flex:none;min-width:84px;min-height:46px;border-radius:12px;background:var(--gold);font-weight:800;padding:2px 8px;font-size:.88rem;box-shadow:0 3px 0 var(--gold-d)}\n#ksd .ksd-buy:disabled{background:#e7e2d4;color:var(--soft-ink);box-shadow:none;cursor:default}\n#ksd .ksd-own{flex:none;font-size:.8rem;font-weight:800;color:var(--green)}\n#ksd .ksd-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}\n#ksd .ksd-cell{background:#fff;border:2px solid var(--soft);border-radius:14px;padding:4px;text-align:center;font-size:.72rem;line-height:1.2}\n#ksd .ksd-cell svg{width:100%;height:62px}\n#ksd .ksd-cell.ksd-dim svg{filter:grayscale(1);opacity:.3}\n#ksd .ksd-arab{font-family:\"Amiri\",serif;font-weight:700;font-size:1.8rem;line-height:1.8;text-align:center;direction:rtl;margin:4px 0 6px;color:var(--green-d)}\n#ksd .ksd-stars{text-align:center;font-size:2.4rem;letter-spacing:4px;margin:4px 0}\n#ksd .ksd-big{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:6px 0 10px}\n#ksd .ksd-big div{background:#fff;border-radius:14px;padding:8px 4px;text-align:center;font-size:.72rem;font-weight:700;color:var(--soft-ink)}\n#ksd .ksd-big b{display:block;font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.5rem;color:var(--ink)}\n#ksd .ksd-foot{text-align:center;font-size:.82rem;font-weight:800;color:var(--green-d);margin-top:12px}\n#ksd .ksd-toast{position:fixed;left:50%;top:calc(128px + env(safe-area-inset-top));transform:translateX(-50%) translateY(-260px);max-width:min(92%,480px);background:#33291d;color:#fff;padding:10px 16px;border-radius:14px;font-size:.92rem;font-weight:700;text-align:center;z-index:9998;transition:transform .3s;pointer-events:none}\n#ksd .ksd-toast.ksd-on{transform:translateX(-50%) translateY(0)}\n#ksd .ksd-fx{position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:10000}\n#ksd .ksd-float{position:fixed;font-size:42px;line-height:1;pointer-events:none;z-index:10001;transform:translate(-50%,-50%)}\n#ksd .ksd-float.ksd-snip{animation:ksd-snip .7s ease-out forwards}\n#ksd .ksd-float.ksd-pour{animation:ksd-pour .8s ease-out forwards}\n#ksd .ksd-float.ksd-plus{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:22px;font-weight:800;color:#fff;background:var(--gold-d);padding:2px 10px;border-radius:99px;animation:ksd-rise 1.3s forwards}\n@keyframes ksd-rise{to{transform:translate(-50%,-150%);opacity:0}}\n@keyframes ksd-snip{0%{transform:translate(-50%,-50%) scale(.5) rotate(-30deg);opacity:0}20%{transform:translate(-50%,-50%) scale(1.25) rotate(20deg);opacity:1}40%{transform:translate(-50%,-50%) scale(1.1) rotate(-20deg)}60%{transform:translate(-50%,-50%) scale(1.15) rotate(18deg)}100%{transform:translate(-50%,-90%) scale(1);opacity:0}}\n@keyframes ksd-pour{0%{transform:translate(-20%,-90%) scale(.6) rotate(20deg);opacity:0}25%{transform:translate(-50%,-70%) scale(1.15) rotate(-25deg);opacity:1}70%{transform:translate(-50%,-70%) scale(1.1) rotate(-35deg);opacity:1}100%{transform:translate(-50%,-110%) scale(.9) rotate(-10deg);opacity:0}}\n#ksd .ksd-pause{position:absolute;left:0;top:0;right:0;bottom:0;background:rgba(244,239,226,.94);z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:20px}\n#ksd .ksd-pause b{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:2rem;color:var(--green-d)}\n#ksd .ksd-wig{animation:ksd-wiggle .9s ease-in-out}\n@keyframes ksd-wiggle{0%,70%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-7deg) scale(1.07)}20%{transform:rotate(7deg) scale(1.07)}30%{transform:rotate(-6deg) scale(1.05)}40%{transform:rotate(6deg) scale(1.05)}50%{transform:rotate(-3deg)}60%{transform:rotate(3deg)}}\n#ksd .ksd-sheet.ksd-center{align-items:center;padding:14px}\n#ksd .ksd-sheet.ksd-center .ksd-card{border-radius:22px;border:4px solid var(--gold);max-height:92%;animation:ksd-pop .3s cubic-bezier(.2,1.4,.4,1)}\n@keyframes ksd-pop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}\n#ksd .ksd-bubble{position:relative;background:var(--green);color:#fff;border-radius:16px;padding:10px 14px;font-weight:800;font-size:.95rem;line-height:1.3;text-align:center;margin:0 0 16px;box-shadow:0 3px 0 var(--green-d);animation:ksd-bubble 1.4s ease-in-out infinite}\n#ksd .ksd-bubble:after{content:\"\";position:absolute;left:50%;bottom:-9px;margin-left:-9px;border:9px solid transparent;border-bottom:0;border-top-color:var(--green)}\n#ksd .ksd-bubble.ksd-gold{background:var(--gold);color:#3b2600;box-shadow:0 3px 0 var(--gold-d)}\n#ksd .ksd-bubble.ksd-gold:after{border-top-color:var(--gold)}\n#ksd .ksd-bk{flex:1;min-width:0;display:flex;align-items:center;gap:8px;background:#fff;border:2px solid transparent;border-radius:16px;padding:5px 10px;min-height:58px;box-shadow:0 3px 0 rgba(0,0,0,.1);text-align:left}\n#ksd .ksd-bki{font-size:2.3rem;line-height:1;flex:none}\n#ksd .ksd-bkm{display:flex;flex-direction:column;gap:4px;flex:none;min-width:62px}\n#ksd .ksd-bkm b{font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.5rem;line-height:1;font-variant-numeric:tabular-nums;color:var(--ink)}\n#ksd .ksd-bkbar{display:block;height:7px;border-radius:4px;background:rgba(0,0,0,.1);overflow:hidden}\n#ksd .ksd-bkbar i{display:block;height:100%;width:0;border-radius:4px;background:#6cbf5a;transition:width .4s,background .4s}\n#ksd .ksd-bk.ksd-bkwarn .ksd-bkbar i{background:var(--gold)}\n#ksd .ksd-bk.ksd-bkfull{border-color:var(--red);background:#ffe7e1}\n#ksd .ksd-bk.ksd-bkfull .ksd-bkbar i{background:var(--red)}\n#ksd .ksd-bkl{flex:1;min-width:0;display:flex;flex-wrap:wrap;align-content:center;justify-content:flex-end;gap:2px 8px;font-size:.8rem;font-weight:800}\n#ksd .ksd-bkl span{display:flex;align-items:center;gap:1px}\n#ksd .ksd-bkl svg{width:22px;height:22px}\n#ksd .ksd-bkl em{font-style:normal;color:var(--soft-ink)}\n#ksd .ksd-side{display:flex;flex-direction:column;justify-content:center;gap:5px;flex:none}\n#ksd .ksd-side .ksd-chip{flex:none;font-size:.95rem;padding:3px 9px;min-width:66px;box-shadow:0 2px 0 rgba(0,0,0,.08)}\n#ksd .ksd-jig{animation:ksd-jiggle .8s ease-in-out}\n@keyframes ksd-jiggle{0%,70%,100%{transform:rotate(0) scale(1)}10%{transform:rotate(-3deg) scale(1.04)}25%{transform:rotate(3deg) scale(1.04)}40%{transform:rotate(-2.5deg) scale(1.02)}55%{transform:rotate(2.5deg)}}\n#ksd .ksd-needbox{background:#eef9ea;border:2px solid #6cbf5a;border-radius:14px;padding:8px 10px;margin-bottom:8px;font-size:.88rem}\n#ksd .ksd-needbox small{display:block;color:var(--soft-ink);margin-top:2px}\n#ksd .ksd-note{background:#fff6dc;border:2px solid #f0b429;color:#7a4b00;border-radius:14px;padding:8px 10px;margin-bottom:8px;font-size:.85rem;font-weight:700}\n#ksd .ksd-note button{display:inline-block;margin-top:4px;background:var(--gold);color:#3b2600;border-radius:10px;padding:6px 10px;font-weight:800;min-height:40px}\n#ksd .ksd-nt{display:inline-block;border-radius:999px;padding:1px 8px;font-size:.74rem;font-weight:800;margin-top:2px}\n#ksd .ksd-nt-y{background:#d9f2dd;color:#1f6b33}\n#ksd .ksd-nt-w{background:#fff3cd;color:#8a5a00}\n#ksd .ksd-nt-n{background:#fde2d6;color:#9a3b12}\n#ksd .ksd-nt-b{background:#eadcf7;color:#5a3b8a}\n#ksd .ksd-buy.ksd-soft{background:var(--soft);color:var(--green-d);box-shadow:0 3px 0 var(--green)}\n#ksd .ksd-lbl{display:block;font-weight:800;font-size:.95rem;margin:4px 0 6px}\n#ksd input.ksd-in{display:block;width:100%;font-family:inherit;font-size:1.15rem;font-weight:700;padding:12px 14px;border-radius:14px;border:3px solid var(--green);background:#fff;color:var(--ink);-webkit-user-select:text;user-select:text;outline:none;margin:0;box-shadow:none;height:auto;line-height:1.3;max-width:none}\n#ksd input.ksd-in.ksd-bad{border-color:var(--red);background:#fff1ee}\n#ksd .ksd-err{color:var(--red);font-weight:800;font-size:.85rem;min-height:1.2em;margin:4px 0 4px}\n#ksd .ksd-btn.ksd-dim{opacity:.55}\n#ksd .ksd-rhead{background:var(--green);color:#fff;border-radius:16px;padding:12px 14px;margin:0 52px 10px 0}\n#ksd .ksd-rhead small{display:block;font-weight:800;letter-spacing:1px;font-size:.72rem;opacity:.85}\n#ksd .ksd-rhead b{display:block;font-family:\"Baloo 2\",system-ui,sans-serif;font-size:1.7rem;line-height:1.1;word-break:break-word}\n#ksd .ksd-rhead span{display:block;font-size:.82rem;font-weight:700}\n#ksd .ksd-subjs{display:grid;gap:6px}\n#ksd .ksd-subj{display:grid;grid-template-columns:104px 1fr 92px;align-items:center;gap:8px;background:#fff;border-radius:12px;padding:7px 10px;font-size:.82rem;font-weight:800}\n#ksd .ksd-subj i{display:block;height:10px;border-radius:5px;background:rgba(0,0,0,.08);overflow:hidden}\n#ksd .ksd-subj i em{display:block;height:100%;border-radius:5px;background:#6cbf5a}\n#ksd .ksd-subj span{text-align:right;line-height:1.15}\n#ksd .ksd-subj span small{display:block;font-weight:700;color:var(--soft-ink);font-size:.7rem}\n#ksd .ksd-rimg{display:block;width:100%;height:auto;border-radius:14px;margin:4px 0 8px;box-shadow:0 4px 14px rgba(0,0,0,.15);-webkit-touch-callout:default;-webkit-user-select:auto;user-select:auto}\n#ksd a.ksd-a{display:flex;align-items:center;justify-content:center;text-decoration:none;color:var(--green-d)}\n@media (prefers-reduced-motion:reduce){#ksd *{animation-duration:.01s!important;animation-iteration-count:1!important}#ksd .ksd-train.ksd-run{animation-duration:13s!important}}\n";h.appendChild(s);})();

(function(){
"use strict";
var ROOT=document.getElementById("ksd");
if(!ROOT||ROOT.getAttribute("data-ok"))return;
ROOT.setAttribute("data-ok","1");
/* buka langsung memenuhi seluruh halaman blog */
try{document.body.appendChild(ROOT);ROOT.classList.add("ksd-full");document.documentElement.style.overflow="hidden";document.body.style.overflow="hidden";window.scrollTo(0,0)}catch(e){}

/* =====================================================================
   DATA GAME
   Ubah isi game di blok ini saja. Mesin di bawahnya tidak perlu disentuh.
   CROPS   : tanaman. kind "buah" dipanen ke keranjang, "bunga" dipetik jadi bintang.
             drink = kecepatan haus per detik, need = detik per tahap (ada 4 tahap),
             yield = jumlah buah sekali panen, val = bintang saat bunga dipetik,
             price = harga bibit (0 = sudah dimiliki), rare = bibit gudang (dibuka dengan soal).
   DISHES  : resep dapur (terbuka setelah Warung Desa berdiri).
   BUILD   : bangunan desa. at = jumlah bantuan sampai bangunan pindah ke desa.
   TOOLS, DECO, PLOT_PRICE : isi toko.
   MISSIONS, DAILY, TITLES : misi berurutan, misi harian, gelar.
   BANK    : soal islami, jawaban pertama = benar. l = tingkat (1, 2, 3).
   COMBO   : soal gabungan islami dan matematika, n = jawaban.
   ===================================================================== */
/* ---- VERSI: gratis atau premium. Skrip build mengganti PREMIUM=false menjadi true. ---- */
var PREMIUM=false;
var PREMIUM_URL="https://www.hurufa.com/p/premium.html";
var FREE_CROPS=["tomat","cabai","melati","sepatu"];
var FREE_SUBJ=["Tauhid","Adab"];
var FREE_BUILD_AT=6;
function premA(label,cls){return '<a class="ksd-btn ksd-a'+(cls?' '+cls:'')+'" href="'+PREMIUM_URL+'" target="_blank" rel="noopener">'+label+'</a>'}
function lockedCrop(k){return !PREMIUM&&FREE_CROPS.indexOf(k)<0}
var HADITS_PEMBUKA=['Nabi \ufdfa bersabda: ','tidaklah seorang muslim menanam pohon atau menabur benih, lalu hasilnya dimakan burung, manusia, atau hewan, melainkan itu menjadi sedekah baginya.',' (HR. Bukhari dan Muslim)'];
var HADITS_SEDEKAH={ar:'\u0645\u064e\u0627 \u0646\u064e\u0642\u064e\u0635\u064e\u062a\u0652 \u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064c \u0645\u0650\u0646\u0652 \u0645\u064e\u0627\u0644\u064d',id:'Nabi \ufdfa bersabda: "Sedekah tidak akan mengurangi harta." (HR. Muslim)',at:10};

var CROPS={
 tomat:{n:"Tomat",kind:"buah",drink:1.1,need:6,yield:3,price:0,tip:"cepat haus",fact:"Tomat suka sinar matahari dan cepat haus."},
 cabai:{n:"Cabai",kind:"buah",drink:0.9,need:6,yield:4,price:0,tip:"sedang",fact:"Satu batang cabai bisa berbuah banyak sekali."},
 melati:{n:"Melati",kind:"bunga",drink:0.7,need:5,val:3,price:0,tip:"mudah",fact:"Melati berwarna putih dan harum.",c:"#ffffff",pn:6,rx:5,ry:9,d:9,cc:"#f4c531",cr:4},
 sepatu:{n:"Kembang Sepatu",kind:"bunga",drink:0.75,need:5,val:4,price:0,tip:"mudah",fact:"Kembang sepatu mekar besar dan berwarna cerah.",c:"#e0457b",pn:5,rx:7.5,ry:10,d:8,cc:"#ffd84d",cr:4},
 matahari:{n:"Bunga Matahari",kind:"bunga",drink:0.9,need:6,val:6,price:15,tip:"suka air",fact:"Bunga matahari bisa tumbuh lebih tinggi dari orang dewasa.",c:"#f6b81c",pn:14,rx:3.2,ry:9,d:11,cc:"#6b4423",cr:7},
 jeruk:{n:"Jeruk",kind:"buah",drink:0.8,need:7,yield:3,price:20,tip:"sedang",fact:"Jeruk banyak mengandung vitamin C."},
 telang:{n:"Bunga Telang",kind:"bunga",drink:0.8,need:6,val:9,price:30,tip:"sedang",fact:"Bunga telang berwarna biru dan bisa dibuat minuman.",c:"#3f5fd6",pn:5,rx:7,ry:9,d:8,cc:"#fff3b0",cr:4},
 semangka:{n:"Semangka",kind:"buah",drink:1.4,need:8,yield:2,price:40,tip:"sangat haus",fact:"Semangka berisi banyak air, jadi ia juga butuh banyak air."},
 mawar:{n:"Mawar",kind:"bunga",drink:0.8,need:7,val:12,price:50,tip:"sedang",fact:"Batang mawar berduri, hati-hati saat memetiknya.",c:"#d63b4a",pn:6,rx:7,ry:9,d:7,c2:"#b3263a",cc:"#8f1c2d",cr:3},
 kurma:{n:"Kurma",kind:"buah",drink:0.45,need:9,yield:5,price:60,rare:1,tip:"tahan kering",fact:"Pohon kurma tahan panas dan tidak banyak minum."},
 tulip:{n:"Tulip",kind:"bunga",drink:0.7,need:7,val:15,price:80,tip:"sedang",fact:"Tulip tumbuh dari umbi di dalam tanah.",c:"#ef6a3a",k:"tulip"},
 lavender:{n:"Lavender",kind:"bunga",drink:0.5,need:8,val:19,price:110,rare:1,tip:"tahan kering",fact:"Lavender berwarna ungu dan harum.",c:"#8b6fd1",k:"lav"},
 sakura:{n:"Sakura",kind:"bunga",drink:0.6,need:9,val:24,price:150,rare:1,tip:"sedang",fact:"Bunga sakura mekar bersamaan sehingga pohonnya tampak merah muda.",c:"#ffc7dc",pn:5,rx:7,ry:8,d:8,cc:"#e2588a",cr:3.5}
};
var DISHES={
 sambal:{n:"Sambal",need:{cabai:2,tomat:1}},
 jus:{n:"Jus Jeruk",need:{jeruk:2}},
 esbuah:{n:"Es Buah",need:{semangka:1,jeruk:1}}
};
/* nilai bintang tiap barang saat dikirim lewat kereta */
var TVAL={tomat:2,cabai:2,jeruk:3,semangka:5,kurma:4,sambal:9,jus:7,esbuah:9};
var BUILD=[
 {id:"biru",n:"Rumah Biru",kind:"rumah",roof:"#4f86c6",at:0},
 {id:"hijau",n:"Rumah Hijau",kind:"rumah",roof:"#4f9a5f",at:0},
 {id:"kuning",n:"Rumah Kuning",kind:"rumah",roof:"#e0a82e",at:3},
 {id:"merah",n:"Rumah Merah",kind:"rumah",roof:"#c9553b",at:6},
 {id:"warung",n:"Warung Desa",kind:"warung",at:10,note:"Dapurmu sekarang terbuka. Kamu bisa membuat sambal, jus jeruk, dan es buah."},
 {id:"sekolah",n:"Sekolah",kind:"sekolah",at:15,note:"Sekolah desa butuh buah untuk bekal anak-anak."},
 {id:"ungu",n:"Rumah Ungu",kind:"rumah",roof:"#8b6fd1",at:20},
 {id:"masjid",n:"Masjid Desa",kind:"masjid",at:26,note:"Masjid desa berdiri. Bantu sediakan buah untuk berbuka puasa."}
];
var TOOLS=[
 {id:"ajir",n:"Ajir (penyangga)",p:12,d:"Menahan tanaman tinggi saat angin kencang."},
 {id:"kompos",n:"Kotak kompos",p:25,d:"3 daun kering jadi kompos. Tanaman langsung tumbuh satu tahap."},
 {id:"gembor",n:"Gembor besar",p:40,d:"Sekali siram, petak di sebelahnya ikut tersiram."},
 {id:"rak",n:"Rak keranjang",p:45,d:"Keranjang muat 30 barang."},
 {id:"sumur",n:"Sumur dalam",p:50,d:"Air sumur bertambah dua kali lebih cepat."}
];
var DECO=[
 {id:"pagar",n:"Pagar kayu",p:20},{id:"lampu",n:"Lampu taman",p:30},{id:"bangku",n:"Bangku taman",p:35},
 {id:"kincir",n:"Kincir angin",p:45},{id:"layang",n:"Layang-layang",p:55},{id:"mancur",n:"Air mancur",p:70},
 {id:"balon",n:"Balon udara",p:90},{id:"pelangi",n:"Pelangi",p:120}
];
var PLOT_PRICE=[20,35,50,70,90];
var START_SEEDS=["tomat","cabai","melati","sepatu"];
var MISSIONS=[
 ["Panen buah pertamamu","harvest",1,5],["Jawab 3 soal dengan benar","correct",3,5],["Bantu 1 rumah tetangga","helped",1,5],
 ["Petik 1 bunga yang mekar","blooms",1,5],["Bantu 3 rumah","helped",3,8],["Jawab benar 3 kali berturut-turut","best",3,8],
 ["Beli 1 bibit baru di Toko","seeds",5,10],["Kirim 1 pesanan lewat kereta","sent",1,10],["Panen sempurna 1 kali","perfect",1,10],
 ["Panen 15 kali","harvest",15,12],["Pasang 1 hiasan taman","decos",1,10],["Bantu 8 rumah","helped",8,15],
 ["Masak 1 kali di dapur","cooked",1,12],["Jawab benar 5 kali berturut-turut","best",5,15],["Kumpulkan 6 jenis tanaman","kinds",6,20],
 ["Bantu 15 rumah","helped",15,20],["Jawab 50 soal dengan benar","correct",50,25],["Panen sempurna 10 kali","perfect",10,25],
 ["Bantu 26 rumah sampai masjid desa berdiri","helped",26,40],["Kumpulkan 13 jenis tanaman","kinds",13,50],["Jawab 100 soal dengan benar","correct",100,50]
];
var PREM_M=[6,12,14,18,19,20],FREE_M=0;
(function(){var f=[],p=[];MISSIONS.forEach(function(m,i){(PREM_M.indexOf(i)<0?f:p).push(m)});MISSIONS=f.concat(p);FREE_M=f.length})();
var BUILD_ALL=BUILD;
if(!PREMIUM)BUILD=BUILD.filter(function(b){return b.at<=FREE_BUILD_AT});
var DAILY=[["Panen 5 kali","harvest",5,10],["Bantu 3 tetangga","helped",3,10],["Jawab 8 soal dengan benar","correct",8,10]];
var TITLES=[[0,"Penanam Biji"],[3,"Tukang Kebun Cilik"],[8,"Petani Rajin"],[15,"Sahabat Desa"],[26,"Penjaga Kebun Desa"],[45,"Juragan Kebun Sedekah"]];
var AGES=[["4-6 tahun","TK"],["7-9 tahun","SD kecil"],["10-12 tahun","SD besar"]];

var BANK=[
 {c:"Tauhid",l:1,q:"Siapa yang menciptakan kita?",a:["Allah","Matahari","Hujan"],e:"Allah yang menciptakan kita dan seluruh alam."},
 {c:"Tauhid",l:1,q:"Siapa yang menumbuhkan bunga dan pohon?",a:["Allah","Tukang kebun","Tanah"],e:"Kita hanya menanam dan menyiram. Allah yang menumbuhkannya."},
 {c:"Tauhid",l:1,q:"Siapa yang menurunkan hujan?",a:["Allah","Awan","Angin"],e:"Allah yang menurunkan hujan dari langit."},
 {c:"Tauhid",l:1,q:"Siapa yang memberi kita rezeki buah dan sayur?",a:["Allah","Tukang sayur","Pohon"],e:"Allah Ar-Razzaq, Yang Maha Memberi rezeki."},
 {c:"Tauhid",l:1,q:"Kepada siapa kita berdoa?",a:["Hanya kepada Allah","Kepada pohon","Kepada bintang"],e:"Kita berdoa hanya kepada Allah, karena hanya Allah yang mengabulkan doa."},
 {c:"Tauhid",l:1,q:"Apa agamamu?",a:["Islam","Indonesia","Arab"],e:"Agama kita adalah Islam."},
 {c:"Tauhid",l:1,q:"Siapa nabi kita?",a:["Nabi Muhammad \ufdfa","Nabi Musa","Nabi Nuh"],e:"Nabi Muhammad \ufdfa adalah nabi dan rasul terakhir."},
 {c:"Tauhid",l:1,q:"Saat melihat bunga yang indah, siapa yang kita puji?",a:["Allah yang menciptakannya","Bunga itu sendiri","Tidak ada"],e:"Semua yang indah adalah ciptaan Allah."},
 {c:"Tauhid",l:2,q:"Di mana Allah?",a:["Di atas langit, di atas 'Arsy","Di dalam bumi","Di dalam laut"],e:"Allah berada di atas 'Arsy, seperti disebutkan dalam surat Thaha ayat 5."},
 {c:"Tauhid",l:2,q:"Untuk apa Allah menciptakan manusia?",a:["Untuk beribadah kepada-Nya","Untuk bermain saja","Untuk makan dan tidur"],e:"Ini disebutkan dalam surat Adz-Dzariyat ayat 56."},
 {c:"Tauhid",l:2,q:"Rukun iman ada berapa?",a:["6","5","4"],e:"Rukun iman ada enam."},
 {c:"Tauhid",l:2,q:"Rukun Islam ada berapa?",a:["5","6","3"],e:"Rukun Islam ada lima."},
 {c:"Tauhid",l:2,q:"Apa arti tauhid?",a:["Mengesakan Allah dalam ibadah","Rajin bersedekah","Berpuasa setiap hari"],e:"Tauhid artinya kita beribadah hanya kepada Allah saja."},
 {c:"Tauhid",l:2,q:"Malaikat yang menyampaikan wahyu kepada para nabi adalah...",a:["Jibril","Mikail","Malik"],e:"Malaikat Jibril menyampaikan wahyu dari Allah."},
 {c:"Tauhid",l:3,q:"Apa dosa yang paling besar?",a:["Syirik, menyekutukan Allah","Malas belajar","Terlambat bangun"],e:"Syirik adalah kezaliman yang paling besar. Lihat surat Luqman ayat 13."},
 {c:"Tauhid",l:3,q:"Rukun iman yang pertama adalah...",a:["Iman kepada Allah","Iman kepada malaikat","Iman kepada hari akhir"],e:"Rukun iman yang pertama adalah iman kepada Allah."},
 {c:"Tauhid",l:3,q:"Bolehkah memakai jimat supaya selamat?",a:["Tidak boleh, kita bertawakal hanya kepada Allah","Boleh","Boleh kalau jimatnya kecil"],e:"Hanya Allah yang menjaga kita. Jimat tidak bisa memberi manfaat."},
 {c:"Ibadah",l:1,q:"Shalat wajib sehari ada berapa kali?",a:["5","3","7"],e:"Subuh, Zhuhur, Ashar, Maghrib, dan Isya."},
 {c:"Ibadah",l:1,q:"Sebelum shalat kita harus...",a:["Berwudhu","Makan","Tidur"],e:"Kita berwudhu dulu supaya suci."},
 {c:"Ibadah",l:1,q:"Saat shalat kita menghadap ke...",a:["Ka'bah","Gunung","Laut"],e:"Ka'bah adalah kiblat kita. Letaknya di kota Makkah."},
 {c:"Ibadah",l:2,q:"Shalat Subuh ada berapa rakaat?",a:["2","3","4"],e:"Shalat Subuh ada 2 rakaat."},
 {c:"Ibadah",l:2,q:"Shalat Maghrib ada berapa rakaat?",a:["3","2","4"],e:"Shalat Maghrib ada 3 rakaat."},
 {c:"Ibadah",l:2,q:"Shalat Zhuhur ada berapa rakaat?",a:["4","2","3"],e:"Shalat Zhuhur ada 4 rakaat."},
 {c:"Ibadah",l:2,q:"Di bulan apa kita wajib berpuasa?",a:["Ramadhan","Syawal","Muharram"],e:"Puasa Ramadhan adalah rukun Islam yang keempat."},
 {c:"Ibadah",l:2,q:"Rukun Islam yang kedua adalah...",a:["Shalat","Puasa","Haji"],e:"Setelah dua kalimat syahadat, rukun Islam berikutnya adalah shalat."},
 {c:"Ibadah",l:2,q:"Hari raya umat Islam ada berapa?",a:["2","3","5"],e:"Idul Fitri dan Idul Adha."},
 {c:"Ibadah",l:2,q:"Ibadah haji dilakukan di kota...",a:["Makkah","Madinah","Jeddah"],e:"Haji dilakukan di Makkah."},
 {c:"Ibadah",l:3,q:"Rukun Islam yang ketiga adalah...",a:["Zakat","Puasa","Haji"],e:"Urutannya: syahadat, shalat, zakat, puasa, haji."},
 {c:"Ibadah",l:3,q:"Shalat Jumat ada berapa rakaat?",a:["2","4","3"],e:"Shalat Jumat ada 2 rakaat."},
 {c:"Al-Qur'an",l:1,q:"Kitab suci kita adalah...",a:["Al-Qur'an","Buku cerita","Kamus"],e:"Al-Qur'an adalah kalam Allah."},
 {c:"Al-Qur'an",l:2,q:"Surat pertama dalam Al-Qur'an adalah...",a:["Al-Fatihah","Al-Ikhlas","An-Naas"],e:"Al-Fatihah artinya pembuka."},
 {c:"Al-Qur'an",l:2,q:"Surat Al-Fatihah ada berapa ayat?",a:["7","5","6"],e:"Al-Fatihah ada 7 ayat."},
 {c:"Al-Qur'an",l:2,q:"Surat Al-Ikhlas ada berapa ayat?",a:["4","3","5"],e:"Al-Ikhlas ada 4 ayat."},
 {c:"Al-Qur'an",l:2,q:"Surat terakhir dalam Al-Qur'an adalah...",a:["An-Naas","Al-Falaq","Al-Ikhlas"],e:"An-Naas adalah surat ke-114."},
 {c:"Al-Qur'an",l:3,q:"Al-Qur'an terdiri dari berapa surat?",a:["114","30","99"],e:"Al-Qur'an ada 114 surat."},
 {c:"Al-Qur'an",l:3,q:"Al-Qur'an terdiri dari berapa juz?",a:["30","114","20"],e:"Al-Qur'an ada 30 juz."},
 {c:"Al-Qur'an",l:3,q:"Surat Al-Ikhlas mengajarkan tentang...",a:["Keesaan Allah","Kisah Nabi Yusuf","Puasa"],e:"Al-Ikhlas menjelaskan bahwa Allah Maha Esa."},
 {c:"Adab",l:1,q:"Sebelum makan kita mengucapkan...",a:["Bismillah","Alhamdulillah","Masya Allah"],e:"Kita menyebut nama Allah sebelum makan."},
 {c:"Adab",l:1,q:"Setelah makan kita mengucapkan...",a:["Alhamdulillah","Bismillah","Astaghfirullah"],e:"Kita memuji Allah atas rezeki-Nya."},
 {c:"Adab",l:1,q:"Kita makan dengan tangan...",a:["Kanan","Kiri","Bebas"],e:"Nabi \ufdfa mengajarkan makan dengan tangan kanan."},
 {c:"Adab",l:1,q:"Bertemu teman muslim, kita mengucapkan...",a:["Assalamu'alaikum","Diam saja","Berteriak"],e:"Mengucap salam adalah doa keselamatan."},
 {c:"Adab",l:1,q:"Kepada ayah dan ibu kita harus...",a:["Berbakti dan berkata lembut","Membentak","Tidak peduli"],e:"Allah memerintahkan kita berbakti kepada orang tua."},
 {c:"Adab",l:1,q:"Tetangga sedang butuh bantuan. Apa yang kita lakukan?",a:["Membantu semampu kita","Pura-pura tidak tahu","Menertawakannya"],e:"Islam mengajarkan kita berbuat baik kepada tetangga."},
 {c:"Adab",l:2,q:"Saat bersedekah, sebaiknya kita memberi barang yang...",a:["Baik dan kita sukai","Sudah busuk","Rusak dan tidak terpakai"],e:"Bersedekahlah dengan barang yang baik, seperti yang ingin kita terima sendiri."},
 {c:"Adab",l:2,q:"Masuk masjid mendahulukan kaki...",a:["Kanan","Kiri","Dua-duanya"],e:"Masuk masjid dengan kaki kanan, keluar dengan kaki kiri."},
 {c:"Adab",l:2,q:"Masuk kamar mandi mendahulukan kaki...",a:["Kiri","Kanan","Dua-duanya"],e:"Masuk kamar mandi dengan kaki kiri, keluar dengan kaki kanan."},
 {c:"Adab",l:2,q:"Setelah bersin kita mengucapkan...",a:["Alhamdulillah","Bismillah","Insya Allah"],e:"Orang yang bersin memuji Allah."},
 {c:"Adab",l:2,q:"Melihat sesuatu yang menakjubkan, kita mengucapkan...",a:["Masya Allah","Astaghfirullah","Innalillahi"],e:"Masya Allah artinya: ini terjadi atas kehendak Allah."},
 {c:"Adab",l:2,q:"Saat berjanji akan melakukan sesuatu besok, kita mengucapkan...",a:["Insya Allah","Alhamdulillah","Bismillah"],e:"Insya Allah artinya: jika Allah menghendaki."},
 {c:"Adab",l:2,q:"Saat berbuat salah, kita memohon ampun dengan mengucapkan...",a:["Astaghfirullah","Alhamdulillah","Masya Allah"],e:"Astaghfirullah artinya: aku memohon ampun kepada Allah."},
 {c:"Benar atau salah",l:1,tf:true,q:"Allah Maha Melihat, walaupun kita sedang sendirian.",e:"Allah selalu melihat kita di mana pun."},
 {c:"Benar atau salah",l:1,tf:false,q:"Kita boleh berdoa kepada selain Allah.",e:"Berdoa hanya kepada Allah saja."},
 {c:"Benar atau salah",l:1,tf:true,q:"Sedekah boleh sedikit, misalnya satu buah.",e:"Nabi \ufdfa menyuruh kita menjaga diri dari neraka walau dengan sedekah separuh kurma (HR. Bukhari dan Muslim)."},
 {c:"Benar atau salah",l:2,tf:false,q:"Shalat Subuh ada 4 rakaat.",e:"Shalat Subuh ada 2 rakaat."},
 {c:"Benar atau salah",l:2,tf:true,q:"Menyingkirkan duri dari jalan termasuk kebaikan.",e:"Menyingkirkan gangguan dari jalan adalah bagian dari iman."},
 {c:"Benar atau salah",l:2,tf:true,q:"Nabi Muhammad \ufdfa adalah nabi terakhir.",e:"Tidak ada nabi setelah beliau."},
 {c:"Benar atau salah",l:3,tf:false,q:"Bintang di langit bisa menentukan nasib kita.",e:"Hanya Allah yang menentukan takdir. Ramalan bintang tidak boleh dipercaya."}
];
var COMBO=[
 {l:1,q:"Rakaat Subuh ada 2. Rakaat Maghrib ada 3. Berapa jumlahnya?",n:5,e:"2 + 3 = 5 rakaat."},
 {l:1,q:"Shalat wajib ada 5. Kamu sudah shalat 2 kali hari ini. Berapa kali lagi?",n:3,e:"5 - 2 = 3 shalat lagi."},
 {l:1,q:"Kamu punya 7 tomat. 2 tomat kamu berikan kepada tetangga. Sisa berapa?",n:5,e:"7 - 2 = 5. Memberi tetangga itu menumbuhkan kasih sayang."},
 {l:1,q:"Kamu memanen 4 tomat dan 3 cabai. Berapa buah semuanya?",n:7,e:"4 + 3 = 7 buah."},
 {l:1,q:"Rukun Islam ada 5. Kamu sudah hafal 3. Berapa lagi yang belum?",n:2,e:"5 - 3 = 2."},
 {l:1,q:"Al-Fatihah ada 7 ayat. Kamu sudah membaca 4 ayat. Sisa berapa ayat?",n:3,e:"7 - 4 = 3 ayat."},
 {l:1,q:"Kamu bersedekah 1 buah setiap hari. Dalam 4 hari, berapa buah?",n:4,e:"1 + 1 + 1 + 1 = 4 buah."},
 {l:2,q:"Jumlah rukun Islam ditambah jumlah rukun iman, berapa?",n:11,e:"5 + 6 = 11."},
 {l:2,q:"Rakaat Zhuhur ditambah rakaat Ashar, berapa?",n:8,e:"4 + 4 = 8 rakaat."},
 {l:2,q:"Shalat wajib 5 kali sehari. Dalam 3 hari, berapa kali?",n:15,e:"5 x 3 = 15 kali."},
 {l:2,q:"Al-Ikhlas 4 ayat dan Al-Falaq 5 ayat. Berapa jumlah ayatnya?",n:9,e:"4 + 5 = 9 ayat."},
 {l:2,q:"Bulan Ramadhan 30 hari. Kamu sudah berpuasa 10 hari. Sisa berapa hari?",n:20,e:"30 - 10 = 20 hari."},
 {l:2,q:"Ada 4 rumah. Tiap rumah diberi 3 jeruk. Berapa jeruk yang dibagikan?",n:12,e:"4 x 3 = 12 jeruk."},
 {l:2,q:"Saat wudhu, tangan kanan dibasuh 3 kali dan tangan kiri 3 kali. Berapa kali semuanya?",n:6,e:"3 + 3 = 6 kali."},
 {l:3,q:"Berapa jumlah rakaat shalat wajib dalam sehari?",n:17,e:"2 + 4 + 4 + 3 + 4 = 17 rakaat."},
 {l:3,q:"Setelah shalat: Subhanallah 33 kali, Alhamdulillah 33 kali, Allahu Akbar 33 kali. Berapa jumlahnya?",n:99,e:"33 x 3 = 99."},
 {l:3,q:"Kamu punya 36 kurma, dibagi rata ke 4 rumah. Tiap rumah dapat berapa?",n:9,e:"36 : 4 = 9 kurma."},
 {l:3,q:"Al-Qur'an ada 30 juz. Jika membaca 2 juz sehari, selesai dalam berapa hari?",n:15,e:"30 : 2 = 15 hari."},
 {l:3,q:"Seminggu ada 7 hari. Berapa kali shalat wajib dalam seminggu?",n:35,e:"5 x 7 = 35 kali."},
 {l:3,q:"Al-Qur'an ada 114 surat. Kamu sudah hafal 14 surat. Berapa surat lagi?",n:100,e:"114 - 14 = 100 surat."}
];
/* ======================= AKHIR DATA GAME ======================= */

var CK=Object.keys(CROPS);
var KEY="ksd-kebun-sedekah-desa-v1";
function fresh(){return {v:1,age:2,water:8,stars:0,daun:0,plots:[null,null,null,null],seeds:START_SEEDS.slice(),tools:{},decos:[],basket:{},coll:{},vh:{},reqs:{},train:null,
 name:"",cat:{},correct:0,streak:0,best:0,harvest:0,blooms:0,helped:0,given:0,sent:0,cooked:0,perfect:0,mi:0,tut:0,hadShown:false,daily:null,bestScore:0,sound:true,lastSeen:0,wellT:0,played:false,built:2};}
var S=fresh();
function save(){S.lastSeen=Date.now();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function load(){try{var d=JSON.parse(localStorage.getItem(KEY));if(d&&d.plots&&d.plots.length){S=Object.assign(fresh(),d);return true}}catch(e){}return false}
var hasSave=load();

var rnd=function(n){return Math.floor(Math.random()*n)};
var pick=function(a){return a[rnd(a.length)]};
var shuffle=function(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=rnd(i+1),t=a[i];a[i]=a[j];a[j]=t}return a};
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
var $=function(sel){return ROOT.querySelector(sel)};
function nm(k){return CROPS[k]?CROPS[k].n:(DISHES[k]?DISHES[k].n:k)}
function bTotal(){var t=0;for(var k in S.basket)t+=S.basket[k];return t}
function cap(){return S.tools.rak?30:15}
function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}

/* ======================= SUARA (hanya desis/noise, tanpa nada) ======================= */
var ac=null,nb=null;
function initAudio(){
 if(!ac){try{var A=window.AudioContext||window.webkitAudioContext;if(A){ac=new A();var len=ac.sampleRate*2;nb=ac.createBuffer(1,len,ac.sampleRate);var d=nb.getChannelData(0);for(var i=0;i<len;i++)d[i]=Math.random()*2-1}}catch(e){ac=null}}
 try{if(ac&&ac.state==="suspended")ac.resume()}catch(e){}
}
function burst(o){
 if(!ac||!S.sound)return;
 try{
  var t0=ac.currentTime+(o.t||0),dur=o.dur||.1;
  var s=ac.createBufferSource();s.buffer=nb;s.loop=true;
  var fl=ac.createBiquadFilter();fl.type=o.type||"bandpass";fl.Q.value=o.q||.7;
  fl.frequency.setValueAtTime(o.f||1000,t0);if(o.f2)fl.frequency.exponentialRampToValueAtTime(o.f2,t0+dur);
  var g=ac.createGain();g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(o.g||.4,t0+Math.min(o.att||.008,dur*.9));if(o.hold)g.gain.linearRampToValueAtTime((o.g||.4)*.75,t0+dur*.82);g.gain.exponentialRampToValueAtTime(.0001,t0+dur);
  s.connect(fl);fl.connect(g);g.connect(ac.destination);s.start(t0,Math.random()*1.5);s.stop(t0+dur+.05);
 }catch(e){}
}
var SFX={
 tap:function(){burst({dur:.03,type:"highpass",f:3500,g:.12})},
 trickle:function(t,n){t=t||0;n=n||10;for(var i=0;i<n;i++)burst({t:t+i*.05+Math.random()*.04,dur:.04,f:900+rnd(2600),q:2.5,g:.3})},
 splash:function(){burst({dur:.4,f:500,f2:2600,g:.5});for(var i=0;i<5;i++)burst({t:.12+i*.06+Math.random()*.03,dur:.035,type:"highpass",f:3500,g:.22});burst({t:.1,dur:.9,att:.25,type:"lowpass",f:1400,f2:600,g:.2});SFX.trickle(.2,10)},
 wind:function(t,dur,g){t=t||0;dur=dur||1.4;g=g||.3;burst({t:t,dur:dur,att:dur*.45,f:280,f2:1100,q:1.2,g:g});burst({t:t+dur*.2,dur:dur*.8,att:dur*.3,type:"lowpass",f:520,f2:220,g:g*.6})},
 snip:function(t){t=t||0;[0,.1].forEach(function(dt){burst({t:t+dt,dur:.02,type:"highpass",f:6500,g:.5});burst({t:t+dt,dur:.07,f:4200,q:3,g:.4})})},
 rustle:function(t){t=t||0;for(var i=0;i<8;i++)burst({t:t+i*.045+Math.random()*.02,dur:.05,type:"highpass",f:1800+rnd(1500),g:.2})},
 soil:function(){burst({dur:.18,type:"lowpass",f:900,f2:180,g:.6})},
 knock:function(){burst({dur:.06,type:"lowpass",f:700,f2:200,g:.7});burst({t:.12,dur:.06,type:"lowpass",f:700,f2:200,g:.6})},
 pop:function(t){burst({t:t||0,dur:.07,type:"lowpass",f:2200,f2:250,g:.85})},
 coins:function(t,n){t=t||0;n=n||6;for(var i=0;i<n;i++)burst({t:t+i*.06+Math.random()*.03,dur:.03,type:"highpass",f:5500,g:.2})},
 correct:function(){SFX.pop();SFX.coins(.06,5)},
 success:function(){SFX.pop(0);SFX.pop(.09);SFX.pop(.18);burst({t:.05,dur:.6,f:300,f2:4500,g:.3});SFX.coins(.25,12)},
 start:function(){SFX.wind(0,1.8,.35);SFX.trickle(.35,14);SFX.pop(.15);SFX.pop(.25);SFX.pop(.35);SFX.coins(.4,12)},
 /* kicau burung: desis disaring sempit yang menyapu naik cepat */
 bird:function(t){t=t||0;var n=2+rnd(3),base=2600+Math.random()*1300,tt=t;for(var i=0;i<n;i++){burst({t:tt,dur:.075,att:.01,f:base,f2:base*(1.3+Math.random()*.3),q:12,g:2.4});tt+=.1+Math.random()*.06}},
 /* kokok ayam "ku-ku-ru-yuuuk": desis yang disaring di 4 harmonik supaya terdengar seperti suara */
 crowSyl:function(t,dur,fa,fb,g,hold){[1,2,3,4].forEach(function(h,i){burst({t:t,dur:dur,att:Math.min(.04,dur*.25),f:fa*h,f2:fb*h,q:26,g:g*[1,.85,.6,.35][i],hold:hold})});burst({t:t,dur:dur,att:.02,f:fa*2.6,f2:fb*2.6,q:2,g:g*.03,hold:hold})},
 rooster:function(t){t=t||0;var g=4.2;SFX.crowSyl(t,.17,500,560,g);SFX.crowSyl(t+.21,.17,560,610,g);SFX.crowSyl(t+.42,.2,620,720,g);SFX.crowSyl(t+.66,.42,740,800,g,true);SFX.crowSyl(t+1.06,.62,790,430,g*.9,true)},
 wrong:function(){burst({dur:.2,type:"lowpass",f:260,f2:120,g:.8})},
 rain:function(){burst({dur:3.6,att:.6,type:"highpass",f:1800,g:.16});SFX.trickle(.3,30)},
 train:function(){for(var i=0;i<26;i++){var x=i/25,env=Math.sin(Math.PI*x);burst({t:i*.45+(i%2?.07:0),dur:.17,f:420,q:1.2,g:.05+.18*env})}burst({t:.2,dur:.9,att:.2,type:"highpass",f:3000,f2:6000,g:.15})}
};
function speak(txt){try{if(!S.sound||!window.speechSynthesis)return;speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(txt);u.lang="id-ID";u.rate=.95;speechSynthesis.speak(u)}catch(e){}}

/* ======================= GAMBAR ======================= */
function fruit(type,x,y,s){
 var T='transform="translate('+x+' '+y+') scale('+(s||1)+')"';
 switch(type){
  case"tomat":return '<g '+T+'><circle r="8" fill="#e53935"/><path d="M-4 -7 L0 -4 L4 -7 L2 -9 L0 -6 L-2 -9Z" fill="#2e7d32"/><circle cx="-3" cy="-2" r="2" fill="#ff8a80"/></g>';
  case"jeruk":return '<g '+T+'><circle r="8" fill="#fb8c00"/><ellipse cx="3" cy="-8" rx="4" ry="2" fill="#43a047"/><circle cx="-3" cy="-2" r="2" fill="#ffcc80"/></g>';
  case"cabai":return '<g '+T+'><path d="M-2 -8 C6 -6 6 6 -4 10 C1 4 1 -2 -2 -8Z" fill="#d32f2f"/><path d="M-3 -9 L1 -9" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/></g>';
  case"semangka":return '<g '+T+'><ellipse rx="11" ry="9" fill="#2e7d32"/><path d="M-6 -7 Q-8 0 -6 7 M0 -9 Q-1 0 0 9 M6 -7 Q8 0 6 7" stroke="#1b5e20" stroke-width="2" fill="none"/></g>';
  case"kurma":return '<g '+T+'><ellipse rx="5" ry="7.5" fill="#7b4a1e"/><ellipse cx="-1.5" cy="-2" rx="1.5" ry="3" fill="#a86b35"/></g>';
  case"sambal":return '<g '+T+'><path d="M-10 -1 H10 Q9 9 0 9 Q-9 9 -10 -1Z" fill="#8d6e4a"/><ellipse cy="-1" rx="10" ry="3.5" fill="#d32f2f"/><circle cx="-3" cy="-2" r="1.3" fill="#ff8a65"/><circle cx="3" cy="-1" r="1.1" fill="#ff8a65"/></g>';
  case"jus":return '<g '+T+'><path d="M-6 -9 H6 L4 10 H-4Z" fill="#e3f2fd" stroke="#90a4ae" stroke-width="1"/><path d="M-5.3 -3 H5.3 L4 10 H-4Z" fill="#fb8c00"/><path d="M2 -12 L4 -3" stroke="#e53935" stroke-width="1.6"/></g>';
  case"esbuah":return '<g '+T+'><path d="M-11 -2 H11 Q10 9 0 9 Q-10 9 -11 -2Z" fill="#9fd8f5"/><circle cx="-5" cy="-3" r="3" fill="#e53935"/><circle cx="1" cy="-4" r="3" fill="#fb8c00"/><circle cx="6" cy="-3" r="2.6" fill="#43a047"/></g>';
 }
 return "";
}
function icon(k){
 if(CROPS[k]&&CROPS[k].kind==="bunga")return '<svg viewBox="15 5 70 85" aria-hidden="true">'+flowerSVG(k,4,false)+'</svg>';
 return '<svg viewBox="-12 -12 24 24" aria-hidden="true">'+fruit(k,0,0,1)+'</svg>';
}
function head(F){
 var s="",i;
 if(F.k==="tulip")return '<path d="M19 30C17 18 21 12 24 9c2 4 4 6 6 6s4-2 6-6c3 3 7 9 5 21-3 7-19 7-22 0z" fill="'+F.c+'"/><ellipse cx="30" cy="23" rx="5" ry="11" fill="#d9542a"/>';
 if(F.k==="lav"){s='<ellipse cx="30" cy="9" rx="4" ry="4" fill="'+F.c+'"/>';for(i=0;i<6;i++)s+='<ellipse cx="'+(30+(i%2?4:-4))+'" cy="'+(14+i*5)+'" rx="5" ry="3.6" fill="'+(i%2?"#7558c2":F.c)+'"/>';return s}
 for(i=0;i<F.pn;i++)s+='<ellipse cx="30" cy="'+(24-F.d)+'" rx="'+F.rx+'" ry="'+F.ry+'" fill="'+F.c+'" stroke="rgba(0,0,0,.12)" stroke-width=".6" transform="rotate('+(i*360/F.pn)+' 30 24)"/>';
 if(F.c2)for(i=0;i<5;i++)s+='<ellipse cx="30" cy="20" rx="5" ry="6" fill="'+F.c2+'" transform="rotate('+(36+i*72)+' 30 24)"/>';
 return s+'<circle cx="30" cy="24" r="'+F.cr+'" fill="'+F.cc+'"/>';
}
function flowerSVG(k,st,dry){
 var F=CROPS[k],g=dry?"#a89257":"#3c9a5a",s='<g transform="translate(15.5 -.3) scale(1.15)">';
 var leaf=function(x,y,r){return '<ellipse cx="'+x+'" cy="'+y+'" rx="7" ry="3.5" fill="'+g+'" transform="rotate('+r+' '+x+' '+y+')"/>'};
 if(st===0)s+='<ellipse cx="30" cy="72" rx="4.5" ry="3.2" fill="#d2ad76"/>';
 else if(st<=2){var top=st===1?62:54;s+='<path d="M30 75V'+top+'" stroke="'+g+'" stroke-width="3" stroke-linecap="round"/>'+leaf(24,top+1,25)+leaf(36,top+1,-25);if(st===2)s+=leaf(25,66,30)+leaf(35,68,-30)}
 else if(st===3)s+='<path d="M30 75V42" stroke="'+g+'" stroke-width="3" stroke-linecap="round"/>'+leaf(23,62,25)+leaf(37,56,-25)+'<ellipse cx="30" cy="35" rx="6" ry="9" fill="'+F.c+'" stroke="rgba(0,0,0,.15)" stroke-width=".6"/><path d="M24 40q6 6 12 0-6 3-12 0z" fill="'+g+'"/>';
 else s+='<path d="M30 75V'+(F.k==="lav"?14:30)+'" stroke="'+g+'" stroke-width="3" stroke-linecap="round"/>'+leaf(23,62,25)+leaf(37,54,-25)+head(F);
 return s+'</g>';
}
function fruitPlant(p,st,dry){
 var s="",L=dry?"#b39b62":"#4caf50",L2=dry?"#9c8550":"#388e3c",ST=dry?"#9a7b4f":"#2f7d43",C=CROPS[p.k];
 if(st===0)return '<ellipse cx="50" cy="83" rx="5" ry="3" fill="#5a3b22"/><path d="M50 82 q1 -5 4 -6" stroke="'+ST+'" stroke-width="2" fill="none"/>';
 if(st===1)return '<path d="M50 85 V68" stroke="'+ST+'" stroke-width="3"/><ellipse cx="44" cy="68" rx="7" ry="3.5" fill="'+L+'" transform="rotate(-25 44 68)"/><ellipse cx="56" cy="67" rx="7" ry="3.5" fill="'+L+'" transform="rotate(25 56 67)"/>';
 if(p.k==="kurma"){
  var h=st===2?58:34,fr;
  s+='<path d="M48 86 L47 '+h+' L53 '+h+' L52 86Z" fill="#8d6e4a"/>';
  for(var y=h+6;y<84;y+=7)s+='<path d="M47 '+y+' L53 '+(y-2)+'" stroke="#6d5236" stroke-width="1.5"/>';
  fr=st===2?[[-18,-6],[18,-6],[-12,-14],[12,-14]]:[[-28,6],[28,6],[-24,-10],[24,-10],[-10,-18],[10,-18]];
  fr.forEach(function(d){s+='<path d="M50 '+h+' Q'+(50+d[0]*.6)+' '+(h+d[1]-6)+' '+(50+d[0])+' '+(h+d[1]+6)+'" stroke="'+L2+'" stroke-width="5" fill="none" stroke-linecap="round"/>'});
  if(st===4)[[44,h+8],[50,h+11],[56,h+8],[47,h+15],[53,h+15]].forEach(function(d){s+=fruit("kurma",d[0],d[1],.75)});
  return s;
 }
 var top=st===2?56:40;
 s+='<path d="M50 86 V'+top+'" stroke="'+ST+'" stroke-width="4"/>';
 if(st===2)return s+'<ellipse cx="41" cy="66" rx="9" ry="4" fill="'+L+'" transform="rotate(-25 41 66)"/><ellipse cx="59" cy="62" rx="9" ry="4" fill="'+L+'" transform="rotate(25 59 62)"/><ellipse cx="50" cy="55" rx="5" ry="8" fill="'+L2+'"/>';
 if(p.k==="semangka"){
  s+='<path d="M50 70 Q30 64 18 76 M50 70 Q70 62 82 74" stroke="'+ST+'" stroke-width="3" fill="none"/>';
  [[22,70],[34,62],[66,62],[78,70],[50,48],[40,52],[60,52]].forEach(function(d){s+='<ellipse cx="'+d[0]+'" cy="'+d[1]+'" rx="8" ry="6" fill="'+L+'"/>'});
 }else{
  [[38,52],[62,52],[50,38],[42,64],[58,64],[50,52]].forEach(function(d,i){s+='<circle cx="'+d[0]+'" cy="'+d[1]+'" r="'+(i===5?14:11)+'" fill="'+(i%2?L2:L)+'"/>'});
 }
 if(st===4){
  var pos=p.k==="semangka"?[[36,76],[64,77]]:[[40,48],[60,46],[50,62],[38,62],[62,62]].slice(0,C.yield);
  pos.forEach(function(d){s+=fruit(p.k,d[0],d[1],p.k==="semangka"?1:.9)});
 }
 return s;
}
function plantSVG(p){
 var w=p&&p.w!=null?p.w:55,soil=w>70?"#8f6a42":w<25?"#d9bb8a":"#b68b5b",s='<ellipse cx="50" cy="86" rx="40" ry="10" fill="'+soil+'"/>';
 if(!p||!p.k)return s+'<g opacity=".75"><circle cx="50" cy="52" r="14" fill="none" stroke="#8a6a45" stroke-width="3" stroke-dasharray="5 4"/><path d="M50 45 V59 M43 52 H57" stroke="#8a6a45" stroke-width="3.5" stroke-linecap="round"/></g>';
 var dry=p.dry||w<12;
 if(p.stake&&p.st>=2)s+='<path d="M72 90 V36" stroke="#a1774a" stroke-width="3.5" stroke-linecap="round"/><path d="M72 52 Q62 52 55 56 M72 68 Q62 68 55 70" stroke="#e2cf9f" stroke-width="1.6" fill="none"/>';
 s+=CROPS[p.k].kind==="bunga"?flowerSVG(p.k,p.st,dry):fruitPlant(p,p.st,dry);
 if(p.weed)[[16,84],[82,83]].forEach(function(d){var x=d[0],y=d[1];s+='<path d="M'+x+' '+y+' l-5 -12 M'+x+' '+y+' l0 -15 M'+x+' '+y+' l5 -11 M'+(x+3)+' '+y+' l8 -9" stroke="#9bbf3a" stroke-width="2.5" stroke-linecap="round"/>'});
 if(p.dry)s+='<path d="M28 86 q4 -6 9 -2 q-4 4 -9 2z" fill="#a0784a"/><path d="M62 88 q5 -5 9 0 q-5 3 -9 0z" fill="#b08850"/><path d="M44 90 q3 -4 7 -1 q-3 3 -7 1z" fill="#8f6a3f"/>';
 if(w>70)s+='<ellipse cx="68" cy="89" rx="9" ry="2.5" fill="#3ea6e8" opacity=".55"/>';
 return s;
}
function bSVG(b,c){
 var win=c>=2?"#ffe28a":"#bfe3f7",s='<svg class="ksd-bsvg" viewBox="0 0 60 60" aria-hidden="true">';
 if(b.kind==="masjid")s+='<rect x="12" y="28" width="36" height="26" rx="2" fill="#f5f0e1"/><path d="M15 29 Q30 4 45 29Z" fill="#3c8d4f"/><rect x="50" y="16" width="6" height="38" fill="#efe6cf"/><path d="M49 16 L53 6 L57 16Z" fill="#3c8d4f"/><path d="M25 54 V43 Q30 36 35 43 V54Z" fill="#8d6e4a"/><rect x="16" y="35" width="6" height="9" rx="3" fill="'+win+'"/><rect x="38" y="35" width="6" height="9" rx="3" fill="'+win+'"/>';
 else if(b.kind==="warung"){s+='<rect x="8" y="26" width="44" height="28" rx="2" fill="#f3e3c3"/>';for(var i=0;i<6;i++)s+='<path d="M'+(6+i*8)+' 18 h8 v8 q-4 4 -8 0z" fill="'+(i%2?"#fff":"#e5533d")+'"/>';s+='<rect x="12" y="38" width="36" height="5" fill="#a8743f"/><rect x="14" y="31" width="5" height="7" rx="1" fill="#fb8c00"/><rect x="22" y="31" width="5" height="7" rx="1" fill="#e53935"/><rect x="30" y="31" width="5" height="7" rx="1" fill="#43a047"/><rect x="40" y="30" width="7" height="7" rx="1" fill="'+win+'"/><rect x="25" y="44" width="10" height="10" fill="#8d6e4a"/>'}
 else if(b.kind==="sekolah")s+='<rect x="4" y="25" width="52" height="29" rx="2" fill="#fde7b0"/><path d="M2 27 L30 11 L58 27Z" fill="#c9553b"/><rect x="29" y="1" width="1.6" height="12" fill="#6d5236"/><rect x="30.6" y="1" width="8" height="2.6" fill="#e53935"/><rect x="30.6" y="3.6" width="8" height="2.6" fill="#fff"/><rect x="9" y="32" width="8" height="8" rx="1" fill="'+win+'"/><rect x="43" y="32" width="8" height="8" rx="1" fill="'+win+'"/><rect x="25" y="40" width="10" height="14" rx="1" fill="#8d6e4a"/><rect x="20" y="30" width="20" height="5" rx="1" fill="#3c8d4f"/>';
 else s+='<rect x="10" y="26" width="40" height="28" rx="2" fill="#f3e3c3"/><path d="M5 28 L30 8 L55 28Z" fill="'+b.roof+'"/><rect x="25" y="38" width="10" height="16" rx="2" fill="#8d6e4a"/><rect x="14" y="32" width="8" height="8" rx="1" fill="'+win+'"/><rect x="38" y="32" width="8" height="8" rx="1" fill="'+win+'"/><rect x="42" y="12" width="5" height="10" fill="#9c8463"/>';
 if(c>=4)s+='<rect x="38" y="49" width="7" height="5" rx="1" fill="#c9553b"/><circle cx="41.5" cy="46" r="3.4" fill="#e0457b"/><circle cx="41.5" cy="46" r="1.3" fill="#ffd84d"/>';
 return s+'</svg>';
}
var TRAIN_ICON='<svg class="ksd-ti" viewBox="0 150 140 44" aria-hidden="true"><rect x="0" y="170" width="38" height="16" rx="2" fill="#4d9fd6"/><rect x="44" y="170" width="38" height="16" rx="2" fill="#6cc070"/><rect x="88" y="166" width="46" height="20" rx="3" fill="#d9483f"/><rect x="88" y="154" width="20" height="14" rx="2" fill="#b9332c"/><g fill="#33383d"><circle cx="9" cy="188" r="4"/><circle cx="29" cy="188" r="4"/><circle cx="53" cy="188" r="4"/><circle cx="73" cy="188" r="4"/><circle cx="100" cy="188" r="5"/><circle cx="122" cy="188" r="5"/></g></svg>';
var ICO_FULL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
var ICO_X='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
var ICO_PAUSE='<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1.5"/><rect x="14" y="5" width="4" height="14" rx="1.5"/></svg>';
var ICO_AJIR='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22V3" stroke="#a1774a" stroke-width="3" stroke-linecap="round"/><path d="M12 9q-5 0-7 3M12 15q5 0 7 2" stroke="#4caf50" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';

/* ======================= KERANGKA TAMPILAN ======================= */
var SCENE='<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><defs><linearGradient id="ksd-gsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="ksd-sky1"/><stop offset="1" class="ksd-sky2"/></linearGradient><pattern id="ksd-pfence" width="16" height="30" patternUnits="userSpaceOnUse" y="208"><path d="M3 30V8l4-5 4 5v22z" fill="#f4e3c3" stroke="#b08a55" stroke-width="1"/></pattern><pattern id="ksd-pties" width="10" height="6" patternUnits="userSpaceOnUse"><rect x="3" width="3" height="6" fill="#6b4a33"/></pattern></defs>'+
 '<rect width="400" height="240" fill="url(#ksd-gsky)"/>'+
 '<g class="ksd-deco" data-deco="pelangi" fill="none" stroke-width="7"><path d="M60 200a140 140 0 0 1 280 0" stroke="#e8605a"/><path d="M67 200a133 133 0 0 1 266 0" stroke="#f2a71b"/><path d="M74 200a126 126 0 0 1 252 0" stroke="#f3dc55"/><path d="M81 200a119 119 0 0 1 238 0" stroke="#6cc070"/><path d="M88 200a112 112 0 0 1 224 0" stroke="#4d9fd6"/><path d="M95 200a105 105 0 0 1 210 0" stroke="#8b6fd1"/></g>'+
 '<g class="ksd-rays" stroke="#f6c443" stroke-width="4" stroke-linecap="round"><path d="M330 12v10M330 70v10M296 46h10M354 46h10M306 22l7 7M347 63l7 7M354 22l-7 7M313 63l-7 7"/></g><circle cx="330" cy="46" r="19" fill="#f8cf4b"/>'+
 '<g class="ksd-cloud" fill="#fff"><ellipse cx="40" cy="40" rx="26" ry="11"/><ellipse cx="58" cy="32" rx="18" ry="12"/><ellipse cx="24" cy="34" rx="14" ry="9"/></g><g class="ksd-cloud ksd-c2" fill="#fff" opacity=".9"><ellipse cx="30" cy="78" rx="22" ry="9"/><ellipse cx="46" cy="72" rx="15" ry="10"/></g>'+
 '<g class="ksd-deco ksd-balloon" data-deco="balon"><path d="M250 30c-17 0-27 12-27 26 0 15 14 26 20 34h14c6-8 20-19 20-34 0-14-10-26-27-26z" fill="#e8605a"/><path d="M250 30c-6 0-10 12-10 26 0 15 5 26 7 34h6c2-8 7-19 7-34 0-14-4-26-10-26z" fill="#fdf1d0"/><path d="M243 90l2 10M257 90l-2 10" stroke="#6b4a33" stroke-width="1.5"/><rect x="243" y="100" width="14" height="10" rx="2" fill="#a8743f"/></g>'+
 '<g class="ksd-deco ksd-kite" data-deco="layang"><path d="M96 150C100 120 110 95 118 70" fill="none" stroke="#5a6b60" stroke-width="1"/><path d="M118 40l14 20-14 26-14-26z" fill="#8b6fd1"/><path d="M118 40v46M104 60h28" stroke="#fff" stroke-width="1.5"/><path d="M118 86q-6 8 0 14t0 14" fill="none" stroke="#e8605a" stroke-width="2"/></g>'+
 '<path d="M0 160Q60 110 130 150T260 140T400 150V240H0z" fill="#a9d9b0"/>'+
 '<g class="ksd-deco" data-deco="kincir"><path d="M64 160l3-48h6l3 48z" fill="#f4e3c3" stroke="#b08a55"/><g class="ksd-blades" fill="#d9603f"><path d="M70 112l-5-34h10z"/><path d="M70 112l5 34h-10z"/><path d="M70 112l-34 5v-10z"/><path d="M70 112l34-5v10z"/></g><circle cx="70" cy="112" r="3" fill="#5b3a24"/></g>'+
 '<path d="M0 186Q90 150 190 178T400 168V240H0z" fill="#79c486"/><rect y="187" width="400" height="6" fill="url(#ksd-pties)"/><path d="M0 188h400M0 192h400" stroke="#4b4f55" stroke-width="1.5"/>'+
 '<g class="ksd-train" data-act="train"><rect x="-6" y="140" width="156" height="56" fill="transparent"/><rect x="0" y="170" width="38" height="16" rx="2" fill="#4d9fd6"/><rect x="11" y="160" width="16" height="12" fill="#f2a71b"/><path d="M19 160v12M11 166h16" stroke="#b9482f" stroke-width="2"/><rect x="44" y="170" width="38" height="16" rx="2" fill="#6cc070"/><text x="47" y="181" font-size="6.3" font-weight="800" fill="#fff" font-family="Nunito,sans-serif">hurufa.com</text><rect x="88" y="168" width="46" height="18" rx="3" fill="#d9483f"/><rect x="88" y="156" width="20" height="14" rx="2" fill="#b9332c"/><rect x="92" y="159" width="12" height="8" fill="#dff1f7"/><rect x="120" y="158" width="7" height="11" fill="#33383d"/><path d="M134 186l8 0-8-8z" fill="#33383d"/><g fill="#33383d"><circle cx="9" cy="188" r="4"/><circle cx="29" cy="188" r="4"/><circle cx="53" cy="188" r="4"/><circle cx="73" cy="188" r="4"/><circle cx="98" cy="188" r="5"/><circle cx="112" cy="188" r="5"/><circle cx="126" cy="188" r="5"/></g><g fill="#fff" opacity=".85"><circle cx="118" cy="150" r="5"/><circle cx="108" cy="142" r="7"/><circle cx="94" cy="136" r="8"/></g></g>'+
 '<rect y="196" width="400" height="44" fill="#4fa564"/>'+
 '<g class="ksd-deco" data-deco="mancur"><ellipse cx="150" cy="222" rx="30" ry="8" fill="#b9c4c9"/><ellipse cx="150" cy="220" rx="25" ry="5.5" fill="#7cc4e6"/><rect x="146" y="200" width="8" height="20" fill="#b9c4c9"/><ellipse cx="150" cy="200" rx="13" ry="3.5" fill="#9aa7ad"/><path d="M150 198q-10-18-18 20M150 198q10-18 18 20M150 198v-12" fill="none" stroke="#bfe6f5" stroke-width="2" stroke-linecap="round"/></g>'+
 '<g class="ksd-deco" data-deco="bangku"><rect x="262" y="206" width="50" height="5" rx="2" fill="#a8743f"/><rect x="262" y="194" width="50" height="4" rx="2" fill="#a8743f"/><rect x="262" y="199" width="50" height="4" rx="2" fill="#bf8a52"/><path d="M267 194v26M307 194v26" stroke="#5b3a24" stroke-width="3"/></g>'+
 '<g class="ksd-deco" data-deco="lampu"><rect x="343" y="176" width="4" height="50" fill="#33383d"/><path d="M337 176h16l-3-14h-10z" fill="#ffe9a6" stroke="#33383d" stroke-width="2"/><path d="M335 162h20l-10-7z" fill="#33383d"/></g>'+
 '<rect class="ksd-deco" data-deco="pagar" y="208" width="400" height="30" fill="url(#ksd-pfence)"/></svg>';

ROOT.innerHTML=
 '<canvas class="ksd-fx"></canvas>'+
 '<div class="ksd-start" id="ksd-start">'+
  '<svg class="ksd-hero" viewBox="0 0 200 100" aria-hidden="true"><g>'+plantSVG({k:"tomat",st:4,w:60})+'</g><g transform="translate(100 0)">'+plantSVG({k:"mawar",st:4,w:60})+'</g></svg>'+
  '<div class="ksd-st">Kebun Sedekah<br>(Simulasi)</div><div class="ksd-ss">Tanam, rawat, panen, lalu bagikan ke tetangga.</div>'+
  '<div class="ksd-had" id="ksd-had"><span>'+HADITS_PEMBUKA[0]+'</span><b>'+HADITS_PEMBUKA[1]+'</b><span>'+HADITS_PEMBUKA[2]+'</span></div>'+
  '<div class="ksd-steps"><div class="ksd-stp"><i>\ud83d\udca7</i><b>Jawab soal</b><small>dapat air</small></div><div class="ksd-arr">\u00bb</div><div class="ksd-stp"><i>\ud83c\udf31</i><b>Rawat</b><small>siram &amp; cabut rumput</small></div><div class="ksd-arr">\u00bb</div><div class="ksd-stp"><i>\ud83e\udd32</i><b>Sedekah</b><small>desa tumbuh</small></div></div>'+
  '<div class="ksd-lvt">Pilih tingkat soal</div><div class="ksd-seg" id="ksd-ages"></div>'+
  '<button class="ksd-go" id="ksd-go" type="button">\u25b6 MULAI BELAJAR</button>'+
  '<button class="ksd-reset ksd-off" id="ksd-reset" type="button">Mulai dari awal</button>'+
  '<div class="ksd-sn">Nyalakan suara \ud83d\udd0a<br><a href="/">\u2190 Kembali ke hurufa.com</a></div>'+
 '</div>'+
 '<div class="ksd-game ksd-off" id="ksd-game">'+
  '<div class="ksd-hud"><div class="ksd-me"><b id="ksd-title">Penanam Biji</b><small id="ksd-sub">Kebun Sedekah (Simulasi) \u00b7 hurufa.com</small></div>'+
   '<button class="ksd-ib" id="ksd-snd" type="button" aria-label="Suara">\ud83d\udd0a</button>'+
   '<button class="ksd-ib" id="ksd-pz" type="button" aria-label="Jeda">'+ICO_PAUSE+'</button>'+
   '<button class="ksd-ib" id="ksd-fs" type="button" aria-label="Layar penuh">'+ICO_FULL+'</button>'+
   '<button class="ksd-ib" id="ksd-ex" type="button" aria-label="Keluar">'+ICO_X+'</button></div>'+
  '<div class="ksd-chips"><button class="ksd-bk" id="ksd-cb" type="button" aria-label="Keranjang panen"><span class="ksd-bki">\ud83e\uddfa</span><span class="ksd-bkm"><b id="ksd-bkn">0/15</b><span class="ksd-bkbar"><i id="ksd-bkb"></i></span></span><span class="ksd-bkl" id="ksd-bkl"></span></button><span class="ksd-side"><span class="ksd-chip ksd-w" id="ksd-cw">\ud83d\udca7 <span>0</span></span><span class="ksd-chip ksd-s" id="ksd-cs">\u2b50 <span>0</span></span></span></div>'+
  '<button class="ksd-mis" id="ksd-mis" type="button"><span id="ksd-mt">Misi</span><b id="ksd-mn">0/0</b><span class="ksd-mbar"><i id="ksd-mb"></i></span></button>'+
  '<div class="ksd-scene">'+SCENE+'<span class="ksd-brand">hurufa.com</span></div>'+
  '<div class="ksd-main ksd-view-k" id="ksd-vk"><div class="ksd-tools" id="ksd-tools"></div><div id="ksd-bnr"></div><div class="ksd-plots" id="ksd-plots"></div></div>'+
  '<div class="ksd-main ksd-view-d ksd-off" id="ksd-vd"><div class="ksd-bask" id="ksd-bask"></div><div class="ksd-sec">Pesanan kereta</div><div id="ksd-trainw"></div><div class="ksd-sec">Bagikan ke tetangga</div><div class="ksd-houses" id="ksd-houses"></div></div>'+
  '<div class="ksd-nav"><button class="ksd-nb ksd-on" type="button" data-view="k"><i>\ud83c\udf31</i>Kebun</button><button class="ksd-nb" type="button" data-view="d" id="ksd-nd"><i>\ud83c\udfe1</i>Desa</button><button class="ksd-quiz" type="button" id="ksd-q">Jawab Soal<small>dapat air \ud83d\udca7</small></button><button class="ksd-nb" type="button" id="ksd-shop"><i>\ud83d\uded2</i>Toko</button><button class="ksd-nb" type="button" id="ksd-book"><i>\ud83d\udccb</i>Rapor</button></div>'+
  '<div class="ksd-rain" id="ksd-rain"></div>'+
  '<div class="ksd-pause ksd-off" id="ksd-pause"><b>Jeda</b><div>Kebunmu menunggu. Tanaman tidak haus selama jeda.</div><button class="ksd-btn" type="button" id="ksd-resume" style="flex:none;min-width:200px">\u25b6 Lanjut</button></div>'+
 '</div>'+
 '<div class="ksd-sheet ksd-off" id="ksd-sheet"><div class="ksd-card" id="ksd-card" role="dialog" aria-modal="true"></div></div>'+
 '<div class="ksd-toast" id="ksd-toast" role="status"></div>';

/* ======================= EFEK ======================= */
var cv=$(".ksd-fx"),cx=cv.getContext("2d"),parts=[],raf=0;
function fit(){var d=window.devicePixelRatio||1;cv.width=innerWidth*d;cv.height=innerHeight*d}
fit();addEventListener("resize",fit);
var COLORS=["#3c8d4f","#6cbf5a","#ffca3a","#f08a24","#3ea6e8","#e53935","#ffffff"],GRASS=["#9bbf3a","#7aa83a","#5f8f2a","#b5d15a","#86b33f"];
function kick(){if(!raf)raf=requestAnimationFrame(step)}
function confetti(x,y,n,spread){var d=window.devicePixelRatio||1;n=n||60;spread=spread||1;for(var i=0;i<n;i++){var a=-Math.PI/2+(Math.random()-.5)*Math.PI*spread,v=(4+Math.random()*7)*d;parts.push({x:x*d,y:y*d,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*6.28,vr:(Math.random()-.5)*.3,w:(5+Math.random()*5)*d,h:(3+Math.random()*4)*d,c:pick(COLORS),life:90+rnd(40)})}kick()}
function grassBurst(x,y,n){var d=window.devicePixelRatio||1;n=n||28;for(var i=0;i<n;i++){var a=-Math.PI/2+(Math.random()-.5)*Math.PI*1.5,v=(3+Math.random()*7)*d;parts.push({kind:"grass",x:(x+(Math.random()-.5)*50)*d,y:y*d,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*6.28,vr:(Math.random()-.5)*.45,w:(2+Math.random()*1.5)*d,h:(9+Math.random()*12)*d,c:pick(GRASS),life:80+rnd(40)})}kick()}
function dropRain(x,y,n){var d=window.devicePixelRatio||1;n=n||22;for(var i=0;i<n;i++)parts.push({kind:"drop",x:(x+(Math.random()-.5)*70)*d,y:(y-55-Math.random()*40)*d,vx:(Math.random()-.5)*.6*d,vy:(1.5+Math.random()*2)*d,r:0,vr:0,w:2.6*d,h:4.5*d,c:Math.random()<.5?"#3ea6e8":"#7cc4f2",life:60,stopY:(y+28+Math.random()*16)*d});kick()}
function step(){
 cx.clearRect(0,0,cv.width,cv.height);var d=window.devicePixelRatio||1;
 parts=parts.filter(function(p){return p.life>0&&p.y<cv.height+40&&!(p.stopY&&p.y>p.stopY)});
 parts.forEach(function(p){
  if(p.kind==="drop")p.vy+=.35*d;else if(p.kind==="grass"){p.vy+=.2*d;p.vx*=.97}else{p.vy+=.25*d;p.vx*=.99}
  p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.life--;
  cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.globalAlpha=Math.min(1,p.life/30);
  if(p.kind==="grass"){cx.strokeStyle=p.c;cx.lineWidth=p.w;cx.lineCap="round";cx.beginPath();cx.moveTo(0,p.h/2);cx.quadraticCurveTo(p.w*2.5,0,0,-p.h/2);cx.stroke()}
  else if(p.kind==="drop"){cx.fillStyle=p.c;cx.beginPath();cx.ellipse(0,0,p.w,p.h,0,0,Math.PI*2);cx.fill()}
  else{cx.fillStyle=p.c;cx.fillRect(-p.w/2,-p.h/2,p.w,p.h)}
  cx.restore();
 });
 raf=parts.length?requestAnimationFrame(step):0;if(!raf)cx.clearRect(0,0,cv.width,cv.height);
}
function bigConfetti(){var w=innerWidth;confetti(w*.2,innerHeight*.6,70,.8);confetti(w*.8,innerHeight*.6,70,.8);confetti(w/2,innerHeight*.4,60,1.4)}
function centerOf(el){var r=el.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]}
function floatFx(txt,cls,x,y){var s=document.createElement("span");s.className="ksd-float "+cls;s.textContent=txt;s.style.left=x+"px";s.style.top=y+"px";ROOT.appendChild(s);setTimeout(function(){s.remove()},1300)}
var toastT;
function toast(msg,ms){var t=$("#ksd-toast");t.textContent=msg;t.classList.add("ksd-on");clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove("ksd-on")},ms||2600)}
function shake(el){el.classList.remove("ksd-shake");void el.offsetWidth;el.classList.add("ksd-shake")}
function bump(el){el.classList.remove("ksd-bump");void el.offsetWidth;el.classList.add("ksd-bump")}
function pulse(el){el.classList.remove("ksd-pulseb");void el.offsetWidth;el.classList.add("ksd-pulseb")}

/* ======================= STATUS & MISI ======================= */
var running=false,paused=false,view="k",tool="water",pickFor=-1;
var drought=0,windT=0,evCD=90,trainCD=35,trainRun=0,trainGift=false,pendingRain=false,sheetOpen=false,sheetLocked=false,introMsg=null,birdCD=10,roosterCD=180,wigCD=4,bwCD=3,trainT=0,trainFail=0;
var thanks={},SS=null,lastW=null,lastS=null,lastB=null;
function stat(k){return {correct:S.correct,harvest:S.harvest,blooms:S.blooms,helped:S.helped,best:S.best,seeds:S.seeds.length,sent:S.sent,perfect:S.perfect,decos:S.decos.length,cooked:S.cooked,kinds:Object.keys(S.coll).length}[k]}
function mission(){if(!PREMIUM&&S.mi>=FREE_M)return ["Misi berikutnya ada di Premium","lock",1e9,0];if(S.mi<MISSIONS.length)return MISSIONS[S.mi];var g=30+(S.mi-MISSIONS.length+1)*10;return ["Bantu "+g+" rumah","helped",g,30]}
function checkMission(){
 var m=mission(),guard=0;
 while(stat(m[1])>=m[2]&&guard++<30){S.stars+=m[3];S.mi++;if(SS)SS.stars+=m[3];toast("Misi selesai: "+m[0]+". Hadiah "+m[3]+" bintang \u2b50",3200);SFX.coins(0,8);m=mission()}
}
function daily(){if(!S.daily||S.daily.d!==today())S.daily={d:today(),c:{harvest:0,helped:0,correct:0},done:[false,false,false]};return S.daily}
function addDaily(k,n){
 var D=daily();D.c[k]=(D.c[k]||0)+(n||1);
 DAILY.forEach(function(m,i){var dv=D.c[m[1]]||0;if(!D.done[i]&&dv>=m[2]){D.done[i]=true;S.stars+=m[3];if(SS)SS.stars+=m[3];setTimeout(function(){toast("Misi harian selesai: "+m[0]+". +"+m[3]+" \u2b50",3200);SFX.coins(0,8)},900)}});
}
function title(){var t=TITLES[0][1];TITLES.forEach(function(x){if(S.helped>=x[0])t=x[1]});return t}
function builtList(){return BUILD.filter(function(b){return S.helped>=b.at})}
function dishesOk(){if(!PREMIUM||S.helped<10)return [];return Object.keys(DISHES).filter(function(d){return Object.keys(DISHES[d].need).every(function(k){return S.seeds.indexOf(k)>=0})})}
function fruitsOwned(){return S.seeds.filter(function(k){return CROPS[k].kind==="buah"})}

/* ======================= PESANAN ======================= */
function newReq(b){
 var f=fruitsOwned(),h=S.helped,it={},dishes=dishesOk(),i,k;
 function add(k,c){it[k]=(it[k]||0)+c}
 if(b.kind==="warung"&&dishes.length)add(pick(dishes),1+(h>20?rnd(2):0));
 else if(b.kind==="masjid"){k=S.seeds.indexOf("kurma")>=0?"kurma":pick(f);add(k,3+rnd(3));if(dishes.indexOf("esbuah")>=0&&Math.random()<.5)add("esbuah",1)}
 else{
  var kinds=h<3?1:h<10?1+rnd(2):1+rnd(3),maxN=h<3?2:h<10?3:4;
  for(i=0;i<kinds;i++)add(pick(f),1+rnd(maxN));
  if(dishes.length&&h>=12&&Math.random()<.3)add(pick(dishes),1);
 }
 if(it.semangka>2)it.semangka=2;
 var timed=b.kind==="masjid"||(h>=5&&Math.random()<.25);
 return {it:it,t:timed?120:0,max:120,lbl:b.kind==="masjid"?"untuk berbuka":"sebelum Maghrib"};
}
function canGive(it){for(var k in it)if((S.basket[k]||0)<it[k])return false;return true}
function wantHTML(it){var s="";for(var k in it){var h=S.basket[k]||0;s+='<span class="ksd-bitem">'+icon(k)+'<span class="'+(h>=it[k]?"ksd-have":"ksd-miss")+'">\u00d7'+it[k]+'</span></span> '}return '<div class="ksd-want">'+s+'</div>'}
function ensureReqs(){builtList().forEach(function(b){if(!S.reqs[b.id])S.reqs[b.id]=newReq(b)})}
function newTrain(){
 var f=fruitsOwned(),it={},n=S.helped<5?1:2+rnd(2),dishes=dishesOk(),rew=0,k;
 for(var i=0;i<n;i++){var kk=pick(f);it[kk]=(it[kk]||0)+2+rnd(3)}
 if(dishes.length&&Math.random()<.4){var d=pick(dishes);it[d]=(it[d]||0)+1}
 if(it.semangka>3)it.semangka=3;
 for(k in it)rew+=it[k]*(TVAL[k]||2);
 return {it:it,rew:Math.round(rew*1.5)};
}

/* ======================= TAMPILAN ======================= */
var plotEls=[],plotCache=[];
(function(){var g=$("#ksd-plots");for(var i=0;i<10;i++){var b=document.createElement("button");b.type="button";b.className="ksd-plot";b.setAttribute("data-i",i);
 b.innerHTML='<span class="ksd-tw"></span><svg viewBox="0 6 100 86" aria-hidden="true"></svg><span class="ksd-pb"><span class="ksd-pn"></span><span class="ksd-wb"><i></i></span><span class="ksd-gb"><i></i></span></span>';
 g.appendChild(b);plotEls.push(b);plotCache.push({})}})();
function tutPlot(){
 if(S.tut===0){return 0}
 if(S.tut===1){for(var i=0;i<S.plots.length;i++)if(S.plots[i]&&S.plots[i].st<4)return i}
 if(S.tut===2){for(var j=0;j<S.plots.length;j++)if(S.plots[j]&&S.plots[j].st===4)return j}
 return -1;
}
function tagFor(p,i,tp){
 if(i===tp){
  if(S.tut===0)return '<span class="ksd-bub">Ketuk di sini untuk menanam!<em>\ud83d\udc46</em></span>';
  if(S.tut===1)return '<span class="ksd-bub">Ketuk untuk menyiram \ud83d\udca7<em>\ud83d\udc46</em></span>';
  if(S.tut===2)return '<span class="ksd-bub">Sudah siap! Ketuk untuk panen<em>\ud83d\udc46</em></span>';
 }
 if(!p)return '<span class="ksd-tag ksd-t-empty">Ketuk untuk menanam</span>';
 if(p.st===4)return '<span class="ksd-tag ksd-t-ripe">'+(CROPS[p.k].kind==="bunga"?"Mekar! Ketuk petik":"Siap panen! Ketuk")+'</span>';
 if(windT>0&&p.st>=2&&!p.stake)return '<span class="ksd-tag ksd-t-wind">Pasang ajir!</span>';
 if(p.dry)return '<span class="ksd-tag ksd-t-weed">Daun kering \u2702\ufe0f</span>';
 if(p.weed)return '<span class="ksd-tag ksd-t-weed">Rumput liar \u2702\ufe0f</span>';
 if(p.w<30)return '<span class="ksd-tag ksd-t-thirsty">Haus!</span>';
 if(p.w>85)return '<span class="ksd-tag ksd-t-wet">Terlalu basah</span>';
 return "";
}
function renderPlots(){
 var n=S.plots.length,tp=tutPlot();
 plotEls.forEach(function(el,i){
  var c=plotCache[i];
  if(i>n||(i===n&&n>=9)){el.classList.add("ksd-off");return}
  el.classList.remove("ksd-off");
  if(i===n){
   if(c.mode!=="lock"){c.mode="lock";c.svg=c.tag=null;el.className="ksd-plot ksd-lock";el.innerHTML='<span>Petak baru</span><b>'+PLOT_PRICE[n-4]+' \u2b50</b><span>ketuk untuk membeli</span>'}
   else el.querySelector("b").textContent=PLOT_PRICE[n-4]+" \u2b50";
   return;
  }
  if(c.mode!=="plot"){c.mode="plot";c.svg=c.tag=c.nm=null;el.className="ksd-plot";el.innerHTML='<span class="ksd-tw"></span><svg viewBox="0 6 100 86" aria-hidden="true"></svg><span class="ksd-pb"><span class="ksd-pn"></span><span class="ksd-wb"><i></i></span><span class="ksd-gb"><i></i></span></span>'}
  var p=S.plots[i];
  el.classList.toggle("ksd-hint",i===tp);
  var tg=tagFor(p,i,tp);if(tg!==c.tag){c.tag=tg;el.querySelector(".ksd-tw").innerHTML=tg}
  var sv=plantSVG(p);if(sv!==c.svg){c.svg=sv;el.querySelector("svg").innerHTML=sv}
  var name=p?CROPS[p.k].n:"\u00a0";if(name!==c.nm){c.nm=name;el.querySelector(".ksd-pn").textContent=name}
  var wb=el.querySelector(".ksd-wb"),gb=el.querySelector(".ksd-gb");
  wb.style.visibility=gb.style.visibility=p?"visible":"hidden";
  if(p){var C=CROPS[p.k];wb.firstChild.style.width=Math.round(p.w)+"%";gb.firstChild.style.width=Math.min(100,(p.st*C.need+p.pr)/(4*C.need)*100)+"%"}
 });
}
function renderTools(){
 var t=[["water","<i>\ud83d\udca7</i>Siram"],["cut","<i>\u2702\ufe0f</i>Gunting"]];
 if(S.tools.ajir)t.push(["ajir","<i>"+ICO_AJIR+"</i>Ajir"]);
 if(S.tools.kompos)t.push(["kompos",'<i>\ud83c\udf42</i>Kompos <span id="ksd-dn"></span>']);
 if(!t.some(function(x){return x[0]===tool}))tool="water";
 $("#ksd-tools").innerHTML=t.map(function(x){return '<button class="ksd-tool'+(x[0]===tool?" ksd-sel":"")+'" type="button" data-tool="'+x[0]+'">'+x[1]+'</button>'}).join("");
 renderDaun();
}
function renderDaun(){var d=$("#ksd-dn");if(d)d.textContent=S.daun+"/3"}
var bnrKey="";
function renderBanner(){
 var tot=bTotal(),c=cap(),lv=tot>=c?2:tot>=Math.ceil(c*.6)?1:0,h="";
 if(drought>0)h+='<div class="ksd-banner ksd-bevent"><i>\u2600\ufe0f</i><span>Kemarau! Tanaman cepat haus.<small>Jawab benar 5 kali berturut-turut supaya hujan turun.</small></span></div>';
 if(windT>0)h+='<div class="ksd-banner ksd-bevent"><i>\ud83c\udf2c\ufe0f</i><span>Angin kencang! ('+windT+' detik)<small>Pilih alat Ajir, ketuk tanaman yang tinggi.</small></span></div>';
 if(lv)h+='<button class="ksd-banner ksd-bwarn'+(lv===2?" ksd-lv2":"")+'" type="button" data-act="godesa"><i>'+(lv===2?"\ud83d\udd14":"\ud83e\udd32")+'</i><span>'+(lv===2?"Keranjang penuh! "+tot+" barang menumpuk.":"Sudah ada "+tot+" barang di keranjang.")+'<small>Jangan disimpan sendiri, ayo bagikan ke tetangga. Ketuk di sini.</small></span></button>';
 if(h!==bnrKey){bnrKey=h;$("#ksd-bnr").innerHTML=h}
}
function renderHUD(){
 $("#ksd-title").textContent=S.name||title();$("#ksd-sub").textContent=(S.name?title()+" \u00b7 ":"Kebun Sedekah (Simulasi) \u00b7 ")+"hurufa.com";
 var cw=$("#ksd-cw"),cs=$("#ksd-cs"),cb=$("#ksd-cb"),tot=bTotal();
 var c0=cap();
 cw.lastChild.textContent=S.water;cs.lastChild.textContent=S.stars;
 $("#ksd-bkn").textContent=tot+"/"+c0;$("#ksd-bkb").style.width=Math.min(100,100*tot/c0)+"%";
 cb.classList.toggle("ksd-bkfull",tot>=c0);cb.classList.toggle("ksd-bkwarn",tot<c0&&tot>=Math.ceil(c0*.6));
 var ks=Object.keys(S.basket).filter(function(k){return S.basket[k]>0}).sort(function(a,b){return S.basket[b]-S.basket[a]});
 var lh=ks.length?ks.slice(0,6).map(function(k){return '<span>'+icon(k)+'<em>\u00d7'+S.basket[k]+'</em></span>'}).join("")+(ks.length>6?'<em>+'+(ks.length-6)+'</em>':""):'<em>Belum ada panen</em>';
 var bl=$("#ksd-bkl");if(bl.getAttribute("data-k")!==lh){bl.setAttribute("data-k",lh);bl.innerHTML=lh}
 if(lastW!==null&&lastW!==S.water)bump(cw);if(lastS!==null&&lastS!==S.stars)bump(cs);
 if(lastB!==null&&tot>lastB)jig(cb);else if(lastB!==null&&tot!==lastB)bump(cb);
 lastW=S.water;lastS=S.stars;lastB=tot;
 var m=mission(),v=Math.min(stat(m[1]),m[2]);
 if(m[1]==="lock"){$("#ksd-mt").textContent="Misi lanjutan ada di Premium";$("#ksd-mn").textContent="\ud83d\udd12";$("#ksd-mb").style.width="0%"}else{$("#ksd-mt").textContent="Misi: "+m[0];$("#ksd-mn").textContent=v+"/"+m[2];$("#ksd-mb").style.width=(100*v/m[2])+"%";}
 $("#ksd-snd").textContent=S.sound?"\ud83d\udd0a":"\ud83d\udd07";
 ROOT.querySelectorAll("[data-deco]").forEach(function(g){g.classList.toggle("ksd-on",S.decos.indexOf(g.getAttribute("data-deco"))>=0)});
 var dot=builtList().some(function(b){return !thanks[b.id]&&S.reqs[b.id]&&canGive(S.reqs[b.id].it)});
 var nd=$("#ksd-nd"),hd=nd.querySelector(".ksd-dot");
 if(dot&&!hd){hd=document.createElement("span");hd.className="ksd-dot";nd.appendChild(hd)}else if(!dot&&hd)hd.remove();
 ROOT.classList.toggle("ksd-dry",drought>0);ROOT.classList.toggle("ksd-windy",windT>0);
}
var houseEls={},houseKey={};
function renderDesa(){
 ensureReqs();var bl=builtList(),items=Object.keys(S.basket).filter(function(k){return S.basket[k]>0});
 var bk=(items.length?items.map(function(k){return '<span class="ksd-bitem">'+icon(k)+'\u00d7'+S.basket[k]+'</span>'}).join(""):'<span class="ksd-empty">Keranjang masih kosong. Rawat tanaman sampai berbuah, lalu panen.</span>')+(S.helped>=10?'<button class="ksd-kitbtn" type="button" data-act="kitchen">\ud83c\udf73 Dapur</button>':"");
 var be=$("#ksd-bask");if(be.getAttribute("data-k")!==bk){be.setAttribute("data-k",bk);be.innerHTML=bk}
 var tw=$("#ksd-trainw"),th;
 if(!S.train)th='<div class="ksd-trainc">'+TRAIN_ICON+'<span>Kereta dari desa sebelah akan membawa pesanan setelah kamu panen pertama kali.</span></div>';
 else{var can=canGive(S.train.it);th='<div class="ksd-trainc'+(can?" ksd-can":"")+'">'+TRAIN_ICON+'<span><b>Desa sebelah memesan</b> \u00b7 hadiah '+S.train.rew+' \u2b50'+wantHTML(S.train.it)+(can?'<b style="color:#2a6a39">Siap! Ketuk kereta saat lewat di atas.</b>':'Kumpulkan dulu, lalu ketuk kereta saat lewat.')+'</span></div>'}
 if(tw.getAttribute("data-k")!==th){tw.setAttribute("data-k",th);tw.innerHTML=th}
 var hs=$("#ksd-houses");
 bl.forEach(function(b){
  var el=houseEls[b.id];
  if(!el){el=document.createElement("button");el.type="button";el.className="ksd-house";el.setAttribute("data-house",b.id);houseEls[b.id]=el}
  if(el.parentNode!==hs)hs.appendChild(el);
  var r=S.reqs[b.id],c=S.vh[b.id]||0,can=!thanks[b.id]&&r&&canGive(r.it);
  var key=b.id+"|"+c+"|"+(thanks[b.id]?1:0)+"|"+JSON.stringify(r&&r.it)+"|"+can+"|"+(r&&r.t?1:0)+"|"+JSON.stringify(S.basket);
  if(houseKey[b.id]!==key){houseKey[b.id]=key;
   el.innerHTML=bSVG(b,c)+(thanks[b.id]?'<div class="ksd-req"><b>'+b.n+'</b><br>Jazakallahu khairan! \u2713</div>':'<div class="ksd-req"><b>'+b.n+'</b>'+(r&&r.t?' <span class="ksd-time">\u23f3 '+r.lbl+'</span>':'')+'<br>Butuh:'+wantHTML(r?r.it:{})+'</div>')+(r&&r.t&&!thanks[b.id]?'<span class="ksd-timer"></span>':'');
  }
  el.classList.toggle("ksd-can",!!can);el.classList.toggle("ksd-thx",!!thanks[b.id]);
  var tm=el.querySelector(".ksd-timer");if(tm&&r&&r.t)tm.style.width=(100*r.t/r.max)+"%";
 });
 var nx=BUILD.filter(function(b){return S.helped<b.at})[0],ne=$("#ksd-next");
 if(!nx&&!PREMIUM){nx=BUILD_ALL.filter(function(b){return b.at>FREE_BUILD_AT})[0];if(nx)nx.__lock=1}
 if(nx){if(!ne){ne=document.createElement("div");ne.id="ksd-next";ne.className="ksd-house ksd-next"}hs.appendChild(ne);
  var nh=bSVG(nx,0).replace('class="ksd-bsvg"','class="ksd-bsvg" style="opacity:.35"')+(nx.__lock?'<div class="ksd-req"><b>'+nx.n+' \ud83d\udd12</b><br>Warung, Sekolah, dan Masjid ada di <a href="'+PREMIUM_URL+'" target="_blank" rel="noopener">Premium</a></div>':'<div class="ksd-req"><b>'+nx.n+'</b><br>pindah ke desa setelah '+nx.at+' bantuan ('+S.helped+'/'+nx.at+')</div>');
  if(ne.getAttribute("data-k")!==nh){ne.setAttribute("data-k",nh);ne.innerHTML=nh}}
 else if(ne)ne.remove();
}
function renderAll(){renderHUD();renderPlots();renderBanner();renderDaun();if(view==="d")renderDesa()}
function setView(v){
 view=v;$("#ksd-vk").classList.toggle("ksd-off",v!=="k");$("#ksd-vd").classList.toggle("ksd-off",v!=="d");
 ROOT.querySelectorAll(".ksd-nb[data-view]").forEach(function(b){b.classList.toggle("ksd-on",b.getAttribute("data-view")===v)});
 if(v==="d"){renderDesa();$("#ksd-vd").scrollTop=0}
}

/* ======================= LEMBAR (SHEET) ======================= */
function openSheet(html,locked,center){sheetLocked=!!locked;sheetOpen=true;$("#ksd-card").innerHTML=(locked?"":'<button class="ksd-x" type="button" data-act="close" aria-label="Tutup">\u2715</button>')+html;var sh=$("#ksd-sheet");sh.classList.toggle("ksd-center",!!center);sh.classList.remove("ksd-off");$("#ksd-card").scrollTop=0}
function closeSheet(){$("#ksd-sheet").classList.add("ksd-off");sheetOpen=false;sheetLocked=false;Q=null;try{speechSynthesis.cancel()}catch(e){}if(pendingRain)setTimeout(rainNow,300);if(introMsg){var im=introMsg;introMsg=null;setTimeout(function(){toast(im,3200)},300)}renderAll()}
function demand(){
 var want={},src={};
 function add(key,n,who){
  if(CROPS[key]){want[key]=(want[key]||0)+n;(src[key]=src[key]||[]).push(who+" \u00d7"+n)}
  else if(DISHES[key]){
   want[key]=(want[key]||0)+n;
   var left=Math.max(0,n-(S.basket[key]||0));
   if(left>0)for(var ing in DISHES[key].need)add(ing,DISHES[key].need[ing]*left,who+" ("+DISHES[key].n+")");
  }
 }
 builtList().forEach(function(b){var r=S.reqs[b.id];if(r&&!thanks[b.id])for(var k in r.it)add(k,r.it[k],b.n)});
 if(S.train)for(var t in S.train.it)add(t,S.train.it[t],"Kereta");
 return {want:want,src:src};
}
function needInfo(k,D){
 D=D||demand();var want=D.want[k]||0,have=S.basket[k]||0,grow=0;
 S.plots.forEach(function(p){if(p&&p.k===k)grow+=CROPS[k].yield||0});
 return {want:want,have:have,grow:grow,gap:want-have-grow,src:D.src[k]||[]};
}
function gapList(D){return fruitsOwned().map(function(k){return [k,needInfo(k,D)]}).filter(function(x){return x[1].gap>0})}
function gapHTML(g){return '<div class="ksd-want">'+g.map(function(x){return '<span class="ksd-bitem">'+icon(x[0])+nm(x[0])+' \u00d7'+x[1].gap+'</span>'}).join(" ")+'</div>'}
function needTag(k,D){
 var C=CROPS[k];
 if(C.kind==="bunga")return '<span class="ksd-nt ksd-nt-b">Untuk bintang \u2b50</span>';
 var n=needInfo(k,D);
 if(n.gap>0)return '<span class="ksd-nt ksd-nt-y">Dibutuhkan \u00d7'+n.gap+'</span><small>'+esc(n.src.join(" \u00b7 "))+'</small>';
 if(n.want>0)return '<span class="ksd-nt ksd-nt-w">Sudah cukup</span><small>Pesanan sudah tertutup oleh stok dan tanamanmu.</small>';
 return '<span class="ksd-nt ksd-nt-n">Belum ada yang butuh</span><small>Kalau ditanam, hasilnya menumpuk di keranjang.</small>';
}
function needWarn(k){return CROPS[k].kind==="buah"&&needInfo(k).gap<=0}
function openSeeds(i){
 pickFor=i;var D=demand(),tot=bTotal(),c=cap(),g=gapList(D);
 var h='<h2>Pilih bibit</h2><div class="ksd-needbox">'+(g.length?'<b>Dibutuhkan sekarang:</b>'+gapHTML(g):'<b>Semua pesanan sudah tercukupi \ud83c\udf89</b><div>Tanam bunga untuk dapat bintang, atau tunggu pesanan baru.</div>')+'<small>Keranjang '+tot+'/'+c+'</small></div>';
 if(tot>=Math.ceil(c*.6))h+='<div class="ksd-note">Keranjang hampir penuh. Bagikan dulu ke tetangga supaya bisa memanen. <button type="button" data-act="basket">Buka keranjang</button></div>';
 var seeds=S.seeds.map(function(k,ix){var C=CROPS[k];return {k:k,ix:ix,g:C.kind==="bunga"?1:(needInfo(k,D).gap>0?0:2)}}).sort(function(a,b){return a.g-b.g||a.ix-b.ix});
 h+='<div class="ksd-list">';
 seeds.forEach(function(x){var k=x.k,C=CROPS[k];h+='<div class="ksd-item">'+icon(k)+'<div><b>'+C.n+'</b><small>'+(C.kind==="buah"?"Buah \u00b7 panen "+C.yield+" \u00b7 ":"Bunga \u00b7 "+C.val+" \u2b50 \u00b7 ")+C.tip+'</small>'+needTag(k,D)+'</div><button class="ksd-buy" type="button" data-act="plant" data-k="'+k+'">Tanam</button></div>'});
 h+='</div>';if(S.seeds.length<CK.length)h+='<p style="margin-top:10px">Bibit lain ada di Toko \ud83d\uded2</p>';
 openSheet(h);
}
function openPlantWarn(k){
 var D=demand(),n=needInfo(k,D),C=CROPS[k],tot=bTotal(),c=cap(),g=gapList(D);
 var why=n.want>0?"Pesanan "+C.n+" sudah tercukupi oleh stok dan tanamanmu.":"Belum ada rumah yang butuh "+C.n+".";
 var h='<h2>Tunggu dulu, tanam '+C.n+'?</h2><p>'+why+' Kalau kebanyakan, keranjang penuh ('+tot+'/'+c+') dan kamu tidak bisa memanen yang lain.</p>';
 if(g.length)h+='<div class="ksd-needbox"><b>Yang sedang dibutuhkan:</b>'+gapHTML(g)+'</div>';
 h+='<div class="ksd-row"><button class="ksd-btn" type="button" data-act="plantback">Pilih bibit lain</button><button class="ksd-btn ksd-ghost" type="button" data-act="plantforce" data-k="'+k+'">Tetap tanam</button></div>';
 openSheet(h);
}
function openShop(){
 var h='<h2>Toko Kebun</h2><p>Bintangmu: <b>'+S.stars+' \u2b50</b>. Dapatkan bintang dari bunga, misi, dan pesanan kereta.</p><h3>Bibit</h3><div class="ksd-list">';
 CK.forEach(function(k){var C=CROPS[k],own=S.seeds.indexOf(k)>=0;
  if(lockedCrop(k)&&!own){h+='<div class="ksd-item">'+icon(k)+'<div><b>'+C.n+' \ud83d\udd12</b><small>'+(C.kind==="buah"?"Buah \u00b7 panen "+C.yield:"Bunga \u00b7 "+C.val+" \u2b50")+' \u00b7 khusus Premium</small></div>'+premA("Lihat Premium","ksd-soft")+'</div>';return}
  h+='<div class="ksd-item">'+icon(k)+'<div><b>'+C.n+(C.rare?" \ud83d\udd12":"")+'</b><small>'+(C.kind==="buah"?"Buah \u00b7 panen "+C.yield:"Bunga \u00b7 "+C.val+" \u2b50")+' \u00b7 '+C.tip+(C.rare?" \u00b7 bibit gudang, dibuka dengan 1 soal":"")+'</small></div>'+(own?'<span class="ksd-own">Sudah punya</span>':'<button class="ksd-buy" type="button" data-act="buys" data-k="'+k+'"'+(S.stars<C.price?" disabled":"")+'>'+C.price+' \u2b50</button>')+'</div>'});
 h+='</div><h3>Alat</h3><div class="ksd-list">';
 TOOLS.forEach(function(t){var own=S.tools[t.id];h+='<div class="ksd-item"><div><b>'+t.n+'</b><small>'+t.d+'</small></div>'+(own?'<span class="ksd-own">Sudah punya</span>':'<button class="ksd-buy" type="button" data-act="buyt" data-id="'+t.id+'"'+(S.stars<t.p?" disabled":"")+'>'+t.p+' \u2b50</button>')+'</div>'});
 h+='</div><h3>Hiasan taman</h3><div class="ksd-list">';
 DECO.forEach(function(d){var own=S.decos.indexOf(d.id)>=0;h+='<div class="ksd-item"><div><b>'+d.n+'</b><small>Tampil di pemandangan atas</small></div>'+(own?'<span class="ksd-own">Terpasang</span>':'<button class="ksd-buy" type="button" data-act="buyd" data-id="'+d.id+'"'+(S.stars<d.p?" disabled":"")+'>'+d.p+' \u2b50</button>')+'</div>'});
 openSheet(h+'</div>');
}
var SUBJ=["Tauhid","Ibadah","Al-Qur'an","Adab","Benar atau salah","Matematika","Soal Gabungan"];
function grade(v){return v>=85?"Sangat baik":v>=70?"Baik":v>=50?"Cukup":"Perlu latihan"}
function rapData(){
 var cat=S.cat||{},subs=[],fb=0,tt=0;
 SUBJ.forEach(function(n){var c=cat[n];if(c&&c[1]){subs.push({n:n,b:c[0],t:c[1],v:Math.round(100*c[0]/c[1])});fb+=c[0];tt+=c[1]}});
 var acc=tt?Math.round(100*fb/tt):0,st=(tt||S.harvest)?1+(acc>=70?1:0)+(S.helped>=8?1:0):0,dt;
 try{dt=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}catch(e){dt=today()}
 return {name:S.name||"Tukang Kebun",title:title(),age:AGES[(S.age||2)-1][0],date:dt,acc:acc,st:st,pred:tt?grade(acc):"Belum ada nilai",subs:subs,
  tiles:[[S.correct,"soal benar"],[S.best,"rekor beruntun"],[S.harvest,"kali panen"],[S.helped,"rumah dibantu"],[S.given,"barang dibagikan"],[builtList().length+"/"+BUILD_ALL.length,"bangunan desa"]]};
}
function openBook(){
 var d=rapData(),D=daily(),m=mission();
 var h='<div class="ksd-rhead"><small>RAPOR KEBUN SEDEKAH</small><b>'+esc(d.name)+'</b><span>'+esc(d.title)+' \u00b7 Tingkat '+d.age+'</span><span>'+d.date+'</span></div>';
 h+='<div class="ksd-stars">'+"\u2b50".repeat(d.st)+'<span style="opacity:.25">'+"\u2b50".repeat(3-d.st)+'</span></div>';
 h+='<p style="text-align:center"><b>Predikat: '+d.pred+'</b>'+(d.subs.length?' \u00b7 nilai rata-rata '+d.acc:'')+'</p>';
 h+='<div class="ksd-big">'+d.tiles.map(function(t){return '<div><b>'+t[0]+'</b>'+t[1]+'</div>'}).join("")+'</div>';
 h+='<h3>Nilai per pelajaran</h3>';
 h+=d.subs.length?'<div class="ksd-subjs">'+d.subs.map(function(x){return '<div class="ksd-subj"><span style="text-align:left">'+esc(x.n)+'</span><i><em style="width:'+x.v+'%"></em></i><span>'+x.v+'<small>'+x.b+'/'+x.t+' \u00b7 '+grade(x.v)+'</small></span></div>'}).join("")+'</div><p style="margin-top:6px;font-size:.78rem;color:var(--soft-ink)">Nilai dihitung dari jawaban yang benar pada percobaan pertama.</p>':'<p>Belum ada soal yang dijawab. Ketuk Jawab Soal untuk mulai.</p>';
 h+='<div class="ksd-row" style="margin-top:10px"><button class="ksd-btn" type="button" data-act="share">\ud83d\udce4 Bagikan rapor (gambar)</button></div>';
 h+='<h3>Misi sekarang</h3>'+(m[1]==="lock"?'<p>'+m[0]+'.</p>':'<p>'+m[0]+' ('+Math.min(stat(m[1]),m[2])+'/'+m[2]+') \u00b7 hadiah '+m[3]+' \u2b50</p>');
 if(!PREMIUM)h+='<div class="ksd-needbox"><b>Versi lengkap (Premium)</b><div>Semua tanaman, semua pelajaran, Warung Desa, Sekolah, Masjid Desa, dapur, dan misi lanjutan.</div></div><div class="ksd-row" style="margin-top:8px">'+premA("\u2b50 Lihat Premium")+'</div>';
 h+='<h3>Misi harian</h3><div class="ksd-list">'+DAILY.map(function(x,i){return '<div class="ksd-item"><div><b>'+(D.done[i]?"\u2705 ":"")+x[0]+'</b><small>'+Math.min(D.c[x[1]]||0,x[2])+'/'+x[2]+' \u00b7 hadiah '+x[3]+' \u2b50</small></div></div>'}).join("")+'</div>';
 h+='<h3>Koleksi tanaman ('+Object.keys(S.coll).length+'/'+CK.length+')</h3><div class="ksd-grid">';
 CK.forEach(function(k){var n=S.coll[k]||0;h+='<div class="ksd-cell'+(n?"":" ksd-dim")+'">'+icon(k)+'<b>'+CROPS[k].n+'</b><br>'+(n?(CROPS[k].kind==="buah"?"dipanen ":"mekar ")+n+"\u00d7<br><small>"+CROPS[k].fact+"</small>":(lockedCrop(k)?"\ud83d\udd12 Premium":"belum"))+'</div>'});
 h+='</div><p style="margin-top:12px;font-size:.82rem">Pesanan kereta terkirim: '+S.sent+'. Masakan dibuat: '+S.cooked+'.</p>';
 h+='<h3>Untuk orang tua</h3><p style="font-size:.84rem">Suara hanya berupa desis angin, air, daun, guntingan, kereta, kicau burung, dan kokok ayam. Tidak ada musik. Kemajuan dan rapor tersimpan di perangkat ini saja.</p>';
 openSheet(h);
}
/* gambar rapor untuk dibagikan */
var rapCv=null,rapBlob=null;
function cvStar(x,cx,cy,r,fill){x.beginPath();for(var i=0;i<10;i++){var a=-Math.PI/2+i*Math.PI/5,q=i%2?r*.45:r;x.lineTo(cx+Math.cos(a)*q,cy+Math.sin(a)*q)}x.closePath();x.fillStyle=fill;x.fill()}
function cvRR(x,X,Y,w,h,r){x.beginPath();x.moveTo(X+r,Y);x.arcTo(X+w,Y,X+w,Y+h,r);x.arcTo(X+w,Y+h,X,Y+h,r);x.arcTo(X,Y+h,X,Y,r);x.arcTo(X,Y,X+w,Y,r);x.closePath()}
function cvFit(x,txt,X,Y,max,size,font){var z=size;do{x.font=font.replace("$",z);z-=2}while(x.measureText(txt).width>max&&z>24);x.fillText(txt,X,Y)}
function svgImg(svg,cb){try{var im=new Image();im.onload=function(){cb(im)};im.onerror=function(){cb(null)};im.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}catch(e){cb(null)}}
function drawRapor(imgs){
 var W=1080,H=1350,c=document.createElement("canvas");c.width=W;c.height=H;
 var x=c.getContext("2d"),d=rapData(),F1='"Baloo 2",system-ui,sans-serif',F2='Nunito,system-ui,sans-serif';
 x.fillStyle="#f4efe2";x.fillRect(0,0,W,H);
 cvRR(x,36,36,W-72,H-72,40);x.fillStyle="#fffaf0";x.fill();x.lineWidth=6;x.strokeStyle="#3c8d4f";x.stroke();
 cvRR(x,36,36,W-72,250,40);x.fillStyle="#3c8d4f";x.fill();x.fillRect(36,240,W-72,46);
 if(imgs[1])x.drawImage(imgs[1],W-250,92,150,150);
 if(imgs[0])x.drawImage(imgs[0],W-400,70,200,172);
 x.textAlign="left";x.fillStyle="#fff";x.font="800 74px "+F1;x.fillText("RAPOR KEBUN",84,142);
 x.font="800 44px "+F1;x.fillText("Kebun Sedekah (Simulasi)",84,198);
 x.font="700 30px "+F2;x.fillStyle="#d7f0dc";x.fillText("hurufa.com",84,248);
 x.fillStyle="#33291d";cvFit(x,d.name,84,388,W-168,80,"800 $px "+F1);
 x.font="700 32px "+F2;x.fillStyle="#6b5d4a";x.fillText("Gelar: "+d.title+"   \u2022   Tingkat "+d.age,84,440);x.fillText(d.date,84,484);
 for(var i=0;i<3;i++)cvStar(x,W/2-110+i*110,552,40,i<d.st?"#f2a71b":"#e7e0cf");
 x.textAlign="center";x.font="800 34px "+F2;x.fillStyle="#2a6a39";x.fillText("Predikat: "+d.pred+(d.subs.length?"  \u2022  rata-rata "+d.acc:""),W/2,632);
 var tw=288,th=130,gx=24,gy=20,ty=668;
 d.tiles.forEach(function(t,k){var X=84+(k%3)*(tw+gx),Y=ty+Math.floor(k/3)*(th+gy);
  cvRR(x,X,Y,tw,th,24);x.fillStyle="#ffffff";x.fill();x.lineWidth=3;x.strokeStyle="#e3f2e5";x.stroke();
  x.fillStyle="#2a6a39";x.font="800 60px "+F1;x.fillText(String(t[0]),X+tw/2,Y+72);
  x.fillStyle="#6b5d4a";x.font="700 26px "+F2;x.fillText(t[1],X+tw/2,Y+110)});
 x.textAlign="left";x.fillStyle="#2a6a39";x.font="800 40px "+F1;x.fillText("Nilai per pelajaran",84,990);
 if(!d.subs.length){x.fillStyle="#6b5d4a";x.font="700 30px "+F2;x.fillText("Belum ada soal yang dijawab.",84,1044)}
 d.subs.forEach(function(sb,k){var col=k<4?0:1,row=k<4?k:k-4,X=84+col*480,Y=1020+row*62;
  x.fillStyle="#33291d";x.font="800 28px "+F2;x.fillText(sb.n,X,Y+26);
  x.textAlign="right";x.fillStyle="#2a6a39";x.font="800 30px "+F1;x.fillText(String(sb.v),X+432,Y+26);x.textAlign="left";
  cvRR(x,X,Y+38,432,14,7);x.fillStyle="#ebe5d6";x.fill();
  if(sb.v>0){cvRR(x,X,Y+38,Math.max(14,432*sb.v/100),14,7);x.fillStyle="#6cbf5a";x.fill()}});
 x.textAlign="center";x.fillStyle="#3c8d4f";x.font="800 30px "+F2;x.fillText("hurufa.com   \u2022   t.me/hurufacom",W/2,1288);
 return c;
}
function makeRapor(done){
 var fl=[],fin=false;
 try{if(document.fonts&&document.fonts.load)fl=[document.fonts.load('800 74px "Baloo 2"'),document.fonts.load("700 30px Nunito"),document.fonts.load("800 30px Nunito")]}catch(e){}
 function go(){if(fin)return;fin=true;
  var plant='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 6 100 86" width="200" height="172">'+plantSVG({k:"tomat",st:4,w:60})+'</svg>';
  var house=bSVG(BUILD[0],4).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" ');
  svgImg(plant,function(a){svgImg(house,function(b){
   var cv=drawRapor([a,b]),url;
   try{url=cv.toDataURL("image/png")}catch(e){cv=drawRapor([]);url=cv.toDataURL("image/png")}
   rapCv=cv;rapBlob=null;try{cv.toBlob(function(bl){rapBlob=bl},"image/png")}catch(e){}
   done(url);
  })});
 }
 try{Promise.all(fl).then(go,go)}catch(e){go()}
 setTimeout(go,1500);
}
function openShare(){
 openSheet('<h2>Menyiapkan gambar rapor...</h2><p>Sebentar ya.</p>');
 makeRapor(function(url){
  var fn="rapor-kebun-"+(S.name||"anak").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")+".png";
  openSheet('<h2>Rapor siap dibagikan</h2><img class="ksd-rimg" src="'+url+'" alt="Gambar rapor Kebun Sedekah">'+
   '<p style="font-size:.82rem;color:var(--soft-ink)">Kalau tombol tidak berfungsi, tekan lama gambar untuk menyimpan.</p>'+
   '<div class="ksd-row"><button class="ksd-btn" type="button" data-act="rshare">\ud83d\udce4 Bagikan</button><a class="ksd-btn ksd-ghost ksd-a" href="'+url+'" download="'+fn+'">\ud83d\udcbe Simpan</a></div>'+
   '<div class="ksd-row" style="margin-top:8px"><button class="ksd-btn ksd-ghost" type="button" data-act="rapor">Kembali ke rapor</button></div>');
 });
}
function doShare(){
 var ok=false;
 try{if(rapBlob&&window.File&&navigator.share&&navigator.canShare){var f=new File([rapBlob],"rapor-kebun-sedekah.png",{type:"image/png"});
  if(navigator.canShare({files:[f]})){ok=true;navigator.share({files:[f],title:"Rapor Kebun Sedekah",text:"Rapor berkebun "+(S.name||"")+" di Kebun Sedekah (Simulasi), hurufa.com"}).catch(function(){})}}}catch(e){ok=false}
 if(!ok)toast("HP ini belum bisa berbagi langsung. Ketuk Simpan atau tekan lama gambarnya.",3800);
}
function openKitchen(){
 if(!PREMIUM){openSheet('<h2>Dapur</h2><p>Dapur dan Warung Desa ada di versi Premium.</p><div class="ksd-row">'+premA('\u2b50 Lihat Premium')+'</div>');return}
 var h='<h2>Dapur</h2><p>Olah buah menjadi hidangan. Warung, masjid, dan tetangga kadang memesannya.</p><div class="ksd-list">';
 Object.keys(DISHES).forEach(function(d){var D=DISHES[d],ok=canGive(D.need),have=Object.keys(D.need).every(function(k){return S.seeds.indexOf(k)>=0});
  h+='<div class="ksd-item">'+icon(d)+'<div><b>'+D.n+'</b>'+wantHTML(D.need)+(have?"":'<small>Beli bibitnya dulu di Toko.</small>')+'</div><button class="ksd-buy" type="button" data-act="cook" data-d="'+d+'"'+(ok?"":" disabled")+'>Masak</button></div>'});
 openSheet(h+'</div>');
}
function openBasket(msg){
 var D=demand(),items=Object.keys(S.basket).filter(function(k){return S.basket[k]>0}),tot=bTotal(),c=cap();
 var h='<h2>Keranjang '+tot+'/'+c+'</h2>';
 if(msg)h+='<div class="ksd-note">'+esc(msg)+'</div>';
 if(!items.length)h+='<p>Keranjang masih kosong. Rawat tanaman sampai berbuah, lalu panen.</p>';
 else{
  h+='<div class="ksd-list">';
  items.forEach(function(k){
   var have=S.basket[k],want=D.want[k]||0,sur=Math.max(0,have-want);
   h+='<div class="ksd-item">'+icon(k)+'<div><b>'+nm(k)+' \u00d7'+have+'</b><small>'+(want?'Dibutuhkan '+want+'. ':'Belum ada yang butuh. ')+(sur?'Kelebihan '+sur+'.':'Pas untuk pesanan.')+'</small></div><button class="ksd-buy'+(sur?'':' ksd-soft')+'" type="button" data-act="dump" data-k="'+k+'" data-m="'+(sur?'s':'a')+'">'+(sur?'Bagikan '+sur:'Bagikan semua')+'</button></div>'});
  h+='</div><p style="margin-top:8px;font-size:.82rem">Yang dibagikan menjadi sedekah untuk tetangga sekitar, dan kamu dapat sedikit bintang \u2b50.</p>';
 }
 h+='<div class="ksd-row"><button class="ksd-btn" type="button" data-act="godesa">\ud83c\udfe1 Bagikan ke rumah yang butuh</button></div>';
 openSheet(h);
}
function dump(k,m){
 var have=S.basket[k]||0;if(have<=0)return;
 var D=demand(),sur=Math.max(0,have-(D.want[k]||0)),n=m==="a"?have:Math.min(have,sur||have);
 S.basket[k]=have-n;if(S.basket[k]<=0)delete S.basket[k];
 S.given+=n;var rw=Math.max(1,Math.round(n/4));S.stars+=rw;if(SS)SS.stars+=rw;
 SFX.pop();SFX.coins(.05,8);confetti(innerWidth/2,innerHeight*.45,40,1.2);
 toast("Alhamdulillah, "+n+" "+nm(k)+" dibagikan ke tetangga sekitar. +"+rw+" \u2b50 Semoga jadi sedekah \ud83e\udd32",3400);
 checkMission();save();renderAll();openBasket();
}
function openIntro(){
 ensureReqs();
 var all=builtList().filter(function(b){return S.reqs[b.id]});
 all.sort(function(a,b){return (canGive(S.reqs[b.id].it)?1:0)-(canGive(S.reqs[a.id].it)?1:0)});
 var more=all.length-4,bl=all.slice(0,4);
 var hh=bl.map(function(b){var r=S.reqs[b.id];return '<div class="ksd-house'+(canGive(r.it)?" ksd-can":"")+'">'+bSVG(b,S.vh[b.id]||0)+'<div class="ksd-req"><b>'+b.n+'</b>'+(r.t?' <span class="ksd-time">\u23f3</span>':'')+'<br>Butuh:'+wantHTML(r.it)+'</div></div>'}).join("");
 var items=Object.keys(S.basket).filter(function(k){return S.basket[k]>0});
 var bk='<div class="ksd-bask">'+(items.length?items.map(function(k){return '<span class="ksd-bitem">'+icon(k)+'\u00d7'+S.basket[k]+'</span>'}).join(""):'<span class="ksd-empty">Keranjang masih kosong</span>')+'<b style="margin-left:auto">\ud83e\uddfa '+bTotal()+'/'+cap()+'</b></div>';
 openSheet('<h2>Desa menunggu panenmu</h2>'+
  '<div class="ksd-bubble">Kita akan bersedekah ke rumah yang sedang butuh \ud83e\udd32</div>'+
  '<div class="ksd-houses" style="margin-bottom:14px">'+hh+'</div>'+
  (more>0?'<p style="text-align:center;font-size:.82rem;color:var(--soft-ink)">+'+more+' rumah lain menunggu di menu Desa \ud83c\udfe1</p>':'')+
  '<div class="ksd-bubble ksd-gold">Mulai menanam dan isi keranjang panen! \ud83c\udf31</div>'+bk+
  '<label class="ksd-lbl" for="ksd-name" style="margin-top:14px">Nama kamu (wajib)</label><input class="ksd-in" id="ksd-name" type="text" maxlength="16" autocomplete="off" autocapitalize="words" placeholder="Tulis namamu di sini" value="'+esc(S.name||"")+'"><div class="ksd-err" id="ksd-nerr"></div>'+
  '<div class="ksd-row" style="margin-top:4px"><button class="ksd-btn'+(S.name?'':' ksd-dim')+'" type="button" data-act="introgo" id="ksd-introgo">\u25b6 Mulai Belajar</button></div>',true,true);
}
/* ======================= SOAL ======================= */
var Q=null,bags={};
function bag(key,n){if(!bags[key]||!bags[key].length)bags[key]=shuffle(Array.apply(null,Array(n)).map(function(_,i){return i}));return bags[key].pop()}
function numOpts(n,count){var set=[n],offs=shuffle(n<20?[1,-1,2,-2,3,-3]:[1,-1,2,-2,10,-10,5,-5]);offs.forEach(function(o){if(set.length<count&&n+o>=0&&set.indexOf(n+o)<0)set.push(n+o)});var k=4;while(set.length<count){if(set.indexOf(n+k)<0)set.push(n+k);k++}return shuffle(set)}
function genMath(age){
 var q,n,vis="",e,a,b,k;
 if(age===1){k=rnd(4);
  if(k===0){n=2+rnd(8);var f=pick(["tomat","jeruk","cabai","kurma"]);for(var i=0;i<n;i++)vis+=icon(f);q="Ada berapa "+nm(f).toLowerCase()+" di sini?"}
  else if(k===1){a=1+rnd(5);b=1+rnd(5);n=a+b;q=a+" + "+b+" = ?"}
  else if(k===2){a=3+rnd(8);b=1+rnd(a-1);n=a-b;q=a+" - "+b+" = ?"}
  else{a=1+rnd(5);b=1+rnd(4);n=a+b;q="Di keranjang ada "+a+" tomat dan "+b+" jeruk. Berapa buah semuanya?";e=a+" + "+b+" = "+n+"."}
 }else if(age===2){k=rnd(5);
  if(k===0){a=8+rnd(33);b=5+rnd(26);n=a+b;q=a+" + "+b+" = ?"}
  else if(k===1){a=15+rnd(46);b=3+rnd(a-7);n=a-b;q=a+" - "+b+" = ?"}
  else if(k===2){a=2+rnd(4);b=2+rnd(9);n=a*b;q=a+" \u00d7 "+b+" = ?"}
  else if(k===3){a=3+rnd(10);n=2+rnd(11);q=a+" + ? = "+(a+n);e=a+" + "+n+" = "+(a+n)+"."}
  else{a=2+rnd(4);b=2+rnd(5);n=a*b;q="Setiap petak berbuah "+a+" tomat. Ada "+b+" petak. Berapa tomat semuanya?";e=a+" \u00d7 "+b+" = "+n+"."}
 }else{k=rnd(6);
  if(k===0){a=3+rnd(8);b=3+rnd(8);n=a*b;q=a+" \u00d7 "+b+" = ?"}
  else if(k===1){b=2+rnd(8);n=2+rnd(9);q=(b*n)+" : "+b+" = ?"}
  else if(k===2){a=60+rnd(141);b=30+rnd(121);n=a+b;q=a+" + "+b+" = ?"}
  else if(k===3){a=80+rnd(221);b=20+rnd(a-30);n=a-b;q=a+" - "+b+" = ?"}
  else if(k===4){b=3+rnd(7);n=3+rnd(8);q="? \u00d7 "+b+" = "+(b*n);e=n+" \u00d7 "+b+" = "+(b*n)+"."}
  else{b=2+rnd(5);n=3+rnd(7);q="Kamu memanen "+(b*n)+" jeruk dan membaginya rata ke "+b+" rumah. Tiap rumah dapat berapa?";e=(b*n)+" : "+b+" = "+n+"."}
 }
 return {cat:"Matematika",q:q,n:n,e:e||("Jawabannya "+n+"."),vis:vis};
}
function makeQ(kind){
 var age=S.age,fit=function(x){return x.l<=age&&x.l>=age-1},o,x;
 if(kind==="islam"){var pool=BANK.filter(function(z){return fit(z)&&(PREMIUM||FREE_SUBJ.indexOf(z.c)>=0)});x=pool[bag((PREMIUM?"ip":"if")+age,pool.length)];
  if("tf" in x)o={cat:x.c,q:x.q,opts:["Benar","Salah"],correct:x.tf?0:1,e:x.e};
  else{var op=shuffle(x.a);o={cat:x.c,q:x.q,opts:op,correct:op.indexOf(x.a[0]),e:x.e,wide:x.a.some(function(s){return s.length>14})}}
 }else{
  if(kind==="combo"){var pc=COMBO.filter(fit);x=Object.assign({cat:"Islami + Matematika"},pc[bag("c"+age,pc.length)])}else x=genMath(age);
  var opts=numOpts(x.n,age===1?3:4);o={cat:x.cat,q:x.q,opts:opts,correct:opts.indexOf(x.n),e:x.e,vis:x.vis};
 }
 o.tries=0;o.out=[];o.done=false;return o;
}
var qn=0;
function nextQ(src,extra){var q=makeQ(["islam","math","combo"][qn++%3]);q.src=src||"water";q.extra=extra||null;return q}
function bonusQ(k,given,bname){
 var age=S.age,o,n;
 if(age===3){var b=builtList().length,x=1+rnd(3);n=b*x;o={cat:"Soal bonus",q:"Di desa ada "+b+" bangunan. Kalau tiap bangunan diberi "+x+" "+nm(k).toLowerCase()+", berapa "+nm(k).toLowerCase()+" yang dibutuhkan?",e:b+" \u00d7 "+x+" = "+n+"."}}
 else{var before=(S.basket[k]||0)+given;n=before-given;o={cat:"Soal bonus",q:"Tadi di keranjang ada "+before+" "+nm(k).toLowerCase()+". Kamu memberi "+given+" ke "+bname+". Sisa berapa?",e:before+" - "+given+" = "+n+"."}}
 var opts=numOpts(n,age===1?3:4);o.opts=opts;o.correct=opts.indexOf(n);o.tries=0;o.out=[];o.done=false;o.src="bonus";return o;
}
function showQuiz(){
 var q=Q,h='<span class="ksd-qcat">'+esc(q.cat)+'</span>'+(q.src==="gate"?'<p><b>Gudang bibit terkunci.</b> Jawab soal ini untuk membukanya.</p>':q.src==="bonus"?'<p>Jawab benar untuk bonus air \ud83d\udca7</p>':'')+'<h2>'+esc(q.q)+'</h2>';
 h+='<div class="ksd-qtools"><button type="button" data-act="read">\ud83d\udd08 Bacakan</button>'+(!q.done&&q.opts.length>2&&!q.hinted?'<button type="button" data-act="hint">\ud83d\udca1 Petunjuk</button>':'')+'</div>';
 if(q.vis)h+='<div class="ksd-qvis">'+q.vis+'</div>';
 h+='<div class="ksd-opts'+(q.wide?" ksd-wide":"")+'">'+q.opts.map(function(o,k){var c="ksd-opt",dis=q.done||q.out.indexOf(k)>=0;
  if(q.done&&k===q.correct)c+=" ksd-ok";else if(q.out.indexOf(k)>=0&&q.wrongs&&q.wrongs.indexOf(k)>=0)c+=" ksd-no";
  if(!q.done&&q.tries>=2&&k===q.correct)c+=" ksd-help";
  return '<button class="'+c+'" type="button" data-act="ans" data-k="'+k+'"'+(dis?" disabled":"")+'>'+esc(o)+'</button>'}).join("")+'</div>';
 if(q.msg)h+='<div class="ksd-res'+(q.done?"":" ksd-bad")+'"><b>'+esc(q.msg)+'</b>'+(q.done?'<p>'+esc(q.e)+'</p>':'')+'</div>';
 if(q.done){
  if(q.src==="water")h+='<div class="ksd-row"><button class="ksd-btn ksd-ghost" type="button" data-act="close">Ke kebun</button><button class="ksd-btn" type="button" data-act="quiz">Soal berikutnya</button></div>';
  else h+='<div class="ksd-row"><button class="ksd-btn" type="button" data-act="close">Lanjut</button></div>';
 }
 openSheet(h);
}
function answer(k){
 var q=Q;if(!q||q.done||q.out.indexOf(k)>=0)return;
 if(k===q.correct){
  q.done=true;S.correct++;var ck=q.cat==="Soal bonus"?"Matematika":q.cat==="Islami + Matematika"?"Soal Gabungan":q.cat;S.cat=S.cat||{};var cc=S.cat[ck]||(S.cat[ck]=[0,0]);cc[1]++;if(q.tries===0)cc[0]++;addDaily("correct");SS.correct++;
  var first=q.tries===0,w=0,extra="";
  if(first){S.streak++;S.best=Math.max(S.best,S.streak)}
  if(q.src==="water"){w=first?3:1;if(first&&S.streak%3===0){w++;extra=" Bonus 1 air: benar "+S.streak+" kali berturut-turut."}
   if(first&&S.streak%5===0){pendingRain=true;extra+=" Hujan akan turun di kebunmu!"}}
  else if(q.src==="bonus")w=first?2:1;
  S.water+=w;
  q.msg=pick(["Masya Allah, benar!","Alhamdulillah, benar!","Benar! Barakallahu fiik."])+(w?" +"+w+" air.":"")+extra;
  if(q.src==="gate"&&q.extra){var C=CROPS[q.extra];if(S.stars>=C.price&&S.seeds.indexOf(q.extra)<0){S.stars-=C.price;S.seeds.push(q.extra);q.msg+=" Bibit "+C.n+" sudah jadi milikmu."}}
  SFX.correct();var r=$("#ksd-card").getBoundingClientRect();confetti(r.left+r.width/2,r.top+80,30,.9);
 }else{
  q.tries++;S.streak=0;q.out.push(k);q.wrongs=(q.wrongs||[]).concat([k]);
  q.msg=q.tries>=2?"Belum tepat. Lihat jawaban yang bergoyang.":"Belum tepat, coba lagi ya.";
  if(SS&&!SS.wrong.some(function(w){return w.q===q.q}))SS.wrong.push({q:q.q,a:q.opts[q.correct]});
  SFX.wrong();
 }
 checkMission();save();renderHUD();showQuiz();
}

/* ======================= AKSI KEBUN ======================= */
function tapPlot(i){
 initAudio();
 var el=plotEls[i],pos=centerOf(el),x=pos[0],y=pos[1];
 if(i===S.plots.length){
  var price=PLOT_PRICE[S.plots.length-4];
  if(S.stars<price){SFX.wrong();shake(el);toast("Bintangmu belum cukup ("+S.stars+"/"+price+"). Petik bunga dan selesaikan misi.");return}
  S.stars-=price;S.plots.push(null);SFX.soil();confetti(x,y,30,.9);toast("Petak baru siap ditanami!");save();renderAll();return;
 }
 var p=S.plots[i];
 if(!p){SFX.tap();openSeeds(i);return}
 var C=CROPS[p.k];
 if(p.st===4){
  if(C.kind==="bunga"){
   var v=C.val;if(p.perf)v=Math.round(v*1.5);if(p.hurt)v=Math.max(1,Math.round(v*.7));
   S.stars+=v;SS.stars+=v;S.blooms++;S.coll[p.k]=(S.coll[p.k]||0)+1;S.plots[i]=null;
   SFX.rustle();SFX.coins(.1,8);confetti(x,y,60,1.1);floatFx("+"+v+" \u2b50","ksd-plus",x,y);
   toast("Masya Allah, "+C.n+" yang indah! +"+v+" bintang"+(p.perf?" (sempurna!)":""));
  }else{
   var n=C.yield+(p.perf?1:0)-(p.hurt?1:0);if(n<1)n=1;
   if(bTotal()+n>cap()){SFX.wrong();shake(el);openBasket("Keranjang penuh, panen "+C.n+" ("+n+") belum muat. Bagikan dulu kelebihannya supaya bisa memanen.");return}
   S.basket[p.k]=(S.basket[p.k]||0)+n;S.harvest++;SS.harvest++;addDaily("harvest");S.coll[p.k]=(S.coll[p.k]||0)+1;if(p.perf)S.perfect++;S.plots[i]=null;
   SFX.success();SFX.wind(.1,1,.15);confetti(x,y,90,1.2);floatFx("+"+n,"ksd-plus",x,y);
   toast("Alhamdulillah! Panen "+n+" "+C.n+(p.perf?" (panen sempurna +1)":"")+". Yuk bagikan ke tetangga.",3000);
   if(!S.train)S.train=newTrain();
   if(S.tut===2){S.tut=3;setTimeout(function(){pulse($("#ksd-nd"));toast("Buka Desa \ud83c\udfe1 dan bagikan panenmu ke tetangga.",3500)},1500)}
  }
  checkMission();save();renderAll();return;
 }
 if(tool==="water"){
  if(S.water<1){SFX.wrong();shake(el);pulse($("#ksd-q"));toast("Air habis. Jawab soal untuk dapat air \ud83d\udca7");return}
  if(p.w>75){SFX.wrong();shake(el);toast("Tanahnya masih basah. Tunggu dulu, jangan berlebihan.");return}
  var was=p.w<30;S.water--;p.w=Math.min(100,p.w+45);
  if(S.tools.gembor){var nbi=i%3<2&&S.plots[i+1]?i+1:(i%3>0&&S.plots[i-1]?i-1:-1);var q2=nbi>=0?S.plots[nbi]:null;if(q2&&q2.st<4&&q2.w<=75){q2.w=Math.min(100,q2.w+45);var p2=centerOf(plotEls[nbi]);dropRain(p2[0],p2[1],14)}}
  SFX.splash();floatFx("\ud83d\udebf","ksd-pour",x+10,y-20);dropRain(x,y);
  if(was){setTimeout(SFX.correct,350);setTimeout(function(){confetti(x,y,30,.9)},300);toast(C.n+" segar kembali!")}
  if(S.tut===1){S.tut=2;setTimeout(function(){toast("Bagus! Jaga air di zona hijau supaya tumbuh. Air habis? Jawab Soal.",4200)},700)}
 }else if(tool==="cut"){
  if(!p.weed&&!p.dry){SFX.wrong();shake(el);toast("Tidak ada rumput liar atau daun kering di sini.");return}
  var got=(p.weed?1:0)+(p.dry?1:0);p.weed=false;p.dry=false;p.dz=0;S.daun+=got;
  SFX.snip();SFX.rustle(.15);setTimeout(SFX.correct,450);floatFx("\u2702\ufe0f","ksd-snip",x,y+10);
  setTimeout(function(){grassBurst(x,y+30,32)},180);
  toast("Kres! Bersih. +"+got+" daun untuk kompos \ud83c\udf42");
 }else if(tool==="ajir"){
  if(p.stake){toast("Ajir sudah terpasang di sini.");return}
  if(p.st<2){toast("Tanamannya masih kecil, belum perlu ajir.");return}
  p.stake=true;SFX.knock();confetti(x,y,20,.8);toast("Ajir terpasang. "+C.n+" aman dari angin.");
 }else if(tool==="kompos"){
  if(S.daun<3){SFX.wrong();shake(el);toast("Butuh 3 daun. Kumpulkan dengan menggunting rumput liar atau daun kering.");return}
  S.daun-=3;p.st=Math.min(4,p.st+1);p.pr=0;SFX.soil();SFX.rustle(.1);confetti(x,y,40,1);
  if(p.st===4)ripen(p);toast("Kompos membuat "+C.n+" tumbuh lebih cepat!");
 }
 save();renderAll();
}
function ripen(p){var C=CROPS[p.k];p.perf=p.bad<=6;SFX.coins(0,6);toast(C.n+(C.kind==="bunga"?" sudah mekar!":" sudah berbuah!")+" Ketuk untuk "+(C.kind==="bunga"?"memetik.":"panen.")+(p.perf?" Rawatanmu sempurna!":""),3000)}
function plant(k){
 var i=pickFor;closeSheet();if(i<0||S.plots[i])return;
 S.plots[i]={k:k,st:0,pr:0,w:40,weed:false,dry:false,dz:0,bad:0,stake:false,hurt:false,perf:false};pickFor=-1;
 if(S.tut===0)S.tut=1;tool="water";renderTools();
 SFX.soil();var p=centerOf(plotEls[i]);grassBurst(p[0],p[1]+30,10);toast("Benih "+CROPS[k].n+" ditanam. Bismillah!");save();renderAll();
}
function giveHouse(id){
 initAudio();var b=BUILD.filter(function(x){return x.id===id})[0],r=S.reqs[id],el=houseEls[id];
 if(!b||!r||thanks[id])return;
 if(!canGive(r.it)){SFX.wrong();shake(el);var miss=Object.keys(r.it).filter(function(k){return (S.basket[k]||0)<r.it[k]}).map(function(k){return nm(k)+" "+(S.basket[k]||0)+"/"+r.it[k]}).join(", ");toast("Belum cukup: "+miss+". Tanam dulu ya!",3000);return}
 var tot=0,firstK=null,firstN=0;for(var k in r.it){S.basket[k]-=r.it[k];tot+=r.it[k];if(!firstK&&CROPS[k]){firstK=k;firstN=r.it[k]}}
 var add=r.t>0?2:1,before=S.helped;
 S.given+=tot;S.helped+=add;SS.helped+=add;addDaily("helped",add);S.vh[id]=(S.vh[id]||0)+1;thanks[id]=true;
 if(S.tut===3)S.tut=4;
 SFX.success();bigConfetti();toast(r.t>0?"Tepat waktu! Masya Allah, semoga jadi sedekah \ud83e\udd32 (+2 bantuan)":"Masya Allah, semoga jadi sedekah \ud83e\udd32");
 checkMission();save();renderAll();renderDesa();
 setTimeout(function(){thanks[id]=false;S.reqs[id]=newReq(b);save();renderAll();renderDesa()},2600);
 var nb=BUILD.filter(function(x){return before<x.at&&S.helped>=x.at});
 setTimeout(function(){
  if(nb.length){var x=nb[nb.length-1];ensureReqs();SFX.start();bigConfetti();
   openSheet('<h2>'+x.n+' pindah ke desa! \ud83c\udf89</h2><div style="display:flex;justify-content:center">'+bSVG(x,0).replace('class="ksd-bsvg"','class="ksd-bsvg" style="width:120px;height:120px"')+'</div><p>Desamu makin ramai karena kebaikanmu.'+(x.note?" "+x.note:"")+'</p><div class="ksd-row"><button class="ksd-btn" type="button" data-act="close">Alhamdulillah</button></div>');renderAll();renderDesa();return}
  if(!S.hadShown&&S.helped>=HADITS_SEDEKAH.at){S.hadShown=true;save();openSheet('<h2>Sudah '+S.helped+' kali membantu!</h2><div class="ksd-arab">'+HADITS_SEDEKAH.ar+'</div><p style="font-size:1rem">'+HADITS_SEDEKAH.id+'</p><div class="ksd-row"><button class="ksd-btn" type="button" data-act="close">Masya Allah</button></div>');return}
  if(firstK&&Math.random()<.35){Q=bonusQ(firstK,firstN,b.n);showQuiz()}
 },1300);
}
function sendTrain(){
 initAudio();if(!trainRun)return;
 if(S.train&&canGive(S.train.it)){
  for(var k in S.train.it)S.basket[k]-=S.train.it[k];
  var rw=S.train.rew;S.stars+=rw;SS.stars+=rw;S.sent++;trainGift=false;
  SFX.success();bigConfetti();toast("Pesanan terkirim ke desa sebelah! +"+rw+" \u2b50",3000);S.train=newTrain();checkMission();save();renderAll();return;
 }
 if(trainGift){trainGift=false;S.water+=2;SFX.splash();toast("Kereta membawa hadiah: 2 air untukmu \ud83d\udca7");save();renderAll();return}
 toast(S.train?"Pesanan kereta belum lengkap. Lihat di menu Desa \ud83c\udfe1":"Kereta lewat. Tut tut!");
}
function rainNow(){
 pendingRain=false;var el=$("#ksd-rain");el.classList.remove("ksd-on");void el.offsetWidth;el.classList.add("ksd-on");SFX.rain();
 drought=0;S.plots.forEach(function(p){if(p&&p.st<4){p.w=72;p.dry=false;p.dz=0}});
 toast("Hujan turun! Allah yang menurunkan hujan. Semua tanaman segar.",3800);save();renderAll();
}

/* ======================= PUTARAN GAME (tiap detik) ======================= */
function startTrain(){
 var t=$(".ksd-train");if(!t)return;
 trainRun=1;trainGift=true;ROOT.classList.add("ksd-trainon");
 clearTimeout(trainT);clearTimeout(trainFail);
 trainT=setTimeout(function(){
  if(!trainRun)return;
  t.classList.remove("ksd-run");void t.getBoundingClientRect();t.classList.add("ksd-run");SFX.train();
  if(S.train&&canGive(S.train.it))toast("Kereta datang! Ketuk keretanya untuk mengirim pesanan \ud83d\ude82",3500);
 },600);
 trainFail=setTimeout(endTrain,14200);
}
function endTrain(){
 clearTimeout(trainT);clearTimeout(trainFail);
 var t=$(".ksd-train");if(t)t.classList.remove("ksd-run");
 trainRun=0;trainGift=false;ROOT.classList.remove("ksd-trainon");
}
function wigEl(el){if(!el)return;el.classList.remove("ksd-wig");void el.offsetWidth;el.classList.add("ksd-wig")}
function jig(el){if(!el)return;el.classList.remove("ksd-jig");void el.offsetWidth;el.classList.add("ksd-jig")}
function wiggle(){wigEl($("#ksd-q"))}
function tick(){
 if(!running||paused||sheetOpen||document.hidden)return;
 var dirty=false;
 S.plots.forEach(function(p){
  if(!p||p.st===4)return;var C=CROPS[p.k];dirty=true;
  p.w=Math.max(0,p.w-C.drink*(drought>0?2:1));
  if(p.w<=0){p.dz=(p.dz||0)+1;if(p.dz>=6&&!p.dry)p.dry=true}else p.dz=0;
  if(p.st>=1&&!p.weed&&Math.random()<.018)p.weed=true;
  if(p.w>=30&&p.w<=85&&!p.weed&&!p.dry){p.pr++;if(p.pr>=C.need){p.pr=0;p.st++;if(p.st===4)ripen(p)}}
  else p.bad=(p.bad||0)+1;
 });
 S.wellT=(S.wellT||0)+1;
 if(S.wellT>=(S.tools.sumur?20:40)){S.wellT=0;S.water++;dirty=true}
 builtList().forEach(function(b){var r=S.reqs[b.id];if(r&&r.t>0&&!thanks[b.id]){r.t--;if(r.t<=0){S.reqs[b.id]=newReq(b);toast(b.n+" sudah dibantu tetangga lain. Ada pesanan baru.",2800)}}});
 if(trainRun>0){/* kereta sedang lewat; selesai lewat animationend */}
 else if(--trainCD<=0){trainCD=45+rnd(35);startTrain()}
 if(windT>0){windT--;if(Math.random()<.3)SFX.wind(0,1.2,.12);if(!windT){var hurt=0;S.plots.forEach(function(p){if(p&&p.st>=2&&p.st<4&&!p.stake){p.hurt=true;hurt++}});toast(hurt?"Angin reda. "+hurt+" tanaman tanpa ajir jadi sedikit rusak.":"Angin reda. Semua tanaman aman, alhamdulillah!",3200)}}
 if(drought>0){drought--;if(!drought)toast("Kemarau sudah berlalu.")}
 if(--evCD<=0){evCD=80+rnd(60);
  var tall=S.plots.some(function(p){return p&&p.st>=2&&p.st<4});
  if(S.tools.ajir&&tall&&Math.random()<.55){windT=20;SFX.wind(0,2.2,.3);toast("Angin kencang datang! Pasang ajir di tanaman tinggi.",3500)}
  else if(S.helped>=3&&!drought){drought=60;toast("Kemarau! Tanaman cepat haus. Jawab benar 5\u00d7 berturut-turut agar hujan turun.",4000)}
 }
 if(Math.random()<.04)SFX.wind(0,2.2,.08);
 if(--birdCD<=0){birdCD=16+rnd(24);SFX.bird();if(Math.random()<.4)SFX.bird(.6+Math.random()*.5)}
 if(--roosterCD<=0){roosterCD=150+rnd(90);SFX.rooster()}
 if(--wigCD<=0){wigCD=S.water<=2?3:6;wiggle()}
 if(--bwCD<=0){bwCD=7;if(bTotal()>0)jig($("#ksd-cb"))}
 renderPlots();renderHUD();renderBanner();if(view==="d")renderDesa();
 if(dirty&&S.wellT%5===0)save();
}
setInterval(tick,1000);

function offlineGrow(){
 if(!S.lastSeen)return 0;var sec=(Date.now()-S.lastSeen)/1000;if(sec<60)return 0;
 var ticks=Math.min(Math.floor(sec/5),400),ready=0;
 S.plots.forEach(function(p){if(!p||p.st===4)return;var C=CROPS[p.k],tt=ticks;p.weed=false;p.dry=false;p.dz=0;p.w=60;
  while(tt>0&&p.st<4){var need=C.need-p.pr;if(tt>=need){tt-=need;p.pr=0;p.st++}else{p.pr+=tt;tt=0}}
  if(p.st===4){p.perf=false;ready++}});
 S.water+=Math.min(10,Math.floor(sec/120));
 return ready;
}

/* ======================= LAYAR PENUH, JEDA, KELUAR ======================= */
var apiFull=false;
function fsEl(){return document.fullscreenElement||document.webkitFullscreenElement||null}
function enterFull(){
 ROOT.classList.add("ksd-full");
 try{var req=ROOT.requestFullscreen||ROOT.webkitRequestFullscreen;if(req){var r=req.call(ROOT);if(r&&r.catch)r.catch(function(){})}}catch(e){}
}
function exitApiFull(){if(fsEl()){try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch(e){}}}
function onFs(){if(fsEl()===ROOT)apiFull=true;else if(apiFull){apiFull=false}}
document.addEventListener("fullscreenchange",onFs);document.addEventListener("webkitfullscreenchange",onFs);
function setPause(v){paused=v;$("#ksd-pause").classList.toggle("ksd-off",!v)}
function rekap(){
 var sc=SS.harvest*2+SS.helped*5+SS.correct;var best=Math.max(S.bestScore||0,sc);var isBest=sc>0&&sc>=best&&sc>(S.bestScore||0);S.bestScore=best;save();
 var st=SS.helped>=5||SS.correct>=15?3:SS.helped>=2||SS.correct>=6?2:SS.correct+SS.harvest>0?1:0;
 var h='<h2>Rekap berkebun '+(S.name?esc(S.name):'hari ini')+'</h2><div class="ksd-stars">'+"\u2b50".repeat(st)+'<span style="opacity:.25">'+"\u2b50".repeat(3-st)+'</span></div>';
 h+='<div class="ksd-big"><div><b>'+SS.harvest+'</b>panen</div><div><b>'+SS.helped+'</b>bantuan</div><div><b>'+SS.correct+'</b>soal benar</div></div>';
 h+='<p style="text-align:center">Skor: <b>'+sc+'</b> \u00b7 Rekor terbaik: <b>'+best+'</b>'+(isBest?" \ud83c\udf89 Rekor baru!":"")+'</p>';
 if(SS.wrong.length)h+='<h3>Yuk diulang lagi</h3><div class="ksd-list">'+SS.wrong.slice(0,4).map(function(w){return '<div class="ksd-item"><div><b>'+esc(w.q)+'</b><small>Jawaban: '+esc(w.a)+'</small></div></div>'}).join("")+'</div>';
 else h+='<p style="text-align:center">'+(SS.correct?"Masya Allah, tidak ada soal yang salah!":"Jawab soal untuk dapat air ya.")+'</p>';
 h+='<div class="ksd-row" style="margin-top:12px"><button class="ksd-btn ksd-ghost" type="button" data-act="rapor">\ud83d\udccb Lihat rapor</button></div>';
 h+='<div class="ksd-row" style="margin-top:8px"><button class="ksd-btn ksd-ghost" type="button" data-act="quit">Selesai</button><button class="ksd-btn" type="button" data-act="close">Lanjut belajar</button></div>';
 h+='<div class="ksd-foot">hurufa.com \u00b7 t.me/hurufacom</div>';
 openSheet(h);
}
function quit(){
 closeSheet();endTrain();running=false;setPause(false);exitApiFull();
 $("#ksd-game").classList.add("ksd-off");$("#ksd-start").classList.remove("ksd-off");startScreen();
 setTimeout(function(){try{ROOT.scrollIntoView({block:"start"})}catch(e){}},80);
}

/* ======================= LAYAR MULAI ======================= */
function startScreen(){
 $("#ksd-ages").innerHTML=AGES.map(function(a,i){return '<button type="button" data-age="'+(i+1)+'" class="'+(S.age===i+1?"ksd-on":"")+'">'+a[0]+'<small>'+a[1]+'</small></button>'}).join("");
 $("#ksd-go").textContent=S.played?"\u25b6 LANJUT BELAJAR":"\u25b6 MULAI BELAJAR";
 var rs=$("#ksd-reset");rs.classList.toggle("ksd-off",!S.played);rs.classList.remove("ksd-sure");rs.textContent="Mulai dari awal";
}
(function(){
 var box=$("#ksd-had");var segs=[].slice.call(box.children).map(function(el){return {el:el,txt:el.textContent}});
 box.style.minHeight=box.offsetHeight+"px";segs.forEach(function(g){g.el.textContent=""});
 var cur=document.createElement("span");cur.className="ksd-cur";box.appendChild(cur);
 var si=0,ci=0,timer=0,done=false;
 function finish(){if(done)return;done=true;clearTimeout(timer);segs.forEach(function(g){g.el.textContent=g.txt});setTimeout(function(){cur.remove()},1200)}
 function tk(){if(si>=segs.length)return finish();var g=segs[si],ch=Array.from(g.txt);ci+=2;g.el.textContent=ch.slice(0,ci).join("");g.el.parentNode.insertBefore(cur,g.el.nextSibling);if(ci>=ch.length){si++;ci=0}timer=setTimeout(tk,22)}
 box.onclick=finish;
 if("IntersectionObserver" in window){var io=new IntersectionObserver(function(e){if(e[0].isIntersecting){io.disconnect();setTimeout(tk,250)}});io.observe(box)}else setTimeout(tk,250);
 addEventListener("resize",function(){box.style.minHeight=""});
})();
function startGame(){
 initAudio();enterFull();
 endTrain();var ready=offlineGrow();
 S.played=true;daily();ensureReqs();checkMission();
 SS={harvest:0,helped:0,correct:0,stars:0,wrong:[]};
 $("#ksd-start").classList.add("ksd-off");$("#ksd-game").classList.remove("ksd-off");
 running=true;setPause(false);setView("k");renderTools();renderAll();save();
 setTimeout(function(){SFX.start();bigConfetti()},120);setTimeout(function(){if(running)SFX.rooster()},1700);birdCD=8+rnd(10);roosterCD=150+rnd(90);
 introMsg=ready?"Selama kamu pergi, kebun tetap tumbuh. "+ready+" tanaman siap dipanen!":"Bismillah! Ayo berkebun \ud83c\udf31";openIntro();
 clearTimeout(remT);remT=setTimeout(function(){if(running)toast("Sudah cukup lama belajar. Kalau sudah masuk waktu shalat, shalat dulu ya.",7000)},20*60*1000);
}
var remT=0;

/* ======================= KETUKAN ======================= */
ROOT.addEventListener("click",function(e){
 var t=e.target;
 var ag=t.closest("[data-age]");if(ag){initAudio();SFX.tap();S.age=+ag.getAttribute("data-age");bags={};save();startScreen();return}
 if(t.closest("#ksd-go")){startGame();return}
 if(t.closest("#ksd-reset")){var rs=$("#ksd-reset");if(!rs.classList.contains("ksd-sure")){rs.classList.add("ksd-sure");rs.textContent="Yakin? Semua kebun hilang. Ketuk lagi.";return}var keep={sound:S.sound,age:S.age};S=Object.assign(fresh(),keep);houseKey={};save();startScreen();toast("Kebun dimulai dari awal.");return}
 if(t.closest("#ksd-sheet")&&t===$("#ksd-sheet")){if(!sheetLocked)closeSheet();return}
 var a=t.closest("[data-act]");
 if(a){if(a.disabled)return;initAudio();var act=a.getAttribute("data-act");
  if(act==="close"){SFX.tap();closeSheet();return}
  if(act==="quiz"){Q=nextQ("water");showQuiz();return}
  if(act==="ans"){answer(+a.getAttribute("data-k"));return}
  if(act==="read"){if(Q)speak(Q.q+". "+Q.opts.filter(function(_,i){return Q.out.indexOf(i)<0}).join(", "));return}
  if(act==="hint"){if(!Q||Q.done)return;var wr=Q.opts.map(function(_,i){return i}).filter(function(i){return i!==Q.correct&&Q.out.indexOf(i)<0});if(wr.length>1){Q.out.push(pick(wr));Q.hinted=true;SFX.tap();showQuiz()}return}
  if(act==="plant"){var pk=a.getAttribute("data-k");if(needWarn(pk))openPlantWarn(pk);else plant(pk);return}
  if(act==="introgo"){var inp=$("#ksd-name"),nv=(inp&&inp.value||"").replace(/\s+/g," ").trim().slice(0,16);
   if(!nv){SFX.wrong();if(inp){shake(inp);inp.classList.add("ksd-bad");try{inp.focus()}catch(e){}}var er=$("#ksd-nerr");if(er)er.textContent="Tulis namamu dulu ya \u270f\ufe0f";return}
   S.name=nv;save();if(introMsg)introMsg="Assalamu'alaikum, "+nv+"! "+introMsg;SFX.tap();closeSheet();renderHUD();return}
  if(act==="rapor"){SFX.tap();openBook();return}
  if(act==="share"){SFX.tap();openShare();return}
  if(act==="rshare"){doShare();return}
  if(act==="plantforce"){plant(a.getAttribute("data-k"));return}
  if(act==="plantback"){SFX.tap();openSeeds(pickFor);return}
  if(act==="basket"){SFX.tap();openBasket();return}
  if(act==="dump"){dump(a.getAttribute("data-k"),a.getAttribute("data-m"));return}
  if(act==="godesa"){SFX.tap();if(sheetOpen)closeSheet();setView("d");return}
  if(act==="kitchen"){SFX.tap();openKitchen();return}
  if(act==="cook"){var d=a.getAttribute("data-d"),D=DISHES[d];if(!canGive(D.need))return;for(var k in D.need)S.basket[k]-=D.need[k];S.basket[d]=(S.basket[d]||0)+1;S.cooked++;SFX.pop();SFX.trickle(.1,6);toast(D.n+" siap dibagikan!");checkMission();save();renderAll();renderDesa();openKitchen();return}
  if(act==="buys"){var sk=a.getAttribute("data-k"),C=CROPS[sk];if(S.stars<C.price||S.seeds.indexOf(sk)>=0)return;
   if(C.rare){Q=nextQ("gate",sk);showQuiz();return}
   S.stars-=C.price;S.seeds.push(sk);SFX.coins(0,6);toast("Bibit "+C.n+" sekarang bisa ditanam.");checkMission();save();renderAll();openShop();return}
  if(act==="buyt"){var id=a.getAttribute("data-id"),T=TOOLS.filter(function(x){return x.id===id})[0];if(!T||S.stars<T.p||S.tools[id])return;S.stars-=T.p;S.tools[id]=true;SFX.coins(0,6);if(id==="ajir")tool="ajir";if(id==="kompos")tool="kompos";renderTools();toast(T.n+" siap dipakai!");save();renderAll();openShop();return}
  if(act==="buyd"){var did=a.getAttribute("data-id"),X=DECO.filter(function(x){return x.id===did})[0];if(!X||S.stars<X.p||S.decos.indexOf(did)>=0)return;S.stars-=X.p;S.decos.push(did);SFX.pop();checkMission();save();closeSheet();toast(X.n+" sudah terpasang!");return}
  if(act==="quit"){quit();return}
  if(act==="train"){sendTrain();return}
  return;
 }
 var pl=t.closest(".ksd-plot");if(pl){tapPlot(+pl.getAttribute("data-i"));return}
 var tl=t.closest("[data-tool]");if(tl){initAudio();tool=tl.getAttribute("data-tool");tool==="cut"?SFX.snip():tool==="water"?SFX.trickle(0,5):SFX.tap();renderTools();return}
 var hs=t.closest("[data-house]");if(hs){giveHouse(hs.getAttribute("data-house"));return}
 var nv=t.closest("[data-view]");if(nv){initAudio();SFX.tap();setView(nv.getAttribute("data-view"));return}
 if(t.closest("#ksd-q")){initAudio();Q=nextQ("water");showQuiz();return}
 if(t.closest("#ksd-shop")){initAudio();SFX.tap();openShop();return}
 if(t.closest("#ksd-book")||t.closest("#ksd-mis")){initAudio();SFX.tap();openBook();return}
 if(t.closest("#ksd-cb")){initAudio();SFX.tap();openBasket();return}
 if(t.closest("#ksd-snd")){S.sound=!S.sound;initAudio();if(S.sound)SFX.tap();else try{speechSynthesis.cancel()}catch(e){}save();renderHUD();toast(S.sound?"Suara menyala.":"Suara dimatikan.");return}
 if(t.closest("#ksd-pz")){SFX.tap();setPause(true);return}
 if(t.closest("#ksd-resume")){SFX.tap();setPause(false);return}
 if(t.closest("#ksd-fs")){initAudio();SFX.tap();if(fsEl())exitApiFull();else enterFull();return}
 if(t.closest("#ksd-ex")){SFX.tap();rekap();return}
});
document.addEventListener("visibilitychange",function(){if(!ac)return;try{if(document.hidden)ac.suspend();else if(S.sound)ac.resume()}catch(e){}if(document.hidden&&running)save()});
addEventListener("pagehide",function(){if(running)save()});
ROOT.addEventListener("input",function(e){if(e.target&&e.target.id==="ksd-name"){var ok=e.target.value.trim().length>0;e.target.classList.remove("ksd-bad");var b=$("#ksd-introgo");if(b)b.classList.toggle("ksd-dim",!ok);var er=$("#ksd-nerr");if(er&&ok)er.textContent=""}});
ROOT.addEventListener("keydown",function(e){if(e.target&&e.target.id==="ksd-name"&&(e.key==="Enter"||e.keyCode===13)){e.preventDefault();var b=$("#ksd-introgo");if(b)b.click()}});
ROOT.addEventListener("animationend",function(e){
 var n=e.animationName,t=e.target;
 if(n==="ksd-wiggle")t.classList.remove("ksd-wig");
 else if(n==="ksd-jiggle")t.classList.remove("ksd-jig");
 else if(n==="ksd-bump"&&t.classList.contains("ksd-pulseb"))t.classList.remove("ksd-pulseb");
 else if(n==="ksd-train")endTrain();
});
startScreen();
})();
