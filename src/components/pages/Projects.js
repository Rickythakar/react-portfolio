import React from 'react';
import Project from '../Project';

export default function Projects() {
  const projectData = [
    {
      title: "Password Generator",
      image: "insert link here",
      linkTitle: "App Link",
      link: "https://rickythakar.github.io/password-generator/",
      summary: "An application that enables users to generate random passwords based on criteria that they’ve selected"    },
    {
      title: "Note Taker",
      image: " ",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "A Note Taker app that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file."
    },
    {
      title: "Note Taker2",
      image: "",
      linkTitle: "App Link",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker3",
      image: "",
      linkTitle: "App Link",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker4",
      image: "",
      linkTitle: "App Link",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker5",
      image: "",
      linkTitle: "App Link",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "ASDFASD"
    },
  ]

  return (
    <div>
      <h1>My Projects</h1>
      <p>
      Here is some of my work
      </p>
      <div className='projectContainer' >
        {
          projectData.map((project) => <Project data={project} />)
        }
      </div>
    </div>
  );
}
