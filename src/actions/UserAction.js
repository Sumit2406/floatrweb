import axiosInstance from "../helpers/axiosInstance";

import { OTP_SUCCESS, LOGOUT_SUCCESS } from "./constants";

export const loginPersonal = async (params) => {
  try {
    console.log(params, "params login");
    const { data } = await axiosInstance.post("user/personal/login", params);
    // console.log('data',data)   //Common output like lineno 21
    // console.log("expire_at", data.expire_at);
    return { error: false, data };
  } catch (error) {
    console.log("error in login personal", error);
    //    //   customToast(error?.response?.data?.message, "error");
    return { error: true, data: error?.response?.data?.message };
  }
};


export function otpSuccess(payload) {
  console.log(payload, "Reducer Payload");//Common output like lineno 9
  return {
    type: OTP_SUCCESS,
    payload,
  };
}

export const resendOtp = async (params) => {
  try {
    const { data } = await axiosInstance.put("user/personal/otp", params);
    return { error: false, data };
  } catch (error) {
    //  console.log("error in resendOtp", error?.response);
    //   customToast(error?.response?.data?.message, "error");
    return { error: true, data: error?.response?.data };
  }
};

//Verify OTP
export const verifyOtp = async (params, token) => {
  try {
    const customheader = { Authorization: token };
    const { data } = await axiosInstance.put(
      "user/personal/register/otp",
      params,
      { customheader }
    );

     if(data && Object.keys(data).length > 0){
      localStorage.setItem('usercrendentials', JSON.stringify(data));
     }
    return { error: false, data };
  } catch (error) {
    // customToast(error?.response?.data?.message, "error");
    if (error.response && error.response.data) {
      console.error("Error response data", error.response.data?.message);
    }
    return { error: true, data: error?.response?.data?.message };
  }
};

//updateState API

export const updateState = async (params) => {
  try {
    // console.log("state params", params);
    const { data } = await axiosInstance.get("master/state", params);
    // console.log(data,"checking state data");
    return { error: false, data };
  } catch (error) {
      console.log("error in updateState", error?.response);
    //   customToast(error?.response?.data?.message, "error");
    return { error: true, data: error?.response?.data };
  }
};

// Register User API
export const registerUser = async (params) => {
  console.log(params,'params')
  try {
    const { data } = await axiosInstance.post(
      "user/personal/register",
      params
      );
      console.log(data)
      return { error: false, data };
    }    
catch (error) {
    // customToast(error?.response?.data?.message, "error");
    if (error.response && error.response.data) {
      console.error("Register Error data", error.response.data);
    }
    
    return { error: true, data: error?.response?.data };
  }
};
//

//Refferal code

export const refferedcode = async (params) => {
  try {
    const data  = await axiosInstance.put("user/personal/referral", params);
    
    console.log(data);

    return { error: false, data };
  } catch (error) {
    console.log(error, "error");
    //  console.log("error in resendOtp", error?.response);
    //   customToast(error?.response?.data?.message, "error");
    // return error
    // console.log(error?.response?.data?.message)
    return { error: true, data: error?.response?.data?.message };
  }
};

//

export function userLogoutSuccess(payload) {
  return {
    type: LOGOUT_SUCCESS,
    payload,
    userAuthSuccess: false,
    userAuth: undefined,
    isInitialLoading: true,
  };
}
