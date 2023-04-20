import { useState } from 'react'
import './App.css'
import { ContactSection } from './components/ContactSection'
import { OptionsMenu } from './components/OptionsMenu'
import { SelectionMenu } from './components/SelectionMenu'
import { mountain, peopletalking } from './images/images'

function App() {
  const [isNightMode, setIsNightMode] = useState(false)

  return (
    <div className={`${isNightMode ? 'night-mode' : ''}`}>
      <div className="container-fluid">
        <div
          className="header row py-4"
          style={{ backgroundColor: isNightMode ? '#333' : '' }}
        >
          <div className="col-12">
            <h1 className="text-truncate">Centro de Seguros - Grupo Promass</h1>
            <h2 className="text-truncate">Prueba técnica - Frontend</h2>
          </div>
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            style={{
              backgroundColor: isNightMode ? '#333' : '#fff',
              color: isNightMode ? '#fff' : '#333',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            {isNightMode ? 'Disable Night Mode' : 'Enable Night Mode'}
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="column mt-4">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 position-relative">
            <div className="position-absolute p-3">
              <h3 className="text-white">Sientete seguro en todo momento</h3>
              <p className="text-white">
                Contrata tu seguro y comienza tu proteccion hoy mismo
              </p>
            </div>
            <img
              src={mountain}
              alt=""
              className="img-fluid rounded shadow shadow-lg"
            />
          </div>
        </div>

        <OptionsMenu />
      </div>

      {/* image2 */}
      <div className="contenedor row mt-5  position-relative">
        <div className="position-absolute text-container">
          <h2 className="text-white">Subtítulo 4</h2>
          <p className="text-white">Lorem ipsum dolor amet</p>
        </div>
        <img
          src={peopletalking}
          alt=""
          className=" img-fluid"
          style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
        />
      </div>

      <SelectionMenu />

      <ContactSection isNightMode={isNightMode} />

      <footer
        className="footer row"
        style={{ backgroundColor: isNightMode ? '#1a1a1a' : '' }}
      >
        <div className="col-12">
          <h5>Centro de Seguros - Grupo Promass</h5>
        </div>
      </footer>
    </div>
  )
}

export default App
