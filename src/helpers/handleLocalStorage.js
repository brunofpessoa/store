export function saveToLocalStorage(key, value) {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
}

export function getFromLocalStorage(key) {
  const storage = localStorage.getItem(key);
  if (storage !== null) {
    return JSON.parse(storage);
  }
  return [];
}
