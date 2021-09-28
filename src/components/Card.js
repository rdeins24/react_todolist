import Button from "./Button";

export default function Card({projectName,status}) {
  return (
    <div>
      <h2>{projectName} </h2>
      <div>{status}</div>
      <Button text={`Open to view ${projectName} details`}   className="btn btn-primary" />
    </div>
  );
}
