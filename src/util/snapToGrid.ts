export default function snapToGrid(x: number, y: number, refX: number, refY: number, gridSize: number) {

  let correctedX = x - refX;
  let gridPositionX = Math.round(correctedX / gridSize);
  const snappedX = refX + (gridPositionX * gridSize);

  let correctedY = y - refY;
  let gridPositionY = Math.round(correctedY / gridSize);
  const snappedY = refY + (gridPositionY * gridSize);


  // const snappedX = Math.round(x / 32) * 32
  // const snappedY = Math.round(y / 32) * 32
  return [snappedX, snappedY]
}
