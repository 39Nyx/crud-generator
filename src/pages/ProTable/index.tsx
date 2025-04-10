import React, { useState } from 'react'
import styles from './index.less';
import { PropertyPanel } from '@/pages/ProTable/components/PropertyPanel';
import { ProTable } from '@ant-design/pro-components';

const ProTablePlayground: React.FC = () => {
  const [columns, setColumns]: any[] = useState([
    {
      dataIndex: 'name',
      title: '姓名'
    },
    {
      dataIndex: 'age',
      title: '年龄'
    }
  ])
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <ProTable
          columns={columns}
        />
      </div>
      <div className={styles.panel}>
        <PropertyPanel />
      </div>
    </div>
  );
};

export default ProTablePlayground;
