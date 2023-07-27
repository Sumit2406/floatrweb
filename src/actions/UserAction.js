// import {
//     OTP_SUCCESS
//   } from "./constants";

//   export const loginPersonal = async (params) => {
//     try {
//       const { data } = await axiosInstance.post("user/personal/login", params);
//       return { error: false, data };
//     } catch (error) {
//       console.log("error", error);
//     //   customToast(error?.response?.data?.message, "error");
//       return { error: true, data: error?.response?.data?.message };
//     }
//   };


//   export function otpSuccess(payload) {
//     return {
//       type: OTP_SUCCESS,
//       payload,
//     };
//   }

//   export function userLogoutSuccess(payload) {
//     return {
//       type: LOGOUT_SUCCESS,
//       payload,
//       userAuthSuccess: false,
//       userAuth: undefined,
//       isInitialLoading: true,
//     };
//   }