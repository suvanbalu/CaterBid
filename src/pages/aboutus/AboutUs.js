import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import React from "react";
import { TbArrowBack } from "react-icons/tb";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import sivesh from "./team/sivesh.jpg";
const AboutUs = () => {
  let message = "This is a sample text sample sample sample sample sample";
  return (
    <React.Fragment>
      <Navbar />
      <section className="bg-gradient-to-b from-slate-800 to-slate-600 h-full w-full p-4 flex justify-center">
        <div className="container">
          <div className=" about_us_text text-black text-center">
            <h2 className="header bold text-4xl p-2">About Us</h2>
            <p className="section-subtitle text-2xl">{message}</p>
            <br></br>
          </div>

          <div className="main-grid grid grid-cols-3 text-center lg:grid-cols-5 m-4 h-fit w-full justify-center text-white">
            <TeamMemberDetail
              name="Ashwin V"
              organization={"PSG College of Technology"}
              content="Poda punda Poda punda Poda punda Poda pundaPoda punda Poda punda Poda punda"
              image={sivesh}
            />
            <TeamMemberDetail name="Nashita V" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;

const TeamMemberDetail = ({
  name,
  organization,
  githubLink = "",
  instaLink = "",
  linkedinLink = "",
  content = "",
  image = "",
}) => {
  return (
    <div className="ashwin team-item   shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 duration-100 flex flex-col items-center">
      <div
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="rounded-full m-5 w-44 h-44 aspect-square bg-white"
      />
      <br></br>
      <h3 className="Ashwin bold text-xl">{name}</h3>
      <div className="team-info italic">
        <p>{organization}</p>
      </div>
      <p>{content}</p>

      <div className="mt-4 flex justify-center py-2 px-20">
        <Link to={githubLink}>
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineGithub size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                Github
              </span>
            </div>
          </div>
        </Link>

        <Link to={instaLink}>
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineInstagram size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                Instagram
              </span>
            </div>
          </div>
        </Link>

        <Link to={linkedinLink}>
          <div>
            <div class="group relative w-max">
              <button>
                <AiOutlineLinkedin size={30} />
              </button>
              <span class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                Linkedin
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
