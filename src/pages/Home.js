import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import alanBtn from "@alan-ai/alan-sdk-web";

const Home = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    alanBtn({
      key: "6981aac1c439beebba78b29f3941352b2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, category }) => {
        console.log(category);
        if (command === "setCounter") {
          incrementCount();
        } else if (command === "home") {
          window.location.replace("/");
        } else if (command === "goto") {
          window.location.replace("/read/" + category);
        }
      },
    });
  }, []);

  return (
    <div style={{ marginTop: "5%", marginLeft: "10%" }}>
      <h1>Try AI Assistance with Alan AI in react</h1>
      <h3 pAlign="center" variant="h5" component="h3">
        Calculate Numbers
      </h3>

      <button onClick={incrementCount}>Click Me! </button>
      <h3 pAlign="center" variant="h5" component="h3">
        You clicked {count} times
      </h3>

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
