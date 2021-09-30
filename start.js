// example of usage
const applyHbs = require("./index");
const app = require("express")();
applyHbs(app);
app.get("/", (req, res) => {
	res.render("index", {
		title: "My app",
		apps: {
			foo: {
				version: "1.0.0",
			},
		},
		// all pages and sub-pages
		navigations: {
			"dummy.main": "/dummy",
			"dummy.login": "dummy/login",
		},
		config: {},
		baseUrl: "/static",
		fireAppVersion: "0.0.2",
	});
});

app.listen(4242, () => {
	console.log("templates started");
});
