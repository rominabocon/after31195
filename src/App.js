
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
