import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './App0805-1'
import App from './App0805-2'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式，所以呈現內容會跳兩次，如果不要跳兩次就把嚴謹模式註解掉
  <StrictMode>
    <App />
  </StrictMode>,
)
