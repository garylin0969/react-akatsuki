import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h3 {
            display: inline-block;
        }
    }
`;

const index = () => {
    return (
        <>
            <LoadingContainer>
                <div>
                    <h3>Loading...</h3>
                </div>
            </LoadingContainer>
        </>
    );
};

export default index;
