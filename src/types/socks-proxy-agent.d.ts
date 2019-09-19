declare module 'socks-proxy-agent' {
  import * as http from 'http';
  import * as tls from 'tls';

  interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
    rejectUnauthorized?: boolean;
    maxCachedSessions?: number;

    secureEndpoint: boolean;
    servername: string;
    host: string;
    hostname: string;
  }
  class Agent extends http.Agent {
    constructor(options: AgentOptions | string);
    options: AgentOptions;
  }
  export = Agent;
}
