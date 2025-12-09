const express = require('express');
const gtfsImporter = require('./services/gtfsImporter');
const tripPlanner = require('./services/tripPlanner');
const fareCalculator = require('./services/fareCalculator');

const app = express();
app.use(express.json());

const PORT = 3000;

// Charger les données GTFS
const data = gtfsImporter.loadGTFSData('./data');  // <- chemin corrigé

// Route racine
app.get('/', (req, res) => {
    res.send('Bienvenue sur GTFS Fare Engine🎉 ! Utilisez /trip pour calculer un tarif.');
});

// Endpoint pour planifier un trajet
app.get('/trip', (req, res) => {
    const { fromStopId, toStopId } = req.query;
    if (!fromStopId || !toStopId) {
        return res.status(400).json({ error: 'fromStopId et toStopId requis' });
    }

    const trip = tripPlanner.planTrip(data, fromStopId, toStopId);
    if (!trip) {
        return res.status(404).json({ error: 'Trajet introuvable' });
    }

    const fare = fareCalculator.calculateFare(trip.distance);

    res.json({
        trip,
        fare
    });
});
app.get('/stops', (req, res) => {
    res.json(data.stops);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
