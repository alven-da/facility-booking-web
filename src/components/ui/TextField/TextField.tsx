import { stylesheet } from 'astroturf';
import React, { FC, ReactElement } from 'react';

const styles = stylesheet`
  @use '../../../style/imports' as *;

  .container {
    width: var(--width);
    padding: 12px;
    position: relative;

    border-radius: 8px;
    color: white;
    
    p {
      text-align: center;
      font-size: 45px;
    }

    .textfieldMain {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      font-size: 24px;
      text-align: center;

      // border-color: $grey-lighter;
      // border-radius: 7px;

      width: var(--width);
    }
  }
`;

type TextFieldProps = {
  width?: number;
  ref: React.RefObject<HTMLInputElement | null>;
};

const TextField: FC<TextFieldProps> = ({
  width,
  ref
}: TextFieldProps): ReactElement => {
  return (
    <div
      className={styles.container}
      style={{ '--width': `${width ? width + 'px' : 'auto'}` }}
    >
      <input type="text" className={styles.textfieldMain} ref={ref} />
    </div>
  );
};

export default TextField;
