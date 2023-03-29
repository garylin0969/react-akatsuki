import styled from 'styled-components';
import useSelectorAll from '../../app/hooks/useSelectorAll';
import ImgFigure from '../../styles/ImgFigure';
import Modal from '../../components/Modal';

const InfoTitle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 576px) {
        height: 50%;
    }
`;

const AvatarContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 576px) {
        width: 50%;
        height: 100%;
    }
`;

const Avatar = styled(ImgFigure)`
    width: 50%;
`;

const ProfileContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 576px) {
        width: 50%;
        height: 100%;
    }
`;

const ProfileContent = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    p,
    ul {
        width: 50%;
        letter-spacing: 2px;
    }
`;

const InfoContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    p {
        text-indent: 2em;
        letter-spacing: 2px;
        line-height: 2;
    }
    @media (min-width: 576px) {
        min-height: 50%;
    }
`;

type MemberInfoProps = {
    show: boolean;
    onClose: () => void;
};

const MemberInfo = ({ show, onClose }: MemberInfoProps) => {
    const { memberData: data } = useSelectorAll();
    const title: string = `${data.name} ${data.jpName}`;
    return (
        <>
            <Modal title={title} show={show} onClose={onClose}>
                <InfoTitle>
                    <AvatarContainer>
                        <Avatar>
                            <img src={data.src} alt={data.name} />
                        </Avatar>
                    </AvatarContainer>
                    <ProfileContainer>
                        {data.profile.map((profile, index) => {
                            return (
                                <ProfileContent key={index}>
                                    <p>{profile.title}</p>
                                    <ul>
                                        {profile.description.map((value, deIndex) => (
                                            <li key={deIndex}>{value}</li>
                                        ))}
                                    </ul>
                                </ProfileContent>
                            );
                        })}
                    </ProfileContainer>
                </InfoTitle>
                <InfoContent>
                    <p>{data.infoContent}</p>
                </InfoContent>
            </Modal>
        </>
    );
};

export default MemberInfo;
