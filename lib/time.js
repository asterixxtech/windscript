'use strict'

const wait = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, x * 1000);
  });
}

export { wait }