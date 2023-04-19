import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Forside from './pages/Forside';
import Omos from './pages/Omos';
import Kontakt from './pages/Kontakt';
import Projekter from './pages/Projekter';
import Bookmøde from './pages/Bookmoede';
import AdminBooking from './pages/admin/AdminBooking';
import OpdaterBooking from './pages/admin/OpdaterBooking';
import OpretBooking from './pages/admin/OpretBooking';
import Bekræftigelse from './pages/Bekraeftigelse';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Nav/>
       <Routes>
         <Route path='/Forside' element={<Forside/>}/>
         <Route path='/omos' element={<Omos/>}/>
         <Route path='/kontakt' element={<Kontakt/>}/>
         <Route path='/projekter' element={<Projekter/>}/>
         <Route path='/bookmøde' element={<Bookmøde/>}/>
         <Route path='/bookinger' element={<AdminBooking/>}/>
        <Route path='/bookinger/posts/:postId' element={<OpdaterBooking/>}/>
        <Route path='/opretaftale' element={<OpretBooking/>}/>
        <Route path='/bekræftigelse' element={<Bekræftigelse/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
