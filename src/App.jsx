
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Admin from './Components/Admin';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      {/* localhost:3000 */}
      <Route path='/' element={<Admin/>}/>
      {/* localhost:3000/add */}
      <Route path='/add' element={<Add/>}/>
      {/* localhost:3000/view/7 */}
      <Route path='/view/:id' element={<View/>}/>
       {/* localhost:3000/edit/7 */}
       <Route path='/edit/:id' element={<Edit/>}/>
       {/* PageNotFound */}
       <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
