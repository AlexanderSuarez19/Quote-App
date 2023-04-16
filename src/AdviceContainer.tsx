import React from 'react';
import styles from './AdviceContainer.module.css';


interface Props {
  advice: string | null;
}

const AdviceContainer: React.FC<Props> = ({ advice }) => {
  return (
    <div className={styles['advice-container']}>
      <p className={styles['advice-text']} id="advice-text">
        {advice}
      </p>
    </div>
  );
};

export default AdviceContainer;
