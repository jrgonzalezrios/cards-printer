'use strict';
const Hapi = require('hapi');
const dataSet = require('../data/studentData.json');
const server = new Hapi.Server();

server.connection({
	port: process.env.port || 3000
});

server.register([{
	register: require('inert')
},{
	register: require('vision')
},{
	register: require('./core'),
	options:{
		data: dataSet
	}
}], error =>{
	if(error){
		console.log('Error:', error);
	}else{
	server.start(() => {
		console.log('Hapi Server running at: ', server.info.uri);
	});
	}
});