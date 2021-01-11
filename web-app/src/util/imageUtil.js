// Converts an ArrayBuffer to image data to be used in a <img />
export const getSvgImageFromArrayBuffer = (bufferData) => {
  const data = `data:image/svg+xml;base64,${new Buffer(bufferData).toString(
    "base64"
  )}`;

  return data;
};
