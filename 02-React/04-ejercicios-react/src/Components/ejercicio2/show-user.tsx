import * as React from "react";
import usersFile from "./users.json";
import "./styles.css";
type User = {
  name: string;
  surname: string;
  avatar: string;
};

const parseUsers = () => {
  const users: User[] = [];
  if (Array.isArray(usersFile)) {
    usersFile.forEach((user) => {
      if (
        typeof user.name === "string" &&
        typeof user.surname === "string" &&
        typeof user.avatar === "string"
      ) {
        users.push({
          name: user.name,
          surname: user.surname,
          avatar: user.avatar,
        });
      }
    });
  }
  return users;
};

type ShowUserProps = {
  user: User;
};

const ShowUser = ({ user }: ShowUserProps) => {
  return (
    <div className="show-user">
      <h2 style={{ backgroundColor: "tomato" }}>
        <p style={{ color: "white" }}>
          {" "}
          <span style={{ color: "blue" }}>Nombre :</span> {user.name}
        </p>{" "}
        Apellido: {user.surname}
      </h2>
      <img src={user.avatar} alt={user.name} className="img-avatar" />
    </div>
  );
};

type ShowListUSersProps = {
  users: User[];
};
export const ShowListUsers = ({ users }: ShowListUSersProps) => {
  if (!users) return null;
  const usersToShow = users.map((user) => (
    <ShowUser key={user.name} user={user} />
  ));
  return <div>{usersToShow}</div>;
};
type EmptyListProps = {
  show: boolean;
  message: string;
};
export const EmptyList = ({ show, message }: EmptyListProps) => {
  if (!show) return null;
  return <h2>{message}</h2>;
};

export const ShowUserComponent = () => {
  const users = parseUsers();
  const hasNoUsers = users.length === 0;
  const noUsersMessage = "No hay usuarios disponibles";

  return (
    <div>
      <ShowListUsers users={users} />
      <EmptyList show={hasNoUsers} message={noUsersMessage} />
    </div>
  );
};
