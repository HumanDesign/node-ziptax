request = require 'request'

module.exports = class ZipTax

	constructor : (@apiKey, @apiVersion, @format) ->
		@format = @format ? 'json'
		@version = @apiVersion ? 'v20'
		@URI = "http://api.zip-tax.com/request/#{@version}?key=#{apiKey}&format=#{@format}&"

	lookup : (zip, cb) =>
		cb = cb ? () ->
		request.get @URI + 'postalcode='+zip, (err, response, body) ->
			data = if err then {error : err} else JSON.parse(body)
			cb(err, data)
