import { useNavigate } from "react-router";

import { createUserPost } from "../utils/firebase/firebase.utils";
import { UserContext } from "../contexts/user.context";
import { useContext, useState } from "react";

const Create = () => {
    const { user } = useContext(UserContext);
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
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Name</h1>
            <input type="text" name="name" value={name} onChange={handleChange} required/>
            <h1>desc</h1>
            <input type="text" name="desc" value={desc} onChange={handleChange} required/>
            <h1>pic(use url for now)</h1>
            <input type="text" name="pic" value={pic} onChange={handleChange} required/>
            <h1>type</h1>
            <input type="text" name="type" value={type} onChange={handleChange} required/>

            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default Create;