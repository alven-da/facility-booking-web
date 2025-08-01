import { stylesheet } from 'astroturf';
import React, { FC, ReactElement } from 'react';

import { LabelAlignment } from '@/common/constants';
import clsx from 'clsx';

const styles = stylesheet`
  @use '../../../style/imports' as *;

  .container {
    width: auto;
    padding: 12px;
    position: relative;

    border-radius: 8px;
    color: $grey-default;
    text-align: var(--align);
  }

  .containerError {
    color: red;
  }
`;

/**
 * Label component props
 */
interface LabelProps {
  text: string;
  align?: LabelAlignment;
  isErrorMessage?: boolean;
}

const Label: FC<LabelProps> = ({
  text,
  align = LabelAlignment.Center,
  isErrorMessage = false
}: LabelProps): ReactElement => {
  return (
    <div
      className={clsx(
        styles.container,
        isErrorMessage ? styles.containerError : ''
      )}
      style={{
        '--align': `${align === LabelAlignment.Center ? 'center' : 'left'}`
      }}
      aria-label={text}
    >
      {text}
    </div>
  );
};

export default Label;
