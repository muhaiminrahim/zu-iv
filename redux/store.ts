import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./features/auth-slice"

export const store = configureStore({
    reducer: {
        authReducer
    },
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch