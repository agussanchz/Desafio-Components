import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar category1={"Inicio"} category2={"Tienda"} category3={"Nosotros"}/>

      <Main greeting={"Bienvenidos a mi landing con React.js"}/>

    </>
  );
}

export default App;
