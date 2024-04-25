import React, { Component } from "react";
import MarcaDataService from "../services/marca.service"
import { withRouter } from '../with-router';


class Marcas extends Component{
    constructor(props){

        super(props);

        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeDetalle = this.onChangeDetalle.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.updateMarca= this.updateMarca.bind(this);
        this.deleteMarca= this.deleteMarca.bind(this);
        this.updateEstado= this.updateEstado.bind(this);

        this.state = {
           currentMarca: {
            _id: null,
            nombre_marca: "",
            nombre_solicitante:"",
            clase_niza: null,
            num_expediente: "",
            fecha_registro: "",
            detalle:"",
            logo:"",
            tipo_solicitud:"",
            subtipo_solicitud:"",
            estado: "",
           },
           msj: ""

    };

}

componentDidMount(){
    this.getMarca(this.props.router.params.id);
}

onChangeName(e){
    const name = e.target.value;

    this.setState(function(prevState){
        return{
            currentMarca: {
                ...prevState.currentMarca,
                nombre_marca: name
            }
        };
    });
}

onChangeDetalle(e){
    const detalle = e.target.value;

    this.setState(prevState => ({
        currentMarca : {
            ...prevState.currentMarca,
            detalle:detalle
        }
    }));

}


onChangeLogo(e){
    const logo = e.target.value;

    this.setState(prevState =>({
        currentMarca: {
            ...prevState.currentMarca,
            logo:URL.createObjectURL(e.target.files[0])
        }
    }));
}

updateEstado(estado){
  var data={
    _id: this.state.currentMarca._id,
    nombre_marca: this.state.currentMarca.nombre_marca,
    nombre_solicitante: this.state.currentMarca.nombre_solicitante,
    clase_niza: this.state.currentMarca.clase_niza,
    num_expediente: this.state.currentMarca.num_expediente,
    fecha_registro: this.state.currentMarca.fecha_registro,
    detalle: this.state.currentMarca.detalle,
    logo: this.state.currentMarca.logo,
    tipo_solicitud: this.state.currentMarca.tipo_solicitud,

    subtipo_solicitud: this.state.currentMarca.subtipo_solicitud,
    estado: "Registrado" // Change the estado value to "Registrado"
  };
  MarcaDataService.update(this.state.currentMarca._id, data)
  .then(response =>{
    this.setState(prevState => ({
      currentMarca:{
        ...prevState.currentMarca,
        estado: "Registrado" // Change the estado value to "Registrado"
      }
    }));
    console.log(response.data);
  })
  .catch(e =>{
    console.log(e);
  });
}
getMarca(id){
    MarcaDataService.getId(id)
    .then(response =>{
        this.setState({
            currentMarca: response.data
        });
        console.log(response.data)
    })
    .catch(e=>{
        console.log(e);
    });
}

updateMarca(){
    MarcaDataService.update(
        this.state.currentMarca._id,
        this.state.currentMarca
    )
    .then(response =>{
        console.log(response.data);
        this.setState({
            msj: "Marca actualizada correctamente!"
        });
    })
    .catch(e =>{
        console.log(e);
    });
        
    
}

deleteMarca(){
    MarcaDataService.delete(this.state.currentMarca._id)
    .then(response => {
        console.log(response.data);
        this.props.router.navigate('/marcas');
    })
    .catch(e =>{
        console.log(e);
    })
}

render() {
    const { currentMarca } = this.state;

    return (
      <div>
        {currentMarca ? (
          <div className="edit-form">
            <h4>Marca</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Nombre Marca</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentMarca.nombre_marca}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="detalle">Detalle</label>
                <input
                  type="text"
                  className="form-control"
                  id="detalle"
                  value={currentMarca.detalle}
                  onChange={this.onChangeDetalle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="logo">Logo</label>
                <input
                  type="file"
                  className="form-control"
                  id="logo"
                  
                  onChange={this.onChangeLogo}
                />
              </div>
            </form>

            <div className="form-group">
                <label>
                  <strong>Estado:</strong>
                </label>
                {currentMarca.estado ? "Registrado" : "Solicitado"}
              </div>

              <div className="row">
                <div className="col-md-4">
                  {currentMarca.estado ? (
                    <button className=" btn btnE btn-block btn-primary" onClick={() => this.updateEstado(false)}>Registrar</button>
                    ) : (
                    <button className=" btn btnE btn-block btn-primary" onClick={() => this.updateEstado(true)}>Desactivar</button>
                  )}
                </div>

                <div className="col-md-4">
                  <button className="btn btnE btn-block btn-danger" onClick={this.deleteMarca}>Borrar</button>
                </div>

                <div className="col-md-4">
                  <button type="submit"  className="btn btn-block btnE btn-success" onClick={this.updateMarca}>Actualizar</button>
                </div>
              </div>

            <p>{this.state.msj}</p>

          </div>
        ) : (
          <div>
            <br />
            <p>Selecione una marca...</p>
          </div>
        )}
      </div>
    );
  }


}
export default withRouter(Marcas);