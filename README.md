# Node.js Trip API

**Une API simple pour calculer les trajets et tarifs entre stations**

Cette application **Node.js** avec **Express.js** permet de générer automatiquement tous les itinéraires possibles entre vos arrêts et d’obtenir pour chacun la **distance** et le **tarif**. Elle exporte ensuite les résultats dans un fichier **CSV** prêt à l’usage.

# Fonctionnalités principales

- **Récupération des arrêts** via `/stops`.
- **Génération de toutes les paires de trajets possibles** (`from -> to`).
- **Calcul de la distance et du tarif** pour chaque trajet via `/trip`.
- **Export des résultats** dans un fichier `trips.csv`.

# Idéal pour

- **Applications de transport et logistique**
- **Analyse et tarification de réseau**
- **Projets Node.js prêts à déployer sur le cloud** (Google Cloud Run, etc.)

# Technologies

- **Node.js**
- **Express.js**
- **CSV**
