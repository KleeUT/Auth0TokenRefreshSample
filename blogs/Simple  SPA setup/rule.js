/**
 This is not executed by any code here, nor is it deployed. It needs to be manually copied into a rule in an Auth0 tenant 
 */
function (user, context, callback) {
  // TODO: implement your rule\
  console.log("PRE-CHANGE",context);
  context.accessToken["https://boo/atcat"]= context.accessToken["https://boo/atcat"]+1;
  context.accessToken["https://boo/atfish"] = context.accessToken["https://boo/atfish"] ? context.accessToken["https://boo/atfish"]  + 1 : 1;
  context.idToken["https://boo/idcat"]= context.idToken["https://boo/idcat"]+1;
  context.idToken["https://boo/idfish"] = context.idToken["https://boo/idfish"] ? context.idToken["https://boo/idfish"]  + 1 : 1;
  return callback(null, user, context);
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////// Below here is a samle output ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV


let PRECHANGE =  { tenant: 'klee-test',
  clientID: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
  clientName: 'spatest',
  clientMetadata: {},
  connection: 'Username-Password-Authentication',
  connectionStrategy: 'auth0',
  connectionID: 'con_zJGslu9HjRC92W5s',
  connectionOptions: {},
  connectionMetadata: {},
  samlConfiguration: {},
  jwtConfiguration: {},
  protocol: 'oauth2-refresh-token',
  stats: { loginsCount: 5 },
  accessToken: {},
  idToken: {},
  request: 
   { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
     ip: '210.185.109.28',
     hostname: 'klee-test.au.auth0.com',
     body: 
      { redirect_uri: 'http://localhost:3000',
        client_id: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
        grant_type: 'refresh_token',
        refresh_token: 'v1.OEFdpjy0cNOMT5DAPGI0UwKG1zAZhsDHW8mdfxjatrhLIiTBPYZslF35rt7TAWYmvuRACN43BAbaGbU061aWl8M' },
     geoip: 
      { country_code: 'AU',
        country_code3: 'AUS',
        country_name: 'Australia',
        city_name: 'Sydney',
        latitude: -33.8591,
        longitude: 151.2002,
        time_zone: 'Australia/Sydney',
        continent_code: 'OC' } },
  authorization: { roles: [] } }

 var POSTCHANGE = { tenant: 'klee-test',
  clientID: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
  clientName: 'spatest',
  clientMetadata: {},
  connection: 'Username-Password-Authentication',
  connectionStrategy: 'auth0',
  connectionID: 'con_zJGslu9HjRC92W5s',
  connectionOptions: {},
  connectionMetadata: {},
  samlConfiguration: {},
  jwtConfiguration: {},
  protocol: 'oauth2-refresh-token',
  stats: { loginsCount: 5 },
  accessToken: { 'https://boo/atcat': NaN, 'https://boo/atfish': 1 },
  idToken: { 'https://boo/idcat': NaN, 'https://boo/idfish': 1 },
  request: 
   { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
     ip: '210.185.109.28',
     hostname: 'klee-test.au.auth0.com',
     body: 
      { redirect_uri: 'http://localhost:3000',
        client_id: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
        grant_type: 'refresh_token',
        refresh_token: 'v1.OEFdpjy0cNOMT5DAPGI0UwKG1zAZhsDHW8mdfxjatrhLIiTBPYZslF35rt7TAWYmvuRACN43BAbaGbU061aWl8M' },
     geoip: 
      { country_code: 'AU',
        country_code3: 'AUS',
        country_name: 'Australia',
        city_name: 'Sydney',
        latitude: -33.8591,
        longitude: 151.2002,
        time_zone: 'Australia/Sydney',
        continent_code: 'OC' } },
  authorization: { roles: [] } }

  let pc2 =  { tenant: 'klee-test',
  clientID: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
  clientName: 'spatest',
  clientMetadata: {},
  connection: 'Username-Password-Authentication',
  connectionStrategy: 'auth0',
  connectionID: 'con_zJGslu9HjRC92W5s',
  connectionOptions: {},
  connectionMetadata: {},
  samlConfiguration: {},
  jwtConfiguration: {},
  protocol: 'oauth2-refresh-token',
  stats: { loginsCount: 6 },
  accessToken: { 'https://boo/atcat': NaN, 'https://boo/atfish': 1 },
  idToken: { 'https://boo/idcat': NaN, 'https://boo/idfish': 1 },
  request: 
   { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
     ip: '210.185.109.28',
     hostname: 'klee-test.au.auth0.com',
     body: 
      { redirect_uri: 'http://localhost:3000',
        client_id: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
        grant_type: 'refresh_token',
        refresh_token: 'v1.MkODKeEzuVovMGZCZCkq6XwuL0KQOSwKVhtlEKm2vtKZ295iq7nDLmYH3aj4zilzkBZ_Pe359EUTNItQDdKtEXE' },
     geoip: 
      { country_code: 'AU',
        country_code3: 'AUS',
        country_name: 'Australia',
        city_name: 'Sydney',
        latitude: -33.8591,
        longitude: 151.2002,
        time_zone: 'Australia/Sydney',
        continent_code: 'OC' } },
  authorization: { roles: [] } }


  const loginEvent = { tenant: 'klee-test',
  clientID: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
  clientName: 'spatest',
  clientMetadata: {},
  connection: 'Username-Password-Authentication',
  connectionStrategy: 'auth0',
  connectionID: 'con_zJGslu9HjRC92W5s',
  connectionOptions: {},
  connectionMetadata: {},
  samlConfiguration: {},
  jwtConfiguration: {},
  protocol: 'oidc-basic-profile',
  stats: { loginsCount: 6 },
  sso: 
   { with_auth0: false,
     with_dbconn: false,
     current_clients: [ 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B' ] },
  accessToken: {},
  idToken: {},
  authentication: { methods: [ [Object] ] },
  sessionID: 'GPysNj9vz5tAgZX4SWtkXEuSse3JvlSc',
  request: 
   { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
     ip: '210.185.109.28',
     hostname: 'klee-test.au.auth0.com',
     query: 
      { client_id: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
        scope: 'openid profile email offline_access write:thething',
        audience: 'apitest',
        response_type: 'code',
        response_mode: 'web_message',
        state: 'Rk5HOEY4WTdKak0uU1lPRzY0ckd4MllxNDlzSzRyZ19xSjcwcm5wVlV6UA==',
        nonce: 'b19ra3ppNGFSb0Z0U0p2SU1tOWJpLk5kUWU2R2o1Y0tOQmVjSVNzMkU5Yg==',
        redirect_uri: 'http://localhost:3000',
        code_challenge: 'EFwWVcJHrIWTTNRB7zIiesAXioIO0rU-5Bhs7xHgXqs',
        code_challenge_method: 'S256',
        auth0Client: 'eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuOC4xIn0=' },
     body: {},
     geoip: 
      { country_code: 'AU',
        country_code3: 'AUS',
        country_name: 'Australia',
        city_name: 'Sydney',
        latitude: -33.8591,
        longitude: 151.2002,
        time_zone: 'Australia/Sydney',
        continent_code: 'OC' } },
  authorization: { roles: [] } }

  const refreshForThatLogin =  { tenant: 'klee-test',
  clientID: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
  clientName: 'spatest',
  clientMetadata: {},
  connection: 'Username-Password-Authentication',
  connectionStrategy: 'auth0',
  connectionID: 'con_zJGslu9HjRC92W5s',
  connectionOptions: {},
  connectionMetadata: {},
  samlConfiguration: {},
  jwtConfiguration: {},
  protocol: 'oauth2-refresh-token',
  stats: { loginsCount: 6 },
  accessToken: {},
  idToken: {},
  request: 
   { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
     ip: '210.185.109.28',
     hostname: 'klee-test.au.auth0.com',
     body: 
      { redirect_uri: 'http://localhost:3000',
        client_id: 'kGJxD5Xh1gSXknJeH6uV9cjadmkZKP0B',
        grant_type: 'refresh_token',
        refresh_token: 'v1.Mboc9v066xtT-LZO0nE43DwdL4Zo2cNvplx88oLLV5Uhl66aacySRwKfUgmHSWfLc5Ya5S4wyIiI4YSwF028bTI' },
     geoip: 
      { country_code: 'AU',
        country_code3: 'AUS',
        country_name: 'Australia',
        city_name: 'Sydney',
        latitude: -33.8591,
        longitude: 151.2002,
        time_zone: 'Australia/Sydney',
        continent_code: 'OC' } },
  authorization: { roles: [] } }