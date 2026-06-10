
const Images = {
  logo: require('../assets/Images/logo.png'),
  background: require('../assets/Images/background.png'),
  tree: require('../assets/Images/tree.png'),
  globe: require('../assets/Images/globe.png'),
  shield: require('../assets/Images/shield.png'),
  verified: require('../assets/Images/verified.png'),
  location: require('../assets/Images/location.png'),
  leaf: require('../assets/Images/leaf.png'),


};

export type ImageKey = keyof typeof Images;
export default Images;