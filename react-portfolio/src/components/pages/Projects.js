import React from 'react';
import Project from '../Project';
export default function Projects() {
  const projectData = [
    {
      title: "Password Generator",
      image: "insert link here",
      link: "https://rickythakar.github.io/password-generator/"
    },
    {
      title: "Note Taker",
      image: "",
      link: "https://cryptic-harbor-11261.herokuapp.com/"
    },
  ]


  return (
    <div>
      <h1>My Projects</h1>
      <p>
        Insert Github Projects here
      </p>
      {
        projectData.map((project) => <Project data={project} />)
      } 
    </div>
  );
}
