import React from 'react'
import { HomepagePostWrapper } from './homepage.styles';

const HomapegeNewPost = ({ post }) => {
    const { pic, name } = post;
    return (
    <HomepagePostWrapper>
        {name}
        <img src={pic} />
    </HomepagePostWrapper>
    )
}

export default HomapegeNewPost;