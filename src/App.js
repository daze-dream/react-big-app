import './App.css';
import HomePage from './page_components/homepage.components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ApothecaryPage = (props) =>{
  console.log(props)
  return(  <div>
    <h1>THIS IS WHERE THE POTIONS WOULD BE IF I HAD ANY</h1>
    <a href="/">HOME</a>
  </div>
  )

}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path='/' component={HomePage}></Route>
        <Route path='/shop/apothecary' component={ApothecaryPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
