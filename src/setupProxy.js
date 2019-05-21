const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy(
            [
                "/api/events",
                "/api/auth/google",
                "/api/auth/google/callback",
                "/api/auth/logout",
                "/api/auth/current_user",
                "/api/stripe",
                "/api/event/create"]
            , { target: "http://localhost:3939" }
        )
    );
}