export type NeutralColourFamily = "Yellow & beige" | "Red" | "Blue" | "Green" | "Grey" | "Brown" | "White & black";

export type NeutralColour = {
  code: string;
  name: string;
  hex: string;
  family: NeutralColourFamily;
};

const familyBySeries: Record<string, NeutralColourFamily> = {
  "1": "Yellow & beige", "3": "Red", "5": "Blue", "6": "Green",
  "7": "Grey", "8": "Brown", "9": "White & black",
};

const shadeRows: Array<[string, string, string]> = [
  ["1001","Beige","#D0B084"],["1002","Sand yellow","#D2AA6D"],["1011","Brown beige","#AF804F"],["1013","Oyster white","#E3D9C6"],["1015","Light ivory","#E6D2B5"],["1019","Grey beige","#A48F7A"],["1024","Ochre yellow","#BA8F4C"],["3012","Beige red","#C6846D"],
  ["5001","Green blue","#0F4C64"],["5005","Signal blue","#005387"],["5008","Grey blue","#2B3A44"],["5009","Azure blue","#225F78"],["5010","Gentian blue","#004F7C"],["5012","Light blue","#0089B6"],["5015","Sky blue","#007CB0"],["5019","Capri blue","#005E83"],
  ["6003","Olive green","#50533C"],["6006","Grey olive","#3C392E"],["6011","Reseda green","#6C7C59"],["6012","Black green","#303D3A"],["6013","Reed green","#7D765A"],["6014","Yellow olive","#474135"],["6015","Black olive","#3D3D36"],["6034","Pastel turquoise","#7AACAC"],
  ["7000","Squirrel grey","#7A888E"],["7001","Silver grey","#8C969D"],["7002","Olive grey","#817863"],["7003","Moss grey","#7A7669"],["7004","Signal grey","#9B9B9B"],["7005","Mouse grey","#6C6E6B"],["7006","Beige grey","#766A5E"],["7008","Khaki grey","#745E3D"],["7009","Green grey","#5D6058"],["7010","Tarpaulin grey","#585C56"],["7011","Iron grey","#52595D"],["7012","Basalt grey","#575D5E"],["7013","Brown grey","#575044"],["7016","Anthracite grey","#383E42"],["7021","Black grey","#2F3234"],["7022","Umbra grey","#4C4A44"],["7023","Concrete grey","#808076"],["7024","Graphite grey","#45494E"],["7030","Stone grey","#928E85"],["7031","Blue grey","#5B686D"],["7033","Cement grey","#7F8274"],["7036","Platinum grey","#979392"],["7037","Dusty grey","#7A7B7A"],["7038","Agate grey","#B0B0A9"],["7039","Quartz grey","#6B665E"],["7042","Traffic grey A","#8E9291"],["7043","Traffic grey B","#4F5250"],["7044","Silk grey","#B7B3A8"],["7045","Telegrey 1","#8D9295"],["7046","Telegrey 2","#7F868A"],
  ["8000","Green brown","#89693E"],["8002","Signal brown","#794D3E"],["8003","Clay brown","#7E4B26"],["8004","Copper brown","#8D4931"],["8011","Nut brown","#5A3826"],["8016","Mahogany brown","#4C2B20"],["8017","Chocolate brown","#442F29"],["8019","Grey brown","#3D3635"],["8024","Beige brown","#795038"],["8025","Pale brown","#755847"],
  ["5004","Black blue","#191E28"],["5011","Steel blue","#1A2B3C"],["5017","Traffic blue","#005B8C"],["5020","Ocean blue","#00414B"],["6008","Brown green","#37342A"],["6009","Fir green","#27352A"],["6021","Pale green","#8A9977"],["6022","Olive drab","#3A3327"],["7026","Granite grey","#374345"],["8007","Fawn brown","#70452A"],["8015","Chestnut brown","#5E2F26"],["9005","Jet black","#0E0E10"],["8008","Olive brown","#724A25"],["8001","Ochre brown","#9D622B"],["8012","Red brown","#66332B"],["9017","Traffic black","#2A292A"],["6000","Patina green","#3C7460"],["6033","Mint turquoise","#46877F"],["8023","Orange brown","#A45729"],["6007","Bottle green","#2C3222"],["8014","Sepia brown","#4A3526"],["9002","Grey white","#D7D5CB"],["9003","Signal white","#ECECE7"],["9006","White aluminium","#A1A1A0"],["9010","Pure white","#F1ECE1"],["5024","Pastel blue","#6093AC"],["7015","Slate grey","#4F5358"],["9018","Papyrus white","#C8CBC4"],["7035","Light grey","#C5C7C4"],
];

export const neutral3010Colours: NeutralColour[] = shadeRows.map(([code, name, hex]) => ({
  code, name, hex, family: familyBySeries[code[0]],
}));

export const neutralColourFamilies: Array<"All" | NeutralColourFamily> = [
  "All", "Yellow & beige", "Red", "Blue", "Green", "Grey", "Brown", "White & black",
];
