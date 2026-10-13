  /* ============================================================
     あさの かい ナビ
     にっちょくが ページを めくって あさの かい・かえりの かいを すすめる。
     ことばが でにくい 子は、🔊 で アプリが かわりに いう。
     ============================================================ */
  const SUBJ = [['☀️', 'あさの かい'], ['📖', 'こくご'], ['🔢', 'さんすう'], ['🌱', 'せいかつ'], ['🎵', 'おんがく'], ['🎨', 'ずこう'], ['🏃', 'たいいく'], ['🧺', 'にちじょう せいかつ'], ['🧩', 'じりつ かつどう'], ['🔤', 'えいご'], ['🔧', 'さぎょう'], ['💻', 'パソコン'], ['📚', 'としょ'], ['🏊', 'プール'], ['⚽', 'そとあそび'], ['🚶', 'さんぽ'], ['🌻', 'しょくぶつ'], ['🍽️', 'きゅうしょく'], ['🛝', 'ひるやすみ'], ['🧹', 'そうじ'], ['🌙', 'かえりの かい']];
  const WX = [['☀️', 'はれ'], ['🌤️', 'はれ ときどき くもり'], ['☁️', 'くもり'], ['🌧️', 'あめ'], ['⛄', 'ゆき'], ['🌬️', 'かぜが つよい']];
  const WD = ['にち', 'げつ', 'か', 'すい', 'もく', 'きん', 'ど'], WDC = ['#E03131', '#495057', '#E8590C', '#1C7ED6', '#2B8A3E', '#F08C00', '#1971C2'];
  const HS = [['😊', 'げんきです', '#40C057'], ['😐', 'すこし わるいです', '#FAB005'], ['😷', 'わるいです', '#FA5252'], ['🏠', 'おやすみ', '#868E96']];
  const TOPICS = ['すきな たべもの', 'きのう した こと', 'すきな あそび', 'やすみの ひに したい こと', 'すきな どうぶつ', 'きょう がんばりたい こと', 'すきな いろ', 'すきな うた', 'いま ほしい もの', 'すきな きせつ'];
  const GOALS = ['じぶんから あいさつ しよう', 'さいごまで がんばろう', 'ともだちに やさしく しよう', 'しせいよく すわろう', 'はなしを よく きこう', 'こまったら 「てつだって」と いおう', 'じかんを まもろう'];
  const ITEMS = {
    hello: { e: '🙇', n: 'はじめの あいさつ' }, date: { e: '📅', n: 'ひづけ' }, weather: { e: '🌤️', n: 'てんき' }, health: { e: '🩺', n: 'けんこう かんさつ' },
    sched: { e: '🗓️', n: 'きょうの よてい' }, goal: { e: '🎯', n: 'きょうの めあて' }, speech: { e: '🎤', n: 'ひとこと スピーチ' }, teacher: { e: '🧑‍🏫', n: 'せんせいの おはなし' }, bye: { e: '👋', n: 'おわりの あいさつ' },
    hello2: { e: '🙇', n: 'はじめの あいさつ' }, reflect: { e: '💖', n: 'きょうの ふりかえり' }, tomorrow: { e: '🗓️', n: 'あしたの よてい' }, bye2: { e: '👋', n: 'さようなら' },
    nanohi: { e: '🎌', n: 'きょうは なんの ひ' }, birthday: { e: '🎂', n: 'おたんじょうび' }, kondate: { e: '🍽️', n: 'きゅうしょくの こんだて' }, kakari: { e: '🧹', n: 'かかりの しごと' }, song: { e: '🎵', n: 'こんげつの うた' }, kakari2: { e: '✅', n: 'かかりの ほうこく' }
  };
  // きょうは なんの ひ（きまった ひ）
  const DAYS = { '01-01': ['がんじつ', 'あたらしい 1ねんの はじまりの ひです。'], '01-07': ['ななくさ', 'ななくさがゆを たべて、げんきを ねがう ひです。'], '02-03': ['せつぶん', 'まめまきを して、おにを おいはらう ひです。'], '02-11': ['けんこく きねんの ひ', 'くにの はじまりを おいわいする やすみの ひです。'], '02-14': ['バレンタインデー', 'だいすきな ひとに きもちを つたえる ひです。'], '02-22': ['ねこの ひ', '「ニャン ニャン ニャン」で ねこの ひです。'], '02-23': ['てんのう たんじょうび', 'てんのうへいかの たんじょうびです。'], '03-03': ['ひなまつり', 'おんなのこの せいちょうを いわう ひです。'], '03-14': ['ホワイトデー', 'バレンタインの おかえしを する ひです。'], '03-20': ['しゅんぶんの ひ', 'ひると よるの ながさが おなじに なる ころです。'], '04-01': ['エイプリルフール', 'ちいさな じょうだんを いって たのしむ ひです。'], '04-23': ['せかい ほんの ひ', 'ほんを よむ ことを たのしむ ひです。'], '04-29': ['しょうわの ひ', 'むかしの にほんを ふりかえる やすみの ひです。'], '05-03': ['けんぽう きねんび', 'にほんの きまりの もとが できた ひです。'], '05-04': ['みどりの ひ', 'しぜんに したしむ ひです。'], '05-05': ['こどもの ひ', 'こどもの せいちょうを いわう ひです。こいのぼりを かざります。'], '06-04': ['むしば よぼう デー', 'はを たいせつに する ひです。'], '06-10': ['ときの きねんび', 'じかんを たいせつに する ひです。'], '07-07': ['たなばた', 'たんざくに ねがいごとを かく ひです。'], '08-11': ['やまの ひ', 'やまに したしむ やすみの ひです。'], '09-01': ['ぼうさいの ひ', 'じしんや かじに そなえる ひです。'], '09-09': ['きゅうきゅうの ひ', 'きゅうきゅうしゃや てあての ことを かんがえる ひです。'], '09-23': ['しゅうぶんの ひ', 'ひると よるの ながさが おなじに なる ころです。'], '10-10': ['めの あいご デー', 'めを たいせつに する ひです。'], '10-14': ['てつどうの ひ', 'にほんで はじめて きしゃが はしった ひです。'], '10-31': ['ハロウィン', 'かそうを して たのしむ ひです。'], '11-03': ['ぶんかの ひ', 'ぶんかを たいせつに する やすみの ひです。'], '11-09': ['119ばんの ひ', 'かじや きゅうきゅうの でんわ ばんごうの ひです。'], '11-15': ['しちごさん', '3さい・5さい・7さいの せいちょうを いわう ひです。'], '11-23': ['きんろう かんしゃの ひ', 'はたらく ひとに「ありがとう」を つたえる ひです。'], '12-22': ['とうじ', '1ねんで いちばん ひるが みじかい ころです。ゆずゆに はいります。'], '12-25': ['クリスマス', 'サンタクロースが くる と いわれる ひです。'], '12-31': ['おおみそか', '1ねんの さいごの ひです。'] };
  const SEASON = ['ふゆ。さむい ので てぶくろや マフラーで あたたかく しましょう。', 'ふゆ。かぜに きを つけましょう。', 'はるが ちかづいて きました。', 'はる。さくらが さく きせつです。', 'はる。みどりが きれいな きせつです。', 'つゆ。あめの ひが おおい きせつです。', 'なつ。みずを たくさん のみましょう。', 'なつやすみの きせつです。', 'あき。すずしく なって きました。', 'あき。スポーツや どくしょの きせつです。', 'あき。きの はが あかや きいろに なります。', 'ふゆ。1ねんの さいごの つきです。'];
  // なんかいめの げつようび（せいじんの ひ・うみの ひ など）
  function nthMonday(y, m, n) { const d = new Date(y, m, 1); const off = (8 - d.getDay()) % 7; return 1 + off + (n - 1) * 7; }
  function dayOf(d) {
    const y = d.getFullYear(), m = d.getMonth(), dd = d.getDate(), key = String(m + 1).padStart(2, '0') + '-' + String(dd).padStart(2, '0');
    if (m === 0 && dd === nthMonday(y, 0, 2)) return ['せいじんの ひ', 'おとなに なった ひとを いわう ひです。'];
    if (m === 6 && dd === nthMonday(y, 6, 3)) return ['うみの ひ', 'うみに かんしゃ する ひです。'];
    if (m === 8 && dd === nthMonday(y, 8, 3)) return ['けいろうの ひ', 'おじいさん・おばあさんを たいせつに する ひです。'];
    if (m === 9 && dd === nthMonday(y, 9, 2)) return ['スポーツの ひ', 'からだを うごかす ことを たのしむ ひです。'];
    return DAYS[key] || null;
  }
  const KAKARI = [['💡', 'でんき'], ['🪟', 'まど'], ['🧽', 'こくばん'], ['🌷', 'はなの みずやり'], ['📄', 'くばりもの'], ['🐟', 'いきもの'], ['📅', 'カレンダー'], ['🧺', 'せいとん']];
  const DEF_AM = ['hello', 'date', 'nanohi', 'weather', 'health', 'birthday', 'sched', 'kondate', 'goal', 'kakari', 'speech', 'song', 'teacher', 'bye'], DEF_PM = ['hello2', 'reflect', 'kakari2', 'tomorrow', 'teacher', 'bye2'];
  const DEF_OFF = ['kondate', 'kakari', 'song', 'kakari2'];
  const LIB = [['ひと', [['🐰', 'うさぎ'], ['🐻', 'くま'], ['🐼', 'パンダ'], ['🐱', 'ねこ'], ['🐶', 'いぬ'], ['🦊', 'きつね'], ['🐸', 'かえる'], ['🐧', 'ペンギン'], ['🐯', 'とら'], ['🐨', 'コアラ'], ['🐵', 'さる'], ['🦁', 'ライオン'], ['🐹', 'ハムスター'], ['🐮', 'うし'], ['🐷', 'ぶた'], ['🐤', 'ひよこ'], ['🦄', 'ユニコーン'], ['🐳', 'くじら'], ['🦖', 'きょうりゅう'], ['🚀', 'ロケット']]],
    ['べんきょう', SUBJ]];
  const APP = {
    id: 'asanokai-navi', title: 'あさの かい ナビ', ls: 'asanokai.v1', db: 'mieel-asanokai', sw: true, color: '#F08C00',
    profHead: '🏫 クラス', profWord: 'クラス', whoTitle: 'どの クラス？',
    defaults: { readAloud: true, callMode: 'call' },
    newProfile: (name, icon) => ({ id: 'p' + Math.random().toString(36).slice(2, 9), name: name === 'みんな' ? 'わたしの クラス' : name, icon, roster: [], tt: {}, am: DEF_AM.map(k => ({ k, on: DEF_OFF.indexOf(k) < 0 })), pm: DEF_PM.map(k => ({ k, on: DEF_OFF.indexOf(k) < 0 })), duty: { idx: 0, date: '' }, goal: '', topics: TOPICS.slice(), health: {}, wx: {}, fav: {}, done: {}, kakari: KAKARI.map(k => ({ e: k[0], n: k[1], who: [] })), menu: {}, song: '' }),
    normProfile(p) {
      p.roster = Array.isArray(p.roster) ? p.roster : []; p.tt = p.tt && typeof p.tt === 'object' ? p.tt : {};
      // あたらしい こうもくは、きまった じゅんばんの ところに いれる
      const fix = (a, d) => { a = Array.isArray(a) ? a.filter(x => ITEMS[x.k]) : []; d.forEach((k, di) => { if (a.some(x => x.k === k)) return; const prev = d.slice(0, di).reverse().find(q => a.some(x => x.k === q)); const at = prev ? a.findIndex(x => x.k === prev) + 1 : 0; a.splice(at, 0, { k, on: DEF_OFF.indexOf(k) < 0 }); }); return a; };
      p.am = fix(p.am, DEF_AM); p.pm = fix(p.pm, DEF_PM);
      if (!p.am.some(x => x.on)) p.am.forEach(x => { x.on = true; }); if (!p.pm.some(x => x.on)) p.pm.forEach(x => { x.on = true; });
      p.duty = p.duty || { idx: 0, date: '' }; p.goal = p.goal || ''; p.topics = Array.isArray(p.topics) && p.topics.length ? p.topics : TOPICS.slice();
      ['health', 'wx', 'fav', 'done', 'menu', 'photos'].forEach(k => { p[k] = p[k] && typeof p[k] === 'object' ? p[k] : {}; });
      if (!Array.isArray(p.kakari)) p.kakari = KAKARI.map(k => ({ e: k[0], n: k[1], who: [] })); p.song = p.song || '';
    },
    childScreens: ['run'], topScreens: ['home', 'setup'],
    renderHome: () => renderHome(),
    profileNote: p => p.roster.length + 'にん',
    onCloseSettings(sc) { if (sc === 'home') renderHome(); else if (sc === 'setup') renderSetup(); },
    helpNote: 'にっちょくが タブレット（テレビに うつしても よい）を もって、ひかって いる セリフを よみながら すすめます。ことばが でにくい 子は 🔊 で アプリに いって もらって、じぶんは「つぎ」を おす やくわりでも にっちょくが できます。にっちょくは ひが かわると つぎの 子に じどうで かわります。クラスの なまえ・しゃしん・じかんわり・すすめかたは「じゅんび（せんせい）」で せってい します（この たんまつの なかだけに ほぞん）。'
  };
