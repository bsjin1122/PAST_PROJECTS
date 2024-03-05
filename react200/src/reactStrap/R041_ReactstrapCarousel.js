import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import landscape from '../landscape.jpg';

const R041_ReactstrapCarousel = () => {
    const items = [
        {
            src: landscape, 
            altText: '슬라이드 1 이미지 대체 문구', 
            caption: '슬라이드1 설명', 
            header: '슬라이드1 제목'
        },
        {
            src: landscape,  
            altText: '슬라이드 2 이미지 대체 문구', 
            caption: '슬라이드2 설명', 
            header: '슬라이드2 제목'
        },
        {
            src: landscape, 
            altText: '슬라이드 3 이미지 대체 문구', 
            caption: '슬라이드3 설명', 
            header: '슬라이드3 제목'
        },
        {
            src: landscape,  
            altText: '슬라이드 4 이미지 대체 문구', 
            caption: '슬라이드4 설명', 
            header: '슬라이드4 제목'
        }
    ];
    return (
        <div>
            <UncontrolledCarousel items={items}></UncontrolledCarousel>
        </div>
    );
};

export default R041_ReactstrapCarousel;