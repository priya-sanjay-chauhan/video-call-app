import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import RoomPage from './pages/Room/RoomPage'

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/room/:roomId' element={<RoomPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
