const hbs = require("express-hbs");

// retur all except express
module.exports = function applyHbs(app) {
	// Use `.hbs` for extensions and find partials in `views/partials`.
	app.engine("hbs", hbs.express4({}));
	app.set("view engine", "hbs");
	app.set("views", __dirname + "/views");
};
