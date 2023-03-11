import {IDevice} from '../device';

export interface IDeviceResponse {
  devices?: IDevice[];
  error?: boolean;
  message?: string;
}
