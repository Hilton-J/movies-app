//ADD NEW JOB
export const addItem = async (newItem, path) => {
  const url = `/api/${path}`
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  return;
};


//DELETE item: movie or series
export const deleteItem = async (id, path) => {
  await fetch(`/api/${path}/${id}`, {
    method: 'DELETE'
  });
  return;
};

//UPDATE item: movie or series
export const updateItem = async (item) => {
  await fetch(`/api/${item.type}/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  return;
};