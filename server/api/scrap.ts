import scrap from "../utils/scrapper";


export default defineEventHandler(async (event) => {
    switch (event.req.method) {
      case 'GET':
        return await scrap();
      default:
        throw createError({
            statusCode: 500 ,
            statusMessage: 'only GET'
        })
    }
  });