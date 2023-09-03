import { ErrorMessage, Field, Form, Formik } from "formik";
import "./login.css";

export function Login() {
  return (
    <div className="container-form">
      <h1>Sign in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <label className="label-email">Email</label>
            <Field type="email" name="email" className="input" />
            <ErrorMessage name="email" component="div" className="error" />
            <label>Password</label>
            <Field type="password" name="password" className="input" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting} className="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
