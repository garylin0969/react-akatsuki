import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeAndNotFound from '../../styles/HomeAndNotFound';
import ImgFigure from '../../styles/ImgFigure';

const Introduction = styled.div`
    width: 100%;
    height: 70%;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-size: 15px;
        text-indent: 2em;
        letter-spacing: 2px;
        line-height: 2;
        @media (min-width: 576px) {
            font-size: 20px;
        }
    }
    @media (min-width: 576px) {
        height: 50%;
    }
`;

const ClickToMembers = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        font-size: 30px;
        text-decoration: none;
        color: inherit;
        transition: color 1s, text-decoration 1s ease;
        &:hover {
            color: gray;
            text-decoration: underline;
        }
        @media (min-width: 576px) {
            font-size: 40px;
        }
    }
    @media (min-width: 576px) {
        height: 50%;
    }
`;

const index = () => {
    return (
        <>
            <HomeAndNotFound>
                <Introduction>
                    <p>
                        成員皆身穿繡著紅雲的黑色風衣，頭戴繫著風鈴的斗笠，相應手指佩戴標有自己代號的戒指（右手大拇指到左手大拇指依次為：零、青、白、朱、玄、空、南、北、三、玉），指甲塗有指甲油，護額上有一道劃痕。平時執行任務時兩人一組一起行動。
                    </p>
                </Introduction>
                <ClickToMembers>
                    <Link to="/members">點我查看成員資訊</Link>
                </ClickToMembers>
            </HomeAndNotFound>
        </>
    );
};

export default index;
