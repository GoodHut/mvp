import { createSlice } from "@reduxjs/toolkit";



// Maybe write a thunk to fetch user info. In which case user info is passed during login, in which case initialState should be null
const initialState = {
  user: {
    user_id: '001',
    user_name: "John Smith",
    user_phone_number: "+1 123 456 7890",
    user_password: "johnsmith123",
    user_QRCode: null,
    user_balance: 4096.08,
    user_cardInfo: null,

    // Not necessary to fetch at login (Eager Loading)

    // user_contacts: null,
    // transactions: null,
    // received_transactions: null,
    // sent_transactions: null,
    // received_requests: null,
    // sent_requests: null,
    // user_creation_date: null
  },
};

export const selfSlice = createSlice({
  name: "self",
  initialState,
  reducers: {
    // Very arbitrary code here -> please change it as fit
    logInOut: (state, action) => {
      if (action.type === 'login')
        state.self = action.payload;
      else if (action.type === 'logout')
        state.self = null;
    },
  }

});

export const { logInOut } = selfSlice.actions;


export const selectSelf = (state) => state.self.user

export default selfSlice.reducer;