/*BASE_HERE*/

  /* ============================================================
     きょうの じょうほう
     ============================================================ */
  const now = () => new Date();
  const ymd = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const ttOf = (p, wd) => (p.tt[wd] || []);
  function nextSchoolDay(d) { const x = new Date(d); do { x.setDate(x.getDate() + 1); } while (x.getDay() === 0 || x.getDay() === 6); return x; }
  // にっちょく：ひが かわったら つぎの 子へ
  function dutyUpdate(p) {
    const t = todayStr();
    if (!p.roster.length) return;
    if (p.duty.date && p.duty.date !== t) p.duty.idx = (p.duty.idx + 1) % p.roster.length;
    p.duty.date = t; p.duty.idx %= p.roster.length; persist();
  }
  const dutyOf = p => p.roster.length ? p.roster[p.duty.idx % p.roster.length] : null;
  const san = m => m.name + (/(さん|くん|ちゃん|せんせい)$/.test(m.name) ? '' : 'さん');
  async function cleanMedia() { const used = new Set(); store.profiles.forEach(p => { p.roster.forEach(m => { if (m.media) used.add(m.media); }); Object.values(p.photos || {}).forEach(v => used.add(v)); }); try { for (const m of await DB.all()) if (!used.has(m.id) && Date.now() - m.at > 60000) await DB.del(m.id); } catch (e) { /* 無視 */ } }

  /* ============================================================
     ホーム
     ============================================================ */
  function renderHome() {
    screen = 'home';
    const p = cur(); dutyUpdate(p);
    const d = now(), du = dutyOf(p), am = d.getHours() < 12;
    const tcard = h('button', { type: 'button', class: 'mcard', style: '--c:#7048E8' }, h('i', { class: 'lp' }), E('🛠️'), h('b', null, 'じゅんび'), h('small', null, 'せんせい（1びょう ながおし）'));
    longPress(tcard, 1000, () => { sfx.tap(); renderSetup(); });
    tcard.addEventListener('click', () => toast('せんせいは 1びょう ながおし して ください'));
    const mv = k => { if (!p.roster.length) return; p.duty.idx = (p.duty.idx + k + p.roster.length) % p.roster.length; p.duty.date = todayStr(); persist(); sfx.tap(); renderHome(); };
    setView('home', [
      h('h1', { class: 'title' }, '🌻 ' + p.name, h('small', null, (d.getMonth() + 1) + 'がつ ' + d.getDate() + 'にち（' + WD[d.getDay()] + '）')),
      du ? h('div', { class: 'duty' }, h('button', { type: 'button', class: 'arr', 'aria-label': 'まえの こ', onclick: () => mv(-1) }, '◀'), pic(du), h('div', null, h('small', null, 'きょうの にっちょく'), h('br'), h('b', null, san(du))), h('button', { type: 'button', class: 'arr', 'aria-label': 'つぎの こ', onclick: () => mv(1) }, '▶'))
        : h('div', { class: 'note-box' }, 'はじめに せんせいが「じゅんび」で クラスの なまえを いれて ください。'),
      h('div', { class: 'menu' },
        h('button', { type: 'button', class: 'mcard', style: '--c:#F08C00' + (am ? '' : ';opacity:.75'), onclick: () => { if (tapOk()) startRun('am'); } }, E('☀️'), h('b', null, 'あさの かい'), h('small', null, p.done[todayStr() + 'am'] ? '✓ きょうは おわった' : p.am.filter(x => x.on).length + 'こ')),
        h('button', { type: 'button', class: 'mcard', style: '--c:#5F3DC4' + (am ? ';opacity:.75' : ''), onclick: () => { if (tapOk()) startRun('pm'); } }, E('🌙'), h('b', null, 'かえりの かい'), h('small', null, p.done[todayStr() + 'pm'] ? '✓ きょうは おわった' : p.pm.filter(x => x.on).length + 'こ')),
        tcard)
    ]);
  }

  /* ============================================================
     すすめる
       R = { kind:'am'|'pm', list:[key], i, li（いまの セリフ）, st:{} }
     ============================================================ */
  let R = null;
  function startRun(kind) {
    const p = cur(); R = { kind, list: p[kind].filter(x => x.on).map(x => x.k).filter(k => k !== 'birthday' || bdToday(p).length), i: 0, li: 0, st: {} };
    if (!R.list.length) { toast('すすめかたが ありません'); return; }
    keepAwake(); sfx.tap(); renderRun();
  }
  const DUTY = 'にっちょく', ALL = 'みんな', TCH = 'せんせい';
  const md = d => (d.getMonth() + 1) + '/' + d.getDate();
  const bdToday = p => p.roster.filter(m => m.bd && m.bd.replace(/^0/, '').replace('/0', '/') === md(new Date()));
  // その こうもくの セリフと ぶひん
  function itemOf(k) {
    const p = cur(), d = now(), dk = todayStr(), wd = d.getDay(), am = R.kind === 'am';
    const kai = am ? 'あさの かい' : 'かえりの かい';
    if (k === 'hello' || k === 'hello2') return { lines: [[DUTY, 'これから ' + kai + 'を はじめます。'], [DUTY, 'きりつ。'], [DUTY, 'れい。'], [ALL, am ? 'おはよう ございます。' : 'おねがいします。'], [DUTY, 'ちゃくせき。']] };
    if (k === 'bye') return { lines: [[DUTY, 'これで あさの かいを おわります。'], [DUTY, 'きりつ。れい。'], [ALL, 'ありがとう ございました。'], [DUTY, 'ちゃくせき。']] };
    if (k === 'bye2') return { lines: [[DUTY, 'これで かえりの かいを おわります。'], [DUTY, 'きりつ。れい。'], [ALL, 'さようなら。']] };
    if (k === 'teacher') return { lines: [[DUTY, 'せんせいの おはなし。せんせい、おねがいします。'], [TCH, '（せんせいの おはなし）']] };
    if (k === 'date') {
      const t = (d.getMonth() + 1) + 'がつ ' + d.getDate() + 'にち ' + WD[wd] + 'ようび';
      return { lines: [[DUTY, 'きょうは なんがつ なんにち なんようび ですか？'], [ALL, t + ' です。']],
        w: () => h('div', { class: 'datecard' }, h('div', { class: 'm' }, h('small', null, (d.getMonth() + 1) + 'がつ'), h('b', null, String(d.getDate())), h('small', null, 'にち')), h('div', { class: 'w', style: 'background:' + WDC[wd] }, WD[wd] + 'ようび')) };
    }
    if (k === 'weather') {
      const wi = p.wx[dk];
      return { lines: [[DUTY, 'きょうの てんきは なんですか？'], [ALL, (wi == null ? '〇〇' : WX[wi][1]) + ' です。']], need: 1, ok: () => p.wx[dk] != null, ng: 'てんきを えらんでね',
        w: () => h('div', { class: 'wx' }, WX.map((x, i) => h('button', { type: 'button', class: wi === i ? 'on' : '', onclick: () => { p.wx[dk] = i; persist(); sfx.tap(); speak(x[1]); R.li = Math.max(R.li, 1); renderRun(true); } }, E(x[0]), x[1]))) };
    }
    if (k === 'health') return healthItem(p, dk);
    if (k === 'sched' || k === 'tomorrow') {
      const day = k === 'sched' ? d : nextSchoolDay(d), list = ttOf(p, day.getDay());
      const head = k === 'sched' ? 'きょうの よていを いいます。' : 'あしたの よていを いいます。' + ((day.getDate() - d.getDate() + 31) % 31 > 1 ? '（' + WD[day.getDay()] + 'ようび）' : '');
      const lines = [[DUTY, head]].concat(list.length ? list.map((c, i) => [DUTY, (i + 1) + 'ばんめは ' + c[1] + ' です。']) : [[DUTY, 'よていは せんせいに ききましょう。']]);
      return { lines, w: () => h('div', { class: 'tt' }, list.map((c, i) => h('div', { class: 'c' + (R.li === i + 1 ? ' now' : '') }, h('small', null, (i + 1) + 'ばんめ'), E(c[0]), h('b', null, c[1])))) };
    }
    if (k === 'nanohi') {
      const dd = dayOf(d);
      if (dd) return { lines: [[DUTY, 'きょうは なんの ひ でしょう？'], [DUTY, 'きょうは「' + dd[0] + '」です。'], [DUTY, dd[1]]], w: () => h('div', { class: 'topic' }, '🎌 ' + dd[0]) };
      return { lines: [[DUTY, 'いまの きせつの おはなし です。'], [DUTY, (d.getMonth() + 1) + 'がつは ' + SEASON[d.getMonth()]]], w: () => h('div', { class: 'topic' }, ['⛄', '⛄', '🌱', '🌸', '🌿', '☔', '🌻', '🍉', '🍂', '🏃', '🍁', '🎄'][d.getMonth()] + ' ' + (d.getMonth() + 1) + 'がつ') };
    }
    if (k === 'birthday') {
      const bs = bdToday(p), nm = bs.map(san).join('と ');
      return { lines: [[DUTY, 'きょうは ' + nm + 'の おたんじょうびです。'], [DUTY, 'みんなで おいわい しましょう。さん、はい。'], [ALL, 'おたんじょうび おめでとう！']],
        w: () => h('div', { class: 'call' }, h('div', { style: 'display:flex;gap:10px;justify-content:center' }, bs.map(m => pic(m))), h('div', { class: 'nm' }, '🎂 ' + nm), h('button', { type: 'button', class: 'mid-btn', onclick: e => { clapFx(e.currentTarget); FX.big(); } }, '🎉 おいわい')) };
    }
    if (k === 'kondate') {
      const mn = p.menu[dk] || '';
      return { lines: [[DUTY, 'きょうの きゅうしょくの こんだてを いいます。'], [DUTY, mn ? mn + ' です。' : 'こんだては、せんせいに ききましょう。']],
        w: () => h('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:8px' }, h('div', { class: 'topic' }, '🍽️ ' + (mn || '？')), h('button', { type: 'button', class: 'mid-btn', onclick: () => { const v = prompt('きょうの こんだて（れい：ごはん・カレー・サラダ・ぎゅうにゅう）', mn); if (v !== null) { p.menu[dk] = v.trim(); persist(); renderRun(true); } } }, '✏️ こんだてを いれる（せんせい）')) };
    }
    if (k === 'kakari' || k === 'kakari2') {
      const ks = p.kakari.filter(x => x.who.length), whoN = x => x.who.map(id => p.roster.find(m => m.id === id)).filter(Boolean).map(san).join('と ');
      const lines = [[DUTY, k === 'kakari' ? 'かかりの しごとを たしかめます。' : 'かかりの しごとの ほうこくを します。']].concat(ks.length ? ks.map(x => k === 'kakari' ? [DUTY, x.n + 'かかりは ' + whoN(x) + 'です。'] : [ALL, x.n + 'かかり、おわりました。']) : [[TCH, '（かかりは「じゅんび」で きめられます）']]);
      return { lines, w: () => h('div', { class: 'tt' }, ks.map((x, i) => h('div', { class: 'c' + (R.li === i + 1 ? ' now' : '') }, E(x.e), h('b', null, x.n), h('small', null, x.who.map(id => (p.roster.find(m => m.id === id) || {}).name).filter(Boolean).join('・'))))) };
    }
    if (k === 'song') {
      const sg = p.song || '';
      return { lines: [[DUTY, 'こんげつの うたを うたいます。' + (sg ? '「' + sg + '」です。' : '')], [DUTY, 'さん、はい。'], [ALL, '（うたう）']], w: () => h('div', { class: 'topic' }, '🎵 ' + (sg || 'こんげつの うた')) };
    }
    if (k === 'goal') {
      const g = p.goal || GOALS[Math.floor(Date.now() / 864e5) % GOALS.length];
      return { lines: [[DUTY, 'きょうの めあては 「' + g + '」 です。'], [DUTY, 'みんなで いいましょう。さん、はい。'], [ALL, g + '。']], w: () => h('div', { class: 'topic' }, '🎯 ' + g) };
    }
    if (k === 'speech') {
      if (R.st.topic == null) R.st.topic = Math.floor(Math.random() * p.topics.length);
      const du = dutyOf(p), tp = p.topics[R.st.topic % p.topics.length];
      return { lines: [[DUTY, 'ひとこと スピーチを します。'], [DUTY, 'おだいは 「' + tp + '」 です。'], [DUTY, '（' + tp + 'を はなす）'], [ALL, '（はくしゅ）']],
        w: () => h('div', { style: 'display:flex;flex-direction:column;align-items:center;gap:10px' }, h('div', { class: 'topic' }, '🎤 ' + tp),
          h('div', { class: 'actions' }, h('button', { type: 'button', class: 'mid-btn', onclick: () => { R.st.topic = (R.st.topic + 1 + Math.floor(Math.random() * (p.topics.length - 1))) % p.topics.length; sfx.tap(); renderRun(true); } }, '🎲 べつの おだい'),
            h('button', { type: 'button', class: 'mid-btn', onclick: e => clapFx(e.currentTarget) }, '👏 はくしゅ'))) };
    }
    if (k === 'reflect') {
      const list = ttOf(p, wd), fav = p.fav[dk] || [];
      return { lines: [[DUTY, 'きょうの ふりかえりを します。たのしかった ことは なんですか？'], [ALL, (fav.length ? fav.join('と ') : '〇〇') + 'が たのしかったです。']],
        w: () => list.length ? h('div', { class: 'tt' }, list.map(c => h('button', { type: 'button', class: 'c' + (fav.indexOf(c[1]) >= 0 ? ' fav' : ''), onclick: () => { const f = p.fav[dk] = p.fav[dk] || []; const j = f.indexOf(c[1]); if (j >= 0) f.splice(j, 1); else f.push(c[1]); persist(); sfx.tap(); R.li = Math.max(R.li, 1); renderRun(true); } }, E(c[0]), h('b', null, c[1])))) : h('div', { class: 'note-box' }, 'じかんわりを いれると、えらんで こたえられます') };
    }
    return { lines: [[DUTY, ITEMS[k].n]] };
  }
  // けんこう かんさつ：1にんずつ なまえを よぶ
  function healthItem(p, dk) {
    const H = p.health[dk] = p.health[dk] || {};
    const ros = p.roster;
    if (!ros.length) return { lines: [[DUTY, 'けんこう かんさつを します。'], [TCH, '（クラスの なまえが ありません）']] };
    if (R.st.hi == null) R.st.hi = 0;
    const done = R.st.hi >= ros.length;
    const sick = ros.filter(m => H[m.id] === 1 || H[m.id] === 2), off = ros.filter(m => H[m.id] === 3);
    const sum = (off.length ? off.map(san).join('、') + 'は おやすみです。' : '') + (sick.length ? sick.map(san).join('、') + 'は ちょうしが わるいです。' : '') + (!off.length && !sick.length ? 'みんな げんきです。' : 'ほかの ひとは げんきです。');
    const lines = [[DUTY, 'けんこう かんさつを します。なまえを よばれたら へんじを しましょう。']];
    if (done) lines.push([DUTY, sum]);
    return { lines, need: 1, ok: () => R.st.hi >= ros.length, ng: 'さいごの ひとまで よぼう', post: done ? null : () => speak(san(ros[R.st.hi])),
      w: () => {
        if (done) return h('div', { class: 'roster' }, ros.map(m => h('span', null, (H[m.id] != null ? HS[H[m.id]][0] : '・') + ' ' + m.name)));
        const m = ros[R.st.hi];
        const set = v => { H[m.id] = v; persist(); sfx.tap(); R.st.hi++; if (R.st.hi >= ros.length) R.li = 1; renderRun(true); };
        return h('div', { class: 'call' }, pic(m), h('div', { class: 'nm' }, san(m)),
          h('div', { class: 'hbtns' }, HS.map((x, i) => h('button', { type: 'button', style: '--hc:' + x[2], onclick: () => { if (tapOk(400)) set(i); } }, E(x[0]), x[1]))),
          h('div', { class: 'roster' }, ros.map((x, i) => h('span', { class: i === R.st.hi ? 'now' : '' }, (H[x.id] != null ? HS[H[x.id]][0] : '・') + ' ' + x.name))),
          R.st.hi > 0 ? h('button', { type: 'button', class: 'mid-btn', onclick: () => { R.st.hi--; renderRun(true); } }, '↩ ひとり もどる') : null);
      } };
  }
  // しゃしん：'am:hello:0'（セリフごと） → 'am:hello'（こうもく ぜんたい）の じゅんに さがす
  function photoOf(p, kind, k, li) {
    const id = (p.photos || {})[kind + ':' + k + ':' + li] || (p.photos || {})[kind + ':' + k];
    if (!id) return null;
    const box = h('div', { class: 'rphoto' }, h('img', { alt: '' }));
    mediaURL(id).then(u => { const im = box.querySelector('img'); if (u && im) im.src = u; else box.remove(); });
    return box;
  }
  function clapFx(el) { for (let i = 0; i < 6; i++) setTimeout(() => tone(1800 + Math.random() * 600, 0, .05, 'square', .15), i * 110); FX.small(el, { variant: 4 }); }
  function renderRun(quiet) {
    screen = 'run';
    const p = cur(), k = R.list[R.i], it = itemOf(k), du = dutyOf(p);
    R.li = Math.min(R.li, it.lines.length - 1);
    // セリフが おおい ときは、いまの まわり だけ みせる
    const lo = it.lines.length > 4 ? Math.max(0, Math.min(R.li - 1, it.lines.length - 3)) : 0, hi = it.lines.length > 4 ? lo + 3 : it.lines.length;
    const lineEls = it.lines.map((l, i) => i < lo || i >= hi ? null : h('div', { class: 'line' + (i === R.li ? ' now' : i < R.li ? ' past' : '') }, h('span', { class: 'who2' }, l[0]), h('span', null, l[1]))).filter(Boolean);
    const sayNow = end => { const l = it.lines[R.li]; if (l && !/^（/.test(l[1])) speak(l[1], { end }); else if (end) end(); };
    const first = R.i === 0 && R.li === 0;
    const next = () => {
      if (!tapOk(400)) return;
      if (R.li < it.lines.length - 1) {
        if (it.need === R.li + 1 && it.ok && !it.ok()) { toast(it.ng); sfx.ng(); return; }
        R.li++; sfx.step(); renderRun(); return;
      }
      if (it.ok && !it.ok()) { toast(it.ng); sfx.ng(); return; }
      if (R.i < R.list.length - 1) { R.i++; R.li = 0; R.st = {}; sfx.page(); renderRun(); } else finishRun();
    };
    const prev = () => {
      if (!tapOk(400)) return;
      if (R.li > 0) { R.li--; renderRun(); return; }
      if (R.i > 0) { R.i--; R.st = {}; R.li = 99; renderRun(); }
    };
    const last = R.i === R.list.length - 1 && R.li >= it.lines.length - 1;
    setView('run', [
      h('div', { class: 'rhead' }, du ? h('div', { class: 'who' }, pic(du), 'にっちょく：' + du.name) : h('span'),
        h('div', { class: 'ttl' }, ITEMS[k].e + ' ' + ITEMS[k].n), h('span', { style: 'font-size:14px;color:var(--sub)' }, (R.i + 1) + ' / ' + R.list.length)),
      h('div', { class: 'steps' }, R.list.map((x, i) => h('i', { class: i === R.i ? 'on' : i < R.i ? 'done' : '' }, ITEMS[x].n))),
      h('div', { class: 'body' }, photoOf(p, R.kind, k, R.li), it.w ? it.w() : null, h('div', { class: 'lines' }, lineEls)),
      h('div', { class: 'rfoot' },
        h('button', { type: 'button', class: 'navb prev', disabled: first, onclick: prev }, '◀ まえ'),
        h('button', { type: 'button', class: 'say', 'aria-label': 'よみあげ', onclick: () => sayNow() }, '🔊'),
        h('button', { type: 'button', class: 'navb', onclick: next }, last ? '✓ おわり' : 'つぎ ▶'))]);
    const nowEl = $('.line.now'); if (nowEl && nowEl.scrollIntoView) nowEl.scrollIntoView({ block: 'nearest' });
    const nc = $('.tt .c.now'); if (nc && nc.scrollIntoView) nc.scrollIntoView({ block: 'nearest', inline: 'center' });
    if (!quiet && S().readAloud) after(250, () => sayNow(it.post ? () => after(300, it.post) : null));
    else if (it.post) after(200, it.post);
  }
  function finishRun() {
    const p = cur(); p.done[todayStr() + R.kind] = Date.now(); persist();
    screen = 'end';
    setView('center', [h('div', { class: 'center' }, h('div', { style: 'font-size:clamp(80px,16vh,150px)' }, R.kind === 'am' ? '🌞' : '🌙'),
      h('h1', { class: 'title' }, (R.kind === 'am' ? 'あさの かい' : 'かえりの かい') + '、おしまい！', h('small', null, dutyOf(p) ? 'にっちょくの ' + san(dutyOf(p)) + '、ありがとう！' : 'よく できました')),
      h('div', { class: 'actions' }, h('button', { type: 'button', class: 'big-btn go', onclick: () => { if (tapOk()) renderHome(); } }, '🏠 おわる')))]);
    sfx.clear(); FX.big();
    speak((R.kind === 'am' ? 'あさの かい' : 'かえりの かい') + '、おしまい。にっちょくさん、ありがとう');
  }

  /* ============================================================
     じゅんび（せんせい）
     ============================================================ */
  let setupDay = 1;
  function openLib(onPick, list) {
    const m = $('#libModal'), PN = $('#libPanel'); PN.innerHTML = '';
    const close = () => m.classList.remove('open');
    PN.append(h('div', { class: 'panel-head' }, h('h2', null, '🖼️ えを えらぶ'), h('button', { type: 'button', class: 'btn', onclick: close }, 'とじる')),
      list ? null : h('div', { class: 'btns' },
        h('button', { type: 'button', class: 'btn primary', onclick: async () => { const fs = await pickFile('image/*', 'user'); if (!fs) return; const id = await savePhoto(fs[0], 400); close(); onPick({ media: id }); } }, '📷 カメラで とる'),
        h('button', { type: 'button', class: 'btn primary', onclick: async () => { const fs = await pickFile('image/*'); if (!fs) return; const id = await savePhoto(fs[0], 400); close(); onPick({ media: id }); } }, '🖼️ しゃしんを えらぶ')),
      h('div', { class: 'lib' }, (list || LIB).map(([g, l]) => [h('h4', null, g), l.map(([e, n]) => h('button', { type: 'button', onclick: () => { close(); onPick({ emoji: e, name: n }); } }, E(e), n))])));
    m.classList.add('open'); m.scrollTop = 0;
  }
  $('#libModal').addEventListener('click', e => { if (e.target.id === 'libModal') $('#libModal').classList.remove('open'); });
  // こうもくの しゃしんを きめる（セリフごと・こうもく ぜんたい）
  function photoEditor(kind, k) {
    const p = cur(), m = $('#libModal'), PN = $('#libPanel'); PN.innerHTML = '';
    const keep = R; R = { kind, list: [], i: 0, li: 0, st: { hi: 1e9, topic: 0 } };
    let lines = []; try { lines = itemOf(k).lines; } catch (e) { lines = []; } R = keep;
    const close = () => { m.classList.remove('open'); renderSetup(); };
    const row = (key, label) => {
      const id = p.photos[key], th = h('div', { class: 'pth' }, id ? h('img', { alt: '' }) : h('span', null, '📷'));
      if (id) mediaURL(id).then(u => { const im = th.querySelector('img'); if (u && im) im.src = u; });
      const set = async cap => { const fs = await pickFile('image/*', cap); if (!fs) return; p.photos[key] = await savePhoto(fs[0], 1000); persist(); photoEditor(kind, k); };
      return h('div', { class: 'prow2' }, th, h('div', { class: 'pl' }, label),
        h('button', { type: 'button', class: 'btn', onclick: () => set('environment') }, '📷 とる'),
        h('button', { type: 'button', class: 'btn', onclick: () => set() }, '🖼️ えらぶ'),
        id ? h('button', { type: 'button', class: 'btn', onclick: () => { delete p.photos[key]; persist(); cleanMedia(); photoEditor(kind, k); } }, '🗑') : null);
    };
    PN.append(h('div', { class: 'panel-head' }, h('h2', null, ITEMS[k].e + ' ' + ITEMS[k].n + ' の しゃしん'), h('button', { type: 'button', class: 'btn ok', onclick: close }, '✓ とじる')),
      h('p', { class: 'note' }, 'セリフごとに しゃしんを つけると、その セリフが ひかって いる ときに おおきく でます（れい：「これから あさの かいを はじめます」に にっちょくが まえに たつ しゃしん）。セリフに しゃしんが ない ときは「こうもく ぜんたい」の しゃしんが でます。しゃしんは この たんまつの なかだけに ほぞん します。'),
      row(kind + ':' + k, '🖼️ こうもく ぜんたい'),
      ...lines.map((l, i) => row(kind + ':' + k + ':' + i, '【' + l[0] + '】 ' + l[1])));
    m.classList.add('open'); m.scrollTop = 0;
  }
  function renderSetup() {
    screen = 'setup';
    const p = cur(), re = () => { persist(); renderSetup(); };
    const roster = h('div', { class: 'sbox' }, h('h3', null, '👦 クラスの なかま（にっちょくの じゅん）'),
      p.roster.map((m, i) => { const pc = pic(m); pc.title = 'え・しゃしん'; pc.addEventListener('click', () => openLib(r => { if (r.media) m.media = r.media; else { m.emoji = r.emoji; m.media = null; } re(); }));
        return h('div', { class: 'srowx' }, h('b', { style: 'width:24px' }, String(i + 1)), pc, h('input', { type: 'text', value: m.name, oninput: e => { m.name = e.target.value; persistSoon(); } }),
          h('input', { type: 'text', class: 'bd', value: m.bd || '', placeholder: '🎂 4/12', title: 'たんじょうび（つき/ひ）', inputmode: 'numeric', oninput: e => { m.bd = e.target.value.replace(/[^0-9/]/g, ''); persistSoon(); } }),
          h('button', { type: 'button', class: 'ibtn' + (p.duty.idx === i ? ' on' : ''), title: 'きょうの にっちょくに する', onclick: () => { p.duty.idx = i; p.duty.date = todayStr(); re(); } }, '⭐'),
          h('button', { type: 'button', class: 'ibtn', onclick: () => { if (i > 0) { p.roster.splice(i - 1, 0, p.roster.splice(i, 1)[0]); re(); } } }, '▲'),
          h('button', { type: 'button', class: 'ibtn', onclick: () => { if (i < p.roster.length - 1) { p.roster.splice(i + 1, 0, p.roster.splice(i, 1)[0]); re(); } } }, '▼'),
          h('button', { type: 'button', class: 'ibtn warn', onclick: () => { if (confirm(m.name + ' を けしますか？')) { p.roster.splice(i, 1); re(); cleanMedia(); } } }, '🗑')); }),
      h('div', { class: 'srowx' }, h('button', { type: 'button', class: 'mid-btn', onclick: () => { p.roster.push({ id: 'm' + uid(), name: 'なまえ' + (p.roster.length + 1), emoji: ICONS[p.roster.length % ICONS.length], media: null }); re(); } }, '＋ ひとり ふやす')),
      h('p', { class: 'note' }, '⭐ が きょうの にっちょく。ひが かわると つぎの ひとに かわります。しゃしんは この たんまつだけに ほぞん します。'));
    const day = setupDay, list = p.tt[day] = p.tt[day] || [];
    const tt = h('div', { class: 'sbox' }, h('h3', null, '🗓️ じかんわり'),
      h('div', { class: 'days' }, [1, 2, 3, 4, 5, 6].map(d => h('button', { type: 'button', class: d === day ? 'on' : '', onclick: () => { setupDay = d; renderSetup(); } }, WD[d]))),
      h('div', { class: 'chipl' }, list.map((c, i) => h('span', { class: 'ch' }, (i + 1) + '. ' + c[0] + ' ' + c[1],
        h('button', { type: 'button', 'aria-label': 'まえへ', onclick: () => { if (i > 0) { list.splice(i - 1, 0, list.splice(i, 1)[0]); re(); } } }, '◀'),
        h('button', { type: 'button', 'aria-label': 'けす', onclick: () => { list.splice(i, 1); re(); } }, '✕'))),
        h('button', { type: 'button', class: 'mid-btn', onclick: () => openLib(r => { list.push([r.emoji, r.name]); re(); }, [['べんきょう', SUBJ]]) }, '＋ ふやす'),
        h('button', { type: 'button', class: 'mid-btn', onclick: () => { const n = prompt('なまえ（れい：はっぴょうかいの れんしゅう）'); if (n) { list.push(['⭐', n]); re(); } } }, '＋ じぶんで かく')),
      day > 1 ? h('button', { type: 'button', class: 'mid-btn', style: 'align-self:flex-start', onclick: () => { p.tt[day] = (p.tt[day - 1] || []).map(x => x.slice()); re(); } }, '📋 ' + WD[day - 1] + 'ようびを コピー') : null);
    const prog = kind => h('div', { class: 'sbox' }, h('h3', null, kind === 'am' ? '☀️ あさの かいの すすめかた' : '🌙 かえりの かいの すすめかた'),
      h('div', { class: 'prog' }, p[kind].map((x, i) => h('div', { class: 'it' + (x.on ? '' : ' off') }, E(ITEMS[x.k].e), h('b', null, ITEMS[x.k].n),
        h('button', { type: 'button', class: 'ibtn' + (x.on ? ' on' : ''), onclick: () => { x.on = !x.on; re(); } }, x.on ? '✓' : '－'),
        h('button', { type: 'button', class: 'ibtn', onclick: () => { if (i > 0) { p[kind].splice(i - 1, 0, p[kind].splice(i, 1)[0]); re(); } } }, '▲'),
        h('button', { type: 'button', class: 'ibtn', onclick: () => { if (i < p[kind].length - 1) { p[kind].splice(i + 1, 0, p[kind].splice(i, 1)[0]); re(); } } }, '▼'),
        h('button', { type: 'button', class: 'ibtn ph' + (Object.keys(p.photos).some(q => q.indexOf(kind + ':' + x.k) === 0) ? ' on' : ''), title: 'しゃしん', onclick: () => photoEditor(kind, x.k) }, '📷')))));
    const kak = h('div', { class: 'sbox' }, h('h3', null, '🧹 かかり（なまえを タッチして きめる）'),
      p.kakari.map((x, i) => h('div', { class: 'srowx' }, E(x.e), h('input', { type: 'text', value: x.n, style: 'flex:0 1 160px', oninput: e => { x.n = e.target.value; persistSoon(); } }),
        h('div', { class: 'chipl', style: 'flex:1' }, p.roster.map(m => h('button', { type: 'button', class: 'mini-btn' + (x.who.indexOf(m.id) >= 0 ? ' on' : ''), style: x.who.indexOf(m.id) >= 0 ? 'background:var(--accent);color:#fff;border-color:var(--accent)' : '', onclick: () => { const j = x.who.indexOf(m.id); if (j >= 0) x.who.splice(j, 1); else x.who.push(m.id); re(); } }, m.name))),
        h('button', { type: 'button', class: 'ibtn warn', onclick: () => { p.kakari.splice(i, 1); re(); } }, '🗑'))),
      h('div', { class: 'srowx' }, h('button', { type: 'button', class: 'mid-btn', onclick: () => { p.kakari.push({ e: '⭐', n: 'あたらしい かかり', who: [] }); re(); } }, '＋ かかりを ふやす'),
        h('span', null, '🎵 こんげつの うた'), h('input', { type: 'text', value: p.song, placeholder: 'れい：ともだち 100にん できるかな', oninput: e => { p.song = e.target.value; persistSoon(); } })));
    const goal = h('div', { class: 'sbox' }, h('h3', null, '🎯 めあて・🎤 スピーチの おだい'),
      h('div', { class: 'srowx' }, h('span', null, 'めあて'), h('input', { type: 'text', value: p.goal, placeholder: 'からっぽ なら ひごとに かわります（' + GOALS[0] + ' など）', oninput: e => { p.goal = e.target.value; persistSoon(); } })),
      h('div', { class: 'chipl' }, p.topics.map((t, i) => h('span', { class: 'ch' }, t, h('button', { type: 'button', onclick: () => { if (p.topics.length > 1) { p.topics.splice(i, 1); re(); } } }, '✕'))),
        h('button', { type: 'button', class: 'mid-btn', onclick: () => { const n = prompt('スピーチの おだい'); if (n) { p.topics.push(n); re(); } } }, '＋ おだい')));
    setView('setup', [h('h1', { class: 'title' }, '🛠️ じゅんび（' + p.name + '）', h('small', null, 'クラスを ふやす・なまえを かえるのは ⚙️ から')),
      roster, tt, prog('am'), prog('pm'), kak, goal,
      h('div', { class: 'actions' }, h('button', { type: 'button', class: 'big-btn go', onclick: () => { if (tapOk()) { persist(); cleanMedia(); renderHome(); } } }, '✓ できた'))]);
  }

  /* ============================================================
     プリント
       script … にっちょくの しんこう カード ／ tt … しゅうの じかんわり ／ health … けんこう かんさつ ひょう（1かげつ）
     ============================================================ */
  const PF = '<div class="pf">© MieeL　あさの かい ナビ　www.mieel-support-school.com</div>';
  const HD = (t, s) => '<div class="phd"><h1>' + t + '</h1><small>' + (s || '') + '</small></div>';
  function buildPages(type, o) {
    o = o || {};
    const p = store.profiles.find(x => x.id === o.pid) || cur();
    if (type === 'script') {
      const kind = o.kind === 'pm' ? 'pm' : 'am', keep = R;
      R = { kind, list: [], i: 0, li: 0, st: { hi: 1e9, topic: 0 } };
      let body = '', n = 0;
      p[kind].filter(x => x.on && (x.k !== 'birthday' || bdToday(p).length)).forEach(x => { const it = itemOf(x.k); body += '<div class="ph2">' + ITEMS[x.k].e + ' ' + ITEMS[x.k].n + '</div>' + it.lines.filter(l => l[0] !== TCH || x.k === 'teacher').map(l => { n++; return '<div class="pl">【' + l[0] + '】 ' + esc(l[1].replace(/〇〇/g, '＿＿＿')) + '</div>'; }).join(''); });
      R = keep;
      return ['<div class="ppage">' + HD((kind === 'am' ? '☀️ あさの かい' : '🌙 かえりの かい') + '（にっちょく）', esc(p.name)) + '<div class="pscript' + (n > 20 || body.length > 2600 ? ' sm' : '') + '">' + body + '</div>' + PF + '</div>'];
    }
    if (type === 'tt') {
      const days = o.sat === 'on' ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5];
      const rows = Math.max(5, ...days.map(d => ttOf(p, d).length));
      const rh = Math.min(26, Math.floor(215 / rows));
      let tr = '<tr><th class="no"></th>' + days.map(d => '<th style="color:' + WDC[d] + '">' + WD[d] + '</th>').join('') + '</tr>';
      for (let r = 0; r < rows; r++) tr += '<tr><td class="no">' + (r + 1) + '</td>' + days.map(d => { const c = ttOf(p, d)[r]; return '<td style="height:' + rh + 'mm">' + (c ? '<span class="pe" style="font-size:' + Math.min(11, rh * .42) + 'mm">' + c[0] + '</span>' + esc(c[1]) : '') + '</td>'; }).join('') + '</tr>';
      return ['<div class="ppage">' + HD('🗓️ じかんわり', esc(p.name)) + '<table class="ptt">' + tr + '</table>' + PF + '</div>'];
    }
    // けんこう かんさつ ひょう
    const d0 = new Date(); if (o.m === 'prev') d0.setMonth(d0.getMonth() - 1, 1);
    const y = d0.getFullYear(), mo = d0.getMonth(), days = [];
    for (let dd = 1; dd <= 31; dd++) { const x = new Date(y, mo, dd); if (x.getMonth() !== mo) break; if (x.getDay() !== 0 && x.getDay() !== 6) days.push(x); }
    const mark = ['○', '△', '×', 'や'];
    const ros = p.roster.length ? p.roster : Array.from({ length: 8 }, () => ({ id: '', name: '' }));
    const rowH = Math.min(12, Math.floor(200 / (ros.length + 1)));
    let tr = '<tr><th class="n">なまえ</th>' + days.map(x => '<th style="color:' + WDC[x.getDay()] + '">' + x.getDate() + '<br>' + WD[x.getDay()] + '</th>').join('') + '</tr>';
    ros.forEach(m => { tr += '<tr><td class="n" style="height:' + rowH + 'mm">' + esc(m.name) + '</td>' + days.map(x => { const H = p.health[ymd(x)]; return '<td>' + (H && H[m.id] != null ? mark[H[m.id]] : '') + '</td>'; }).join('') + '</tr>'; });
    return ['<div class="ppage">' + HD('🩺 けんこう かんさつ', esc(p.name) + '　' + y + 'ねん ' + (mo + 1) + 'がつ<br>○げんき △すこし わるい ×わるい や おやすみ') + '<table class="phl">' + tr + '</table>' + PF + '</div>'];
  }
  window.MieelPrintAPI = {
    version: 1, fixed: true,
    app: { id: 'asanokai-navi', title: 'あさの かい ナビ', icon: '🌻' },
    list() {
      const cls = { key: 'pid', label: 'クラス', opts: store.profiles.map(p => [p.id, p.name]), def: cur().id };
      return [
        { id: 'script', name: 'にっちょくの しんこう カード', icon: '📜', params: [cls, { key: 'kind', label: 'かい', opts: [['am', 'あさの かい'], ['pm', 'かえりの かい']], def: 'am' }] },
        { id: 'tt', name: 'じかんわり', icon: '🗓️', params: [cls, { key: 'sat', label: 'どようび', opts: [['off', 'なし'], ['on', 'あり']], def: 'off' }] },
        { id: 'health', name: 'けんこう かんさつ ひょう', icon: '🩺', params: [cls, { key: 'm', label: 'つき', opts: [['this', 'こんげつ'], ['prev', 'せんげつ']], def: 'this' }] }
      ];
    },
    build(id, params) { return Promise.resolve({ pages: buildPages(id, params), css: document.querySelector('style').textContent }); }
  };

  /* ============================================================
     先生用せってい
     ============================================================ */
  APP.renderSettings = function (add, st, vp, pidSel) {
    add(h('h3', null, '🔊 すすめかた'),
      chk('ひかって いる セリフを じどうで よみあげる', 'readAloud', 'ことばが でにくい にっちょくの とき。オフでも 🔊 で よめます'),
      h('div', { class: 'btns' }, h('button', { type: 'button', class: 'btn primary', onclick: () => { closeSettings(); renderSetup(); } }, '🛠️ じゅんび（なかま・じかんわり）を ひらく')));
    add(h('h3', null, '🩺 けんこう かんさつの きろく'), pidSel());
    const keys = Object.keys(vp.health).sort().reverse().slice(0, 10);
    add(keys.length ? h('table', { class: 'rec-table' }, h('tr', null, ['日付', 'げんき', 'すこし', 'わるい', 'やすみ'].map(x => h('th', null, x))),
      keys.map(k => { const v = Object.values(vp.health[k]); return h('tr', null, h('td', null, k.slice(5).replace('-', '/')), [0, 1, 2, 3].map(i => h('td', null, String(v.filter(x => x === i).length)))); })) : h('p', { class: 'note' }, 'まだ きろくが ありません。'),
      h('p', { class: 'note' }, '1かげつぶんの ひょうは 🖨️ プリントの「けんこう かんさつ ひょう」で。'));
  };
  if (TEST) window.__an = { store: () => store, startRun, R: () => R, persist, renderSetup, renderHome };
  startApp();
  cleanMedia();
