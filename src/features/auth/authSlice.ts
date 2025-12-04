import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage = localStorage.getItem('token')

const initialState = {
    token: tokenFromStorage || null,
    isAuthenticated: !!tokenFromStorage,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload)
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('token')
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer