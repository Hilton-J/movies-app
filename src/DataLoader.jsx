export const dataLoader = async () => {
  const res = await fetch(`/api/`);
  const data = await res.json();
  return data;
};