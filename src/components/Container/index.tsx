import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    margin-top: 60px;
    margin-right: auto;
    margin-left: auto;
    overflow: auto;
    &::-webkit-scrollbar {
        right: 0;
        width: 5px;
        height: 0px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
    }
    @media (min-width: 576px) {
        height: calc(100vh - 150px);
        margin-top: 90px;
        max-width: 768px;
    }
    @media (min-width: 768px) {
        max-width: 992px;
    }
    @media (min-width: 992px) {
        max-width: 1200px;
    }
    @media (min-width: 1200px) {
        max-width: 1440px;
    }
    @media (min-width: 1520px) {
        max-width: 1440px;
    }
`;

export default Container;
