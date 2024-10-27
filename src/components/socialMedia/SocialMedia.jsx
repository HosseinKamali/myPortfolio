import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const SocialMedia = () => {
    return ( 
       <ul className="text-stone-50 flex flex-col justify-center items-center max-sm:flex-row">
        <li><FaInstagram size={30} className="hover:text-pink-400 mb-4 cursor-pointer"/></li>
        <li><ImFacebook2 size={27} className="hover:text-blue-600 mb-4 cursor-pointer"/></li>
        <li><FaLinkedin size={30} className="hover:text-blue-900 mb-4 cursor-pointer"/></li>
        <li><FaWhatsappSquare size={30} className="hover:text-green-600 cursor-pointer max-sm:mb-4"/></li>
       </ul>
     );
}
 
export default SocialMedia;