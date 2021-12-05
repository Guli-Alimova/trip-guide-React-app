import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Header from "./components/Header/Header" ;
import { Suspense, useState } from "react";
import HotelList from './pages/HotelList';
import Footer from './components/Footer/Footer';
import { ThemeContext, ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./styled";
import HotelDatails from "./pages/HotelDatails";
import ConfirmBook from "./pages/ConfirmBook";
import NotFound from "./pages/NotFound";

const App = () => {

  const [theme, toggleTheme] = useState('light');
  return (
    
<ThemeContext.Provider value={{theme, toggleTheme}}>
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
    <div className="App">
      <BrowserRouter>
      <Suspense fallback="loading">
      
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes> 
        <Routes>
          <Route path='/hotellist' element={<HotelList/>}/>
        </Routes> 
        <Routes>
          <Route path='/hoteldatails' element={<HotelDatails/>}/>
        </Routes> 
        <Routes>
          <Route path='/hotelconfirm' element={<ConfirmBook/>}/>
        </Routes> 
        <Routes>
          <Route path="*" element={<NotFound/>}/>
        </Routes> 
        <Footer/> 
</Suspense>
      </BrowserRouter>
    </div>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
