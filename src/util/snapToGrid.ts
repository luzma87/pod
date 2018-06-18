function getSnappedValue(value, reference, gridSize) {
  let corrected = value - reference;
  let gridPosition = Math.round(corrected / gridSize);
  return reference + (gridPosition * gridSize);
}

export default function snapToGrid(x: number, y: number, refX: number, refY: number, gridSize: number) {
  const snappedX = getSnappedValue(x, refX, gridSize);
  const snappedY = getSnappedValue(y, refY, gridSize);

  return [snappedX, snappedY]
}
