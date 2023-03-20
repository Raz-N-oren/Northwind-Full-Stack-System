import { AuthActionType, authStore } from './../Redux/AuthState';
import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/config";
import CredentialsModel from '../Models/CredentialsModel';

class AuthService {

    //Registering a new user:
    public async register(user: UserModel): Promise<void> {

        //Send to backend the new user:
        const response = await axios.post<string>(appConfig.registersUrl, user);

        //Backend returns token:
        const token = response.data;

        //Send token to Redux:
        authStore.dispatch({ type: AuthActionType.Register, payload: token });
    }

    //Login existing user:
    public async login(credentials: CredentialsModel): Promise<void> {

        //Send to backend the credentials:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        //Backend returns token:
        const token = response.data;

        //Send token to Redux:
        authStore.dispatch({ type: AuthActionType.Login, payload: token });

    }

    //Logout existing user:
    public logout(): void {
        
        //Handle action in Redux.
        authStore.dispatch({ type: AuthActionType.Logout })
    }
}

const authService = new AuthService();

export default authService;