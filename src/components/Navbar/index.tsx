import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useSelectorAll from '../../app/hooks/useSelectorAll';
import ImgFigure from '../../styles/ImgFigure';

const NavContainer = styled.nav`
    width: 100%;
    height: 60px;
    padding: 3px 10px 3px 10px;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    background-color: black;
    box-shadow: 0px 0px 5px 0px #ffffff inset;
    @media (min-width: 576px) {
        height: 90px;
    }
`;

const NavIconContent = styled.div`
    grid-column: 1/3;
    height: 100%;
    overflow: hidden;
`;

const NavIcon = styled(ImgFigure)`
    height: 100%;
`;

const LinesContent = styled.div`
    grid-column: 3/13;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    overflow: hidden;
    h1 {
        font-size: 16px;
        margin: 0 3px 0 3px;
        @media (min-width: 576px) {
            font-size: 24px;
        }
    }
`;

const index = () => {
    const { memberData: data, memberState: state } = useSelectorAll();
    return (
        <NavContainer>
            <NavIconContent>
                <Link to="/">
                    <NavIcon>
                        <img src="./images/navIcon.png" alt="NavIcon" />
                    </NavIcon>
                </Link>
            </NavIconContent>
            <LinesContent>
                {state && (
                    <>
                        <h1>{data.lines}</h1>
                    </>
                )}
            </LinesContent>
        </NavContainer>
    );
};

export default index;
