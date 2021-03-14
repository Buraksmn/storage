export const keys = {
  token: "token",
  lang: "language",
};

// eslint-disable-next-line no-undef
const { REACT_APP_PREFIX, PREFIX } = process.env;

class Storage {
  getItem(key) {
    return localStorage.getItem(`${REACT_APP_PREFIX || PREFIX}-${key}`);
  }

  setItem(key, params) {
    return localStorage.setItem(`${REACT_APP_PREFIX || PREFIX}-${key}`, params);
  }

  removeItem(key) {
    return localStorage.removeItem(`${REACT_APP_PREFIX || PREFIX}-${key}`);
  }

  clear() {
    localStorage.clear();
  }
}

export default new Storage();
