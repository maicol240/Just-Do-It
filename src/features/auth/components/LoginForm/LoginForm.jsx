import TextInput from "../../../../lib/formik";
import { Formik, Form } from "formik";
import loginSchema from "../../schemas/loginSchema";
import { signIn } from "../../services/authServices";
import "./LoginForm.css";

export default function LoginForm({ onClose }) {
  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    try {
      const { user, error } = await signIn(email, password);

      if (user) {
        actions.resetForm();
        onClose();
      } else if (error) {
        // Pass the error message as the second argument
        actions.setFieldError("firebase", error.message);
      }
    } catch (e) {
      actions.setFieldError(
        "firebase",
        "An unexpected error occurred. Please try again.",
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, isSubmitting }) => (
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

          {/* This div will now correctly display the error message */}
          {errors.firebase && (
            <div className="error-message">{errors.firebase}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
