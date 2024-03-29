export const worryListApi: string[] = ["연애", "학업", "취업", "가정", "친구"];
export interface QuestionsType {
  ask: string;
  answer: string[];
}

export const questions: QuestionsType[] = [
  {
    ask: "평소에는 아무렇지도 않던 일들이 귀찮게 느껴져?",
    answer: [
      "아니 평소와 같이 생활하고 있어.",
      "가끔 귀찮게 느껴져..",
      "자주 귀찮게 느껴져.. ",
      "거의 매일 귀찮고 하기싫다고 느껴져.."
    ]
  },
  {
    ask: "먹고 싶지 않거나, 입맛이 없어?",
    answer: [
      "아니 평소와 똑같이 맛있게 먹고있어",
      "가끔 입맛이 없어..",
      "자주 입맛이 없고 먹기가 싫어.",
      "거의 매일 입맛이 없고 먹기가 싫어"
    ]
  },
  {
    ask: "최근 일주일동안 우울하다고 생각한적이 있어?",
    answer: [
      "아니! ",
      "가끔 우울해.",
      "자주 우울하고 기운이 없어..",
      "대부분 우울하고 너무 힘들어.."
    ]
  },
  {
    ask: "가족이나 친구가 도와주더라고 우울한 기분을 떨쳐 버릴 수 없어?",
    answer: [
      "아니. 우울하지가 않아",
      "가족이나 친구가 도와주면 우울함이 날아가.",
      "조금은 위로가 되지만 그렇다고 우울함이 날아가진 않아..",
      "전혀 도움이 되지 않아.."
    ]
  },
  {
    ask: "다른 사람들 보다 능력이 없다고 느껴져?",
    answer: [
      "아니! 나만의 특별함이 있다고 생각해!",
      "가끔 그런 생각을 해.",
      "자주 그런생각이 들어..",
      "대부분 나는 남들보다 능력이 없다고 느껴.."
    ]
  },
  {
    ask: "무슨 일을 하든 집중하기 어려워?",
    answer: [
      "아니! 그냥 보통 이거나 보통 이상인거 인거 같아!",
      "가끔 집중이 잘 안돼.",
      "자주 집중을 못하겠어",
      "대부분 집중을 잘 못하겠어."
    ]
  },

  {
    ask: "하는 일마다 힘들게 느껴져?",
    answer: [
      "아니! 평소와 같이 느껴져",
      "가끔 기운이 없고 힘들어",
      "자주 그렇게 생각해..",
      "대부분 힘들게 느껴져.."
    ]
  },
  {
    ask: "최근 1주일동안 우울하다고 생각한적이 있어?",
    answer: [
      "아니! 우울하지 않아",
      "가끔 우울해.",
      "자주 우울해.. 힘들어..",
      "대부분 우울하고 기운이 없어.."
    ]
  },
  {
    ask: "미래에 대한 확신이 없고 무서워?",
    answer: [
      "아니! ",
      "가끔 우울해.",
      "자주 우울해.. 힘들어..",
      "대부분 우울하고 기운이 없어.."
    ]
  },
  {
    ask: "내 인생은 실패한거 같다고 생각한 적이 있어?",
    answer: [
      "최근에 그런적이 없는거 같아! ",
      "가끔 난 실패한거 같다고 생각을 해.",
      "자주 난 실패했다고 생각해..",
      "대부분 난 내 자신이 실패했다고 생각해."
    ]
  },
  {
    ask: "문득 두렵고 무서워?",
    answer: [
      "아니. 딱히 그런 생각이 안드는거 같아.",
      "가끔 모든게 다 무서울 때가 있어.",
      "자주 그렇게 느껴..",
      "대부분 두려움을 느껴.."
    ]
  },
  {
    ask: "잠을 잘 자지 못하거나, 낮과 밤이 바꼈어?",
    answer: [
      "잘 시간에 자고 깨어있을 때 깨어있어!",
      "가끔 잠이 안와.",
      "자주 잠이 안와서 낮에 잔적도 있어..",
      "대부분 저녁에 잠이 안와 낮과 밤이 바꼈어.."
    ]
  },
  {
    ask: "세상에 나 혼자 있는 듯한 외로움을 느껴?",
    answer: [
      "아니! 난 요즘 외롭지 않아!",
      "가끔 아무도 날 도와주지 않는다고 생각해.",
      "자주 세상에 나 혼자 있는듯한 외로움을 느껴..",
      "대부분 세상에 나 혼자 있고 아무도 나 에게 관심없는거 같아.."
    ]
  },
  {
    ask: "일상 생활이 재미가 없고, 왜 사는지 모르겠어?",
    answer: [
      "아니! 난 요즘 만족해!",
      "가끔 지루하고 재미 없어",
      "자주 지루하고 내가 왜 사는지 모르겠어..",
      "대부분 삶이 지루하고 왜 살고있는지 모르겠어.."
    ]
  },
  {
    ask: "최근에 갑자기 운적이 있어?",
    answer: [
      "아니! 딱히 울만한 일이 없어",
      "가끔 눈물을 흘리곤 해",
      "자주 우울하고 우울해서 운적이 있어..",
      "항상 우울하고 거의 매일 울면서 지내.."
    ]
  },
  {
    ask: "문득 슬픈적은?",
    answer: [
      "아니! 딱히 슬픈 일이 없어",
      "가끔 슬퍼서 가만히 생각해",
      "자주 슬프고 일상생활에 지장이 생겨..",
      "항상 슬프고 일상생활을 하지 못하겠어.."
    ]
  },
  {
    ask: "사람들이 나를 싫어하는거 같아?",
    answer: [
      "아니! 잘 어울려 생활하는거 같아!",
      "가끔 몇몇의 사람들은 날 싫어하는거 같아.",
      "자주 많은 사람들이 날 싫어한다고 느껴..",
      "항상 대부분 사람들이 날 싫어하는거 같아.."
    ]
  },
  {
    ask: "도무지 무엇을 시작할 기운이 나지 않아?",
    answer: [
      "아니! 난 하고싶은 일이 있어!",
      "가끔 무기력하고 기운이 없어.",
      "자주 무기력하고 해야할 일을 하지 못해..",
      "항상 무기력하고 할일을 못해서 스트레스를 받아.."
    ]
  }
];

