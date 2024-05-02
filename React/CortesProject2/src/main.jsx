import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "@fontsource/roboto"
import "@fontsource/anta"
import './index.css'

/* the below import was from semantic ui */
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
