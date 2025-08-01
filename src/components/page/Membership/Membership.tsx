import { stylesheet } from 'astroturf';
import clsx from 'clsx';
import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';

import { HttpStatus, LabelAlignment } from '@/common/constants';

import Button from '@/components/ui/Button/Button';
import TextField from '@/components/ui/TextField/TextField';
import Label from '@/components/ui/Label/Label';
import { MemberInformation } from '../../../utils/types';
import { useNavigate } from 'react-router-dom';
import { apiSvcUrl } from '../../../common/config';

const styles = stylesheet`
  @use '../../../style/global' as *;

  .container {
    width: 100%;
    position: relative;
  }

  .componentWrapper {
    width: 75%;
    margin-top: 14px;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .componentWrapperHidden {
    display: none;
  }

  .textFieldWrapper {
    margin-top: 3px;
  }
`;

const Membership: FC = (): ReactElement => {
  const [memberId, setMemberId] = useState<string>('');
  const [memberInfo, setMemberInfo] = useState<MemberInformation | null>(null);
  const textRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!memberInfo) {
      return;
    }

    navigate('/select', { state: { memberInfo } });
  }, [memberInfo, navigate]);

  const toggleErrorMessageVisibility = () => {
    const currentElem = document.getElementById('error-message');

    currentElem?.classList.toggle(styles.componentWrapperHidden || '');
  };

  const onVerifyClick = () => {
    const memberIdFromText = textRef?.current?.value;

    if (!memberIdFromText) {
      return;
    }

    fetch(`${apiSvcUrl}/api/member/${memberIdFromText}`)
      .then((result) => {
        if (!result || result.status !== HttpStatus.Ok) {
          toggleErrorMessageVisibility();
          return;
        }

        return result.json();
      })
      .then((result) => {
        setMemberInfo(result as MemberInformation);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const labelMemberId = 'Enter your Recreation Club Member ID:';

  return (
    <React.Fragment>
      <div className={styles['container']}>
        <div className={clsx('row')}>
          <div className={clsx('col')}>
            <div className={styles.componentWrapper}>
              <Label text={labelMemberId} align={LabelAlignment.Center}></Label>
            </div>
            <div
              className={clsx(styles.componentWrapper, styles.textFieldWrapper)}
            >
              <TextField width={240} ref={textRef} />
            </div>
            <div
              className={clsx(
                styles.componentWrapper,
                styles.componentWrapperHidden
              )}
              id="error-message"
            >
              <Label
                isErrorMessage={true}
                text="Member ID Not Found"
                align={LabelAlignment.Center}
              />
            </div>
            <div className={styles.componentWrapper}>
              <Button
                text={'Verify'}
                width={230}
                onclickHandler={onVerifyClick}
              />
            </div>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </React.Fragment>
  );
};

export default Membership;
