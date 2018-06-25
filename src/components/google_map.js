import React, { Componenet } from 'react';

class GoogleMap extends Componenet {
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    reander() {
        // this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;