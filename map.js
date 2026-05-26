const PALACES = [
    { id: 1, name: '경복궁', nameEn: 'Gyeongbokgung',  lat: 37.5796, lng: 126.9770, address: '서울 종로구 사직로 161',   color: '#C0392B', emoji: '🐉', wikiTitle: 'Gyeongbokgung', photo: '' },
    { id: 2, name: '창덕궁', nameEn: 'Changdeokgung',   lat: 37.5793, lng: 126.9910, address: '서울 종로구 율곡로 99',    color: '#27AE60', emoji: '🪷', wikiTitle: 'Changdeokgung', photo: '' },
    { id: 3, name: '창경궁', nameEn: 'Changgyeonggung', lat: 37.5793, lng: 126.9946, address: '서울 종로구 창경궁로 185', color: '#2980B9', emoji: '🦢', wikiTitle: 'Changgyeonggung', photo: '' },
    { id: 4, name: '덕수궁', nameEn: 'Deoksugung',      lat: 37.5657, lng: 126.9752, address: '서울 중구 세종대로 99',    color: '#E67E22', emoji: '🌹', wikiTitle: 'Deoksugung', photo: '' },
    { id: 5, name: '종묘',   nameEn: 'Jongmyo',          lat: 37.5750, lng: 126.9940, address: '서울 종로구 종로 157',    color: '#8E44AD', emoji: '🥁', wikiTitle: 'Jongmyo_Shrine', photo: '' },
];

/* 각 궁궐 핵심 공간 정보 (API 실패 시 사용) */
const MUSEUMS = [
    { id: 'm1', name: '국립중앙박물관',    nameEn: 'National Museum of Korea',              lat: 37.5228, lng: 126.9804, address: '서울 용산구 서빙고로 137',       color: '#2563EB', emoji: '🏺', wikiTitle: 'National_Museum_of_Korea',                        photo: '' },
    { id: 'm2', name: '국립민속박물관',    nameEn: 'National Folk Museum',                  lat: 37.5826, lng: 126.9786, address: '서울 종로구 삼청로 37',           color: '#059669', emoji: '🎎', wikiTitle: 'National_Folk_Museum_of_Korea',                    photo: '' },
    { id: 'm3', name: '서울역사박물관',    nameEn: 'Seoul Museum of History',               lat: 37.5717, lng: 126.9715, address: '서울 종로구 새문안로 55',         color: '#7C3AED', emoji: '🗺️', wikiTitle: 'Seoul_Museum_of_History',                          photo: '' },
    { id: 'm4', name: '국립현대미술관',    nameEn: 'MMCA Seoul',                            lat: 37.5790, lng: 126.9746, address: '서울 종로구 삼청로 30',           color: '#DC2626', emoji: '🎨', wikiTitle: 'National_Museum_of_Modern_and_Contemporary_Art',   photo: '' },
    { id: 'm5', name: '전쟁기념관',        nameEn: 'War Memorial of Korea',                 lat: 37.5361, lng: 126.9771, address: '서울 용산구 이태원로 29',         color: '#374151', emoji: '🪖', wikiTitle: 'War_Memorial_of_Korea',                           photo: '' },
    { id: 'm6', name: '리움미술관',        nameEn: 'Leeum Museum of Art',                   lat: 37.5389, lng: 126.9979, address: '서울 용산구 이태원로55길 60-16', color: '#D97706', emoji: '🖼️', wikiTitle: 'Leeum_Museum_of_Art',                              photo: '' },
    { id: 'm7', name: '서울시립미술관',    nameEn: 'Seoul Museum of Art',                   lat: 37.5648, lng: 126.9749, address: '서울 중구 덕수궁길 61',           color: '#0891B2', emoji: '🖌️', wikiTitle: 'Seoul_Museum_of_Art',                             photo: '' },
];

