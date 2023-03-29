import { ReactNode } from 'react';
import Container from '../Container';
import Footer from '../Footer';
import Navbar from '../Navbar';

type LayoutProps = {
    children?: ReactNode;
};

const index = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
            <Footer />
        </>
    );
};

export default index;
