export default defineEventHandler(async (event): Promise<any> => {
  const { code } = event.context?.params;

  const { currencyKey } = useRuntimeConfig();

  const URL = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const { data }: { data: {} } = await $fetch(URL);

  return data;
});
