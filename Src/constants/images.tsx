const Images = {
  background: require('../assets/Images/background.png'),
  checkMark: require('../assets/Images/check-mark.png'),
  christmasTree: require('../assets/Images/christmas-tree.png'),
  global: require('../assets/Images/globe.png'),
  gps: require('../assets/Images/gps.png'),
  internet: require('../assets/Images/internet.png'),
  leaf: require('../assets/Images/leaf.png'),
  location: require('../assets/Images/location.png'),
  logo: require('../assets/Images/logo.png'),
  security: require('../assets/Images/security.png'),
  shield: require('../assets/Images/shield.png'),
  tree: require('../assets/Images/tree.png'),
  verified: require('../assets/Images/verified.png'),
};

export type ImageKey = keyof typeof Images;
export default Images;