
/*
 * GET home page.
 */

exports.index = function(req, res){
  var tm = new Date(),
      company = 'Pitch Refiner';
  res.render('index', { title: company, tm: company + ' ' + tm.getFullYear() })
};
