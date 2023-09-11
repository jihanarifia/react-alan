import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div style={{ marginTop: "5%", marginLeft: "10%" }}>
      <h1>Try AI Assistance with Alan AI in react</h1>
      <h3 pAlign="center" variant="h5" component="h3">
        Try saying "Open page"
      </h3>

      <div>
        <Link to={"/read/array"} className="p">
          <p variant="h5" component="h5">
            Array
          </p>
        </Link>
        <Link to={"/read/linkedlist"} className="p">
          <p variant="h5" component="h5">
            LinkedList
          </p>
        </Link>
        <Link to={"/read/stack"} className="p">
          <p variant="h5" component="h5">
            Stack
          </p>
        </Link>
        <Link to={"/read/queue"} className="p">
          <p variant="h5" component="h5">
            Queue
          </p>
        </Link>
        <Link to={"/read/tree"} className="p">
          <p variant="h5" component="h5">
            Tree
          </p>
        </Link>
        <Link to={"/read/graph"} className="p">
          <p variant="h5" component="h5">
            Graph
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
