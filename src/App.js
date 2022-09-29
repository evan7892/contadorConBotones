import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/Products/ItemListContainer";
import FlexWrapper from "./components/FlexWrapper/FlexWrapper";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={
          <ItemListContainer />
        }/>
        <Route path="/category/:categoryProducto" element={
          <ItemDetailContainer />
        }/>
              <Route path="/producto/:id" element={
          <ItemDetailContainer />
        }/>
          <Route path="/category/ofertas" element= {
          <h2>Aún no tenemos ofertas disponibles para ti</h2>
        }/>
        <Route path="*" element={
          <h1>ERROR 404: TE PERDISTE GORDITO</h1>
        }/>
      </Routes>

      <FlexWrapper>
        <ItemCount initial={1} stock={3} />
      </FlexWrapper>
      <Footer />

      </BrowserRouter>
  );
}

export default App;
