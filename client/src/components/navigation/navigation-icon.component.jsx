import { NavItemWrapper } from "./navigation.styles";
import { useNavigate } from "react-router";

const NavigationIcon = ({ item, open }) => {
    const { name, url, link } = item;
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(link)
    }

    return (
    <NavItemWrapper onClick={clickHandler} open={open}>
        <img src={url} />
        {open && <h3>{ name }</h3>}
    </NavItemWrapper>
    )
}

export default NavigationIcon