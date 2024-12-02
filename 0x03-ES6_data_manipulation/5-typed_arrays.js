function createInt8TypedArray(length, position, value) {
  // Check if position is within the range of the ArrayBuffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const view = new DataView(new ArrayBuffer(length));

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  // Return the modified ArrayBuffer
  return view;
}

export default createInt8TypedArray;
