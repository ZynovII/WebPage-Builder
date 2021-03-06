import { AuthContext } from "./authContext"



export const AuthState = ( {children} ) => {

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}