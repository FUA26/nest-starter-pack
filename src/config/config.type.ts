export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
};

export type DatabaseConfig = {
  url: string;
  type: string;
  name: string;
  host: string;
  port: string;
  username: string;
  password: string;
  synchronize: boolean;
};

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
};
