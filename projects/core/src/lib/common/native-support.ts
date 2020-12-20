export const callNative = (el: Element, method: string, arg = null): void => {
  /* istanbul ignore next */ // if this code runs in browser this is allways true!
  if (el[method]) {
    el[method](arg);
  }
};
