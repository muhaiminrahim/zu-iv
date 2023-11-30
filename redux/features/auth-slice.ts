import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type InitialState = {
    value: AuthState
}

type AuthState = {
    email: string;
    uid: string;
    isAuth: boolean
}

export type LogInPayload = {
    email: string;
    uid: string;
}

const initialState = {
    value: {
        email: "",
        isAuth: false
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        onLogIn: (state, action: PayloadAction<LogInPayload>) => {
            return {
                value: {
                    email: action.payload.email,
                    uid: action.payload.uid,
                    isAuth: true
                } as AuthState
            }
        },
        onLogOut: () => {
            return initialState
        }
    }
})

export const {onLogIn, onLogOut} = auth.actions
export default auth.reducer