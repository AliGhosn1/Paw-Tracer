import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    display: flex;
`

export const TodaysStoryWrapper = styled.div`
    background-color: #99A799;
    margin-right: 2vw;
    border-radius: 10px;
    padding: 0.5vw 1vw;
    width: 65%;
    height: calc(90vh - 4.5vw);
    
    h1{
        color: #ADC2A9;
        margin: 0;
        text-align: center;
        font-size: 35px;
    }

    p{
        color: #D3E4CD;
        font-size: 25px;
        margin: 1.5% 0;
    }

    .img{
        margin-bottom: 1.5%;
        width: 100%;
        height: 80%;
        overflow: hidden;
        border-radius: 15px;
        img{
            width: 150%;
        }
    }

    a{
        text-decoration: none;
        color: #D3E4CD;
        &:hover{
            color: #ADC2A9;
        }
        font-size: 20px;
    }
`

export const NewestPostWrapper = styled.div`
    background-color: #99A799;;
    width: 10px;
    height: 10px;
    margin-right: 2vw;
    height: calc(90vh - 4.5vw);
    border-radius: 10px;
    padding: 0.5vw 1vw;
    width: 40%;

    h1{
        color: #ADC2A9;
        margin: 0;
        text-align: center;
        font-size: 35px;
    }

    .posts{
        margin: 2vh 1vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3vh;
    }
`

export const HomepagePostWrapper = styled.div`
    background-color: #ADC2A9;
    height: 35vh;
    width: 100%;
    border-radius: 10px;
    color: #D3E4CD;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin: auto;
        width: 90%;
        border-radius: 10px;
    }

    h5{
        cursor: pointer;
        margin: 0;
        margin-bottom: 5%;
        &:hover{
            color: white;
        }

        a{
            text-decoration: none;
            color: #D3E4CD;
            &:hover{
                color: white;
            }
        }
    }
`