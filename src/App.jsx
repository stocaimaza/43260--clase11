//import ItemCount from "./componentes/ItemCount/ItemCount"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
            <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
            <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>

  )
}

export default App

/*
<TituloPrincipal titulo = {"Hola Comisión"} dia = {"martes"} />
<ItemCount/>


*/