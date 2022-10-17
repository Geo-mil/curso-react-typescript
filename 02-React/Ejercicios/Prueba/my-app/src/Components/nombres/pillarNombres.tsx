import * as React from "react";
import usersFile from "./nombres.json"

type User = {
    nombre: string;
    apellido: string;
    fotito: string;
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
            nombre: user.name,
            apellido: user.surname,
            fotito: user.avatar,
          });
        }
      });
    }
    return users;
  };

type ShowUserProps = {
    user: User;
}

function formatName({user}: ShowUserProps){
    return <p>
        <b>{user.nombre + ' ' + user.apellido}</b>
        </p>
}

const ShowUser = ({ user }: ShowUserProps) => {
    return (
        <div className="show-user">
            <img src={user.fotito} alt={user.nombre} className="img-avatar" width="544" height="544"/>
            <br></br>
            {formatName({user})}
        </div>
    )
};

type ShowListUsersProps = {
    users: User[];
};

export const ShowListUsers = ({ users }: ShowListUsersProps) => {
    if (!users) return null;
    const usersToShow = users.map((user) => (
        <ShowUser key={user.nombre} user={user} />
    ));
    return <div>{usersToShow}</div>
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