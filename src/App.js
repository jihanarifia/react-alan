import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Array from "./pages/array";
import LinkedList from "./pages/linkedlist";
import Queue from "./pages/queue";
import Tree from "./pages/tree";
import Graph from "./pages/graph";
import Stack from "./pages/stack";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: "6981aac1c439beebba78b29f3941352b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, category }) => {
        console.log(category);
        if (command === "home") {
          window.location.replace("/");
        } else if (command === "goto") {
          window.location.replace("/read/" + category);
        }
      },
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/read/array" element={<Array />} />
        <Route path="/read/linkedlist" element={<LinkedList />} />
        <Route path="/read/stack" element={<Stack />} />
        <Route path="/read/queue" element={<Queue />} />
        <Route path="/read/tree" element={<Tree />} />
        <Route path="/read/graph" element={<Graph />} />
      </Routes>
    </Router>
  );
};

export default App;
