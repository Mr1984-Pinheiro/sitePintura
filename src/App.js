import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Serviços from "./pages/Serviços";
import Sobre from "./pages/Sobre";
import Fotos from "./pages/Fotos";


function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/serviços">
                    <Serviços />    
                </Route> 
               
                <Route path="/sobre">
                    <Sobre />
                </Route>
                <Route path="/fotos">
                    <Fotos />
                </Route>
                
            </Switch>
        </Layout>
    );
}

export default App;
