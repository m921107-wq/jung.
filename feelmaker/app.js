'use strict';
/* ---------- data ---------- */
const CATS = {
  wedding: { name: '웨딩영상', sub: { 1: '식전영상', 2: '식중영상' }, desc: '결혼식의 시작과 중간을 채우는 감성 영상' },
  growth: { name: '성장영상', sub: { 6: '성장영상', 7: '감사영상' }, desc: '아이가 자라는 순간을 담는 성장·돌잔치 영상' },
  thanks: { name: '감사영상', sub: { 7: '부모님감사', 9: '고희/회갑' }, desc: '소중한 분께 마음을 전하는 감사 영상' },
  letter: { name: '영상편지', sub: { 3: '영상편지', 4: '프로포즈' }, desc: '말로 다 못한 마음을 영상으로' },
  event: { name: '행사영상', sub: { 16: '생일영상' }, desc: '생일, 기념일, 각종 행사에 어울리는 영상' },
  opening: { name: '오프닝영상', sub: { 18: '결혼식 오프닝', 19: '행사 오프닝' }, desc: '본식 시작을 여는 오프닝 영상' }
};
const GRAD = [
  'linear-gradient(135deg,#ffe9e0,#ffc9b9)', 'linear-gradient(135deg,#e3f0ff,#bcd8ff)',
  'linear-gradient(135deg,#fff3c7,#ffd98a)', 'linear-gradient(135deg,#e6f7e6,#bfe8c3)',
  'linear-gradient(135deg,#f1e6ff,#d7bcff)', 'linear-gradient(135deg,#ffe3ef,#ffbad6)',
  'linear-gradient(135deg,#e0f7f7,#b2e8e8)', 'linear-gradient(135deg,#efe9e1,#d9ccbc)'
];
const P = (id, cat, sub, name, em, price, orig, tag, mins, desc) => ({ id, cat, sub, name, em, price, orig, tag, mins, desc, g: GRAD[id % GRAD.length], sales: 1000 - id * 13 + (id * 37) % 90 });
const PRODUCTS = [
  P(1, 'wedding', 1, 'The Beginning : 행복한 날', '💌', 19900, 29900, 'BEST', 4, '봉투에서 사진이 펼쳐지는 클래식 식전영상 템플릿'),
  P(2, 'wedding', 1, 'My Romance : 나의 로맨스', '💑', 22900, 32900, 'NEW', 5, '영화 포스터처럼 우리의 이야기를 소개하는 식전영상'),
  P(3, 'wedding', 1, 'Moving Poster : 순간', '🖼️', 24900, 34900, 'NEW', 4, '움직이는 포스터 속에 사진을 담는 반복 재생 영상'),
  P(4, 'wedding', 1, 'Forever Us : 우리', '💍', 21900, 31900, '', 5, '잔잔한 음악과 함께 흐르는 슬라이드 식전영상'),
  P(5, 'wedding', 2, 'Our Story : 연애 스토리', '🎞️', 25900, 35900, 'BEST', 6, '만남부터 프러포즈까지 타임라인으로 보여주는 식중영상'),
  P(6, 'wedding', 2, 'Marriage : 청혼', '🕊️', 23900, 33900, '', 5, '흑백 필름 감성의 식중영상'),
  P(7, 'wedding', 2, 'Gift : 선물', '🎁', 19900, 27900, '', 4, '하객께 전하는 감사 메시지 영상'),
  P(8, 'growth', 6, 'A Growth Diary : 몽글 송', '🧸', 18900, 27900, 'BEST', 4, '태어난 날부터 첫 돌까지 성장 일기를 담는 영상'),
  P(9, 'growth', 6, 'Baby Movie : 첫 돌', '🎂', 19900, 28900, 'NEW', 5, '돌잔치 입구에서 틀기 좋은 성장 영상'),
  P(10, 'growth', 6, '오마이 베이비', '👶', 17900, 25900, '', 4, '스크랩북 스타일의 귀여운 100일 영상'),
  P(11, 'growth', 6, 'Milky Way : 우주선', '🚀', 18900, 26900, '', 4, '픽셀 아트 감성의 레트로 성장 영상'),
  P(12, 'thanks', 7, 'Hanelbaragi : 하늘바라기', '🎹', 15900, 22900, 'BEST', 4, '부모님께 마음을 전하는 피아노 감성 영상'),
  P(13, 'thanks', 7, 'Thank You Mom & Dad', '💐', 14900, 21900, '', 3, '결혼식 중 부모님께 드리는 감사 영상'),
  P(14, 'thanks', 9, '고희연 : 꽃길', '🌸', 16900, 24900, '', 5, '칠순·팔순 잔치를 위한 인생 회고 영상'),
  P(15, 'thanks', 9, '회갑연 : 새로운 시작', '🎊', 16900, 24900, '', 5, '환갑 기념 사진 슬라이드 영상'),
  P(16, 'letter', 3, 'Dear. : 마음 편지', '✉️', 13900, 19900, 'NEW', 3, '손편지 질감의 영상 편지 템플릿'),
  P(17, 'letter', 4, 'Will You Marry Me', '💎', 15900, 22900, 'BEST', 3, '프로포즈 이벤트용 서프라이즈 영상'),
  P(18, 'letter', 3, '친구에게 : 오래된 우정', '📮', 12900, 18900, '', 3, '친구의 결혼을 축하하는 영상 편지'),
  P(19, 'event', 16, 'Happy Birthday : 생일 축하', '🎈', 11900, 16900, '', 3, '생일 파티 분위기를 살리는 축하 영상'),
  P(20, 'event', 16, 'Anniversary : 기념일', '🥂', 12900, 18900, '', 3, '연인·부부 기념일 영상'),
  P(21, 'opening', 18, 'Opening 01 : 입장', '🎬', 14900, 20900, 'BEST', 2, '신랑신부 입장 전 분위기를 여는 오프닝'),
  P(22, 'opening', 18, 'Opening 02 : OS ver', '🎵', 14900, 20900, '', 2, '음악 중심의 간결한 오프닝'),
  P(23, 'opening', 19, '행사 오프닝 : 스포트라이트', '✨', 13900, 19900, 'NEW', 2, '돌잔치·기념행사 오프닝 영상'),
  P(24, 'opening', 19, '성장 오프닝 : 몽글', '🌈', 13900, 19900, '', 2, '아이의 입장을 소개하는 성장 오프닝')
];
const SLIDES = [
  { eyebrow: 'AI 애니메이션 BETA', title: '추억 한 장,<br>우리만의 애니메이션 영상', g: 'linear-gradient(160deg,#7a5230,#d89a5b)', em: '📖', href: '#/list?cat=wedding' },
  { eyebrow: 'New Wedding Movie', title: '새로운 식전영상이<br>도착했어요!', g: 'linear-gradient(160deg,#f5efe3,#e6d8c0)', em: '💌', light: 1, href: '#/product/3' },
  { eyebrow: 'Baby Movie', title: '아이가 자라는 순간을<br>영상으로 만들어보세요.', g: 'linear-gradient(160deg,#fbeede,#f6d8b3)', em: '👶', light: 1, href: '#/list?cat=growth' },
  { eyebrow: 'Group Buying', title: '같이 살수록 혜택이 커지는<br>공동구매', g: 'linear-gradient(160deg,#58652f,#8a9b4a)', em: '🎟️', href: '#/group' },
  { eyebrow: 'Free Mobile Invitation', title: '어떤 스킨을 골라도<br>모바일청첩장은 무료', g: 'linear-gradient(160deg,#dfe8ff,#b9ccff)', em: '📱', light: 1, href: '#/invitation' },
  { eyebrow: 'AI BGM', title: '내 영상에 딱 맞는<br>BGM을 만들어보세요', g: 'linear-gradient(160deg,#1c1c28,#3a3a58)', em: '🎧', href: '#/list' }
];
const REVIEWS = [
  ['급하게 알아보고 했는데...', '급하게 알아보고 했는데 처음엔 버벅였지만 금방 완성했어요.', '2026-11-19', 11, 3],
  ['돌잔치 영상 셀프로...', '돌잔치 영상 셀프로 만들었는데, 만족스럽게 나왔어요!', '2026-11-19', 9, 1],
  ['급하게 필요했는데...', '급하게 필요했는데 퀄리티가 좋았습니다. 추천해요.', '2026-11-19', 10, 5],
  ['결혼 준비 하면서...', '결혼 준비 하면서 식전영상이 제일 만족스러웠어요.', '2026-11-19', 1, 1],
  ['아빠 이집 사진 보정...', '아빠 이집 사진 보정 맛있네여 강추합니다.', '2026-11-18', 4, 2],
  ['둘째 돌잔치 준비하면서...', '둘째 돌잔치 준비하면서 가족끼리 즐겁게 만들었어요.', '2026-11-18', 8, 0]
];
const NOTICES = [
  '[업데이트 안내] 더 쉽고, 더 한결같은 영상 제작 도구가 개선되었습니다',
  '[안내] 모바일 청첩장 축의금 결제 서비스 종료 안내',
  '[휴무] 연휴 고객센터 휴무 안내'
];
const GROUPS = [
  { id: 1, pid: 1, now: 7, goal: 10, left: '23:41:08' },
  { id: 2, pid: 8, now: 3, goal: 5, left: '40:12:55' },
  { id: 3, pid: 21, now: 12, goal: 15, left: '11:05:30' },
  { id: 4, pid: 12, now: 4, goal: 10, left: '46:30:02' },
  { id: 5, pid: 5, now: 9, goal: 10, left: '05:58:17' },
  { id: 6, pid: 17, now: 2, goal: 5, left: '47:20:44' }
];

