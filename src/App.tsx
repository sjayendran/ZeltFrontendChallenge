import zeltLogo from './assets/zelt-logo.png'

import './App.css'

function App () {
  return (
    <div className="App">
      <div>
        <a href="https://zelt.app" target="_blank" rel="noreferrer">
          <img src={zeltLogo} className="logo" alt="Zelt logo" />
        </a>
      </div>
      <h3>Dashboard</h3>
      <div className="card">

      </div>
    </div>
  )
}

export default App
