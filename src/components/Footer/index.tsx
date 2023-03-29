import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
    height: 60px;
    padding: 3px 10px 3px 10px;
    background-color: black;
    border-top: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-indent: 5px;
        text-decoration: none;
        color: inherit;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const index = () => {
    return (
        <Footer>
            2023 Powered by
            <a href="https://github.com/GaryL1n/Akatsuki" target="_blank" rel="noreferrer">
                Akatsuki
            </a>
        </Footer>
    );
};

export default index;
