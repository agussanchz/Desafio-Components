import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar category1={"Inicio"} category2={"Tienda"} category3={"Nosotros"}/>

      <ItemListContainer greeting={"Bienvenidos a mi landing con React.js"}/>      

      <ItemCount stock={0}/>
    </>
  );
}

export default App;
