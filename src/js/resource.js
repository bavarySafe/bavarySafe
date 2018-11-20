/**
 * resource.js
 *
 * Get data from the API.
 * IMPORTANT: The GeoJSON files are in the dist folder!
 */

import $ from 'jquery';

export default class Resource
{
    constructor()
    {

    }

    getResource(filename)
    {
        return $.getJSON('/geodata/' + filename + '.geojson');
    }

    getPoliceStations()
    {
        return this.getResource('policestations');
    }

    getFirefighterStation()
    {
        return this.getResource('firefighterstations');
    }

    getCollectionPoints()
    {
        return this.getResource('collectionpoints');
    }

    getAccommodations()
    {
        return this.getResource('accommodations');
    }

    getRoadBlocks()
    {
        return this.getResource('roadblocks');
    }
}
