/**
 * map.js
 *
 * Build the leaflet map.
 */

import L from 'leaflet';
import Resource from "./resource";

export default class Map
{
    constructor()
    {

    }

    /**
     * Set all base maps.
     *
     * @return object
     */
    setBaseMaps()
    {
        return {
            'Open Street Maps': L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                subdomains: ['a','b','c']
            })
        }
    }

    /**
     * Set all overlay maps.
     *
     * @return object
     */
    setOverlayMaps()
    {
        let res = new Resource();

        let PoliceStationsLayer = L.geoJSON();
        res.getPoliceStations().done(function(data) {
            PoliceStationsLayer.addData(data);
        });

        let FirefighterStationsLayer = L.geoJSON();
        res.getFirefighterStation().done(function(data) {
            FirefighterStationsLayer.addData(data);
        });

        let CollectionPointsLayer = L.geoJSON();
        res.getCollectionPoints().done(function(data) {
            CollectionPointsLayer.addData(data);
        });

        let AccommodationsLayer = L.geoJSON();
        res.getAccommodations().done(function(data) {
            AccommodationsLayer.addData(data);
        });

        let RoadBlocksLayer = L.geoJSON();
        res.getRoadBlocks().done(function(data) {
            RoadBlocksLayer.addData(data);
        });

        return {
            'Police Stations': PoliceStationsLayer,
            'Firefighter Stations': FirefighterStationsLayer,
            'Collection Points': CollectionPointsLayer,
            'Accommodations': AccommodationsLayer,
            'Road Blocks': RoadBlocksLayer
        }
    }

    /**
     * Build the actual map and add the control unit.
     *
     * @return {*|Map}
     */
    buildMap()
    {
        let map = L.map('map', {
            center: [11.60, 48.67],
            zoom: 10,
        });

        L.control.layers(this.setBaseMaps(), this.setOverlayMaps()).addTo(map);

        return map;
    }
}