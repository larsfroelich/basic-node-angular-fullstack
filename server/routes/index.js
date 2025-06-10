// main routing for all http-server-requests

module.exports = function(app, controllers, services) {

    app.get('/', function(rq, rs) { rs.render('index', { controllers: controllers, services: services }) }); // GET index
    app.get('/pages/:name', function(rq, rs) {
        rs.render('pages/' + rq.params.name + '/index');
    });

    // redirect all others to the index (HTML5 history)
    app.get('*', function(rq, rs) {
        rs.render('index', { controllers: controllers, services: services });
    });

};

