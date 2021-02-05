import React, { useState, useEffect, useContext } from 'react';

import SearchBar from 'Component/searchBar';
import Grid from 'Component/grid';
import Query from 'Component/query';
import Spinner from 'Component/spinner';
import Banner from 'Component/banner';
import Card from 'Component/card';

import i18n from 'Helper/i18nContext';
import globalContext from 'Helper/globalContext';

import style from './pageLanding.less';

type urbanAreas = {
  _links: {
    'ua:item': Array<{
      href: string,
      name: string
    }>
  }
}

type urbanImages = {
    photos: Array<{
      image: {
        web: string
      }
    }>
}

const getId = (url: string) => {
  const particle = url.split('/');
  return particle[particle.length - 2];
};

const Landing = () => {
  const { t } = useContext(i18n);
  const { searchString } = useContext(globalContext);

  return (
    <div className={style.page}>
      <SearchBar />
      <Banner withBorder>{t('searchLimitBanner')}</Banner>
      <Query query="https://api.teleport.org/api/urban_areas/">
        {({ data, loaded }) => (
          <>
            {loaded
              ? (
                <Grid itemList={
              // eslint-disable-next-line no-underscore-dangle
              (data as urbanAreas)._links['ua:item']
                .filter((one) => searchString.length === 0 || one.name.search(searchString) >= 0)
                .slice(0, 25)
                .map((one) => {
                  const id = getId(one.href);
                  const url = `https://api.teleport.org/api/urban_areas/${id}/images/`;

                  return ({
                    key: id,
                    node: (
                      <Query query={url}>
                        {({ data, loaded }) => {
                          const [src, setSrc] = useState('');

                          useEffect(() => {
                            if (loaded) {
                              setSrc((data as urbanImages)?.photos[0].image.web);
                            }
                          }, [loaded]);

                          return <Card name={one.name} image={src} cityId={id.split(':')[1]} />;
                        }}
                      </Query>
                    ),
                  });
                })
            }
                />
              )
              : <Banner><Spinner /></Banner>}
          </>
        )}
      </Query>
    </div>
  );
};

export default Landing;
