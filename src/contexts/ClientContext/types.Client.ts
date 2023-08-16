export interface IClient {
  id: string;
  email: string;
  userPermission: {
    id: number;
    type: string;
  };
}

export type ClientContexType = {
  client: IClient;
};
