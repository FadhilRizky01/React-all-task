import { useField, ErrorMessage } from "formik";
const TextField = ({ label, ...props }) => {
  /*sebenernya bisa kita bikin (props) gitu doang. Tapi karena props.label udah di pake dan gak mau di masukin lg ke dlm input. Makanya kita pake {label,...props} biar sisanya si name sama type nya aja yg kita taro di input*/
  const [field, meta] = useField(props);
  // console.log(field, meta); // buat cek di dlm nya ada method apa ajaa
  // console.log(props);
  /**/
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input className={`form-control shadow-non ${meta.touched && meta.error && "is-invalid"}`} autoComplete="off" {...field} {...props} />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default TextField;
