import React from 'react';
import './MyImg.css'

function MyImg({src, alt}) {
    return (
        <div>
            <div>
                <img className={'myImg'} src={src} alt={alt}/>
            </div>
        </div>
    );
}

export default MyImg;