export interface ResultCommentType {
  firstComment: string;
  mainComment: string;
}

export function resultComment(
  name: string,
  score: number,
  worry: string
): ResultCommentType {
  let resultComment = {
    firstComment: "",
    mainComment: ""
  };
  const firstComment = [
    `${name} (이)는 25점 이상으로 굉장히 심한 우울감을 느끼고 있어`,
    `${name} (이)는 21점 이상으로 중증도의 우울감을 느끼고 있어.`,
    `${name} (이)는 16점 이상으로 조금 우울함을 느끼고 있어.`,
    `${name} (이)는 굉장히 마음이 건강한 상태야!.`
  ];
  const result: any = [
    {
      연애: `${name} (이)의 고민은 연애구나.. ${name} (이)는 아주 많이 심각하게 우울함을 느끼고 있어. 어떤 고민인지 너무 들어주고 싶은데 내가 해줄수 있는게 없네.. 내가 해주고 싶은 말은 연애할 때 연인이 1순위가 되겠지만 우리 연애 때매 스트레스 받는 시점에서는 그 사람을 1순위로 보지 말고 ${name} (이)를 먼저 바라봐 주는게 어떨까? 마음을 가라앉치고 우리 이성적으로 한번 생각해 보는게 좋을거 같아!`,
      가정: `${name} (이)의 고민은 가정 이구나.. ${name} (이)는 아주 많이 심각하게 우울함을 느끼고 있어. 말하기 쉽지 않은 고민인데 말해줘서 고마워. 내가 함부로 말할수가 없는 부분이라 말을 꺼내기 굉장히 조심스럽다. 많은 친구들이 가정에 문제가 생기면 자신의 탓이라고 생각한데. 너무 자신을 몰아 세우지 말고 우리 주위에 말해보거나 심리상담센터에 한번 도움을 청해보는게 어떨까? 난 ${name} (이)가 조금더 용기를 내 상담센터에 고민을 털어놨으면 좋겠어.`,
      학업: `${name} (이)의 고민은 공부구나 ${name} (이)는 아주 많이 심각하게 우울함을 느끼고 있어. 우울할 때 집 안에 있거나 밤에 늦게 자면 좋지 않아. 밖에 나가서 시원한 바람도 맞으며 잘 해결 했으면 좋겠다`,
      친구: `${name} (이)의 고민은 친구구나 ${name} (이)는 아주 많이 심각하게 우울함을 느끼고 있어. 우울할 때 집 안에 있거나 밤에 늦게 자면 좋지 않아. 밖에 나가서 시원한 바람도 맞으며 잘 해결 했으면 좋겠다`,
      취업: `${name} (이)의 고민은 취업이구나 ${name} (이)는 아주 많이 심각하게 우울함을 느끼고 있어. 우울할 때 집 안에 있거나 밤에 늦게 자면 좋지 않아. 밖에 나가서 시원한 바람도 맞으며 잘 해결 했으면 좋겠다`
    },
    {
      연애: `${name} (이)의 고민은 연애로 알고있는데 ${name} (이)는 상당히 자주 우울함을 느끼고 있는거 같아. 연애 정말 어렵지? 어떻게 해야할지 모르겠고.. 연애할 때 연인이 1순위가 되겠지만 우리 연애 때매 스트레스 받는 시점에서는 그 사람을 1순위로 보지 말고 ${name} (이)를 먼저 바라봐 주는게 어떨까? 마음을 가라앉치고 우리 이성적으로 한번 생각해 보는게 좋을거 같아!`,
      가정: `${name} (이)의 고민은 가정문제구나.. ${name} (이)는 상당히 자주 우울함을 느끼고 있는거 같아.. 어디 털어놓기 쉽지도 않지? 다 이해해. 이 문제로 우울함을 느낀지 2주일이 이상이 되었다면 나는 개인적으로 심리상담을 받는걸 추천하고 싶어. 아무래도 혼자 해결하기 쉽지 않은 문제잖아. 상당수의 친구들이 가정의 문제를 자기 때문이라고 생각한데. 내가 알지도 못하고 많은 말을 해줄순 없지만 모든게 ${name} (이)의 탓은 아니라고 꼭 말해주고 싶어!`,
      학업: `${name} (이)의 고민은 공부구나.. ${name} (이)는 상당히 자주 우울감을 느끼고 있는거 같아.. 어떤 고민인지는 정확히 모르지만, 너무 스트레스를 받는다면 한 30분 정도 산책을 하는게 어떨까? 이렇게 까지 스트레스 받으며 공부를 할 필요는 없는거 같아. 공부도 중요하지만 난 ${name} (이)가 정신적으로 건강한게 최고라 생각해! 스트레스가 견디기 힘들정도로 받는다면 우리 꼭 밖에 나가서 10분이라도 산책 하는거다!`,
      친구: `${name} (이)의 고민은 친구구나.. ${name} (이)는 상당히 자주 우울함을 느끼고 있는거 같아.. 우울할 때 집 안에 있거나 밤에 늦게 자면 좋지 않아. 밖에 나가서 시원한 바람도 맞으며 잘 해결 했으면 좋겠다 `,
      취업: `${name} (이)의 고민은 취업 이구나.. ${name} (이)는 이 문제로 많이 우울함을 느끼고 있는거 같아.. 취업준비를 하다보면 면전에서, 서류에서 탈락하면서 자존감이 많이 낮아진다고 해. 하지만 회사의 목표와 ${name} (이)의 목표가 공통되지 않을 뿐 누구보다 부족한게 아니니 낙심하지 말고 너무 스트레스 받을 땐 스트레스를 잠시 풀어보는게 어때? 천천히 준비하다 보면 좋은 결과가 있을거야!`
    },
    {
      연애: `${name} (이)의 고민은 연애구나.. ${name} (이)는 가벼운 우울함을 느끼고 있는거 같아. 너무 감정적을 앞세우지 말고 한번 주위에 조언을 얻어보는것도 괜찮은 방법이야!`,
      가정: `${name} (이)의 고민은 가정이구나.. 정말 어려운 문제지.. ${name} (이)는 가벼운 우울함을 느끼고 있는데, 이 문제는 누구에게 얘기하기도 어려울거 같아.. 하지만 혼자 해결하기 너무 버겁다면 주위 사람들이나 심리상담 전문가에게 고민을 털어놓는것도 괜찮을거 같아!`,
      학업: `${name} (이)의 고민은 학업이구나.. ${name} (이)는 가벼운 우울함을 느끼고 있어. 만약 고민이 공부라면 우리 잠깐 나가서 아무 생각없이 걸어보는것도 나쁘지 않을거 같아. 인생은 공부가 다가 아니니까 진짜 하고싶은, 가슴 떨리는 일을 찾으면 좋겠다!`,
      친구: `${name} (이)의 고민은 친구 구나.. ${name} (이)는 가벼운 우울함을 느끼고 있어. 친구와 싸웠다면 서로 속 터놓고 한번 얘기 해보는게 어떨까? 지는게 이기는 거라는 말도 있잖아! ${name} (이)가 만약 학생이라면 1388에 전화해 고민을 털어 놓는것도 하나의 방법이기도 해! 용기 내기 힘들겠지만 우리 한번 용기 내보자! `,
      취업: `${name} (이)의 취업 이구나.. ${name} (이)는 가벼운 우울함을 느끼고 있어. 요즘 취업이 쉽지 않지.. 취업준비 하면서 많이들 자존감이 낮아진다고 하던데 회사와 ${name} (이)가 맞지 않을뿐 네가 누구보다 떨어진다는 소리가 아니야! 너무 낙심하지 말고 산책이라도 하면서 스트레스를 잠시 풀어보는게 어때? 천천히 준비하다 보면 좋은 결과가 있을꺼야! `
    },
    {
      연애: `${name}의 고민이 연애로 알고있는데 많은 우울감을 느끼고 있진 않은거 같아! 좋은 결과가 기다리고 있을꺼야!`,
      가정: `${name}의 고민이 개쟝로 알고있는데 점수는 아주 낮게 나왔어! 내가 한마디만 더 붙이자면 가정의 불화를 대부분 자기 탓으로 돌린다고 하더라고, 친구나 연인끼리도 서운함을 말 하지 않으면 안좋은 감정이 쌓이기 마련이야! 속 터놓고 한번 얘기해보는게 어떨까?`,
      학업: `${name}의 고민이 학업으로 알고있는데 점수가 낮게 나왔어! 공부도 좋지만 우리 잠깐 산책이라도 하면서 스트레스를 풀어보는게 어떨까??`,
      친구: `${name}의 고민은 친구문제구나! 많은 고민이 되겟어.. 하지만 ${name}는 우울지수가 상당히 낮아 아주 좋은 상태야 그 고민 원만하게 해결되길 바랄게!`,
      취업: `${name} (이)의 고민은 취업이구나. 요즘 일 자리 찾기가 쉽지 않지.. ${name} (이)의 우울지수가 그렇게 높진 않으니 천천히 잘 준비하다 보면 좋은 자리를 찾을수 있을거야!`
    }
  ];
  if (score >= 25) {
    return {
      ...resultComment,
      firstComment: firstComment[0],
      mainComment: result[0][worry]
    };
  } else if (score >= 21) {
    return {
      ...resultComment,
      firstComment: firstComment[1],
      mainComment: result[1][worry]
    };
  } else if (score >= 16) {
    return {
      ...resultComment,
      firstComment: firstComment[2],
      mainComment: result[2][worry]
    };
  } else if (score >= 1) {
    return {
      ...resultComment,
      firstComment: firstComment[3],
      mainComment: result[3][worry]
    };
  }
  return resultComment;
}
