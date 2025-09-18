import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import Modal from "../../features/auth/components/Modal/Modal";
import { LoginForm } from "../../features/auth/";
import "./Home.css";

const Home = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  //Handles login and signup button clicks
  const handleButtonClick = (setOpenModal) => () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Login Modal */}

      <Modal isOpen={loginIsOpen} onClose={() => setLoginIsOpen(false)}>
        {loginIsOpen && <LoginForm onSubmit={() => {}} />}
      </Modal>

      {/* SignUpModal */}

      <div className="home-container">
        <Header loginModal={handleButtonClick(setLoginIsOpen)} />
        <main className="main-content">
          <h1>Achieve More with Effortless Task Management</h1>
          <p>
            Just Do It – the ultimate to-do app that helps you stay on track
          </p>
          <button>Get Started</button>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
