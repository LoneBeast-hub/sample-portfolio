// Components
import Header from "../../components/headerSection/header.component";
import Hero from "../../components/heroSection/hero.component";
import About from "../../components/aboutSection/about.component";
import Portfolio from "../../components/portfolio/portfolio.component";
import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;