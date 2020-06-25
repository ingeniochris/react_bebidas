import React, {useState, useContext} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext'
import Error from './Error'

const Formulario = () => {

    const { buscarRecetas, guardarConsulta }= useContext(RecetasContext);
    const { categorias } = useContext(CategoriasContext);
  
    const [busqueda, guardarBusqueda]= useState({
        categoria:''
    });
    const [error, guardarError]=useState(false);

    const {categoria}=busqueda
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleBusqueda = e => {
        e.preventDefault();

        if(categoria.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        buscarRecetas(busqueda);
        guardarConsulta(true);
    };


    return (
        <form
            className="col-md-12"
            onSubmit={handleBusqueda}
        >
            {error ? <Error message='Todos los campos son necesarios'/> : null}
            <fieldset className="text-center">
                <legend>Buscar bebidas por su Ingrediente </legend>
            </fieldset>
            <div className="row">
              {/*   <div className="col-md-4">
                    <input 
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Licor   ejemplo. Tequila"
                    onChange={obtenerDatosReceta}
                    value={nombre}
                    />
                </div>  */}
                <div className="col-md-6">
                    <select 
                    type="text"
                    name="categoria"
                    className="form-control"
                    placeholder="Buscar por Ingrediente"
                    onChange={obtenerDatosReceta}
                    
                    >
                        <option value="">-- Seleciona Ingrediente --</option>
                        {categorias.map(categoria => (
                            <option 
                                key={categoria.strIngredient1} 
                                value={categoria.strIngredient1} 
                            >{categoria.strIngredient1}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <input 
                    type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
    )
}

export default Formulario
