import TextInput from "../../../../lib/formik";
import { Formik, Form } from "formik";
import loginSchema from "../../schemas/loginSchema";
import "./LoginForm.css";

export default function LoginForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      <Form className="form">
        <TextInput
          label="Email:"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <TextInput
          label="Password: "
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
