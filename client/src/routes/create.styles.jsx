import styled from 'styled-components';

export const FormWrapper = styled.form`
    background: white;
    border-radius: 10px;
    width: 25%;
    margin: auto;
    padding: 20px;
    margin-bottom: 20px;
`

export const InputContainer = styled.div`
`

export const TextAreaContainer = styled.textarea`
    width: 100%;
    height: 300px;
    resize: none;
`

export const LabelWrapper = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
`

export const InputWrapper = styled.input`
    border: none;
    border-bottom: 1px solid black;
    text-decoration: none;
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    outline: none;
`

export const SubmitButton = styled.button`
    background: #ADC2A9;
    border-radius: 5px;
    width: 20%;
    height: 25px;
    &:hover{
        background: #D3E4CD;
    }
    display: block;
    margin: 10px auto 0 auto;
`