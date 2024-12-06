

// Constants
const version = "2.3.0";
const minute = 60000;
const whiteColor = "#ffffff";
const blackColor = "#000000";
const PoiId = 89322;
const PoiBotId = 181305;
const MaidCafeData = {
  dollDisplays: [
    [12, 19],
    [14, 19],
    [16, 19],
    [22, 19],
    [24, 19],
    [26, 19],
  ],
  jailCells: [
    [16, 9],
    [16, 7],
    [16, 5],
    [16, 3],
    [16, 1],
    [22, 9],
    [22, 7],
    [22, 5],
    [22, 3],
    [22, 1],
  ],
  overflowCells: [
    [8, 1],
    [10, 1],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [1, 3],
    [2, 3],
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  throneFront: [19, 4],
  beltMoveWest: [
    [29, 25],
    [28, 25],
    [27, 25],
    [25, 25],
    [24, 25],
    [23, 25],
    [21, 25],
    [20, 25],
    [19, 25],
    [17, 25],
    [16, 25],
    [15, 25],
    [13, 25],
  ],
  beltMoveNorth: [
    [12, 25],
    [12, 24],
    [12, 23],
    [12, 22],
  ],
  room3FailTiles: [
    [11, 32],
    [16, 32],
    [18, 35],
  ],
};

// sets
const dollDisplay = {
  ItemDevices: {
    Name: "TheHangingFrame",
    Color: ["#323232", "Default", "#656565", "#CACACA"],
    Craft: {
      Item: "TheHangingFrame",
      Name: "Poi的手办架",
      Description: "店长的收藏品~",
      Color: "#323232,Default,#656565,#CACACA",
      Property: "Strong",
      Lock: "",
      Private: false,
      ItemProperty: { OverridePriority: { Frame: 7, Belts: 53 } },
      Type: null,
      TypeRecord: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      TypeRecord: { typed: 0 },
      OverridePriority: { Frame: 7, Belts: 53 },
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
};

const petSuit = {
  ItemArms: {
    Name: "BitchSuit",
    Color: ["#BBBBBB", "#000000", "#010101", "#FFFFFF", "#FFFFFF"],
    Craft: {
      Item: "BitchSuit",
      Name: "舒适的女仆猫猫服",
      Description: "店长亲手制作的舒适的猫猫服，为长时间穿戴而设计",
      Color: "#BBBBBB,#000000,#010101,#FFFFFF,#FFFFFF",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: {
        z: 3,
        st: 1,
        cl: 1,
        un: 2,
      },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: -12,
    Property: {
      TypeRecord: {
        z: 3,
        st: 1,
        cl: 1,
        un: 2,
      },
      Difficulty: 3,
      Block: [
        "ItemPelvis",
        "ItemTorso",
        "ItemTorso2",
        "ItemHands",
        "ItemHandheld",
      ],
      Effect: ["Block", "BlockWardrobe", "Slow", "Lock"],
      Hide: [
        "Shoes",
        "ItemBoots",
        "ItemLegs",
        "ItemFeet",
        "Gloves",
        "Hands",
        "LeftHand",
        "RightHand",
        "ItemHandheld",
        "ItemHands",
      ],
      HideItem: [
        "ItemNipplesLactationPump",
        "ClothAccessoryPoncho",
        "NecklaceBodyChainNecklace",
        "SuitBlouse1",
        "BraLatexBunnySuit",
        "BraHeartTop",
        "BraCamisole",
        "BraStuddedHarness",
        "PantiesBikini1",
        "PantiesHarnessPanties2",
        "SocksSocks6",
        "SocksSocksFur",
      ],
      AllowActivity: [],
      Attribute: [],
      OverridePriority: 14,
      LockedBy: "",
      LockMemberNumber: 159349,
    },
  },
};

const treeBranches = {
  ItemMouth: {
    Name: "RopeBallGag",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Property: "",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: { TypeRecord: { typed: 1 }, Effect: ["GagNormal"] },
  },
  ItemArms: {
    Name: "HempRope",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: {},
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 1,
    Property: {
      TypeRecord: { typed: 1 },
      Difficulty: 1,
      SetPose: ["BackBoxTie"],
      AllowActivePose: ["BackBoxTie"],
    },
  },
  ItemPelvis: {
    Name: "HempRope",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: {},
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: { TypeRecord: { typed: 2 }, Difficulty: 4 },
  },
  ItemTorso: {
    Name: "HempRopeHarness",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: {},
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 2 },
      Difficulty: 1,
      Effect: ["CrotchRope"],
    },
  },
  ItemFeet: {
    Name: "HempRope",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: {},
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 2 },
      Difficulty: 2,
      SetPose: ["LegsClosed"],
      AllowActivePose: ["LegsClosed", "Kneel", "Hogtied", "AllFours"],
    },
  },
  ItemBoots: {
    Name: "ToeTie",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: null,
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 12,
  },
  ItemTorso2: {
    Name: "HempRopeHarness",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: null,
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 1,
      Effect: ["CrotchRope"],
    },
  },
  ItemLegs: {
    Name: "HempRope",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Property: "",
      Lock: "",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Private: true,
      TypeRecord: null,
      ItemProperty: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 2 },
      Difficulty: 4,
      SetPose: ["LegsClosed"],
      AllowActivePose: ["LegsClosed", "Kneel", "Hogtied", "AllFours"],
    },
  },
  ItemAddon: {
    Name: "CeilingRope",
    Color: ["#4E9F4E"],
    Craft: {
      Item: "ToeTie",
      Name: "神树的根须",
      Description: "神树面前不允许站立",
      Color: "#4E9F4E",
      Property: "",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 5,
    },
  },
};

const maidOutfit = {
  Cloth: {
    Name: "AdultBabyDress1",
    Color: ["#131313", "#FFFFFF", "#9E9E9E"],
    Difficulty: 0,
    Property: {
      OverridePriority: { Dress: 30, Sash: 31 },
      LSCGOpacity: [1, 1, 1],
    },
  },
  ClothAccessory: {
    Name: "FrillyApron",
    Color: "Default",
    Difficulty: 0,
  },
  Panties: { Name: "Panties16", Color: "Default", Difficulty: 0 },
  Socks: {
    Name: "GradientPantyhose",
    Color: ["#606060", "#444444"],
    Difficulty: 0,
    Property: { OverridePriority: { Upper: 0, Lower: 21 } },
  },
  SocksRight: {
    Name: "Socks4",
    Color: ["#070707"],
    Difficulty: 0,
    Property: { LSCGOpacity: 0.8 },
  },
  SocksLeft: {
    Name: "Socks4",
    Color: ["#070707"],
    Difficulty: 0,
    Property: { LSCGOpacity: 0.8 },
  },
  RightAnklet: {
    Name: "Ribbon1",
    Color: ["#313131"],
    Difficulty: 0,
    Property: { OverridePriority: 23 },
  },
  LeftAnklet: {
    Name: "Ribbon1",
    Color: ["#313131"],
    Difficulty: 0,
    Property: { OverridePriority: 23 },
  },
  Shoes: { Name: "AnkleStrapShoes", Color: ["#474747"], Difficulty: 0 },
  Hat: {
    Name: "MaidLatexHairband",
    Color: ["#888888", "#202020"],
    Difficulty: 0,
  },
  HairAccessory3: {
    Name: "Ribbons4",
    Color: ["#353535", "#353535"],
    Difficulty: 0,
  },
  HairAccessory1: {
    Name: "Ribbons1",
    Color: ["#CECECE", "#CECECE"],
    Difficulty: 0,
  },
  Bracelet: {
    Name: "LaceBands",
    Color: ["#B4B4B4", "#000000"],
    Difficulty: 0,
  },
  Wings: {
    Name: "蝴蝶结背饰_Luzi",
    Color: ["#999999"],
    Difficulty: 0,
    Property: { OverridePriority: 5 },
  },
  ClothAccessory_笨笨蛋Luzi: {
    Name: "StudentOutfit3Bow1",
    Color: ["#900000"],
    Difficulty: 0,
  },
};

