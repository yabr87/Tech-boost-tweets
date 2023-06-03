import { TweetContainer } from './TweetsPage.styles';
import Button from 'components/shared/Button';
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
