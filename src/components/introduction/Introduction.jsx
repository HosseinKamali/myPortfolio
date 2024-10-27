import Container from "../container/Container";
import ProgressBar from "../Progressbar/progressbar";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";

const Introduction = () => {
  return (
    <Container>

      <section className="flex justify-around items-center h-screen w-full overflow-x-hidden max-sm:text-center  ">
      
        <div className="text-slate-50 ">
          <h1 className="text-6xl mb-5">Hossein Kamli Rousta</h1>
          <h2 className="text-3xl">Web Developer</h2>
          <div className="flex justify-center items-start flex-col mt-5 max-sm:items-center">
            <p>Email : h.k.r.web.developer@gmail.com</p>
            <a href="https://www.linkedin.com/in/hossein-kamali-rousta">
              linkedin / hossein-kamali-rousta </a>
            <a href="https://github.com/HosseinKamali">
              github / HosseinKamali </a>
         
          </div>
        </div>
        <div>
          <div className="w-[350px] h-[350px] border-2 border-white rounded-full p-3 max-sm:hidden ">
          
            <img
              className="w-full h-full rounded-full object-cover border-[1px] border-gray-600"
              src="https://www.shutterstock.com/image-photo/profile-side-view-his-he-600nw-1451794139.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Introduction;
