/* GET home page */
const about = (req, res) => {
    res.render('about', {tilte: 'Travlr Getaways'});
};
module.exports = {
    about
};