export interface GeocodingModel {
    results: {
        geometry: {
            location: {
                lat: number;
                lng: number;
            };
        };
        place_id: String | string
    }[];
}