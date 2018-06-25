const getCursor = (file) => {
  return `url(../assets/cursors/${file}.cur),copy`;
};

const cursors = {
  bucket: getCursor('bucket'),
  paint: getCursor('paint'),
  spray: getCursor('spray')
};

export default cursors;
