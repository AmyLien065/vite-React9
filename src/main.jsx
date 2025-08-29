import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './App0805-1'
// import App from './App0805-2'
// import App from '../pages/App0806-1'
// import App from '../pages/App0806-2'
// import App from '../pages/App0806-3'
import App from './pages/App0826-toolTip.jsx'
// import App from './MyApp'
import { HashRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  // 嚴謹模式，所以呈現內容會跳兩次，如果不要跳兩次就把嚴謹模式註解掉
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </StrictMode>,
)
