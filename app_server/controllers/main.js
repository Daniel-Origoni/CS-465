/* GET home page */
const index = (req, res) => {
    res.render('index', {tilte: 'Travlr Getaways'});
};
module.exports = {
    index
};