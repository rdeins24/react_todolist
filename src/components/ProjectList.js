import Card from "./Card";

export default function ProjectList({ searchString = "" }) 

{
  let projectsArrayFromServer = [
    {
      id: 1,
      projectName: "Tekwill",
      delivered: false,
    },
    {
      id: 2,
      projectName: "Chisinau",
      delivered: true,
    },
    {
      id: 3,
      projectName: "Skytower",
      delivered: false,
    },
    {
      id: 4,
      projectName: "Oxford Circle",
      delivered: true,
    },
  ];

  let updatedArr = projectsArrayFromServer.filter((project) =>
    project.projectName.toLowerCase().includes(searchString.toLowerCase())
  );
  return (
    <div>
      <h1>List of Projects </h1>
      {updatedArr.map((project) => {
        return (
          <Card
            key={project.id}
            projectName={project.projectName}
            status={
              project.delivered ? "project is delivered" : "project is live"
            }
          />
        );
      })}
    </div>
  );
}

//same with destructoring

// projectsArrayFromServer.map(({projectName, delivered})=>{
//     return <Card projectName={projectName} status=
//     {delivered?"project is delivered" : "project is live"}/>;

// }

//auto incrrement
// uuid v4

// let updatedArr = projectsArrayFromServer.map((project) => {
//   project.projectName = project.projectName.toLowerCase();
//   return project;
// })
// .filter((project) => project.projectName.includes(searchString))
