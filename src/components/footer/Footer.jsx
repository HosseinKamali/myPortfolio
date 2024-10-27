import Container from "../container/Container";
import Education from "../education/Education";
import MySkills from "../myskills/MySkills";
import SocialMedia from "../socialMedia/SocialMedia";

const Footer = () => {
  
  return (
    <Container>
      <div className="flex justify-around items-center h-auto max-sm:flex-col py-20">
      <Education />
        <MySkills />
        
        <SocialMedia/>

      </div>
   
    </Container>
  );
};

export default Footer;
