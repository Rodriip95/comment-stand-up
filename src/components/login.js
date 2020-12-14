import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { useHistory } from 'react-router-dom';

export default function Login(){

    const[showLogin, setShow] = useState(false)
    const locally = useHistory()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if(user){
              setShow(true)
          } else {
            setShow(false)
          }
        });
      }, []);

    function handlerLogin(){
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then( result => console.log(result.user))
        .catch( err => console.log(err))
    }
    return(
        <>
            {!showLogin ? (
                <div className="d-flex justify-content-center">
                    <button onClick={handlerLogin} className="btn p-2" style={{backgroundColor:"yellow", width:"70%"}}>
                        <ion-icon name="logo-google"/> <span> Sign in with Google</span>
                    </button>
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <button className="btn p-2" style={{backgroundColor:"yellow", width:"70%"}} onClick={()=>locally.push('/comment')}>
                        Write comment
                    </button>
                </div>
            ) }
        </>
    )
}