import React from 'react'
import { HomepagePostWrapper } from './homepage.styles';

const HomapegeNewPost = ({ post }) => {
    const { img, dest, title } = post;
    return (
    <HomepagePostWrapper>
        {title}
        <img src={img} />
        <h5><a href={dest} target="_blank">See More &#8594;</a></h5>
    </HomepagePostWrapper>
    )
}

export default HomapegeNewPost;