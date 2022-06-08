// import { logRoles } from '@testing-library/react';
import React from 'react';
import Project from '../Project';

export default function Projects() {
  const projectData = [
    {
      title: "Password Generator",
      image: "insert link here",
      linkTitle: "asdf",
      link: "https://rickythakar.github.io/password-generator/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker",
      image: "",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker2",
      image: "",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker3",
      image: "",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker4",
      image: "",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
    {
      title: "Note Taker5",
      image: "",
      linkTitle: "asdf",
      link: "https://cryptic-harbor-11261.herokuapp.com/",
      summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi neque placeat veritatis molestias porro impedit numquam consequatur voluptas perspiciatis, distinctio obcaecati nostrum nam repellat nobis quae veniam non sapiente quibusdam!"
    },
  ]

  return (
    <div>
      <h1>My Projects</h1>
      <p>
        Insert Github Projects here
      </p>
      <div className='projectContainer' >
        {
          projectData.map((project) => <Project data={project} />)
        }
      </div>
    </div>
  );
}
