const map = L.map("map", {
  zoomControl: false
}).setView([38.9072, -77.0369], 12);

L.control.zoom({
  position: "topright"
}).addTo(map);

L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri"
  }
).addTo(map);

L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution: "Labels &copy; Esri"
  }
).addTo(map);

function severityColor(severity) {
  if (severity === "Critical") return "#e31a1c";
  if (severity === "High") return "#ff8c00";
  if (severity === "Medium") return "#ffff00";
  if (severity === "Low") return "#9bd650";
  return "#cccccc";
}

function incidentPopup(props) {
  return `
    <strong>Outage ${props.outage_id} — ${props.severity} Severity</strong><br>
    <br>
    <strong>Status:</strong> ${props.status}<br>
    <strong>District:</strong> ${props.district}<br>
    <strong>Type:</strong> ${props.outage_type}<br>
    <strong>Customers affected:</strong> ${props.customers_affected}<br>
    <strong>Response ETA:</strong> ${props.response_eta_minutes} minutes<br>
    <strong>Assigned crew:</strong> ${props.assigned_crew}
  `;
}

function depotPopup(props) {
  return `
    <strong>${props.depot_name}</strong><br>
    <br>
    <strong>Type:</strong> ${props.depot_type}<br>
    <strong>Status:</strong> ${props.status}<br>
    <strong>Available crews:</strong> ${props.available_crews}
  `;
}

fetch("data/incidents.geojson")
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 8,
          fillColor: severityColor(feature.properties.severity),
          color: "#111111",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.95
        });
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(incidentPopup(feature.properties));
      }
    }).addTo(map);
  });

fetch("data/depots.geojson")
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 7,
          fillColor: "#00cfd1",
          color: "#111111",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.95
        });
      },
      onEachFeature: (feature, layer) => {
        layer.bindPopup(depotPopup(feature.properties));
      }
    }).addTo(map);
  });
