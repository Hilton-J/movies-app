export const DataLoader = async () => {
  const res = await fetch('/api/table');
  const data = await res.json();
  return data;
};