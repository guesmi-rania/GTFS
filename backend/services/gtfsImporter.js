const fs = require("fs");

function loadJSON(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

module.exports = {
  loadGTFSData: () => {
    const stops = loadJSON("./data/stops.json");
    const routes = loadJSON("./data/routes.json");
    const stopTimes = loadJSON("./data/stop_times.json");

    return { stops, routes, stopTimes };
  }
};
