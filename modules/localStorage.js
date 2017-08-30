export function setJSON(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function getJSON(key) {
  const jsonString = localStorage.getItem(key);
  return JSON.parse(jsonString);
}
