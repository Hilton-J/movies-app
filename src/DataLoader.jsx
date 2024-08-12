export const DataLoader = async ({ params, path }) => {
  const res = await fetch(`/api/${path}/${params.id}`);
  const data = await res.json();
  return data;
};
