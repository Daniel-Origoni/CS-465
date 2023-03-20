var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET home page */
const travel = (req, res) => {
    res.render('travel', {tilte: 'Travlr Getaways', trips});
};
module.exports = {
    travel
};