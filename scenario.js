const textGame = new TextGame();

const branch_1 = new Branch("branch_1", "branch_2") // 내 대학생활은 어떻게...
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/1-howto.png"),
    SoundEvent.background("audio/background/1-dokidoki.mp3"),
    TextBarEvent.text(null, "[2027년 3월]"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "나는 이제 막 대학에 합격한 27학번 아기 새내기(新入生).")
  ])
  .addTextPage(null, "엄마가 대학 가면 여친(彼女) 생기고 살 빠지고 잘생겨진다고 했는데...")
  .addTextPage(null, "나도 이제 연애(恋愛)를 할 수 있는 걸까?")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text(null, "(카톡!)")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "[휴대폰 화면]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("학생회장", "내일 새내기 배움터 행사가 진행됩니다.(明日、セトのイベントがあります) ... (중략／省略)")
  ])
  .addTextPage("나", "뭐? 내일 새내기 배움터라고?")
  .addTextPage(null, "반드시 참여해야겠지? 설레는 마음으로(ウキウキした気持ちで) 짐을 싸고(荷物を準備して) 잠에 든다.")
textGame.addBranch(branch_1);

const branch_2 = new Branch("branch_2", "branch_3_1") // 새내기 배움터
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/2-saeter.png"),
    TextBarEvent.text(null, "[강당 안]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/2-saeter.mp3"),
    DelayEvent.delay(2000),
  ])
  .addTextPage("나", "와... 이게 말로만 듣던(噂で聞いてた) 새내기 배움터? 줄여서(略して) 새터(セト)? 근데 다 모르는 사람들 뿐이네...")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow",
      "images/characters/Shadow.png",
      modelPosition.center,
      imageShowType.FadeIn
    )
  ])
  .addTextPage("선배1", "공학계열 신입생 여러분 안녕하세요~(工学部の新入生の皆さんこんにちは) 새터를 시작하기에 앞서 여러분께 전공 진입 관련 공지(専攻に関するお知らせ)를 드릴게요!")
  .addTextPage("교수", "엣헴, 반갑다. 제군들은!(諸君たちは) 철저한 경쟁(徹底的な競争)을 통해 전공을 선택할 수 있다. 학점이 높은 순에 따라(成績順に) 전공 선택 우선권(専攻を選択するための優先権)이 부여된다.")
  .addTextPage("교수", "학점(成績)이 낮으면! 원하는 학과에 갈 수 없다. 그러니 1학년 때부터 부지런히(ちゃんと) 공부하라구!")
  .addTextPage("학생들", "(수군수군) 저 선배, 학점 3.0 받아서 화학공학과(化学工学部) 떨어졌대!")
  .addTextPage(null, "하... 대학에 와서도 공부라니...(大学でもこんなに勉強せなあかんの？！)")
  .addTextPage("선배1", "하하, 여러분! 벌써부터 너무 겁먹지 마시구요~(そこまでビビらなくても、ええで！) 분위기도 업~! 시킬겸(テンションを上げる意味でも) 동아리 공연(サークル公演) 시작할게요~!")

  .addEventsAsPage([
    TextBarEvent.text(null, "[그 때...(その時)]"),
    DelayEvent.delay(1000),
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/2-saeter.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    SoundEvent.sfx("audio/ayeon.mp3")
  ])
  .addTextPage("아연", "여러분, 안녕하세요~ 저희는 공과대학 소속(工学部所属) 밴드부(バンド部’)) “기계들의 합창”이고요~ 저는 보컬(ボーカル)을 맡은 곽아연이라고 합니다~")
  .addTextPage("아연", "그럼 지금부터! 아이유의 내 손을 잡아~ 공연 시작해 볼게요!")
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/2-iu.mp3"),
    TextBarEvent.text(null, "(아연이 노래를 부른다)")
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/heartbreak.mp3"),
  ])
  .addTextPage("나", "오… 이런… ‘My Goddess’... 나… 아연누나에게… 첫 눈에 반해버린 것 같아(一目惚れしてもうた)…")
textGame.addBranch(branch_2);

const branch_3_1 = new Branch("branch_3_1", null) // 수강신청
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/3-susin.jpg"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "[PC방]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/3-susin.mp3"),
  ])
  .addTextPage(null, "선배들이 알려준 대로 수강신청(履修登録)을 하러 왔다. 와… PC방(ネカフェ)에 사람이 정말 많네?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/3-sugang.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
  ])
  .addTextPage("아연", "어라? 새터에서 봤던 후배님(後輩)?")
  .addTextPage(null, "헉! 아연 누나가 왜 여기에?")
  .addTextPage("나", "누나 안녕하세요... 수강신청 하러 오셨어요?")
  .addTextPage("아연", "응응~ 오늘 10시! 너 어떤 과목 들어?")
  .addTextPage("나", "일반물리학, 일반화학, 영어쓰기, 프로그래밍기초와실습, 창의적글쓰기, 미분적분학1… 아무튼 16학점(16単位) 들어요.")
  .addTextPage("아연", "나중에 나랑 교양(教養科目) 같이 듣자!")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("좋아요 누나!", "branch_3_1_1", 5),
      new BranchPair("무슨 소리세요?(何言ってるんですか？) 졸업하셔야죠.", "branch_3_1_2", -5)
    ])
  ]);
textGame.addBranch(branch_3_1);

const branch_3_1_1 = new Branch("branch_3_1_1", "branch_3_2")
  .addTextPage("아연", "응응 ㅎㅎ 나 옆자리에 앉는다? 올클(올클리어)해!(私の隣に座ってすれば怖いものないよ！)")
  .addTextPage(null, "어느덧(気づけばもう) 9시 55분! 준비해 보자.")
