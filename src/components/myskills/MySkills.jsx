import Container from "../container/Container";

const MySkills = () => {
    const Skill =[
        'Html 5 ',
        'Css 3',
        'JavaScript',
        'React js',
        'BootStrap',
        'Tailwin Css',
        'TypeScript',
        'Redux'

    ]
  return (
    
      <section className="text-white flex justify-center items-start flex-col max-sm:items-center mb-16">
     
      
        <h2 className="text-2xl font-semibold mb-5 ">My Skill</h2>
          <ul className="flex  justify-between items-center flex-wrap w-[60%] max-sm:w-[100%] max-sm:justify-center ">
           {
            Skill.map((item,index)=>(
                <li key={index} className="hover:text-amber-600 cursor-pointer mb-1 w-[40%] max-sm:w-[50%] max-sm:text-center  ">{item}</li>
            ))
           }
          </ul>
      
      </section>
    
  );
};

export default MySkills;
