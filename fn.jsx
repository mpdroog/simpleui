var React = require('react');

/* Utlity functions */
module.exports = {
	error: function(reason) {
		document.body.className = "error";
		React.render(
	    	<div className="more-features-container section-container"><div className="container">
      		<div className="row"><div className="col-sm-12 more-features section-description wow fadeIn">
      			<h2><span className="typcn typcn-warning"></span> Sorry, something went wrong!</h2>
      			<div className="divider-1 wow fadeInUp"><span></span></div>

      			<div className="row">
      				<h3>{reason}</h3>
      				<p>
      					Please try again or contact us on&nbsp;
      					<a href="mailto:support@usenet.farm?subject=JSerror">support@usenet.farm</a>
      				</p>
      			</div>
  			</div></div>
  			</div><script/></div>,
			document.body
		);
	},

	login: function() {
		document.body.className = "error";
		React.render(
	    	<div className="more-features-container section-container"><div className="container">
      		<div className="row"><div className="col-sm-3"></div><div className="col-sm-6 more-features section-description wow fadeIn">
      			<h2><span className="typcn typcn-lock-closed"></span> Please login.</h2>
      			<div className="divider-1 wow fadeInUp"><span></span></div>

      			<div className="row">
      				<p>You are not logged in. Please enter your email so we can send you a login email.</p>
					<form role="form" action="/action/auth/email" method="post">
			        	<div className="form-group">
        					<label className="sr-only" htmlFor="contact-email" autofocus="autofocus">Email</label>
							<input className="contact-email form-control" id="contact-email" type="text" name="email" placeholder="Email..."/>
							<p><br/></p>
      						<button className="btn" type="submit">E-mail login url</button>
      						&nbsp;&nbsp;<a href="/#trial">Create account</a>
      					</div>
      				</form>
      			</div>
  			</div></div>
  			</div><script/></div>,
			document.body
		);
		document.getElementById("contact-email").focus();
	},

	loadMsg: function(msg) {
		document.getElementsByClassName("loader-text")[0].innerHTML = msg;
	}
};
