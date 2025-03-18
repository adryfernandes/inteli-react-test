import { useNavigate } from 'react-router-dom';
import { Header, Layout, Menu } from './components';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { RoutesCoordinator } from './router/Routes';

function App() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Menu navigate={navigate} />
      <Header />
      <Content>
        <RoutesCoordinator />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
