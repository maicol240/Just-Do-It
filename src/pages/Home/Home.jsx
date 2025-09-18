import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import Modal from "../../features/auth/components/Modal/Modal";
import { LoginForm, SignUpForm } from "../../features/auth/";
import "./Home.css";

const Home = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);

  //Handles login and signup button clicks to show modals
  const handleButtonClick = (setOpenModal) => () => {
    setOpenModal(true);
  };

  //closes modal on form submission
  const onSubmitCloseModal = (setOpenModal) => () => {
    setOpenModal(false);
  };

  return (
    <>
      {/* Login Modal */}

      <Modal isOpen={loginIsOpen} onClose={() => setLoginIsOpen(false)}>
        {loginIsOpen && (
          <LoginForm onClose={onSubmitCloseModal(setLoginIsOpen)} />
        )}
      </Modal>

      {/* SignUpModal */}

      <Modal isOpen={signUpIsOpen} onClose={() => setSignUpIsOpen(false)}>
        {signUpIsOpen && (
          <SignUpForm onClose={onSubmitCloseModal(setSignUpIsOpen)} />
        )}
      </Modal>

      <div className="home-container">
        <Header
          loginModal={handleButtonClick(setLoginIsOpen)}
          signUpModal={handleButtonClick(setSignUpIsOpen)}
        />
        <main className="main-content">
          <h1>Achieve More with Effortless Task Management</h1>
          <p>
            Just Do It – the ultimate to-do app that helps you stay on track
          </p>
          <button onClick={handleButtonClick(setSignUpIsOpen)}>
            Get Started
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
