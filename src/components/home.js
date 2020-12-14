import React from 'react'
import rodri from '../images/rodri.jpg'
import maxi from '../images/maxi.jpg'

export default function Home(){

    return(
        <div className="container my-3">
            <div style={{backgroundColor:"white", borderRadius:"8px", padding:"10px 0"}}>
                <h2 style={{textAlign:"center", position:"relative", zIndex:1}}>Think about your tutors</h2>
                <div className="mx-3" style={{backgroundColor:"yellow", height:"16px", position:"relative", zIndex:0, top:"-20px"}}></div>
                <div className="row mx-4">
                    <div className="col-6 d-flex justify-content-center my-4">
                        <img style={{maxWidth:"130px", borderRadius:"100%"}} src={rodri} alt="foto de Rodri"/>
                    </div>
                    <div className="col-6 d-flex justify-content-center my-4">
                        <img style={{maxWidth:"130px", borderRadius:"100%"}} src={maxi} alt="foto de Maxi"/>
                    </div>
                </div>
            </div>
        </div>
    )
}