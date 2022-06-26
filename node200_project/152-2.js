const crawler = require('./152');
const cheerio = require('cheerio');
const fs = require('fs');

const parse = (decodedResult) => {//디코드 결과가 콜백으로 넘어옴
    const $ = cheerio.load(decodedResult);
    //console.log('-----------------', decodedResult ,'***************')
    const titles = $('div .BNeawe');
    console.log(titles);
    titles.each((index, element)=> {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./node200_project/titles.txt', `${title}\n`, (err)=> {
            console.log(err);
        })
    })
    // for (let i = 0; i < titles.length; i+=1) {
    //     const title = $(titles[i]).text();
    //     console.log(title);        
    // }
};
crawler.crawl(parse)({q: '서울대입구역 맛집'});