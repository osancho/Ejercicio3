import React, { useState } from 'react';
import { Image } from 'react-native';
import User from '../../assets/user-128.png';

export const PlayerImage = ({ player }) => {
  const [imgSrc, setImgSrc] = useState(player.player_image);

  const handleError = () => {
    setImgSrc(User);
  };

  return (
    <Image source={{ uri: imgSrc }} onError={handleError} style={{ width: 50, height: 50, borderRadius: 25 }} />
  );
};
