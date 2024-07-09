import React, { useState, useEffect } from 'react'
import axios from 'axios'


export const Pagina1 = () => {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const ExtraerDatos = async () => {
    setCargando(true)
    setError(null)

    try {
      const respuesta = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e695b143dfa04cec89e0f4b0b5f6f6bc'
      )
      setDatos(respuesta.data.articles)
    } catch (error) {
      setError(error.message)
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => {
    ExtraerDatos()
  }, [])

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Ultimas Noticias</h2>
      {cargando && <p>Cargando...</p>}
      {error && <p className="text-danger">{error}</p>}
      {datos && (
        <div>
          <h2>Datos</h2>
          <div className="row">
            {datos.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Author: {item.author}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
export default Pagina1
