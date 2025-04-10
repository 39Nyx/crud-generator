import React from 'react';
import { Tabs, type TabsProps } from 'antd';
import { PropertiesConfig } from '@/pages/ProTable/components/PropertiesConfig';

export const PropertyPanel: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'properties',
      label: '属性',
      children: <PropertiesConfig />,
    },
    {
      key: 'events',
      label: '事件',
      children: 'Content of Tab Pane 2',
    },
    {
      key: 'advanced',
      label: '高级',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="properties"
        items={items}
        indicator={{ size: (origin) => origin - 4, align: 'center' }}
      />
    </>
  );
};
