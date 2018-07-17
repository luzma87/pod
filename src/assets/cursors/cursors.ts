const getCursor = (file) => {
  return `url(../assets/cursors/${file}.cur),copy`;
};

const cursors = {
  bucket: getCursor('bucket'),
  paint: getCursor('paint'),
  paintIt: getCursor('paintIt'),
  spray: getCursor('spray'),
  flip: getCursor('flip'),
  nimbus: getCursor('nimbus'),
  wand: getCursor('wand'),
  wand2: getCursor('wand2'),
  wand3: getCursor('wand3'),
  wand4: getCursor('wand4'),
  wand5: getCursor('wand5'),
  wand6: getCursor('wand6'),
  wand7: getCursor('wand7'),
  wand8: getCursor('wand8'),
  wand9: getCursor('wand9'),
  wand10: getCursor('wand10'),
  wand11: getCursor('wand11'),
  wands: [
    getCursor('wand'),
    getCursor('wand2'),
    getCursor('wand3'),
    getCursor('wand4'),
    getCursor('wand5'),
    getCursor('wand6'),
    getCursor('wand7'),
    getCursor('wand8'),
    getCursor('wand9'),
    getCursor('wand10'),
    getCursor('wand11')
  ]
};

export default cursors;