textGame.addBranch(branch_3_1_1);

const branch_3_1_2 = new Branch("branch_3_1_2", "branch_3_2")
  .addTextPage("아연", "아 ㅎ; 그래~ 수고해~(そっかそっか、おつかれ〜)")
  .addTextPage(null, "아연 누나는 수강신청하러 사라졌다. 나도 이제 해 볼까?")
textGame.addBranch(branch_3_1_2);

const rand = Math.random();
const branch_3_2 = new Branch("branch_3_2", null)
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/3-realsusin.mp3"),
    CanvasEvent.addImage( // 네이비즘
      "navysim",
      "images/navysim.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text(null, "1초에 내 운명이 결정된다(この１秒で運命が全て決まる)… 59.95초! 클릭한다(クリック)!"),
    TextBarEvent.branch([
      new BranchPair("클릭하기", (rand <= 0.5) ? "branch_3_2_1" : "branch_3_2_2", (rand <= 0.5) ? 5 : 10)
    ])
  ])
textGame.addBranch(branch_3_2);

const branch_3_2_1 = new Branch("branch_3_2_1", "branch_4")
  .addEventsAsPage([
    TextBarEvent.text(null, "[계획했던 대로 올클리어!(計画通り、オールクリア)]"),
    CanvasEvent.removeObject("navysim", imageHideType.Disappear),
    DelayEvent.delay(500),
  ])
  .addTextPage(null, "여기저기서 욕설이 들리는 가운데, 나는 계획했던 모든 과목을 전부 신청했다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/3-sugang.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage("아연", "뭐야~ 대단하잖아(すごいじゃん)!")
  .addTextPage("아연", "나는 교수님께 증원(増員) 메일 보내야 해서 ㅎㅎ 먼저 가~")
  .addTextPage(null, "누나에게 인사를 하고 나왔다. 대학생활의 첫 단추를 잘 끼운 것 같다(良いスタートを切れたみたいや)!")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_3_2_1);

const branch_3_2_2 = new Branch("branch_3_2_2", "branch_4")
  .addEventsAsPage([
    TextBarEvent.text(null, "[연달아 뜨는 실패 팝업(連なる失敗の通知)]"),
    CanvasEvent.removeObject("navysim", imageHideType.Disappear),
    DelayEvent.delay(500),
  ])
  .addTextPage(null, "이런! 손이 느려서 학점 잘 주기로 소문난(成績を甘々にくれると噂されている) 교수님 수업을 3개 놓쳤다(3つ逃してもうたやん).")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/3-sugang.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage("아연", "망했구나(ダメだったのね)? 첫 수강신청이면 그럴 수 있어. 괜찮아~ 누나랑 같이 증원 신청 메일(増員をお願いするメール) 쓰자.")
  .addTextPage(null, "대신 누나와 함께 교수님께 보낼 메일을 쓰며 친해질 수 있었다. 오히려 좋아(むしろええやん)!")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_3_2_2);

const branch_4 = new Branch("branch_4", null) // 동아리 홍보 부스
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/4-hongbo.jpg"),
    TextBarEvent.text(null, "[학교 안]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/4-hongbo.mp3"),
    DelayEvent.delay(2000),
  ])
  .addTextPage(null, "오늘은 동아리 홍보 부스(サークル紹介のブース) 날이다.")
  .addTextPage("나", "아연 누나가 기계들의 합창 보컬이라고 했지? 부스가 어디 있나...")
  .addTextPage(null, "[어디선가 감미로운 노랫소리(美しい歌声)가 들린다.]")
  .addEventsAsPage([
    SoundEvent.sfx("audio/Walk.mp3"),
    TextBarEvent.text("나", "저기인가 보다!(あそこや！)")
  ])
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/4-jannavi.mp3"),
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/4-hongbo.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text(null, "아연 누나가 버스킹 공연(路上ライブ)을 하고 있다.")
  ])
  .addTextPage("나", "헉,.,..,,.., .!! 1!!!")
  .addEventsAsPage([
    SoundEvent.sfx("audio/ayeon.mp3"),
    DelayEvent.delay(500),
    CanvasEvent.addImage(
      "iu",
      "images/characters/4-iu.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text(null, "순간(一瞬) 누나가 아이유로 보였다. 성균관대 아이유 곽아연?"),
  ])
  .addTextPage(null, "그 순간,")
  .addEventsAsPage([
    DelayEvent.delay(500),
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/4-eyecontact.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    SoundEvent.sfx("audio/heartbreak.mp3"),
    TextBarEvent.text(null, "눈이 마주쳤다(目が合った). 이런... . 난 그녀의 노예가 된 것이다(もう彼女の奴隷になってもうたみたいや).")
  ])
  .addTextPage(null, "<사랑>의 노예 ...........")

  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/4-hongbo.mp3"),
  ])
  .addTextPage(null, "정신 차리고 보니 나는 지원서(入部届)를 쓰고 있었다. 어떤 세션(セッションパート)으로 들어갈까?")
  .addTextPage(null, "보컬은 안 된다. 누나랑 공연(公演)해야 하니까.")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("1. 드럼", "branch_4_1_1", 0),
      new BranchPair("2. 기타", "branch_4_1_2", 0),
      new BranchPair("3. 키보드", "branch_4_1_3", 0),
      // new BranchPair("4. 베이스", "branch_4_1_4", 0),
    ])
  ]);
textGame.addBranch(branch_4);

