const distanceUtil = require('../utils/distance');

function planTrip(data, fromStopId, toStopId) {
    const fromStop = data.stops.find(s => s.id === fromStopId);
    const toStop = data.stops.find(s => s.id === toStopId);

    if (!fromStop || !toStop) return null;

    const dist = distanceUtil.calculateDistance(
        fromStop.lat, fromStop.lon,
        toStop.lat, toStop.lon
    );

    return {
        from: fromStop.name,
        to: toStop.name,
        distance: dist.toFixed(2) // km
    };
}

module.exports = { planTrip };
