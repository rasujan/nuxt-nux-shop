export default defineEventHandler(async (event): Promise<any> => {
  // Handling params
  const { user = "Dear" } = getQuery(event);

  // Handling post requests
  // const { data } = await readBody(event);

  // handling api class with keys
  const { data: currency }: { data: {} } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=jfwJn6gMf565HI6gUdHFBH62ksfQOKFDRIy5tESc"
  );

  return {
    message: `Hello ${user}, This is a shopping site built on nuxt js. 
    It provide you the best deals and something its even free,
    but the only issue is would won't get your products because its a fake store.`,

    currency: currency,
  };
});
