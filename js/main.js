'use strict';
/* Andalusia 2026 Travel Guide - Scripts */

const maps = {};

function showTab(tabName, el) {
  const btn = el || (typeof event !== 'undefined' ? event.target : null);
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  if (btn) btn.classList.add('active');
  setTimeout(() => { Object.values(maps).forEach(m => m && m.invalidateSize()); }, 100);
  setTimeout(scrollActiveTabIntoView, 150);
}

function addMarker(map, lat, lng, type, title, desc) {
  const colors = {
    sight: '#1565C0',
    food: '#E65100',
    garden: '#2E7D32',
    beach: '#2B6A7C',
    wine: '#7B1FA2',
    activity: '#FF8F00',
    home: '#43A047',
    show: '#D4A853'
  };
  const icon = L.divIcon({
    html: '<div style="background:' + (colors[type] || '#666') + ';width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>',
    className: '',
    iconSize: [12, 12]
  });
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng;
  L.marker([lat, lng], { icon: icon }).addTo(map).bindPopup(
    '<strong>' + title + '</strong><br>' + desc +
    '<br><a href="' + mapsUrl + '" target="_blank" rel="noopener noreferrer" style="color:#FF6B35;font-weight:500;font-size:13px;">Open in Maps</a>'
  );
}

var tiles = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
var attr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>';

// ── CORDOBA CITY MAP ──
function initCordobaCityMap() {
  var m = L.map('mapCordobaCity').setView([37.880, -4.780], 14);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.cordobaCity = m;

  // Sights
  addMarker(m, 37.879, -4.779, 'sight', 'Mezquita-Catedral', 'UNESCO, book online');
  addMarker(m, 37.876, -4.780, 'sight', 'Roman Bridge', 'Flat 230m walk');
  addMarker(m, 37.878, -4.781, 'sight', 'Calleja de las Flores', 'Photo alley');
  addMarker(m, 37.877, -4.780, 'sight', 'Jewish Quarter & Synagogue', 'Whitewashed maze');
  addMarker(m, 37.876, -4.782, 'sight', 'Alcazar de los Reyes Cristianos', 'Free mornings');
  addMarker(m, 37.877, -4.784, 'sight', 'Palacio de Viana', '12 courtyards, €6');
  addMarker(m, 37.880, -4.780, 'sight', 'Plaza de la Corredera', 'Unique arcaded plaza');
  addMarker(m, 37.886, -4.776, 'garden', 'Jardines de la Agricultura', 'Flat, shaded park');

  // Show
  addMarker(m, 37.876, -4.783, 'show', 'Caballerizas Reales', 'Horse show Apr 2, 20:00');

  // Restaurants
  addMarker(m, 37.880, -4.780, 'food', 'Bodegas Mezquita', 'Salmorejo, oxtail');
  addMarker(m, 37.880, -4.781, 'food', 'Casa Pepe de la Juderia', 'Croquetas, upscale');
  addMarker(m, 37.880, -4.781, 'food', 'El Rincon de Carmen', 'Courtyard, family-run');
  addMarker(m, 37.879, -4.776, 'food', 'Singular', 'Riverside brunch');
  addMarker(m, 37.889, -4.783, 'food', 'The Golden Stack', 'Best breakfast');
  addMarker(m, 37.884, -4.778, 'food', 'Mercado Victoria', 'Food hall, 30+ stalls');

  // Home
  addMarker(m, 37.874, -4.775, 'home', 'Airbnb (approx)', 'South bank');
}

// ── CORDOBA DAY TRIPS MAP ──
function initCordobaTripsMap() {
  var m = L.map('mapCordobaTrips').setView([37.85, -4.78], 9);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.cordobaTrips = m;

  addMarker(m, 37.881, -4.854, 'sight', 'Medina Azahara', '15 min, free EU');
  addMarker(m, 37.810, -4.988, 'sight', 'Almodovar del Rio Castle', '25 min, €9');
  addMarker(m, 37.586, -4.637, 'wine', 'Montilla Wine Region', '40 min, tastings €10-15');
  addMarker(m, 37.845, -5.220, 'garden', 'Hornachuelos Natural Park', '1h, free');
  addMarker(m, 37.545, -4.321, 'sight', 'Zuheros White Village', '1h, castle €4');
  addMarker(m, 37.615, -4.323, 'sight', 'Baena Olive Oil', '50 min, free mill tours');
  addMarker(m, 37.544, -5.080, 'sight', 'Ecija City of Towers', '1h, free');
  addMarker(m, 37.540, -4.440, 'sight', 'Priego de Cordoba', '1h 10min, free');
  addMarker(m, 38.235, -4.291, 'garden', 'Cardena-Montoro NP', '1h, free');
  addMarker(m, 37.671, -4.945, 'sight', 'La Carlota', '30 min, free');
  addMarker(m, 38.158, -5.213, 'sight', 'Guadiato Valley', '1h, free');
  addMarker(m, 37.874, -4.775, 'sight', 'Guadalquivir Loop', 'Scenic drive 2-3h');
}

