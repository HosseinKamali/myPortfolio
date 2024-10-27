import ArticleWeb from "../../assets/image/1.jpg"
import Container from "../container/Container";
import { useInView } from "react-intersection-observer";


const Article = () => {
  const { ref:move, inView :myImageOneIsVisible } = useInView({
    threshold: 0.5,
  });

    return ( 
        <section ref={move} className=" text-stone-50 overflow-x-hidden mb-16">
          <Container>
          <h2 className="text-4xl text-center mb-28">Projects</h2>
        <div className="flex justify-center items-center  max-sm:flex-col-reverse">
          <div className={`${myImageOneIsVisible ? "translate-x-0": "translate-x-[-260%]"} transition-all duration-500  w-[40%] `}>
            <h3 className="text-2xl font-semibold">Article Website</h3>
            <p className="w-[80%] mt-5 max-sm:w-[100%] max-sm:text-sm">
            This site was built using React and Tailwind CSS, ensuring a
             responsive design that adapts seamlessly across various devices.
              It offers a smooth user experience with fast load times and a modern, 
              clean aesthetic. Every element is optimized to provide a high-quality,
               interactive experience on both desktop and mobile platforms.
            </p>
          </div>
          <a href="https://hossein-kr-website.vercel.app/" className={`${myImageOneIsVisible ? "translate-x-0 max-sm:mb-16 ": "translate-x-[260%]"}  transition-all duration-500 w-[40%] max-sm:mb-16 max-sm:w-[70%]`}>
          <img src={ArticleWeb} alt="" /></a>
         
        </div>
          </Container>
      
      </section>
     );
}
 
export default Article;