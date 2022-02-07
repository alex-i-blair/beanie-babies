import { client, checkError } from './client';

export async function getBeanieBabies(from = 0, to = 30, search) {
  if (!search) {
    const response = await client.from('beanie_babies').select().range(from, to);

    return checkError(response);
  } else {
    const response = await client
      .from('beanie_babies')
      .select()
      .range(from, to)
      .ilike('title', `%${search}%`);

    return checkError(response);
  }
}

export async function getSingleBeanie(id) {
  const response = await client.from('beanie_babies').select().match({ id }).single();

  return checkError(response);
}
