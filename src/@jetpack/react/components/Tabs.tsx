import clsx from 'clsx';
import { useEffect, useState } from 'react';

import useConfig from '../hooks/useConfig';

export const Tab = ({ label, selectedTab, onClick }: any) => {
  const { prefix } = useConfig();

  const selectTabHandler = () => {
    onClick(label);
  };

  return (
    <li
      className={clsx(
        `${prefix}-tab__button`,
        selectedTab === label && `${prefix}-tab--active`
      )}
      onClick={selectTabHandler}
    >
      {label}
    </li>
  );
};

export const Tabs = ({ children }: any) => {
  const { prefix } = useConfig();
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    setSelectedTab(children[0].props.label);
  }, [children]);

  const onClickTabItem = (tabLabel: any) => {
    setSelectedTab(tabLabel);
  };

  return (
    <div className={`${prefix}-tabs`}>
      <ol className={`${prefix}-tab`}>
        {children.map((child: any) => {
          const { label } = child.props;

          return (
            <Tab
              selectedTab={selectedTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div className={`${prefix}-tab__content`}>
        {children.map((child: any) => {
          if (child.props.label !== selectedTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};
