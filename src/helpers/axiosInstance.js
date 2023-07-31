// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { SERVERURL } from  "../config"

// import NetInfo from '@react-native-community/netinfo';
// import { customToast } from '../utills/commonFunctions';
import rateLimit from 'axios-rate-limit';
// import I18n from 'react-native-i18n';
import { userLogoutSuccess } from "../actions/UserAction";
import {store} from "../configureStore"

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

// let start;
// const getToken = async () => {
//     const tokenObj = await localStorage.getItem('usercrendentials').then((value) => {
//         const res = JSON.parse(value);
//         return res;
//     });
//     const returntoken = tokenObj && tokenObj.token ? tokenObj.token : null;
//     return returntoken;
// };

const axiosInstance = rateLimit(axios.create({
    baseURL: SERVERURL,
    timeout: 25000,
    crossDomain: true,
    headers
}), { maxRequests: 50, perMilliseconds: 1000, maxRPS: 25 })
// const axiosInstance = axios.create({
//     baseURL: SERVERURL,
//     timeout: 5000,
//     crossDomain: true,
//     headers
//     });


axiosInstance.interceptors.request.use(
    async (config) => {
        // const token = await getToken();
        // const netStatus = await NetInfo.fetch();
        // if (netStatus.isConnected) {
            // if (token) {
            //     // console.log('get token=== ',token)
            //     config.headers.Authorization = `${token}`;
            // }
            if (config.customheader) {
                config.headers = Object.assign(config.headers, config.customheader);
            }
            // start = new Date().getTime();
             return config;
        // }
        // const msg = I18n.t('INFO_NO_NETWORK_AVAILABLE');
        // customToast(msg, 'error');
        // const msg = "Testing....";
        // return new Promise((resolve, reject) => {
        //     reject(msg);
        // });
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => new Promise((resolve, reject) => {
        // let end = new Date().getTime();
        resolve(response);
    }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        if (error.response.status === 404) {
            // customToast(I18n.t('LBL_SERVER_URL_NOT_FOUND'), 'error');
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }else if(error.response.status === 403){
            const {dispatch} = store;
            setTimeout(async () => {
                await localStorage.removeItem("usercrendentials");
                dispatch(userLogoutSuccess())
              }, 3000);
              return new Promise((resolve, reject) => {
                reject(error);
            });
        } else if (error.response.status === 400 || error.response.status === 401 || error.response.status === 500 || error.response.status === 503) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        } else {
            const msg="Testing 2......"
            // const msg = { message: I18n.t('LBL_SOMETING_WRONG') };
            return new Promise((resolve, reject) => {
                reject(msg);
            });
        }
    }
);

export default axiosInstance;