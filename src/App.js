import React, { useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import History from "./components/History";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import './App.css';

function App() {
    const [ page, setPage ] = useState("/");

  return (
   <div>
    <BrowserRouter>
   <NavBar onChangePage={setPage} />
   <Switch>
       <Route path="/about">
           <About />
       </Route>
       <Route path="/history">
           <History />
       </Route>
       <Route exact path="/">
           <Home />
       </Route>
       <Route path="/movies/:id">
            <MovieDetail />
        </Route>
       <Route path="*">
           <h1>404 not found</h1>
       </Route>
   </Switch>
   </BrowserRouter>
</div>
  )

}
export default App;