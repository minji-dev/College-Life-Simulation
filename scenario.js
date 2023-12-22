const textGame = new TextGame();

const branch_1 = new Branch("branch_1", "branch_2") // 내 대학생활은 어떻게...
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/home.jpg"),
    TextBarEvent.text(null, "[집 안]"),
    DelayEvent.delay(2000),
    SoundEvent.sfx("audio/HeartShaker.mp3"),
    TextBarEvent.text(null, "나는 이제 막 대학에 합격한 27학번 아기 새내기.")
  ])
  .addTextPage(null, "엄마가 대학 가면 여친 생기고 살 빠지고 잘생겨진다고 했는데...")
  .addTextPage(null, "나도 이제 연애를 할 수 있는 걸까?")
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
    TextBarEvent.text("학생회장", "내일 새내기 배움터 행사가 진행됩니다. ... (중략)")
  ])
  .addTextPage("나", "뭐? 내일 새내기 배움터라고?")
  .addTextPage(null, "반드시 참여해야겠지? 설레는 마음으로 짐을 싸고 잠에 든다.")
textGame.addBranch(branch_1);

const branch_2 = new Branch("branch_2", "branch_3_1") // 새내기 배움터
  .addEventsAsPage([
    CanvasEvent.removeObject("phone", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/home.jpg"),
    TextBarEvent.text(null, "[강당 안]"),
    SoundEvent.sfx("audio/HeartShaker.mp3"),
    DelayEvent.delay(2000),
  ])
  .addTextPage("나", "와... 이게 말로만 듣던 새내기 배움터? 줄여서 새터? 근데 다 모르는 사람들 뿐이네...")
  .addTextPage("선배1", "공학계열 신입생 여러분 안녕하세요~ 새터를 시작하기에 앞서 여러분께 전공 진입 관련 공지를 드릴게요!")
  .addTextPage("교수", "엣헴, 반갑다. 제군들은! 철저한 경쟁을 통해 전공을 선택할 수 있다. 학점이 높은 순에 따라 전공 선택 우선권이 부여된다. 학점이 낮으면! 원하는 학과에 갈 수 없다. 그러니 1학년 때부터 부지런히 공부하라구!")
  .addTextPage("학생들", "(수군수군) 저 선배, 학점 3.0 받아서 화학공학과 떨어졌대!")
  .addTextPage(null, "하... 대학에 와서도 공부라니...")
  .addTextPage("선배1", "하하, 여러분! 벌써부터 너무 겁먹지 마시구요~ 분위기도 업~! 시킬겸 동아리 공연 시작할게요~!")

  .addEventsAsPage([
    TextBarEvent.text(null, "[그 때...]"),
    SoundEvent.sfx("audio/HeartShaker.mp3"),
    DelayEvent.delay(1000),
    CanvasEvent.addImage(
      "nayeon", // 아연
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage("아연", "여러분, 안녕하세요~ 저희는 공과대학 소속 밴드부 “기계들의 합창”이고요~ 저는 보컬을 맡은 곽아연이라고 합니다~ ")
  .addEventsAsPage([
    SoundEvent.sfx("audio/HeartShaker.mp3"),
    TextBarEvent.text(null, "(아연이 노래를 부른다)")
  ])
  .addTextPage("나", "오… 이런… ‘My Goddess’... 나… 아연누나에게… 첫 눈에 반해버린 것 같아…")
textGame.addBranch(branch_2);

const branch_3_1 = new Branch("branch_3_1", null) // 수강신청
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear),
    CanvasEvent.changeBackGround("images/backgrounds/school.jpg"),
    DelayEvent.delay(2000),
    TextBarEvent.text(null, "[PC방]"),
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/Ohayou.mp3"),
  ])
  .addTextPage(null, "선배들이 알려준 대로 수강신청을 하러 왔다. 와… PC방에 사람이 정말 많네?")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "nayeon", // 아연
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn
    ),
    SoundEvent.sfx("audio/Walk.mp3")
  ])
  .addTextPage("아연", "어라? 새터에서 봤던 후배님?")
  .addTextPage(null, "헉! 아연 누나가 왜 여기에?")
  .addTextPage("나", "누나 안녕하세요... 수강신청 하러 오셨어요?")
  .addTextPage("아연", "응응~ 오늘 10시! 너 어떤 과목 들어?")
  .addTextPage("나", "일반물리학, 일반화학, 영어쓰기, 프로그래밍기초와실습, 창의적글쓰기, 미분적분학1… 아무튼 16학점 들어요.")
  .addTextPage("아연", "나중에 나랑 교양 같이 듣자!")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("좋아요 누나!", "branch_3_1_1"),
      new BranchPair("무슨 소리세요? 졸업하셔야죠.", "branch_3_1_2")
    ])
  ]);