const branch_4_1_1 = new Branch("branch_4_1_1", "branch_4_2")
  .addTextPage(null, "나는 드럼으로 가입 지원서(入部届)를 냈다.")
textGame.addBranch(branch_4_1_1);

const branch_4_1_2 = new Branch("branch_4_1_2", "branch_4_2")
  .addTextPage(null, "나는 기타로 가입 지원서(入部届)를 냈다.")
textGame.addBranch(branch_4_1_2);

const branch_4_1_3 = new Branch("branch_4_1_3", "branch_4_2")
  .addTextPage(null, "나는 키보드로 가입 지원서(入部届)를 냈다.")
textGame.addBranch(branch_4_1_3);

// const branch_4_1_4 = new Branch("branch_4_1_4", "branch_4_2")
//   .addTextPage(null, "나는 베이스로 가입 지원서를 냈다.")
// textGame.addBranch(branch_4_1_4);

const branch_4_2 = new Branch("branch_4_2", null)
  .addTextPage(null, "한 곡을 끝낸 아연 누나가 내게로 온다(自分のところへ).")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/4-hongbo.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage("아연", "주영이 왔네? 공연 어땠어?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("너무좋았어요누나그냥완전천사여신미쳤어요", "branch_4_2_1", -10),
      new BranchPair("좋았어요!", "branch_4_2_2", 5),
      new BranchPair("걍 그렇던데요?", "branch_4_2_3", -15),
    ])
  ]);
textGame.addBranch(branch_4_2);

const branch_4_2_1 = new Branch("branch_4_2_1", "branch_4_3")
  .addTextPage("아연", "아...~ㅎㅎ; 고마워~")
textGame.addBranch(branch_4_2_1);

const branch_4_2_2 = new Branch("branch_4_2_2", "branch_4_3")
  .addTextPage("아연", "정말? 다행이다!")
textGame.addBranch(branch_4_2_2);

const branch_4_2_3 = new Branch("branch_4_2_3", "branch_4_3")
  .addTextPage("아연", "아ㅎㅎ; 취향 아닐 수 있지~")
textGame.addBranch(branch_4_2_3);

const branch_4_3 = new Branch("branch_4_3", "branch_5")
  .addTextPage("아연", "밴드부 지원했구나! 같이 재밌게 해 보자~")
  .addTextPage(null, "그렇게 난 기계들의 합창 신입 부원이 되었다. 아연 누나랑 같이 공연하면서 친해져야지!")
textGame.addBranch(branch_4_3);

const branch_5 = new Branch("branch_5", null) // 동아리 엠티
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/5-mt.png"),
    TextBarEvent.text(null, "[엠티 장소]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/5-mt.mp3"),
    DelayEvent.delay(2000),
  ])
  .addTextPage("나", "와… 내 대학 첫 엠티… 설렌다(楽しみだなあ)… 그것도… 아연 누나와 함께…?!")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/5-mt.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "주영아~ 동아리에 가입한 걸 환영해! 환영의 의미로 건배할까~?"),
  ])
  .addTextPage("나", "헤헤... 넵! 짠~")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
  .addTextPage(null, "[술자리가 무르익고...]")
  .addTextPage("나", "앗, 조금 어지럽네…(ちょっとくらくらする) 너무 급하게 마셨나(一気に飲み過ぎちゃったかなあ)…")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "minji",
      "images/characters/5-minji.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text(null, "[그 때 예쁜 여자 동기(同期)가 다가온다.]"),
  ])
  .addTextPage(null, "헉... 27학번 퀸카 박민지? 쟤가 왜 나한테 오는 거지...?")
  .addTextPage("민지", "안녕? 술 깨는 데에는(酔い覚ましには) 이 초코에몽(チョコジュース)이 좋대. 마실래?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "choco",
      "images/5-choco.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage(null, "술자리 플러팅 국룰(飲みの場の口説き文句) 초코에몽? 이걸 왜 나한테? 마사카... 나를...?")
  .addTextPage(null, "[민지의 눈웃음]")
  .addEventsAsPage([
    CanvasEvent.removeObject("choco", imageHideType.Disappear),
  ])
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("미안. 여자가 주는 건 받을 수 없어.", "branch_5_1_1", 10),
      new BranchPair("헤헤! 나 초코에몽 좋아하는데! 고마워!", "branch_5_1_2", -10),
    ])
  ])
textGame.addBranch(branch_5);

const branch_5_1_1 = new Branch("branch_5_1_1", "branch_5_2")
  .addTextPage("민지", "뭐야? 꼴값이야...")
textGame.addBranch(branch_5_1_1);

const branch_5_1_2 = new Branch("branch_5_1_2", "branch_5_2")
  .addTextPage("민지", "자, 여기! 나 잠깐 네 옆자리에 앉는다?")
textGame.addBranch(branch_5_1_2);

const branch_5_2 = new Branch("branch_5_2", null)
  .addTextPage(null, "민지가 떠나고, 아연 누나가 다가온다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/5-mt.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "주영이 술 많이 마셨어? 나랑 바람 쐬고 올까(風に当たりに行く)? 아이스크림 사러 가자!")
  ])
  .addTextPage(null, "헉… 누나가 나에게 단둘이(二人だけの) 산책을 <제안>했다! 오늘따라 다들 나에게 왜 이러는 거얏~")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("아뇨, 오늘 날씨 너무 춥던데요. 돼지바(アイス) 부탁 드려요.", "branch_5_2_1", -20),
      new BranchPair("네 누나! 마침 산책 나가고 싶었어요!", "branch_5_2_2", 10),
    ])
  ])
textGame.addBranch(branch_5_2);

const branch_5_2_1 = new Branch("branch_5_2_1", "branch_5_3")
  .addTextPage("아연", "아 ㅎ; 넌 메로나나 먹어~")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
    TextBarEvent.text(null, "그렇게 아연 누나가 혼자 아이스크림을 사 와서 동아리 부원들에게 나눠주었다."),
  ])
textGame.addBranch(branch_5_2_1);

const branch_5_2_2 = new Branch("branch_5_2_2", "branch_5_3")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
    TextBarEvent.text(null, "그렇게 아연 누나와 내가 아이스크림을 사 와서 동아리 부원들에게 나눠주었다.")
  ])
textGame.addBranch(branch_5_2_2);

const branch_5_3 = new Branch("branch_5_3", null)
  .addTextPage(null, "그렇게 아이스크림을 먹다가, 갑자기 깻잎논쟁(エゴマの葉論争)에 대한 토론이 이어졌다.")
  .addTextPage("나", "깻잎논쟁(エゴマの葉論争)이 뭔데?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "wow",
      "images/5-wow.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("동기1", "너 그것도 몰라? 친구가 네 애인(恋人) 깻잎을 젓가락으로 잡아줄 때, 용서할 수 있는지(許せるか)에 대한 논쟁이야!")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow",
      "images/characters/Shadow.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("선배1", "야, 난 결사반대야(絶対反対だよ)! 왜 다른 이성이 밥 먹는 걸 신경 써 주고 있는 거야!")
  ])
  .addTextPage("선배2", "에이, 그게 뭐 어때서! 그건 그냥 배려(気遣い)지!")
  .addTextPage("선배1,2", "어이, 주영이는 어떻게 생각해?")
  .addTextPage(null, "헉... 어떡하지? 아연 누나가 지켜보고 있는데...")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("이해할 수 없어요. 저는 제 여자친구만 챙겨 줄 거예요.", "branch_5_3_1", 10),
      new BranchPair("떼 줄 것 같은데요? 그럴 수 있는 거 아닌가요?", "branch_5_3_2", -20),
    ])
  ])
textGame.addBranch(branch_5_3);

const branch_5_3_1 = new Branch("branch_5_3_1", "branch_6")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/5-mt.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "와, 주영이는 순정남(優男)이구나~"),
  ])
  .addTextPage(null, "누나가 좋아한 것 같다...! 그렇게 엠티가 마무리되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_5_3_1);

const branch_5_3_2 = new Branch("branch_5_3_2", "branch_6")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/5-mt.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "그렇구나... 주영이는 다른 여자한테 한눈팔 스타일이네~!")
  ])
  .addTextPage(null, "망한 것 같다... 그렇게 엠티가 마무리되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_5_3_2);

const branch_6 = new Branch("branch_6", null) // 공부는 해라
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-home.jpg"),
    TextBarEvent.text(null, "[집]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/6-library.mp3"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "중간고사 기간이 다가와서 공부를 해야 하는데… 어디서 하지?"),
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text(null, "(카톡!)")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "[휴대폰 화면]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "주영아 나랑 도서관 가서 공부할래? 집중이 안 되네ㅠㅠ")
  ])
  .addTextPage(null, "헉! 아연 누나가 데이트 신청을?!")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("좋아요 누나!", "branch_6_1_1", 5),
      new BranchPair("저는 집에서 공부해야 해서요", "branch_6_1_2", -10),
    ])
  ])
textGame.addBranch(branch_6);

const branch_6_1_1 = new Branch("branch_6_1_1", "branch_6_2")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text("아연", "30분 뒤에 도서관에서 보자!")
  ])
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_6_1_1);

const branch_6_1_2 = new Branch("branch_6_1_2", "branch_7")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text("아연", "그래 평생 집에서만 해~")
  ])
  .addTextPage(null, "그래, 무슨 도서관이야. 집중 잘 되는 집에서 공부하자!")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_6_1_2);

const branch_6_2 = new Branch("branch_6_2", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-libraryfront.jpg"),
    TextBarEvent.text(null, "[도서관 앞]"),
    DelayEvent.delay(2000),
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/6-library.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "주영아! 들어갈까?"),
  ])
  .addTextPage(null, "오늘도 누나는 너무 예쁘다...")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-libraryin.png"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "[도서관 안]"),
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "yubin",
      "images/characters/6-yubin.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text(null, "그렇게 한창 강의를 듣던 중, 옆 테이블 여자가 다가와서 쪽지(手紙)를 건넨다. 받을까?"),
  ])
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("받자!(受け取る)", "branch_6_2_1", -10),
      new BranchPair("도리도리 거절한다(断る).", "branch_6_2_2", 10),
    ])
  ])
textGame.addBranch(branch_6_2);

const branch_6_2_1 = new Branch("branch_6_2_1", "branch_7")
  .addTextPage(null, "나는 아연 누나 일편단심(一途)이지만 어떤 쪽지인지 모르니까... 받아볼까?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "letter",
      "images/6-letter.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("쪽지", "타이핑 소리 너무 시끄러워요. 키 스킨(キーボードカバー) 착용(着用)해 주세요."),
  ])
  .addTextPage(null, "이런! 전화번호 주는 쪽지가 아니었다. 아연 누나가 가만히 쳐다보는 게 느껴진다…")
  .addEventsAsPage([
    CanvasEvent.removeObject("letter", imageHideType.Disappear),
  ])
textGame.addBranch(branch_6_2_1);

