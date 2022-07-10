import React from "react";

import { Container } from "./styles";

interface SocialMediaOverviewCard {
  iconName: string;
  username: string;
  total: number;
  infoType: string;
  arrowIcon: string;
  todayTotal: number;
  borderClassName?: string;
  infoClassName?: string;
}

const SocialMediaOverviewCard: React.FC<SocialMediaOverviewCard> = ({
  iconName,
  total,
  infoType,
  todayTotal,
  infoClassName,
  arrowIcon,
}) => {
  return (
    <Container>
      <div className="user-info">
        <span className="info-type">{infoType}</span>
        <img src={iconName} alt="" />
      </div>
      <div className={`today-info-statistics ${infoClassName}`}>
        <span className="info-numbers">{total}</span>
        <div className="percent">
          <img src={arrowIcon} alt="" />
          <span className="today-numbers">{todayTotal}%</span>
        </div>
      </div>
    </Container>
  );
};

export default SocialMediaOverviewCard;
