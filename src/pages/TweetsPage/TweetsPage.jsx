import { TweetContainer } from './TweetsPage.styles';
import UsersList from 'components/UsersList';

const TweetsPage = () => {
  return (
    <section>
      <TweetContainer>
        <UsersList />
      </TweetContainer>
    </section>
  );
};

export default TweetsPage;