textGame.addBranch(branch_3_1);

const branch_3_1_1 = new Branch("branch_3_1_1", "branch_3_2")
  .addTextPage("아연", "응응 ㅎㅎ 나 옆자리에 앉는다? 올클(올클리어)해!")
  .addTextPage(null, "어느덧 9시 55분! 준비해 보자.")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_3_1_1);

const branch_3_1_2 = new Branch("branch_3_1_2", "branch_3_2")
  .addTextPage("아연", "아 ㅎ; 그래~ 수고해~")
  .addTextPage(null, "아연 누나는 수강신청하러 사라졌다. 나도 이제 해 볼까?")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear),
  ])
textGame.addBranch(branch_3_1_2);

const rand = Math.random();
const branch_3_2 = new Branch("branch_3_2", null)
  .addEventsAsPage([
    CanvasEvent.addImage( // 네이비즘
      "navysim",
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
    SoundEvent.sfx("audio/HeartShaker.mp3"),
    TextBarEvent.text(null, "1초에 내 운명이 결정된다… 59.95초! 클릭한다!")
  ])
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("클릭하기", (rand <= 0.5) ? "branch_3_2_1" : "branch_3_2_2")
    ])
  ]);
textGame.addBranch(branch_3_2);

const branch_3_2_1 = new Branch("branch_3_2_1", "branch_4")
  .addEventsAsPage([
    CanvasEvent.removeObject("navysim", imageHideType.Disappear),
    TextBarEvent.text(null, "[계획했던 대로 올클리어!]"),
    CanvasEvent.addImage(
      "nayeon", // 아연
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage("아연", "뭐야~ 대단하잖아!")
  .addTextPage(null, "여기저기서 욕설이 들리는 가운데, 아연 누나가 칭찬을 해 주었다.")
  .addTextPage("아연", "나는 교수님께 증원 메일 보내야 해서 ㅎㅎ 먼저 가~")
  .addTextPage(null, "누나에게 인사를 하고 나왔다. 대학생활의 첫 단추를 잘 끼운 것 같다!")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_3_2_1);

const branch_3_2_2 = new Branch("branch_3_2_2", "branch_4")
  .addEventsAsPage([
    CanvasEvent.removeObject("navysim", imageHideType.Disappear),
    TextBarEvent.text(null, "[연달아 뜨는 실패 팝업]"),
    CanvasEvent.addImage(
      "nayeon", // 아연
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn,
    ),
  ])
  .addTextPage(null, "이런! 손이 느려서 학점 잘 주기로 소문난 교수님 수업을 3개 놓쳤다.")
  .addTextPage("아연", "망했구나? 첫 수강신청이면 그럴 수 있어. 괜찮아~ 누나랑 같이 증원 신청 메일 쓰자.")
  .addTextPage(null, "대신 누나와 함께 교수님께 보낼 메일을 쓰며 친해질 수 있었다. 오히려 좋아!")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear)
  ])
textGame.addBranch(branch_3_2_2);

const branch_4 = new Branch("branch_4", null) // 동아리 홍보 부스, 여기부터 시작!
  .addTextPage(
    "...",
    "나연누나 생각을 하던 중이라 겨우겨우 대답해낼 수 있었다. 나연누나도 기억해주고 있으니, 이제 같이 밥먹는건 시간문제다."
  )
  .addTextPage(
    "...",
    "나연누나와 더 이야기를 나누려던 중 다른 친구들이 순식간에 몰려오고, 얘기할 수 없는 분위기가 되어버렸다."
  )
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear)
  ])
  .addTextPage("동희", "할 수 없지, 방과 후 시간을 노려야겠다.")

  .addEventsAsPage([
    TextBarEvent.text(null, "[5시간 후]"),
    CanvasEvent.changeBackGround("images/backgrounds/school.jpg")
  ])

  .addTextPage("선생님", "자 그러면 오늘은 여기까지 하겠습니다")
  .addTextPage("...", "이제 기회가 돌아왔다. 단축수업인 오늘이 최적의 기회다!")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "nayeon",
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn
    )
  ])
  .addTextPage("동희", "나연눈나!")
  .addTextPage("나연", "응?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("저기...", "branch_5"),
      new BranchPair("나랑 밥 먹으러 갈래?", "branch_4_1")
    ])
  ]);
textGame.addBranch(branch_4);

const branch_4_1 = new Branch("branch_4_1", null)
  .addTextPage("동희", "나랑 같이 밥 먹으러 갈래?")
  .addTextPage(
    "나연",
    "그럴까? 어제 약속한것도 있고, 마침 배도 고팠는데 잘됐다."
  )
  .addTextPage("...", "성공이다 성공! 드디어 나연누나와 밥을 먹을 수 있다!")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow",
      "images/characters/Shadow.png",
      modelPosition.right,
      imageShowType.FadeIn
    )
  ])
  .addTextPage(
    "반 친구1",
    "나연아 우리 같이 밥 먹으러 가자! 학교 앞에 새로 생긴 떡볶이집 진짜 맛있더라!"
  )
  .addTextPage(
    "...",
    "위험해 위험해 위험해. 나연누나와 밥 먹을 기회가 날아가게 생겼다! 제발 나연눈나가 나를 선택해주기를..."
  )
  .addTextPage(
    "나연",
    "미안, 오늘은 동희랑 같이 먹기로 해서. 다음에 같이 먹자."
  )
  .addEventsAsPage([
    CanvasEvent.removeObject("shadow", imageHideType.Disappear)
  ])
  .addTextPage("...", "감사합니다 신이시여.. 나연눈나시여....")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear)
  ])
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/mealWithNayoen.png"),
    DelayEvent.delay(2000)
  ])
  .addEndingAsPage("END - 밥먹기 성공");

textGame.addBranch(branch_4_1);

const branch_5 = new Branch("branch_5", null)
  .addTextPage("동희", "그 있잖아 오늘..")
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow1",
      "images/characters/Shadow.png",
      modelPosition.left,
      imageShowType.FadeIn
    )
  ])
  .addTextPage(
    "반 친구1",
    "나연아 우리 같이 밥 먹으러 가자! 학교 앞에 새로 생긴 떡볶이집 진짜 맛있더라!"
  )
  .addEventsAsPage([
    CanvasEvent.addImage(
      "shadow2",
      "images/characters/Shadow.png",
      modelPosition.right,
      imageShowType.FadeIn
    )
  ])
  .addTextPage("반 친구2", "맞아! 어제 가봤는데 완전 장난 아니야.")
  .addTextPage(
    "...",
    "어떻게 말해야 할지 고민하던 중 다른 애들이 몰려와 말할 기회를 놓쳐버렸다."
  )
  .addTextPage("나연", "동희야 밥은 다음에 사줘, 오늘은 약속이 생겨서")
  .addTextPage("동희", "아.. 으응..")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear),
    CanvasEvent.removeObject("shadow1", imageHideType.Disappear),
    CanvasEvent.removeObject("shadow2", imageHideType.Disappear)
  ])
  .addTextPage("...", "어쩔 수 없나.. 다음을 기약해야겠다.")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/home.jpg"),
    TextBarEvent.text(null, "[다음날 집]")
  ])
  .addTextPage(
    "...",
    "어제는 실패했지만 오늘은 토요일! 오늘 점심이 두번째 기회다."
  )
  .addTextPage("...", "나연누나에게 먼저 연락해볼까?")
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("지금은 연락할 때가 아니다", "branch_6"),
      new BranchPair("연락해보자", "branch_5_1")
    ])
  ]);
textGame.addBranch(branch_5);

const branch_5_1 = new Branch("branch_5_1", null)
  .addTextPage("동희", "오늘 같이 밥 먹으러 갈래?")
  .addTextPage("나연", "그럴까? 오늘 마침 시간이 남는데, 잘됐다.")
  .addTextPage("...", "성공이다 성공! 드디어 나연누나와 밥을 먹을 수 있다!")
  .addTextPage("...", "나는 바로 옷을 갖춰입고 학교로 향했다.")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/street.jpg"),
    DelayEvent.delay(500),
    TextBarEvent.text(null, "[학교 앞]")
  ])
  .addEventsAsPage([
    CanvasEvent.addImage(
      "nayeon",
      "images/characters/Nayeon.png",
      modelPosition.center,
      imageShowType.FadeIn
    )
  ])
  .addTextPage("나연", "어디로 먹으러 갈거야?")
  .addTextPage("동희", "내가 아는 맛집이 한곳 있는데...")
  .addEventsAsPage([
    CanvasEvent.removeObject("nayeon", imageHideType.Disappear)
  ])
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/mealWithNayoen.png"),
    DelayEvent.delay(3000)
  ])
  .addEndingAsPage("END - 밥먹기 성공2");

textGame.addBranch(branch_5_1);

