import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './Component/About';
import NavBar from './Component/NavBar';
import Skills from './Component/Skills';
import ErrorComponent from './Component/ErrorComponent';
import Experience from './Component/Experience';
import Footer from './Component/Footer';

function App() {
    return ( 
        <div className = "App py-14 px-4 sm:p-6 md:py-10 md:px-8" >
            <NavBar/>
            <Routes>
                <Route path ="/" element={<About/>}/>
                <Route path ="/skill" element={<Skills/>}/>
                <Route path ="/exp" element={<Experience/>}/>
                <Route path ="*" element={<ErrorComponent/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;