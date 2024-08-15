export const dataLoader = async ({ params }) => {
  const url = `/api/${params.type}/${params.id}`
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

