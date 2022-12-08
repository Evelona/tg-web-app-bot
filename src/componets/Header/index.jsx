import { Button } from "../Button";

export const Header = (props) => {
  const tg = window.Telegram.WebApp
  const onClose = () => {
    tg.close()
  }
  return <div  className={'button ' + props.className}>
    <Button onClick={onClose}>Закрыть</Button>
    <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
  </div>;
}