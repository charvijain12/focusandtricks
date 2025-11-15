export interface Riddle {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
}

export const riddles: Riddle[] = [
  {
    id: 1,
    question: "I speak without a mouth and hear without ears. I have no body, but come alive with wind. What am I?",
    answer: "An echo",
    difficulty: "Medium",
    category: "Classic"
  },
  {
    id: 2,
    question: "What has keys but no locks, space but no room, and you can enter but can't go inside?",
    answer: "A keyboard",
    difficulty: "Easy",
    category: "Technology"
  },
  {
    id: 3,
    question: "I am always hungry and must always be fed. The finger I touch will soon turn red. What am I?",
    answer: "Fire",
    difficulty: "Medium",
    category: "Nature"
  },
  {
    id: 4,
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
    difficulty: "Easy",
    category: "Classic"
  },
  {
    id: 5,
    question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?",
    answer: "A map",
    difficulty: "Hard",
    category: "Geography"
  },
  {
    id: 6,
    question: "What can travel around the world while staying in a corner?",
    answer: "A stamp",
    difficulty: "Medium",
    category: "Objects"
  },
  {
    id: 7,
    question: "I'm tall when I'm young and short when I'm old. What am I?",
    answer: "A candle",
    difficulty: "Easy",
    category: "Objects"
  },
  {
    id: 8,
    question: "What goes up but never comes down?",
    answer: "Your age",
    difficulty: "Easy",
    category: "Time"
  },
  {
    id: 9,
    question: "The person who makes it doesn't need it. The person who buys it doesn't use it. The person who uses it doesn't know it. What is it?",
    answer: "A coffin",
    difficulty: "Hard",
    category: "Mystery"
  },
  {
    id: 10,
    question: "Hindi Jumble: AKHNA (Hint: Body part / शरीर का अंग)",
    answer: "ANKH (आँख - Eye)",
    difficulty: "Easy",
    category: "Hindi Jumble"
  },
  {
    id: 11,
    question: "Hindi Jumble: DMIAAG (Hint: Mind / दिमाग)",
    answer: "DIMAAG (दिमाग)",
    difficulty: "Medium",
    category: "Hindi Jumble"
  },
  {
    id: 12,
    question: "Hindi Jumble: PRIAAVR (Hint: Family / परिवार)",
    answer: "PARIVAR (परिवार)",
    difficulty: "Medium",
    category: "Hindi Jumble"
  },
  {
    id: 13,
    question: "Hindi Jumble: KSAABL (Hint: Word / शब्द)",
    answer: "SHABD (शब्द)",
    difficulty: "Easy",
    category: "Hindi Jumble"
  },
  {
    id: 14,
    question: "Hindi Jumble: KITTAAB (Hint: Book / किताब)",
    answer: "KITAAB (किताब)",
    difficulty: "Easy",
    category: "Hindi Jumble"
  },
  {
    id: 15,
    question: "Hindi Jumble: DSOTO (Hint: Friend / दोस्त)",
    answer: "DOST (दोस्त)",
    difficulty: "Easy",
    category: "Hindi Jumble"
  },
  {
    id: 16,
    question: "Hindi Jumble: PPYAAR (Hint: Love / प्यार)",
    answer: "PYAAR (प्यार)",
    difficulty: "Easy",
    category: "Hindi Jumble"
  },
  {
    id: 17,
    question: "Hindi Jumble: HSAALKA (Hint: School / स्कूल)",
    answer: "SHAALA (शाला)",
    difficulty: "Medium",
    category: "Hindi Jumble"
  }
];

export const dailyRiddle = riddles[Math.floor(Math.random() * riddles.length)];
