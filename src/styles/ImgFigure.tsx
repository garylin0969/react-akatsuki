import styled from 'styled-components';

const ImgFigure = styled.figure`
    aspect-ratio: 1/1;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
    }
`;

export default ImgFigure;
