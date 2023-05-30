const pgp = require('pg-promise')();
// const db = pgp({
//     user:'postgres',
//     password:"admin123",
//     host:'localhost',
//     port: 5432,
//     database:'postgres'
// });
// const db = pgp({
//     user:'postgres',
//     password:"bH3llmqXUMhOT0UrZCkn",
//     host:'containers-us-west-185.railway.app',
//     port: 5511,
//     database:'railway'
// });
const db = pgp({
    user:'default',
    password:"jmcfS1aMl9gi",
    host:'ep-gentle-dawn-477679-pooler.us-east-1.postgres.vercel-storage.com',
    port: 5432,
    database:'verceldb',
    ssl: {
        rejectUnauthorized: false
    }
});


module.exports= db;