// ── ALMUNECAR CITY MAP ──
function initAlmunecarCityMap() {
  var m = L.map('mapAlmunecarCity').setView([36.735, -3.695], 13);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.almunecarCity = m;

  // Beaches
  addMarker(m, 36.710, -3.725, 'beach', 'Playa de Cantarrijan', 'Best beach, 15 min');
  addMarker(m, 36.728, -3.727, 'beach', 'Playa de La Herradura', 'Snorkeling bay, 8 min');
  addMarker(m, 36.741, -3.684, 'beach', 'Playa Velilla', 'Home beach');
  addMarker(m, 36.745, -3.482, 'beach', 'Playa Burriana (Nerja)', 'Sandy, 25 min');

  // Sights
  addMarker(m, 36.734, -3.690, 'sight', 'Castillo de San Miguel', '€4 combo');
  addMarker(m, 36.735, -3.688, 'sight', 'Cueva de Siete Palacios', 'Roman museum');
  addMarker(m, 36.735, -3.687, 'garden', 'Parque El Majuelo', 'Free botanical garden');
  addMarker(m, 36.755, -3.666, 'sight', 'Roman Aqueduct', 'Free, 3 km north');

  // Restaurants
  addMarker(m, 36.736, -3.685, 'food', 'Firmvm', 'Sea views, €25-40pp');
  addMarker(m, 36.733, -3.691, 'food', 'Calabajio', 'Seafood, terrace');
  addMarker(m, 36.734, -3.688, 'food', 'El Arbol Blanco', 'Garden terrace');
  addMarker(m, 36.734, -3.688, 'food', 'El Chaleco', 'Traditional tapas');
  addMarker(m, 36.710, -3.725, 'food', 'La Barraca', 'At Cantarrijan beach');
  addMarker(m, 36.735, -3.689, 'food', 'Los Geranios', 'Plaza dining');

  // Home
  addMarker(m, 36.731, -3.684, 'home', 'HomeExchange - Velilla', 'Miguel\'s place');
}

// ── ALMUNECAR DAY TRIPS MAP ──
function initAlmunecarTripsMap() {
  var m = L.map('mapAlmunecarTrips').setView([36.85, -3.65], 9);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.almunecarTrips = m;

  addMarker(m, 37.176, -3.599, 'sight', 'Granada & Alhambra', '1h, book ahead');
  addMarker(m, 36.750, -3.874, 'sight', 'Nerja & Frigiliana', '30 min, caves €13');
  addMarker(m, 36.744, -3.587, 'sight', 'Salobrena', '15 min, castle €3');
  addMarker(m, 36.980, -3.360, 'sight', 'Alpujarras Villages', '1h 30min');
  addMarker(m, 36.797, -3.668, 'wine', 'Bodegas Calvente', '15 min, €27');
  addMarker(m, 36.727, -3.524, 'activity', 'Ron Montero (Motril)', '20 min, free');
  addMarker(m, 36.740, -3.760, 'garden', 'Cerro Gordo Trail', '15 min, free');
  addMarker(m, 36.720, -4.420, 'sight', 'Malaga City', '1h, Picasso €12');
  addMarker(m, 36.778, -4.102, 'sight', 'Velez-Malaga', '25 min, free Alcazaba');
  addMarker(m, 36.728, -3.726, 'beach', 'La Herradura Snorkeling', '10 min');
  addMarker(m, 37.006, -3.992, 'sight', 'Alhama de Granada', '50 min, free');
  addMarker(m, 36.988, -3.269, 'sight', 'Trevelez', '2h, highest village');
  addMarker(m, 36.820, -3.550, 'garden', 'Sierra de Lujar', '40 min, free');
}

