'use strict';
var Request = require('superagent');
var Fn = require('./fn.jsx');

window.onhashchange = function() {
	// TODO: Something more awesome?
	location.reload();
}

module.exports = function() {
	/* Login check */
	Fn.loadMsg("Checking session");
	Request.get('/action/auth/state')
	.set('Accept', 'application/json')
	.end(function(err, res) {
		if (err) {
			if (err.status === 401) {
				Fn.login();
				return;
			}
			var msg = "Error checking session status.";
			if (res.body && res.body.msg) {
				msg = res.body.msg;
			}
			Fn.error(msg);
			return;
		}

		var page = document.location.hash || "#dashboard";
		try {
			require('../../pages/' + page.substr(1) + '.jsx');
		} catch (e) {
			Fn.error(e.message);
		}
	});
};
