import {
    OTP_SUCCESS,
} from '../actions/constants';


const initialState = {
    otpData: {},
    otpDataSuccess: false
};

export default function userReducer(state, action) {
    // console.log('userReducer',action.payload)
    if (typeof state === 'undefined') {
      return initialState;
    }
    switch (action.type) {
      case OTP_SUCCESS:
        return {
          ...state,
          otpDataSuccess: true,
          otpData: action.payload
        };
      default:
        return state;
    }
  }