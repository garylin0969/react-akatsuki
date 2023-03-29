import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import { GlobalStyle } from './styles/GlobalStyle';

const Home = lazy(() => import('./pages/Home'));
const Members = lazy(() => import('./pages/Members'));

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Suspense fallback={<Loading />}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/members" element={<Members />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Layout>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
