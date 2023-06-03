import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import Button from 'components/shared/Button';

import {
  CardWrapper,
  CardContent,
  DecorationImg,
  Line,
  Ring,
  DefaultImg,
  UserImgWrapper,
  UserImg,
  TextWrapper,
  Text,
} from './Card.styles';
import cardLogo from 'images/Logo.svg';
import cardRing from 'images/ring-min.png';

import cardDecoration from 'images/picture-min.png';

const Card = ({ data }) => {
  const [item, setItem] = useState(data);
  const { id, name, avatar, follow, followers, tweets } = item;
  const [item1, setItem1] = useState(follow);

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
            color={!item1 ? '#EBD8FF' : '#5CD3A8'}
            text="Follow"
            onClick={() => setItem1(!item1)}
          />
        </TextWrapper>
      </CardContent>
    </CardWrapper>
  );
};

// Card.propTypes = {
//   // bla: PropTypes.string,
// };

// Card.defaultProps = {
//   // bla: 'test',
// };

export default Card;
