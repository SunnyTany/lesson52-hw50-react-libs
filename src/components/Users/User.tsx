import { UserInterface } from "../../interface/User.interface"
import { FaLaughWink } from "react-icons/fa";

const User = ({user}: {user: UserInterface}) => {
  return (
    <li className="item">
      <span className="mr20 color-green"><FaLaughWink/></span>{user.name}
    </li>
  )
}

export default User