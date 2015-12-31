'use strict';
const Path = require('path');

function core(server, options, next){
	//Load routes
	server.route(require('./routes')(options));

	server.views({
		engines:{
			html: require('handlebars')
		},
		path: Path.join(__dirname, '../views')
	})

	return next();
}

core.attributes = {
	name: 'core'
}

module.exports = core;