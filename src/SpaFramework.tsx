import React, { useEffect, useState } from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
// import logo from "./logo.svg";
import "./App.css";
import { configureClient } from "./auth/auth0Client";

function useAuth0(
  setErr: (e: string) => void
): {
  login: () => void;
  logout: () => void;
  getTokenWithPopup: (setToken: (a: string) => void) => Promise<void>;
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
        setErr(e);
      }
    }
    auth();
  }, []);

  function login() {
    console.log("login start");

    client?.loginWithPopup({});
    console.log("login done");
  }
  async function getTokenWithPopup(
    setToken: (a: string) => void
  ): Promise<void> {
    const token = await client?.getTokenWithPopup();
    setToken(token || "Not Yet");
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
          Token
        </button>
        <p>{token}</p>
      </div>
    </div>
  );
}

export default SpaFramework;
