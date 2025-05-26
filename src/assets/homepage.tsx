
import { Button } from '@mui/material';
import './homepage.css';
import image from './image.png'

export default function Homepage() {
  return (
    <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
       <div className="top-banner text-center">
        We print and deliver across US, Canada, UK, Germany & India
      </div>

      {/* Logo */}
      <div className="logo-container text-center my-3">
        <img src={image} alt="Imagitime Logo" className="site-logo" />
      </div>

      {/* Navbar */}
      <nav className="navbar-custom d-flex justify-content-center gap-4 mb-4">
        <a href="#">Home</a>
        <a href="#">Section</a>
        <a href="#">Kids</a>
        <a href="#">Stories</a>
        <a href="#">Contact</a>
      </nav>
      <div className="welcome-badge">
      
      </div>

      <h1 className="main-heading">
        Where Stories <span className="gradient-text">Come Alive</span>
      </h1>

      <p className="subtext">
        Unleash your creativity and dive into infinite worlds of imagination.<br />
        Create, explore, and share stories that captivate minds and touch hearts.
      </p>

      <div className="btn-group-custom">
        <Button className="start-btn">✨ Start Creating</Button>
        <Button className="secondary-btn" variant="outlined">Learn More</Button>
      </div>
    </div>
  );
}