const branch_6_2_2 = new Branch("branch_6_2_2", "branch_7")
  .addTextPage(null, "나는 아연 누나 일편단심(一途). 모르는 여자의 플러팅(口説き)은 <거절>한다.")
  .addTextPage(null, "여자가 어이없어하며(あきれて) 쪽지를 두고 갔다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "letter",
      "images/6-letter.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("쪽지", "타이핑 소리 너무 시끄러워요. 키 스킨 착용해 주세요."),
  ])
  .addTextPage(null, "쪽지를 펼쳐 본 아연누나가 옆에서 조용히 웃는다. 너무 예쁘잖냐,~!!")
  .addEventsAsPage([
    CanvasEvent.removeObject("letter", imageHideType.Disappear),
  ])
textGame.addBranch(branch_6_2_2);

const branch_7 = new Branch("branch_7", null) // 술 이벤트
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-home.jpg"),
    TextBarEvent.text(null, "[집]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/3-susin.mp3"),
    TextBarEvent.text(null, "곧 시험이니까 집에서 열심히 공부해야지!"),
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text(null, "(카톡!)")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "[휴대폰 화면]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("서영", "야 우리 술 마실 건데 갈래?")
  ])
  .addTextPage(null, "헉! 하지만 놀고 싶은데... 갈까?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("공부는 나중에 하지 뭐!", "branch_7_1_1", 20),
      new BranchPair("에이, 시험이 코 앞인데...", "branch_7_1_2", 0),
    ])
  ])
textGame.addBranch(branch_7);

const branch_7_1_1 = new Branch("branch_7_1_1", "branch_7_2") // 단번에 수락
  .addTextPage(null, "그래, 새내기인데 조금 놀면 뭐 어때!")
  .addTextPage("나", "곧 갈게!")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_7_1_1);

const branch_7_1_2 = new Branch("branch_7_1_2", null) // 한 번 튕김
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    CanvasEvent.addImage(
      "seoyoung",
      "images/characters/7-seoyoung.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("서영", "여기 아연 언니도 있음ㅋㅋ")
  ])
  .addTextPage(null, "뭐라고? 아연 누나가 술자리에??")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("공부는 나중에 하지 뭐!", "branch_7_1_1", 20),
      new BranchPair("에이, 시험이 코 앞인데...", "branch_7_1_2_1", -5),
    ])
  ])
textGame.addBranch(branch_7_1_2);

const branch_7_1_2_1 = new Branch("branch_7_1_2_1", "branch_8") // 둘 다 거절
  .addEventsAsPage([
    CanvasEvent.removeObject("seoyoung", imageHideType.Disappear),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/3-realsusin.mp3"),
    TextBarEvent.text(null, "그렇게 나는 친구들이 단체로 아연 누나를 둘러싸고 찍은 돈룩업(プリクラ) 사진을 인스타 스토리로 보며 오열했다.")
  ])
textGame.addBranch(branch_7_1_2_1);

const branch_7_2 = new Branch("branch_7_2", "branch_8")
  .addEventsAsPage([
    CanvasEvent.removeObject("seoyoung", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/7-soju.png"),
    TextBarEvent.text(null, "[학과 모임]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/7-soju.mp3"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "나는 그렇게 아연 누나 옆자리를 지키며 재미있게 놀 수 있었다."),
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow",
      "images/characters/Shadow.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("동기1", "우리 인생네컷(プリクラ) 찍으러 갈래?")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/5-mt.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    TextBarEvent.text("아연", "요즘은 돈룩업(プリクラ)이지~ 가자 주영아!"),
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/heartbreak.mp3"),
    TextBarEvent.text(null, "살짝 취한(酔った) 누나가 내 손을 잡고 앞서갔다.")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/7-dontlookup.JPG",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "아연 누나가 친구들보다 먼저 뛰어간 덕분에 누나와 단둘이 사진을 찍었다……. 결혼하자는 걸까?")
  ])
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_7_2);

const branch_8 = new Branch("branch_8", null) // 고백
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-home.jpg"),
    TextBarEvent.text(null, "[집]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/8-goback.mp3"),
  ])
  .addTextPage("나", "그래, 결심했어.")
  .addTextPage(null, "누나를 향한 내 마음이 너무 커져버렸다. 고백하지 않고는,, 참을 수 없어!")
  .addTextPage(null, "그런데 어떻게 고백할까?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("카톡으로 고백하자.", "branch_8_1_1", 0),
      new BranchPair("전화로 고백하자.", "branch_8_1_2", 0),
      new BranchPair("만나서 하자.", "branch_8_1_3", 0),
    ])
  ])
textGame.addBranch(branch_8);

