import jwtDecode from 'jwt-decode';
import { createStore } from 'redux';
import UserModel from "../Models/UserModel";

// 1.Auth State
export class AuthState {
    public token: string = null;
    public user: UserModel = null;

    public constructor() {

        //Take token from session storage, restore if exists:
        this.token = sessionStorage.getItem("token");
        if (this.token) {
            const container: { user: UserModel } = jwtDecode(this.token);
            this.user = container.user;
        }
    }
}

// 2. Auth Action type
export enum AuthActionType {
    Register,
    Login,
    Logout
}

// 3. Auth Action
export interface AuthAction {
    type: AuthActionType;
    payload?: string; //String because of the token, Optional because logout needs no payload.
}

// 4. Auth Reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    //Duplicate current state:
    const newState = { ...currentState };

    //Perform the needed operation:
    switch (action.type) {
        case AuthActionType.Register: // Here the payload is token (string).
        case AuthActionType.Login:
            newState.token = action.payload;
            const container: { user: UserModel } = jwtDecode(newState.token); // { user: id:1, firstName: "Raz",...}
            newState.user = container.user;
            sessionStorage.setItem("token", newState.token);
            break;

        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            sessionStorage.removeItem("token");
            break;
    }

    // Return the new state:
    return newState;
}

// 5. Auth Store
export const authStore = createStore(authReducer);