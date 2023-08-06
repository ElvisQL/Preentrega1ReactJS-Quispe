import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

const App = () => {
    return <>
        <NavBar/>
        <ItemListContainer greeting = "Hola Mundo"/>
        </>
}

export default App