import styled from 'styled-components';

export const NavigationHeadBar = styled.div`
    background-color: #99A799;
    width: 100vw;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`

export const NavigationBarContent = styled.div`
    width: fit-content;
    display:flex;
    align-items: center;
    height: 100%;
    margin-right: 20px;

    h2{
        color: #FEF5ED;
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
    margin-top: calc(10vh + 2vw);
    margin-left: ${(props) => props.marginleft};
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
`
export const ShrinkButtonWrapper = styled.div`
    padding:5px 0;
    margin: 1vh 8px;
    border-radius: 10px;
    background-color: #D3E4CD;
    transition: all 200ms ease-in-out;
    margin-bottom: 1vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(3vw - 25px);
    cursor: pointer;
`
export const ShrinkButton = styled.div`
    width: fit-content;
    img{
        width:1vw;
        position: relative;
        top: 2px;
        transform: rotate(${(props) => props.arrowrotate});
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
        width: ${(props) => props.open ? 100 : 0}px;
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
    &:hover{
        background-color: white;
        color: #99A799;
    }
    cursor: pointer;
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