import { useContext } from "react"
import { StoreContext} from "../../contexts"

const useUsers = () => {
    const { users } = useContext(StoreContext)
    return { users }
}

export {useUsers}