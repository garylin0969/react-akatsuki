import { ReactNode, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ImgFigure from '../../styles/ImgFigure';

interface ShowProps {
    isOpen: boolean;
}

const ModalContainer = styled.div<ShowProps>`
    width: 100vw;
    height: calc(100vh - 120px);
    position: absolute;
    top: 60px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    @media (min-width: 768px) {
        height: calc(100vh - 150px);
        top: 90px;
    }
    ${({ isOpen }) =>
        isOpen &&
        css`
            visibility: visible;
            opacity: 1;
            transition: visibility 0.3s, opacity 0.3s ease-in;
        `}
    ${({ isOpen }) =>
        !isOpen &&
        css`
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.3s, opacity 0.3s ease-out;
        `}
`;

const Modal = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 2px solid red;
    overflow: hidden;
    background-color: #662a2a;
    z-index: 10;
    @media (min-width: 992px) {
        width: 60%;
        height: 90%;
    }
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 2px solid red;
    box-shadow: 0px 0px 10px 0px red inset;
    display: flex;
`;

const ModalTitle = styled.div`
    width: calc(100% - 50px);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    h3 {
        letter-spacing: 2px;
    }
    @media (min-width: 768px) {
        h3 {
            font-size: 30px;
        }
    }
`;

const CloseContent = styled.div`
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Close = styled(ImgFigure)`
    cursor: pointer;
    height: 40px;
    transition: 0.5s;
    &:hover {
        transform: rotate(90deg);
    }
`;

const ModalContent = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    overflow: auto;
    &::-webkit-scrollbar {
        right: 0;
        width: 5px;
        height: 0px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
    }
`;

type ModalProps = {
    title?: string;
    show: boolean;
    onClose: () => void;
    children?: ReactNode;
};

const index = ({ title, show, onClose, children }: ModalProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(show);
    const [doNotRemove, setDoNotRemove] = useState<boolean>(show);
    let timer: ReturnType<typeof setTimeout>;

    useEffect(() => {
        if (show) {
            setDoNotRemove(true);
            timer = setTimeout(() => {
                setIsOpen(show);
            }, 100);
        } else {
            setIsOpen(show);
            timer = setTimeout(() => {
                setDoNotRemove(false);
            }, 300);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [show]);

    return (
        <>
            {doNotRemove && (
                <ModalContainer isOpen={isOpen}>
                    <Modal>
                        <ModalHeader>
                            <ModalTitle>
                                <h3>{title}</h3>
                            </ModalTitle>
                            <CloseContent>
                                <a role="button" title="Close" onClick={onClose}>
                                    <Close>
                                        <img src="./images/close.svg" alt="Close" />
                                    </Close>
                                </a>
                            </CloseContent>
                        </ModalHeader>
                        <ModalContent>{children}</ModalContent>
                    </Modal>
                </ModalContainer>
            )}
        </>
    );
};

export default index;
