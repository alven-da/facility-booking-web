import { stylesheet } from 'astroturf';
import clsx from 'clsx';

import React, { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';
import Label from '@/components/ui/Label/Label';

const styles = stylesheet`
  @use '../../../style/global' as *;

  .container {
    width: 100%;
    position: relative;
  }

  .componentWrapper {
    width: 100%;
    margin-top: 14px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();

  const onMemberClick = () => {
    navigate('/verify');
  };

  const onGuestClick = () => {};

  return (
    <React.Fragment>
      <div className={styles['container']}>
        <div className={clsx('row')}>
          <div className={clsx('col')}>
            <div className={styles.componentWrapper}>
              <Label text="Please select" />
            </div>
            <div className={styles.componentWrapper}>
              <Button
                text={'Member'}
                width={230}
                onclickHandler={onMemberClick}
              />
            </div>
            <div className={styles.componentWrapper}>
              <Button
                text={'Guest'}
                width={230}
                onclickHandler={onGuestClick}
              />
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </React.Fragment>
  );
};

export default Home;
