'use strict';
var Request = require('superagent');
var Fn = require('../../Fn.jsx');
var Lang = require('../../lang/lang.js');

window.onhashchange = function() {
	// TODO: Something more awesome?
	location.reload();
}

module.exports = function() {
	/* Login check */
	Fn.loadMsg(Lang("loader.sesscheck"));
	Request.get('/action/auth/state')
	.set('Accept', 'application/json')
	.end(function(err, res) {
		if (err) {
			if (err.status === 401) {
				Fn.login();
				return;
			}
			var msg = Lang("loader.error");
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
			Fn.error(typeof e === "object" ? e.message : e);
		}
	});
};
