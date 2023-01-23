import axios from "axios";
import cheerio from "cheerio";

// TODO: optimize 

// Link to country table
const url = 'https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D1%80%D0%B0%D1%97%D0%BD_%D1%81%D0%B2%D1%96%D1%82%D1%83'

// Init axios
const AxiosInstance = axios.create();


interface countryData {
    name: string,
    url: string,
    capital: string,
    area: number,
    population: number,
    density: number,
    flag: string,
    emblem: string,
    iso_3: string,
    iso_2: string,
    domain: string,
    name_on_english: string,
    original_name: string,
}


export default async function scrap() {

// Array of counties json
const countries: countryData[] = []

try {
await AxiosInstance.get(url).then(response => {

    // Get Html
    const html = response.data

    // Parse by Cheerio
    const $ = cheerio.load(html)

    // Get All Lines
    const CountryTableRows = $('#mw-content-text > div.mw-parser-output > table:nth-child(14) > tbody > tr')

    // Parsing line by line
    CountryTableRows.each((index,element) => {
    
    // Get name from line and etc
    const name: string = $(element).find("td:nth-child(2) > a").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();

    const url: string = "https://uk.wikipedia.org/"+$(element).find("td:nth-child(2) > a").attr('href')!;

    const capital: string = $(element).find("td:nth-child(3)").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();
    const area: number = parseInt($(element).find("td:nth-child(4) > span").text().replace(/\u00a0/g, ""));

    const population: number = parseInt($(element).find("td:nth-child(5) > span").text().replace(/\u00a0/g, ""));

    const density: number = parseFloat($(element).find("td:nth-child(6) > span").text().replace(/\u00a0/g, ""));

    const flag: string = $(element).find("td:nth-child(7) > a > img").attr('src')!;

    const emblem: string = $(element).find("td:nth-child(8) > a > img").attr('src')!;

    const iso_3: string = $(element).find("td:nth-child(9)").text().replace(/(\r\n|\n|\r)/gm, "")

    .trim();
    const iso_2: string = $(element).find("td:nth-child(10)").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();
    const domain: string = $(element).find("td:nth-child(11) ").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();
    const name_on_english: string = $(element).find("td:nth-child(12)").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();
    const original_name: string = $(element).find("td:nth-child(13) > i > span").text().replace(/(\r\n|\n|\r)/gm, "")
    .trim();

    // Push country json to array 
    countries.push(
        {
            name,
            url,
            capital,
            area,
            population,
            density,
            flag,
            emblem,
            iso_3,
            iso_2,
            domain,
            name_on_english,
            original_name,
        }
    )
    }
    );
    }).catch(console.error)
    console.log(countries)
    return countries.filter(country => country.name);
} catch(err) {
    // Handle error
    console.error(err)
    throw createError({
        statusCode: 500 ,
        statusMessage: 'Server error'
    })
}
}