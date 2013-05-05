
/*
 * GET home page.
 */

var company = 'Pitch Refiner', 
    today = new Date(),
    tm = company + ' ' + today.getFullYear()
    options = { title: company, tm: tm};

exports.index = function(req, res){
  options.page_id = 'home';
  res.render('index', options);
};

exports.createOrRate = function(req, res){
  options.page_id = 'create_or_rate';
  res.render('create_or_rate', options);
};

exports.create = function(req, res){
  options.page_id = 'create';
  res.render('create', options);
};

exports.pitchConfig = function(req, res){
  options.page_id = 'config_pitch';
  res.render('pitch_config', options);
};

exports.configAudience = function(req, res){
  options.page_id = 'config_audience';
  res.render('config_audience', options);
};

exports.summary = function(req, res){
  options.page_id = 'summary';
  res.render('summary', options);
};
