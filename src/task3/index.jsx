import Signup from "./SignUp";
import image from "./assets/tanjiro.jpg";

const Task3 = () => {
  return (
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
  );
};

export default Task3;
