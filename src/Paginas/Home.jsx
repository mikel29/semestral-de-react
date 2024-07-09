import React from 'react'


export const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center bg-primary text-white">
        <h1 className="display-4">Bienvenidos a Nuestra Página</h1>
        <p className="lead">Explora las últimas noticias con nuestra API</p>
        <hr className="my-4" />
        <p className="mb-0">Desarrollada con amor por:</p>
      </div>
      <div className="row mt-4">
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Miguel Veces</h5>
              <p className="card-text">Desarrollador </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Luis Ramos</h5>
              <p className="card-text">Desarrollador</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nibar Crespo</h5>
              <p className="card-text">Desarrollador</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Antony Medina</h5>
              <p className="card-text">Desarrollador</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
