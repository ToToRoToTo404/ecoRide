import Route from "./Route.js";

// Définition des routes de l'application
export const allRoutes = [
    // Route pour la page d'accueil
    new Route("/", "Accueil", "/pages/home.html"),
    
    // Route pour la page de covoiturage
    new Route("/trouverTrajet", "Trouver un trajet", "/pages/trouverTrajet.html"),
    
    // Route pour la page de connexion
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    
    // Route pour la page d'inscription
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    
    // Route pour la page de compte utilisateur
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    
    // Route pour la page de création de trajet
    new Route("/creerTrajet", "Créer un trajet", "/pages/creerTrajet.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ecoRide";