import React from 'react';
import styles from './ShareContainer.module.css'

interface Props {
  advice: string | null;
}

const ShareContainer: React.FC<Props> = ({ advice }) => {
  return (
    <div className={styles['share-container']}>
      <a href={`https://twitter.com/intent/tweet?url=${advice}`} target="_blank" rel="noopener noreferrer" id="twitter-btn">
        <img id="twitterIcon" src="twitterIcon.png" alt="Icon of the Twitter website" />
      </a>
    </div>
  );
};

export default ShareContainer;

