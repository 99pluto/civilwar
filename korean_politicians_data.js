/**
 * korean_politicians_data.js
 * ─────────────────────────────────────────────────────────────
 * 한국 정치인 관계 네트워크 - 데이터 파일
 * (korean_politicians_network.html 이 이 파일을 참조합니다)
 *
 * 업데이트 방법
 *   • 인물 추가/수정  → nodes 배열에 객체 추가 또는 수정
 *   • 관계 추가/수정  → links 배열에 객체 추가 또는 수정
 *   • 기사 분석용 DB  → politicianDB 배열에 항목 추가
 *   • 출처 URL 수정   → 각 event.sources[].url 값 변경
 *
 * ⚠️ 나무위키(namu.wiki)는 출처로 사용하지 않습니다.
 * ─────────────────────────────────────────────────────────────
 * 최종 업데이트: 2026-06-27 | 노드 45명 | 링크 약 60개
 * 출처: 코트워치 '내란 법정의 161인', 경향신문, 한국일보, YTN,
 *        서울신문, 법률신문, 뉴스1, 시사IN 등 공신력 있는 언론사
 */

window.POLITICIANS_DATA = {

// ═══════════════════════════════════════════
// 노드 (인물) 데이터 — 45명
// ─ id        : 고유 식별자
// ─ name      : 표시 이름
// ─ role      : 직책
// ─ period    : 재임/활동 기간 또는 법적 상태
// ─ color     : 노드 색상 (#hex)
// ─ group     : main / ppp / opposition / rebel / law
// ─ ix, iy    : 초기 위치 비율 (0~1)
// ─ events    : 주요 사건 목록
//     { date, title, desc, color, sources:[{label,url}] }
// ═══════════════════════════════════════════
nodes: [

  // ════════════════════════════════════════
  // ① 대통령 3인
  // ════════════════════════════════════════
  {
    id:"moon", name:"문재인", role:"제19대 대통령", period:"2017–2022",
    color:"#0d9488", group:"main", ix:.20, iy:.40,
    events:[
      { date:"2019.07", title:"윤석열 검찰총장 임명",
        desc:"검찰개혁 목적으로 파격 발탁. 이후 극한 갈등. 2025년 '임명을 후회한다' 언급.",
        color:"#f59e0b",
        sources:[{label:"Comparative Connections", url:"https://cc.pacforum.org/2022/05/from-moon-to-yoon-end-of-an-era/"}] },
      { date:"2019.09", title:"조국 법무장관 임명 (조국 사태)",
        desc:"35일 만에 사퇴. 문재인 정부 최대 위기.",
        color:"#f59e0b",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202402081926005"}] },
      { date:"2025.04", title:"뇌물 혐의 기소",
        desc:"역대 대통령 6번째 기소. 사위 태국 항공사 취업 특혜로 2억1,700만원 수수 혐의.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504241703001"}] }
    ]
  },

  {
    id:"yoon", name:"윤석열", role:"제20대 대통령", period:"2022–2025 (파면·무기징역)",
    color:"#dc2626", group:"main", ix:.60, iy:.30,
    events:[
      { date:"2024.12.03", title:"비상계엄 선포 (12·3 내란)",
        desc:"야당 탄핵 및 반국가세력 척결 명목. 6시간 만에 국회 의결로 해제. 내란우두머리 혐의.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412032251001"}] },
      { date:"2024.12.14", title:"국회 탄핵 소추안 가결",
        desc:"재석 300명 중 204명 찬성. 즉시 직무 정지.",
        color:"#ef4444",
        sources:[{label:"SBS뉴스", url:"https://news.sbs.co.kr/news/endPage.do?news_id=N1007912230"}] },
      { date:"2025.01.15", title:"고위공직자범죄수사처 체포",
        desc:"현직 대통령 최초 체포. 내란 수괴 혐의.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501152155001"}] },
      { date:"2025.04.04", title:"헌법재판소 파면 인용",
        desc:"재판관 8명 전원 일치로 탄핵 인용. 대통령직 파면.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504041000001"}] },
      { date:"2026.02.19", title:"내란 우두머리 1심 무기징역 선고",
        desc:"서울중앙지법 형사25부, 내란우두머리 혐의 유죄. 역대 전직 대통령 중 최중형.",
        color:"#7f1d1d",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/articleView.html?idxno=216532"}] }
    ]
  },

  {
    id:"lee_jm", name:"이재명", role:"제21대 대통령", period:"2025.06– (전 민주당 대표)",
    color:"#1d4ed8", group:"opposition", ix:.25, iy:.68,
    events:[
      { date:"2022", title:"제20대 대선 낙선 (0.73%p)",
        desc:"윤석열에 24만7천여 표 차이로 역대 최소 격차 패배.",
        color:"#6e7681",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202203091023001"}] },
      { date:"2024.11", title:"위증교사 1심 무죄",
        desc:"법원, 위증교사 혐의 무죄 선고.",
        color:"#22c55e",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202411251431001"}] },
      { date:"2025.06", title:"제21대 대통령 당선",
        desc:"윤석열 파면 후 조기 대선에서 당선.",
        color:"#1d4ed8",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202506031200001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ② 내란 가담 장관급·국무위원
  // ════════════════════════════════════════
  {
    id:"han_ds", name:"한덕수", role:"전 국무총리", period:"1심 징역 23년",
    color:"#7f1d1d", group:"rebel", ix:.45, iy:.12,
    events:[
      { date:"2024.12.14", title:"1차 대통령 권한대행",
        desc:"윤석열 탄핵 직무정지로 권한대행. 국무회의 심의로 계엄 선포 절차적 외관 형성.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412141800001"}] },
      { date:"2024.12.27", title:"2차 대통령 권한대행",
        desc:"헌재 재판관 임명 거부로 위헌 논란.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412281144001"}] },
      { date:"2026.01.21", title:"내란 1심 징역 23년 선고",
        desc:"서울중앙지법, 내란중요임무종사 유죄. '국무회의로 계엄 선포에 기여'라고 판단. 특검 구형보다 높은 중형. 법정구속.",
        color:"#dc2626",
        sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/2026/01/22/20260122001004"}] }
    ]
  },

  {
    id:"lee_sm", name:"이상민", role:"전 행정안전부장관", period:"1심 징역 7년",
    color:"#7f1d1d", group:"rebel", ix:.36, iy:.20,
    events:[
      { date:"2024.12.03", title:"언론사 단전·단수 지시",
        desc:"윤석열의 계엄 당일 언론사 단전·단수 지시를 경찰청·소방청에 전달. '충암파' 핵심 인물.",
        color:"#dc2626",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025073119460000205"}] },
      { date:"2025.08.19", title:"구속기소",
        desc:"내란중요임무종사·직권남용 등 혐의로 구속기소. 장관급 두 번째 구속기소.",
        color:"#7f1d1d",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025081918040003531"}] },
      { date:"2026.02.12", title:"1심 징역 7년 선고",
        desc:"서울중앙지법 형사32부, 내란중요임무종사 유죄. 언론 통제 직권남용 인정.",
        color:"#dc2626",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/210389"}] }
    ]
  },

  {
    id:"park_sj", name:"박성재", role:"전 법무부장관", period:"1심 징역 25년",
    color:"#7f1d1d", group:"rebel", ix:.50, iy:.22,
    events:[
      { date:"2024.12.03", title:"법무장관으로 내란 가담",
        desc:"계엄 선포 당일 국무회의 참석, 내란 가담. 검사장급 인사권 활용 의혹도.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202606222142005"}] },
      { date:"2026.06.22", title:"1심 징역 25년 선고",
        desc:"서울중앙지법 형사33부, 내란중요임무종사 등 유죄. 특검 구형(20년)보다 5년 높은 중형. 법정구속.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202606222142005"},
                 {label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2026/06/22/20260622500159"}] }
    ]
  },

  // ════════════════════════════════════════
  // ③ 내란선동·직권남용 기소
  // ════════════════════════════════════════
  {
    id:"hwang_kya", name:"황교안", role:"전 국무총리·법무부장관", period:"내란선동 불구속 기소",
    color:"#92400e", group:"rebel", ix:.14, iy:.22,
    events:[
      { date:"2024.12.03", title:"계엄 당일 SNS 내란선동",
        desc:"계엄 선포 직후 SNS에 '우원식·한동훈 체포' 촉구 게시. 민정수석 김주현과 3회 통화.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] },
      { date:"2025.11.12", title:"내란 특검 구속영장 청구",
        desc:"특검, 내란선동·직권남용 혐의 구속영장 청구. '혐의 중대, 도주·재범 우려'.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511121902001"}] },
      { date:"2025.12.07", title:"내란선동 불구속 기소",
        desc:"내란선동·직권남용 등 혐의로 불구속 기소. 전 총리로서 계엄 불법성 인식 후 선동.",
        color:"#7f1d1d",
        sources:[{label:"서울경제", url:"https://www.sedaily.com/NewsView/2H1N0U6GQV"}] }
    ]
  },

  {
    id:"choi_sm", name:"최상목", role:"전 경제부총리·권한대행", period:"직무유기 기소",
    color:"#b45309", group:"rebel", ix:.55, iy:.15,
    events:[
      { date:"2024.12.27", title:"대통령 권한대행 (한덕수 탄핵 후)",
        desc:"한덕수 탄핵 소추 후 3차 권한대행. 헌재 재판관 마은혁 임명 거부 논란.",
        color:"#b45309",
        sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] },
      { date:"2025.12.12", title:"직무유기 혐의 불구속 기소",
        desc:"국회 추천 헌재 재판관 미임명 직무유기 기소. 한덕수 재판 허위 진술 혐의도 추가.",
        color:"#ef4444",
        sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
    ]
  },

  // ════════════════════════════════════════
  // ④ 대통령실 관련 피의자
  // ════════════════════════════════════════
  {
    id:"kim_jh", name:"김주현", role:"전 대통령실 민정수석", period:"직권남용 기소",
    color:"#b45309", group:"rebel", ix:.66, iy:.24,
    events:[
      { date:"2024.12.03", title:"계엄 당일 황교안에 3회 통화",
        desc:"계엄 선포 약 30분 후 황교안에게 문자. 내란선동 연계 의혹.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] },
      { date:"2025.12.12", title:"직권남용 기소",
        desc:"내란 관련 직권남용 권리행사방해 혐의로 불구속 기소.",
        color:"#ef4444",
        sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
    ]
  },

  {
    id:"lee_wm", name:"이원모", role:"전 대통령실 공직기강비서관", period:"직권남용 기소",
    color:"#b45309", group:"rebel", ix:.73, iy:.30,
    events:[
      { date:"2025.12.12", title:"직권남용 기소",
        desc:"공직기강비서관으로서 계엄 전후 직권남용 권리행사방해 혐의 불구속 기소.",
        color:"#ef4444",
        sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
    ]
  },

  {
    id:"lim_jd", name:"임종득", role:"전 국가안보실 2차장", period:"직권남용 기소",
    color:"#78350f", group:"rebel", ix:.70, iy:.38,
    events:[
      { date:"2025.12.08", title:"직권남용 불구속 기소",
        desc:"안보실 2차장 재임 중 국가위기관리센터 부적절 인사 청탁 개입 혐의. 불구속 기소.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512081454001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑤ 대통령경호처 피의자
  // ════════════════════════════════════════
  {
    id:"park_jj", name:"박종준", role:"전 대통령경호처장", period:"구속기소",
    color:"#7f1d1d", group:"rebel", ix:.64, iy:.09,
    events:[
      { date:"2024.12", title:"공수처 압수수색 방해",
        desc:"공수처의 대통령실 압수수색 방해 혐의. 경호처 병력 동원.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412121400001"}] },
      { date:"2025", title:"특수공무집행방해·증거인멸 기소",
        desc:"공수처 영장 집행 저지 특수공무집행방해 및 증거인멸 혐의. 징역 7년 구형.",
        color:"#7f1d1d",
        sources:[{label:"세계일보", url:"https://www.segye.com/newsView/20260601516845"}] }
    ]
  },

  {
    id:"kim_shn", name:"김성훈", role:"전 경호처 차장", period:"특수공무집행방해 기소",
    color:"#7f1d1d", group:"rebel", ix:.56, iy:.07,
    events:[
      { date:"2025.01", title:"공수처 체포 영장 집행 저지",
        desc:"윤석열 체포 영장 집행 현장에서 경호처 차장으로 직접 저지 지휘. '막겠다'고 언급.",
        color:"#dc2626",
        sources:[{label:"뉴스1", url:"https://www.news1.kr/society/court-prosecution/5840432"}] },
      { date:"2025", title:"특수공무집행방해 기소",
        desc:"경호처 차장으로서 체포 영장 집행 저지 주도. 징역 7년 구형.",
        color:"#7f1d1d",
        sources:[{label:"세계일보", url:"https://www.segye.com/newsView/20260601516845"}] }
    ]
  },

  {
    id:"lee_gw", name:"이광우", role:"전 경호처 경호본부장", period:"특수공무집행방해 기소",
    color:"#7f1d1d", group:"rebel", ix:.60, iy:.05,
    events:[
      { date:"2025.01", title:"공수처 압수수색·체포 저지 가담",
        desc:"경호처 경호본부장으로 공수처 압수수색 및 체포 영장 집행 저지에 가담.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501141617001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑥ 국가정보원 피의자
  // ════════════════════════════════════════
  {
    id:"cho_tay", name:"조태용", role:"전 국가정보원장", period:"위증 기소",
    color:"#78350f", group:"rebel", ix:.68, iy:.15,
    events:[
      { date:"2024.12.03", title:"국정원장으로 계엄 정당화 관여",
        desc:"계엄 직후 CIA 등 동맹국에 계엄 정당화 설명. 홍장원 1차장 통해 진행.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511281132001"}] },
      { date:"2025", title:"국회 위증 혐의 기소",
        desc:"국회 청문에서의 허위 진술 혐의로 기소.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511281132001"}] }
    ]
  },

  {
    id:"hong_jw", name:"홍장원", role:"전 국정원 1차장", period:"내란 혐의 수사 중",
    color:"#78350f", group:"rebel", ix:.62, iy:.14,
    events:[
      { date:"2024.12.03", title:"동맹국에 계엄 정당화 메시지 전달",
        desc:"조태용 국정원장 지시로 CIA 등에 계엄 정당화 문건 설명. 승인 정황 포착.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511191446001"}] },
      { date:"2026.06", title:"내란 특검 4차 소환 조사",
        desc:"내란중요임무종사 혐의 피의자 신분으로 10시간 조사. 기소 여부 검토 중.",
        color:"#ef4444",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606222056228403"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑦ 경찰 피의자
  // ════════════════════════════════════════
  {
    id:"cho_jh", name:"조지호", role:"전 경찰청장", period:"1심 징역 12년·파면",
    color:"#7f1d1d", group:"rebel", ix:.78, iy:.60,
    events:[
      { date:"2024.12.03", title:"경찰 병력 국회 봉쇄 지시",
        desc:"경찰청장으로서 국회 출입 전면 차단 지시. 군 출입은 허용, 의원·시민 차단.",
        color:"#dc2626",
        sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0103_202602191715230814"}] },
      { date:"2025", title:"헌재 탄핵 파면",
        desc:"헌재 재판관 전원일치 탄핵 인용. 윤석열 이후 내란 파면 첫 고위공직자.",
        color:"#ef4444",
        sources:[{label:"뉴스1", url:"https://www.news1.kr/society/court-prosecution/6012955"}] },
      { date:"2026.02.19", title:"1심 징역 12년 선고",
        desc:"서울중앙지법, 내란중요임무종사 유죄. 김봉식(10년)보다 중형.",
        color:"#7f1d1d",
        sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0103_202602191715230814"}] }
    ]
  },

  {
    id:"kim_bs", name:"김봉식", role:"전 서울경찰청장", period:"1심 징역 10년",
    color:"#b45309", group:"rebel", ix:.82, iy:.67,
    events:[
      { date:"2024.12.03", title:"서울경찰 병력 국회 투입 지시",
        desc:"서울경찰청장으로서 경찰 병력의 국회 봉쇄 투입 지시 혐의.",
        color:"#ef4444",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2024121215260002891"}] },
      { date:"2026.02.19", title:"1심 징역 10년 선고",
        desc:"서울중앙지법, 내란중요임무종사 유죄.",
        color:"#7f1d1d",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2024121215260002891"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑧ 군 핵심 피의자
  // ════════════════════════════════════════
  {
    id:"jung_js", name:"정진석", role:"전 대통령비서실장", period:"직권남용 기소",
    color:"#b45309", group:"rebel", ix:.72, iy:.20,
    events:[
      { date:"2024.12.03", title:"비서실장으로 내란 관여",
        desc:"헌재 재판관 임명 방해 등 계엄 전후 관여 혐의.",
        color:"#ef4444",
        sources:[{label:"시사IN", url:"https://www.sisain.co.kr/news/articleView.html?idxno=57067"}] },
      { date:"2025.12", title:"직권남용 기소",
        desc:"내란 관련 직권남용 권리행사방해 혐의로 불구속 기소.",
        color:"#b45309",
        sources:[{label:"시사IN", url:"https://www.sisain.co.kr/news/articleView.html?idxno=57067"}] }
    ]
  },

  {
    id:"kim_yh", name:"김용현", role:"전 국방부장관", period:"1심 징역 30년",
    color:"#7f1d1d", group:"rebel", ix:.76, iy:.38,
    events:[
      { date:"2024.12.03", title:"비상계엄 선포 핵심 기획자",
        desc:"국방부장관으로서 계엄 선포 제안·실행 핵심. 계엄 직후 사임.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412042200001"}] },
      { date:"2024.12.06", title:"체포·구속기소",
        desc:"내란 수괴 방조 등 혐의로 체포·구속기소.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412062100001"}] },
      { date:"2026.02.19", title:"1심 징역 30년 선고",
        desc:"서울중앙지법, 내란중요임무종사 등 유죄. 피고인 중 최중형.",
        color:"#7f1d1d",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/articleView.html?idxno=216532"}] }
    ]
  },

  {
    id:"noh", name:"노상원", role:"전 정보사령관", period:"1심 징역 18년",
    color:"#7f1d1d", group:"rebel", ix:.84, iy:.45,
    events:[
      { date:"2024.12.03", title:"계엄 핵심 모의·체포 명단 작성",
        desc:"500여명 체포 명단 수첩 작성. 롯데리아 회동으로 계엄 사전 모의 핵심 역할.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412181200001"}] },
      { date:"2026.02.19", title:"1심 징역 18년 선고",
        desc:"서울중앙지법, 내란중요임무종사 유죄.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501151200001"}] }
    ]
  },

  {
    id:"moon_sh", name:"문상호", role:"전 정보사령관", period:"내란 기소",
    color:"#7f1d1d", group:"rebel", ix:.90, iy:.32,
    events:[
      { date:"2024.12.03", title:"정보사 요원 명단 누설·체포조 지원",
        desc:"정보사 요원 40여명 명단을 노상원에게 누설. 비선 제2수사단 구성 가담. 국회의원 체포조 지원.",
        color:"#dc2626",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/news/article/amp/A2026051514400000619"}] },
      { date:"2026.05", title:"내란중요임무종사 징역 5년 구형",
        desc:"특검, '군 조직 사유화' 비판하며 징역 5년 구형. 선고 예정.",
        color:"#7f1d1d",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/news/article/amp/A2026051514400000619"}] }
    ]
  },

  {
    id:"yeo_ih", name:"여인형", role:"전 국군방첩사령관", period:"1심 진행 중",
    color:"#7f1d1d", group:"rebel", ix:.80, iy:.52,
    events:[
      { date:"2024.12.03", title:"방첩사령관으로 계엄 투입·체포 지시",
        desc:"국군방첩사령관으로서 계엄 병력 투입 지시. 노상원과 계엄 모의. 정치인 체포조 편성.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] },
      { date:"2025.01", title:"체포·구속기소",
        desc:"내란중요임무종사 혐의로 체포·구속기소. 군사법원에서 서울중앙지법으로 이송.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] }
    ]
  },

  {
    id:"kwak", name:"곽종근", role:"전 특수전사령관", period:"1심 진행 중",
    color:"#7f1d1d", group:"rebel", ix:.86, iy:.60,
    events:[
      { date:"2024.12.03", title:"국회 봉쇄·선관위 병력 투입",
        desc:"특수전사령관으로 국회와 중앙선관위에 병력 투입. 헬기 탑승 지시.",
        color:"#dc2626",
        sources:[{label:"뉴시스", url:"https://www.newsis.com/view/NISX20241210_0002991479"}] },
      { date:"2024–2025", title:"파면·구속기소",
        desc:"내란중요임무종사 혐의로 파면 및 구속기소.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501031057001"}] }
    ]
  },

  {
    id:"park_as", name:"박안수", role:"전 육군참모총장(계엄사령관)", period:"1심 진행 중",
    color:"#7f1d1d", group:"rebel", ix:.90, iy:.44,
    events:[
      { date:"2024.12.03", title:"계엄사령관 임명·육군 병력 동원",
        desc:"윤석열에 의해 계엄사령관 임명. 육군참모총장으로서 병력 동원·지휘.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412101200001"}] },
      { date:"2025", title:"구속기소",
        desc:"내란중요임무종사 혐의 구속기소.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501201200001"}] }
    ]
  },

  {
    id:"lee_jw", name:"이진우", role:"전 수도방위사령관", period:"1심 진행 중",
    color:"#7f1d1d", group:"rebel", ix:.92, iy:.56,
    events:[
      { date:"2024.12.03", title:"수도방위사령관으로 계엄 병력 배치",
        desc:"수도권 계엄 병력 배치·지휘.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412101400001"}] },
      { date:"2025", title:"구속기소",
        desc:"내란혐의로 구속기소. 파면.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501201200001"}] }
    ]
  },

  {
    id:"kim_ht", name:"김현태", role:"전 707특임단장", period:"내란 기소",
    color:"#7f1d1d", group:"rebel", ix:.94, iy:.68,
    events:[
      { date:"2024.12.03", title:"707특임단 헬기로 국회 투입",
        desc:"707특임단장으로 계엄 당일 헬기로 국회 투입. 의원 끌어내기 지시 혐의. 기자 폭행 논란.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504181502001"}] },
      { date:"2025.09", title:"특검 소환 조사",
        desc:"'707단원 기자 폭행' 관련 특검 소환. 내란중요임무종사 혐의 기소.",
        color:"#7f1d1d",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202509101649001"}] }
    ]
  },

  {
    id:"shin_ws", name:"신원식", role:"전 국방부장관", period:"기소",
    color:"#78350f", group:"rebel", ix:.78, iy:.26,
    events:[
      { date:"2023–2024", title:"국방부장관 재임",
        desc:"윤석열 정부 전임 국방부장관. 강경 안보 정책 추진.",
        color:"#b45309",
        sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0101_202502121857245997"}] },
      { date:"2024.12.03", title:"계엄 관련 혐의",
        desc:"전 국방부장관으로서 계엄 준비 관여 의혹.",
        color:"#ef4444",
        sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0101_202502121857245997"}] }
    ]
  },

  {
    id:"lee_wr", name:"이완규", role:"전 법제처장", period:"위증 혐의 기소",
    color:"#7c3aed", group:"rebel", ix:.64, iy:.52,
    events:[
      { date:"2024.12.03", title:"계엄 관여·국회 위증",
        desc:"법제처장으로 계엄 관련 국회 청문 위증 혐의. 불구속 기소.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504092037005"}] }
    ]
  },

  {
    id:"kwon_sd", name:"권성동", role:"국민의힘 의원", period:"친윤 핵심",
    color:"#b45309", group:"ppp", ix:.58, iy:.62,
    events:[
      { date:"2024", title:"국민의힘 원내대표",
        desc:"친윤 핵심으로 윤석열 탄핵 이후에도 당 장악 시도.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412121155001"}] }
    ]
  },

  {
    id:"choo_kh", name:"추경호", role:"전 국민의힘 원내대표", period:"내란중요임무 기소",
    color:"#b45309", group:"rebel", ix:.52, iy:.68,
    events:[
      { date:"2024.12.03", title:"내란중요임무종사 혐의 기소",
        desc:"원내대표로서 계엄 관련 내란중요임무종사 혐의. 불구속 기소.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑨ 친윤·국민의힘 (비기소)
  // ════════════════════════════════════════
  {
    id:"han_dh", name:"한동훈", role:"전 국민의힘 대표", period:"2024 당대표",
    color:"#b45309", group:"ppp", ix:.40, iy:.08,
    events:[
      { date:"2024.07", title:"국민의힘 대표 당선",
        desc:"전당대회에서 62.8% 득표로 대표 선출. 친윤계와 갈등.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202407231400001"}] },
      { date:"2024.12.07", title:"탄핵 찬성 선언",
        desc:"국민의힘 대표로서 윤석열 탄핵 가결 찬성 선언. 당내 친윤파와 충돌.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412071130001"}] },
      { date:"2025.01", title:"국민의힘 대표 사퇴",
        desc:"탄핵 정국 이후 당 대표직 사퇴.",
        color:"#6e7681",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501081200001"}] }
    ]
  },

  {
    id:"kim_ms", name:"김문수", role:"전 고용노동부장관", period:"국민의힘 대선 후보",
    color:"#92400e", group:"ppp", ix:.50, iy:.55,
    events:[
      { date:"2024", title:"고용노동부장관 임명",
        desc:"윤석열 정부 고용노동부장관.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202312280900001"}] },
      { date:"2025", title:"국민의힘 대통령 후보",
        desc:"탄핵 이후 조기 대선 국민의힘 후보로 출마. 이재명에 패배.",
        color:"#92400e",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504281200001"}] }
    ]
  },

  {
    id:"hong_jp", name:"홍준표", role:"전 대구시장", period:"대선 불출마",
    color:"#92400e", group:"ppp", ix:.05, iy:.55,
    events:[
      { date:"2024.12", title:"윤석열 계엄 강력 비판",
        desc:"국민의힘 내 대표적 계엄 비판. '민주주의 반역' 발언.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412041400001"}] },
      { date:"2025", title:"대선 불출마 선언",
        desc:"국민의힘 대선 경선 불참. 당내 갈등 이유.",
        color:"#92400e",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025042914430005884"}] }
    ]
  },

  {
    id:"ahn_cs", name:"안철수", role:"국민의힘 의원", period:"전 국민의당 대표",
    color:"#3b82f6", group:"ppp", ix:.08, iy:.36,
    events:[
      { date:"2022", title:"대선 단일화·연대",
        desc:"2022년 대선에서 윤석열과 단일화. 이후 갈등 반복.",
        color:"#3b82f6",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202203030900001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑩ 사법·헌재
  // ════════════════════════════════════════
  {
    id:"moon_hb", name:"문형배", role:"헌재소장 권한대행", period:"탄핵 인용 선고",
    color:"#7c3aed", group:"law", ix:.30, iy:.18,
    events:[
      { date:"2024.12", title:"헌법재판소장 권한대행",
        desc:"이종석 소장 임기 만료 후 권한대행. 탄핵 심판 주재.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412151200001"}] },
      { date:"2025.04.04", title:"윤석열 탄핵 인용 선고",
        desc:"재판관 8인 전원일치로 탄핵 인용. 파면 선고.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504041000001"}] }
    ]
  },

  {
    id:"oh_dw", name:"오동운", role:"고위공직자범죄수사처장", period:"윤석열 체포 집행",
    color:"#7c3aed", group:"law", ix:.25, iy:.10,
    events:[
      { date:"2025.01.03", title:"윤석열 1차 체포 시도 실패",
        desc:"경호처 저지로 체포 실패.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501031400001"}] },
      { date:"2025.01.15", title:"윤석열 체포 성공",
        desc:"2차 체포 영장 집행 성공. 구속 수사.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501152155001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑪ 야권
  // ════════════════════════════════════════
  {
    id:"choo", name:"추미애", role:"전 법무부장관", period:"전 더불어민주당 대표",
    color:"#059669", group:"opposition", ix:.10, iy:.50,
    events:[
      { date:"2020–2021", title:"법무부장관 재임",
        desc:"검찰 수사지휘권 발동, 윤석열 징계 추진. 여권·검찰 갈등 핵심.",
        color:"#059669",
        sources:[{label:"매일신문", url:"https://www.imaeil.com/page/view/2020112419383400388"}] }
    ]
  },

  {
    id:"cho_kuk", name:"조국", role:"조국혁신당 대표", period:"전 법무장관",
    color:"#7c3aed", group:"opposition", ix:.15, iy:.62,
    events:[
      { date:"2019.09", title:"법무장관 임명·35일 사퇴 (조국 사태)",
        desc:"딸 입시 비리 등 의혹으로 35일 만에 사퇴. 문재인 정부 최대 위기.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202402081926005"}] },
      { date:"2024.04", title:"조국혁신당 창당 총선 대박",
        desc:"조국혁신당 창당 후 4월 총선에서 12석 획득.",
        color:"#7c3aed",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202404111400001"}] }
    ]
  },

  {
    id:"park_cd", name:"박찬대", role:"더불어민주당 원내대표", period:"탄핵 주도",
    color:"#1d4ed8", group:"opposition", ix:.35, iy:.78,
    events:[
      { date:"2024.12.14", title:"탄핵 소추안 처리 주도",
        desc:"민주당 원내대표로 국회 본회의 탄핵 소추안 처리 주도.",
        color:"#1d4ed8",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412141200001"}] }
    ]
  },

  {
    id:"woo_ws", name:"우원식", role:"국회의장", period:"제22대 국회",
    color:"#1d4ed8", group:"opposition", ix:.22, iy:.82,
    events:[
      { date:"2024.12.04", title:"계엄 해제 결의 주도",
        desc:"새벽 국회 긴급 소집, 계엄 해제 요구 결의안 가결. 황교안이 체포 선동 대상으로 지목.",
        color:"#22c55e",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412041400001"}] }
    ]
  },

  {
    id:"jung_cr", name:"정청래", role:"더불어민주당 의원", period:"법사위원장",
    color:"#1d4ed8", group:"opposition", ix:.40, iy:.85,
    events:[
      { date:"2024", title:"법제사법위원장",
        desc:"국회 법사위원장으로서 검찰 수사·탄핵 절차 주도.",
        color:"#1d4ed8",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202407011200001"}] }
    ]
  },

  {
    id:"lee_js", name:"이준석", role:"개혁신당 대표", period:"전 국민의힘 대표",
    color:"#f97316", group:"opposition", ix:.55, iy:.80,
    events:[
      { date:"2024", title:"개혁신당 창당",
        desc:"국민의힘 탈당 후 개혁신당 창당. 총선 3석.",
        color:"#f97316",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202402141200001"}] },
      { date:"2025", title:"대선 출마",
        desc:"제21대 대선에 개혁신당 후보로 출마.",
        color:"#f97316",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504281200001"}] }
    ]
  },

  {
    id:"lee_hy", name:"이화영", role:"전 경기도 평화부지사", period:"구속 수감",
    color:"#7c3aed", group:"opposition", ix:.18, iy:.55,
    events:[
      { date:"2023–", title:"쌍방울 대북 송금 혐의",
        desc:"쌍방울 그룹 통한 불법 대북 송금 혐의로 구속 재판. 이재명 연루 주장.",
        color:"#ef4444",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/208564"}] }
    ]
  },

  {
    id:"yu_sm", name:"유시민", role:"작가·전 보건복지부장관", period:"체포 명단 포함",
    color:"#059669", group:"opposition", ix:.04, iy:.68,
    events:[
      { date:"2024.12", title:"내란 세력 체포 명단 포함",
        desc:"노상원 수첩 500여명 체포(수거) 명단에 포함. '반국가세력' 표적.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑫ 사법·검찰 내 내란 연루 인물
  // ════════════════════════════════════════
  {
    id:"sim_wj", name:"심우정", role:"전 검찰총장", period:"내란중요임무종사 피의자 조사",
    color:"#78350f", group:"rebel", ix:.62, iy:.52,
    events:[
      { date:"2024.12.03", title:"계엄 합수부 검사 파견 지시",
        desc:"박성재 전 법무부장관으로부터 지시 받고 계엄 합동수사본부에 검사 파견 검토. 재판부(박성재 1심 판결문)가 '심우정에게 전화해 인력 파견 협조를 지시했다고 봄이 합리적'이라고 적시.",
        color:"#dc2626",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202606241616001/"},
                 {label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606241005573689"}] },
      { date:"2024–2025", title:"김건희 수사 무마 직권남용 혐의",
        desc:"도이치모터스 주가조작 및 디올백 수수 사건에서 김건희를 제대로 조사하지 않고 무혐의 처분하는 데 관여한 혐의(직권남용 권리행사방해).",
        color:"#ef4444",
        sources:[{label:"헤럴드경제", url:"https://biz.heraldcorp.com/article/10786370"}] },
      { date:"2026.06.24", title:"종합특검 피의자 소환 조사",
        desc:"권창영 종합특검, 내란중요임무종사·직권남용 혐의 피의자 신분으로 소환. 묵묵부답으로 출석. 기소 여부 검토 중.",
        color:"#7f1d1d",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/news/article/A2026062216290003665"},
                 {label:"시사저널", url:"https://www.sisajournal.com/news/articleView.html?idxno=377498"}] }
    ]
  },

  {
    id:"cho_hd", name:"조희대", role:"대법원장", period:"윤석열 임명·탄핵안 제출",
    color:"#7c3aed", group:"law", ix:.28, iy:.28,
    events:[
      { date:"2023", title:"윤석열 대통령이 대법원장 임명",
        desc:"윤석열이 지명·임명. 대법관 시절 원세훈 국정원장 댓글공작 무죄 의견, 박근혜 뇌물죄 불성립 소수의견 낸 이력.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512221449011"}] },
      { date:"2024.12.03", title:"비상계엄 선포 직후 침묵",
        desc:"위헌적 비상계엄 선포 당일 대법원장으로서 어떤 입장도 표명하지 않음. 계엄 해제 후에야 안도 성명 발표. 야당 및 법조계 강한 비판.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512221449011"}] },
      { date:"2025.09", title:"이재명 선거법 파기환송(유죄 취지)",
        desc:"대법원 전원합의체, 이재명 선거법 위반 사건을 회부 9일 만에 유죄 취지 파기환송. 대선 정국에 영향. '사법쿠데타' 비판 폭발.",
        color:"#7c3aed",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025100307240000555"}] },
      { date:"2025.09", title:"탄핵소추안 제출",
        desc:"조국혁신당, 조희대 및 대법관 10인 탄핵소추안 제출. 전문가들은 '헌법 위반 입증 어려워' 회의적.",
        color:"#ef4444",
        sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025091612180003293"}] }
    ]
  },

  {
    id:"ji_gy", name:"지귀연", role:"서울중앙지법 부장판사", period:"윤석열 담당 재판장",
    color:"#7c3aed", group:"law", ix:.48, iy:.52,
    events:[
      { date:"2025.02.19", title:"윤석열 내란 1심 무기징역 선고",
        desc:"서울중앙지법 형사25부 재판장으로 내란 우두머리 윤석열에게 무기징역 선고.",
        color:"#7c3aed",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/articleView.html?idxno=216532"}] },
      { date:"2025.03.07", title:"윤석열 구속취소 결정 (71년 관행 뒤집기)",
        desc:"71년간 '날(일)' 단위로 계산하던 구속기간을 '시간' 단위로 계산하는 전례 없는 해석으로 윤석열 구속취소. 지귀연 본인이 2022년 공동 집필한 주석 형사소송법('날 단위')과 정면 배치. 형평성 논란.",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202602191634001"},
                 {label:"법률신문", url:"https://www.lawtimes.co.kr/news/206153"}] },
      { date:"2025.04.13", title:"재판정 촬영 불허 등 '봐주기' 논란",
        desc:"윤석열 재판 전반에서 '봐주기 재판' 논란. 법조계 비판 지속.",
        color:"#b45309",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504131649001"}] }
    ]
  },

  // ════════════════════════════════════════
  // ⑬ 김건희 국정개입·매관매직 관계
  // ════════════════════════════════════════
  {
    id:"kim_kgh", name:"김건희", role:"전 대통령 배우자", period:"매관매직 1심 징역 7년·도이치 2심 징역 4년",
    color:"#be123c", group:"rebel", ix:.46, iy:.39,
    events:[
      { date:"2024.12.03", title:"비상계엄 직접 가담은 없음·사법리스크가 계엄 동기",
        desc:"내란특검 조사결과 계엄 당일 성형외과 방문. 직접 가담 증거 없음. 그러나 특검은 '김건희 사법리스크'가 윤석열의 계엄 선포 동기 중 하나라고 밝힘. 계엄 소식에 윤석열과 크게 싸우며 '너 때문에 다 망쳤다' 발언(진술 확보).",
        color:"#ef4444",
        sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502231712001"},
                 {label:"뉴스1", url:"https://www.news1.kr/amp/society/court-prosecution/6008720"}] },
      { date:"2026.01.28", title:"도이치모터스 주가조작 1심 징역 1년 8개월",
        desc:"서울중앙지법, 통일교 금품수수 일부 유죄. 도이치 주가조작은 1심 무죄.",
        color:"#dc2626",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202604281658263352"}] },
      { date:"2026.04.28", title:"도이치모터스 주가조작 2심 징역 4년",
        desc:"항소심, 1심과 달리 도이치모터스 주가조작 공범 유죄 인정. 징역 4년 선고.",
        color:"#dc2626",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202604281658263352"}] },
      { date:"2026.06.26", title:"매관매직(알선수재) 1심 징역 7년",
        desc:"서울중앙지법 형사합의21부, 특정범죄가중처벌법상 알선수재 전부 유죄. 이봉관 서희건설 회장으로부터 반클리프 목걸이 등 1억380만원, 이배용 전 국가교육위원장으로부터 금거북이 265만원, 서성빈으로부터 바쉐론 콘스탄틴 시계 3990만원 수수. 추징금 6480만원 별도.",
        color:"#7f1d1d",
        sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/articleView.html?idxno=222657"},
                 {label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2026/06/26/20260626500200"}] }
    ]
  },

  {
    id:"myung_tg", name:"명태균", role:"정치 브로커", period:"정치자금법 1심 무죄·증거인멸 교사 유죄",
    color:"#92400e", group:"rebel", ix:.30, iy:.46,
    events:[
      { date:"2021–2022", title:"윤석열·김건희에 여론조사 2억7천만원 무상 제공",
        desc:"대선 출마 준비 기간 중 윤석열·김건희에게 여론조사 2억7천만원 상당 무상 제공. 정치자금법 위반 혐의. 1심 무죄(2026.02).",
        color:"#ef4444",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261606552570"}] },
      { date:"2022", title:"김영선 의원 공천 개입",
        desc:"김영선 전 국민의힘 의원 공천에 개입, 대가로 금품 수수. 김건희 여사의 개입 문자 폭로.",
        color:"#dc2626",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202510220900309203"}] },
      { date:"2026.02.05", title:"정치자금법 1심 무죄·증거인멸 교사 집행유예",
        desc:"창원지법, 정치자금법 위반 혐의 무죄. 그러나 증거인멸 교사 혐의 징역 6개월·집행유예 1년 선고.",
        color:"#b45309",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261606552570"}] }
    ]
  },

  {
    id:"lee_bg", name:"이봉관", role:"서희건설 회장", period:"매관매직 공여 집행유예",
    color:"#78350f", group:"rebel", ix:.38, iy:.47,
    events:[
      { date:"2022.03–05", title:"김건희에 고가 명품 1억380만원 공여",
        desc:"사업 편의 및 맏사위(박성근 전 총리 비서실장) 인사 청탁 명목으로 반클리프 아펠 목걸이·귀걸이 등 1억380만원 상당 금품을 김건희에게 제공.",
        color:"#ef4444",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] },
      { date:"2026.06.26", title:"1심 징역 1년·집행유예 2년",
        desc:"매관매직 연루 금품 공여 혐의 유죄. 실형 면하고 집행유예.",
        color:"#b45309",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] }
    ]
  },

  {
    id:"lee_by", name:"이배용", role:"전 국가교육위원장", period:"증거인멸 교사 집행유예",
    color:"#78350f", group:"rebel", ix:.26, iy:.47,
    events:[
      { date:"2022.04–06", title:"김건희에 금거북이 265만원 공여",
        desc:"로봇개 사업 관련 도움 청탁 명목으로 금거북이 265만원 상당 제공.",
        color:"#ef4444",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] },
      { date:"2026.06.26", title:"증거인멸 교사 1심 집행유예",
        desc:"증거인멸 교사 혐의 유죄. 징역 10개월·집행유예 2년 선고.",
        color:"#b45309",
        sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] }
    ]
  }

], // end nodes


// ═══════════════════════════════════════════
// 링크 (관계) 데이터
// ─ source, target : 노드 id
// ─ type  : support / conflict / rebel / mixed / legal
// ─ color : 선 색상
// ─ label : 관계 설명 (짧게)
// ─ dash  : SVG stroke-dasharray (점선이면 "6,4" 등)
// ─ distance : 시뮬레이션 거리
// ─ relation : 패널 상세 정보
//     { desc, timeline:[{date,event}], sources:[{label,url}] }
// ═══════════════════════════════════════════
links: [

  // ── 윤석열 ↔ 내란 군 핵심 ─────────────────
  {
    source:"yoon", target:"kim_yh", type:"rebel", color:"#dc2626",
    label:"국방장관·내란 핵심 기획", distance:130,
    relation:{ desc:"김용현 국방부장관이 비상계엄 선포 핵심 기획자. 계엄 직후 사임, 체포. 1심 징역 30년.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412042200001"}] }
  },
  {
    source:"yoon", target:"noh", type:"rebel", color:"#dc2626",
    label:"계엄 핵심 모의·500명 체포 명단", distance:135,
    relation:{ desc:"노상원 정보사령관과 계엄 핵심 모의. 500여명 체포 명단 작성. 롯데리아 회동 계엄 사전 모의 주도.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412181200001"}] }
  },
  {
    source:"yoon", target:"jung_js", type:"rebel", color:"#ef4444",
    label:"비서실장·내란 관여", distance:150,
    relation:{ desc:"정진석은 대통령비서실장으로 계엄 전후 관여. 헌재 재판관 임명 방해 등 혐의.",
      sources:[{label:"시사IN", url:"https://www.sisain.co.kr/news/articleView.html?idxno=57067"}] }
  },
  {
    source:"yoon", target:"park_jj", type:"rebel", color:"#ef4444",
    label:"경호처·공수처 압수수색 방해", distance:145,
    relation:{ desc:"박종준 경호처장이 공수처 압수수색·체포 영장 집행 방해 혐의.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412121400001"}] }
  },
  {
    source:"yoon", target:"cho_tay", type:"rebel", color:"#ef4444",
    label:"국정원장·계엄 정당화", distance:145,
    relation:{ desc:"조태용 국정원장이 계엄 정당화 메시지 동맹국 전달 지시. 국회 위증 혐의.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511281132001"}] }
  },
  {
    source:"yoon", target:"shin_ws", type:"rebel", color:"#ef4444",
    label:"전 국방장관·계엄 관여", distance:155,
    relation:{ desc:"신원식 전 국방부장관이 계엄 준비 관여 혐의.",
      sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0101_202502121857245997"}] }
  },
  {
    source:"yoon", target:"han_ds", type:"rebel", color:"#ef4444",
    label:"국무총리·내란 가담", distance:160,
    relation:{ desc:"한덕수 국무총리가 국무회의 심의로 계엄 선포 절차적 외관 형성. 1심 징역 23년.",
      sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/2026/01/22/20260122001004"}] }
  },
  {
    source:"yoon", target:"lee_sm", type:"rebel", color:"#dc2626",
    label:"행안장관·언론 단전 지시", distance:150,
    relation:{ desc:"이상민 행안부장관이 윤석열 지시로 언론사 단전·단수 경찰청·소방청에 전달. 1심 징역 7년.",
      sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025081918040003531"}] }
  },
  {
    source:"yoon", target:"park_sj", type:"rebel", color:"#dc2626",
    label:"법무장관·내란 가담", distance:155,
    relation:{ desc:"박성재 법무장관이 국무회의 계엄 가담. 1심 징역 25년 (구형보다 5년 초과).",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202606222142005"}] }
  },
  {
    source:"yoon", target:"choi_sm", type:"rebel", color:"#f59e0b",
    label:"경제부총리·직무유기", distance:160,
    relation:{ desc:"최상목 경제부총리가 권한대행 시 헌재 재판관 미임명 직무유기. 기소.",
      sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
  },
  {
    source:"yoon", target:"kim_jh", type:"rebel", color:"#ef4444",
    label:"민정수석·직권남용", distance:150,
    relation:{ desc:"김주현 민정수석이 계엄 당일 황교안에게 문자. 직권남용 기소.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] }
  },
  {
    source:"yoon", target:"lee_wm", type:"rebel", color:"#ef4444",
    label:"공직기강비서관·직권남용", distance:150,
    relation:{ desc:"이원모 공직기강비서관 직권남용 권리행사방해 기소.",
      sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
  },
  {
    source:"yoon", target:"hwang_kya", type:"rebel", color:"#dc2626",
    label:"전 총리·내란선동", distance:175,
    relation:{ desc:"황교안 전 총리가 계엄 선포 직후 SNS로 우원식·한동훈 체포 선동. 불구속 기소.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511121902001"}] }
  },
  {
    source:"yoon", target:"kwon_sd", type:"support", color:"#f59e0b",
    label:"친윤 핵심", distance:185,
    relation:{ desc:"권성동은 친윤 핵심으로 탄핵 이후에도 당 장악 시도.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412121155001"}] }
  },
  {
    source:"yoon", target:"choo_kh", type:"rebel", color:"#ef4444",
    label:"원내대표·내란중요임무", distance:185,
    relation:{ desc:"추경호 원내대표가 내란중요임무종사 혐의로 불구속 기소.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] }
  },
  {
    source:"yoon", target:"lee_wr", type:"rebel", color:"#ef4444",
    label:"법제처장·위증 기소", distance:170,
    relation:{ desc:"이완규 법제처장이 국회 위증 혐의로 기소.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504092037005"}] }
  },
  {
    source:"yoon", target:"ahn_cs", type:"mixed", color:"#f59e0b",
    label:"대선 단일화→갈등", dash:"4,3", distance:200,
    relation:{ desc:"2022년 대선 단일화 후 당내 갈등 반복.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202203030900001"}] }
  },
  {
    source:"yoon", target:"hong_jp", type:"conflict", color:"#ef4444",
    label:"친윤 갈등", dash:"6,4", distance:220,
    relation:{ desc:"홍준표는 윤석열 계엄을 강력 비판. 대선 불출마.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412041400001"}] }
  },
  {
    source:"yoon", target:"kim_ms", type:"support", color:"#f59e0b",
    label:"노동장관 임명", distance:195,
    relation:{ desc:"윤석열이 김문수를 고용노동부장관으로 임명.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202312280900001"}] }
  },
  {
    source:"yoon", target:"lee_jm", type:"conflict", color:"#ef4444",
    label:"검사→대통령 숙적 관계", dash:"6,4", distance:215,
    relation:{ desc:"이재명 수사 출신 윤석열과 이재명의 정치적 숙적 관계. 내란 체포 명단에도 포함.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202203091023001"}] }
  },
  {
    source:"yoon", target:"han_dh", type:"conflict", color:"#ef4444",
    label:"탄핵 가결 충돌", dash:"6,4", distance:170,
    relation:{ desc:"한동훈 국민의힘 대표가 윤석열 탄핵에 찬성을 선언하며 충돌.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412071130001"}] }
  },

  // ── 경호처 내부 연결 ────────────────────────
  {
    source:"park_jj", target:"kim_shn", type:"rebel", color:"#dc2626",
    label:"경호처 체포 저지 지휘", distance:100,
    relation:{ desc:"박종준 경호처장이 김성훈 차장에게 체포 영장 집행 저지 지시. 두 사람 모두 징역 7년 구형.",
      sources:[{label:"세계일보", url:"https://www.segye.com/newsView/20260601516845"}] }
  },
  {
    source:"park_jj", target:"lee_gw", type:"rebel", color:"#dc2626",
    label:"경호처 경호본부 지휘", distance:100,
    relation:{ desc:"박종준 경호처장 지휘 하에 이광우 경호본부장이 압수수색·체포 저지 가담.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501141617001"}] }
  },

  // ── 국정원 라인 ─────────────────────────────
  {
    source:"cho_tay", target:"hong_jw", type:"rebel", color:"#ef4444",
    label:"국정원 계엄 정당화 지시", distance:110,
    relation:{ desc:"조태용 국정원장이 홍장원 1차장에게 동맹국 계엄 정당화 메시지 전달 지시.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202511191446001"}] }
  },

  // ── 안보실 라인 ─────────────────────────────
  {
    source:"yoon", target:"lim_jd", type:"rebel", color:"#ef4444",
    label:"안보실 2차장·직권남용", distance:165,
    relation:{ desc:"임종득 안보실 2차장 부적절 인사 청탁 개입. 불구속 기소.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512081454001"}] }
  },

  // ── 민정수석·내란선동 연결 ─────────────────
  {
    source:"kim_jh", target:"hwang_kya", type:"rebel", color:"#dc2626",
    label:"계엄 당일 내란선동 연계", distance:130,
    relation:{ desc:"민정수석 김주현이 계엄 직후 황교안에게 3회 통화. 내란선동 연계 의혹.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] }
  },
  {
    source:"hwang_kya", target:"woo_ws", type:"rebel", color:"#dc2626",
    label:"체포 선동 표적", dash:"6,4", distance:200,
    relation:{ desc:"황교안이 SNS에 우원식 국회의장 체포를 촉구하는 게시물 올림.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] }
  },
  {
    source:"hwang_kya", target:"han_dh", type:"rebel", color:"#dc2626",
    label:"체포 선동 표적", dash:"6,4", distance:200,
    relation:{ desc:"황교안이 SNS에 한동훈 국민의힘 대표 체포를 촉구하는 게시물 올림.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512091445001"}] }
  },

  // ── 권한대행 계보 ────────────────────────────
  {
    source:"han_ds", target:"choi_sm", type:"support", color:"#f59e0b",
    label:"권한대행 계승", distance:120,
    relation:{ desc:"한덕수 탄핵 소추 후 최상목이 3차 권한대행 계승.",
      sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
  },
  {
    source:"choi_sm", target:"moon_hb", type:"conflict", color:"#ef4444",
    label:"헌재 재판관 미임명", dash:"6,4", distance:155,
    relation:{ desc:"최상목 권한대행이 마은혁 헌재 재판관 임명 거부. 직무유기 기소.",
      sources:[{label:"서울신문", url:"https://www.seoul.co.kr/news/society/law/2025/12/12/20251212009008"}] }
  },
  {
    source:"han_ds", target:"moon_hb", type:"conflict", color:"#ef4444",
    label:"헌재 재판관 임명 거부", dash:"6,4", distance:165,
    relation:{ desc:"한덕수 권한대행이 헌재 재판관 임명을 거부하며 위헌 논란.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412281144001"}] }
  },

  // ── 경찰 라인 ───────────────────────────────
  {
    source:"cho_jh", target:"kim_bs", type:"rebel", color:"#dc2626",
    label:"경찰 국회 봉쇄 지휘 라인", distance:105,
    relation:{ desc:"조지호 경찰청장→김봉식 서울경찰청장으로 이어지는 국회 봉쇄 지휘 라인.",
      sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0103_202602191715230814"}] }
  },
  {
    source:"yoon", target:"cho_jh", type:"rebel", color:"#dc2626",
    label:"경찰청장·국회 봉쇄 지시", distance:145,
    relation:{ desc:"조지호 경찰청장이 경찰 병력 국회 출입 전면 차단 지시. 1심 징역 12년.",
      sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0103_202602191715230814"}] }
  },

  // ── 군 내란 연결 ─────────────────────────────
  {
    source:"noh", target:"yeo_ih", type:"rebel", color:"#dc2626",
    label:"방첩사 계엄 모의", distance:115,
    relation:{ desc:"노상원 정보사령관과 여인형 방첩사령관이 계엄 핵심 모의. 정치인 체포조 편성.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412181200001"}] }
  },
  {
    source:"noh", target:"kwak", type:"rebel", color:"#dc2626",
    label:"계엄 작전 지휘", distance:125,
    relation:{ desc:"노상원이 곽종근 특수전사령관에게 계엄 작전 지시.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412181200001"}] }
  },
  {
    source:"noh", target:"moon_sh", type:"rebel", color:"#dc2626",
    label:"정보사 요원 명단 누설", distance:115,
    relation:{ desc:"문상호 정보사령관이 노상원에게 정보사 요원 40여명 명단 누설. 비선 제2수사단 구성.",
      sources:[{label:"한국일보", url:"https://www.hankookilbo.com/news/article/amp/A2026051514400000619"}] }
  },
  {
    source:"yeo_ih", target:"kwak", type:"rebel", color:"#dc2626",
    label:"계엄 병력 투입 지시", distance:115,
    relation:{ desc:"여인형 방첩사령관이 곽종근에게 국회 봉쇄 병력 투입 지시.",
      sources:[{label:"뉴시스", url:"https://www.newsis.com/view/NISX20241210_0002991479"}] }
  },
  {
    source:"kwak", target:"park_as", type:"rebel", color:"#dc2626",
    label:"육군 계엄 병력 동원", distance:105,
    relation:{ desc:"곽종근 특수전사령관이 박안수 육군참모총장과 계엄 병력 동원.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501031057001"}] }
  },
  {
    source:"kwak", target:"lee_jw", type:"rebel", color:"#dc2626",
    label:"수도방위 계엄 배치", distance:105,
    relation:{ desc:"곽종근이 이진우 수도방위사령관과 계엄 병력 배치.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412101400001"}] }
  },
  {
    source:"kwak", target:"kim_ht", type:"rebel", color:"#dc2626",
    label:"707특임단 국회 투입 지시", distance:110,
    relation:{ desc:"곽종근 특전사령관 지시로 김현태 707특임단장이 헬기로 국회 투입.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504181502001"}] }
  },
  {
    source:"kim_yh", target:"shin_ws", type:"support", color:"#6e7681",
    label:"전·현 국방장관 연계", distance:130,
    relation:{ desc:"신원식 전임 국방장관, 김용현 후임 국방장관.",
      sources:[{label:"YTN", url:"https://www.ytn.co.kr/_ln/0101_202502121857245997"}] }
  },
  {
    source:"noh", target:"yu_sm", type:"rebel", color:"#ef4444",
    label:"체포 명단 포함", dash:"6,4", distance:200,
    relation:{ desc:"노상원 수첩의 500여명 체포 명단에 유시민 포함.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502062022001"}] }
  },

  // ── 사법·수사 ───────────────────────────────
  {
    source:"oh_dw", target:"yoon", type:"legal", color:"#a855f7",
    label:"현직 대통령 체포·구속", distance:200,
    relation:{ desc:"오동운 공수처장이 현직 대통령 최초 체포 영장 집행.",
      timeline:[{date:"2025.01.03",event:"1차 체포 시도 실패"},{date:"2025.01.15",event:"2차 체포 성공"}],
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202501152155001"}] }
  },
  {
    source:"oh_dw", target:"park_jj", type:"legal", color:"#a855f7",
    label:"경호처 압수수색 집행", distance:165,
    relation:{ desc:"공수처가 대통령경호처 압수수색 시도. 박종준 경호처장 저지.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412121400001"}] }
  },
  {
    source:"moon_hb", target:"yoon", type:"legal", color:"#a855f7",
    label:"탄핵 인용·파면 선고", distance:205,
    relation:{ desc:"헌재 8인 전원일치 탄핵 인용. 파면 선고.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504041000001"}] }
  },
  {
    source:"moon_hb", target:"cho_jh", type:"legal", color:"#a855f7",
    label:"경찰청장 탄핵 파면", distance:185,
    relation:{ desc:"헌재 재판관 전원일치로 조지호 경찰청장 탄핵 인용·파면.",
      sources:[{label:"뉴스1", url:"https://www.news1.kr/society/court-prosecution/6012955"}] }
  },

  // ── 문재인 측 ───────────────────────────────
  {
    source:"moon", target:"yoon", type:"mixed", color:"#f59e0b",
    label:"검찰총장 임명→극한 갈등", dash:"6,4", distance:205,
    relation:{ desc:"문재인이 2019년 검찰개혁 목적으로 윤석열 파격 발탁. 이후 극한 갈등. 2025년 '임명 후회' 언급.",
      timeline:[{date:"2019.07",event:"윤석열 검찰총장 임명"},{date:"2020",event:"검찰-법무부 갈등"},{date:"2021",event:"윤석열 사퇴·대선 출마"}],
      sources:[{label:"Comparative Connections", url:"https://cc.pacforum.org/2022/05/from-moon-to-yoon-end-of-an-era/"}] }
  },
  {
    source:"moon", target:"choo", type:"support", color:"#22c55e",
    label:"법무장관 임명", distance:170,
    relation:{ desc:"문재인이 추미애를 법무부장관으로 임명. 검찰개혁 추진.",
      sources:[{label:"매일신문", url:"https://www.imaeil.com/page/view/2020112419383400388"}] }
  },
  {
    source:"moon", target:"cho_kuk", type:"mixed", color:"#f59e0b",
    label:"법무장관→조국 사태", dash:"4,3", distance:175,
    relation:{ desc:"문재인이 조국을 법무장관으로 임명했으나 35일 만에 사퇴.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202402081926005"}] }
  },
  {
    source:"moon", target:"lee_jm", type:"mixed", color:"#22c55e",
    label:"민주당 내 관계", dash:"4,3", distance:185,
    relation:{ desc:"같은 민주당 계열이나 대선 후 관계 복잡.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504241703001"}] }
  },

  // ── 이재명 측 ───────────────────────────────
  {
    source:"lee_jm", target:"park_cd", type:"support", color:"#3b82f6",
    label:"민주당 원내·탄핵 주도", distance:145,
    relation:{ desc:"박찬대가 이재명 대표 체제 민주당 원내대표로 탄핵 주도.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412141200001"}] }
  },
  {
    source:"lee_jm", target:"woo_ws", type:"support", color:"#3b82f6",
    label:"국회의장 선출", distance:165,
    relation:{ desc:"민주당 주도로 우원식을 국회의장으로 선출. 12·3 계엄 해제 결의 주재.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202406051200001"}] }
  },
  {
    source:"lee_jm", target:"cho_kuk", type:"mixed", color:"#3b82f6",
    label:"야권 협력·갈등", dash:"4,3", distance:165,
    relation:{ desc:"조국혁신당과 민주당의 야권 협력 및 경쟁 관계.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202404111400001"}] }
  },
  {
    source:"lee_jm", target:"lee_hy", type:"legal", color:"#a855f7",
    label:"쌍방울 대북 의혹 연루", distance:165,
    relation:{ desc:"이화영 재판에서 이재명 경기도지사 시절 대북 송금 의혹 연루 주장.",
      sources:[{label:"법률신문", url:"https://www.lawtimes.co.kr/news/208564"}] }
  },
  {
    source:"lee_jm", target:"lee_js", type:"mixed", color:"#f59e0b",
    label:"야권 협력·대선 경쟁", dash:"4,3", distance:170,
    relation:{ desc:"이준석 개혁신당과 협력 모색하다 갈등. 대선에서 경쟁.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202402141200001"}] }
  },
  {
    source:"jung_cr", target:"lee_jm", type:"support", color:"#3b82f6",
    label:"민주당 법사위·탄핵 절차 주도", distance:155,
    relation:{ desc:"정청래 법사위원장이 이재명 대표 체제에서 탄핵 절차 추진.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202412201200001"}] }
  },
  {
    source:"woo_ws", target:"yoon", type:"legal", color:"#a855f7",
    label:"탄핵 소추안 의결 주관", distance:205,
    relation:{ desc:"우원식 국회의장이 탄핵 소추안 표결 주재. 204표 가결.",
      sources:[{label:"SBS뉴스", url:"https://news.sbs.co.kr/news/endPage.do?news_id=N1007912230"}] }
  },
  {
    source:"han_dh", target:"lee_jm", type:"conflict", color:"#ef4444",
    label:"대선 맞대결", dash:"6,4", distance:205,
    relation:{ desc:"한동훈과 이재명이 2025년 대선에서 맞대결.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504281200001"}] }
  },

  // ── 검찰·사법 내란 연루 ─────────────────────
  {
    source:"park_sj", target:"sim_wj", type:"rebel", color:"#dc2626",
    label:"계엄 합수부 검사 파견 지시", distance:120,
    relation:{ desc:"박성재 전 법무장관이 심우정 검찰총장에게 전화해 계엄 합동수사본부 검사 파견 협조 지시. 박성재 1심 판결문에 명시.",
      sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606241005573689"}] }
  },
  {
    source:"sim_wj", target:"kim_kgh", type:"rebel", color:"#ef4444",
    label:"김건희 수사 무마 직권남용", distance:130,
    relation:{ desc:"도이치모터스·디올백 사건 수사 과정에서 김건희 무혐의 처분에 관여. 직권남용 혐의.",
      sources:[{label:"헤럴드경제", url:"https://biz.heraldcorp.com/article/10786370"}] }
  },
  {
    source:"yoon", target:"cho_hd", type:"support", color:"#b45309",
    label:"대법원장 임명", distance:170,
    relation:{ desc:"윤석열이 2023년 조희대를 대법원장으로 지명·임명. 계엄 직후 침묵, 이재명 선거법 파기환송으로 '사법쿠데타' 비판.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512221449011"}] }
  },
  {
    source:"cho_hd", target:"lee_jm", type:"legal", color:"#a855f7",
    label:"이재명 선거법 파기환송(유죄취지)", dash:"6,4", distance:195,
    relation:{ desc:"대법원 전원합의체, 이재명 선거법 사건 유죄 취지 파기환송(2025.09). 9일 만의 신속 결정. 대선 정국에 파장.",
      sources:[{label:"한국일보", url:"https://www.hankookilbo.com/News/Read/A2025100307240000555"}] }
  },
  {
    source:"ji_gy", target:"yoon", type:"legal", color:"#a855f7",
    label:"무기징역 선고·구속취소 결정", distance:160,
    relation:{ desc:"지귀연 부장판사가 내란 1심 재판장으로 무기징역 선고. 이후 71년 관행 뒤집는 '시간 계산' 적용으로 구속취소 결정 논란.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202504131649001"},
               {label:"법률신문", url:"https://www.lawtimes.co.kr/news/206153"}] }
  },
  {
    source:"cho_hd", target:"ji_gy", type:"support", color:"#7c3aed",
    label:"사법부 내 관계", dash:"4,3", distance:135,
    relation:{ desc:"조희대 대법원장 체제 하의 서울중앙지법 재판부. 구속취소 결정에 대법원장이 침묵.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202602191634001"}] }
  },

  // ── 김건희 국정개입·매관매직 ───────────────
  {
    source:"yoon", target:"kim_kgh", type:"mixed", color:"#be123c",
    label:"배우자·사법리스크가 계엄 동기", distance:135,
    relation:{ desc:"특검 조사 결과 김건희는 계엄 선포에 직접 가담하지 않음. 그러나 특검은 '김건희 사법리스크(도이치 주가조작·매관매직 등)'가 윤석열 계엄 선포의 주요 동기 중 하나라고 판단. 계엄 당일 윤석열과 크게 싸우며 '너 때문에 다 망쳤다' 발언.",
      sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202502231712001"},
               {label:"뉴스1", url:"https://www.news1.kr/amp/society/court-prosecution/6008720"}] }
  },
  {
    source:"kim_kgh", target:"myung_tg", type:"rebel", color:"#dc2626",
    label:"공천개입·여론조사 무상수수", distance:120,
    relation:{ desc:"명태균이 윤석열·김건희에게 여론조사 2억7천만원 무상 제공. 김영선 의원 공천 개입 시 김건희 개입 문자 폭로. 특검 기소.",
      sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202510220900309203"}] }
  },
  {
    source:"myung_tg", target:"yoon", type:"rebel", color:"#ef4444",
    label:"정치자금법 위반 기소", distance:140,
    relation:{ desc:"명태균이 윤석열에게 여론조사 무상 제공, 정치자금법 위반 혐의. 1심 무죄(2026.02).",
      sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261606552570"}] }
  },
  {
    source:"lee_bg", target:"kim_kgh", type:"rebel", color:"#dc2626",
    label:"매관매직 금품 공여", distance:110,
    relation:{ desc:"이봉관 서희건설 회장이 인사 청탁 명목으로 반클리프 아펠 목걸이 등 1억380만원 제공. 1심 집행유예.",
      sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] }
  },
  {
    source:"lee_by", target:"kim_kgh", type:"rebel", color:"#dc2626",
    label:"매관매직 금품 공여", distance:110,
    relation:{ desc:"이배용 전 국가교육위원장이 사업 청탁 명목으로 금거북이 265만원 제공. 증거인멸 교사로 집행유예.",
      sources:[{label:"파이낸셜뉴스", url:"https://www.fnnews.com/news/202606261557531415"}] }
  }

], // end links


