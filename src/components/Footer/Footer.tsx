import React, { FC, ReactElement } from 'react';
import { withRouter } from '@/hooks/withRouter';

const Footer: FC = (): ReactElement => {
  return <div className="footer"></div>;
};

export default withRouter(Footer);
