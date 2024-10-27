import AboutMe from "../../components/aboutMe/AboutMe";
import Footer from "../../components/footer/Footer";
import Introduction from "../../components/introduction/Introduction";
import MySkills from "../../components/myskills/MySkills";
import Projects from "../../components/projects/Projects";
import ScrollProgressBar from "../../components/ScrollProgressBar/ScrollProgressBar";

const Home = () => {
    return ( 
        <>
        
        <ScrollProgressBar/>
        <Introduction/>
        <AboutMe/>
        <Projects/>
        <Footer/>
        </>
     );
}
 
export default Home;