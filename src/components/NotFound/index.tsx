import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useTimeout from '../../app/hooks/useTimeout';
import HomeAndNotFound from '../../styles/HomeAndNotFound';

const NotFoundContainer = styled(HomeAndNotFound)`
    width: 100%;
    height: 100%;
    background-image: url('./images/akatsuki.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: multiply;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 24px;
        @media (min-width: 576px) {
            font-size: 32px;
        }
    }
`;

const index = () => {
    const navigate: NavigateFunction = useNavigate();
    const navigateHome: () => void = () => navigate('/');
    useTimeout(navigateHome, 1500);

    return (
        <NotFoundContainer>
            <h3>很抱歉，這個網頁不存在！</h3>
        </NotFoundContainer>
    );
};

export default index;