const branch_8_1_1 = new Branch("branch_8_1_1", "branch_11_1") // 카톡 고백
  .addTextPage(null, "너무 떨리니까 카톡으로 말하자.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "[휴대폰 화면]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("나", "누나 저랑 사궈?주세요? 사겨? 주실레요?")
  ])
  .addTextPage(null, "[3시간 뒤...]")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text(null, "(카톡!)")
  ])
  .addTextPage("아연", "미안, 난 맞춤법(つづり) 틀리는 남자는 싫어.")
  .addTextPage(null, "이럴 수가. 누나는 맞춤법을 중요하게 생각했구나…. 그렇게 누나를 다시는 볼 수 없게 되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_8_1_1);

const branch_8_1_2 = new Branch("branch_8_1_2", "branch_11_1") // 전화 고백
  .addTextPage(null, "떨리니까 전화로 말하자.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    SoundEvent.sfx("audio/PhoneRing.mp3"),
    TextBarEvent.text(null, "(뚜르르...)")
  ])
  .addTextPage("나", "누나 뭐해요?")
  .addTextPage("아연", "쇼츠 보고 있었는데 왜?")
  .addTextPage("나", "저기… 아연아… 나랑 사귈래? 누난 내 여자니까…")
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/8-yourmine.mp3"),
    TextBarEvent.text(null, "[이승기 - 내 여자라니까]")
  ])
  .addTextPage(null, "어라? 5분이 지났는데 누나가 아무 말도 안 한다…")
  .addTextPage("아연", "미안. 난 반말(タメ口)하는 연하(年下)는 싫어.")
  .addTextPage(null, "이럴 수가. 누나는 유교걸이었다…. 그렇게 누나를 다시는 볼 수 없게 되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_8_1_2);

const branch_8_1_3 = new Branch("branch_8_1_3", null) // 만나서 고백
  .addTextPage(null, "만나서 어떻게 할까?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("K-옛날드라마에서는 이렇게 하던데… 자동차에 풍선 담아서 공개고백으로 누나를 놀래켜 주자!", "branch_8_2_1", 0),
      new BranchPair("누나한테 밥 사 달라고 약속 잡고 내가 사 주면서 고백하자!", "branch_8_2_2", 0),
    ])
  ])
textGame.addBranch(branch_8_1_3);

const branch_8_2_1 = new Branch("branch_8_2_1", "branch_11_1") // 풍선 고백
  .addTextPage(null, "결심했어. 누나한테 2시간 뒤에 학생회관 앞에서 보자고 하자!")
  .addTextPage(null, "[2시간 뒤...]")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/8-school.png"),
    TextBarEvent.text(null, "[학생회관 앞]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/8-sad.mp3"),
  ])
  .addTextPage(null, "부모님한테 빌린 차 트렁크에 하트 모양 풍선을 담고, 정장(スーツ)까지 챙겨 입었다. 분명 누나가 좋아하겠지?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-goback.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "주영아~ 나 왔어!")
  ])
  .addTextPage("아연", "웬 정장(スーツ)이야? 그런데 학관 앞에 웬 자동차가 있더라…ㅎㅎ 학교 안에 주차하면 안 되는데…")
  .addTextPage("나", "누나… 그거 우리 엄마 차예요.")
  .addTextPage("아연", "어? 미안…")
  .addTextPage(null, "어색해졌다. 하지만 마음 먹은 건 반드시 해내는 나. 차 앞으로 누나를 데려간 뒤 트렁크를 열어 하트 모양 풍선을 하늘에 띄웠다.")
  .addTextPage("나", "누나, 나랑 사귈래?")
  .addEventsAsPage([
    SoundEvent.sfx("audio/kalkal.mp3"),
    TextBarEvent.text(null, "[구경꾼들의 웃음소리]")
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/charkack.mp3"),
    TextBarEvent.text("아연", "꺄아아악!!!")
  ])
  .addTextPage(null, "아뿔싸! 아연 누나가 비명(悲鳴)을 지르며 도망쳤다… 그렇게 누나를 다시는 볼 수 없게 되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_8_2_1);

const branch_8_2_2 = new Branch("branch_8_2_2", null) // 밥약 고백
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/8-bapyack.png"),
    TextBarEvent.text(null, "[식당 앞]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/8-bapyack.mp3"),
  ])
  .addTextPage(null, "그렇게 밥약(ご飯の約束)을 핑계(言い訳)로 저녁을 먹고… 대신 내가 계산하며 누나와 화기애애(和気あいあい)하게 밖으로 나왔다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-goback.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "얻어 먹어서 어떡해~ 다음에 누나가 맛있는 거 사 줄게! ㅎㅎ")
  ])
  .addTextPage("나", "그럼 누나… 밥 사 주는 거 말고 저랑 사귀면 안 돼요? 저 누나 좋아해요.")
  .addEventsAsPage([
    TextBarEvent.branch(() => {
      const currentLoveLevel = textGame.loveLevel;
      console.log(`Current Love Level: ${currentLoveLevel}`);
      return [
        new BranchPair("고백하기", (currentLoveLevel >= 40) ? "branch_8_3_1" : "branch_8_3_2")
      ];
    })
  ])
textGame.addBranch(branch_8_2_2);

const branch_8_3_1 = new Branch("branch_8_3_1", "branch_9") // 수락
  .addTextPage("아연", "이러려고 밥 먹자 했구나? ㅎㅎ")
  .addTextPage(null, "너무 떨린다… 누나가 잠시 뜸을 들이더니 나를 쳐다보며 웃었다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-good.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "그럼 오늘부터 1일, 이다?")
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/heartbreak.mp3"),
  ])
  .addTextPage("나", "헉 .. . . .. , , ,, .")
  .addTextPage(null, "너무 떨려서 그만 기절했다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_8_3_1);

const branch_8_3_2 = new Branch("branch_8_3_2", "branch_11_1") // 거절
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/3-realsusin.mp3"),
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-bad.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "…? 미안. 우리 그런 사이 아닌 것 같아. 넌 좋은 동생이야…")
  ])
  .addTextPage("아연", "불편하니까 동아리는 나가주면 좋겠어. 난 에이스라 못 나가.")
  .addTextPage(null, "아뿔싸! 누나는 아니었나 보다… 그렇게 누나를 다시는 볼 수 없게 되었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_8_3_2);

const branch_9 = new Branch("branch_9", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/9-dongbang.png"),
    TextBarEvent.text(null, "[동아리 방]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/9-dongbang.mp3"),
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "juyeong",
      "images/characters/9-ju.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("세광", "자자, 얘들아. 축제가 곧 다가오는데, 공연에 참가하고 싶은 사람 있어? 우리 '에이스' 아연이는 당연히 나갈 거고.")
  ])
  .addTextPage(null, "헉… 평생 조용한 모범생(優等生)이었던 내가 이세계에선 수많은 관중 앞에서 공연을…?")
  .addTextPage(null, "근데 공연을 준비하려면 연습도 하루종일 해야해서 시간을 많이 뺏길 텐데…")
  .addTextPage(null, "그치만… 내가 공연을 나가지 않으면 저 밴드부 흔남 <함세광> 선배가 누나랑 같이 연습을 하게 될 텐데…") 
  .addTextPage("세광", "주영아, 나갈 거야?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("아니요. 저는 그 시간에 공부 열심히 해서 과탑(学年トップ)이 되려고요. 죄송합니다.", "branch_9_1_1", 0),
      new BranchPair("어이어이. 그건, 내 <무대>라고.", "branch_9_1_2", 0)
    ])
  ])
