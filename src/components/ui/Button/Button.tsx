import { stylesheet } from 'astroturf';
import clsx from 'clsx';
import React, { FC, ReactElement } from 'react';

const styles = stylesheet`
  @use '../../../style/imports' as *;

  .container {
    background-color: $green-default;
    width: var(--width);
    // padding: 10px;
    padding-top: 1px;
    padding-bottom: 1px;

    position: relative;

    border-radius: 8px;
    color: white;

    &:active {
      background-color: $green-darker;
    }
    
    p {
      text-align: center;
      font-size: 24px;
    }

    &-disabled {
      pointer-events: none;
      background-color: $grey-default;
    }
  }
`;

type ButtonProps = {
  text: string;
  width?: number;
  onclickHandler?: () => void;
  isDisabled?: boolean;
};

const Button: FC<ButtonProps> = ({
  text,
  width,
  isDisabled,
  onclickHandler
}: ButtonProps): ReactElement => {
  return (
    <div
      onClick={onclickHandler}
      className={clsx(
        styles['container'],
        isDisabled ? styles['container-disabled'] : ''
      )}
      style={{ '--width': `${width ? width + 'px' : 'auto'}` }}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
