import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/creerTrajet", "Créer un trajet", "/pages/creerTrajet.html"),
];  

    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ecoRide";