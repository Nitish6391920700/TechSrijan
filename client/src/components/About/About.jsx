// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";
import text from "../Hero/text.png";
import ship from '../EventSection/iland.png'
import pirate from "./pirate.jpg"
const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            {/* <h2 className={classes.heading1}>SAMBHAV 23</h2> */}
            <img 
  src={text} 
  alt="" 
  style={{
    width: "100%", 
     
    
  }} 
/>
            <p className={classes.para}>
              TechSrijan is a technical festival offering a diverse range of events
              and competitions focused on technology and innovation. It provides
              a platform for individuals to showcase their skills, learn from
              others, and foster creativity, teamwork, and problem-solving
              abilities. By exposing attendees to the latest advancements in
              technology, Sambhav helps broaden their knowledge and skillset,
              making it a fun, engaging, and enriching experience for all
              attendees. Get ready to be a part of the biggest technical
              extravaganza of the year 2k24 – TechSrijan!
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={pirate} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