/* ---------- utils ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const won = n => n.toLocaleString('ko-KR') + '원';
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rate = p => Math.round((1 - p.price / p.orig) * 100);
const pById = id => PRODUCTS.find(p => p.id === +id);
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } }
};
let cart = store.get('sm_cart', []);
let user = store.get('sm_user', null);
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2200); }

/* ---------- partials ---------- */
function card(p, opts = {}) {
  return `<a class="card" href="#/product/${p.id}">
    <div class="thumb" style="background:${p.g}">
      ${p.tag ? `<span class="tag">${p.tag}</span>` : ''}
      <span class="em">${p.em}</span>
      <span class="ttl">${esc(CATS[p.cat].name)} · ${p.mins}분 제작</span>
      <span class="play">▶</span>
    </div>
    <h4>${esc(p.name)}</h4>
    ${opts.noprice ? '' : `<div class="price"><span class="rate">${rate(p)}%</span><b>${won(p.price)}</b><s>${won(p.orig)}</s></div>`}
  </a>`;
}

function renderNav() {
  const hash = location.hash || '#/';
  const items = [
    ['#/list?cat=ai', '✦ Feel.AI', 'ai'], ['#/list?cat=wedding', '웨딩영상'], ['#/list?cat=growth', '성장영상'],
    ['#/list?cat=thanks', '감사영상'], ['#/list?cat=letter', '영상편지'], ['#/list?cat=event', '행사영상'],
    ['#/group', '공동구매', '', '<span class="badge">할인</span>'], ['#/retouch', '사진보정', '', '<span class="badge y">무제한</span>'],
    ['#/invitation', '커뮤니티']
  ];
  $('#gnb').innerHTML = items.map(([h, t, c = '', b = '']) =>
    `<a href="${h}" class="${c} ${hash.startsWith(h) && h !== '#/' ? 'on' : ''}">${t}${b}</a>`).join('');
}

