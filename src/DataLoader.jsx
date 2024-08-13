export const dataLoader = async ({ params }) => {
  const url = `/api/${params.type}/${params.id}`
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();
  return data;
};
