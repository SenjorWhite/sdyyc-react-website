const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy(
            "/api/events"
            , { target: "http://localhost:3939" })
    );
    app.use(
        proxy(
            "/api/auth/google"
            , { target: "http://localhost:3939" })
    );
}