const MUSEUM_DATA = {
    m1: { contentsKor: '국립중앙박물관', explanationKor: '한국 최대 규모의 국립박물관. 선사시대부터 조선시대까지 30만여 점의 유물을 소장하며, 반가사유상실·야외 정원 등이 특히 유명하다. 용산 한강변에 위치해 접근성도 뛰어나다.', link: 'https://www.museum.go.kr' },
    m2: { contentsKor: '국립민속박물관', explanationKor: '경복궁 안에 자리한 한국 민속 전문 박물관. 의식주·세시풍속·통과의례 등 한국인의 생활문화를 체험형으로 소개하며, 어린이박물관과 야외 전시장도 운영한다.', link: 'https://www.nfm.go.kr' },
    m3: { contentsKor: '서울역사박물관', explanationKor: '조선 건국부터 현대까지 서울 600년 역사를 조명하는 박물관. 도성 모형·고지도·사진 등 2,000여 점의 유물이 전시되며, 인근 복원된 경희궁지도 함께 둘러볼 수 있다.', link: 'https://museum.seoul.go.kr' },
    m4: { contentsKor: '국립현대미술관 서울관', explanationKor: '경복궁 옆 북촌에 자리한 현대미술 전문 기관. 이중섭·박수근·김환기 등 한국 거장부터 국제 미디어아트까지 폭넓은 컬렉션을 선보인다.', link: 'https://www.mmca.go.kr' },
    m5: { contentsKor: '전쟁기념관', explanationKor: '한국의 군사 역사와 6·25전쟁을 기록·전시하는 기념관. 실제 전차·전투기가 전시된 야외 광장과 디오라마로 재현된 주요 전투 장면이 인상적이다.', link: 'https://www.warmemo.or.kr' },
    m6: { contentsKor: '리움미술관', explanationKor: '삼성문화재단이 운영하는 세계적 수준의 사립미술관. 마리오 보타·장 누벨·렘 콜하스가 설계한 세 개의 건물에 한국 고미술과 국제 현대미술을 나누어 전시한다.', link: 'https://www.leeum.org' },
    m7: { contentsKor: '서울시립미술관', explanationKor: '1928년 건립된 옛 대법원 건물을 리노베이션한 서울 대표 공립미술관. 국내외 현대미술 기획전과 백남준기념관, 덕수궁 돌담길과 이어지는 야외 조각공원을 운영한다.', link: 'https://sema.seoul.go.kr' },
};

