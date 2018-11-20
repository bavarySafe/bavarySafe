/**
 * app.js
 *
 * Central app initialization.
 */

import Map from './map';

export default function init()
{
    let mapBuilder = new Map();
    mapBuilder.buildMap();
}