textGame.addBranch(branch_9);

const branch_9_1_1 = new Branch("branch_9_1_1", "branch_9_2") // 거절
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-bad.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "주영이는 공부를 참 열심히 하는 아이구나… 하하…^^")
  ])
  .addTextPage(null, "그렇게 함세광 선배와 아연 누나가 함께 공연을 준비하면서 더 친해지게 됐다.")
  .addTextPage(null, "모든 집단에는 아연 누나를 좋아하는 남자가 꼭 한두 명 있다던데... 그렇다면 혹시..........?")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_9_1_1);

const branch_9_1_2 = new Branch("branch_9_1_2", "branch_9_2") // 승낙
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-good.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "와~ 주영이랑 공연이라니! 우리 열심히 준비해 보자!")
  ])
  .addTextPage(null, "그렇게 신주영 선배 대신 내가 아연 누나와 공연하며 더 친해지게 됐다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_9_1_2);

const branch_9_2 = new Branch("branch_9_2", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/9-eskara.png"),
    TextBarEvent.text(null, "[축제 무대 앞]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/9-eskara.mp3"),
    TextBarEvent.text(null, "시간은 흘러 축제날이 되었고, 기계들의 합창 공연도 잘 마무리되었다. 이제 다른 축제 무대를 즐겨 볼 차례!")
  ])
  .addTextPage("나", "와… 대학 축제는 이렇게 다양한 동아리들이 공연도 하고, 어마어마한 연예인들도 많이 오는구나! 내가 좋아하는 아이브, 뉴진스, 에스파가 오다니!")
  .addTextPage("나", "이렇게 멋진 축제를 아연 누나랑 보게 되다니! 하… 너무 행복하다…")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/9-eskara.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "고개를 돌려보니 아연 누나가 상기된 얼굴로 웃고 있다.")
  ])
  .addTextPage("나", "누나, 공연 어때요? 누나 NCT 좋아하잖아요!")
  .addTextPage("아연", "응응! 너무 신난다! 근데 내 키가 작아서 그런가…? 무대가 잘 안 보여 ㅠㅠ")
  .addTextPage(null, "헉… 그렇다. 아연 누나는 요정처럼 <아담>한 키를 가지고 있다.")
  .addTextPage(null, "어떻게 해야 무대가 잘 보이도록 도와줄 수 있을까?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("(발을 내어주며) 제 발 딛고(踏んで) 서보세요! 잘 보이죠?", "branch_9_2_1", 0),
      new BranchPair("아쉽네요 누나. 오늘 NCT 너무 잘생겼는데요?", "branch_9_2_2", 0),
      // new BranchPair("(누나를 위해 개발한 안경을 씌워 준다)", "branch_9_2_3", 0),
    ])
  ])
textGame.addBranch(branch_9_2);

const branch_9_2_1 = new Branch("branch_9_2_1", "branch_10")
  .addTextPage("아연", "뭐야~ 주영이. 너무 멋있잖아?")
  .addTextPage(null, "그렇게 누나의 정수리(つむじ) 냄새를 맡으며 행복?하게? 공연을 볼 수 있었다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_9_2_1);

const branch_9_2_2 = new Branch("branch_9_2_2", "branch_10")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-bad.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "쳇, 뭐야. 너만 잘 보이면 다냐구!")
  ])
  .addTextPage(null, "그렇게 누나와 한결 어색한(気まずい) 상태로 공연을 보게 되었다...")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_9_2_2);

// const branch_9_2_3 = new Branch("branch_9_2_3", "branch_10")
//   .addEventsAsPage([
//     CanvasEvent.addImage(
//       "glasses",
//       "images/9-glasses.JPG",
//       modelPosition.center,
//       imageShowType.FadeIn
//     ),
//     TextBarEvent.text(null, "이 날을 위해 준비했지. 키 작은 누나를 위한 거울 반사 안경이다.")
//   ])
//   .addTextPage("아연", "헉 뭐야… 이 스마트한 공대남… 지적인 모습에 설레는데?")
//   .addTextPage(null, "누나에게 지적인 공대남의 면모를 보여줄 수 있었다. 하하.")
//   .addEventsAsPage([
//     CanvasEvent.removeObject("glasses", imageHideType.Disappear)
//   ])
// textGame.addBranch(branch_9_2_3);

