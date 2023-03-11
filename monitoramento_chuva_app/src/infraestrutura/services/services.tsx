import {api} from '../provider';

async function getAllFrom(url: string) {
  try {
    const {status, data} = await api.get(url);
    if (status !== 200) {
      throw new Error();
    }
    return {status, data};
  } catch (error) {
    return {status: 400, data: []};
  }
}

async function getFrom<Ttype>(url: string) {
  let status, data;
  await api
    .get<Ttype>(url)
    .then(response => {
      status = response.status;
      data = response.data;
    })
    .catch(error => {
      status = error;
    });
  return {status: status as unknown as number, data: data as unknown as Ttype};
}

async function postInto<Ttype>(url: string, obj: any) {
  let status, data;
  await api
    .post(url, obj)
    .then(response => {
      status = response.status;
      data = response.data;
    })
    .catch(error => {
      if (!error?.response) {
        status = 500;
      } else {
        status = error.response.status;
        data = error.response.data;
      }
    });
  return {status: status as unknown as number, data: data as unknown as Ttype};
}

async function putInto<Ttype>(url: string, obj: any) {
  let status, data;
  await api
    .put(url, obj)
    .then(response => {
      status = response.status;
      data = response.data;
    })
    .catch(error => {
      error.response ? (status = error.response.status) : (status = 503);
    });
  return {status: status as unknown as number, data: data as unknown as Ttype};
}

async function deleteThis(url: string, id: string, deletadoPor: string) {
  let status;
  await api
    .delete(url, {data: {id, deletadoPor}})
    .then(response => {
      status = response.status;
    })
    .catch(error => {
      error.response ? (status = error.response.status) : (status = 503);
    });
  return status as unknown as number;
}

export const services = {
  getAllFrom,
  getFrom,
  postInto,
  putInto,
  deleteThis,
};
