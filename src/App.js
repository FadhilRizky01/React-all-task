import "./App.css";
import Task1 from "./task1";
import Task2 from "./task2";
import Task3 from "./task3";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Task4 from "./task4";

function App() {
  return (
    <div className=" mx-12 my-7">
      <Router className="mb-7">
        <Link to="/" className="text-slate-700 no-underline hover:bg-zinc-800 hover:text-white hover:rounded-xl hover:pr-3 pl-3 pt-1 pb-1">
          Home{" "}
        </Link>
        <Link to="/task1" className="text-slate-700 no-underline hover:bg-zinc-800 hover:text-white hover:rounded-xl hover:pr-3 pl-3 pt-1 pb-1">
          Task 1{" "}
        </Link>
        <Link to="/task2" className="text-slate-700 no-underline hover:bg-zinc-800 hover:text-white hover:rounded-xl hover:pr-3 pl-3 pt-1 pb-1">
          Task 2{" "}
        </Link>
        <Link to="/task3" className="text-slate-700 no-underline hover:bg-zinc-800 hover:text-white hover:rounded-xl hover:pr-3 pl-3 pt-1 pb-1">
          Task 3{" "}
        </Link>
        <Link to="/task4" className="text-slate-700 no-underline hover:bg-zinc-800 hover:text-white hover:rounded-xl hover:pr-3 pl-3 pt-1 pb-1">
          Task 4{" "}
        </Link>
        <Routes className="w-full">
          <Route path="/task1" element={<Task1 />}></Route>
          <Route path="/task2" element={<Task2 />}></Route>
          <Route path="/task3" element={<Task3 />}></Route>
          <Route path="/task4" element={<Task4 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
