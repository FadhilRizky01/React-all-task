import { Form, Formik } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
const Signup = () => {
  // Buat ini sialisasi validationnya
  const validate = Yup.object({
    firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 charaters").required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Password must match")
    //   .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // confirmPassword: "",
      }}
      // Cara makenya cuman
      validationSchema={validate}
      onSubmit={(values) => {
        alert(JSON.stringify(`Hellp ${values.firstName} ${values.lastName} Welcome in our page. Your Email is ${values.email} Thank You : ) `));
      }}
    >
      {/* BUAT CEK ADA METHOD APA AJA DI FORMIK */}
      {/* {(formik) => {
        console.log(formik);
      }} */}
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            {/* text field nya di bikin komponen terpisah  */}
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            {/* <TextField label="Confirm Password" name="ConfirmPassword" type="password" /> */}
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;