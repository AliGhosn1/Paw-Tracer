import { useNavigate } from "react-router";

import { createUserPost } from "../utils/firebase/firebase.utils";
import { UserContext } from "../contexts/user.context";
import { useContext, useState } from "react";
import { FormWrapper, InputContainer, InputWrapper, LabelWrapper, SubmitButton, TextAreaContainer } from "./create.styles";

const Create = () => {
    const { user, fetchAllListings } = useContext(UserContext);
    const navigate = useNavigate();

    const defaultFormFields = {
        desc: "",
        name: "",
        pic: "",
        type: ""
    }

    const [currentInfo, setCurrentInfo] = useState(defaultFormFields);
    const{ desc, name, pic, type } = currentInfo;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentInfo({...currentInfo, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserPost(user, currentInfo);
        setCurrentInfo(defaultFormFields);
        navigate('/app/profile');
        fetchAllListings();
    }

    return (
    <div>
        
            <FormWrapper onSubmit={handleSubmit}>
                <InputContainer>
                    <LabelWrapper>
                        Name
                    </LabelWrapper> 
                    <InputWrapper type="text" name="name" value={name} placeholder="What's the name?" onChange={handleChange} required/>
                </InputContainer>
                <InputContainer>
                    <LabelWrapper>
                        Description
                    </LabelWrapper> 
                    <TextAreaContainer type="text" name="desc" value={desc} placeholder="Describe the pet!" onChange={handleChange} required/>
                </InputContainer>
                <InputContainer>
                    <LabelWrapper>
                        Picture (URL)
                    </LabelWrapper> 
                    <InputWrapper type="text" name="pic" value={pic} placeholder="How does it look like?" onChange={handleChange} required/>
                </InputContainer>
                <InputContainer>
                    <LabelWrapper>
                        Animal Species
                    </LabelWrapper> 
                    <InputWrapper type="text" name="type" value={type} placeholder="What are they?" onChange={handleChange} required/>
                </InputContainer>
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormWrapper>
        
    </div>
    )
}

export default Create;