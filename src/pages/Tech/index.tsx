import React from 'react';
import styles from './index.less'
import { PropertyPanel } from '@/pages/Tech/components/PropertyPanel'

const TechPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.view}></div>
      <div className={styles.panel}>
        <PropertyPanel />
      </div>
    </div>
  );
};

export default TechPage;
