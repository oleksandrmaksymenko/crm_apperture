export const uuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (Math.random() * 16) | 0;
    const result = c === 'x' ? random : (random & 0x3) | 0x8;
    return result.toString(16);
  });
