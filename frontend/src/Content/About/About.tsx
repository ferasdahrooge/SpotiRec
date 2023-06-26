import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className='About'>
      <h1> About </h1>
      <br></br>
      <p>
        A recommendation system that is designed to cater to your unique
        personality and preferences. Feel free to talk about anything.
        <br />
        As our system analyzes your inputs to deliver the best music
        recommendations. Whether it's your mood, favorite genres, or specific
        artists, everything is taken into account to provide you with a
        personalized and enjoyable music experience
      </p>
    </div>
  );
};

export default About;
