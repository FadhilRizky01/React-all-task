import "./App.css";
import ClassComponent from "./task1/ClassComponent";
import FunctionalComponent from "./task1/FunctionalComponent";
import Header from "./task2/Header";
import Navigation from "./task2/Navigation";
import Stack from "./task2/Stack";

import image from "./task3/assets/tanjiro.jpg";
import Signup from "./task3/SignUp";

function App() {
  return (
    <div className="App">
      {/* ========= TASK 1 SIMPLE COMPONENT ========= */}
      {/* <FunctionalComponent />  */}
      {/* <ClassComponent />  */}

      {/* ========= TASK 2 STYLING ========= */}
      {/* <Navigation />
      <Header />
      <Stack /> */}
      {/* ========= TASK 3 FORM VALIDATION ========= */}
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7">
            <img src={image} alt="" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
