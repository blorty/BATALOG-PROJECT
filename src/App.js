import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import BatHome from "./components/BatHome";
import BatSearch from "./components/BatSearch";
import BatForm from "./components/BatForm";
import BatCard from "./components/BatCard";
import BatMovieDetail from "./components/BatMovieDetail";
import About from "./components/About";
import History from "./components/History";
import './App.css';

function App() {
  const [page, setPage] = useState("/");

  return (
    <div className="min-h-screen bg-gray-900">
      <BrowserRouter>
        <NavBar onChangePage={setPage} />
        <Switch>
          <Route path="/batform">
            <BatForm />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route exact path="/">
            <BatHome />
          </Route>
          <Route path="/movies/:id">
            <BatMovieDetail />
            {/* handleAdd={handleAdd} handleFavorite={handleFavorite} */}
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};
export default App;