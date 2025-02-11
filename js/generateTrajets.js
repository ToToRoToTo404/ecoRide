document.addEventListener('DOMContentLoaded', () => {
    const trajetsContainer = document.getElementById('trajets-container');

    function getRandomDate() {
        const start = new Date();
        const end = new Date(start.getFullYear(), start.getMonth() + 1, start.getDate());
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    function generateRandomTrajet() {
        const addresses = [
            "123 Rue de Paris", "456 Avenue de Lyon", "789 Boulevard de Marseille",
            "101 Rue de Bordeaux", "202 Avenue de Nice", "303 Boulevard de Toulouse"
        ];
        const departure = addresses[Math.floor(Math.random() * addresses.length)];
        const arrival = addresses[Math.floor(Math.random() * addresses.length)];
        const date = formatDate(getRandomDate());

        return { departure, arrival, date };
    }

    function displayTrajets() {
        for (let i = 0; i < 5; i++) {
            const trajet = generateRandomTrajet();
            const trajetElement = document.createElement('div');
            trajetElement.className = 'card mb-3';
            trajetElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Trajet ${i + 1}</h5>
                    <p class="card-text">Départ : ${trajet.departure}</p>
                    <p class="card-text">Arrivée : ${trajet.arrival}</p>
                    <p class="card-text">Date : ${trajet.date}</p>
                </div>
            `;
            trajetsContainer.appendChild(trajetElement);
        }
    }

    displayTrajets();
});