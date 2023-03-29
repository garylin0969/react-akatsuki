import { useState } from 'react';
import styled from 'styled-components';
import useActions from '../../app/hooks/useActions';
import ImgFigure from '../../styles/ImgFigure';
import members from '../../datas/members';
import MemberInfo from './MemberInfo';

const MembersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 35px;
    padding: 35px 0px;
    row-gap: 35px;
    @media (min-width: 576px) {
        height: 100%;
        padding: 0px;
        row-gap: 0px;
    }
`;

const MemberCard = styled.div`
    width: 180px;
    height: 180px;
`;

const MemberAvatar = styled(ImgFigure)`
    height: 180px;
    border-radius: 24px;
    box-shadow: 0 0 0 8px rgba(255, 0, 0, 0.442);
    &:hover {
        cursor: pointer;
    }
    img {
        transition: 0.5s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
`;

const index = () => {
    const { setMember, setMemberState } = useActions();
    const [showModal, setShowModal] = useState<boolean>(false);

    const clickMemberAvatar = (index: number): void => {
        const selectMember = members[index];
        setMember(selectMember);
        setShowModal(true);
    };

    const onClose = (): void => {
        setMemberState(false);
        setShowModal(false);
    };

    return (
        <>
            <MembersContainer>
                {members.map((data, index) => {
                    return (
                        <MemberCard key={index}>
                            <MemberAvatar onClick={() => clickMemberAvatar(index)}>
                                <img src={data.src} alt={data.name} />
                            </MemberAvatar>
                        </MemberCard>
                    );
                })}
            </MembersContainer>
            <MemberInfo show={showModal} onClose={onClose} />
        </>
    );
};

export default index;
