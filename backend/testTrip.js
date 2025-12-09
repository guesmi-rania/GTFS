const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function generateCSV() {
  try {
    // Récupérer tous les stops depuis le backend
    const stopsResponse = await axios.get('http://localhost:3000/stops');
    const stops = stopsResponse.data;

    const rows = [['From', 'To', 'Distance (km)', 'Fare']]; // Entêtes CSV

    // Générer toutes les paires possibles
    for (let i = 0; i < stops.length; i++) {
      for (let j = i + 1; j < stops.length; j++) {
        const from = stops[i];
        const to = stops[j];

        try {
          const response = await axios.get('http://localhost:3000/trip', {
            params: {
              fromStopId: from.id,
              toStopId: to.id
            }
          });

          const { trip, fare } = response.data;
          rows.push([trip.from, trip.to, trip.distance, fare]);

        } catch (error) {
          console.error(`Erreur pour ${from.name} -> ${to.name}:`, error.response?.data || error.message);
        }
      }
    }

    // Générer le contenu CSV
    const csvContent = rows.map(r => r.join(',')).join('\n');
    const filePath = path.join(__dirname, 'trips.csv');
    fs.writeFileSync(filePath, csvContent, 'utf8');

    console.log(`CSV généré avec succès : ${filePath}`);

  } catch (err) {
    console.error('Impossible de récupérer les stops :', err.message);
  }
}

generateCSV();
