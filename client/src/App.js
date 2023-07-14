import { HomePage } from './Pages/HomePage'
import { Chickens } from './Pages/Chickens'
import { Pizza } from './Pages/Pizza'
import { Burgers} from './Pages/Burgers'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<HomePage />} />
        <Route path ='/chicken' element={<Chickens />} />
        <Route path ='/pizza' element={<Pizza />} />
        <Route path ='/burgers' element={<Burgers />} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
