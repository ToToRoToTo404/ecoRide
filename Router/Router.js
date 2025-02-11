import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "/pages/404.html");

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
  return allRoutes.find(route => route.url === url) || route404;
};

// Fonction pour charger le contenu de la page
const LoadContentPage = async () => {
  const path = window.location.pathname;
  const actualRoute = getRouteByUrl(path);
  const html = await fetch(actualRoute.pathHtml).then(response => response.text());
  document.getElementById("main-page").innerHTML = html;

  if (actualRoute.pathJS) {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", actualRoute.pathJS);
    document.body.appendChild(scriptTag);
  }

  document.title = `${actualRoute.title} - ${websiteName}`;
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;

// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;

// Chargement du contenu de la page au chargement initial
document.addEventListener('DOMContentLoaded', () => {
  LoadContentPage();
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', routeEvent);
  });
});