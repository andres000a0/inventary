import "../Styles/Login.css";
import "./DomLogin.js";

function App() {
  return (
    <div className="App">
      <form class="areaLogin" action="" method="GET" id="formulario">
        <h2>Vaqui-Net</h2>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Usuario</label>
        </div>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Contraseña</label>
        </div>
        <div class="dropdown">
          <div class="select">
            <span class="selected">Sede</span>
            <div class="caret"></div>
            <ul class="menu">
              <li>La 33</li>
              <li>Poblado</li>
              <li>Sabaneta Central</li>
              <li>Sabaneta Parque</li>
              <li>Prado</li>
              <li>San Cristobal</li>

              <li>Rionegro</li>
              <li>Administrador</li>
            </ul>
          </div>
        </div>
        <button class="btn-submit">Ingresar</button>
      </form>
    </div>
  );
}
export default App;
