import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from 'react-icons/fi';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanage.css'
import Sidebar from '../components/Sidebar';
import mapIcon from '../utils/mapIcon';



export default function Orphanage() {

    return (
        <div id="page-orphanage">
            <Sidebar />

            <main>
                <div className='orphanage-details'>
                    <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />

                    <div className='images'>
                        <button className='active' type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                        <button type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                        <button type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                        <button type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                        <button type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                        <button type='button'>
                            <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Casa do Lar" />
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>Casa do Lar</h1>
                        <p>Presta assistência a crianças de 06 a 17 anos que se encontra em situação de risco e/ou vulnerabilidade</p>

                        <div className='map-container'>
                        <MapContainer 
                            center={[-19.5930901,-46.9501635]}
                            zoom={16}
                            style={{ width: "100%", height: 200 }}
                            dragging={false}
                            touchZoom={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                            >
                            <TileLayer 
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemRvZzEwMTI3IiwiYSI6ImNsMTU3bW96ZzBxOHgzbHJ0NWwxMDdzdWMifQ.76U5aNzb4ITBtGh4GTtZSg`}  
                            />
                            <Marker interactive={false} icon={mapIcon} position={[-19.5930901,-46.9501635]} />
                        </MapContainer>

                        <footer>
                            <a href="">Ver rotas do Google Maps</a>
                        </footer>
                        </div>

                        <hr /> 

                        <h2>Instruções para visita</h2>
                        <p>Venha como se sentir mais à vontade e traga muito amor para dar.</p>

                        <div className="open-details">
                            <div className='hour'>
                                <FiClock size={32} color="#15B6D6" />
                                Segunda à Sexta <br />
                                8h às 18h
                            </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                                Atendemos <br />
                                fim de semana
                            </div>
                        </div>

                        <button type="button" className='contact-button'>
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}