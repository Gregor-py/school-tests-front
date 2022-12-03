export const getStoreLocal = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  } else {
    return null;
  }
};
