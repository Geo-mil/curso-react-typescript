import * as React from "react";
import { RequestName } from "../ejercicio1/request-name";
export function Repo() {
  const [name, setName] = React.useState("");
  const [githubUser, setGithubUser] = React.useState(name);
  return (
    <>
      <GithubProfile name={githubUser} />
      <RequestName onChange={setName} />
      <button onClick={() => setGithubUser(name)}>CLICK</button>
    </>
  );
}

type GithubProfileProps = {
  name: string;
};

function useGetGithubProfile(name: string) {
  const [userData, setUserData] = React.useState<User>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [failedRequest, setFailedRequest] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    fetchData(name)
      .then((githubUser) => {
        setUserData(githubUser);
        setIsLoading(false);
      })
      .catch((error) => {
        setFailedRequest(true);
      });
  }, [name]);

  return { isLoading, failedRequest, userData };
}

function GithubProfile({ name }: GithubProfileProps) {
  const { userData, isLoading, failedRequest } = useGetGithubProfile(name);
  return (
    <>
      <LoadingData show={isLoading} />
      <FailedRequest show={failedRequest} />
      <GithubProfileData user={userData} />
    </>
  );
}

type LoadingDataProps = {
  show: boolean;
};
function LoadingData({ show }: LoadingDataProps) {
  if (!show) return null;
  return <h1>Loading...</h1>;
}

type FailedRequestProps = {
  show: boolean;
};
function FailedRequest({ show }: LoadingDataProps) {
  if (!show) return null;
  return <h1>Failed Request</h1>;
}

type GithubProfileDataProps = {
  user: User | undefined;
};
function GithubProfileData({ user }: GithubProfileDataProps) {
  if (!user) return null;
  return (
    <>
      <h1>Usuario: {user.name}</h1>
      <h1>Compañía que nos va a pagar: {user.company}</h1>
      <h1>Lameculos: {user.followers}</h1>
      <img src={user.avatar} alt="" />
    </>
  );
}

function fetchData(name: string) {
  return fetch(`https://api.github.com/users/${name}`, {
    method: "GET",
    headers: {
      authorization: "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",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((profile) => {
      return {
        name: profile.name,
        avatar: profile.avatar_url,
        company: profile.company,
        followers: profile.followers,
      };
    });
}

type User = Awaited<ReturnType<typeof fetchData>>;
