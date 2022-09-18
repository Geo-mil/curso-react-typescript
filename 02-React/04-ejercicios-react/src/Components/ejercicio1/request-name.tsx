import * as React from "react";


type RequestNameProps = {
  onChange: (value: string) => void;
};

export const RequestName = ({ onChange }: RequestNameProps) => {
  const handlerChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <>
      <label htmlFor="inputName">Nombre </label>
      <input id="inputName" type="text" onChange={handlerChange} />
    </>
  );
};
