import TextInput from "../../../../lib/formik";
import { Formik, Form } from "formik";
import signUpSchema from "../../schemas/signUpSchema";
import "./SignUpForm.css";

export default function SignUpForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      <Form className="form">
        <TextInput
          label="Name:"
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        <TextInput
          label="Email:"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
        <TextInput
          label="Password:"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Enter your password"
        />
        <TextInput
          label="Confirm Password:"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm your password"
        />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
}
