
/*
 * GET home page.
 */

var company = 'Pitch Refiner', 
    today = new Date(),
    tm = company + ' ' + today.getFullYear();

exports.index = function(req, res){
  res.render('index', { title: company, tm: tm })
};

exports.createOrRate = function(req, res){
  res.render('create_or_rate', { title: company, tm: tm })
};

exports.create = function(req, res){
  res.render('create', { title: company, tm: tm })
};

exports.pitchConfig = function(req, res){
  res.render('create', { title: company, tm: tm })
};
