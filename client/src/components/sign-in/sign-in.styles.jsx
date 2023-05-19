import styled from 'styled-components'

export const SignInContent = styled.div`
    display: flex;
    align-items: center;
`

export const SignInTitle = styled.h1`
    font-size: 100px;
    color: #ADC2A9;
    margin-left: 20px;
`

export const SignInWrapper = styled.div`
    background-color: #FEF5ED;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const CustomGoogleBTN = styled.button`
    background-color: #4285f4;
    border: none;
    justify-content: space-between;
    display: flex;
    gap: 10px;
    padding: 5px;
    align-items: center;

    &:hover{
        background-color: #2c6bcf;
        transition: all 200ms ease-in-out;
    }
`

export const GoogleText = styled.h3`
    color: white;
    font-size: 17px;
`