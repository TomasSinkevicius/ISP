import React from 'react';

const PlayerScreen = () => {
    return(
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black' }}>
            <iframe
                style={{ height: '100%', width: '100%' }}
                src="https://www.youtube.com/embed/wjhMZ5_KHiE"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="true"
                webkitallowfullscreen="true"
             />
        </div>  
    )
}

export default PlayerScreen;