const maidCollarSet = {
  ItemNeck: {
    Name: "LeatherChoker",
    Color: ["#DFDFDF", "#000000"],
    Craft: {
      Item: "LeatherChoker",
      Name: "Poi的女仆项圈",
      Description: "",
      Color: "#DFDFDF,#000000",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 160,
    Property: {
      Effect: ["Lock"],
      LockedBy: "ExclusivePadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemNeckAccessories: {
    Name: "CustomCollarTag",
    Color: ["#aaa366", "#000000"],
    Craft: {
      Item: "CustomCollarTag",
      Name: "Poi的女仆名牌",
      Description: "",
      Color: "#aaa366,#000000",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: { Text: "Pois Maid" },
      Type: null,
      TypeRecord: { t: 4, x: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 30,
    Property: {
      TypeRecord: { t: 4, x: 0 },
      Difficulty: 0,
      Text: "Pois Maid",
      Block: [],
      Effect: ["Lock"],
      Hide: [],
      HideItem: [],
      AllowActivity: [],
      Attribute: [],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
};

const lightRestraints = {
  ItemVulvaPiercings: {
    Name: "VibeHeartClitPiercing",
    Color: ["#CACACA", "#060606"],
    Craft: {
      Item: "VibeHeartClitPiercing",
      Name: "Poi的女仆阴蒂锁",
      Description: "咔哒~",
      Color: "#101010,#060606",
      Property: "Arousing",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { vibrating: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 20,
    Property: {
      TypeRecord: { vibrating: 1 },
      Effect: ["Lock", "Egged", "Vibrating"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      Mode: "Low",
      Intensity: 0,
    },
  },
  ItemNeck: {
    Name: "LeatherChoker",
    Color: ["#DFDFDF", "#000000"],
    Craft: {
      Item: "LeatherChoker",
      Name: "Poi的女仆项圈",
      Description: "",
      Color: "#DFDFDF,#000000",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 160,
    Property: {
      Effect: ["Lock"],
      LockedBy: "ExclusivePadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemNeckAccessories: {
    Name: "CustomCollarTag",
    Color: ["#aaa366", "#000000"],
    Craft: {
      Item: "CustomCollarTag",
      Name: "Poi的女仆名牌",
      Description: "",
      Color: "#aaa366,#000000",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: { Text: "Pois Maid" },
      Type: null,
      TypeRecord: { t: 4, x: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 30,
    Property: {
      TypeRecord: { t: 4, x: 0 },
      Difficulty: 0,
      Text: "Pois Maid",
      Block: [],
      Effect: ["Lock"],
      Hide: [],
      HideItem: [],
      AllowActivity: [],
      Attribute: [],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemMouth: {
    Name: "BallGag",
    Color: ["#CF2828", "#909090"],
    Craft: {
      Item: "BallGag",
      Name: "Poi的女仆口球",
      Description: "舒适的小口球，适合长时间佩戴~",
      Color: "#CF2828,#909090",
      Property: "Secure",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 18,
    Property: { TypeRecord: { typed: 2 } },
  },
  ItemNeck: {
    Name: "MaidCollar",
    Color: ["#FFFFFF", "#1D1D1D", "#5B0000"],
    Craft: {
      Item: "MaidCollar",
      Name: "Poi的女仆项圈",
      Description: "",
      Color: "#FFFFFF,#1D1D1D,#5B0000",
      Property: "Secure",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 64,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemNipplesPiercings: {
    Name: "BellPiercing",
    Color: ["#C8C5C5"],
    Craft: {
      Item: "BellPiercing",
      Name: "Poi的女仆铃铛",
      Description: "动一动就会发出清脆的响声~",
      Color: "#C8C5C5",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 30,
    Property: {
      Effect: ["Lock"],
      LockedBy: "ExclusivePadlock",
      LockMemberNumber: 159349,
    },
  },

  ItemFeet: {
    Name: "LeatherDeluxeAnkleCuffs",
    Color: ["#bbbbbb", "#000000", "#bbbbbb", "#bbbbbb", "Default"],
    Craft: {
      Item: "LeatherDeluxeAnkleCuffs",
      Name: "Poi的女仆皮革脚铐",
      Description: "女仆不允许奔跑，需要时刻保持优雅~",
      Color: "#bbbbbb,#000000,#bbbbbb,#bbbbbb,Default",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      TypeRecord: { typed: 2 },
      Difficulty: 0,
      Effect: ["Slow", "Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemHead: {
    Name: "LatexBlindfold",
    Color: "Default",
    Difficulty: 10,
  },
  ItemLegs: {
    Name: "HempRope",
    Color: ["#CD1D1D"],
    Craft: {
      Item: "ToeTie",
      Name: "Poi的女仆红绳",
      Description: "",
      Color: "#CD1D1D",
      Property: "Strong",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 3 },
      Difficulty: 4,
      SetPose: ["LegsClosed"],
      AllowActivePose: ["LegsClosed", "Kneel", "Hogtied", "AllFours"],
    },
  },
  ItemBoots: {
    Name: "BalletHeels1",
    Color: ["#000000"],
    Craft: {
      Item: "BalletHeels1",
      Name: "Poi的女仆鞋",
      Description: "",
      Color: "#000000",
      Property: "Strong",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemMouth: {
    Name: "BallGag",
    Color: ["#CF2828", "#909090"],
    Craft: {
      Item: "BallGag",
      Name: "Poi的女仆口球",
      Description: "舒适的小口球，适合长时间佩戴~",
      Color: "#CF2828,#909090",
      Property: "Secure",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 14,
    Property: { TypeRecord: { typed: 2 } },
  },
  ItemNipples: {
    Name: "TapedVibeEggs",
    Color: ["Default", "Default", "Default", "Default"],
    Difficulty: 10,
    Property: {
      TypeRecord: { vibrating: 1 },
      Mode: "Low",
      Intensity: 0,
      Effect: ["Egged", "Vibrating"],
    },
  },
  ItemTorso: {
    Name: "HempRopeHarness",
    Color: ["#CD1D1D"],
    Craft: {
      Item: "ToeTie",
      Name: "Poi的女仆红绳",
      Description: "",
      Color: "#CD1D1D",
      Property: "Strong",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 2 },
      Difficulty: 1,
      Effect: ["CrotchRope"],
      Attribute: ["IsHipHarness"],
    },
  },
  ItemVulva: {
    Name: "WiredEgg",
    Color: ["Default", "Default"],
    Difficulty: 10,
    Property: {
      TypeRecord: { vibrating: 5 },
      Effect: ["Vibrating", "Egged"],
      Mode: "Random",
      Intensity: 0,
    },
  },
  ItemButt: {
    Name: "VibratingButtplug",
    Color: "Default",
    Difficulty: 10,
    Property: {
      TypeRecord: { vibrating: 5 },
      Effect: ["Vibrating", "Egged"],
      Mode: "Random",
      Intensity: -1,
    },
  },
};

const midRestraints = {
  ItemHands: {
    Name: "PawMittens",
    Color: ["#EAEAEA", "#3A3A3A", "#F2F2F2", "#F295B9", "#0A0A0A"],
    Craft: {
      Item: "PawMittens",
      Name: "Poi的猫猫手套",
      Description: "可爱猫爪爪",
      Color: "#EAEAEA,#3A3A3A,#F2F2F2,#F295B9,#0A0A0A",
      Property: "Strong",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 14,
    Property: {
      TypeRecord: { typed: 0 },
      HideItemExclude: [
        "ItemHandheldFoxPlush",
        "ItemHandheldBunPlush",
        "ItemHandheldKarl",
        "ItemHandheldShark",
        "ItemHandheldPetPotato",
      ],
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemArms: {
    Name: "HempRope",
    Color: ["#CD1D1D"],
    Craft: {
      Item: "ToeTie",
      Name: "Poi的女仆红绳",
      Description: "",
      Color: "#CD1D1D",
      Property: "Strong",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 13,
    Property: {
      TypeRecord: { typed: 1 },
      Difficulty: 1,
      SetPose: ["BackBoxTie"],
      AllowActivePose: ["BackBoxTie"],
    },
  },
  ItemBreast: {
    Name: "ForbiddenChastityBra",
    Color: ["#202020", "#FFFFFF", "#000000", "#202020", "#202020"],
    Craft: {
      Item: "ForbiddenChastityBra",
      Name: "Poi的女仆贞操文胸",
      Description: "上面的两点也需要被主人管理起来哦~",
      Color: "#202020,#FFFFFF,#000000,#202020,#202020",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {
        ShowText: true,
        ShockLevel: 1,
        PunishOrgasm: false,
        PunishStandup: false,
        PunishStruggle: false,
      },
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      TypeRecord: { typed: 2 },
      TriggerCount: 0,
      ShowText: true,
      BlinkState: false,
      ShockLevel: 1,
      PunishOrgasm: false,
      PunishStandup: false,
      PunishStruggle: false,
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      NextShockTime: 0,
    },
  },
  ItemPelvis: {
    Name: "ModularChastityBelt",
    Color: ["#0C0C0C", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
    Craft: {
      Item: "ModularChastityBelt",
      Name: "Poi的女仆贞操带",
      Description: "女仆的性欲也必须好好管理起来",
      Color: "#0C0C0C,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF,#FFFFFF",
      Property: "Arousing",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {
        ShowText: true,
        ShockLevel: 1,
        PunishOrgasm: false,
        PunishStandup: false,
        PunishStruggle: false,
        PunishStruggleOther: false,
        AccessMode: "",
        TriggerValues: "Increase,Decrease,Disable,Shock",
      },
      Type: null,
      TypeRecord: { a: 1, c: 3, i: 2, p: 4, s: 2, v: 0, o: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 70,
    Property: {
      TypeRecord: { a: 1, c: 3, i: 2, p: 4, s: 2, v: 0, o: 0 },
      Difficulty: 0,
      ShockLevel: 1,
      TriggerCount: 0,
      OrgasmCount: 0,
      RuinedOrgasmCount: 0,
      TimeWorn: 1726755455315,
      TimeSinceLastOrgasm: 1726755455315,
      ShowText: true,
      PunishOrgasm: false,
      PunishStandup: false,
      Effect: [
        "Lock",
        "UseRemote",
        "Chaste",
        "ButtChaste",
        "Egged",
        "Vibrating",
        "FillVulva",
        "IsPlugged",
        "Slow",
      ],
      LockedBy: "ExclusivePadlock",
      LockMemberNumber: 159349,
      PunishStruggle: false,
      PunishStruggleOther: false,
      AccessMode: "",
      TriggerValues: "Increase,Decrease,Disable,Shock",
      Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
      Hide: ["Pussy"],
      HideItem: [
        "ItemButtAnalBeads2",
        "ItemVulvaPenisDildo",
        "ItemVulvaShockDildo",
        "ItemVulvaVibratingDildo",
        "ItemVulvaInflatableVibeDildo",
        "ItemVulvaClitoralStimulator",
        "ItemVulvaClitSuctionCup",
        "ItemVulvaHeavyWeightClamp",
        "ItemVulvaLoversVibrator",
        "ItemVulvaDoubleEndDildo",
        "ItemVulvaBasicCockring",
        "ItemVulvaPlasticChastityCage1",
        "ItemVulvaVibeEggPenisBase",
        "ItemVulvaPlasticChastityCage2",
        "ItemVulvaTechnoChastityCage",
        "ItemVulvaFlatChastityCage",
        "ItemVulvaChastityPouch",
        "ItemVulvaFullCasingCage",
        "ItemVulvaPiercingsVibeHeartClitPiercing",
        "ItemVulvaPiercingsClitRing",
        "ItemVulvaPiercingsChastityClitShield",
        "ItemVulvaPiercingsHighSecurityVulvaShield",
      ],
      AllowActivity: [],
      Attribute: ["GenitaliaCover"],
      Intensity: 1,
      InflateLevel: 4,
    },
  },
};

const finalRestraints = {
  ItemDevices: {
    Name: "WoodenHorse",
    Color: ["Default", "Default"],
    Difficulty: 12,
  },
  ItemAddon: {
    Name: "CeilingRope",
    Color: ["#CD1D1D"],
    Craft: {
      Item: "ToeTie",
      Name: "Poi的女仆红绳",
      Description: "",
      Color: "#CD1D1D",
      Property: "Strong",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 5,
    },
  },
};

const dollSet = {
  ItemHands: {
    Name: "FuturisticMittens",
    Color: ["#000000", "#000000", "#000000", "Default"],
    Craft: {
      Item: "FuturisticMittens",
      Name: "Poi的女仆手套",
      Description: "",
      Color: "#000000,#000000,#000000,Default",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 15,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 8,
      SelfUnlock: false,
      Effect: ["Block", "BlockWardrobe", "MergedFingers", "Lock"],
      Block: ["ItemHandheld"],
      Hide: ["ItemHandheld"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemVulvaPiercings: {
    Name: "VibeHeartClitPiercing",
    Color: ["#CACACA", "#060606"],
    Craft: {
      Item: "VibeHeartClitPiercing",
      Name: "Poi的女仆阴蒂锁",
      Description: "咔哒~",
      Color: "#101010,#060606",
      Property: "Arousing",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { vibrating: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 20,
    Property: {
      TypeRecord: { vibrating: 1 },
      Effect: ["Lock", "Egged", "Vibrating"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      Mode: "Low",
      Intensity: 0,
    },
  },
  ItemButt: {
    Name: "BlackButtPlug",
    Color: ["Default"],
    Difficulty: 10,
  },
  ItemBoots: {
    Name: "MonoHeel",
    Color: ["#000000", "#000000", "#999"],
    Craft: {
      Item: "MonoHeel",
      Name: "Poi的女仆单跟鞋",
      Description: "",
      Color: "#000000,#000000,#999",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 15,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 1,
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemFeet: {
    Name: "LeatherDeluxeAnkleCuffs",
    Color: ["#bbbbbb", "#000000", "#bbbbbb", "#bbbbbb", "Default"],
    Craft: {
      Item: "LeatherDeluxeAnkleCuffs",
      Name: "Poi的女仆皮革脚铐",
      Description: "",
      Color: "#bbbbbb,#000000,#bbbbbb,#bbbbbb,Default",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      TypeRecord: { typed: 1 },
      Difficulty: 6,
      Effect: ["Lock", "BlockWardrobe", "Freeze"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      SetPose: ["LegsClosed"],
      AllowActivePose: ["LegsClosed", "Kneel", "Hogtied", "AllFours"],
    },
  },
  ItemPelvis: {
    Name: "SciFiPleasurePanties",
    Color: [
      "#000000",
      "#000000",
      "#FFFFFF",
      "#000000",
      "#000000",
      "#000000",
      "#bbbbbb",
    ],
    Craft: {
      Item: "SciFiPleasurePanties",
      Name: "Poi的女仆训练内裤",
      Description: "",
      Color: "#000000,#000000,#FFFFFF,#000000,#000000,#000000,#bbbbbb",
      Property: "Arousing",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: { ShowText: true },
      Type: null,
      TypeRecord: { c: 0, i: 1, o: 1, s: 1 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      TypeRecord: { c: 3, i: 2, o: 1, s: 1 },
      Difficulty: 0,
      ShowText: true,
      Effect: [
        "Lock",
        "UseRemote",
        "Egged",
        "UseRemote",
        "Chaste",
        "ButtChaste",
        "Vibrating",
        "DenialMode",
      ],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      Block: ["ItemVulva", "ItemVulvaPiercings", "ItemButt"],
      Hide: ["Pussy"],
      HideItem: [
        "ItemButtAnalBeads2",
        "ItemVulvaVibratingDildo",
        "ItemVulvaClitSuctionCup",
        "ItemVulvaInflatableVibeDildo",
        "ItemVulvaHeavyWeightClamp",
        "ItemVulvaPenisDildo",
        "ItemVulvaShockDildo",
        "ItemVulvaPiercingsVibeHeartClitPiercing",
        "ItemVulvaPiercingsClitRing",
        "ItemVulvaPiercingsChastityClitShield",
        "ItemVulvaPiercingsHighSecurityVulvaShield",
        "ItemVulvaPlasticChastityCage1",
        "ItemVulvaPlasticChastityCage2",
        "ItemVulvaTechnoChastityCage",
        "ItemVulvaFlatChastityCage",
        "ItemVulvaVibeEggPenisBase",
      ],
      AllowActivity: [],
      Attribute: ["GenitaliaCover", "FuturisticRecolor"],
      Intensity: 1,
      ShockLevel: 1,
    },
  },
  ItemTorso: {
    Name: "LatexCorset1",
    Color: ["#474747"],
    Craft: {
      Item: "LatexCorset1",
      Name: "Poi的女仆束腰",
      Description: "",
      Color: "#474747",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 1 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 18,
    Property: {
      TypeRecord: { typed: 1 },
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemNipples: {
    Name: "TapedVibeEggs",
    Color: ["Default", "Default", "Default", "Default"],
    Difficulty: 10,
    Property: {
      TypeRecord: { vibrating: 1 },
      Mode: "Low",
      Intensity: 0,
      Effect: ["Egged", "Vibrating"],
    },
  },
  ItemNipplesPiercings: {
    Name: "BellPiercing",
    Color: ["#C8C5C5"],
    Craft: {
      Item: "BellPiercing",
      Name: "Poi的女仆铃铛",
      Description: "动一动就会发出清脆的响声~",
      Color: "#C8C5C5",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 20,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemTorso2: {
    Name: "FuturisticHarness",
    Color: ["#202020", "#333333", "#202020", "#FFFFFF"],
    Craft: {
      Item: "FuturisticHarness",
      Name: "Poi的女仆拘束带",
      Description: "",
      Color: "#202020,#333333,#202020,#FFFFFF",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 30,
    Property: {
      TypeRecord: { typed: 0 },
      Difficulty: 2,
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemBreast: {
    Name: "ForbiddenChastityBra",
    Color: ["#202020", "#FFFFFF", "#000000", "#202020", "#202020"],
    Craft: {
      Item: "ForbiddenChastityBra",
      Name: "Poi的女仆贞操文胸",
      Description: "",
      Color: "#202020,#FFFFFF,#000000,#202020,#202020",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {
        ShowText: true,
        ShockLevel: 1,
        PunishOrgasm: false,
        PunishStandup: false,
        PunishStruggle: false,
      },
      Type: null,
      TypeRecord: { typed: 2 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      TypeRecord: { typed: 2 },
      TriggerCount: 0,
      ShowText: true,
      BlinkState: false,
      ShockLevel: 1,
      PunishOrgasm: false,
      PunishStandup: false,
      PunishStruggle: false,
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      NextShockTime: 0,
    },
  },
  ItemNeck: {
    Name: "LeatherChoker",
    Color: ["#DFDFDF", "#000000"],
    Craft: {
      Item: "LeatherChoker",
      Name: "Poi的女仆项圈",
      Description: "",
      Color: "#DFDFDF,#000000",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemNeckAccessories: {
    Name: "CollarBow",
    Color: ["#4E0000"],
    Difficulty: 11,
  },
  Cloth: {
    Name: "AdultBabyDress1",
    Color: ["#050505", "#FFFFFF", "#CBCBCB"],
    Difficulty: 0,
    Property: {
      OverridePriority: { Dress: 30, Sash: 0, Trim: 30 },
      LSCGOpacity: [0.76, 0.76, 0.91],
    },
  },
  Bra: {
    Name: "HeartTop",
    Color: ["#000000"],
    Difficulty: 0,
    Property: { OverridePriority: 31 },
  },
  Shoes: { Name: "Shoes5", Color: "#202020", Difficulty: 0 },
  HairAccessory3: {
    Name: "Ribbons4",
    Color: ["#7C0404", "#7C0404"],
    Difficulty: 0,
  },
  Hat: {
    Name: "MaidLatexHairband",
    Color: ["#888888", "#202020"],
    Difficulty: 0,
  },
  LeftAnklet: { Name: "Ribbon1", Color: ["#111111"], Difficulty: 0 },
  RightAnklet: { Name: "Ribbon1", Color: ["#101010"], Difficulty: 0 },
  Bracelet: {
    Name: "LaceBands",
    Color: ["#B4B4B4", "#000000"],
    Difficulty: 0,
  },
  Suit: {
    Name: "LatexCatsuit",
    Color: ["#202020", "#202020", "#FFFFFF", "#202020"],
    Difficulty: 0,
    Property: {
      TypeRecord: { typed: 2 },
      Text: "",
      Text2: "",
      Text3: "",
      Type: "Transparent",
      OverridePriority: {
        Zip: 35,
        Zip_Transparent: 35,
      },
    },
  },
  SuitLower: {
    Name: "LatexCatsuit",
    Color: ["#595959", "Default", "#808080"],
    Difficulty: 0,
    Property: {
      TypeRecord: { typed: 2 },
      Type: "Transparent",
      OverridePriority: {
        Zip: 35,
        Zip_Transparent: 35,
      },
    },
  },
  ClothAccessory: {
    Name: "FrillyApron",
    Color: "Default",
    Difficulty: 0,
    Property: { OverridePriority: 30 },
  },
  Necklace: {
    Name: "CatsuitCollar",
    Color: ["#000000"],
    Difficulty: 0,
  },
  ClothLower: {
    Name: "CrossSkirtLight",
    Color: ["Default", "Default", "#4A0000", "Default"],
    Difficulty: 0,
    Property: { OverridePriority: { Cross: 35 } },
  },
  ItemEars: {
    Name: "FuturisticEarphones",
    Color: ["#202020", "#FFFFFF", "#202020"],
    Craft: {
      Item: "FuturisticEarphones",
      Name: "Poi的女仆降噪耳机",
      Description: "",
      Color: "#202020,#FFFFFF,#202020",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { typed: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 60,
    Property: {
      TypeRecord: { typed: 0 },
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemMouth: {
    Name: "LargeDildo",
    Color: ["#554F4F"],
    Craft: {
      Item: "LargeDildo",
      Name: "女仆训练阳具",
      Description: "用来训练女仆喉咙灵活度的阳具",
      Color: "#554F4F",
      Property: "Normal",
      Lock: "",
      Private: true,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: -10,
  },
  ItemMouth2: {
    Name: "HarnessBallGag1",
    Color: ["#5C0404", "#202020", "#FFFFFF"],
    Craft: {
      Item: "HarnessBallGag1",
      Name: "Poi的女仆大口球",
      Description: "啊~张嘴吃糖~啊呜啊呜~",
      Color: "#5C0404,#202020,#FFFFFF",
      Property: "Comfy",
      Lock: "",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: {},
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      TypeRecord: { typed: 1 },
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemMouth3: {
    Name: "LatexBallMuzzleGag",
    Color: ["#E5E5E5"],
    Craft: {
      Item: "LatexBallMuzzleGag",
      Name: "Poi的女仆口套",
      Description: "",
      Color: "#E5E5E5",
      Property: "Strong",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 16,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  Wings: {
    Name: "蝴蝶结背饰_Luzi",
    Color: ["#999999"],
    Difficulty: 0,
    Property: { OverridePriority: 5 },
  },
  Socks: {
    Name: "LatexSocks1",
    Color: ["#646464"],
    Difficulty: 0,
    Property: { OverridePriority: 27 },
  },
  SocksRight: {
    Name: "Socks6",
    Color: ["#000000", "Default"],
    Difficulty: 0,
    Property: { OverridePriority: 32 },
  },
  SocksLeft: {
    Name: "Socks6",
    Color: ["#000000", "Default"],
    Difficulty: 0,
    Property: { OverridePriority: 32 },
  },
  ItemHead: {
    Name: "FuturisticMask",
    Color: ["#000000", "#FFFFFF", "#FFFFFF"],
    Craft: {
      Item: "FuturisticMask",
      Name: "Poi的女仆面罩",
      Description: "",
      Color: "#000000,#FFFFFF,#FFFFFF",
      Property: "Normal",
      Lock: "MistressPadlock",
      Private: true,
      ItemProperty: { OverridePriority: 37 },
      Type: null,
      TypeRecord: { typed: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 17,
    Property: {
      TypeRecord: { typed: 0 },
      Effect: ["Lock", "BlindLight", "BlockWardrobe"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      OverridePriority: 37,
      Tint: [{ Color: 0, Strength: 0.2 }],
    },
  },
  ItemHood: {
    Name: "DroneMask",
    Color: ["#242424", "#CCCCCC", "#7F7F7F", "#EEEEEE", "#900000"],
    Craft: {
      Item: "DroneMask",
      Name: "Poi的乳胶女仆面具",
      Description: "",
      Color: "#3B3B3B,#CCCCCC,#7F7F7F,#EEEEEE,#900000",
      Property: "Thin",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: { Text: "" },
      Type: null,
      TypeRecord: { m: 0, e: 0, p: 0, g: 0, s: 1, h: 0, j: 0 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 15,
    Property: {
      TypeRecord: { m: 0, e: 0, p: 0, g: 0, s: 1, h: 0, j: 0 },
      Difficulty: 0,
      Text: "",
      Block: ["ItemNose", "ItemMouth", "ItemMouth2", "ItemMouth3", "ItemHead"],
      Effect: ["BlockMouth", "BlindLight", "Lock"],
      Hide: [
        "Blush",
        "ItemMouth",
        "ItemMouth2",
        "ItemMouth3",
        "ItemHead",
        "Glasses",
      ],
      HideItem: ["HatFacePaint", "MaskFacePaint", "ClothAccessoryFacePaint"],
      AllowActivity: [],
      Attribute: [],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  ItemVulva: { Name: "PenisDildo", Color: ["Default"], Difficulty: 10 },

  ItemLegs: {
    Name: "SeamlessHobbleSkirt",
    Color: ["#1C1C1C"],
    Craft: {
      Item: "SeamlessHobbleSkirt",
      Name: "Poi的女仆拘束裙",
      Description: "",
      Color: "#1C1C1C",
      Property: "Strong",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: null,
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 25,
    Property: {
      Effect: ["Lock"],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
      OverridePriority: 22,
    },
  },
  ItemArms: {
    Name: "StraitLeotard",
    Color: ["#1C1C1C", "#1C1C1C", "#1C1C1C"],
    Craft: {
      Item: "StraitLeotard",
      Name: "Poi的女仆拘束衣",
      Description: "好紧，双手也被锁起来了。",
      Color: "#1C1C1C,#1C1C1C,#1C1C1C",
      Property: "Comfy",
      Lock: "MistressPadlock",
      Private: false,
      ItemProperty: {},
      Type: null,
      TypeRecord: { cl: 1, co: 1, np: 1, vp: 1 },
      MemberNumber: 159349,
      MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
    },
    Difficulty: 23,
    Property: {
      TypeRecord: { cl: 1, co: 1, np: 1, vp: 1 },
      Difficulty: 0,
      Block: [
        "ItemNipples",
        "ItemNipplesPiercings",
        "ItemVulva",
        "ItemVulvaPiercings",
        "ItemButt",
        "ItemPelvis",
        "ItemTorso",
        "ItemTorso2",
        "ItemBreast",
        "ItemHands",
        "ItemHandheld",
      ],
      Effect: ["Block", "BlockWardrobe", "Lock"],
      Hide: ["LeftHand", "RightHand"],
      HideItem: [
        "ItemButtAnalBeads2",
        "ItemVulvaVibratingDildo",
        "ItemVulvaInflatableVibeDildo",
        "ItemVulvaClitSuctionCup",
        "ItemNipplesLactationPump",
      ],
      AllowActivity: [],
      Attribute: [],
      LockedBy: "MistressPadlock",
      LockMemberNumber: 159349,
    },
  },
  Gloves: {
    Name: "LatexElbowGloves",
    Color: ["#595959"],
    Difficulty: 0,
  },
};

// corruption
const corruptionEvents = {
  // stage 1
  100: blushEvent,
  101: droolEvent,
  102: eyeEvent,
  103: liquidEvent,
  // stage 2
  201: touchPussyEvent,
  202: touchNippleEvent,
  299: removeUnderwearEvent,
  // stage 3
  300: fingerEvent,
  301: ropeEvent,
  302: takeOffClothesEvent,
  303: dildoEvent,
  304: nippleBellEvent,
  305: toyEvent,
};

const corruptedWords = {
  // stage 1
  100: `唔嗯♡…`,
  101: `哈啊♡…`,
  102: `唔…好热…`,
  103: `身体怪怪的…`,
  104: `咿…突然好敏感…`,
  105: `咕♡…好想要…`,
  106: `不要…唔…`,
  108: `不…不要看着我啦…咿…♡`,
  110: `嗯…♡`,
  // stage 2
  201: `唔…好想涩涩~嗯…♡`,
  202: `嗯…♡下面好难受…好想要~`,
  203: `咿…♡`,
  204: `哈~♡ 哈~♡`,
  205: `涩猫…涩猫好想要~♡`,
  206: `好想要~♡好想变得舒服~♡`,
  207: `谁都好…只要能让涩猫舒服~♡`,
  // stage 3
  300: `想被肉棒插得喵喵叫~`,
  301: `肉棒…涩猫最喜欢肉棒了~♡`,
  302: `请…请再插进来~♡`,
  303: `请命令涩猫吧, 涩猫什么都愿意做~♡`,
  304: `涩猫…已经变成主人的形状了~♡`,
  305: `涩…涩猫的身体已经不再属于涩猫了~♡`,
  306: `涩猫…涩猫的心已经不再属于涩猫了~♡`,
  307: `涩猫是主人的随意处置的性玩具~喵~♡`,
  308: `涩猫的小穴…是主人的玩物~♡`,
  309: `呜呜~被主人使用是涩猫的荣幸~♡`,
  310: `涩猫..永远是主人的性奴~♡`,
  311: `涩猫…只要能被主人干就好~♡`,
  312: `贱奴喜欢被主人当成涩猫干~♡`,
};

const corruptionStages = {
  1: {
    speechGarbleChance: 10,
    eventChance: 30,
    minProgression: 0,
    maxProgression: 99,
  },
  2: {
    speechGarbleChance: 30,
    eventChance: 50,
    minProgression: 100,
    maxProgression: 499,
  },
  3: {
    speechGarbleChance: 50,
    eventChance: 80,
    minProgression: 500,
    maxProgression: 999,
  },
};

// State
var maidStorage;

let pollingInterval = 3 * minute;
let maidStorageSave = null;
let maidDebug = false;

// Switches
let catSpeechSwitch = false;

// Maid Cafe Map
const TeleportCoords = [
  // ROOM 1
  {
    name: "ROOMENTER",
    from: [5, 21],
    to: [5, 19],
    message:
      "魔法掠过，回过神来，你被传送到了一间奇怪的房间里。下面的门锁住了，但是上面的门好像可以进去。会不会有什么线索呢？",
  },
  {
    name: "ROOM1SUCCESS",
    from: [2, 8],
    to: [0, 8],
    message: "你沿着柜子下面的暗道进入了一间密室~里面有一把钥匙",
  },
  {
    name: "ROOM2SUCCESS",
    from: [0, 33],
    to: [1, 38],
    message:
      "拿到钥匙的一瞬间。草地突然下陷，等你醒来发现自己来到了一条林间小道。前方有一扇上锁的门~",
  },
  {
    name: "ROOM3SUCCESS",
    from: [26, 32],
    to: [26, 4],
    message:
      "成功了，你从奇怪的房间逃了出来。这里，好像是女仆长的房间。往下走有一条去大厅的路。",
  },
  {
    name: "ROOM3KEYENTER",
    from: [20, 32],
    to: [9, 32],
    message: "你被传送到了迷宫入口旁边的钥匙附近。往下走好像还有一个传送阵。",
  },
  {
    name: "ROOM3KEYEXIT",
    from: [7, 37],
    to: [21, 36],
    message: "魔法又一次笼罩了你，你被传送到了刚刚那个上锁的门前。",
  },
];

const Traps = [
  {
    name: "ROOM3FAIL",
    pos: MaidCafeData.room3FailTiles,
    action: async () => {
      chatSendLocal(
        "踩上去的一瞬间，你感觉到脚下的地板突然塌陷了。回过神来，你发现自己已经在迷宫深处的牢房里。"
      );
      releasePlayer();
      await sleep(3000);
      moveEmptyJailCell();
    },
    cooldown: 10000,
  },
  {
    name: "DOLLTRAPMOVENORTH",
    pos: MaidCafeData.beltMoveNorth,
    action: async () => {
      ChatRoomMapViewMove("North");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAPMOVEWEST",
    pos: MaidCafeData.beltMoveWest,
    action: async () => {
      ChatRoomMapViewMove("West");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAPSTART",
    pos: [[29, 26]],
    action: async () => {
      wearItem("ItemBoots", dollSet);
      ChatRoomCharacterUpdate(Player);
      chatSendLocal(
        "你踏上传送带的一瞬间，地上的乳胶突然把你的双腿牢牢的包裹住了~ 随着嗡嗡的响声，传送带启动了~"
      );
      ChatRoomMapViewMove("North");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAP0",
    pos: [[26, 25]],
    action: async () => {
      const clothesLocationList = [
        "Cloth",
        "ClothLower",
        "ClothAccessory",
        "Suit",
        "SuitLower",
        "Corset",
        "Gloves",
        "Shoes",
        "Hat",
        "Bra",
        "Panties",
        "Necklace",
        "RightAnklet",
        "LeftAnklet",
        "Mask",
        "ClothAccessory_笨笨蛋Luzi",
        "Cloth_笨笨蛋Luzi",
        "SocksRight",
        "SocksLeft",
      ];

      const equippedList = Player.Appearance.map((x) => x.Asset.Group.Name);
      equippedList.forEach((name) => {
        if (name.includes("Item")) {
          return;
        }

        if (clothesLocationList.includes(name) || name.includes("笨笨蛋Luzi")) {
          InventoryRemove(Player, name);
        }
      });

      ChatRoomCharacterUpdate(Player);
      chatSendLocal(
        "天花板上的机关突然启动，黑色的液体喷洒而下，融化了你的衣服~"
      );
      ChatRoomMapViewMove("West");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAP1",
    pos: [[22, 25]],
    action: async () => {
      chatSendLocal(
        "天花板上的机关突然启动，黑色的液体喷洒而下，逐渐覆盖了你的脸部，你尝试遮挡，但是乳胶又迅速覆盖了你的双手~"
      );
      const slotsTop = [
        "ItemHead",
        "ItemEars",
        "ItemMouth",
        "ItemMouth2",
        "ItemMouth3",
        "ItemHood",
        "ItemHands",
        "Gloves",
        "Hat",
        "Necklace",
        "Bracelet",
        "HairAccessory3",
        "Hat",
      ];

      slotsTop.forEach((slot) => {
        wearItem(slot, dollSet);
      });

      ChatRoomCharacterUpdate(Player);
      ChatRoomMapViewMove("West");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAP2",
    pos: [[18, 25]],
    action: async () => {
      chatSendLocal(
        "天花板上的机关突然启动，黑色的液体喷洒而下，黑色的乳胶逐渐覆盖了你的身体~"
      );

      const slotsMid = [
        "ItemArms",
        "Socks",
        "ItemFeet",
        "ItemPelvis",
        "ItemTorso",
        "ItemNipplesPiercings",
        "ItemTorso2",
        "ItemBreast",
        "ItemNeck",
        "ItemNeckAccessories",
        "ItemNipples",
        // clothes
        "Suit",
        "Cloth",
        "ClothAccessory",
        "Bra",
        "HairAccessory3",
        "Hat",
        "Bracelet",
        "Wings",
      ];

      slotsMid.forEach((slot) => {
        wearItem(slot, dollSet);
      });

      ChatRoomCharacterUpdate(Player);
      ChatRoomMapViewMove("West");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAP1",
    pos: [[14, 25]],
    action: async () => {
      chatSendLocal(
        "天花板上的机关突然启动，黑色的液体喷洒而下，黑色的乳胶逐渐覆盖了你的下半身, 并且狡猾地钻进了你的私处~"
      );

      const slotsLower = [
        "ItemLegs",
        "ItemButt",
        "ItemVulva",
        "ItemBoots",
        "ItemVulvaPiercings",
        // clothes
        "Socks",
        "LeftAnklet",
        "RightAnklet",
        "SuitLower",
        "Shoes",
        "ClothLower",
        "SocksRight",
        "SocksLeft",
      ];

      slotsLower.forEach((slot) => {
        wearItem(slot, dollSet);
      });

      ChatRoomCharacterUpdate(Player);
      ChatRoomMapViewMove("West");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAPMOVEDISPLAY",
    pos: [[12, 21]],
    action: async () => {
      moveEmptyDollDisplay();
      await sleep(3000);
      wearAvaliableRandom(dollDisplay);
      chatSendLocal("你被传送到了一个展示间~ 咔哒一声之后，你被固定在了展示台上。");
    },
    cooldown: 2000,
  },
  {
    name: "DOLLTRAPDISPLAY",
    pos: MaidCafeData.dollDisplays,
    action: async () => {
      sendJailMsg();
    },
    cooldown: 10000,
  },
  {
    name: "ROOM3HINT",
    pos: [[9, 37]],
    action: () => {
      chatSendLocal(
        "女仆长的提示在你脑海里浮现 <最危险的最安全，最近的最远>，"
      );
    },
    cooldown: 60000,
  },
  {
    name: "JAILTRAP",
    pos: [...MaidCafeData.jailCells, ...MaidCafeData.overflowCells],
    action: () => {
      item = wearAvaliableRandom(midRestraints);
      if (!item) {
        item = wearAvaliableRandom(lightRestraints);
      }
      if (!item) {
        item = wearAvaliableRandom(finalRestraints);
      }

      if (item) {
        const itemName = item?.Craft?.Name ?? item?.Asset?.Description;
        const effect = item?.Property?.Effect;
        const isToy = effect && effect.includes("Vibrating");

        chatSendLocal(
          `拘束源源不断地在牢房的天花板上出现，在魔法的控制下，${itemName}扑向了你, ${
            isToy ? "并且震动了起来~♡。" : "而且无法取下!"
          }`
        );
      } else {
        sendJailMsg();
      }
    },
    cooldown: 5000,
  },
  {
    name: "GASTRAP",
    pos: [
      [7, 5],
      [7, 9],
      [7, 12],
      [14, 1],
    ],
    action: () => {
      chatSendLocal(
        "墙壁里突然向外喷出了催淫气体！，没能躲开这突如其来的袭击，吸进去了一大口……"
      );
      DrawFlashScreen("#FF7777", 2000, 500);
      lscgHorny(30);
    },
    cooldown: 30000,
  },
  {
    name: "TOYTRAP",
    pos: [
      // room 1
      // bedroom
      [2, 10],
      [3, 10],
      [4, 10],
      [5, 10],
      [3, 8],
      [4, 8],
      [5, 8],
      // living room
      [3, 13],
      [2, 13],
      [1, 13],
      [0, 13],
      [2, 14],
      [1, 14],
      [0, 14],
      [1, 15],
      [0, 15],
      // dinning room
      [3, 18],
      [1, 18],
      [0, 18],
      [1, 19],
      [2, 21],
      [1, 21],
      [0, 21],
      // outside
      [2, 23],
      [1, 23],
      [0, 23],
      // room 3
      [17, 38],
      [18, 38],
      [15, 36],
    ],
    action: () => {
      const itemHead = InventoryGet(Player, "ItemHead");
      let item;
      if (!itemHead) {
        item = wearItem("ItemHead", lightRestraints);
        InventoryLock(Player, "ItemHead", "ExclusivePadlock", 159349);
        ChatRoomCharacterUpdate(Player);
      } else {
        item = wearAvaliableRandom(lightRestraints);
        if (!item) {
          item = wearAvaliableRandom(midRestraints);
        }
      }

      if (item) {
        const itemName = item?.Craft?.Name ?? item?.Asset?.Description;
        const effect = item?.Property?.Effect;
        const isToy = effect && effect.includes("Vibrating");

        chatSendLocal(
          `这里没有线索，只有店长留下的${itemName}!，在魔法的控制下，${itemName}扑向了你, ${
            isToy ? "并且震动了起来~♡。" : "而且无法取下!"
          }`
        );
      } else {
        chatSendLocal(
          "你被店长的魔法死死地束缚住了，无法逃脱~ 你可以选择(/p 投降)。"
        );
      }
    },
    cooldown: 10000,
  },
  {
    name: "MAIDOUTFIT",
    pos: [[13, 11]],
    action: async () => {
      chatSendLocal("进入女仆“休息”区，店长贴心地为你换上了女仆服~");
      forceNake();
      await sleep(1500);
      wearCloths(maidOutfit);
      await sleep(1500);
      wearAvaliableRandom(maidCollarSet);
      await sleep(1500);
      wearAvaliableRandom(maidCollarSet);
    },
    cooldown: 30000,
  },
  {
    name: "TREEWATERTRAP",
    pos: [
      [4, 33],
      [4, 34],
      [4, 35],
      [3, 35],
      [2, 35],
      [1, 35],
      [0, 35],
      [0, 34],
      [2, 34],
      [2, 33],
      [1, 33],
    ],
    action: async () => {
      if (Player?.IsStanding()) {
        const item = wearAvaliableRandom(treeBranches);
        if (item) {
          chatSendLocal(
            "神树对你的顺从程度不够满意，伸出了根须，将你束缚了起来~"
          );
        } else {
          const text = [
            "神树伸出了根须，用沾满媚药的根须彻底地抽插着你小穴，你被要将大脑溶化般的幸福感包围了~ 你可以选择(/p 投降)。",
            "神树伸出了根须，用沾满媚药的根须激烈地玩弄小豆豆，开始有感觉了~ 你可以选择(/p 投降)。",
            "神树伸出了根须，用沾满媚药的根须巧妙地触碰你的乳头，被碰到的地方开始有反应了~ 你可以选择(/p 投降)。",
          ];
          chatSendLocal(text[getRandomNumber(0, text.length - 1)]);
          ActivityEffect(
            Player,
            Player,
            "MasturbateFist",
            "ItemVulva",
            0,
            null
          );
          DrawFlashScreen("#FF7777", 2000, 500);

          CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
          CharacterSetFacialExpression(Player, "Mouth", "HalfOpen");
          CharacterSetFacialExpression(Player, "Blush", "High");
          CharacterSetFacialExpression(Player, "Fluids", "DroolLow");
        }
      } else {
        chatSendLocal(
          "你低身浸泡在神树下的媚药池里，一不小心喝了一大口，强烈的发情向你袭来，全身都变的发热发疼~ 你可以选择(/p 投降)。"
        );
        DrawFlashScreen("#FF7777", 2000, 500);
        lscgHorny(30);

        CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
        CharacterSetFacialExpression(Player, "Mouth", "HalfOpen");
        CharacterSetFacialExpression(Player, "Blush", "High");
        CharacterSetFacialExpression(Player, "Fluids", "DroolLow");
      }
    },
    cooldown: 3000,
  },
];

let cdTracker = [];

const handleTeleport = (x, y) => {
  const coord = TeleportCoords.find((c) => c.from[0] === x && c.from[1] === y);
  if (!coord) return;
  movePlayer(coord.to[0], coord.to[1]);
  if (coord.message) {
    chatSendLocal(coord.message);
  }
};

const handleTrap = (x, y) => {
  // calculate cd
  cdTracker.forEach((c) => {
    c.remain -= 400;
  });
  cdTracker = cdTracker.filter((c) => c.remain > 0);

  // find trap
  const trap = Traps.find((t) => t.pos.some((p) => p[0] === x && p[1] === y));
  if (!trap) return;

  // check if cd
  const cd = cdTracker.find(
    (c) => c.name === trap.name && c.pos[0] === x && c.pos[1] === y
  );
  if (cd && cd.remain >= 0) {
    return;
  }

  // trigger trap
  trap.action();
  cdTracker.push({ name: trap.name, remain: trap.cooldown, pos: [x, y] });
};

// map
async function handleMaidCafeMap() {
  if (!isInCafe()) return;
  const pos = Player?.MapData?.Pos;
  if (!pos) return;
  // handle pos
  handleTeleport(pos.X, pos.Y);
  handleTrap(pos.X, pos.Y);
}

// Corruption
async function corruptionHappinessEvent() {
  if (maidStorage.corruption.stage === 0) {
    return;
  }

  if (isWearingSuppressorBack() && isWearingSuppressorFront()) {
    chatSendLocal(`在抑制器的帮助下，你成功抵抗了魔法的侵蚀…`);
    decreaseCorruptionPoint(getRandomNumber(1, 30));
    return;
  }

  if (!ServerPlayerIsInChatRoom()) {
    return;
  }

  const inCafe = ChatRoomData?.Name === "PoisMaidCafe";

  if (Player.ArousalSettings.Progress > 50) {
    chatSendLocal(`你的契约环轻轻挑逗，似乎认可了身体的发情程度。`);
    increaseCorruptionPoint(getRandomNumber(1, 100));
  }
  if (Player.ArousalSettings.Progress < 20) {
    chatSendLocal(`你的契约环温度降低，似乎在对身体的发情程度表达失望。`);
    if (inCafe) {
      decreaseCorruptionPoint(getRandomNumber(1, 10));
    } else {
      decreaseCorruptionPoint(getRandomNumber(50, 100));
    }
  }
}

function isWearingRing() {
  const ring = InventoryGet(Player, "ItemVulvaPiercings");
  return (
    ring?.Asset?.Name === "RoundClitPiercing" &&
    ring?.Craft?.MemberNumber === PoiId
  );
}

function isWearingSuppressorFront() {
  const suppressor = InventoryGet(Player, "ItemVulva");
  return (
    suppressor?.Craft?.Name === "Poi的诅咒抑制器（身体）" &&
    suppressor?.Craft?.MemberNumber === PoiId
  );
}

function isWearingSuppressorBack() {
  const suppressor = InventoryGet(Player, "ItemButt");
  return (
    suppressor?.Craft?.Name === "Poi的诅咒抑制器（语言）" &&
    suppressor?.Craft?.MemberNumber === PoiId
  );
}

async function increaseCorruptionPoint(progression) {
  if (!maidStorage.corruption.progression) {
    maidStorage.corruption.progression = 0;
  }

  maidStorage.corruption.progression += progression;
  chatSendLocal(
    `堕落值增加了${progression}~♡，现在是${maidStorage.corruption.progression}`
  );
}

async function decreaseCorruptionPoint(progression) {
  if (!maidStorage.corruption.progression) {
    maidStorage.corruption.progression = 0;
  }

  if (maidStorage.corruption.progression >= progression) {
    maidStorage.corruption.progression -= progression;
    chatSendLocal(
      `堕落值减少了${progression}，现在是${maidStorage.corruption.progression}`
    );
  }
}

async function tryResistEvent() {
  if (maidStorage.corruption.stage === 0) return true;

  chatSendLocal(`契约环的黑暗的魔法正在侵蚀你的身体，你尝试抵抗…`);

  const rand = getRandomNumber(0, 100);
  const chance = corruptionStages[maidStorage.corruption.stage].eventChance;

  consoleLog(`rand: ${rand} chance: ${chance}`);
  await sleep(5000);

  if (isWearingSuppressorFront()) {
    chatSendLocal("在抑制器的帮助下，你成功抵抗了魔法的侵蚀…");
    decreaseCorruptionPoint(10, 30);
    return true;
  }

  if (rand > chance) {
    chatSendLocal("你成功抵抗了魔法的侵蚀…");
    decreaseCorruptionPoint(1, 15);
    return true;
  }

  chatSendLocal("抵抗失败~♡");
  increaseCorruptionPoint(getRandomNumber(1, 15));
  CharacterSetFacialExpression(Player, "Mouth", "Moan");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");
  return false;
}

async function tryResistGarble() {
  if (maidStorage.corruption.stage === 0) return true;
  if (isWearingSuppressorBack()) return true;

  const rand = getRandomNumber(0, 100);
  const chance =
    corruptionStages[maidStorage.corruption.stage].speechGarbleChance;

  consoleDebug(`rand: ${rand} chance: ${chance}`);

  return rand > chance;
}

function chooseFromCorruptionArr(events) {
  const choose = (x) => {
    return x < (maidStorage.corruption.stage + 1) * 100;
  };
  const validKeys = Object.keys(events).filter(choose);
  const key = validKeys[getRandomNumber(0, validKeys.length - 1)];
  return [events[key], key];
}

async function corruptionGarble(content) {
  if (!ServerPlayerIsInChatRoom()) return;

  if (maidStorage.corruption.stage === 0) return;

  const success = await tryResistGarble();
  if (success) return content;
  CharacterSetFacialExpression(Player, "Blush", "High");
  chatSendLocal("在契约环的影响下，你呻吟着发出了可爱的声音~♡");
  const [word, _] = chooseFromCorruptionArr(corruptedWords);
  return `${content}…${word}`;
}

async function triggerCorruptionEvents() {
  if (!ServerPlayerIsInChatRoom()) return;

  if (maidStorage.corruption.stage === 0) return;

  const isAfk = InventoryGet(Player, "Emoticon")?.Property.Expression === "Afk";
  if (isAfk) return;

  // resist
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Mouth", "HalfOpen");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Fluids", "DroolLow");
  const success = await tryResistEvent();
  CharacterResetFacialExpression(Player);
  if (success) {
    return;
  }

  await sleep(1000);

  // choose event
  const [event, key] = chooseFromCorruptionArr(corruptionEvents);
  if (key >= 200 && Player?.HasEffect("Block")) {
    chatSendCustomAction(
      `${getNickname(
        Player
      )}急切地想要执行契约环的命令，但她手臂完全无法动弹，只能徒劳的扭动着身体~`
    );
    return;
  }
  consoleDebug(event);
  // execute event
  await event(Player);
}

async function corruptionProgress(silent = false) {
  if (!ServerPlayerIsInChatRoom()) return;
  if (maidStorage.corruption.stage === 0) {
    if (!isWearingRing()) {
      return;
    }
    // sanity check
    maidStorage.corruption.stage = 1;
    silent = true;
  }
  if (!isWearingRing()) {
    chatSendLocal(`随着契约环的消失，黑暗的魔法也渐渐消散~ 留给你无尽的空虚~`);
    resetMaidStorage();
    return;
  }

  const current = maidStorage.corruption.stage;
  let next = current;
  if (
    maidStorage.corruption.progression >
      corruptionStages[current].maxProgression &&
    current !== 3
  ) {
    next = current + 1;
    maidStorage.corruption.stage = next;
  }

  if (
    maidStorage.corruption.progression <
      corruptionStages[current].minProgression &&
    current !== 1
  ) {
    next = current - 1;

    maidStorage.corruption.stage = next;
  }

  if (!silent) {
    if (current === 1 && next === 2) {
      chatSendLocal(
        `在情热躁动的恍惚中，你的阴蒂环所蕴含的奴隶契约已经从挺立着的小豆粒传入小腹之中，和乳首一同展示难掩的发情状态。你已经不能再抑制了，浑身敏感的皮肤泛起红晕，只有羞耻心还如脆弱的丝线维持着理智。`
      );
    }

    if (current === 2 && next === 3) {
      chatSendLocal(
        `在情热躁动的恍惚中，你的身体和心灵都被淫荡的欲望完全侵染，失去了所有力气一般在时刻处于边缘的状态中颤抖着，只需一个命令就会进入完全屈服的状态。穿透阴蒂的细环响应地轻轻震动，嘉奖这具屈服于性欲的奴隶人型，交出身体的控制，成为只为了满足性欲而呼吸感受的机器。`
      );
    }

    if (current === 3 && next === 2) {
      chatSendLocal(
        `几乎是一瞬间，你的理智占据了上风，头脑随皮肤上的汗水冷却下来。有些尴尬地将不自觉抚摸着身体的手挪开，你的心中还留存着些许方才的温热和悸动，属于奴隶的标记依然在私密处提醒着契约的存在。`
      );
    }

    if (current === 2 && next === 1) {
      chatSendLocal(
        `好像是听见了“啪”的一声，你突然感觉到周遭空气和视线的寒冷，无论如何淫猥地抚摸、揉捏身体，都无法再像刚才那样获取令人头脑空白的欢悦了。穿刺于阴蒂的圆环像是斥责般在肉瓣之中冷却，你此刻心中只有面对无尽欲壑的空虚。`
      );
    }
  }
}

// Events
async function dildoEvent() {
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");

  chatSendCustomAction(
    `契约环的魔法向${getNickname(
      Player
    )}低语，让她顺从地抬起双手，掌心出现了一根逼真的器具——柔软有弹性，但坚硬地挺立着，所有的血管纹理都清晰可见，甚至如活物一样微微颤抖着。焦渴的身体让${getNickname(
      Player
    )}双手捧起阳具，脑中只有取悦主人的念头。`
  );

  InventoryWear(Player, "LargeDildo", "ItemHandheld");

  ChatRoomCharacterUpdate(Player);
  await sleep(3000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemMouth-LSCG_UseGag",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemMouth",
      },
      {
        ActivityName: "LSCG_UseGag",
      },
      {
        AssetName: "LargeDildo",
        GroupName: "ItemHandheld",
        Tag: "ActivityAsset",
      },
    ],
    Type: "Activity",
  });

  chatSendCustomAction(
    `${getNickname(
      Player
    )}用嘴唇将它的头部包裹，用舌头轻轻舔舐着头部，润滑之后，让粗涨的肉棒顺着口腔，一直吞入喉咙口。奋力忍耐住口腔被侵入的呕吐感后，眼泪也要突破防线。此时，仿佛奖励一般，从契约环释放出的温暖遍布全身，似乎是表扬着这幅嘴被撑满的悲惨淫荡的模样。`
  );

  await sleep(1000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemMouth-MoanGagTalk",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemMouth",
      },
      {
        ActivityName: "MoanGagTalk",
      },
    ],
    Type: "Activity",
  });
}

async function nippleBellEvent() {
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");

  forceNake(Player);

  chatSendCustomAction(
    `契约环的命令让${getNickname(
      Player
    )}立即低下身体，分开双腿跪地，双手放置于挺立的乳首旁。三、二、一…每一次倒数都在耳边回绕，在得到许可之后，饥渴的乳首立即被手指夹搓捻揉，双乳也在拉扯中变形摇晃。完全充血之后，微微湿润的乳首在乳晕之上如花冠之上丰满的果实。但这片刻的满足之后，却是停止的命令，手指只能在周围打转，无论如何不能触碰到…`
  );

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemNipples-Caress",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemNipples",
      },
      {
        ActivityName: "Caress",
      },
    ],
    Type: "Activity",
  });

  await sleep(3000);

  chatSendCustomAction(
    `魔法掠过，两只带有铃铛的夹子刮擦着乳首的边沿，随后紧紧固定在乳首之上。欣赏着这景象一般，魔法的力量在乳夹的末端抬了一下。触电般的快感随着上下颠动的道具深入脑髓，清脆的铃声和淫靡的喘息融成悦虐的和声。`
  );

  InventoryWear(Player, "BellClamps", "ItemNipples");

  ChatRoomCharacterUpdate(Player);
}

async function toyEvent() {
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");

  InventoryRemove(Player, "Panties");

  chatSendCustomAction(
    `魔咒落下，${getNickname(
      Player
    )}看向手中多出的椭圆球状物体，感受着它在掌中的震颤。被名为性欲的锁链提住的手臂将跳动的玩具顺着肚脐向下，通过小腹，一点点分开饱满湿润的肉瓣…直到按在阴蒂之上。契约的指环和已经达到边缘敏感的肉芽共同振动，在最敏感的一点内部将快感灌入小腹。近乎一瞬间${getNickname(
      Player
    )}的双腿就在极乐中痉挛虚软下来，而看着手中已经全然沾湿的跳蛋，${getNickname(
      Player
    )}只感到了发情激起的欲望，一边回味一边不满地瘙痒着。`
  );
  const item = InventoryWear(Player, "WiredEgg", "ItemVulva");

  item.Property.TypeRecord.vibrating = 2;
  ChatRoomCharacterUpdate(Player);

  chatSend(`呜~♡`);
  chatSendCustomAction(`${getNickname(Player)}的身体开始颤抖…`);
}

async function ropeEvent() {
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");

  chatSendCustomAction(
    `在契约环的影响下，${getNickname(
      Player
    )}语无伦次地嘟囔着，脱下了自己的衣服，从包里掏出了一根麻绳，开始在自己身上绑扎起来~`
  );

  forceNake(Player);
  await sleep(3000);
  const rope = InventoryWear(Player, "HempRopeHarness", "ItemTorso");
  rope.Property = { TypeRecord: { typed: 2 } };
  ChatRoomCharacterUpdate(Player);

  await sleep(3000);
  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemPelvis-LSCG_Tug",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemPelvis",
      },
      {
        ActivityName: "LSCG_Tug",
      },
    ],
    Type: "Activity",
  });

  chatSend(`涩涩~，好想要~，想要~♡`);
  chatSendCustomAction(`${getNickname(Player)}的身体开始颤抖…`);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemNipples-Caress",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemNipples",
      },
      {
        ActivityName: "Caress",
      },
    ],
    Type: "Activity",
  });
}

async function fingerEvent() {
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  CharacterSetFacialExpression(Player, "Blush", "High");
  CharacterSetFacialExpression(Player, "Emoticon", "Hearts");
  CharacterSetFacialExpression(Player, "Eyebrows", "Soft");
  CharacterSetFacialExpression(Player, "Mouth", "Moan");
  CharacterSetFacialExpression(Player, "Fluids", "DroolSides");

  // naked
  chatSendCustomAction(
    `${getNickname(
      Player
    )}的大脑一片空白，在契约环的影响下，脱下了自己身上的衣服，露出了一身白皙的肌肤。`
  );
  forceNake(Player);
  await sleep(3000);

  // pose
  chatSendCustomAction(
    `${getNickname(
      Player
    )}的身体开始颤抖~♡，不由自主的跪下，将双腿张开，露出了粉嫩的阴道~`
  );
  CharacterSetActivePose(Player, "KneelingSpread");
  await sleep(3000);

  chatSendCustomAction(`${getNickname(Player)}伸出手指，轻轻插入自己的阴道~♡`);
  await sleep(3000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulva-蠕动手指",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulva",
      },
      {
        ActivityName: "蠕动手指",
      },
    ],
    Type: "Activity",
  });
  await sleep(3000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulva-快速抽插",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulva",
      },
      {
        ActivityName: "快速抽插",
      },
    ],
    Type: "Activity",
  });

  await sleep(3000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulva-快速抽插",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulva",
      },
      {
        ActivityName: "快速抽插",
      },
    ],
    Type: "Activity",
  });

  chatSend("请大家好好看着发情的涩猫~♡咕~♡");

  await sleep(3000);

  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulva-流出液体",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulva",
      },
      {
        ActivityName: "流出液体",
      },
    ],
    Type: "Activity",
  });
}

async function touchNippleEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}发觉胸前的双乳变得越来越沉重，偶尔传出钝痛，于是双手自肩顺着乳肉的轮廓向下，直至根部将其抬在掌中，莫名感觉似乎尺寸比先前大了一些。手指向中间拂去，经过情欲累积形成的红晕——最终盖在已经鼓胀充血的乳首之上。手掌摩擦着如花心般的乳晕，手指捻住熟透果实般的乳首轻轻旋转，${getNickname(
      Player
    )}在拉扯乳首的痛苦和那之后酥麻的快感中不断清醒和沉沦，嘴唇半张，失去聚焦的双眼中似乎隐隐看见自己失态陶醉的模样。`
  );
  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemNipples-Caress",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemNipples",
      },
      {
        ActivityName: "Caress",
      },
    ],
    Type: "Activity",
  });
}

async function touchPussyEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}终于无法忍受曝露在空气中的乳首与阴蒂所感受的空虚与瘙痒，双手环过身体，指尖伸向了胸前和胯下…在魔法的指引下，手指娴熟地绕着乳首打转，另一边则把肉唇分开，撩过湿润内里，停留于阴蒂至上——尽管身体无比渴望着触碰，还是听从于契约环的指令忍耐住，在它许可的瞬间，指尖直接弹上去。左、右、上、下，契约的声音像恶作剧一样把${getNickname(
      Player
    )}的乳首和阴蒂当作摇杆般玩弄，使身体向着被拨动的方向淫荡地摆动。待到声音终于休止，${getNickname(
      Player
    )}才发现自己喘息着，口水滴落在胸口。`
  );
  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulvaPiercings-MasturbateHand",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulvaPiercings",
      },
      {
        ActivityName: "MasturbateHand",
      },
    ],
    Type: "Activity",
  });
}

function removeUnderwearEvent() {
  if (!InventoryGet(Player, "Panties") && !InventoryGet(Player, "Bra")) {
    chatSendCustomAction(
      `${getNickname(
        Player
      )}胸前淫靡的两点凸起已经隔着衣服都隐约可见，但发情的身体却不满足于这样的刺激…手指顺着腰线向后，即使内衣已经不在哪里，还是想要变得更加赤裸…更加羞耻…更加快乐。`
    );
    ServerSend("ChatRoomChat", {
      Content: "ChatSelf-ItemVulvaPiercings-MasturbateHand",
      Dictionary: [
        {
          SourceCharacter: Player.MemberNumber,
        },
        {
          TargetCharacter: Player.MemberNumber,
        },
        {
          Tag: "FocusAssetGroup",
          FocusGroupName: "ItemVulvaPiercings",
        },
        {
          ActivityName: "MasturbateHand",
        },
      ],
      Type: "Activity",
    });
    return;
  }
  chatSendCustomAction(
    `${getNickname(
      Player
    )}的身体隐隐渴求着更多的刺激，于是手指伸向背后和腰间，在外衣后面悄悄将内衣解开，内裤褪下…现在${getNickname(
      Player
    )}越发敏感的乳首和突出的阴蒂和衣物直接摩擦着，偷偷享受着这些微的快感。~`
  );
  InventoryRemove(Player, "Panties");
  InventoryRemove(Player, "Bra");
}

function liquidEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}在发情的幻想中大脑空白了一瞬间，等到意识清晰时，大腿内侧已清晰地感受到一股炽热粘稠的流动缓缓向下。无论多么想逃避这羞耻的反应，抱住身体，夹住双腿，当身体蜷曲时，蜜穴之内的淫肉相互摩擦的快感反而几乎让双眼上翻。用力收束着身体试图控制住涌来的欢愉，但化作媚肉的身体即使是自我蠕动都在从身体深处产生快感，在一阵阵抽搐下，温热的蜜汁已经淌到脚踝。`
  );
  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulva-流出液体",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulva",
      },
      {
        ActivityName: "流出液体",
      },
    ],
    Type: "Activity",
  });
}

function blushEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}脸颊泛红，旁人也许很难察觉这细微的变化…但一个声音在脑海中挑逗地低语，模糊地重复着${getNickname(
      Player
    )}心中不为人知的渴望。呼吸在此时变得沉重拖沓，努力用羞耻心将欲望压制住。`
  );
  CharacterSetFacialExpression(Player, "Blush", "High");
}

function droolEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}抿住嘴唇，试图不让因身体发热而近乎无法忍耐的呻吟从口中泄出，但越是努力控制，翻滚的情热就越是在身体中放纵。不知不觉，${getNickname(
      Player
    )}的唇角已经湿润，发情的口涎连理成银色的丝线。`
  );
  CharacterSetFacialExpression(Player, "Blush", "Low");
  CharacterSetFacialExpression(Player, "Fluids", "DroolLow");
}

function eyeEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}发觉眼前正被一层淡粉的薄雾缓缓笼罩，身体隐隐从深处作痒渴求着什么。所见的景象在${getNickname(
      Player
    )}眼中变得模糊，不自觉地停留于小腹下凸起的边缘、纤细的指尖…好像只有这些能够满足脑中反复刺激着神经的念头。`
  );
  CharacterSetFacialExpression(Player, "Blush", "Low");
  CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
  ServerSend("ChatRoomChat", {
    Content: "ChatSelf-ItemVulvaPiercings-MasturbateHand",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: Player.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemVulvaPiercings",
      },
      {
        ActivityName: "MasturbateHand",
      },
    ],
    Type: "Activity",
  });
}

function takeOffClothesEvent() {
  chatSendCustomAction(
    `${getNickname(
      Player
    )}发觉背后的衣服已经被一层薄薄的汗水浸湿。也许是出于燥热，${getNickname(
      Player
    )}脱掉了外衣。透出可口红色的皮肤已经对空气的变化都十分敏感，让${getNickname(
      Player
    )}不由得哆嗦了一下，意识到自己赤裸地露出身体，理性在背德的快感冲击下岌岌可危。`
  );

  forceNake(Player);
}

function wearRingEvent(isSlave = false) {
  chatSendCustomAction(
    `女仆长掀开${getNickname(
      Player
    )}的下衣，手指默默伸入衣服，顺着小腹向下，将阴唇分开，捏住含羞的小豆粒，随后亲手将一枚光滑的圆环不偏不倚地从阴蒂中心穿过，好像是性器的首轮一般将其约束住。黑暗的魔咒随即刻入${getNickname(
      Player
    )}的身体，情欲的热量在血液中逐渐向着身体的末梢传播。虽然现在并不怎么能感受到，但一种无法描述的燥热和悸动已在逐渐掌握身体。`
  );

  const craft = {
    Item: "RoundClitPiercing",
    Property: "Comfy",
    Lock: "",
    Name: isSlave ? "奴隶女仆契约" : "奴隶女仆契约（临时）",
    Description: isSlave ? "主人的私有财产证明" : "女仆长的私有财产证明",
    Color: "#FFFFFF,#C2C2C2,#C2C2C2,#C2C2C2,#C2C2C2",
    Private: true,
    TypeRecord: { typed: 2 },
    ItemProperty: {},
    MemberNumber: 159349,
    MemberName: "ℙ𝕠𝕚𝕒𝕡𝕡𝕠𝕚",
  };

  InventoryWear(
    Player,
    "RoundClitPiercing",
    "ItemVulvaPiercings",
    ["#FFFFFF", "#C2C2C2", "#C2C2C2", "#C2C2C2", "#C2C2C2"],
    100,
    PoiId,
    craft
  );

  const equippedItem = getTargetItemBySlotName(Player, "ItemVulvaPiercings");
  equippedItem.Property = { TypeRecord: { typed: 2 }, Effect: ["Wiggling"] };

  ChatRoomCharacterUpdate(Player);

  if (maidStorage.corruption.stage === 0) {
    maidStorage.corruption.stage = 1;
  }
}

// Actions
function forceLickAction(target) {
  ServerSend("ChatRoomCharacterUpdate", {
    ID: Player.OnlineID,
    ActivePose: [...Player.ActivePose, "Kneel"],
    Appearance: ServerAppearanceBundle(Player.Appearance),
  });
  ServerSend("ChatRoomChat", {
    Content: "ChatOther-ItemFeet-Lick",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: target.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemFeet",
      },
      {
        ActivityName: "Lick",
      },
    ],
    Type: "Activity",
  });
  ServerSend("ChatRoomChat", {
    Content: "ChatOther-ItemBoots-PoliteKiss",
    Dictionary: [
      {
        SourceCharacter: Player.MemberNumber,
      },
      {
        TargetCharacter: target.MemberNumber,
      },
      {
        Tag: "FocusAssetGroup",
        FocusGroupName: "ItemBoots",
      },
      {
        ActivityName: "PoliteKiss",
      },
    ],
    Type: "Activity",
  });
}

function forceNake() {
  const clothesLocationList = [
    "Cloth",
    "ClothLower",
    "ClothAccessory",
    "Suit",
    "SuitLower",
    "Corset",
    "Gloves",
    "Shoes",
    "Hat",
    "Bra",
    "Panties",
    "Necklace",
    "RightAnklet",
    "LeftAnklet",
    "Mask",
    "ClothAccessory_笨笨蛋Luzi",
    "Cloth_笨笨蛋Luzi",
  ];

  const equippedList = Player.Appearance.map((x) => x.Asset.Group.Name);
  equippedList.forEach((name) => {
    if (name.includes("Item")) {
      return;
    }

    if (clothesLocationList.includes(name) || name.includes("笨笨蛋Luzi")) {
      InventoryRemove(Player, name);
    }
  });

  ChatRoomCharacterUpdate(Player);
}

// Chatroom
function leaveRoom() {
  ChatRoomSetLastChatRoom("");
  ServerSend("ChatRoomLeave", "");
  CommonSetScreen("Online", "ChatSearch");
  ChatRoomClearAllElements();
}

function enterRoom(roomName) {
  ChatSearchLastQueryJoinTime = CommonTime();
  ChatSearchLastQueryJoin = roomName;
  ChatRoomPlayerCanJoin = true;
  ServerSend("ChatRoomJoin", { Name: roomName });
  ChatRoomPingLeashedPlayers();
}

function summonToCafe() {
  leaveRoom();
  enterRoom("PoisMaidCafe");
}

// Map
function movePlayer(x, y) {
  if (!Player?.MapData) {
    return;
  }
  Player.MapData.Pos.X = x;
  Player.MapData.Pos.Y = y;

  ChatRoomMapViewMove();
}

function getPlayerPos() {
  return Player?.MapData?.Pos;
}

function getEmptySpot(coords) {
  const emptySpot = coords.find((coord) => {
    const char = ChatRoomMapViewGetCharacterAtPos(coord[0], coord[1]);
    return !char;
  });

  return emptySpot;
}

function moveEmptyJailCell() {
  const emptySpot = getEmptySpot(MaidCafeData.jailCells);
  if (emptySpot) {
    movePlayer(emptySpot[0], emptySpot[1]);
  } else {
    const overflowSpot = getEmptySpot(MaidCafeData.overflowCells);
    movePlayer(overflowSpot[0], overflowSpot[1]);
  }
}

function moveEmptyDollDisplay() {
  const emptySpot = getEmptySpot(MaidCafeData.dollDisplays);
  if (emptySpot) {
    movePlayer(emptySpot[0], emptySpot[1]);
  } else {
    const overflowSpot = getEmptySpot(MaidCafeData.overflowCells);
    movePlayer(overflowSpot[0], overflowSpot[1]);
  }
}

// Utils
function sendJailMsg() {
  const rand = getRandomNumber(1, 16);
  switch (rand) {
    case 1:
      chatSendLocal("天花板上释放出了粉红色的气体，你一不小心吸了一大口~");
      DrawFlashScreen("#FF7777", 2000, 500);
      lscgHorny(30);
      break;
    case 2:
      chatSendLocal("你的精神崩溃了，什么都做不了……");
      break;
    case 3:
      chatSendLocal("强烈的发情你袭来，全身都变的发热发疼");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 4:
      chatSendLocal("你被毫不留情地折磨全身的性感带，被强烈的快感所包围！");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 5:
      chatSendLocal("你被充分开发过的小穴明显地产生了反应，难受起来了...");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 6:
      chatSendLocal("你被激烈玩弄着的被充分开发过的乳头，感觉舒服起来了！");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 7:
      chatSendLocal("你被充分开发过的菊穴明显地产生了反应，开始有感觉了！");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 8:
      chatSendLocal("你被暴力地折磨被充分开发过的超敏感的阴蒂，开始有感觉了！");
      ActivityEffect(Player, Player, "MasturbateFist", "ItemVulva", 0, null);
      break;
    case 9:
      chatSendLocal("你因屈服于快感而无法动弹……");
      break;
    default:
      chatSendLocal(
        "你被死死地锁在了牢房里，无法逃脱~ 你只能(/p 求饶)或者(/p 屈服)。"
      );
  }
}

function isInCafe() {
  return ChatRoomData?.Name === "PoisMaidCafe";
}

function lscgHorny(level) {
  // @ts-ignore
  if (!Player.LSCG || !Player.LSCG.InjectorModule) {
    return;
  }

  const drugLevelMultiplier = Player.LSCG.InjectorModule.drugLevelMultiplier;
  const hornyLevelMax = Player.LSCG.InjectorModule.hornyLevelMax;
  const newLevelActual = Player.LSCG.InjectorModule.hornyLevel + level;
  Player.LSCG.InjectorModule.hornyLevel = Math.min(
    newLevelActual,
    hornyLevelMax * drugLevelMultiplier
  );
}

function releasePlayer(all = false, exception = []) {
  const itemsToRemove = [
    "ItemVulva",
    "ItemButt",
    "ItemArms",
    "ItemHands",
    "ItemMouth",
    "ItemMouth2",
    "ItemMouth3",
    "ItemTorso",
    "ItemBreast",
    "ItemLegs",
    "ItemFeet",
    "ItemBoots",
    "ItemNipples",
    "ItemPelvis",
    "ItemHead",
    "ItemDevices",
    "ItemEars",
    "ItemHood",
    "ItemNose",
    "ItemMisc",
    "ItemTorso2",
    "ItemNeckRestraints",
  ];
  const importantItems = [
    "ItemVulvaPiercings",
    "ItemNeck",
    "ItemNeckRestraints",
    "ItemNeckAccessories",
    "ItemNipplesPiercings",
  ];

  itemsToRemove.forEach((slotName) => {
    if (
      !isItemLockImportant(Player, slotName) &&
      !exception.includes(slotName)
    ) {
      InventoryRemove(Player, slotName);
    }
  });

  if (all) {
    importantItems.forEach((slotName) => InventoryRemove(Player, slotName));
  }

  ChatRoomCharacterUpdate(Player);
}

function isWearingSlaveCollar(target) {
  const existingItem = getTargetItemBySlotName(target, "ItemNeck");
  return existingItem?.Asset?.Name === "SlaveCollar";
}

function isItemLockImportant(target, slotName) {
  const existingItem = getTargetItemBySlotName(target, slotName);
  const lock = existingItem?.Property?.LockedBy;
  return (
    lock === "OwnerPadlock" ||
    lock === "LoversPadlock" ||
    lock === "FamilyPadlock"
  );
}

const wearAvaliableRandom = (set, lock = true) => {
  const setSlots = Object.keys(set);
  const avaliableSlots = setSlots.filter(
    (x) => InventoryGet(Player, x) === null
  );

  if (avaliableSlots.length === 0) {
    return;
  }

  const slot = avaliableSlots[getRandomNumber(0, avaliableSlots.length - 1)];

  const item = wearItem(slot, set, lock);

  ChatRoomCharacterUpdate(Player);

  return item;
};

const wearCloths = (set) => {
  const setSlots = Object.keys(set);
  setSlots.forEach((slot) => {
    wearItem(slot, set);
  });
  ChatRoomCharacterUpdate(Player);
};

const wearItem = (slot, set, lock = true) => {
  const restraint = set[slot];
  if (isItemLockImportant(Player, slot)) {
    return;
  }
  if (slot === "ItemNeck" && isWearingSlaveCollar(Player)) {
    return;
  }
  if (slot === "ItemVulvaPiercings" && isWearingRing()) {
    return;
  }

  // copy config from prop to craft
  const craft = restraint?.Craft ?? {};
  if (craft?.TypeRecord || restraint.Property?.TypeRecord) {
    craft["TypeRecord"] = {};
    craft.TypeRecord = restraint.Property?.TypeRecord;
  }

  const equippedItem = InventoryWear(
    Player,
    restraint?.Name,
    slot,
    restraint?.Color,
    restraint?.Difficulty,
    PoiId,
    craft
  );

  if (restraint.Property) {
    equippedItem.Property = restraint.Property;
  }

  if (lock) {
    InventoryLock(Player, slot, "ExclusivePadlock", 159349);
  }

  return equippedItem;
};

function getTargetItemBySlotName(target, slotName) {
  return target.Appearance.find((x) => x.Asset.Group.Name === slotName);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitFor(func, cancelFunc = () => false) {
  while (!func()) {
    if (cancelFunc()) {
      return false;
    }
    // eslint-disable-next-line no-await-in-loop
    await sleep(10);
  }
  return true;
}

function consoleLog(text) {
  console.log(`PoiMaid: ${text}`);
}

function consoleDebug(text) {
  if (maidDebug) {
    console.log(`PoiMaid DEBUG: ${text}`);
  }
}

function getNickname(target) {
  return CharacterNickname(target);
}

function getPlayer(value) {
  if (!value) return;
  return ChatRoomCharacter.find((Character) => {
    return (
      Character.MemberNumber == value ||
      Character.Name.toLowerCase() === value ||
      Character.Nickname?.toLowerCase() === value
    );
  });
}

// Chat
function chatSendLocal(message) {
  if (!ServerPlayerIsInChatRoom()) return;

  const styledMessage = styleMessage(message);

  ChatRoomSendLocal(styledMessage);
}

function chatSendMAIDMessage(msg, _data = undefined, targetNumber = undefined) {
  let data = {
    Content: "maidMsg",
    Dictionary: {
      msg: msg,
    },
    Type: "Hidden",
  };
  if (_data) data.Dictionary.data = _data;
  if (targetNumber) data.Target = targetNumber;
  ServerSend("ChatRoomChat", data);
}

function chatSend(message) {
  if (!ServerPlayerIsInChatRoom()) return;

  ServerSend("ChatRoomChat", {
    Content: message,
    Type: "Chat",
  });
}

function styleMessage(message) {
  return `<div style='font-size: 1.1vw; text-align: center; background: ${blackColor}; padding: 4px; border-radius: 8px;'><span style="color:${whiteColor};">${message}</span></div>`;
}
function chatSendCustomAction(message) {
  if (!ServerPlayerIsInChatRoom()) return;

  ServerSend("ChatRoomChat", {
    Content: "BCX_PLAYER_CUSTOM_DIALOG",
    Type: "Action",
    Dictionary: [
      {
        Tag: `MISSING TEXT IN "Interface.csv": BCX_PLAYER_CUSTOM_DIALOG`,
        Text: message,
      },
    ],
  });
}

function chatSendBeep(data, targetId) {
  const beep = {
    IsSecret: true,
    BeepType: "maidBeep",
    MemberNumber: targetId,
    Message: JSON.stringify({
      type: "POIMAID",
      ...data,
    }),
  };

  ServerSend("AccountBeep", beep);
}

function garbleSpeech(text, garbleWords) {
  let newText = "";
  const punctuation = ",.!?！？。、，";
  for (const word of text.split(" ")) {
    const rword = word.split("").reverse().join("");
    let wordPunctuation = "";
    if (punctuation.includes(rword[0])) {
      for (const c of rword.split("")) {
        if (punctuation.includes(c)) wordPunctuation += c;
      }
      wordPunctuation = wordPunctuation.split("").reverse().join("");
    }
    newText +=
      garbleWords[getRandomNumber(0, garbleWords.length - 1)] +
      wordPunctuation +
      " ";
  }

  return newText.trim();
}

// SDK
if (!bcModSDK) {
  var bcModSDK = (function () {
    "use strict";
    const o = "1.2.0";
    function e(o) {
      alert("Mod ERROR:\n" + o);
      const e = new Error(o);
      throw (console.error(e), e);
    }
    const t = new TextEncoder();
    function n(o) {
      return !!o && "object" == typeof o && !Array.isArray(o);
    }
    function r(o) {
      const e = new Set();
      return o.filter((o) => !e.has(o) && e.add(o));
    }
    const i = new Map(),
      a = new Set();
    function c(o) {
      a.has(o) || (a.add(o), console.warn(o));
    }
    function s(o) {
      const e = [],
        t = new Map(),
        n = new Set();
      for (const r of f.values()) {
        const i = r.patching.get(o.name);
        if (i) {
          e.push(...i.hooks);
          for (const [e, a] of i.patches.entries())
            t.has(e) &&
              t.get(e) !== a &&
              c(
                `ModSDK: Mod '${r.name}' is patching function ${
                  o.name
                } with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${
                  t.get(e) || ""
                }\nPatch2:\n${a}`
              ),
              t.set(e, a),
              n.add(r.name);
        }
      }
      e.sort((o, e) => e.priority - o.priority);
      const r = (function (o, e) {
        if (0 === e.size) return o;
        let t = o.toString().replaceAll("\r\n", "\n");
        for (const [n, r] of e.entries())
          t.includes(n) ||
            c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),
            (t = t.replaceAll(n, r));
        return (0, eval)(`(${t})`);
      })(o.original, t);
      let i = function (e) {
        var t, i;
        const a =
            null === (i = (t = m.errorReporterHooks).hookChainExit) ||
            void 0 === i
              ? void 0
              : i.call(t, o.name, n),
          c = r.apply(this, e);
        return null == a || a(), c;
      };
      for (let t = e.length - 1; t >= 0; t--) {
        const n = e[t],
          r = i;
        i = function (e) {
          var t, i;
          const a =
              null === (i = (t = m.errorReporterHooks).hookEnter) ||
              void 0 === i
                ? void 0
                : i.call(t, o.name, n.mod),
            c = n.hook.apply(this, [
              e,
              (o) => {
                if (1 !== arguments.length || !Array.isArray(e))
                  throw new Error(
                    `Mod ${
                      n.mod
                    } failed to call next hook: Expected args to be array, got ${typeof o}`
                  );
                return r.call(this, o);
              },
            ]);
          return null == a || a(), c;
        };
      }
      return { hooks: e, patches: t, patchesSources: n, enter: i, final: r };
    }
    function l(o, e = !1) {
      let r = i.get(o);
      if (r) e && (r.precomputed = s(r));
      else {
        let e = window;
        const a = o.split(".");
        for (let t = 0; t < a.length - 1; t++)
          if (((e = e[a[t]]), !n(e)))
            throw new Error(
              `ModSDK: Function ${o} to be patched not found; ${a
                .slice(0, t + 1)
                .join(".")} is not object`
            );
        const c = e[a[a.length - 1]];
        if ("function" != typeof c)
          throw new Error(`ModSDK: Function ${o} to be patched not found`);
        const l = (function (o) {
            let e = -1;
            for (const n of t.encode(o)) {
              let o = 255 & (e ^ n);
              for (let e = 0; e < 8; e++)
                o = 1 & o ? -306674912 ^ (o >>> 1) : o >>> 1;
              e = (e >>> 8) ^ o;
            }
            return ((-1 ^ e) >>> 0).toString(16).padStart(8, "0").toUpperCase();
          })(c.toString().replaceAll("\r\n", "\n")),
          d = { name: o, original: c, originalHash: l };
        (r = Object.assign(Object.assign({}, d), {
          precomputed: s(d),
          router: () => {},
          context: e,
          contextProperty: a[a.length - 1],
        })),
          (r.router = (function (o) {
            return function (...e) {
              return o.precomputed.enter.apply(this, [e]);
            };
          })(r)),
          i.set(o, r),
          (e[r.contextProperty] = r.router);
      }
      return r;
    }
    function d() {
      for (const o of i.values()) o.precomputed = s(o);
    }
    function p() {
      const o = new Map();
      for (const [e, t] of i)
        o.set(e, {
          name: e,
          original: t.original,
          originalHash: t.originalHash,
          sdkEntrypoint: t.router,
          currentEntrypoint: t.context[t.contextProperty],
          hookedByMods: r(t.precomputed.hooks.map((o) => o.mod)),
          patchedByMods: Array.from(t.precomputed.patchesSources),
        });
      return o;
    }
    const f = new Map();
    function u(o) {
      f.get(o.name) !== o &&
        e(`Failed to unload mod '${o.name}': Not registered`),
        f.delete(o.name),
        (o.loaded = !1),
        d();
    }
    function g(o, t) {
      (o && "object" == typeof o) ||
        e("Failed to register mod: Expected info object, got " + typeof o),
        ("string" == typeof o.name && o.name) ||
          e(
            "Failed to register mod: Expected name to be non-empty string, got " +
              typeof o.name
          );
      let r = `'${o.name}'`;
      ("string" == typeof o.fullName && o.fullName) ||
        e(
          `Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`
        ),
        (r = `'${o.fullName} (${o.name})'`),
        "string" != typeof o.version &&
          e(
            `Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`
          ),
        o.repository || (o.repository = void 0),
        void 0 !== o.repository &&
          "string" != typeof o.repository &&
          e(
            `Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`
          ),
        null == t && (t = {}),
        (t && "object" == typeof t) ||
          e(
            `Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`
          );
      const i = !0 === t.allowReplace,
        a = f.get(o.name);
      a &&
        ((a.allowReplace && i) ||
          e(
            `Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`
          ),
        u(a));
      const c = (o) => {
          let e = g.patching.get(o.name);
          return (
            e ||
              ((e = { hooks: [], patches: new Map() }),
              g.patching.set(o.name, e)),
            e
          );
        },
        s =
          (o, t) =>
          (...n) => {
            var i, a;
            const c =
              null === (a = (i = m.errorReporterHooks).apiEndpointEnter) ||
              void 0 === a
                ? void 0
                : a.call(i, o, g.name);
            g.loaded ||
              e(`Mod ${r} attempted to call SDK function after being unloaded`);
            const s = t(...n);
            return null == c || c(), s;
          },
        p = {
          unload: s("unload", () => u(g)),
          hookFunction: s("hookFunction", (o, t, n) => {
            ("string" == typeof o && o) ||
              e(
                `Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`
              );
            const i = l(o),
              a = c(i);
            "number" != typeof t &&
              e(
                `Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`
              ),
              "function" != typeof n &&
                e(
                  `Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`
                );
            const s = { mod: g.name, priority: t, hook: n };
            return (
              a.hooks.push(s),
              d(),
              () => {
                const o = a.hooks.indexOf(s);
                o >= 0 && (a.hooks.splice(o, 1), d());
              }
            );
          }),
          patchFunction: s("patchFunction", (o, t) => {
            ("string" == typeof o && o) ||
              e(
                `Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`
              );
            const i = l(o),
              a = c(i);
            n(t) ||
              e(
                `Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`
              );
            for (const [n, i] of Object.entries(t))
              "string" == typeof i
                ? a.patches.set(n, i)
                : null === i
                ? a.patches.delete(n)
                : e(
                    `Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`
                  );
            d();
          }),
          removePatches: s("removePatches", (o) => {
            ("string" == typeof o && o) ||
              e(
                `Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`
              );
            const t = l(o);
            c(t).patches.clear(), d();
          }),
          callOriginal: s("callOriginal", (o, t, n) => {
            ("string" == typeof o && o) ||
              e(
                `Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`
              );
            const i = l(o);
            return (
              Array.isArray(t) ||
                e(
                  `Mod ${r} failed to call a function: Expected args array, got ${typeof t}`
                ),
              i.original.apply(null != n ? n : globalThis, t)
            );
          }),
          getOriginalHash: s("getOriginalHash", (o) => {
            ("string" == typeof o && o) ||
              e(
                `Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`
              );
            return l(o).originalHash;
          }),
        },
        g = {
          name: o.name,
          fullName: o.fullName,
          version: o.version,
          repository: o.repository,
          allowReplace: i,
          api: p,
          loaded: !0,
          patching: new Map(),
        };
      return f.set(o.name, g), Object.freeze(p);
    }
    function h() {
      const o = [];
      for (const e of f.values())
        o.push({
          name: e.name,
          fullName: e.fullName,
          version: e.version,
          repository: e.repository,
        });
      return o;
    }
    let m;
    const y =
      void 0 === window.bcModSdk
        ? (window.bcModSdk = (function () {
            const e = {
              version: o,
              apiVersion: 1,
              registerMod: g,
              getModsInfo: h,
              getPatchingInfo: p,
              errorReporterHooks: Object.seal({
                apiEndpointEnter: null,
                hookEnter: null,
                hookChainExit: null,
              }),
            };
            return (m = e), Object.freeze(e);
          })())
        : (n(window.bcModSdk) ||
            e("Failed to init Mod SDK: Name already in use"),
          1 !== window.bcModSdk.apiVersion &&
            e(
              `Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`
            ),
          window.bcModSdk.version !== o &&
            alert(
              `Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`
            ),
          window.bcModSdk);
    return (
      "undefined" != typeof exports &&
        (Object.defineProperty(exports, "__esModule", { value: !0 }),
        (exports.default = y)),
      y
    );
  })();
}

const SDK = bcModSDK.registerMod({
  name: "POIMAID",
  fullName: "Poi's Maid",
  version: version,
  repository: "https://github.com/poiappoi/BCMaid",
});

// Hooks
function registerHooks() {
  const highPriority = 200;
  const lowPriority = -200;

  SDK.hookFunction("ChatRoomMessage", highPriority, async (args, next) => {
    const data = args[0];
    const sender = getPlayer(data.Sender);

    if (!sender) return next(args);

    if (data.Type === "Emote" && isInCafe()) {
      const content = data.Content;

      // headmaid's commands
      if (sender.MemberNumber === PoiId) {
        const releaseKeyWord = "释放";

        if (content.includes(releaseKeyWord)) {
          const targetName = content.replace(releaseKeyWord, "");
          const char = getPlayer(targetName);
          if (char?.MemberNumber === Player?.MemberNumber) {
            releasePlayer();
            await sleep(3000);
            movePlayer(19, 17);
          }
        }
      }
    }

    // orgasm event
    if (data.Type === "Activity" && data.Content.includes("Orgasm")) {
      consoleDebug("Orgasm event");
      if (sender.MemberNumber === Player.MemberNumber && isWearingRing()) {
        // corruption
        if (maidStorage.corruption.progression > 800) {
          decreaseCorruptionPoint(getRandomNumber(20, 50));
          chatSendLocal(
            `高潮过后，你的身体如同被掏空，瘫软无力，沉浸在余韵中，呼吸微弱而紊乱。`
          );
          return;
        }
        chatSendLocal(`你喘息着漏出甜美的声音，因快感而堕落~♡`);
        increaseCorruptionPoint(getRandomNumber(3, 50));

        // quest
        if (maidStorage?.quest?.started && maidStorage.quest.questId === 1) {
          maidStorage.quest.questData.orgasmCnt++;
          chatSendLocal(
            `你还可以高潮${5 - maidStorage.quest.questData.orgasmCnt}次`
          );
        }
      }
    }

    // maid message
    if (data.Type === "Hidden" && data.Content === "maidMsg") {
      const msg = data.Dictionary.msg;
      consoleDebug(`MAID MSG:, ${msg}`);
      if (
        sender.MemberNumber === PoiId &&
        data.Dictionary.target === Player.MemberNumber
      ) {
        if (msg === "giveRing") {
          const isSlave = Player?.Ownership?.MemberNumber === PoiId;
          wearRingEvent(isSlave);
        }

        if (msg === "triggerEvent") {
          const eventId = data.Dictionary?.data;
          const event = corruptionEvents[eventId];
          if (event) {
            chatSendCustomAction(
              `女仆长眯着眼睛，看向了${getNickname(Player)},轻轻一笑~`
            );
            event();
          }
        }

        if (msg === "talk") {
          const content = data.Dictionary?.data;
          chatSendLocal(`你的嘴唇不由自主的动了起来，重复着女仆长的话语…`);
          chatSend(content);
        }
      }
    }

    return next(args);
  });

  SDK.hookFunction("ServerSend", highPriority * 10, async (args, next) => {
    const message = args[0];
    const params = args[1];

    if (message === "ChatRoomChat" && params.Type === "Chat") {
      if (maidStorage.corruption.stage === 0) return next(args);

      params.Content = await corruptionGarble(params.Content);
      return next(args);
    }

    if (message === "ChatRoomChat" && params.Type === "Chat") {
      if (params.Content[0] !== "(") {
        if (catSpeechSwitch) {
          params.Content = garbleSpeech(params.Content, [
            "喵~",
            "喵~喵",
            "喵喵~喵",
            "喵呜~",
            "喵呜~喵",
            "喵嗷~",
            "咪~",
            "呼噜~",
            "喵喵~呜",
          ]);
          return next(args);
        }
      }
    }

    return next(args);
  });

  SDK.hookFunction("ServerAccountBeep", highPriority, async (args, next) => {
    const beep = args[0];
    if (!beep.BeepType) return next(args);
    if (beep.BeepType !== "maidBeep") {
      return next(args);
    }
    let data;

    try {
      data = JSON.parse(beep.Message);
    } catch {
      return next(args);
    }
    if (data.type !== "POIMAID") return next(args);
    if (!isWearingRing()) return next(args);

    if (data.action === "talk") {
      const content = data?.content;
      chatSendLocal(`你的嘴唇不由自主的动了起来，重复着女仆长的话语…`);
      chatSend(content);
    }

    if (data.action === "triggerEvent") {
      const eventId = data?.eventId;
      const event = corruptionEvents[eventId];
      if (event) {
        chatSendCustomAction(`契约环的魔法从远方向${getNickname(Player)}低语~`);
        event();
      }
    }

    if (data.action === "summon") {
      chatSendCustomAction(
        `女仆长的魔法通过契约环召唤着${getNickname(Player)}~`
      );
      await sleep(10000);
      summonToCafe();
    }

    next(args);
  });

  SDK.hookFunction("CommandExecute", highPriority * 5, (args, next) => {
    const command = args[0].toLowerCase();
    let forbid = false;

    if (forbid) return false;
    return next(args);
  });
}

// Storage
function resetMaidStorage() {
  Player.OnlineSettings.POIMAID = {};
  Player.OnlineSharedSettings.POIMAID = {};
  maidStorage = createMaidStorage();
  updateMaidStorage();
  ServerSend("AccountUpdate", {
    OnlineSettings: Player.OnlineSettings,
    OnlineSharedSettings: Player.OnlineSharedSettings,
  });
}

function createMaidStorage() {
  const data = {
    corruption: {
      stage: 0,
      progression: 0,
    },
    quest: {
      started: false,
      questId: -1,
      questData: {},
    },

    version: version,
  };

  if (!Player.OnlineSettings.POIMAID) Player.OnlineSettings.POIMAID = {};

  Object.keys(data).forEach((key) => {
    if (Player.OnlineSettings.POIMAID[key] === undefined) {
      Player.OnlineSettings.POIMAID[key] = data[key];
    }
  });
  return Player.OnlineSettings.POIMAID;
}

function updateMaidStorage() {
  if (JSON.stringify(maidStorage) === maidStorageSave) return;
  maidStorageSave = JSON.stringify(maidStorage);
  Player.OnlineSettings.POIMAID = Object.assign({}, maidStorage);
  Player.OnlineSharedSettings.POIMAID = Object.assign({}, maidStorage);
  ServerSend("AccountUpdate", {
    OnlineSettings: Player.OnlineSettings,
    OnlineSharedSettings: Player.OnlineSharedSettings,
  });
}

function migrateMaidStorage() {
  const savedSettings = Player.OnlineSettings.POIMAID;
  if (savedSettings.corruption.stage) {
    let migratedStage = savedSettings.corruption.stage;
    if (migratedStage > 3) {
      migratedStage = 3;
    }
    maidStorage.corruption.stage = migratedStage;
  }

  if (savedSettings.corruption.progression) {
    maidStorage.corruption.progression = savedSettings.corruption.progression;
  }
}

// Commands
class ChatCommands {
  constructor() {
    this.求饶 = {
      name: "求饶",
      description: "求饶",
      args: "",
      danger: 0,
      action: () => {
        if (!isInCafe()) return;

        const texts = [
          `${getNickname(Player)}忍耐不住发情的身体，凄惨地乞求女仆长玩弄自己~`,
          `${getNickname(Player)}摆出服从的姿势，难堪地向女仆长求饶~`,
          `${getNickname(
            Player
          )}内心屈服于残酷的凌辱，用难堪的声音向女仆长求饶~`,
          `${getNickname(
            Player
          )}带着绝望的表情哭着向女仆长求饶，与此同时大腿不停颤抖着连续绝顶~`,
          `${getNickname(
            Player
          )}以害怕的声音大声哭喊着，与此同时迎来盛大的潮吹连续绝顶了，因快感而完全屈服！`,
          `${getNickname(
            Player
          )}带着绝望的表情哭着向女仆长求饶，与此同时身体剧烈痉挛着绝顶了，因快感而完全屈服！`,
        ];
        const text = texts[getRandomNumber(0, texts.length - 1)];
        if (text.includes("绝顶")) {
          ActivityOrgasmPrepare(Player);
        }
        chatSendCustomAction(texts[getRandomNumber(0, texts.length - 1)]);
      },
    };
    this.投降 = {
      name: "投降",
      description: "投降",
      args: "",
      danger: 0,
      action: async () => {
        if (!isInCafe()) return;

        chatSendCustomAction(
          `${getNickname(Player)}难堪地承认了自己的败北~被女仆长转移到了牢房~`
        );
        releasePlayer();
        await sleep(3000);
        moveEmptyJailCell();
      },
    };

    this.屈服 = {
      name: "屈服",
      description: "屈服",
      args: "",
      danger: 0,
      action: async () => {
        if (!isInCafe()) return;

        chatSendCustomAction(
          `${getNickname(
            Player
          )}由于持续不断的残酷的凌辱，精神崩溃，完全败北，从心底里屈服了，一遍又一遍地乞求着想成为女仆长的奴隶~`
        );
        await sleep(3000);
        chatSendLocal(
          "女仆长对你的表现感到满意，将你带到了她的座位前面，并给你换上了可爱的猫猫服~"
        );
        releasePlayer(false, [
          "ItemPelvis",
          "ItemNipples",
          "ItemVulva",
          "ItemButt",
          "ItemMouth",
        ]);
        movePlayer(MaidCafeData.throneFront[0], MaidCafeData.throneFront[1]);
        await sleep(3000);
        wearAvaliableRandom(petSuit, false);
        chatSendLocal("你从此将注定作为女仆长的奴隶而生活了……❤");
        await sleep(3000);
        CharacterSetFacialExpression(Player, "Eyes", "HeartPink");
        CharacterSetFacialExpression(Player, "Blush", "High");
        CharacterSetFacialExpression(Player, "Emoticon", "Hearts");
        CharacterSetFacialExpression(Player, "Mouth", "Moan");
        await sleep(3000);
        const currentName = Player.Nickname;
        if (currentName.includes("奴隶女仆")) return;
        const newName = `奴隶女仆${currentName}`;
        Player.Nickname = newName;
        ServerSend("AccountUpdate", { Nickname: newName });
        await sleep(3000);
      },
    };
  }
}

// Main
function run() {
  //commands
  CommandCombine([
    {
      Tag: "p",
      Description: "Execute maid command",
      Action: function (text) {
        const command = text.split(" ")[0];
        const commandText = text.split(" ").slice(1).join(" ");

        if (chatCommands[command]) {
          chatCommands[command].action(commandText);
        } else {
          chatSendLocal("Unknown command");
        }
      },
    },
  ]);

  // register hooks
  registerHooks();

  // storage
  maidStorage = Object.assign({}, createMaidStorage());
  migrateMaidStorage();
  setInterval(updateMaidStorage, 400);

  // corruption
  setInterval(triggerCorruptionEvents, pollingInterval);
  setInterval(corruptionProgress, 5000);
  setInterval(corruptionHappinessEvent, 10 * minute);

  // maid map
  setInterval(handleMaidCafeMap, 400);

  // DEBUG
  if (Player?.MemberName === PoiBotId) {
    maidDebug = true;
  }

  consoleLog("启动完毕!");
}

const chatCommands = new ChatCommands();

async function startMaid() {
  if (window.POIMAID_LOADED) {
    consoleLog("已经加载，不能重复加载。", 3000);
  } else {
    window.POIMAID_LOADED = true;
    consoleLog(`加载完毕! ${version}`);
    await waitFor(() => typeof window.Player?.MemberNumber === "number");
    consoleLog("启动中…");
    run();
  }
}

startMaid();
