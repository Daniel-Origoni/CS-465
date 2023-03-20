var fs = require('fs');

var roomOptions = JSON.parse(fs.readFileSync('./data/roomOptions.json', 'utf8'));

/* GET home page */
const rooms = (req, res) => {
    res.render('rooms', {tilte: 'Travlr Getaways', roomOptions});
};
module.exports = {
    rooms
};