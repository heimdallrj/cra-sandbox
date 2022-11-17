import clsx from 'clsx';
import { useEffect, useState } from 'react';

import useConfig from '../hooks/useConfig';

export const Tab = ({ onClick, label, selectedTab }: any) => {
  const { prefix } = useConfig();

  const handleClick = () => {
    onClick(label);
  };

  return (
    <li
      className={clsx(
        `${prefix}-tab-button`,
        selectedTab === label && `${prefix}-tab-active`
      )}
      onClick={handleClick}
    >
      {label}
    </li>
  );
};

export const Tabs = ({ children }: any) => {
  const { prefix } = useConfig();
  const [selectedTab, setSelectedTab] = useState<any>(null);

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
      <div className={`${prefix}-tab-content`}>
        {children.map((child: any) => {
          if (child.props.label !== selectedTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

// export function Tabs({ children }: any) {
//   const { prefix } = useConfig();

//   return (
//     <TabWrapper>
//       <Tab label='Gator'>
//         See ya later, <em>Alligator</em>!
//       </Tab>
//       <Tab label='Croc'>
//         After 'while, <em>Crocodile</em>!
//       </Tab>
//       <Tab label='Sarcosuchus'>
//         Nothing to see here, this tab is <em>extinct</em>!
//       </Tab>
//     </TabWrapper>
//   );
// }
