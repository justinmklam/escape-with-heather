const climbs_team1 = [
  {
    question: "What's the sum of the climbing grades of the climbs below? \n\n" +
      // Leavenworth
      "Sunshine Daydream\n" + // p.164, v4
      "Wookie Crack\n" + // p.246, v1
      "Finished Product\n" + // p.217, v9
      "Alpine Feel\n", // p.57, v0
    answer: "14",
    message: "Congrats!"
  },
];

const climbs_team2 = [
  {
    question: "What's the sum of the climbing grades of the climbs below? \n\n" +
      // Squamish 3e
      "Crystal Ball\n" + // p.65, v2
      "Special Effects\n" + // p.424, v8
      "Finished Product\n" + // p.217, v9
      "Wing Night\n", // p.306, v0
    answer: "19",
    message: "Congrats!"
  },
];

const climbs_team3 = [
  {
    question: "What's the sum of the climbing grades of the climbs below? \n\n" +
      // Squamish 4e
      "Limey Lover\n" + // p.253, v3
      "Hamstring Dyno\n" + // p.169, v5
      "Sushi Special\n" + // p.540, v12
      "Grounders\n", // p.440, v0
    answer: "20",
    message: "Congrats!"
  },
];

const orders_team1 = [
  {
    question: "Fill in the blanks as a single code: \n\n" +
      // Ottolenghi
      "__ medium eggplants\n" + // 4
      "__ tbsp pine nutes\n" + // 2
      "__ whole chicken\n" + // 1
      "__ plum tomatoes\n" + // 5
      "__ g dark musovado sugar", // 100
    answer: "4215100",
    message: "Congrats! Click <a href='?questionprefix=durians_all&team=team1'>here</a> to get your promo code!",
  },
]

const orders_team2 = [
  {
    question: "Fill in the blanks as a single code: \n\n" +
      // Oaxaca
      "__ bananas\n" + // 4
      "__ whole chicken\n" + // 1
      "__ black peppercorns\n" + // 12
      "__ cinnamon stick\n" + // 1
      "__ g dark-roast ground coffee", // 35
    answer: "4112135",
    message: "Congrats! Click <a href='?questionprefix=durians_all&team=team2'>here</a> to get your promo code!",
  },
]

const orders_team3 = [
  {
    question: "Fill in the blanks as a single code: \n\n" +
      // French guy cooking
      "__ large eggs\n" + // 4
      "__ carrots\n" + // 2
      "__ spring onions\n" + // 3
      "__ chillies\n" + // 3
      "__ rice wrappers", // 10
    answer: "423310",
    message: "Congrats! Click <a href='?questionprefix=durians_all&team=team3'>here</a> to get your promo code!",
  },
]

const novels_team1 = [
  {
    // Book cipher
    question: "Code to unlock the next clue:",
    answer: "123",
  },
  {
    // Singapore
    question: "Let's go to Singapore! Find the clues:",
    answer: "123",
    message: "Congrats! Getting board of games? GO <a href='https://mywordle.strivemath.com/?word=oijkt'>HERE<a>"
  }
]

const durians_all = [
  {
    question: "Surprise quiz time! What is the nickname often given to durian because of its strong smell?\n\n" +
      "a) The King of Fruits\n" +
      "b) The Queen of Fruits\n" +
      "c) The Emperor of Fruits\n" +
      "d) The Prince of Fruits\n",
    answer: "a",
  },
  {
    question: "Which variety of durian is considered one of the most popular and prized in Malaysia?\n\n" +
      "a) D24\n" +
      "b) Musang King\n" +
      "c) Red Prawn\n" +
      "d) XO\n",
    answer: "b",
  },
  {
    question: "In Singapore, where is durian often banned due to its strong odor?\n\n" +
      "a) Airports\n" +
      "b) Restaurants\n" +
      "c) Public transport\n" +
      "d) Parks\n",
    answer: "c",
  },
  {
    question: "What unique characteristic does the durian’s outer shell have?\n\n" +
      "a) It's smooth like a melon\n" +
      "b) It's covered in soft fuzz\n" +
      "c) It's spiky and hard\n" +
      "d) It's soft and leathery\n",
    answer: "c",
  },
  {
    question: "Which season is durian most commonly harvested in Malaysia?\n\n" +
      "a) Spring\n" +
      "b) Summer\n" +
      "c) Winter\n" +
      "d) Fall\n",
    answer: "b",
    message: {
      team1: "Thanks for playing! Find your promo code by the D888 durian!",
      team2: "Congrats D200",
      team3: "Congrats D233",
    }
  },
];

