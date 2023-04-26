// @ts-strict-ignore
// import { Logger } from "utils/logger";
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
export const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
export const loaded = [];

export const scrollToId = (id) =>
  document &&
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

export const getStringFromLocalStorage = (key) => {
  if (process && process.browser && document) {
    if (
      window &&
      window.localStorage &&
      {}.hasOwnProperty.call(window.localStorage, key)
    ) {
      const property = window.localStorage.getItem(key);
      if (property) return property;
    }
  }
  return undefined;
};

export const getFromLocalStorage = (key) => {
  if (process && process.browser && document) {
    if (
      window &&
      window.localStorage &&
      {}.hasOwnProperty.call(window.localStorage, key)
    ) {
      const property = window.localStorage.getItem(key);
      if (property) return JSON.parse(property);
    }
  }

  return undefined;
};

export const setLocalStorageItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Logger.error(error);
  }
};

export const removeLocalStorageItem = (key) => {
  if ({}.hasOwnProperty.call(window.localStorage, key)) {
    window.localStorage.removeItem(key);
  }
};

export const preventDefault = (e) => {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
};

export const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

export const disableScroll = () => {
  if (process && process.browser && document) {
    document.getElementsByTagName("body")[0].style["overflow"] = "hidden";
  }
};

export const enableScroll = () => {
  if (process && process.browser && document) {
    document.getElementsByTagName("body")[0].style["overflow"] = "auto";
  }
};

export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {})
      .catch((err) => {
        // Logger.error(err);
      });
  }
};
