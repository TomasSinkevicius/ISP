import React from 'react';

import Header from "../../Components/Header/header.jsx";

import { useHistory } from "react-router-dom";

const ForumScreen = () => {

    const history = useHistory();

    return(
        <div>
            <Header />
            <div className='forum-screen-container'>
                <h1 className='forum-screen-title'>Forum</h1>
                <div className='forum-screen-sections-container'>
                    <div className='forum-screen-section'>
                        <h3 className='forum-section-title'>Generic forum section title</h3>
                        <p className='forum-section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 onClick={() => history.push(`/forum/1`)} className='forum-section-link'>Read more</h3>
                    </div>
                </div>
                <div className='forum-screen-sections-container'>
                    <div className='forum-screen-section'>
                        <h3 className='forum-section-title'>Generic forum section title</h3>
                        <p className='forum-section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 onClick={() => history.push(`/forum/2`)} className='forum-section-link'>Read more</h3>
                    </div>
                </div>
                <div className='forum-screen-sections-container'>
                    <div className='forum-screen-section'>
                        <h3 className='forum-section-title'>Generic forum section title</h3>
                        <p className='forum-section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 onClick={() => history.push(`/forum/3`)} className='forum-section-link'>Read more</h3>
                    </div>
                </div>
                <div className='forum-screen-sections-container'>
                    <div className='forum-screen-section'>
                        <h3 className='forum-section-title'>Generic forum section title</h3>
                        <p className='forum-section-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3 onClick={() => history.push(`/forum/4`)} className='forum-section-link'>Read more</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForumScreen;