import React, { useEffect, useState } from 'react';

type LoaderType = {
  data: Object,
  loaded: boolean,
  error?: boolean
}

export declare interface QueryProps {
  children: React.ComponentType<LoaderType>,
  query: string
}

const queryWrapper = (WrappedComponent: React.ComponentType<LoaderType>, query: string) => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setLoaded(true);
        },
      )
      .catch(() => {
        setError(true);
      });
  }, []);

  return <WrappedComponent data={data} loaded={loaded} error={error} />;
};

const Query = ({ children, query }:QueryProps) => queryWrapper(children, query);

export default Query;