function renderFooter() {
  $('#ft').innerHTML = `
  <div class="notice"><div class="notice-in"><b>NOTICE</b><span id="ntc">${esc(NOTICES[0])}</span><a href="#/">구매꿀팁 +</a><a href="#/">제작꿀팁 +</a></div></div>
  <div class="cs"><div class="cs-in">
    <div class="cs-tel"><small>고객상담</small><b class="en">1234-5678</b></div>
    <div class="cs-time">평일 AM 10:30 - PM 07:00<br>점심시간 PM 12:00 - PM 01:00<br>주말(토,일) 및 공휴일은 휴무입니다.</div>
    <div class="cs-btns"><a href="#/">자주묻는 질문 <span>▸</span></a><a href="#/">제휴문의 <span>▸</span></a><a href="#/">문의하기 <span>▸</span></a><a href="#/">카카오 문의 <span>▸</span></a></div>
  </div></div>
  <div class="ft-in">
    <div class="ft-logo">STORYMAKER</div>
    <div>상호 : (가칭) 스토리메이커 &nbsp;|&nbsp; 대표자 : 홍길동 &nbsp;|&nbsp; 전화 : 1234-5678 &nbsp;|&nbsp; 이메일 : hello@example.com</div>
    <div>주소 : 서울특별시 예시구 예시로 123 &nbsp;|&nbsp; 사업자등록번호 : 000-00-00000 &nbsp;|&nbsp; 통신판매업신고 : 제0000-서울예시-0000호</div>
    <div><a href="#/">개인정보처리방침</a> &nbsp; <a href="#/">이용약관</a></div>
    <div>COPYRIGHT(C) STORYMAKER. ALL RIGHTS RESERVED</div>
    <div class="demo">※ 이 사이트는 레이아웃 학습용 데모입니다. 표시된 상호·연락처·사업자 정보는 모두 예시이며, 실제 결제는 이루어지지 않습니다.</div>
  </div>`;
  let i = 0; setInterval(() => { const n = $('#ntc'); if (n) n.textContent = NOTICES[++i % NOTICES.length]; }, 4000);
}

