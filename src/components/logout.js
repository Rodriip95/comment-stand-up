import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

export default function Logout(){
    const[showLogin, setShow] = useState(false)
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
              setShow(true)
          } else {
            setShow(false)
          }
        });
      }, []);

      function handlerLogout(){
        firebase
        .auth()
        .signOut()
        .then((result) => {
            console.log(result)
        })
        .catch((err) => console.log(err));
      }

    return(
        <>
        {showLogin &&
            <div className="d-flex justify-content-center mt-3">
                <button className="btn logout" style={{border:"2px solid yellow", color:"yellow"}} onClick={handlerLogout}>
                    Logout
                </button>
            </div>}
        </>
    )
}