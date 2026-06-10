import axios from 'axios';
import AsyncStorageHelper from '../../Lib/AsyncStorageHelper';
import NetworkUtils from '../../Lib/NetworkUtils';
import Config from '../../comman/Config';
import { getLanguage } from '../../comman/i18n';

const fullUrl = path => `${Config.baseurl}${path}`;

const getToken = async () => await AsyncStorageHelper.getData(Config.TOKEN);
// console.log("token", await getToken());

const headersFormBearer = token => ({
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: `Bearer ${token}`,
});

const headersJsonBearer = token => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

/** Same shape as existing catch branches: response error → status; else request/message */
const axiosCatchLegacy = error => {
  if (error?.response) return error.response.status;
  if (error?.request) return error.request;
  return error?.message ?? null;
};

export const Auth_Api = (Url, SendData) => async () => {
  const data = await Auth_ApiRequest(Url, SendData);
  return { data };
};

export const Get_Api = (Url, SendData) => async () => {
  const data = await Get_Send_Api(Url, SendData);
  return { data: data?.data?.data };
};

export const Post_ApiWithToken = (Url, SendData) => async () => {
  const data = await ApiRequestRow(Url, SendData);
  return { data };
};

export const Update_Api = (Url, SendData) => async () => {
  const data = await ApiRequestPut(Url, SendData);
  return { data };
};

export const Update_Image = (Url, SendData) => async () => {
  const data = await ImageRequestPut(Url, SendData);
  return { data };
};

export async function Auth_ApiRequest(Url, SendData) {
  console.log("Url",Config.baseurl+ Url);
  console.log("SendData", SendData);
  const isConnected = await NetworkUtils.isNetworkAvailable();
  if (!isConnected) return { error: true, offline: true };

  try {
    return await axios.post(fullUrl(Url), SendData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  } catch (error) {
    return error?.response?.data ?? { error: true };
  }
}

export async function Get_Send_Api(Url, SendData) {

  const token = await getToken();
  console.log("Url",Config.baseurl+ Url);
  console.log("SendData", SendData);
  console.log("token", token);
  const lang = getLanguage();
  console.log("lang", lang);
  const requestOptions = {
    headers: { ...headersFormBearer(token), lang },
  };
  const body = SendData != null ? SendData : {};
  console.log("requestOptions", requestOptions);
  try {
    return await axios.post(fullUrl(Url), body, requestOptions);
  } catch (error) {
    return axiosCatchLegacy(error);
  }
}

export async function ApiRequestRow(Url, SendData) {
 
  const token = await getToken();
     console.log("Url",Config.baseurl+ Url);

  console.log("SendData", SendData);
  console.log("token", token);
  try {
    return await axios.post(fullUrl(Url), SendData, { headers: headersFormBearer(token) });

  } catch (error) {
    console.log("error", error)
    if (error?.response) return error.response.data ?? null;
    if (error?.request) return error.request ?? null;
    return error?.message ?? null;
  }
}

export async function ApiRequestPut(Url, SendData) {
  
  const token = await getToken();
  console.log("Url",Config.baseurl+ Url);
  console.log("SendData", SendData);
  console.log("token", token);
  try {
    return await axios.put(fullUrl(Url), SendData, { headers: headersJsonBearer(token) });
  } catch (error) {
    return axiosCatchLegacy(error);
  }
}

export async function ImageRequestPut(Url, SendData) {
  const token = await getToken();
  try {
    return await axios.post(fullUrl(Url), SendData, {
      headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
      timeout: 60000,
    });
  } catch (error) {
    return axiosCatchLegacy(error);
  }
}
