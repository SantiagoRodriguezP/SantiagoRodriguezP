
//import React, { Fragment } from 'react'
import React, { } from 'react'
import  PropTypes  from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

    // const saludo = {
    //     nombre: 'Santiago',
    //     edad: 21
    // };
    //const saludo = 'Hello World';

    return (
        <>
        <h1>{saludo}</h1>
        {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
        <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;