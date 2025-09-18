import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import Modal from "../../features/auth/components/Modal/Modal";
import { LoginForm } from "../../features/auth/";
import "./Home.css";

const Home = () => {
  const [loginIsOpen, setLoginIsOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginIsOpen(true);
  };

  return (
    <>
      <Modal isOpen={loginIsOpen} onClose={() => setLoginIsOpen(false)}>
        <LoginForm onSubmit={() => {}} />
      </Modal>
      <div className="home-container">
        <Header loginModal={handleLoginClick} />
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
