import { Wrapper, Text, ImgWrapper, Text404 } from './ErrorPage.styles';
import { Container } from 'components/App/App.styles';
import img404 from 'images/404-min.png';

const ErrorPage = props => (
  <section>
    <Container>
      <Text>Ooops! This page not found :(</Text>
      <Wrapper>
        <ImgWrapper>
          <Text404>4</Text404>
          <img src={img404} alt="error 404" />
          <Text404>4</Text404>
        </ImgWrapper>
      </Wrapper>
    </Container>
  </section>
);

export default ErrorPage;
