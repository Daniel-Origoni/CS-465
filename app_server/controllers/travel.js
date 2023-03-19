/* GET home page */
const travel = (req, res) => {
    res.render('travel', {tilte: 'Travlr Getaways'});
};
module.exports = {
    travel
};