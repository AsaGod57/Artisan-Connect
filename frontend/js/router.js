class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  _loadInitialRoute() {
    const pathName = window.location.hash.slice(1) || '/';
    this.loadRoute(pathName);
  }

  loadRoute(route) {
    const matchedRoute = this.routes.find(r => r.path === route);
    if (matchedRoute) {
      document.getElementById('app').innerHTML = matchedRoute.view;
    } else {
      document.getElementById('app').innerHTML = '<h1>404 - Page Not Found</h1>';
    }
  }
}

