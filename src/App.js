import React,{useEffect} from 'react';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import {fetchPizzas, setLoader} from './redux/actions/pizzas';
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchPizzas())
  },[]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}
export default App



