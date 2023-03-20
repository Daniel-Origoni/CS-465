/* GET home page */
const news = (req, res) => {
    res.render('news', {tilte: 'Travlr Getaways'});
};
module.exports = {
    news
};