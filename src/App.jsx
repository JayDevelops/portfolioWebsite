// import react-router-dom and .jsx pages/components below
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Tech, Navbar, Works, StarsCanvas, Feedbacks, FooterBar } from './components'
import {Analytics} from "@vercel/analytics/react";

// Main app will be rendered all here
const App = () => {
    return(
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>

                {/* Page sections all below */}
                <About />
                <Experience />
                <Tech />
                <Works />
                {/*ONCE I GET TESTIMONIALS, INSERT BELOW*/}
                {/*<Feedbacks />*/}
                {/* 3D stars for inner div below */}
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
                <FooterBar />
            </div>
            <Analytics />
        </BrowserRouter>
    )
}
export default App