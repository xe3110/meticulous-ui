const getScreenSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  deviceWidth: screen.width,
  deviceHeight: screen.height,
  pixelRatio: window.devicePixelRatio || 1,
});

export default getScreenSize;