// ═══════════════════════════════════════════
// 정치인 DB (기사 분석 패널용)
// ─ exists:true  → 이미 네트워크에 있는 인물
// ─ exists 없음  → 기사에서 발견 시 새로 추가 가능
// ─ mainLinks    → 새 인물 추가 시 자동 연결할 기존 노드
// ═══════════════════════════════════════════
politicianDB: [
  // ── 현재 네트워크에 있는 인물 (exists:true) ──
  {name:"문재인",  id:"moon",    color:"#0d9488", exists:true},
  {name:"윤석열",  id:"yoon",    color:"#dc2626", exists:true},
  {name:"이재명",  id:"lee_jm",  color:"#1d4ed8", exists:true},
  {name:"한덕수",  id:"han_ds",  color:"#7f1d1d", exists:true},
  {name:"이상민",  id:"lee_sm",  color:"#7f1d1d", exists:true},
  {name:"박성재",  id:"park_sj", color:"#7f1d1d", exists:true},
  {name:"황교안",  id:"hwang_kya",color:"#92400e",exists:true},
  {name:"최상목",  id:"choi_sm", color:"#b45309", exists:true},
  {name:"김주현",  id:"kim_jh",  color:"#b45309", exists:true},
  {name:"이원모",  id:"lee_wm",  color:"#b45309", exists:true},
  {name:"임종득",  id:"lim_jd",  color:"#78350f", exists:true},
  {name:"박종준",  id:"park_jj", color:"#7f1d1d", exists:true},
  {name:"김성훈",  id:"kim_shn", color:"#7f1d1d", exists:true},
  {name:"이광우",  id:"lee_gw",  color:"#7f1d1d", exists:true},
  {name:"조태용",  id:"cho_tay", color:"#78350f", exists:true},
  {name:"홍장원",  id:"hong_jw", color:"#78350f", exists:true},
  {name:"조지호",  id:"cho_jh",  color:"#7f1d1d", exists:true},
  {name:"김봉식",  id:"kim_bs",  color:"#b45309", exists:true},
  {name:"한동훈",  id:"han_dh",  color:"#b45309", exists:true},
  {name:"김문수",  id:"kim_ms",  color:"#92400e", exists:true},
  {name:"권성동",  id:"kwon_sd", color:"#b45309", exists:true},
  {name:"추경호",  id:"choo_kh", color:"#b45309", exists:true},
  {name:"홍준표",  id:"hong_jp", color:"#92400e", exists:true},
  {name:"안철수",  id:"ahn_cs",  color:"#3b82f6", exists:true},
  {name:"정진석",  id:"jung_js", color:"#b45309", exists:true},
  {name:"신원식",  id:"shin_ws", color:"#78350f", exists:true},
  {name:"김용현",  id:"kim_yh",  color:"#7f1d1d", exists:true},
  {name:"노상원",  id:"noh",     color:"#7f1d1d", exists:true},
  {name:"문상호",  id:"moon_sh", color:"#7f1d1d", exists:true},
  {name:"여인형",  id:"yeo_ih",  color:"#7f1d1d", exists:true},
  {name:"곽종근",  id:"kwak",    color:"#7f1d1d", exists:true},
  {name:"박안수",  id:"park_as", color:"#7f1d1d", exists:true},
  {name:"이진우",  id:"lee_jw",  color:"#7f1d1d", exists:true},
  {name:"김현태",  id:"kim_ht",  color:"#7f1d1d", exists:true},
  {name:"이완규",  id:"lee_wr",  color:"#7c3aed", exists:true},
  {name:"문형배",  id:"moon_hb", color:"#7c3aed", exists:true},
  {name:"오동운",  id:"oh_dw",   color:"#7c3aed", exists:true},
  {name:"추미애",  id:"choo",    color:"#059669", exists:true},
  {name:"조국",    id:"cho_kuk", color:"#7c3aed", exists:true},
  {name:"박찬대",  id:"park_cd", color:"#1d4ed8", exists:true},
  {name:"우원식",  id:"woo_ws",  color:"#1d4ed8", exists:true},
  {name:"정청래",  id:"jung_cr", color:"#1d4ed8", exists:true},
  {name:"이준석",  id:"lee_js",  color:"#f97316", exists:true},
  {name:"이화영",  id:"lee_hy",  color:"#7c3aed", exists:true},
  {name:"유시민",  id:"yu_sm",   color:"#059669", exists:true},
  {name:"김건희",  id:"kim_kgh", color:"#be123c", exists:true},
  {name:"명태균",  id:"myung_tg",color:"#92400e", exists:true},
  {name:"이봉관",  id:"lee_bg",  color:"#78350f", exists:true},
  {name:"이배용",  id:"lee_by",  color:"#78350f", exists:true},
  {name:"심우정",  id:"sim_wj",  color:"#78350f", exists:true},
  {name:"조희대",  id:"cho_hd",  color:"#7c3aed", exists:true},
  {name:"지귀연",  id:"ji_gy",   color:"#7c3aed", exists:true},

  // ── 기사 분석 시 새로 추가 가능한 인물 ───────
  {
    name:"임종석", id:"lim_js", color:"#0d9488",
    role:"전 청와대 비서실장", period:"문재인 측근",
    mainLinks:[{target:"moon", type:"support", color:"#22c55e", label:"비서실장"}],
    events:[{date:"2017–2019", title:"청와대 비서실장",
      desc:"문재인 정부 초대 비서실장. 최측근.",
      color:"#0d9488", sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202312010900001"}]}]
  },
  {
    name:"목현태", id:"mok_ht", color:"#7f1d1d",
    role:"전 서울청 국회경비대장", period:"1심 징역 3년",
    mainLinks:[{target:"cho_jh", type:"rebel", color:"#dc2626", label:"경찰 국회봉쇄"}],
    events:[{date:"2024.12.03", title:"국회 출입 통제·1심 징역 3년",
      desc:"서울경찰청 국회경비대장으로 계엄 당일 국회 출입 통제. 1심 징역 3년 선고.",
      color:"#7f1d1d", sources:[{label:"코트워치", url:"https://c-watch.org/project/insurrection"}]}]
  },
  {
    name:"박헌수", id:"park_hs", color:"#7f1d1d",
    role:"전 국방부 조사본부장", period:"내란 기소",
    mainLinks:[{target:"kim_yh", type:"rebel", color:"#dc2626", label:"국방부 내란"}],
    events:[{date:"2024.12.03", title:"국방부 조사본부장으로 내란 가담",
      desc:"내란중요임무종사 혐의 기소.",
      color:"#7f1d1d", sources:[{label:"코트워치", url:"https://c-watch.org/project/insurrection"}]}]
  },
  {
    name:"윤재순", id:"yoon_js", color:"#b45309",
    role:"전 대통령실 총무비서관", period:"직권남용 기소",
    mainLinks:[{target:"yoon", type:"rebel", color:"#ef4444", label:"청와대 내부"}],
    events:[{date:"2025.12.08", title:"직권남용 불구속 기소",
      desc:"안보실 인사 청탁 개입 관련 직권남용 기소.",
      color:"#b45309", sources:[{label:"경향신문", url:"https://www.khan.co.kr/article/202512081454001"}]}]
  },
  {
    name:"강의구", id:"kang_ug", color:"#b45309",
    role:"전 대통령비서실 제1부속실장", period:"허위공문서작성 기소",
    mainLinks:[{target:"yoon", type:"rebel", color:"#ef4444", label:"청와대 내부"}],
    events:[{date:"2025", title:"허위공문서작성 등 기소",
      desc:"허위공문서작성 혐의 기소.",
      color:"#b45309", sources:[{label:"코트워치", url:"https://c-watch.org/project/insurrection"}]}]
  }
] // end politicianDB

}; // end window.POLITICIANS_DATA
