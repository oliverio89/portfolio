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

            {/* acerca de mi */}
            <div className='cuerpo'>



            </div>

            {/* mis proyectos */}
            <div className='cuerpo'>



            </div>

            {/* mis conocimientos */}
            <div className='cuerpo'>
                <div><h2>Durante mi carrera como programador he desarrollado proyecto con las siguientes técnologías.</h2></div>


            </div>

        </>
    )
}

export default HomePage

