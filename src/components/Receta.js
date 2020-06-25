import React from 'react'

const Receta = ({receta}) => {
    return (
        <div className="col-md-4 mb-3">
            <div class="card">
                <h2 class="card-header">
                    {receta.strDrink}
                </h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} class="card-img-top"/>
                <div class="card-body">
                    <button
                        className="btn btn-block btn-outline-dark"
                    >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Receta
