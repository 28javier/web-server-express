// del hbs se inporta
const hbs = require('hbs');



//helper
hbs.registerHelper('getAge', () => {
    return new Date().getFullYear();
});