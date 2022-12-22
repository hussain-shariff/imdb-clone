import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopRated from "./components/MoviesList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element = { <Home/> }></Route>
          <Route path="movie/:id" element = { <h1>movie detailed page</h1> }></Route>
          <Route path="movies/:type" element = { <TopRated/> }></Route>
          <Route path="/*" element = { <h1>error</h1> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
