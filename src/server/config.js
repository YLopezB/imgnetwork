export const config = (app) => {

    app.set('port', process.env.PORT || 3000);

    return app;
}