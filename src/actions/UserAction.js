import axiosInstance from "../helpers/axiosInstance";

import {
    OTP_SUCCESS,
    LOGOUT_SUCCESS
  } from "./constants";

  export const loginPersonal = async (params) => {
    try {
        console.log(params,'params login')
      const { data } = await axiosInstance.post("user/personal/login", params);
      console.log('data',data)
      return { error: false, data };
    } catch (error) {
      console.log("error in login personal", error);
    //   customToast(error?.response?.data?.message, "error");
      return { error: true, data: error?.response?.data?.message };
    }
  };


  export function otpSuccess(payload) {console.log(payload, 'Reducer Payload')

    return {
      type: OTP_SUCCESS,
      payload,
    };
  }

  export function userLogoutSuccess(payload) {
    return {
      type: LOGOUT_SUCCESS,
      payload,
      userAuthSuccess: false,
      userAuth: undefined,
      isInitialLoading: true,
    };
  }