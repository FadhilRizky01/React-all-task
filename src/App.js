import "./App.css";
import ClassComponent from "./task1/ClassComponent";
import FunctionalComponent from "./task1/FunctionalComponent";
import Header from "./task2/Header";
import Navigation from "./task2/Navigation";
import Stack from "./task2/Stack";

function App() {
  return (
    <div className="App">
           {/* ========= TASK 1 SIMPLE COMPONENT ========= */}
      {/* <FunctionalComponent />  */}
      {/* <ClassComponent />  */}

      {/* ========= TASK 2 STYLING ========= */}
      <Navigation />
      <Header />
      <Stack />
    </div>
  );
}

export default App;
