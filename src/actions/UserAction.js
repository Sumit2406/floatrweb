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



  export const resendOtp = async (params) => {
    try {
    const { data } = await axiosInstance.put("user/personal/otp", params);
    console.log('resendOtp',data)
    return { error: false, data };
  } catch (error) {
    console.log("error in resendOtp", error);
  //   customToast(error?.response?.data?.message, "error");
    return { error: true, data: error?.response?.data?.message };
  }
  };
//
  export const verifyOtp = async (params) => {
    try {
      console.log(params.contact);
    const { data } = await axiosInstance.put("user/personal/register/otp", params);
    console.log('verifyOtp',data)
    return { error: false, data };
  } catch (error) {
    console.log("error in resendOtp", error);
    // customToast(error?.response?.data?.message, "error");
    return { error: true, data: error?.response?.data?.message };
  }
  };


  export function userLogoutSuccess(payload) {
    return {
      type: LOGOUT_SUCCESS,
      payload,
      userAuthSuccess: false,
      userAuth: undefined,
      isInitialLoading: true,
    };
  }