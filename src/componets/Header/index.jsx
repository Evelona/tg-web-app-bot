import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "../Button";

export const Header = (props) => {
  const { onClose, user} = useTelegram()

  return <div  className={'button ' + props.className}>
    <Button onClick={onClose}>Закрыть</Button>
    <span className={'username'}>{user?.username}</span>
  </div>;
}