// ── ALFARNATEJO AREA MAP ──
function initAlfarnatejoAreaMap() {
  var m = L.map('mapAlfarnatejoArea').setView([36.92, -4.22], 11);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.alfarnatejoArea = m;

  addMarker(m, 36.988, -4.260, 'home', 'Alfarnatejo', 'Zilvita\'s village');
  addMarker(m, 36.844, -4.246, 'sight', 'Comares', 'Views + zipline option');
  addMarker(m, 36.902, -4.184, 'activity', 'Periana Olive Co-op', 'Buy oil');
  addMarker(m, 37.003, -4.252, 'food', 'Venta de Alfarnate', 'Oldest inn (1690)');
  addMarker(m, 36.865, -4.190, 'garden', 'Lake Vinuela', 'Peaceful viewpoint');
  addMarker(m, 36.778, -4.102, 'sight', 'Velez-Malaga Alcazaba', 'Transfer stop');
}

// ── ALFARNATEJO DAY TRIPS MAP ──
function initAlfarnatejoTripsMap() {
  var m = L.map('mapAlfarnatejoTrips').setView([36.95, -4.20], 9);
  L.tileLayer(tiles, { attribution: attr }).addTo(m);
  maps.alfarnatejoTrips = m;

  addMarker(m, 37.024, -4.551, 'sight', 'Antequera & El Torcal', '45 min, dolmens free');
  addMarker(m, 36.759, -3.851, 'sight', 'Nerja & Frigiliana', '40 min, caves €13');
  addMarker(m, 37.176, -3.599, 'sight', 'Granada', '1h, Alhambra €19-22');
  addMarker(m, 36.742, -5.166, 'sight', 'Ronda', '1h 30min, Puente Nuevo');
  addMarker(m, 36.935, -4.555, 'activity', 'Caminito del Rey', '50 min, €10');
  addMarker(m, 37.242, -5.108, 'sight', 'Osuna', '1h 15min, €4');
  addMarker(m, 37.266, -4.316, 'sight', 'Iznajar Lake', '1h, castle €3');
  addMarker(m, 37.093, -4.389, 'sight', 'Archidona', '40 min, free');
  addMarker(m, 36.740, -4.090, 'beach', 'Costa del Sol Beaches', '30-45 min');
  addMarker(m, 36.810, -4.360, 'garden', 'Montes de Malaga NP', '45 min, free');
  addMarker(m, 36.954, -4.545, 'garden', 'El Torcal Natural Park', '50 min, free');
  addMarker(m, 37.006, -3.992, 'sight', 'Alhama de Granada', '1h, free');
  addMarker(m, 36.965, -4.140, 'sight', 'Zafarraya Pass', '35 min');
  addMarker(m, 36.844, -4.246, 'sight', 'White Villages Circuit', 'Half-full day');
  addMarker(m, 36.720, -4.420, 'sight', 'Malaga City', '1h, Picasso €12');
}

// Initialize all maps after Leaflet is loaded
function initAllMaps() {
  if (typeof L === 'undefined') {
    setTimeout(initAllMaps, 50);
    return;
  }

  initCordobaCityMap();
  initCordobaTripsMap();
  initAlmunecarCityMap();
  initAlmunecarTripsMap();
  initAlfarnatejoAreaMap();
  initAlfarnatejoTripsMap();

  setTimeout(function() {
    Object.values(maps).forEach(function(m) { if (m) m.invalidateSize(); });
  }, 200);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllMaps);
} else {
  initAllMaps();
}

// ── Fix maps on resize (debounced) ──
var resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    Object.values(maps).forEach(function(m) { if (m) m.invalidateSize(); });
  }, 200);
});

// ── Scroll active tab into view on mobile ──
function scrollActiveTabIntoView() {
  var activeTab = document.querySelector('.tabs .tab.active');
  if (activeTab) activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ── Scroll Progress Bar ──
window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';

  var btn = document.getElementById('backToTop');
  if (scrollTop > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

// ── Subtle fade-in on scroll ──
if ('IntersectionObserver' in window) {
  var fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  function setupFade(root) {
    (root || document).querySelectorAll('.info-card, .daytrip-card').forEach(function(el) {
      if (!el.classList.contains('fade-item')) {
        el.classList.add('fade-item');
        fadeObserver.observe(el);
      }
    });
  }
  setupFade(document.querySelector('.tab-content.active'));

  var _showTab = showTab;
  showTab = function(n, e) { _showTab(n, e); setTimeout(function() { setupFade(document.getElementById(n)); }, 60); };
}