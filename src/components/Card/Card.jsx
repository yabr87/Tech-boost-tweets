import React, { useState } from 'react';
import { updateUser } from 'services/usersApi';
import Button from 'components/shared/Button';

import cardLogo from 'images/Logo.svg';
import cardRing from 'images/ring-min.png';
import cardDecoration from 'images/picture-min.png';

import {
  CardWrapper,
  CardContent,
  DecorationImg,
  Line,
  Ring,
  UserImgWrapper,
  UserImg,
  TextWrapper,
  Text,
} from './Card.styles';

const Card = ({ data }) => {
  const [cardData, setCardData] = useState(data);
  const { name, avatar, followers, follow, tweets } = cardData;
  const [isLoading, setIsLoading] = useState(false);

  const updateUerFollow = async () => {
    try {
      setIsLoading(true);
      const updatedCardData = {
        ...cardData,
        followers: cardData.follow
          ? cardData.followers - 1
          : cardData.followers + 1,
        follow: !cardData.follow,
      };

      await updateUser(updatedCardData);

      setCardData(updatedCardData);
    } catch (error) {
      alert(`Something went wrong. Try again!`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardWrapper>
      <CardContent>
        <img src={cardLogo} alt="logo img" />
        <DecorationImg src={cardDecoration} alt="decor img" />
        <Line />
        <UserImgWrapper>
          <UserImg src={avatar} alt={name} />
        </UserImgWrapper>
        <Ring src={cardRing} alt="ring img" />

        <TextWrapper>
          <Text>{tweets?.toLocaleString('en')} Tweets</Text>
          <Text>{followers?.toLocaleString('en')} Followers</Text>
          <Button
            color={!follow ? '#EBD8FF' : '#5CD3A8'}
            text={!follow ? 'Follow' : 'Following'}
            loading={isLoading}
            onClick={updateUerFollow}
          />
        </TextWrapper>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
