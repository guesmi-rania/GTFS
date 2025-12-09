function calculateFare(distanceKm) {
    const baseFare = 1.0; // tarif de base
    const perKmRate = 0.5; // tarif par km
    return (baseFare + distanceKm * perKmRate).toFixed(2);
}

module.exports = { calculateFare };
