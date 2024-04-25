import React, { Component } from "react";
import MarcaDataService from "../services/marca.service"
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Container, Table } from "reactstrap";


export default class MarcasList extends Component{
    constructor(props){
        super(props);

        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveMarcas = this.retrieveMarcas.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveMarca = this.setActiveMarca.bind(this);
       
        this.searchByName = this.searchByName.bind(this);
        

        this.state= {
            marcas: [],
            currentMarca: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount(){
        this.retrieveMarcas();
    }

    onChangeSearchName(e){
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveMarcas(){
        MarcaDataService.getAll()
        .then(response => {
            this.setState({
                marcas: response.data
            });
            console.log(response.data)
        })
        .catch(e=> {
            console.log(e);
        });

    }


    refreshList(){
        this.retrieveMarcas();
        this.setState({
            currentMarca: null,
            currentIndex: -1
        });
    }

    setActiveMarca(marca, index){
        this.setState({
            currentMarca:marca,
            currentIndex: index
        });
    }



    
    searchByName() {
        const { marcas, searchName } = this.state;
        const filteredMarcas = marcas.filter(marca => marca.nombre_marca.includes(searchName));
        this.setState({
            marcas: filteredMarcas
        });
    }
   


    render(){
        


        
        const {marcas, isLoading,searchName} = this.state;

        if (isLoading){
          return <p>Cargando....</p>;
      }

      <div>
        
             
              
      </div>
  
  
      const marcasList = marcas.map(marca => {
          return <tr key={marca._id}>
              <td style={{whiteSpace: 'nowrap'}}>{marca.nombre_marca} </td>
              <td>{marca.nombre_solicitante}</td>
              <td>{marca.clase_niza}</td>
              <td>{marca.fecha_registro}</td>
              <td>{marca.detalle}</td>
              <td>{marca.tipo_solicitud}</td>
              <td>{marca.subtipo_solicitud}</td>
              <td> <img className="logos" src={marca.logo}/> </td>
              <td>{marca.estado}</td>
              <td>
                  <ButtonGroup>
                      <Button size="sm" color="success" tag={Link} to={"/marcas/" + marca._id}>Editar</Button>
                      {/* <Button size="sm" color="danger" onClick={this.deleteMarca} >Eliminar</Button> */}
                  </ButtonGroup>
              </td>
          </tr>
      
      });
  
      return(
       
             
        
          <div>
            
             <h1 className="mb-4 mt-4">Marcas</h1>
             <div className="col-md-12 mt-4">
                <div className="input-group mb-12">
                  <input type="text" className="form-control" placeholder="Busqueda por nombre" value={searchName} onChange={this.onChangeSearchName} />
                  <div className="input-group-append">
                    <Button className="btn btn-danger" type="button" onClick={this.searchByName} >
                      Buscar
                    </Button>
                  </div>
                </div>
              </div>
             
              <Container fluid>
                  <Table className="mt-4">
                      <thead>
                          <tr>
                              <th width="20%">Nombre de la marca</th>
                              <th width="25%">Nombre del solicitante</th>
                              <th width="15%">Clase de niza</th>
                              <th width="20%">Fecha de registro</th>
                              <th width="10%">Detalle</th>
                              <th width="25%">Tipo solicitud</th>
                              <th width="20%">Sub-tipo solicitud</th>
                              <th width="15%">Logo</th>
                              <th width="15%">Estado</th>
                              <th widtd="40%">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {marcasList}
                      </tbody>
                  </Table>
              </Container>
              <div className="container mb-12 mt-4">
                    <Button className="btn btnR2 btn-block btn-primary" tag={Link} to="/add" >Registrar Marca</Button>
              </div>
          </div>
      )
  

       
    }


























}