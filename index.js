(function () {
    const api = window.SubwayBuilderAPI;
    const CITY_CODE = 'SMF';

    if (!api) return;

    // 1. Register Sacramento
    api.registerCity({
        name: 'Sacramento',
        code: CITY_CODE,
        description: 'The Historic Capital City of California',
        population: 689000,
        initialViewState: {
            zoom: 11.5,
            latitude: 38.577373,
            longitude: -121.496250,
            bearing: 0
        }
    });

    // 2. Register USA Tab
    api.cities.registerTab({
        id: 'usa',
        label: '🇺🇸 USA',
        cityCodes: [CITY_CODE]
    });
    // 3. Localhost tiles
    window.SubwayBuilderAPI.map.setTileURLOverride({
    	cityCode: 'SMF',
    	tilesUrl: 'http://127.0.0.1:8080/SMF/{z}/{x}/{y}.mvt',
    	foundationTilesUrl: 'http://127.0.0.1:8080/SMF/{z}/{x}/{y}.mvt',
    	maxZoom: 15
    });

    // 4. Data Files
    api.cities.setCityDataFiles(CITY_CODE, {
        buildingsIndex: '/data/SMF/buildings_index.json.gz',
        demandData: '/data/SMF/demand_data.json.gz',
        roads: '/data/SMF/roads.geojson.gz',
        runwaysTaxiways: '/data/SMF/runways_taxiways.geojson.gz',
	oceanDepth: '/data/SMF/ocean_depth_index.json.gz'
    });

    console.log('[Sacramento Mod] Map paths and tiles updated.');
})();