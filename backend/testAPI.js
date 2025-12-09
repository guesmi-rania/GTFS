const axios = require('axios');

async function testTrip() {
    try {
        const response = await axios.get('http://localhost:3000/trip?fromStopId=S1&toStopId=S3');
        console.log('Réponse API :', response.data);
    } catch (error) {
        console.error('Erreur API :', error.message);
    }
}

testTrip();
