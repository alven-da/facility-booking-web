import React, { FC, ReactElement } from 'react';
import { stylesheet } from 'astroturf';

import { withRouter } from '@/hooks/withRouter';

const styles = stylesheet`
  @forward '../../style/imports.scss';

  .container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const NavBar: FC = (): ReactElement => {
  const title = process.env.APP_TITLE;
  return (
    <div className={styles.container}>
      <h1 className="">{title}</h1>
    </div>
  );
};

export default withRouter(NavBar);
