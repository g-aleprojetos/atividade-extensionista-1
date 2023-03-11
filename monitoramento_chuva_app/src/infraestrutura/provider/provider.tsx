import axios from 'axios';
import rotasAPI from 'resources/rotasAPI';

export const api = axios.create({baseURL: rotasAPI.baseURL});
