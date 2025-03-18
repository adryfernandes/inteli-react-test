import useIsMobile from '../../hooks/useIsMobile';
import { useUser } from '../../hooks/useUser';
import { Container, Name } from './styles';
import { TitlePage } from '../TitlePage';
import logo from '../../assets/logo-preta.png';

export function Header() {
  const username = useUser();
  const isMobile = useIsMobile();

  const ImageLogo = () => {
    return <img src={logo} alt="Logo" />;
  };

  return (
    <Container>
      <h1>{isMobile ? <ImageLogo /> : <TitlePage>Exercício 1</TitlePage>}</h1>
      <Name>{username}</Name>
    </Container>
  );
}
