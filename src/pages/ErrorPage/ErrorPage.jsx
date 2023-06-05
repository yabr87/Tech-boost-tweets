import { Wrapper, Text } from './ErrorPage.styles';
import { Container } from 'components/App/App.styles';
import { useNavigate } from 'react-router-dom';
import Button from 'components/shared/Button';
import img404 from 'images/404-min.png';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <Text>Ooops! This page not found :(</Text>
        <Wrapper>
          <img src={img404} alt="error 404" />
          <Button text="to home" onClick={() => navigate('/')} />
        </Wrapper>
      </Container>
    </section>
  );
};

export default ErrorPage;
