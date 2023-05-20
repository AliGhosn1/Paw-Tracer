import styled from 'styled-components';

export const NavigationHeadBar = styled.div`
    background-color: #99A799;
    width: 100vw;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavigationBarContent = styled.div`
    width: fit-content;
    display:flex;
    align-items: center;
    height: 100%;
    margin-right: 20px;

    h2{
        color: #D3E4CD;
    }
`

export const ProfilePicture = styled.img`
    width: 50px;
    border-radius: 50%;
    margin: 0 20px;
`

export const MainContentWrapper = styled.div`
    display:flex;
`

export const OutletWrapper = styled.div`
    margin-top: 10vh;
    margin-left: ${(props) => props.marginLeft};
    transition: all 200ms ease-in-out;
    width: ${(props) => props.width};
`

export const NavSlider = styled.div`
    height: 90vh;
    background-color: #99A799;
    width: ${(props) => props.width};
    position: fixed;
    margin-top: 10vh;
    transition: all 200ms ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 4vh;
`

export const ShrinkButton = styled.div`
    position: absolute; 
    bottom: 0; 
    background-color: #D3E4CD;
    width: 100%;
    height:3vw;
    margin-top: auto;
    display: flex;

    img{
        width:1.5vw;
        margin: auto;
        transform: rotate(${(props) => props.arrowRotate});
        transition: all 200ms ease-in-out;
    }
`

export const IconsWrapper = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    gap: 4vh;
    height: 80vh;
`

//--------------------------------------------------------------------------------------------------------------------
//NavIcon

export const NavItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 6px;
    width: fit-content;
    cursor: pointer;

    img{
        width: 1.5vw;
        height: 1.5vw;
    }

    h3{
        margin: 0;
        margin-left: 1vw;
        width: ${(props) => props.open ? 80 : 0}px;
        overflow: hidden;
        transition: all 200ms ease-in-out;
    }
`

export const NavItemContainer = styled.div`
    padding:5px 0;
    margin: 0 8px;
    border-radius: 10px;
    background-color: ${(props) => props.current ? 'white' : 'transparent'};
    color: ${(props) => props.current ? '#99A799' : '#D3E4CD'};
    transition: all 200ms ease-in-out;
`

export const LogoutContainer = styled(NavItemContainer)`
    margin-top: auto;
    &:hover{
        background-color: white;
        color: #99A799;
    }
    transition: all 200ms ease-in-out;
`

export const LogoutWrapper = styled(NavItemWrapper)`
    
`