const PALACE_DATA = {
    1: [
        {
            contentsKor: '근정전',
            explanationKor: '경복궁의 정전(正殿). 왕의 즉위식·외국 사신 접견 등 국가 주요 행사가 열린 공간으로, 현존하는 조선 궁궐 법전 중 규모가 가장 크다. 월대(月臺) 위에 이층 구조로 세워졌으며, 내부 천장에 조각된 두 마리의 칠조룡(七爪龍)이 왕권을 상징한다. 국보 제223호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '경회루',
            explanationKor: '나라에 경사가 있거나 외국 사신이 왔을 때 왕이 연회를 베풀던 누각. 넓은 연못 위에 세운 우리나라 최대의 누각으로, 48개의 돌기둥이 2층 누마루를 받친다. 조선 성리학의 우주관이 건축에 담겨 있다. 국보 제224호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '향원정',
            explanationKor: '고종 때 건청궁을 조성하면서 함께 만든 육각형 2층 정자. 향원지(香遠池) 연못 가운데 인공 섬에 세워졌으며, 취향교(醉香橋)라는 나무다리로 연결된다. 연꽃 향기가 멀리까지 퍼진다는 뜻을 이름에 담았다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '자경전',
            explanationKor: '흥선대원군이 고종의 양어머니 조대비를 위해 지은 왕대비 침전. 꽃과 동물 문양으로 장식된 아름다운 꽃담과 십장생 문양의 굴뚝이 유명하다. 경복궁 내 유일하게 남은 내전 건물. 국보 제809호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '광화문',
            explanationKor: '경복궁의 남쪽 정문으로 궁궐 문 중 규모가 가장 크다. 석축 위에 2층 누각이 올려진 형태이며, 세 개의 홍예문이 뚫려 있다. 임진왜란·한국전쟁으로 소실·훼손된 뒤 여러 차례 복원 과정을 거쳐 2010년 현재 모습으로 정비되었다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
    ],
    2: [
        {
            contentsKor: '인정전',
            explanationKor: '창덕궁의 정전. 왕의 즉위식, 신하들의 하례, 외국 사신 접견 등 공식 행사가 열린 공간이다. 내부는 20세기 초 서양식 샹들리에·유리창이 설치되어 전통과 근대가 공존한다. 국보 제225호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '후원 부용지',
            explanationKor: '창덕궁 후원(비원)의 핵심 공간. 네모난 연못(부용지) 가운데 둥근 섬을 두어 하늘(원·圓)과 땅(방·方)의 우주관을 표현했다. 연못가에 부용정·주합루·영화당 등 정자와 누각이 어우러져 조선 최고의 정원 경관을 이룬다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '낙선재',
            explanationKor: '헌종이 1847년 후궁 경빈 김씨를 위해 지은 건물군. 단청을 칠하지 않아 나무 결이 그대로 드러나는 소박한 아름다움이 특징이다. 조선 마지막 황세손빈 이방자 여사가 1989년 타계할 때까지 거주한 곳.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '돈화문',
            explanationKor: '1412년(태종 12) 건립된 창덕궁의 정문. 현존하는 궁궐 대문 중 가장 오래된 건물로, 2층 우진각 지붕의 5칸 문루 형식이다. 임진왜란 이후 1608년 재건되었으며, 보물 제383호로 지정되어 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '주합루',
            explanationKor: '정조가 즉위 직후인 1776년 창건한 2층 누각. 아래층(규장각)은 왕실 도서와 문서를 보관하고, 위층(주합루)은 독서·열람 공간으로 사용하였다. 정조의 문치(文治) 정책의 상징적 건물.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
    ],
    3: [
        {
            contentsKor: '명정전',
            explanationKor: '1616년(광해군 8) 중건된 창경궁의 정전. 현존하는 조선 궁궐 정전 가운데 가장 오래된 건물이다. 다른 궁궐 정전과 달리 동향(東向)으로 배치된 점이 독특하며, 국보 제226호로 지정되어 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '홍화문',
            explanationKor: '1484년(성종 15) 건립된 창경궁의 정문. 2층 누문 형식으로, 영조가 백성들에게 직접 민원을 들은 친민(親民) 정치의 현장이기도 하다. 보물 제384호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '통명전',
            explanationKor: '왕비의 침전으로 사용된 창경궁의 내전. 중종의 계비 장경왕후, 인조의 계비 장렬왕후 등이 거처하였다. 건물 뒤 화계(花階)와 연못이 있어 아름다운 후원을 이룬다. 보물 제818호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '춘당지',
            explanationKor: '원래 왕이 직접 농사를 지어 백성에게 농업의 중요성을 보인 내농포(內農圃)였으나, 일제강점기인 1909년 연못으로 개조되었다. 봄이면 벚꽃·진달래, 여름이면 연꽃이 만발하여 사계절 아름답다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '대온실',
            explanationKor: '1909년 일제가 창경궁을 동물원·식물원으로 격하시키며 건립한 우리나라 최초의 서양식 온실. 철골과 유리로 지어졌으며, 현재는 문화재로 보존하면서 내부에 다양한 열대·아열대 식물을 전시하고 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
    ],
    4: [
        {
            contentsKor: '중화전',
            explanationKor: '대한제국 선포 이후 황제국의 위상에 맞게 새로 세운 덕수궁의 정전. 원래는 2층이었으나 1904년 화재 후 현재의 단층으로 재건되었다. 황제의 용상 위 닫집에 황룡(黃龍) 두 마리가 조각되어 있다. 보물 제819호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '석조전',
            explanationKor: '1910년 완공된 신고전주의 양식의 3층 석조 건물. 고종이 침전·편전으로 사용하였으며, 1945년 미·소 공동위원회 회의장으로도 쓰였다. 현재 1층은 대한제국역사관, 2층은 황제의 공간을 재현하여 전시 중이다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '정관헌',
            explanationKor: '1900년경 건립된 서양식 정자로, 고종이 커피를 마시며 외교관들을 접견하던 휴식 공간이다. 로마네스크 양식의 기둥과 한국 전통 문양(박쥐·소나무·사슴)이 한데 어우러진 독특한 건축물.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '함녕전',
            explanationKor: '1897년 건립된 고종황제의 침전. 1919년 1월 21일 고종이 이곳에서 승하하였으며, 이 사건이 3·1운동 발발의 직접적인 계기가 되었다. 역사적 의미가 깊은 대한제국의 핵심 공간이다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '즉조당·석어당',
            explanationKor: '즉조당은 인조와 철종이 즉위한 곳이며, 석어당은 임진왜란 때 의주로 피란 갔다 돌아온 선조가 거처한 2층 건물이다. 덕수궁에서 가장 오래된 건물군으로, 조선 왕실 수백 년의 역사를 품고 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
    ],
    5: [
        {
            contentsKor: '정전',
            explanationKor: '역대 왕과 왕비 49위의 신주를 모신 종묘의 핵심 건물. 정면 19칸으로 단일 목조건물로는 세계 최장 수준(101m)이다. 장엄하고 절제된 건축미가 돋보이며, 유네스코 세계문화유산이자 국보 제227호.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '영녕전',
            explanationKor: '정전이 가득 차자 1421년(세종 3) 별도로 세운 별묘. 태조의 4대조와 추존왕 등 34위의 신주를 모신다. \'영원히 평안하라\'는 뜻의 이름처럼, 정전과 같은 경건한 분위기 속에 자리하고 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '종묘제례',
            explanationKor: '조선 왕조 역대 왕과 왕비의 신위에 올리는 유교 국가 제례. 매년 5월 첫째 일요일에 재현 행사가 열린다. 엄격한 절차와 형식, 제례악과 일무(佾舞)가 어우러진 의례로 유네스코 인류무형문화유산에 등재되어 있다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '종묘제례악',
            explanationKor: '종묘 제향(祭享) 때 연주하는 기악·노래·춤이 결합된 궁중 의례 음악. 문덕(文德)을 칭송하는 보태평(保太平) 11곡과 무공(武功)을 기리는 정대업(定大業) 11곡으로 구성된다. 2001년 유네스코 인류무형문화유산 최초 등재.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
        {
            contentsKor: '재궁(齋宮)',
            explanationKor: '제례 전날 왕이 몸과 마음을 정결히 하며 머무는 공간. 어재실(御齋室)과 세자재실(世子齋室)로 나뉜다. 망묘루(望廟樓)에 올라 정전의 신실을 바라보며 경건한 마음을 다졌다고 전해진다.',
            imgUrl: '', link: 'https://www.heritage.go.kr',
        },
    ],
};

const FALLBACK_NAMES = [
    '인정전', '광화문', '근정전', '경회루', '향원정',
    '옥천교', '선원전', '명정전', '통화문', '함녕전',
    '중화전', '석어당', '즉조당', '준명당', '경복궁 아미산',
];

let map;
let selectedPalaceId = null;
let currentPalace    = null;
let currentItems     = [];  // 퀴즈 오답 생성용
let quizItem         = null;
let quizPalace       = null;


/* 위키피디아 REST API로 대표 사진 미리 가져오기 */
async function prefetchPhotos() {
    await Promise.all([...PALACES, ...MUSEUMS].map(async place => {
        try {
            const res  = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${place.wikiTitle}`);
            const data = await res.json();
            place.photo = data.thumbnail?.source ?? '';
        } catch {
            place.photo = '';
        }
    }));
}

/* ── 지도 초기화 ── */
function initMap() {
    map = L.map('map').setView([37.5740, 126.9820], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
    }).addTo(map);

    buildSidebar();
    buildMuseumSidebar();
    prefetchPhotos().then(() => {
        PALACES.forEach(createMarker);
        MUSEUMS.forEach(createMuseumMarker);
    });
}

/* ── 사이드바 버튼 생성 ── */
function buildSidebar() {
    const nav = document.getElementById('palace-nav');
    PALACES.forEach(palace => {
        const btn = document.createElement('button');
        btn.className = 'palace-btn';
        btn.id = 'btn-' + palace.id;
        btn.innerHTML = `
            <span class="palace-dot" style="background:${palace.color}"></span>
            <span class="palace-btn-name">${palace.name}</span>
            <span class="palace-btn-en">${palace.nameEn}</span>`;
        btn.addEventListener('click', () => selectPalace(palace.id));
        nav.appendChild(btn);
    });
}

/* ── 박물관 사이드바 버튼 생성 ── */
function buildMuseumSidebar() {
    const nav = document.getElementById('museum-nav');
    MUSEUMS.forEach(museum => {
        const btn = document.createElement('button');
        btn.className = 'palace-btn';
        btn.id = 'btn-' + museum.id;
        btn.innerHTML = `
            <span class="museum-dot" style="background:${museum.color}"></span>
            <span class="palace-btn-name">${museum.name}</span>
            <span class="palace-btn-en">${museum.nameEn}</span>`;
        btn.addEventListener('click', () => selectMuseum(museum.id));
        nav.appendChild(btn);
    });
}

/* ── 박물관 마커 생성 (다이아몬드) ── */
function createMuseumMarker(museum) {
    const icon = L.divIcon({
        html: `<div class="custom-marker" data-id="${museum.id}">
            <div class="marker-tooltip">
                ${museum.photo
                    ? `<img class="marker-tooltip-img" src="${museum.photo}" alt="${museum.name}">`
                    : `<div class="marker-tooltip-emoji">${museum.emoji}</div>`}
                <div class="marker-tooltip-label">
                    <span class="marker-tooltip-dot" style="background:${museum.color}"></span>
                    ${museum.name}
                </div>
            </div>
            <div class="marker-diamond-wrap" style="--dot-color:${museum.color}">
                <div class="marker-diamond"></div>
                <div class="marker-diamond-pulse"></div>
            </div>
            <div class="marker-label">${museum.name}</div>
        </div>`,
        className: '',
        iconSize: [0, 0],
        iconAnchor: [12, 12],
    });
    L.marker([museum.lat, museum.lng], { icon }).addTo(map)
        .on('click', () => selectMuseum(museum.id));
}

/* ── 박물관 선택 ── */
function selectMuseum(museumId) {
    const museum = MUSEUMS.find(m => m.id === museumId);
    if (!museum) return;

    document.querySelectorAll('.palace-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + museumId)?.classList.add('active');

    map.flyTo([museum.lat, museum.lng], 15);

    selectedPalaceId = museumId;
    currentPalace    = museum;

    closeQuiz();
    closeDetail();
    loadMuseumInfo(museum);
}

/* ── 박물관 정보 표시 ── */
function loadMuseumInfo(museum) {
    const panel   = document.getElementById('info-panel');
    const loading = document.getElementById('loading');
    const list    = document.getElementById('info-list');

    panel.classList.add('hidden');
    loading.classList.remove('hidden');
    list.innerHTML = '';

    document.getElementById('info-title').textContent   = museum.name;
    document.getElementById('info-address').textContent = museum.address;

    loading.classList.add('hidden');
    panel.classList.remove('hidden');

    const entry = MUSEUM_DATA[museum.id];
    currentItems = [];
    if (!entry) {
        list.innerHTML = '<p style="color:#7a7a7a;font-size:12px;padding:8px 0">정보가 없습니다.</p>';
        return;
    }
    list.appendChild(
        buildCard(entry, museum, (it) => {
            if (it.link) window.open(it.link, '_blank', 'noopener,noreferrer');
        })
    );
}

/* ── 궁궐 마커 생성 ── */
function createMarker(palace) {
    const icon = L.divIcon({
        html: `<div class="custom-marker" data-id="${palace.id}">
            <div class="marker-tooltip">
                ${palace.photo
                    ? `<img class="marker-tooltip-img" src="${palace.photo}" alt="${palace.name}">`
                    : `<div class="marker-tooltip-emoji">${palace.emoji}</div>`}
                <div class="marker-tooltip-label">
                    <span class="marker-tooltip-dot" style="background:${palace.color}"></span>
                    ${palace.name}
                </div>
            </div>
            <div class="marker-dot" style="--dot-color:${palace.color}">
                <div class="marker-dot-inner"></div>
                <div class="marker-dot-pulse"></div>
            </div>
            <div class="marker-label">${palace.name}</div>
        </div>`,
        className: '',
        iconSize: [0, 0],
        iconAnchor: [12, 12],
    });
    L.marker([palace.lat, palace.lng], { icon }).addTo(map)
        .on('click', () => selectPalace(palace.id));
}

/* ── 궁궐 선택 ── */
function selectPalace(palaceId) {
    const palace = PALACES.find(p => p.id === palaceId);
    if (!palace) return;

    document.querySelectorAll('.palace-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + palaceId)?.classList.add('active');

    map.flyTo([palace.lat, palace.lng], 15);

    selectedPalaceId = palaceId;
    currentPalace    = palace;

    closeQuiz();
    closeDetail();
    loadPalaceInfo(palace);
}

/* ── 궁궐 정보 불러오기 ── */
function loadPalaceInfo(palace) {
    const panel   = document.getElementById('info-panel');
    const loading = document.getElementById('loading');
    const list    = document.getElementById('info-list');

    panel.classList.add('hidden');
    loading.classList.remove('hidden');
    list.innerHTML = '';

    document.getElementById('info-title').textContent   = palace.name;
    document.getElementById('info-address').textContent = palace.address;

    const API = `https://www.heritage.go.kr/heri/gungDetail/gogungListOpenApi.do?gung_number=${palace.id}`;

    fetch(API)
        .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.text(); })
        .then(xml => {
            loading.classList.add('hidden');
            panel.classList.remove('hidden');
            currentItems = parseXml(xml);
            if (currentItems.length === 0) {
                list.innerHTML = '<p style="color:#7a7a7a;font-size:12px;padding:8px 0">정보가 없습니다.</p>';
                return;
            }
            currentItems.forEach(item => list.appendChild(buildCard(item, palace)));
        })
        .catch(() => {
            loading.classList.add('hidden');
            panel.classList.remove('hidden');
            const fallback = PALACE_DATA[palace.id] ?? [];
            currentItems = fallback;
            if (fallback.length === 0) {
                list.innerHTML = '<p style="color:#7a7a7a;font-size:12px;padding:8px 0">정보가 없습니다.</p>';
                return;
            }
            fallback.forEach(item => list.appendChild(buildCard(item, palace)));
        });
}

/* ── XML 파싱 ── */
function parseXml(xmlStr) {
    const doc = new DOMParser().parseFromString(xmlStr, 'application/xml');
    return Array.from(doc.querySelectorAll('list')).map(el => ({
        contentsKor:    el.querySelector('contents_kor')?.textContent   ?? '',
        explanationKor: el.querySelector('explanation_kor')?.textContent ?? '',
        imgUrl:         el.querySelector('imgUrl')?.textContent          ?? '',
        link:           el.querySelector('link')?.textContent            ?? '',
    }));
}

/* ── 카드 생성 ── */
function buildCard(item, palace, onClickFn) {
    const card = document.createElement('div');
    card.className = 'info-card';

    if (item.imgUrl) {
        const img   = document.createElement('img');
        img.src     = item.imgUrl;
        img.alt     = item.contentsKor;
        img.onerror = () => img.remove();
        card.appendChild(img);
    }

    const body = document.createElement('div');
    body.className = 'info-card-body';

    const title = document.createElement('div');
    title.className   = 'info-card-title';
    title.textContent = item.contentsKor || '(이름 없음)';
    body.appendChild(title);

    if (item.explanationKor) {
        const desc = document.createElement('div');
        desc.className   = 'info-card-desc';
        desc.textContent = item.explanationKor;
        body.appendChild(desc);
    }
    card.appendChild(body);

    const arrow = document.createElement('div');
    arrow.className = 'info-card-arrow';
    arrow.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M5 2L10 7L5 12" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    card.appendChild(arrow);

    card.addEventListener('click', () => (onClickFn ?? openQuiz)(item, palace));
    return card;
}

/* ══════════════════════════════
   퀴즈 패널
══════════════════════════════ */

function openQuiz(item, palace) {
    quizItem   = item;
    quizPalace = palace;

    document.getElementById('quiz-palace-name').textContent = palace.name;

    /* 히어로 이미지 (이름 가림) */
    const hero = document.getElementById('quiz-hero');
    hero.innerHTML = '';
    if (item.imgUrl) {
        const img   = document.createElement('img');
        img.src     = item.imgUrl;
        img.alt     = '';
        img.onerror = () => { hero.innerHTML = ''; };
        hero.appendChild(img);
    }

    /* 힌트 — 설명 앞 80자 */
    const hint = item.explanationKor
        ? item.explanationKor.slice(0, 80) + (item.explanationKor.length > 80 ? '…' : '')
        : '설명이 없습니다.';
    document.getElementById('quiz-hint').textContent = hint;

    /* 히어로 없으면 여백만 */
    if (!item.imgUrl) {
        const empty = document.createElement('div');
        empty.className = 'quiz-hero-empty';
        hero.appendChild(empty);
    }

    /* 선택지 생성 */
    const correct = item.contentsKor || '(이름 없음)';

    const others = currentItems
        .filter(i => i.contentsKor && i.contentsKor !== correct)
        .sort(() => Math.random() - 0.5)
        .map(i => i.contentsKor);

    const fallbacks = FALLBACK_NAMES
        .filter(n => n !== correct && !others.includes(n))
        .sort(() => Math.random() - 0.5);

    const pool    = [...others, ...fallbacks];
    const choices = [
        { text: correct, correct: true },
        ...pool.slice(0, 3).map(n => ({ text: n, correct: false })),
    ].sort(() => Math.random() - 0.5);

    /* 선택지 렌더 */
    const LABELS = ['A', 'B', 'C', 'D'];
    const choicesEl = document.getElementById('quiz-choices');
    choicesEl.innerHTML = '';
    choices.forEach((choice, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-choice';
        btn.innerHTML = `
            <span class="quiz-choice-badge">${LABELS[i]}</span>
            <span class="quiz-choice-text">${choice.text}</span>`;
        btn.addEventListener('click', () => handleAnswer(choice.correct, choice.text, correct));
        choicesEl.appendChild(btn);
    });

    /* 결과/액션 초기화 */
    document.getElementById('quiz-result').className  = 'quiz-result hidden';
    document.getElementById('quiz-actions').className = 'quiz-actions hidden';

    const panel = document.getElementById('quiz-panel');
    panel.classList.add('open');
    panel.scrollTop = 0;
}

function handleAnswer(isCorrect, selected, correct) {
    /* 모든 버튼 비활성화 + 정답/오답 배지 표시 */
    document.querySelectorAll('.quiz-choice').forEach(btn => {
        btn.disabled = true;
        const text  = btn.querySelector('.quiz-choice-text')?.textContent;
        const badge = btn.querySelector('.quiz-choice-badge');
        if (text === correct) {
            btn.classList.add('correct');
            if (badge) badge.textContent = '✓';
        } else if (text === selected && !isCorrect) {
            btn.classList.add('wrong');
            if (badge) badge.textContent = '✗';
        }
    });

    /* 결과 배너 */
    const result = document.getElementById('quiz-result');
    if (isCorrect) {
        result.className = 'quiz-result correct-msg';
        result.innerHTML = `
            <div class="quiz-result-icon">🎉</div>
            <div class="quiz-result-title">정답입니다!</div>
            <div class="quiz-result-sub">문화유산에 대해 잘 알고 있네요</div>`;
    } else {
        result.className = 'quiz-result wrong-msg';
        result.innerHTML = `
            <div class="quiz-result-icon">😢</div>
            <div class="quiz-result-title">아쉽네요!</div>
            <div class="quiz-result-sub">정답은 <strong>${correct}</strong> 입니다</div>`;
    }

    /* 자세히 보기 버튼 */
    const actions = document.getElementById('quiz-actions');
    actions.className = 'quiz-actions';
    actions.innerHTML = '';

    const detailBtn = document.createElement('button');
    detailBtn.className = 'detail-cta';
    detailBtn.innerHTML = `자세히 보기 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    detailBtn.addEventListener('click', () => {
        closeQuiz();
        openDetail(quizItem, quizPalace);
    });
    actions.appendChild(detailBtn);

    /* 결과 영역이 보이도록 스크롤 */
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeQuiz() {
    document.getElementById('quiz-panel').classList.remove('open');
}

/* ══════════════════════════════
   상세 패널
══════════════════════════════ */

function openDetail(item, palace) {
    document.getElementById('detail-palace-name').textContent = palace.name;

    const hero = document.getElementById('detail-hero');
    hero.innerHTML = '';
    if (item.imgUrl) {
        const img   = document.createElement('img');
        img.src     = item.imgUrl;
        img.alt     = item.contentsKor;
        img.onerror = () => { hero.innerHTML = ''; };
        hero.appendChild(img);
    }

    document.getElementById('detail-category').textContent = palace.name + ' · 문화유산';
    document.getElementById('detail-title').textContent    = item.contentsKor || '(이름 없음)';
    document.getElementById('detail-desc').textContent     = item.explanationKor || '상세 설명이 없습니다.';

    const actions = document.getElementById('detail-actions');
    actions.innerHTML = '';
    if (item.link) {
        const a  = document.createElement('a');
        a.href   = item.link;
        a.target = '_blank';
        a.rel    = 'noopener noreferrer';
        a.className = 'detail-cta';
        a.innerHTML = `자세히 보기 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        actions.appendChild(a);
    }

    const panel = document.getElementById('detail-panel');
    panel.classList.add('open');
    panel.scrollTop = 0;
}

function closeDetail() {
    document.getElementById('detail-panel').classList.remove('open');
}

/* ── 초기화 ── */
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-back').addEventListener('click', closeQuiz);
    document.getElementById('detail-back').addEventListener('click', closeDetail);
    initMap();
});
