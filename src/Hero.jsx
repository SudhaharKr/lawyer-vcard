import CourtImages from "../src/assets/HC.jpg";
import MaryAnden from "../src/assets/Mary_Anden.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Appointment from "./Appointment";
import Serivices from "./Serivices";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import QRCode from "./QRCode";
import BusinessHours from "./BusinessHours";
import CreateCard from "./CreateCard";
const Hero = () => {
  return (
    <div className="relative">
      <img src={CourtImages} alt="Court Images" />
      <div className="flex justify-end -mt-14 -mb-10 bg-black text-white">
        <div className="flex items-center bg-white text-black rounded-l-full">
          <img
            src={MaryAnden}
            alt="Image"
            width={130}
            className="rounded-full"
          />
          <h2 className="pt-[2rem] text-4xl font-bold">Mary Anden</h2>
        </div>
      </div>
      <div className="w-screen bg-black min-h-96 py-16">
        <p className="flex w-full px-10 text-white w-96 text-wrap ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore
          quaerat iusto veniam assumenda quidem aut architecto magnam officiis
          laborum, odio facilis sed provident voluptatum. Obcaecati aliquam quae
          soluta labore, voluptates laborum repellat beatae, deserunt voluptatum
          quos, consequatur minima optio itaque. Perferendis fugit odit cumque
          consequatur sequi repellat possimus sint obcaecati vero corrupti omnis
          voluptatem veniam excepturi ut voluptate molestias officia a nesciunt
          optio, ipsa, alias explicabo nihil quia! Laboriosam ut amet, delectus
          quae cum tempore quos temporibus nulla eius in veritatis fugit
          necessitatibus maxime beatae, doloribus sed dolorum aut est ad?
          Incidunt nobis ad sed dolor harum sapiente inventore enim molestiae
          voluptatum possimus quos, pariatur deserunt, fugit ipsum architecto
          eveniet eaque optio expedita dignissimos ex ducimus distinctio
          consequatur magni repellendus! Iste, atque. Nisi reiciendis officiis
          alias, molestias odit delectus unde dolor eveniet sunt maxime
          exercitationem placeat accusamus at pariatur mollitia cum! Maxime
          consequatur alias aliquam ipsum sint non architecto.
        </p>
        <div className="flex text-white pt-10 justify-center gap-10 text-4xl">
          <FaFacebookF />
          <IoLogoWhatsapp />
          <FaLinkedinIn />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      <Appointment />

      <Serivices />

      <Gallery />

      <Testimonial />

      <QRCode />

      <BusinessHours />

      <CreateCard/>
    </div>
  );
};

export default Hero;
