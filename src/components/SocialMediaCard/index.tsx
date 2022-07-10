import React from "react";

import { Container, Border } from "./styles";

interface SocialMediaCardProps {
  iconName: string;
  username: string;
  total: number;
  infoType: string;
  arrowIcon: string;
  todayTotal: number;
  borderClassName?: string;
  infoClassName?: string;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  iconName,
  username,
  total,
  infoType,
  arrowIcon,
  todayTotal,
  borderClassName,
  infoClassName,
}) => {
  return (
    <Container>
      <Border className={borderClassName}></Border>
      <div className="user-info">
        <img src={iconName} alt="" />
        <span>@{username}</span>
      </div>
      <div className="info-statistics">
        <span className="info-numbers">{total}</span>
        <span className="info-type">{infoType}</span>
      </div>
      <div className={`today-info-statistics ${infoClassName}`}>
        <img src={arrowIcon} alt="" />
        <span className="today-numbers">{todayTotal} Today</span>
      </div>
    </Container>
  );
};

export default SocialMediaCard;
