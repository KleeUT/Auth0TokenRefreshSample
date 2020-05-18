import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
} from "@auth0/auth0-spa-js";
export const auth0Config = {
  domain: "klee-test.au.auth0.com",
  clientId: "kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B",
};

export const configureClient = async (): Promise<Auth0Client> => {
  const options: Auth0ClientOptions = {
    domain: auth0Config.domain,
    client_id: auth0Config.clientId,
    useRefreshTokens: true,
    scope: "offline_access write:thething",
    audience: "apitest",
  };
  return new Auth0Client(options);
  // return await createAuth0Client(options);
};
