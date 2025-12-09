const axios = require('axios');

axios.get('http://localhost:3000/trip', {
  params: {
    fromStopId: 'STOP1',
    toStopId: 'STOP2'
  }
})
.then(response => {
  console.log('Réponse du serveur :', response.data);
})
.catch(error => {
  console.error('Erreur lors de la requête :', error.response ? error.response.data : error.message);
});
