import React from 'react';

import { stylesheet } from 'astroturf';

import loadingSpinner from '@/assets/loader-icon.gif';

const styles = stylesheet`
  @use '../../../style/imports' as *;

  .wrapper {
    text-align: center;
  }

  .text {
    font-size: $font-size-medium;
    margin-bottom: 15px;
    font-weight: 600;
  }

  .image {
    margin-top: 15px;
  }
`;

type PreloaderProps = {
  text: string;
};

function Preloader({ text }: PreloaderProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['text']}>{text}</div>
      <div className={styles['image']}>
        <img src={loadingSpinner} />
      </div>
    </div>
  );
}

export default Preloader;
