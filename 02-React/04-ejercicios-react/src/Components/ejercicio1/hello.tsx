import * as React from "react";
import { RequestName } from "./request-name";

type NameProps = {
  name: string;
};

const ShowName = ({ name }: NameProps) => {
  if (!name) return null;
  return <h2>{name}</h2>;
};


export const FormName = () => {
  const [name, setName] = React.useState("");
  return (
    <div>
      <RequestName onChange={setName} />
      <ShowName name={name} />
    </div>
  );
};

export default FormName;
