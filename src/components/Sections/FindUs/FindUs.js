import React from 'react';
import GoogleMapReact from 'google-map-react';
import './FindUs.css';

const MyMarker = (props) => {
    return (
        <div className="MyMarker"></div>
    );
}
const FindUs = (props) => {
    const defaultProps = {
        center: { lat: 18.4680894, lng: -69.9112522 },
        zoom: 11
    };
    return (
        <section className="s-findUS" id="s-findUs">
            <h2 className="accessible-hide">Find Us</h2>
                <div className="s-findUs__wrapper">
                    <GoogleMapReact
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}>
                        <MyMarker
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng} />
                    </GoogleMapReact>
                </div>
        </section>
    );
    
}

export default FindUs;