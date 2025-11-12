import randomValue from './randomValue';

const randomInt = (min, max) => {
  return Math.floor(randomValue(min, max));
};

export default randomInt;
