var fs = require('fs');

var foodOptions = JSON.parse(fs.readFileSync('./data/foodOptions.json', 'utf8'));

/* GET home page */
const meals = (req, res) => {
    res.render('meals', {tilte: 'Travlr Getaways', foodOptions});
};
module.exports = {
    meals
};