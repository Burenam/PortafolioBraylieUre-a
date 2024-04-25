import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container containerPrincipal col-md-10 mb-4 mt-4">
                    <div className="row mb-4">
                        <h1>Bienvenido a nuestro sistema de marcas</h1>
                        <p className='mt-4'>Nuestro sistema esta diseñado para que los usuarios puedan ver las marcas registradas, 
                        puedan realizar una busqueda especifica y a su vez para que puedan solicitar el registro de una marca.</p>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <Button className="btn btnL btn-lg btn-block btn-primary" tag={Link} to="/marcas" >Listado de Marcas</Button>
                        </div>
                        <div className="col-md-6">
                            <Button className="btn btnR btn-lg btn-block btn-primary" tag={Link} to="/add" >Registrar Marca</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;