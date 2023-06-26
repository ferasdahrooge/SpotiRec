import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className='About'>
      <div className='About__project'>
        <h1>About</h1>
        <br />
        <br />
        <p>
          A recommendation system that is designed to cater to your unique
          personality and preferences. Feel free to talk about anything.
          <br />
          <br />
          As our system analyzes your inputs to deliver the best music
          recommendations. Whether it's your mood, favorite genres, or specific
          artists, everything is taken into account to provide you with a
          personalized and enjoyable music experience.
        </p>
        <br></br>
        <br></br>
      </div>
      <div className='About__motive'>
        <h1>Motive</h1>
        <br />
        <br />
        <p>
          In a sea of music recommendation systems, our project stands apart by
          offering a truly personalized and intuitive experience.
          <br />
          <br />
          Unlike traditional approaches, I understand that your musical taste is
          as unique as you are. That's why I've developed a recommendation
          system that goes beyond generic algorithms and takes into account
          exactly what you want.
          <br />
          <br />
          With this platform, we aim to revolutionize the way people discover
          music by exploring new avenues and providing tailored recommendations
          that align with your individual preferences. Whether it's uncovering
          hidden gems, exploring new genres, or rediscovering forgotten
          classics, our system is here to accompany you on your musical journey.
          <br />
          <br />
          So sit back, relax, and let the power of our innovative recommendation
          engine guide you towards the perfect soundtrack for every moment of
          your life.
        </p>
      </div>
    </div>
  );
};

export default About;
