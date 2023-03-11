export interface ILoginResponse {
  auth: boolean;
  accessToken: string;
  refreshToken: IRefreshToken;
  mensagem?: string;
}

interface IRefreshToken {
  id: string;
  expiresIn: number;
  usuarioId: string;
}
