const makeColor = (color, title) => {
  return { color, title };
};

const materialPalette = [
  makeColor('#F44336', 'Red'),
  makeColor('#E91E63', 'Pink'),
  makeColor('#9C27B0', 'Purple'),
  makeColor('#673AB7', 'Deep Purple'),
  makeColor('#3F51B5', 'Indigo'),
  makeColor('#2196F3', 'Blue'),
  makeColor('#03A9F4', 'Light Blue'),
  makeColor('#00BCD4', 'Cyan'),
  makeColor('#009688', 'Teal'),
  makeColor('#4CAF50', 'Green'),
  makeColor('#8BC34A', 'Light Green'),
  makeColor('#CDDC39', 'Lime'),
  makeColor('#FFEB3B', 'Yellow'),
  makeColor('#FFC107', 'Amber'),
  makeColor('#FF9800', 'Orange'),
  makeColor('#FF5722', 'Deep Orange'),
  makeColor('#795548', 'Brown'),
  makeColor('#9E9E9E', 'Gray'),
  makeColor('#607D8B', 'Blue Gray'),
  makeColor('#000000', 'Black'),
  makeColor('#FFFFFF', 'White')
];

const quiltSizes = {
  baby: { name: 'Baby', size: { w: 36, h: 54 } },
  lap: { name: 'Lap', size: { w: 54, h: 72 } },
  twin: { name: 'Twin', size: { w: 54, h: 90 } },
  double: { name: 'Double', size: { w: 72, h: 90 } },
  queen: { name: 'Queen', size: { w: 90, h: 108 } },
  king: { name: 'King', size: { w: 108, h: 108 } }
};

const constants = {
  inchMultiplier: 8,
  minBlockSize: 2.5,
  baseImagesPath: '../assets/images/blocks',
  materialPalette,
  quiltSizes
};

export default constants;
