var ZipTax,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = ZipTax = (function() {
  function ZipTax(apiKey, zip, apiVersion, format) {
    var _ref, _ref1;
    this.apiKey = apiKey;
    this.zip = zip;
    this.apiVersion = apiVersion;
    this.format = format;
    this.lookup = __bind(this.lookup, this);
    this.format = (_ref = this.format) != null ? _ref : 'json';
    this.version = (_ref1 = this.apiVersion) != null ? _ref1 : 'v20';
    this.URI = "http://api.zip-tax.com/request/" + this.version + "?key=" + apiKey + "&format=" + this.format + "&";
  }

  ZipTax.prototype.lookup = function(zip, cb) {
    cb = cb != null ? cb : function() {};
    return request.get(this.URI + 'postalcode=' + zip, function(err, response, body) {
      var data;
      data = err ? {
        error: err
      } : JSON.parse(body);
      return cb(data);
    });
  };

  return ZipTax;

})();
