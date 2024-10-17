const routes = [
  { path: '/', view: '<h1>Welcome to Artisan Connect</h1><p>Your one-stop hub for artisan services.</p>' },
  { path: '/artisans', view: '<h1>Our Artisans</h1><p>Find skilled artisans for your needs.</p>' },
  { path: '/book', view: '<h1>Book a Service</h1><p>Book a service from our listed artisans.</p>' }
];

const router = new Router(routes);

window.addEventListener('hashchange', () => {
  const path = window.location.hash.slice(1);
  router.loadRoute(path);
});

