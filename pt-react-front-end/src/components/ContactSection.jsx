export const ContactSection = ({ isNightMode }) => {
  return (
    <div
      className="contact row mt-5 align-items-start justify-content-center"
      style={{ backgroundColor: isNightMode ? '#333' : '' }}
    >
      <div className="col-12 col-md-3">
        <ul className=" list-unstyled">
          <h2>Sitio</h2>
          <li>
            <p>Inicio</p>
          </li>
          <li>
            <p>Nosotros</p>
          </li>
          <li>
            <p>Preguntas Frecuentes</p>
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-3">
        <ul className="list-unstyled">
          <h2>Contacto</h2>
          <li>
            <p>01 2345 5678</p>
          </li>
          <li>
            <p>mail@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
