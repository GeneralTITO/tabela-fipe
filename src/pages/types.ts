export interface Welcome1 {
  data: Datum[];
  status: number;
  statusText: string;
  headers: Welcome6Headers;
  config: Config;
  request: Request;
}
export interface Datum {
  id: number;
  brand: string;
}
export interface Welcome6Headers {
  "cache-control": string;
  "content-type": string;
}
export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Request;
  headers: ConfigHeaders;
  baseURL: string;
  method: string;
  url: string;
}
export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}
export interface ConfigHeaders {
  Accept: string;
  authorization: string;
  "Content-Type": null;
}
