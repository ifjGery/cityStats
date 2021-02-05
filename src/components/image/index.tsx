import React, { useState} from 'react';

import Banner from 'Component/banner';
import Spinner from 'Component/spinner';

import Css from 'Helper/classHelper';
import { hashCode } from 'Helper/helperFunctions';

import style from './image.less';

export declare interface ImageProps {
  src: string,
  alt: string,
  dir: 'horizontal' | 'vertical'
}

const Image = ({ src, alt, dir }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={Css([
      style.image,
      dir === 'horizontal' ? style['image-width'] : style['image-height'],
    ])}
    >
      {!loaded && <span className={style['image-error']}><Banner><Spinner /></Banner></span>}
      <img
        key={hashCode(src)}
        onLoad={() => setLoaded(true)}
        src={src}
        alt={alt}
        className={Css([!loaded && style.hidden])}
      />
    </div>
  );
};

Image.defaultProps = {
  src: 'noimage.png',
  alt: 'this is an image',
  dir: 'horizontal',
};

export default Image;
