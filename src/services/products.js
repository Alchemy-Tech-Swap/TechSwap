import { client, checkError } from './client';

export async function fetchProducts() {
  const resp = await client.from('products').select('*');
  return checkError(resp);
}

export async function createProduct({
  user_id,
  file,
  title,
  description,
  price,
  categories,
  condition,
}) {
  await client.storage.from('product-image').upload(`public/${file.name}`, file, { upsert: true });

  const { publicURL } = await client.storage
    .from('product-image')
    .getPublicUrl(`public/${file.name}`);

  const resp = await client.from('products').insert({
    user_id: user_id,
    title: title,
    description: description,
    price: price,
    category: categories,
    condition: condition,
    image: publicURL,
  });
  return checkError(resp);
}

export async function getProductById(id) {
  const resp = await client.from('products').select('*').match({ id }).single();
  return checkError(resp);
}

export async function getProductUserId(id) {
  const resp = await client.from('products').select('id').match({ user_id: id }).single();
  return checkError(resp);
}

export async function updateProductById(
  id,
  { title, description, price, file, category, condition }
) {
  let resp;

  if (file) {
    await client.storage
      .from('product-image')
      .upload(`public/${file.name}`, file, { upsert: true });

    const { publicURL } = await client.storage
      .from('product-image')
      .getPublicUrl(`public/${file.name}`);
    resp = await client
      .from('products')
      .update({ title, description, price, image: publicURL, category, condition })
      .match({ id });
  } else {
    resp = await client
      .from('products')
      .update({ title, description, price, category, condition })
      .match({ id });
  }

  return checkError(resp);
}

export async function deleteProduct(id) {
  const resp = await client.from('products').delete().match({ id });
  return checkError(resp);
}
