import React, { useEffect, useState } from "react";
import {
  Auth0Client,
  PopupLoginOptions,
  PopupConfigOptions,
} from "@auth0/auth0-spa-js";
// import logo from "./logo.svg";
import "./App.css";
import { configureClient } from "./auth/auth0Client";
import decodeToken from "jwt-decode";

function RenderToken({ token }: { token: string | undefined }): JSX.Element {
  if (!token) {
    return <>No Token</>;
  }
  const decodedToken = decodeToken(token);
  return <>{JSON.stringify(decodedToken)}</>;
}
function useAuth0(
  setErr: (e: string) => void
): {
  login: () => Promise<void>;
  logout: () => void;
  getTokenWithPopup: (setToken: (a: string) => void) => Promise<void>;
  getTokenSilent: (setToken: (a: string) => void) => Promise<void>;
  getUser: (setUser: (a: string) => void) => Promise<void>;
  isAuthed: boolean;
} {
  const [client, setClient] = useState<Auth0Client>();
  const [isAuthed, setAuthed] = useState(false);
  console.log(new Date());
  useEffect((): void => {
    async function auth() {
      try {
        const auth0Client = await configureClient();
        setClient(auth0Client);
      } catch (e) {
        console.error(e);
      }
    }
    auth();
  }, []);

  async function login() {
    try {
      console.log("login start");
      // const opts: PopupLoginOptions = {};
      // const confs: PopupConfigOptions;
      await client?.loginWithPopup(undefined, { timeoutInSeconds: 15 });
      console.log("login done");
    } catch (e) {
      console.log(e);
    }
  }
  async function getTokenWithPopup(
    setToken: (a: string) => void
  ): Promise<void> {
    const token = await client?.getTokenWithPopup();
    setToken(token || "Not Yet");
  }
  async function getTokenSilent(setToken: (a: string) => void): Promise<void> {
    try {
      console.log("Shhhhh! need a token");
      const token = await client?.getTokenSilently();
      console.log("SHHH got token ");
      setToken(token || "Not Yet");
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    client?.logout();
  }
  async function getUser(setUser: (a: string) => void): Promise<void> {
    const user = await client?.getUser();
    setUser(JSON.stringify(user || "No User Yet "));
  }
  return {
    login,
    getTokenWithPopup,
    getTokenSilent,
    logout,
    isAuthed,
    getUser,
  };
}

function SpaFramework() {
  const [user, setUser] = useState<string>();
  const [token, setToken] = useState<string>();
  const [err, setErr] = useState("");
  const authProxy = useAuth0(setErr);
  return (
    <div className="App">
      <h1>Hello</h1>
      <p style={{ color: "red" }}>{err}</p>
      <button onClick={authProxy.login}>Login</button>
      <button>Refresh</button>
      <button onClick={authProxy.logout}>Logout</button>
      <hr />
      <div>
        <h1>User</h1>
        <button
          onClick={() => {
            authProxy.getUser(setUser);
          }}
        >
          Get
        </button>
        <p>{JSON.stringify(user)}</p>
      </div>
      <div>
        <h1>Token</h1>
        <button onClick={() => authProxy.getTokenWithPopup(setToken)}>
          Token Popup
        </button>
        <button onClick={() => authProxy.getTokenSilent(setToken)}>
          Token Silent
        </button>
        <p>{token}</p>
        <RenderToken token={token} />
      </div>
    </div>
  );
}

export default SpaFramework;
