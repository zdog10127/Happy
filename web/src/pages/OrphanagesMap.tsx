import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../assets/Local.svg';
import '../styles/pages/orphanagesMap.css';

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
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
            </MapContainer>   
            
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;