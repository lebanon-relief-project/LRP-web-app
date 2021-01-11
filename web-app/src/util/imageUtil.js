// Converts an ArrayBuffer to image data to be used in a <img />
export const getSvgImageFromArrayBuffer = (bufferData) => {
  return URL.createObjectURL(
    new Blob([new Buffer(bufferData)], { type: "image/svg+xml" })
  );
};
