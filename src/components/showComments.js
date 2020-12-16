import React, { useEffect, useState } from 'react'
import {getFirestore} from '../firebase'

export default function ShowComments(){
    const [comentarios, setComments] = useState([])
    const [loading, setLoad] = useState(false)

    useEffect(()=>{
        const db = getFirestore()
        const collection = db.collection("comentarios")
        collection.get()
        .then((querySnapshot) => {
            console.log(querySnapshot.docs[0].data())
            if (querySnapshot.size === 0) {
              console.log("No hay resultados");
            }
            setComments(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            setLoad(true)
          });
    },[loading])

    function handlerLike(comment){
        const db = getFirestore()
        const collection = db.collection("comentarios").doc(comment.id)
        .update({...comment, like: comment.like + 1})
        .then(r => setLoad(false))
        .catch(er => console.log("Error like"))
    }

    return( 
    <>
        { !loading ? (
            <div className="d-flex justify-content-center mt-3">
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            ) : (
        <div className="container my-3">
            <div className="contenedor-fotos mx-auto">
            <h2 style={{color:"yellow"}}>Comments</h2>
            {comentarios.map((comment)=>(
                <div key={comment.id} className="my-3 mx-2 row" style={{backgroundColor:"white", borderRadius:"8px", padding:"10px 0"}}>
                    <div className="col-4">
                        <img style={{borderRadius:"100%"}} src={comment.usuario.foto} alt={comment.usuario.nombre}/>
                    </div>
                    <div className="col-8">
                        <h4>{comment.usuario.nombre}</h4>
                        <p>{comment.usuario.email}</p>
                        <p style={{textAlign:"end"}}>{comment.fecha}</p>
                    </div>
                    <div className="col-12 pt-3">
                        <h5>{comment.titulo}</h5>
                    </div>
                    <div className="col-12">
                        <p>{comment.comentario}</p>
                    </div>
                    <div className="col-12">
                        <button onClick={() => handlerLike(comment)} className="btn" style={{float:"right"}}>
                            <ion-icon style={{color:"red"}} name="heart"></ion-icon> {comment.like}
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div> )}
    </>
    )
}