import React from 'react'
import PropTypes from 'prop-types'

const PrimeraAPP = ({ saludo, subtitulo }) => {

    return (
        // Modo 1: envolver en Div
        // <div>
        //     <h1> Hola Mundo </h1>
        //     <p>Mi primera aplicación en React</p>
        // </div>
        // Modo 2: envolver en un fragmento sin envolverlo en Div en el html final
        // <Fragment>
        //     <h1> Hola Mundo </h1>
        //     <p>Mi primera aplicación en React</p>
        // </Fragment>
        // Modo 3: envolver en un fragmento sin envolverlo en Div y sin importar Fragment de 'react'
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>


    );
}
PrimeraAPP.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraAPP.defaultProps = {
    subtitulo: 'Mi primera aplicación en React'
}

export default PrimeraAPP;