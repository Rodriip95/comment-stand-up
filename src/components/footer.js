import React from 'react';

export default function Footer(){

    return(
        <div className="container-fluid mb-0" style={{backgroundColor:"yellow", height:"75px", bottom:"0", position: "fixed"}}>
            <div className="row pt-3 container mx-auto">
                <div className="col-2">
                    <div style={{textAlign:"center"}}>
                        <ion-icon size="large" name="logo-react"></ion-icon>
                    </div>
                </div>
                <div className="pt-1 col-8 ">
                    <p style={{textAlign:"center"}}>App made by students @SoyHenry</p>
                </div>
                <div className="col-2">
                    <div style={{textAlign:"center"}}>
                        <ion-icon size="large" name="logo-firebase"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}