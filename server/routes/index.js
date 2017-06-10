// main routing for all http-server-requests

module.exports = function(app) {

    global.controllers = global.walkDirectory(global.ROOT_DIR + '/public/', 'js/controllers');
    global.services = global.walkDirectory(global.ROOT_DIR + '/public/', 'js/services/');
    app.get('/', function(rq, rs) { rs.render('index', { controllers: global.controllers, services: global.services }) }); // GET index
    app.get('/pages/:name', function(rq, rs) { rs.render('pages/' + rq.params.name + '/index') });

    // redirect all others to the index (HTML5 history)
    app.get('*', function(rq, rs) { rs.render('index') });

};