/* ---------- pages ---------- */
function pageHome() {
  const best = PRODUCTS.filter(p => p.tag === 'BEST' || p.id % 5 === 0);
  const slides = SLIDES.map((s, i) => `<div class="slide ${s.light ? 'light' : ''}" style="background:${s.g}" data-href="${s.href}" data-i="${i}">
      <div class="art">${s.em}</div><div class="eyebrow">${s.eyebrow}</div><h3>${s.title}</h3></div>`).join('');
  const chips = [['✨', 'Feel.AI', '#/list?cat=ai'], ['💍', '웨딩식전영상', '#/list?cat=wedding'], ['🧸', '성장동영상', '#/list?cat=growth'], ['🎬', '오프닝영상', '#/list?cat=opening'],
    ['✉️', '영상편지', '#/list?cat=letter'], ['💐', '감사영상', '#/list?cat=thanks'], ['👥', '공동구매 할인', '#/group'], ['📱', '무료 모바일초대장', '#/invitation'],
    ['🏷️', '기획전 70%', '#/list?sale=1'], ['🎁', '회원가입 혜택', '#join']];
  const cust = [['HAN L*', 8], ['임샛*', 2], ['김민*', 3], ['김영*', 4], ['강지*', 7], ['한슬*', 1], ['이윤*', 12], ['신수*', 6]];
  return `
  <section class="hero"><div class="hero-track" id="track">${slides}</div>
    <div class="hero-ctl"><div class="bar"><i id="bar"></i></div>
      <div class="pager"><button id="prev" aria-label="이전">‹</button><span><b id="cur">1</b> / ${SLIDES.length}</span><button id="next" aria-label="다음">›</button><button id="pause" aria-label="일시정지">❚❚</button></div></div>
  </section>
  <div class="chips">${chips.map(([e, t, h]) => `<a class="chip" href="${h}"><em>${e}</em>${t}</a>`).join('')}</div>

  <section class="sec"><div class="sec-hd"><h2>BEST VIDEO</h2><p>스토리메이커의 가장 <span class="mk">인기 있는</span> 동영상을 확인하세요!</p></div>
    <div class="tabs" id="bestTabs">${[['all', '인기영상'], ['wedding', '웨딩영상'], ['growth', '성장영상'], ['opening', '오프닝영상'], ['letter', '영상편지'], ['thanks', '감사영상']].map(([k, t], i) => `<button data-k="${k}" class="${i ? '' : 'on'}">${t}</button>`).join('')}</div>
    <div class="grid" id="bestGrid"></div></section>

  <div class="bg2"><section class="sec"><div class="sec-hd"><h2>CUSTOMER MAKE MOVIE</h2><p>고객님께서 <span class="mk">직접제작한</span> 영상</p><p style="color:#999;font-size:12px">고객님의 동의하에 노출됩니다. (예시 데이터)</p></div>
    <div class="cust">${cust.map(([n, id]) => { const p = pById(id); return `<div class="cust-card"><div class="thumb" style="background:${p.g}"><span class="em">${p.em}</span></div>
      <p>${n} 고객님이 제작하신 "${esc(p.name)}" 상품입니다.</p><div class="row"><button class="btn sm" data-toast="미리보기는 데모에서 제공되지 않습니다">영상바로보기</button><a class="btn sm dark" href="#/product/${p.id}">상품바로가기</a></div></div>`; }).join('')}</div></section></div>

  <div class="cta-join" id="ctaJoin"><h3>아직 회원이 아니신가요?</h3><p>회원가입 하시고 쉽고 빠른 영상 제작 하세요!</p><div class="row"><button class="btn" data-auth="login">LOGIN</button><button class="btn dark" data-auth="join">JOIN</button></div></div>

  <section class="sec"><div class="mix"><div><div class="en">Video Mix</div><h2>두 개의 영상을<br>하나의 영상으로</h2>
    <p>파일 업로드만 하면 자동으로 완성돼요.<br>오직 회원님만 무료로 이용하실 수 있어요.</p><button class="btn dark sm" data-toast="회원 전용 기능입니다. 로그인 후 이용해 보세요">자세히 보기</button>
    <div class="stats"><div><b>무료</b><span>회원 전용</span></div><div><b class="en">3</b><span>업로드</span></div><div><b>자동</b><span>편집·합치기</span></div></div></div>
    <div class="mix-stage"><div class="pane" style="background:linear-gradient(135deg,#f3e5d3,#e0c9ac)">📸<small>인트로 영상</small><div class="prog"><i></i></div></div>
      <div class="pane" style="background:linear-gradient(135deg,#f1e8e8,#ddc7c7)">💒<small>식전영상.mp4</small></div>
      <div class="done"><i>✓</i><b>합치기 완료!</b><span>하나의 영상으로 완성됐어요</span></div>
      <div class="steps"><span class="on"><b>1</b>영상 업로드</span><span>→</span><span class="on"><b>2</b>자동 합치기</span><span>→</span><span class="on"><b>3</b>완성</span></div></div></div></section>

  <div class="how"><div class="how-in"><h3><small>어떻게 제작하나요?</small>정말 쉽고 빠른 제작방법 안내<span class="play-btn">▶</span></h3><div class="art">💻</div></div></div>

  <section class="sec"><div class="sec-hd"><h2>REVIEW</h2><p>고객님들께서 작성해주신 총 <span class="mk">27,324</span>개의 소중한 후기입니다. (예시)</p></div>
    <div class="rv">${REVIEWS.map(([t, d, dt, id]) => { const p = pById(id); return `<a class="rv-item" href="#/product/${p.id}"><div class="circ" style="background:${p.g}">${p.em}</div><div class="stars">★★★★★</div><h5>${esc(t)}</h5><p>${esc(d)}</p><time>${dt}</time></a>`; }).join('')}</div>
    <div class="more"><a class="btn dark" href="#/list">MORE →</a></div></section>

  <div class="bg2"><section class="sec"><div class="sec-hd"><h2>EVENT</h2><p>스토리메이커에서만 진행하는 특별이벤트</p></div>
    <div class="ev">
      <a href="#/list"><div class="thumb" style="background:linear-gradient(135deg,#ffd4cc,#ffb0a4)"><div class="ct">후기남기고<big>현금 캐시백</big>받으세요!</div></div><h4>후기 이벤트</h4><p>후기 작성하고 캐시백 받자</p><span class="view">VIEW ›</span></a>
      <a href="#/group"><div class="thumb" style="background:#e4f6a6"><div class="ct">5명 모이면<big>5,000원 할인</big></div></div><h4>공동구매</h4><p>같이 살수록 혜택이 커져요!</p><span class="view">VIEW ›</span></a>
      <a href="#/list"><div class="thumb" style="background:linear-gradient(135deg,#f9b8b8 45%,#363a52 45%);color:#fff"><div class="ct">영상이 급하다면?<big>제작대행</big>25,000원 특가!</div></div><h4>제작대행 서비스</h4><p>25,000원 특가 이벤트</p><span class="view">VIEW ›</span></a>
      <a href="#/invitation"><div class="thumb" style="background:#eceae4"><div class="ct" style="color:#4aa3ff"><big>SALE COUPON</big><span style="color:#555;font-weight:400;font-size:13px">조건없는 모바일 청첩장 할인쿠폰</span></div></div><h4>모바일 청첩장 할인</h4><p>조건없는 할인 쿠폰 받아가세요!</p><span class="view">VIEW ›</span></a>
    </div></section></div>`;
}

