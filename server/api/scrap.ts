import scrap from "../utils/scrapper";


export default defineEventHandler(async (event) => {
    switch (event.req.method) {
      // This project have only get request so 
      // if we have a post request we should throw error
      case 'GET':
        return await scrap();
      default:
        // Handle error
        throw createError({
            statusCode: 500 ,
            statusMessage: 'only GET'
        })
    }
  });