import TextInput from "../../../../lib/formik";
import { Formik, Form } from "formik";
import signUpSchema from "../../schemas/signUpSchema";
import "./SignUpForm.css";
import { signUp } from "../../services/authServices";

export default function SignUpForm({ onClose }) {
  const onSubmit = async (values, actions) => {
    const { name, email, password } = values;
    try {
      // Assuming signUp returns { user, error: { code, message } } on failure
      const { user, error } = await signUp(name, email, password);

      if (user) {
        actions.resetForm();
        onClose();
      } else if (error) {
        // ✅ Refined Error Handling
        if (error.code === "auth/email-already-in-use") {
          // Attach the error directly to the email field
          actions.setFieldError(
            "email",
            "This email is already registered. Please sign in.",
          );
        } else {
          // Display other errors in a general message area
          actions.setFieldError("firebase", error.message);
        }
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
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      {({ errors, isSubmitting }) => (
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

          {/* Display the general Firebase error message here */}
          {errors.firebase && (
            <div className="error-message">{errors.firebase}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
