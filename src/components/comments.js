import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export default function Comments() {
  const [comentario, setComentario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [usuario, setUsuario] = useState({});
  const [anonimo, setAnonimo] = useState(false);
  const locally = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUsuario({
        nombre: user.displayName,
        foto: user.photoURL,
        email: user.email,
      });
    });
  }, []);

  function handleChangeTitle(e) {
    setTitulo(e.target.value);
  }

  function handleChange(e) {
    setComentario(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const db = getFirestore();
    db.collection("comentarios")
      .add({
        usuario,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        fecha: firebase.firestore.Timestamp.fromDate(new Date())
          .toDate()
          .toLocaleDateString(),
        comentario: comentario,
        titulo: titulo,
        like: 0,
        anonimo: anonimo
      })
      .then(function (docRef) {
        console.log(docRef.id);
        setUsuario({});
        setComentario("");
        setTitulo("");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    locally.push("/");
  }

  return (
    <div className="container contenedor-fotos">
      <h1 className="mt-5" style={{ textAlign: "center", color: "yellow" }}>
        Write your comment
      </h1>
      <form
        className="my-3"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "white", borderRadius: "8px" }}
      >
        <div className="row mx-auto my-5">
          <div className="col-12 mt-4 ">
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Title..."
              value={titulo}
              maxlength="40"
              onChange={handleChangeTitle}
            />
            <span style={{ float: "right" }}>{titulo.length}/40</span>
          </div>
          <div className="col-12 mt-4">
            <textarea
              style={{ width: "100%" }}
              type="text"
              value={comentario}
              maxlength="120"
              placeholder="Comment..."
              onChange={handleChange}
            />
            <span style={{ float: "right" }}>{comentario.length}/120</span>
          </div>
          <div class="form-check col-12 px-5">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              onChange={(evt)=>setAnonimo(evt.target.checked)}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">              
              Make your comment anonymously
            </label>
          </div>
          <div className="col-12 d-flex justify-content-center my-3">
            <button
              type="submit"
              disabled={titulo.length == 0 && "true"}
              className="btn p-2 botones-largos"
              style={{ backgroundColor: "yellow" }}
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => locally.push("/")}
          className="btn"
          style={{
            border: "2px solid white",
            color: "white",
            borderRadius: "6px",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
