import Project from './Project.js'
export default function Portfolio(){
    const projects = [
        {
          name: "project 1",
          description: "MERN Stack",
          link: "https://google.com",
          repo: "https://github.com",
          image: "electronic.webp",
        },
        {
          name: "project 2",
          description: "MERN Stack",
          link: "https://github.com",
          repo: "https://github.com",
          image: "electronic.webp",
        },
      ];
    return (<div>
        <div className="d-flex">
          {projects.map((project) => (
            <Project project={project} key={"project=" + project.name} />
          ))}
        </div>
      </div>)
};