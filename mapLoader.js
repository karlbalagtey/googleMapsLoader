import GoogleMapsLoader from './modules/googleMapsLoader';

class MapLoader {
	constructor(els) {
        this.mapContainer = document.getElementById(els.container);
        this.mapLat = parseFloat(this.mapContainer.dataset.lat ? this.mapContainer.dataset.lat : 0);
        this.mapLng = parseFloat(this.mapContainer.dataset.lng ? this.mapContainer.dataset.lng : 0);
        this.mapZoom = this.mapContainer.dataset.zoom;
        this.pageTitle = this.mapContainer.dataset.title;

        this.style = els.style;
        this.zoom = els.zoom ? els.zoom : 12;
        this.scrollwheel = els.scrollwheel ? els.scrollwheel : false;
        this.disableDefaultUI = els.disableDefaultUI ? els.disableDefaultUI : false;
        this.zoomControl = els.zoomControl ? els.zoomControl : false;

        this.map;
        this.latLng;
        this.markerIcon = els.marker;

        this.gMap = new GoogleMapsLoader(els.apiKey);
        
        this.gMap.load().then(() => {
            this.init();
        });
	}

	init() {
        const that = this;

        this.latLng = {lat: this.mapLat, lng: this.mapLng};

        this.mapOptions = {
            center: this.latLng,
            zoom: that.zoom,
            styles: that.style,
            scrollwheel: that.scrollwheel,
            disableDefaultUI: that.disableDefaultUI,
            zoomControl: that.zoomControl
        }

        this.map = new google.maps.Map(that.mapContainer, this.mapOptions);

        if (this.mapLat !== 0 && this.mapLng !== 0) {
            that.addMarker(this.latLng);
        }
	}

    addMarker(latLng) {
        const that = this;

        this.marker = new google.maps.Marker({
            position: latLng,
            map: that.map,
            title: that.title,
            icon: that.markerIcon,
            draggable: false
        });

        this.marker.setMap(that.map);
    }
}

export default {
    init(els) {
        this.mapLoad = new MapLoader(els);
    },
    addMarker(latLng) {
        this.mapLoad.addMarker(latLng);
    }
};
