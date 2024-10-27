import bathAndBodyWeb from "../../assets/image/2.jpg";
import Container from "../container/Container";
import { useInView } from "react-intersection-observer";

const BathAndBody = () => {
  const { ref:move, inView :myImageOneIsVisible } = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={move} className=" flex justify-center items-center  overflow-x-hidden  text-stone-50">
      
      <Container>
      
        <div className="flex justify-around items-center max-sm:flex-col">
        
          <a
            href="https://hossein-web-site-two.vercel.app/"
            className={`${myImageOneIsVisible ? "translate-x-0 max-sm:mb-16": "translate-x-[-260%]"} w-[44%] max-sm:w-[70%] transition-all duration-500 max-sm:mb-16`} >
            <img src={bathAndBodyWeb} alt="" className="w-full h-full" />
          </a>
          <div className={`${myImageOneIsVisible ? "translate-x-0 ": "translate-x-[260%]"} w-[40%] transition-all duration-500`}>
          
            <h2 className="text-2xl font-semibold">Relaxing Website</h2>

            <p className="w-[70%] mt-5 max-sm:text-sm max-sm:w-[100%]">
            

            This site was built using React and Tailwind CSS, ensuring a
             responsive design that adapts seamlessly across various devices.
              It offers a smooth user experience with fast load times and a modern, 
              clean aesthetic. Every element is optimized to provide a high-quality,
               interactive experience on both desktop and mobile platforms.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BathAndBody;