const branch_10 = new Branch("branch_10", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/6-home.jpg"),
    TextBarEvent.text(null, "[집]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/6-library.mp3"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "이제 곧 기말(期末テスト)이라 진짜 정말 공부해야 한다."),
  ])
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text(null, "(카톡!)")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneBlack.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "[휴대폰 화면]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "phone",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "주영아 혹시 동아리 방에서 밤 샐래(夜更かし)?")
  ])
  .addTextPage(null, "헉! 아연 누나가 같이 밤 새자고……? 했다?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("저야 좋죠 누나!", "branch_10_1_1", 0),
      new BranchPair("저는 집에서 공부해야 해서요", "branch_10_1_2", 0),
    ])
  ])
textGame.addBranch(branch_10);

const branch_10_1_1 = new Branch("branch_10_1_1", "branch_10_2")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text("아연", "공부할 거 챙겨서 와 ㅎㅎ")
  ])
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_10_1_1);

const branch_10_1_2 = new Branch("branch_10_1_2", "branch_11_2")
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    TextBarEvent.text("아연", "그래 평생 집에서만 해~")
  ])
  .addTextPage(null, "그래, 무슨 동아리 방이야. 집중 잘 되는 집에서 공부하자!")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
  ])
textGame.addBranch(branch_10_1_2);

const branch_10_2 = new Branch("branch_10_2", "branch_11_2")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/9-dongbang.png"),
    TextBarEvent.text(null, "[동아리 방]"),
    DelayEvent.delay(2000),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/10-dongbang.mp3"),
  ])
  .addTextPage(null, "이렇게 된 김에 누나랑 같이 밤새서 열심히 좋은 성적을 받겠어!")
  .addTextPage(null, "그렇게 열심히 공부하던 중… 새벽 1시가 되었다.")
  .addTextPage(null, "툭...")
  .addTextPage(null, "갑자기 내 어깨 위로 무거운 게 올라왔다.")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/10-dongbang.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    SoundEvent.sfx("audio/drr.m4a"),
    TextBarEvent.text("아연", "드르렁.... 컼.")
  ])
  .addTextPage(null, "아연 누나가 뜬 눈으로 졸다가 내 어깨에 기댄 것이다...")
  .addEventsAsPage([
    SoundEvent.sfx("audio/heartbreak.mp3"),
  ])
  .addTextPage("나", "누나는 자는 것도 예쁘네…")
  .addTextPage(null, "긴장돼서 공부는 하나도 못 했지만 누나가 편히 잤다면 그걸로 괜찮잖냐…!wwwww")
  .addEventsAsPage([
    CanvasEvent.removeObject("ayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_10_2);

const branch_11_1 = new Branch("branch_11_1", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/11-1-black.png"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/8-sad.mp3"),
    TextBarEvent.text(null, "그렇게 나는 아연 누나를 다시는 볼 수 없었다.")
  ])
  .addTextPage(null, "동아리는 에이스인 누나 대신 내가 나가게 되어서 동기들과의 연락이 모두 끊겼다.")
  .addTextPage(null, "그래서 나는 공부에만 열중(熱中)했다.")
  .addTextPage(null, "그 결과 학점 4.5 만점을 받아 원하는 전공으로 진입할 수 있었고,")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "choi",
      "images/characters/11-1-choi.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "학점 만점, 그리고 면접도 잘 본 덕분에 OK배정장학생이 될 수 있었다.")
  ])
  .addEventsAsPage([
    CanvasEvent.removeObject("choi", imageHideType.Disappear)
  ])
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/11-1-army.jpg"),
    TextBarEvent.text(null, "그러나, 아연 누나를 보는 것이 괴로워 결국 군 입대를 선택했다.")
  ])
  .addTextPage(null, "CC란… 뭘까?")
  .addTextPage(null, "다시는 사랑 따위 하지 않을 것이다…")
  .addEndingAsPage("END 1 - 아연 누나를 좋아하면 안 되는 이유");
textGame.addBranch(branch_11_1);

const branch_11_2 = new Branch("branch_11_2", null)
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/11-2-heart.jpg"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/7-soju.mp3"),
    TextBarEvent.text(null, "오늘은 어느덧 누나와 300일.")

  ])
  .addTextPage(null, "누나랑 나는 그동안 많은 추억을 쌓았다. 예쁜 곳에서 데이트도 하고, 여행도 가고, 반지도 맞추고… 너무 행복한 한 학기였다.")
  .addTextPage(null, "오늘은 마침 한 학기 성적이 나오는 날이기도 하다. 연애하느라 공부는 열심히 못한 것 같긴 한데… 교수님들이 새내기니까 좀 봐주시겠지?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "grade",
      "images/11-2-grade.jpg",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text(null, "(학교 홈페이지 성적 화면을 연다)")
  ])
  .addTextPage("나", "아앗! 이게 뭐야! 2.0…? 완전 망해버렸잖아!")
  .addTextPage("나", "그럼 OK배정장학생도.... 떨어졌겠지?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "choi",
      "images/characters/11-2-choi.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("???", "이딴 점수 들고 오지마… 아무나 올 수 있는 곳 아니야…")
  ])
  .addTextPage(null, "결국… 나는 가장 원하던 화학공학과에 떨어지고… 10지망이었던 학과에 가게 되었다… 어떡하지…")
  .addTextPage(null, "그래도… 누나라는 좋은 사람을 만났으니까! 공부보다 더 중요한 걸 얻은 게 아닐까?")
  .addTextPage("나", "아연 누나! 나 군대 미뤘어! 누나! 사랑해!")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "ayeon",
      "images/characters/8-good.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    TextBarEvent.text("아연", "주영아, 나도 사랑해~")
  ])
  .addTextPage("함께", "하하하하하~")
  .addEndingAsPage("END 2 - 사랑만 얻다");
textGame.addBranch(branch_11_2);