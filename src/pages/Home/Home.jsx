import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1>Achieve More with Effortless Task Management</h1>
        <p>Just Do It – the ultimate to-do app that helps you stay on track</p>
        <button>Get Started</button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
