import React from "react";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import mapMarkerImg from '../assets/Local.svg';
import '../styles/pages/orphanagesMap.css';
import mapIcon from "../utils/mapIcon";


function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Araxá</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <MapContainer 
                center={[-19.5930901,-46.9501635]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemRvZzEwMTI3IiwiYSI6ImNsMTU3bW96ZzBxOHgzbHJ0NWwxMDdzdWMifQ.76U5aNzb4ITBtGh4GTtZSg`} 
                />

                <Marker 
                    icon={mapIcon}
                    position={[-19.5930901,-46.9501635]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Casa do Lar
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>   
            
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;