import faker from "faker";
import filters from "./filters";

const data = [];
const n = 16; // number of test articles to produce

for(let i = 0; i < n; ++i) { 
    data.push({
        title: faker.lorem.word(),
        body: faker.lorem.paragraphs(),
        date: faker.date.past(),
        image: faker.image.image(),
        type: filters[parseInt(getRandomNumberOnInterval(0, filters.length))]
    });
};

function getRandomNumberOnInterval (min, max) {
    return Math.random() * (max - min) + min; 
};

export default data;