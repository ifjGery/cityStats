import React, { useEffect, useRef } from 'react';

export declare interface AnyClickProps {
  children: React.ReactNode,
  callback: Function
  excludeRef?: React.MutableRefObject<HTMLElement | null>
}

const useOutsideAlerter = (
  ref : React.MutableRefObject<HTMLElement | null>,
  callback : Function,
  excludeRef: React.MutableRefObject<HTMLElement | null> | undefined,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const partOfChild = ref.current?.contains(event.target as Node);
      const partOfRef = excludeRef?.current?.contains(event.target as Node);

      if (
        (excludeRef && !partOfChild && !partOfRef)
            || (!excludeRef && !partOfChild)
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

const AnyClick = ({ children, callback, excludeRef }: AnyClickProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useOutsideAlerter(wrapperRef, callback, excludeRef);

  return (
    <div ref={wrapperRef}>{children}</div>
  );
};

export default AnyClick;
