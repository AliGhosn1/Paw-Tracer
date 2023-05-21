import styled from 'styled-components';

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3vh;
    padding-bottom: 20px;
`

export const PostWrapper = styled.div`
    height: 515px;
    width: 400px;
    background: #D3E4CD;
    border-radius: 10px; 
    position: relative;
    margin: auto;
`

export const PostHeading = styled.div`
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.5rem;
    text-transform: capitalize;
    height: 15%;
`

export const PostPicture = styled.img`
    width: 100%;
    height: 200px;
`

export const PostType = styled.div`
    font-size: 1.2rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 8px;
`

export const PostDesc = styled.div`
    background: #FEF5ED;
    overflow-y: scroll;
    height: 35%;
    &::-webkit-scrollbar{
        -webkit-appearance: none;
    }
    &::-webkit-scrollbar:vertical {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: #ADC2A9;
    }
    margin: 0 10px 5px 10px;
    border-radius: 10px;
    padding: 3px;
    font-size: 1.15em;
`

export const PostButton = styled.button`
    background: #ADC2A9;
    border-radius: 5px;
    width: 100px;
    height: 25px;
    &:hover{
        background: #D3E4CD;
    }
    display: block;
    margin: 0 auto 20px auto;
`

export const DeleteButton = styled.button`
    background: #ADC2A9;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    &:hover{
        background: #D3E4CD;
    }
    position: absolute;
    right: 7px;
    top: 7px;
`