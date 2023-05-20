import { NavItemContainer, NavItemWrapper } from "./navigation.styles";
import { useNavigate } from "react-router";

const NavigationIcon = ({ item, open }) => {
    const { name, url, link } = item;
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(link)
    }

    const current = window.location.pathname == item.link;

    return (
    <NavItemContainer current={current}>
        <NavItemWrapper onClick={clickHandler} open={open}>
            <img src={url} />
            <h3>{ name }</h3>
        </NavItemWrapper>
    </NavItemContainer>
    )
}

export default NavigationIcon