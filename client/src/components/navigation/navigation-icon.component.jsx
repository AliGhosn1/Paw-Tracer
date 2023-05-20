import { NavItemWrapper } from "./navigation.styles";

const NavigationIcon = ({ item, open }) => {
    const { name, url } = item;

    return (
    <NavItemWrapper open={open}>
        <img src={url} />
        {open && <h3>{ name }</h3>}
    </NavItemWrapper>
    )
}

export default NavigationIcon