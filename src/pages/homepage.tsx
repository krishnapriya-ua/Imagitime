import {Button} from '@mui/material';
import '../assets/homepage.css';
import image from '../assets/image.png'
import kid from '../assets/Photo by Rameez Remy on Unsplash.jpeg'
import adult from '../assets/adult.jpeg'
import banner from '../assets/group.jpeg'
import ChooseBookSection from './books';

export default function Homepage() {
    return (
        <div
            className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
            <div className="top-banner text-center">
                We print and deliver across US, Canada, UK, Germany & India
            </div>

            <div className="logo-container text-center my-3">
                <img src={image} alt="Imagitime Logo" className="site-logo"/>
            </div>

            <nav className="navbar-custom d-flex justify-content-center gap-2 mb-4">
                <a href="#">Home</a>
                <a href="#">Section</a>
                <a href="#">Kids</a>
                <a href="#">Stories</a>
                <a href="#">Contact</a>
            </nav>

            <h1 className="main-heading">
                Make Them Feel Truly Special
            </h1>

            <p className="subtext">
                Unleash your creativity and dive into infinite worlds of imagination.<br/>
                Create, explore, and share stories that captivate minds and touch hearts.
            </p>

            <div className="btn-group-custom mb-2">
                <Button
                    variant="contained"
                    sx={{
                        background: 'linear-gradient(90deg, #b145f4, #ff2b91)',
                        borderRadius: 3,
                        color: '#fff',
                        px: 3,
                        py: 1.2,
                        fontSize: '1rem'
                    }}>
                    Create My Book
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        px: 3,
                        py: 1.2,
                        fontSize: '1rem',
                        color: '#fff',
                        borderColor: '#fff'
                    }}>
                    Learn More
                </Button>
            </div>
            <section className="buyer-section mt-5 text-center">
                <h2 className="section-heading mb-4">Who are you buying for?</h2>

                <div className="buyer-container mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-md-5 buyer-card kid-card">
                            <h3>KIDS</h3>
                            <img src={kid} alt="Kid" className="buyer-image"/>
                            <p>Delight young minds with colorful stories, fun adventures, and magical
                                characters.</p>
                            <Button variant="outlined" className="buyer-btn">Explore for Kids</Button>
                        </div>
                        <div className="col-md-5 buyer-card adult-card">
                            <h3>ADULTS</h3>
                            <img src={adult} alt="Adult" className="buyer-image"/>
                            <p>Craft thoughtful, meaningful, and personal stories perfect for grown-up hearts.</p>
                            <Button variant="outlined" className="buyer-btn">Explore for Adults</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ai-banner-section my-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={banner} alt="AI Storybook" className="banner-image img-fluid"/>
                        </div>
                        <div className="col-md-6 text-white text-md-start text-center">
                            <h2 className="banner-title mb-3">The only storybooks where they're the hero</h2>
                            <p className="banner-text mb-4">
                                Imagitime is the only company in the world that can help you turn a few photos
                                of your child into a beautifully illustrated story book, using Artificial
                                Intelligence.
                            </p>
                            <Button
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg, #b145f4, #ff2b91)',
                                    borderRadius: 3,
                                    color: '#fff',
                                    px: 3,
                                    py: 1.2,
                                    fontSize: '1rem'
                                }}>
                                Create My Child's Book
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ChooseBookSection/>
            </section>
                            
        </div>
    );
}
