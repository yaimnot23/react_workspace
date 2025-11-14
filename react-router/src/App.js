import './App.css';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
