const wordList = [
  {
    word: "search",
    hint: "act to find something",
  },
  {
    word: "svg",
    hint: "a vector image format",
  },
  {
    word: "love",
    hint: "a feeling",
  },
  {
    word: "idea",
    hint: "a thought or suggestion",
  },
  {
    word: "server",
    hint: "related to computer or server",
  },
  {
    word: "hate",
    hint: "act to find something",
  },
  {
    word: "food",
    hint: "act to find something",
  },
  {
    word: "life",
    hint: "act to find something",
  },
  {
    word: "earth",
    hint: "a planet of our solar system",
  },
  {
    word: "name",
    hint: "act to find something",
  },
  {
    word: "house",
    hint: "act to find something",
  },
  {
    word: "goat",
    hint: "act to find something",
  },
  {
    word: "guitar",
    hint: "act to find something",
  },
  {
    word: "aim",
    hint: "act to find something",
  },
  {
    word: "gold",
    hint: "a yellow precious metal",
  },
  {
    word: "venus",
    hint: "a planet of our solar system",
  },
  {
    word: "mecury",
    hint: "a planet of our solar system",
  },
  {
    word: "pluto",
    hint: "a planet of our solar system",
  },
  {
    word: "mars",
    hint: "a planet of our solar system",
  },
  {
    word: "crema",
    hint: "a brownish foam that forms on the top of freshly made coffe",
  },

  {
    word: "crowdfund",
    hint: "fund a project from lots of people who usually donate a small amount.",
  },

  { word: "crunk", hint: "very excited or full of energy" },

  { word: "droolworthy", hint: "extremely attractive or desirable" },

  {
    word: "eggcorn",
    hint: "word or phrase that results from a mishearing because of similar sounds",
  },

  {
    word: "emoji",
    hint: "a small digital image or icon used to express an idea, emotion",
  },

  {
    word: "facepalm",
    hint: "cover one's face with the hand as an expression of embarrassment, dismay, or exasperation",
  },

  {
    word: "facerape",
    hint: "hack someone's social-media profile in order to fiddle with its personal information or to post fake status updates",
  },

  {
    word: "fomo",
    hint: "the fear of missing out, the anxiety that an exciting or interesting event may currently be happening elsewhere",
  },

  {
    word: "foodie",
    hint: "a person with a particular interest in food; a gourmet",
  },

  { word: "frankenfood", hint: "genetically modified food" },

  {
    word: "freegan",
    hint: "a person who rejects consumerism and seeks to help the environment by reducing waste",
  },

  {
    word: "frenemy",
    hint: "a person with whom one is friendly despite a fundamental dislike",
  },

  {
    word: "frousin",
    hint: "a friend that is a cousin or a cousin that is a friend, very close relationship as family members",
  },

  {
    word: "froyo",
    hint: "frozen yogurt, a slightly sour thick food made from milk, and often sugar and fruit",
  },

  { word: "ginger", hint: "a person with red hair" },

  {
    word: "glamping",
    hint: "outdoor camping with amenities and comforts, such as beds and electricity, not usually used when camping",
  },

  { word: "hangry", hint: "bad-tempered or irritable as a result of hunger" },

  {
    word: "blade",
    hint: "the flat part of a tool that has a cutting edge",
  },
  { word: "accidial", hint: "dial someone's number on phone accidentally" },

  { word: "agender", hint: "people do not identify as male or female" },

  {
    word: "airball",
    hint: "completely miss the basket, rim, and backboard with a shot",
  },

  {
    word: "automagically",
    hint: "in a way that seems magical, especially by computer",
  },

  { word: "awesomesauce", hint: "extremely good; excellent" },

  {
    word: "bargainous",
    hint: "costing less than expected, cheap or relatively cheap",
  },

  {
    word: "barista",
    hint: "a person whose job involves preparing and serving different types of coffee",
  },

  {
    word: "bedunged",
    hint: "has been soiled with or covered in dung; very old or old-fashioned.",
  },

  {
    word: "binge-watch",
    hint: "watch multiple episodes of a television program in rapid succession",
  },

  {
    word: "bitcoin",
    hint: "an online payment system that does not require an intermediary",
  },

  {
    word: "bling",
    hint: "jewellery, decoration, or clothing that attracts attention because looks expensive",
  },

  {
    word: "blog",
    hint: "a regularly updated website or web page, typically one run by an individual or small group",
  },

  {
    word: "bokeh",
    hint: "the visual quality of the out-of-focus areas of a photographic image, especially as rendered by a particular lens",
  },

  {
    word: "bongga",
    hint: "impressive, stylish, lacking restraint in spending money or using resources",
  },

  {
    word: "Brexit",
    hint: "a term for the potential or hypothetical departure of the United Kingdom from the European Union",
  },

  {
    word: "bromance",
    hint: "a close but non-sexual relationship between two men.",
  },

  { word: "buko", hint: "coconut, coconut water; a green, unripe coconut" },

  {
    word: "butt-dial",
    hint: "inadvertently call on a mobile phone in one's rear pants pocket, as a result of pressure being accidentally applied",
  },

  {
    word: "butthurt",
    hint: "the strong negative emotional response from a perceived personal insult, intense feelings of shame",
  },

  { word: "buzzkill", hint: "person or thing that has a depressing effect" },

  { word: "catastrophize", hint: "present a situation as worse than it is" },

  { word: "cheeseball", hint: "lacking taste, style, or originality" },

  { word: "chillax", hint: "calm down and relax" },

  {
    word: "clickbait",
    hint: "online content to attract more visitors to a particular website",
  },

  {
    word: "conlang",
    hint: "an invented language intended for human communication",
  },
  {
    word: "homeshoring",
    hint: "moving jobs to employees' homes from offices or factories",
  },

  {
    word: "humblebrag",
    hint: "make a seemingly modest or self-critical to draw attention to something of which one is proud",
  },

  {
    word: "hyperconnected",
    hint: "characterized by the widespread or habitual use of devices that have Internet connectivity",
  },

  {
    word: "hypermiling",
    hint: "the practice of using driving techniques that will maximize the vehicle's fuel economy",
  },

  {
    word: "idiocracy",
    hint: "an act or actions that come from ideas or beliefs that are not smart",
  },

  {
    word: "illiterati",
    hint: "people who are not well educated or well informed about a particular subject",
  },

  {
    word: "infomania",
    hint: "compulsive desire to check or accumulate information, typically via the Internet",
  },

  {
    word: "jeggings",
    hint: "tight-fitting stretch trousers for women, styled to resemble a pair of denim jeans",
  },

  {
    word: "kadult",
    hint: "a person who is an adult in view of age but still acts like a child.",
  },

  {
    word: "listicle",
    hint: "an article consisting of a series of items presented as a list.",
  },

  {
    word: "locavore",
    hint: "a person whose diet consists only or principally of locally grown or produced food",
  },

  {
    word: "lookbook",
    hint: "a set of photographs displaying a fashion designer's new collection, assembled for marketing purposes",
  },

  {
    word: "MacGyver",
    hint: "make, form, or repair something with what is conveniently on hand",
  },

  { word: "mankini", hint: "a brief one-piece bathing garment for men" },

  {
    word: "manspreading",
    hint: "a man, especially on public transportation, sitting position with his legs wide apart to encroach on an adjacent seat",
  },

  {
    word: "matchy-matchy",
    hint: "excessively color-coordinated, being consists of too many of the same types of colors",
  },

  {
    word: "megachurch",
    hint: "huge church congregation, typically evangelical Christian",
  },

  { word: "meh", hint: "indifference; not very interesting or special" },

  {
    word: "memer",
    hint: "person who creates or distributes memes, usually humorous material copied and circulated online",
  },

  {
    word: "mic drop",
    hint: "deliberately dropping microphone at the end of a performance to have been particularly impressive",
  },

  {
    word: "microaggression",
    hint: "comment or action that subtly and often unintentionally expresses a prejudiced attitude toward someone",
  },

  {
    word: "microblog",
    hint: "a social media site to which a user makes short, frequent posts.",
  },

  {
    word: "mini-me",
    hint: "a person closely resembling a smaller or younger version of another",
  },

  {
    word: "muggle",
    hint: "a person who does not have a particular type of skill or knowledge",
  },

  {
    word: "mumblecore",
    hint: "a style of low-budget film typically characterized by the use of nonprofessional actors",
  },
  {
    word: "noob",
    hint: "a person who is inexperienced in a particular activity, especially use of the Internet or computer",
  },

  {
    word: "normie",
    hint: "an ordinary or normal person, who believes in popular opinion",
  },

  { word: "overleveraged", hint: "having taken on too much debt" },

  { word: "overshare", hint: "give out too much information" },

  {
    word: "photobomb",
    hint: "spoil a photograph by unexpectedly appearing in the camera's field of view as the picture is taken",
  },

  { word: "pimp", hint: "make something more showy or impressive" },

  {
    word: "ping",
    hint: "a signal sent from one computer to another across a network for usually diagnostic purposes",
  },

  {
    word: "prosopagnosia",
    hint: "inability to recognize faces, face blindness",
  },

  {
    word: "rage-quit",
    hint: "angrily abandon an activity or pursuit that has become frustrating, especially the playing of a video game",
  },

  {
    word: "rando",
    hint: "a person regarded as odd, suspicious, or engaging in socially inappropriate behaviour",
  },

  {
    word: "riff",
    hint: "play a short repeated phrase or tune in popular music and jazz",
  },

  {
    word: "screenager",
    hint: "a person in teens or twenties who has an aptitude for computers and the Internet",
  },

  {
    word: "selfie",
    hint: "a self portrait photograph taken with a handheld digital camera or smartphone",
  },

  { word: "selfiegenic", hint: "someone who looks attractive in selfies" },

  {
    word: "sheeple",
    hint: "unquestioning followers, who are easily to be led",
  },

  { word: "shruggie", hint: "an emoticon denoting a shrug" },

  {
    word: "side-eye",
    hint: "glance or gaze expressing scorn, suspicion, disapproval, or veiled curiosity",
  },

  {
    word: "skort",
    hint: "a pair of shorts with a flap across the front (and sometimes also the back) to give the appearance of a skirt.",
  },

  { word: "smober", hint: "a person who gives up smoking or nicotine use" },

  { word: "snackable", hint: "suitable to be eaten as a snack" },

  {
    word: "soft-skills",
    hint: "attributes that enable someone to interact harmoniously with others",
  },

  {
    word: "staycation",
    hint: "vacation spent at home or location, not abroad",
  },

  {
    word: "telationship",
    hint: "a relationship that only exists through electronic media",
  },

  {
    word: "textspeak",
    hint: "the kind of text messages, containing short forms of words",
  },
];
