import{a as e,n as t}from"./resolve-BO85lccX.js";import{t as n}from"./layout-fyf8MEJr.js";import{n as r,t as i}from"./fixtures-DhTDZDPt.js";var a=`
  <section class="layout-lab" aria-labelledby="layout-heading">
    <p class="eyebrow">LAYOUT HARNESS / 顔と操作の余裕を確認する</p>
    <h2 id="layout-heading">画面サイズを試す</h2>
    <p>初版は両モード6列×10行。12行も比較できます。
    サイズ検証の枠と仮の数字チップで、盤面・上部表示・操作領域の収まりを確認します。</p>
    <div class="layout-options">
      <div><label for="viewport-size">見える画面サイズ</label><select id="viewport-size">
        <option value="320,568">小さい画面 320 × 568</option>
        <option value="360,640">標準幅 360 × 640</option>
        <option value="390,720" selected>ブラウザ表示中 390 × 720</option>
        <option value="390,844">縦長 390 × 844</option>
        <option value="480,900">PC中央枠 480 × 900</option>
        <option value="320,480">高さが足りない例 320 × 480</option>
      </select></div>
      <div><label for="board-rows">盤面の比較</label><select id="board-rows">
        <option value="10">6列 × 10行（初版）</option>
        <option value="12">6列 × 12行（原案との比較）</option>
      </select></div>
      <div><label for="mode-preview">モードの表示</label><select id="mode-preview">
        <option value="relaxed">ゆっくり</option><option value="arcade">ぽんぽん</option>
      </select></div>
      <div><label for="safe-area">上下の保護余白</label><select id="safe-area">
        <option value="0,24">仮定：上0 / 下24px</option>
        <option value="47,34">大きい余白：上47 / 下34px</option>
      </select></div>
    </div>
    <p id="layout-result" role="status" aria-live="polite"></p>
    <div class="layout-comparison">
      <div class="frame-view">
        <div class="frame-wrap"><div class="sizing-frame" aria-label="盤面と操作領域の寸法プレビュー">
          <div class="sizing-hud"><span id="frame-mode"></span><span id="frame-metric"></span><span>NEXT<br />5 2 4</span></div>
          <div id="sizing-board" class="sizing-board" aria-label="寸法検証用の盤面"></div>
          <div id="sizing-controls" class="sizing-controls"></div>
        </div></div>
      </div>
      <div class="layout-notes">
        <h3>サイズの判断</h3>
        <p>1マス40〜56pxを仮の目安にして、数字の読みやすさを実機で確認します。
        仮のチップは正式な524アセットではありません。</p>
        <p>操作ボタンは最低48×48px。モード切り替えはタイトルで行い、プレイ中は選んだモードで遊びます。</p>
        <p>上下の保護余白は比較用の仮定です。本体では端末のsafe areaと実際に見える高さを測ります。</p>
        <p>このプレビューは閲覧幅に合わせて縮小する場合があります。数値は縮小前のCSS pxです。</p>
        <p>40pxを下回る画面は要再検討。ゲーム開始前の案内や表示条件を見直し、行数変更で別のルールにはしません。</p>
      </div>
    </div>
  </section>
`;function o(){let e=document.querySelector(`#viewport-size`),t=document.querySelector(`#board-rows`),r=document.querySelector(`#mode-preview`),i=document.querySelector(`#safe-area`),a=document.querySelector(`.sizing-frame`),o=document.querySelector(`.frame-wrap`),s=document.querySelector(`.frame-view`),c=document.querySelector(`#sizing-board`),l=document.querySelector(`#sizing-controls`),u=document.querySelector(`#layout-result`),d=390,f=720;function p(){let e=Math.min(1,s.clientWidth/d);a.style.transform=`scale(${e})`,o.style.width=`${d*e}px`,o.style.height=`${f*e}px`,a.dataset.scale=String(e)}function m(){let[o,s]=e.value.split(`,`).map(Number),[m,h]=i.value.split(`,`).map(Number),g=Number(t.value),_=r.value===`arcade`,v=n({width:o,height:s,rows:g,safeTop:m,safeBottom:h});d=o,f=s,Object.assign(a.style,{width:`${o}px`,height:`${s}px`,padding:`${v.paddingY+m}px 12px ${v.paddingY+h}px`,rowGap:`${v.gaps/2}px`,gridTemplateRows:`${v.hud}px ${v.boardHeight}px ${v.controls}px`}),c.style.width=`${v.boardWidth}px`,c.style.height=`${v.boardHeight}px`,c.style.gridTemplateRows=`repeat(${g}, 1fr)`,c.style.setProperty(`--token-font`,`${v.cell*.24}px`);let y=[`yellow`,`red`,`blue`,`green`,`purple`];c.innerHTML=Array.from({length:g*6},(e,t)=>`<span class="sizing-cell">${Math.floor(t/6)>=g-(_?5:3)?`<span class="sizing-token ${y[(t+Math.floor(t/6))%5]}"><span>5</span><span>2</span><span>4</span></span>`:``}</span>`).join(``);let b=_?[`←`,`→`,`↻`,`↓`,`落とす`]:[`←`,`→`,`↻`,`置く`];l.style.gridTemplateColumns=`repeat(${b.length-1}, 48px) minmax(80px, 1fr)`,l.innerHTML=b.map(e=>`<span class="sizing-key" data-control>${e}</span>`).join(``),document.querySelector(`#frame-mode`).textContent=_?`ぽんぽん`:`ゆっくり`,document.querySelector(`#frame-metric`).textContent=_?`SCORE 2580`:`のこり8ペア`,a.dataset.cell=String(v.cell),a.dataset.rows=String(g),u.dataset.readable=String(v.readable),u.textContent=`${o}×${s}px / 6×${g} / 1マス${v.cell.toFixed(1)}px / 操作48px以上${v.readable?`：候補として収まります`:`：顔のサイズは要再検討`}`,p()}for(let n of[e,t,r,i])n.addEventListener(`change`,m);new ResizeObserver(p).observe(s),m()}var s=new URL(`/524pop-play/assets/a-relaxed-v1-CIDjdNX-.png`,``+import.meta.url).href,c=new URL(`/524pop-play/assets/b-arcade-v1-CtqOu0ON.png`,``+import.meta.url).href,l=new URL(`/524pop-play/assets/dual-mode-v2-aWEg2I2X.png`,``+import.meta.url).href,u=document.querySelector(`#app`);u.innerHTML=`
  <main>
    <header>
      <p class="eyebrow">PREPRODUCTION / ひとつのゲーム、ふたつの遊び方</p>
      <h1>524 POP! <span>企画レビュー</span></h1>
      <p>5色の524を2匹ずつ、4匹以上でぴょーん。「ゆっくり」と「ぽんぽん」を同じゲームで遊ぶ。</p>
      <p class="status">2モードの本体を実装済み。この画面には企画モックと寸法の比較を残しています。<a href="/524pop-play/">ゲームで遊ぶ</a> · <a href="/524pop-play/harness.html">実描画と演出を検証</a></p>
    </header>
    <section aria-labelledby="mock-heading">
      <h2 id="mock-heading">共通タイトルから、ふたつのモードへ</h2>
      <a class="dual-mock" href="${l}" target="_blank" rel="noopener"><img src="${l}" alt="2モードの統一モック：共通タイトル、ゆっくり、ぽんぽん" /></a>
      <div class="mock-grid">
        <article>
          <p class="tag">A / 配置を考える</p>
          <h3>ゆっくり</h3>
          <p>自動落下なし。2匹の置き場所を選んで確定。1便12ペア、送り出した数を楽しむ。</p>
        </article>
        <article>
          <p class="tag">B / 落下を操作する</p>
          <h3>ぽんぽん</h3>
          <p>落下する2匹を操作。エンドレスで連鎖をつなぎ、いっぱいになるまで遊ぶ。</p>
        </article>
      </div>
      <aside>造形・連鎖・設定は共通にし、モードはタイトルで選択。
      初版は両方6×10です。画像のセル数・数字・顔の細部は、下の寸法検証と正式アセットで確認します。</aside>
      <details><summary>以前の比較モック</summary><p><a href="${s}" target="_blank" rel="noopener">A初稿を見る</a> ／ <a href="${c}" target="_blank" rel="noopener">B初稿を見る</a></p></details>
    </section>
    ${a}
    <section class="rules" aria-labelledby="rule-heading">
      <div>
        <p class="eyebrow">RULE HARNESS / 画像とは別にルールを確かめる</p>
        <h2 id="rule-heading">同じ盤面、同じ結果</h2>
        <p>正解付き盤面を使って、4匹成立・斜め除外・2連鎖を確認できます。
        ここはロジック検証用で、ゲーム画面や送り出しアニメーションではありません。</p>
        <label for="fixture">確認する盤面</label>
        <select id="fixture">${i.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``)}</select>
        <p id="purpose"></p>
        <button id="resolve" type="button">ルールを検証</button>
        <p id="result" role="status" aria-live="polite">盤面を選んで検証できます。</p>
      </div>
      <div class="board-readout">
        <div><h3>解決前</h3><pre id="before" aria-label="解決前の盤面"></pre></div>
        <div><h3>解決後</h3><pre id="after" aria-label="解決後の盤面"></pre></div>
        <p>Y 黄 / R 赤 / B 青 / G 緑 / P 紫 / · 空</p>
      </div>
    </section>
    <footer>企画・造形・検証の詳細はワークスペースのREADMEとdocsを参照。画像をタップすると拡大できます。</footer>
  </main>
`;var d=document.querySelector(`#fixture`),f=document.querySelector(`#before`),p=document.querySelector(`#after`),m=document.querySelector(`#result`),h=document.querySelector(`#purpose`),g=e=>e.map(e=>[...e.replaceAll(`.`,`·`)].join(` `)).join(`
`);function _(){let t=r(d.value);h.textContent=t.purpose,f.textContent=g(e(t.board)),p.textContent=`未検証`,m.textContent=`盤面を選んで検証できます。`,delete m.dataset.pass}d.addEventListener(`change`,_),document.querySelector(`#resolve`).addEventListener(`click`,()=>{let n=r(d.value),i=t(n.board),a=i.sent===n.expected.sent&&i.chains===n.expected.chains&&i.score===n.expected.score;p.textContent=g(e(i.board)),m.dataset.pass=String(a),m.textContent=`${a?`一致`:`不一致`}：${i.sent}匹送出 / ${i.chains}連鎖 / ${i.score}点`}),d.value=`two-chain`,_(),o();