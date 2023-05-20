import { NavItemContainer, NavItemWrapper } from "./navigation.styles";
import { useNavigate } from "react-router";

const NavigationIcon = ({ item, open }) => {
    const { name, url, link } = item;
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(link)
    }

    const current = link=='/app' ? window.location.pathname == link : window.location.pathname.includes(link)

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