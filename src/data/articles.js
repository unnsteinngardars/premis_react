import faker from "faker";

const data = [];

for(let i = 0; i < 30; ++i) {
    data.push({
        title: faker.lorem.word(),
        body: faker.lorem.paragraphs(),
        date: faker.date.past()
    });
};

export default data;