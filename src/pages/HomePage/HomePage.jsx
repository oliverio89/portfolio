import React from 'react'
import './HomePage.css'
import myPhoto from '../../resources/images/IMG_9956.JPG'


const HomePage = () => {



    return (
        <>
            <div className='presentacion'>
                <div className="titulo">
                    <h1> My name is Víctor</h1>


                    <p> Hola mi nombre es Víctor,<br />
                        soy un diseñador y desarrollador web, residiendo en Madrid, España.</p>
                </div>
                <div className='photo'>
                    <img src={myPhoto} className='imgMyPhoto' />
                </div>
            </div>

            <div className="hero" />

            {/* cuerpo */}
            <div className='cuerpo'>

            </div>

        </>
    )
}

export default HomePage

