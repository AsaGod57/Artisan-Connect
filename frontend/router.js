const routes = {
  '/': 'Welcome to Artisan Connect!',
  '/artisans': 'Browse available artisans.',
  '/profile': 'View and edit your profile.',
  '/booking': 'Book a service with an artisan.'
};

function navigateTo(route) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = routes[route];
  window.history.pushState({}, route, window.location.origin + route);
}

window.onpopstate = () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = routes[window.location.pathname];
};

document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = routes[window.location.pathname];
});


