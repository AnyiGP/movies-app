import { LoginForm, User } from "../../types"

const useMe = () => {
    const login = ({email, password}: LoginForm) => {
console.log(email, password)
    }
    
    const signUp = (user: Omit<User, "id">) =>{}
    
    const forgotPassword = () => {}
    const loginWithToken = () => {}
    const logOut = () => {}

    return {login, signUp, forgotPassword, loginWithToken, logOut}
}

export { useMe }