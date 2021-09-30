// example of usage
const applyHbs = require("./index");
const app = require("express")();
applyHbs(app);
app.get("/", (req, res) => {
	res.render("index", {
		title: "Tri tolstiaka",
		apps: JSON.stringify({
			foo: {
				version: "1.0.0",
			},
		}),
		// all pages and sub-pages
		navigations: JSON.stringify({
			"dummy.main": "/dummy",
			"dummy.login": "dummy/login",
		}),
		config: JSON.stringify({}),
		baseUrl: "/static",
		fireAppVersion: "0.0.2",
	});
});

app.listen(4242, () => {
	console.log("templates started");
});
