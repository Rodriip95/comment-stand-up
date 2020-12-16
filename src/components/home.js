import React from 'react'
import rodri from '../images/rodri.jpg'
import maxi from '../images/maxi.jpg'

export default function Home(){

    return(
        <div className="container my-3">
            <div className="mx-auto contenedor-fotos" style={{backgroundColor:"white", borderRadius:"8px", padding:"10px 0"}}>
                <h2 style={{textAlign:"center", position:"relative", zIndex:1}}>Think about your tutors</h2>
                <div className="mx-3" style={{backgroundColor:"yellow", height:"16px", position:"relative", zIndex:0, top:"-20px"}}></div>
                <div className="row mx-4">
                    <div className="col-6 d-flex justify-content-center my-4">
                        <a href="http://www.linkedin.com/in/rodrigomanuelpenela" target="_blank">
                            <img className="photo" style={{borderRadius:"100%"}} src={rodri} alt="foto de Rodri"/>
                        </a>
                    </div>
                    <div className="col-6 d-flex justify-content-center my-4">
                        <a href="https://www.linkedin.com/in/maxidf/" target="_blank">
                            <img className="photo" style={{borderRadius:"100%"}} src={maxi} alt="foto de Maxi"/>
                        </a>
                    </div>
                    <div className="col-12">
                        <div className="p-2 d-flex justify-content-center">
                        <p style={{width:"70%", textAlign:"center"}}>We are Rodri and Maxi, Henry's tutors of a group of students. We decided to create this App so that our students can leave us their opinion about our classes and, in the future, make this App together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}