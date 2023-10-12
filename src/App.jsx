import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/page/:id' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