const branch_6 = new Branch("branch_6", null)
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/Sayonara.mp3"),
    TextBarEvent.text(null, "[며칠 후]")
  ])
  .addTextPage(
    "...",
    "그렇게 며칠을 미루고 미뤘을까... 코로나 바이러스가 찾아와 더이상 나연눈나와 만날수 없게 되었다. 그떄를 아무리 후회하더라도 더이상 돌이킬 수 없다."
  )
  .addTextPage(
    "...",
    "끝없는 후회만을 반복하고 있는 내게 나연눈나가 연락해왔다."
  )
  .addEventsAsPage([
    SoundEvent.sfx("audio/katalk.mp3"),
    CanvasEvent.addImage(
      "phone2",
      "images/characters/phoneTalk.png",
      modelPosition.center,
      imageShowType.FadeIn
    )
  ])
  .addTextPage("나연", "-뭐해? 나는 지금 밥먹는데")
  .addTextPage("...", "밥을 먹고있어봤자 나는 가지도 못하고.. 의미없을 뿐이다.")
  .addEventsAsPage([
    CanvasEvent.removeObject("phone2", imageHideType.Disappear),
    SoundEvent.sfx("audio/PhoneRing.mp3")
  ])
  .addTextPage(null, "(따르르릉-)")
  .addTextPage(
    "...",
    "힘없이 늘어진 내게 갑자기 전화가 걸려왔다. 모르는 번호, 받아볼까?"
  )
  .addEventsAsPage([
    TextBarEvent.branch([
      new BranchPair("받는다", "branch_6_1"),
      new BranchPair("받지 않는다", "branch_6_2")
    ])
  ]);
textGame.addBranch(branch_6);

const branch_6_1 = new Branch("branch_6_1", null)
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/Confession.mp3"),
    TextBarEvent.text("...", "나는 전화를 받기로 했다.")
  ])
  .addTextPage("나연", "동희야 뭐해?")
  .addTextPage(
    "...",
    "무시하려 했던 모르는 번호는 나연눈나의 번호였다. 나연눈나의 다정한 목소리에, 어쩐지 눈물이 흘렀다."
  )
  .addTextPage("동희", "밥 먹으려고 준비하던 중이였어.")
  .addTextPage(
    "나연",
    "잘됐다. 나도 이제 먹으려는데, 혼자 먹으려니까 심심해서. 같이 통화하면서 먹을까?"
  )
  .addTextPage(
    "...",
    "온라인으로나마 같이 밥을 먹을 수 있게 된 건가. 기뻐해야 할지 슬퍼해야 할지, 혼란스럽다."
  )
  .addTextPage("나연", "왜 대답이 없어? 혹시 바빠?")
  .addTextPage("동희", "아.. 아냐... 좋아")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/NayeonScreen.png"),
    DelayEvent.delay(3000)
  ])
  .addEndingAsPage("END - 온라인으로 밥먹나연");

textGame.addBranch(branch_6_1);

const branch_6_2 = new Branch("branch_6_2", null)
  .addEventsAsPage([
    SoundEvent.stopbackground(),
    SoundEvent.background("audio/background/JustMonika.mp3"),
    TextBarEvent.text(
      "...",
      "나연누나와 밥을 먹지도 못하는데, 전화 따위가 눈에 들어올리 없다."
    )
  ])
  .addTextPage(
    "...",
    " 나연누나와 같은 반이 되었는데 같이 밥을 먹지도 못하고, 슬픔에 눈물만 하염없이 흐른다."
  )
  .addTextPage(
    "...",
    "문득 나를 이렇게 만든 세상에 대해 화가 났다. 미치도록 화가 나서 견딜 수가 없어 소리쳤다."
  )
  .addTextPage("동희", "나 다시 돌아갈래!!")
  .addTextPage("...", "소리치는 내게 어쩐지 시끄러운 소리가 머릿속에 울렸다.")
  .addEventsAsPage([
    SoundEvent.sfx("audio/HeartDeath.mp3"),
    TextBarEvent.text("...", "(삑- 삑- 삑- 삐————-)")
  ])
  .addTextPage(
    "...",
    "응급실에서나 들릴 법한 소리. 이해할 수 없는 상황. 그떄, 머릿속에 한가지 기억이 번뜩였다."
  )
  .addTextPage("동희", "아.. 그때 트럭...")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/NayeonTruck.png")
  ])
  .addTextPage("동희", "난.. 죽어버린건가")
  .addEventsAsPage([
    CanvasEvent.changeBackGround("images/backgrounds/death.png"),
    DelayEvent.delay(3000)
  ])
  .addEndingAsPage("TRUE END - 꿈");

textGame.addBranch(branch_6_2);