function pageList(q) {
  const params = new URLSearchParams(q);
  const cat = params.get('cat'), sub = params.get('sub'), kw = (params.get('q') || '').trim(), sale = params.get('sale');
  const sort = params.get('sort') || 'pop';
  let items = PRODUCTS.slice();
  if (cat && CATS[cat]) items = items.filter(p => p.cat === cat);
  if (cat === 'ai') items = PRODUCTS.filter(p => p.tag === 'NEW');
  if (sub) items = items.filter(p => p.sub === +sub);
  if (kw) items = items.filter(p => (p.name + CATS[p.cat].name + p.desc).toLowerCase().includes(kw.toLowerCase()));
  if (sale) items = items.filter(p => rate(p) >= 30);
  if (sort === 'low') items.sort((a, b) => a.price - b.price);
  else if (sort === 'high') items.sort((a, b) => b.price - a.price);
  else if (sort === 'new') items.sort((a, b) => b.id - a.id);
  else items.sort((a, b) => b.sales - a.sales);
  const c = CATS[cat];
  const title = kw ? `'${esc(kw)}' 검색 결과` : cat === 'ai' ? 'Feel.AI' : c ? c.name : sale ? '기획전 70%' : '전체 영상';
  const base = (o) => { const n = new URLSearchParams(params); Object.entries(o).forEach(([k, v]) => v == null ? n.delete(k) : n.set(k, v)); return '#/list?' + n; };
  const tabs = c ? `<div class="tabs"><button data-go="${base({ sub: null })}" class="${sub ? '' : 'on'}">전체</button>${Object.entries(c.sub).map(([k, v]) => `<button data-go="${base({ sub: k })}" class="${sub === k ? 'on' : ''}">${v}</button>`).join('')}</div>` : '';
  return `<div class="page"><div class="crumb"><a href="#/">홈</a> › ${title}</div><h1>${title}</h1><p class="desc">${c ? c.desc : '템플릿을 골라 사진과 문구만 넣으면 영상이 완성돼요.'}</p>${tabs}
    <div class="bar2"><span>총 <b>${items.length}</b>개</span><select id="sort" aria-label="정렬">${[['pop', '인기순'], ['new', '최신순'], ['low', '낮은 가격순'], ['high', '높은 가격순']].map(([k, t]) => `<option value="${k}" ${sort === k ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
    ${items.length ? `<div class="grid">${items.map(p => card(p)).join('')}</div>` : '<div class="empty">조건에 맞는 상품이 없어요.</div>'}</div>`;
}

function pageProduct(id) {
  const p = pById(id);
  if (!p) return '<div class="page"><div class="empty">상품을 찾을 수 없어요.</div></div>';
  const rel = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  return `<div class="page"><div class="crumb"><a href="#/">홈</a> › <a href="#/list?cat=${p.cat}">${CATS[p.cat].name}</a> › ${esc(p.name)}</div>
  <div class="dt"><div class="thumb" style="background:${p.g}"><span class="em">${p.em}</span><span class="ttl" style="font-size:14px">PREVIEW (데모)</span></div>
    <div><span class="en" style="color:var(--pt);font-weight:600">${esc(CATS[p.cat].name)}</span><h1>${esc(p.name)}</h1><p style="color:var(--sub);font-size:14px">${esc(p.desc)}</p>
    <div class="price" style="margin-top:18px"><span class="rate">${rate(p)}%</span><b>${won(p.price)}</b><s>${won(p.orig)}</s></div>
    <div class="opt" id="opt"><button class="on" data-add="0">기본형</button><button data-add="5000">+ 사진 20장 추가</button><button data-add="9000">+ 자막/음악 변경</button></div>
    <ul class="spec"><li><span>제작시간</span>약 ${p.mins}분 (셀프제작)</li><li><span>영상길이</span>${p.mins}분 내외</li><li><span>해상도</span>Full HD (1080p)</li><li><span>수정</span>제작 후 7일간 무제한</li></ul>
    <div class="acts"><button class="btn" id="btnCart2">장바구니</button><button class="btn dark" id="btnBuy">바로 제작하기</button></div></div></div>
  <div class="flow"><div><em>🖼️</em><b>1. 사진 업로드</b><span>사진과 문구를 입력해요</span></div><div><em>🎨</em><b>2. 템플릿 적용</b><span>자동으로 영상이 구성돼요</span></div><div><em>👀</em><b>3. 미리보기</b><span>수정하며 확인해요</span></div><div><em>⬇️</em><b>4. 다운로드</b><span>완성 영상을 저장해요</span></div></div>
  <div class="sec-hd" style="margin:70px 0 26px"><h2>RELATED</h2><p>함께 보면 좋은 영상</p></div><div class="grid">${rel.map(x => card(x)).join('')}</div></div>`;
}

function pageGroup() {
  return `<div class="page"><div class="gb-hero"><div><span class="en" style="font-weight:600">Group Buying</span><h1>같이 살수록<br>혜택이 커지는 공동구매</h1><p style="color:#444">참여 인원이 모일수록 할인 폭이 커져요. (데모 화면)</p>
    <div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap"><button class="btn dark" data-toast="공구 열기는 데모에서 제공되지 않습니다">공구 열기</button><button class="btn" data-toast="보유한 쿠폰이 없어요">내 공구 쿠폰</button></div></div>
    <div class="coupons"><div class="cp a"><div><small>5명 모이면</small><b>5,000원 할인</b></div><i>MAKER</i></div><div class="cp b"><div><small>48시간 안에 10명</small><b>5,000원 추가</b></div><i>MAKER</i></div><div class="cp c"><div><small>15명 이상 모이면</small><b>오프닝영상 무료</b></div><i>MAKER</i></div></div></div>
    <h2 style="margin-bottom:20px">진행 중인 공구</h2><div class="gb-list">${GROUPS.map(g => { const p = pById(g.pid); const pc = Math.min(100, Math.round(g.now / g.goal * 100));
    return `<div class="gb"><div class="thumb" style="background:${p.g}"><span class="em">${p.em}</span></div><h4>${esc(p.name)}</h4><div class="price"><span class="rate">${rate(p)}%</span><b>${won(p.price)}</b></div>
      <div class="meter"><i style="width:${pc}%"></i></div><div class="row"><span>${g.now}/${g.goal}명 참여</span><span>⏱ 남은시간 ${g.left}</span></div><button class="btn dark block" data-join="${g.id}">공구 참여하기</button></div>`; }).join('')}</div></div>`;
}

function pageInfo(kind) {
  const d = {
    invitation: ['📱', '무료 모바일 초대장', '어떤 스킨을 골라도 모바일청첩장은 무료예요.', ['스킨 30종 무료 제공', '지도·계좌·갤러리 지원', 'RSVP 참석 여부 수집']],
    retouch: ['🪄', '사진보정 무제한', '월 정액으로 무제한 사진 보정을 이용해 보세요.', ['피부·체형·배경 보정', '업로드 후 24시간 내 완료', '재보정 횟수 제한 없음']]
  }[kind];
  return `<div class="page" style="text-align:center;padding-top:90px"><div style="font-size:90px">${d[0]}</div><h1 style="margin-top:14px">${d[1]}</h1><p class="desc">${d[2]}</p>
  <ul style="list-style:none;display:inline-block;text-align:left;margin:10px 0 34px;line-height:2.2;font-size:15px">${d[3].map(t => `<li>✓ ${t}</li>`).join('')}</ul><div><button class="btn dark" data-toast="데모 화면입니다. 준비 중이에요!">지금 시작하기</button></div></div>`;
}

/* ---------- router ---------- */
let heroTimer;
function route() {
  clearInterval(heroTimer);
  const h = location.hash.slice(1) || '/';
  const [path, q = ''] = h.split('?');
  const app = $('#app');
  let html;
  if (path === '/' ) html = pageHome();
  else if (path === '/list') html = pageList(q);
  else if (path.startsWith('/product/')) html = pageProduct(path.split('/')[2]);
  else if (path === '/group') html = pageGroup();
  else if (path === '/invitation') html = pageInfo('invitation');
  else if (path === '/retouch') html = pageInfo('retouch');
  else html = pageHome();
  app.innerHTML = html;
  renderNav(); $('#gnb').classList.remove('open');
  window.scrollTo(0, 0);
  if (path === '/') initHome();
  if (path.startsWith('/product/')) initProduct(path.split('/')[2]);
  if (path === '/list') $('#sort')?.addEventListener('change', e => { const n = new URLSearchParams(q); n.set('sort', e.target.value); location.hash = '#/list?' + n; });
}

function initHome() {
  const tr = $('#track'), n = SLIDES.length; let i = 0, paused = false, t0 = performance.now();
  const DUR = 5000;
  const go = k => {
    i = (k + n) % n; const s = tr.children[i];
    const left = parseFloat(getComputedStyle(tr).paddingLeft);
    tr.style.transform = `translateX(${-(s.offsetLeft - left)}px)`;
    $('#cur').textContent = i + 1; t0 = performance.now();
  };
  $('#prev').onclick = () => go(i - 1); $('#next').onclick = () => go(i + 1);
  $('#pause').onclick = e => { paused = !paused; e.currentTarget.textContent = paused ? '▶' : '❚❚'; t0 = performance.now(); };
  $$('.slide', tr).forEach(s => s.onclick = () => { location.hash = s.dataset.href; });
  heroTimer = setInterval(() => {
    const p = paused ? 0 : (performance.now() - t0) / DUR;
    $('#bar').style.width = (((i + Math.min(p, 1)) / n) * 100) + '%';
    if (!paused && p >= 1) go(i + 1);
  }, 60);
  const renderBest = k => { $('#bestGrid').innerHTML = PRODUCTS.filter(p => k === 'all' ? (p.tag === 'BEST' || p.id % 5 === 0) : p.cat === k).slice(0, 8).map(p => card(p)).join(''); };
  renderBest('all');
  $('#bestTabs').onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('#bestTabs button').forEach(x => x.classList.toggle('on', x === b)); renderBest(b.dataset.k); };
  if (user) $('#ctaJoin').hidden = true;
}

function initProduct(id) {
  const p = pById(id); let extra = 0;
  $('#opt').onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('#opt button').forEach(x => x.classList.toggle('on', x === b)); extra = +b.dataset.add; };
  const add = () => { addCart(p, extra); };
  $('#btnCart2').onclick = add;
  $('#btnBuy').onclick = () => { add(); openCart(); };
}

/* ---------- cart ---------- */
function addCart(p, extra = 0) {
  const key = p.id + ':' + extra;
  if (cart.some(c => c.key === key)) { toast('이미 장바구니에 담긴 상품이에요'); return; }
  cart.push({ key, id: p.id, extra }); store.set('sm_cart', cart); updateCart(); toast('장바구니에 담았어요');
}
function updateCart() {
  const c = $('#cartCnt'); c.hidden = !cart.length; c.textContent = cart.length;
  $('#cartBody').innerHTML = cart.length ? cart.map(it => { const p = pById(it.id);
    return `<div class="ci"><div class="thumb" style="background:${p.g}"><span class="em">${p.em}</span></div><div><b>${esc(p.name)}</b>${it.extra ? `옵션 +${won(it.extra)}<br>` : ''}${won(p.price + it.extra)}</div><button data-rm="${it.key}">삭제</button></div>`; }).join('')
    : '<div class="empty" style="padding:60px 0">장바구니가 비어 있어요.</div>';
  $('#cartSum').textContent = won(cart.reduce((s, it) => s + pById(it.id).price + it.extra, 0));
}
const dim = $('#dim');
function openLayer(el) { el.hidden = false; dim.hidden = el.classList.contains('modal'); if (el.classList.contains('drawer')) dim.hidden = false; }
function closeAll() { $$('.drawer,.modal').forEach(e => e.hidden = true); dim.hidden = true; }
function openCart() { updateCart(); openLayer($('#cartDrawer')); }
function openAuth(tab) { setTab(tab); openLayer($('#authModal')); $('#authForm input')?.focus(); }
function setTab(tab) {
  $$('.tabs2 button').forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
  $$('.joinOnly').forEach(e => e.hidden = tab !== 'join');
  $('#authForm .btn').textContent = tab === 'join' ? '가입하기' : '로그인';
  $('#authForm').dataset.mode = tab;
}

/* ---------- global events ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const toastEl = t.closest('[data-toast]'); if (toastEl) { toast(toastEl.dataset.toast); return; }
  const go = t.closest('[data-go]'); if (go) { location.hash = go.dataset.go; return; }
  const au = t.closest('[data-auth]'); if (au) { openAuth(au.dataset.auth); return; }
  const rm = t.closest('[data-rm]'); if (rm) { cart = cart.filter(c => c.key !== rm.dataset.rm); store.set('sm_cart', cart); updateCart(); return; }
  const jn = t.closest('[data-join]'); if (jn) { toast('공구에 참여했어요! (데모)'); return; }
  if (t.closest('[data-close]') || t === dim || t.classList.contains('modal')) { closeAll(); return; }
  if (t.closest('a[href="#join"]')) { e.preventDefault(); openAuth('join'); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
$('#btnCart').onclick = openCart;
$('#btnUser').onclick = () => user ? (user = null, store.set('sm_user', null), toast('로그아웃 되었어요')) : openAuth('login');
$('#btnSearch').onclick = () => { openLayer($('#searchModal')); $('#searchInput').focus(); };
$('#btnMenu').onclick = () => $('#gnb').classList.toggle('open');
$('#btnCheckout').onclick = () => { if (!cart.length) return toast('장바구니가 비어 있어요'); if (!user) { closeAll(); openAuth('login'); return toast('로그인이 필요해요'); } cart = []; store.set('sm_cart', cart); updateCart(); closeAll(); toast('주문이 접수되었어요 (데모)'); };
$('.tabs2').onclick = e => { const b = e.target.closest('button'); if (b) setTab(b.dataset.tab); };
$('#authForm').onsubmit = e => { e.preventDefault(); const em = $('#authForm input[type=email]').value; user = { email: em }; store.set('sm_user', user); closeAll(); toast(($('#authForm').dataset.mode === 'join' ? '가입' : '로그인') + '되었어요'); if (location.hash.length < 3) route(); };
$('#searchForm').onsubmit = e => { e.preventDefault(); const v = $('#searchInput').value.trim(); closeAll(); location.hash = '#/list?q=' + encodeURIComponent(v); };
$('#searchModal').onclick = e => { if (e.target.closest('.kw a')) closeAll(); };
window.addEventListener('hashchange', () => { if (location.hash !== '#join') route(); });

renderFooter(); updateCart(); route();
