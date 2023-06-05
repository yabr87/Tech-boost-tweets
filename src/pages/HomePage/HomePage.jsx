import { Link } from 'react-router-dom';
import { ImgWrapper, Text } from './HomePage.styles';
import boyImg from 'images/boy-min.png';

const HomePage = () => {
  return (
    <Link to="/tweets">
      <ImgWrapper>
        <img src={boyImg} alt="boy" />
        <Text>GO TO TWEETS</Text>
      </ImgWrapper>
    </Link>
  );
};

export default HomePage;
