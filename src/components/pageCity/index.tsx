import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Action from 'Component/action';
import Query from 'Component/query';
import Spinner from 'Component/spinner';
import Banner from 'Component/banner';

import style from './pageCity.less';

interface ParamTypes {
  cityId: string
}

// eslint-disable-next-line no-unused-vars
enum catTypes {
  // eslint-disable-next-line no-unused-vars
  float = 'float',
  // eslint-disable-next-line no-unused-vars
  int = 'int',
  // eslint-disable-next-line no-unused-vars
  string = 'string'
}

type response = {
  categories: Array<statCategory>
};

type subCategory = {
    // eslint-disable-next-line camelcase
    float_value?: number,
    // eslint-disable-next-line camelcase
    int_value?: number,
    // eslint-disable-next-line camelcase
    string_value?: string
    id: string,
    label: string,
    type: catTypes
    [key: string]: string | number | undefined
};

type statCategory = {
  id: string,
  label: string,
  data: Array<subCategory>
};

function getValue(data: subCategory): string | number | undefined {
  return data[`${data.type}_value`];
}

const isCitySize = (data: statCategory) => data.id === 'CITY-SIZE';
const isPollution = (data: statCategory) => data.id === 'POLLUTION';
const isConnectivity = (data: statCategory) => data.id === 'TRAVEL-CONNECTIVITY';

const Landing = () => {
  const history = useHistory();
  const { cityId } = useParams<ParamTypes>();

  return (
    <div className={style.page}>
      <Action content="go back" contentCallback={() => history.push('/')} />
      <Query query={`https://api.teleport.org/api/urban_areas/slug:${cityId}/details/`}>
        {({ loaded, data }) => (
          <>
            {loaded ? (
              <table className={style.table}>

                <tr className={style['info-header']}>
                  <td colSpan={2}>City Stats</td>
                </tr>
                {(data as response).categories.filter(isCitySize)[0].data.map((one) => (
                  <tr key={one.id}>
                    <td>{one.label}</td>
                    <td>{getValue(one)}</td>
                  </tr>
                ))}

                <tr className={style['info-header']}>
                  <td colSpan={2}>Pollution</td>
                </tr>
                {(data as response).categories.filter(isPollution)[0].data.map((one) => (
                  <tr key={one.id}>
                    <td>{one.label}</td>
                    <td>{getValue(one)}</td>
                  </tr>
                ))}

                <tr className={style['info-header']}>
                  <td colSpan={2}>Connectiviy</td>
                </tr>
                {(data as response).categories.filter(isConnectivity)[0].data.map((one) => (
                  <tr key={one.id}>
                    <td>{one.label}</td>
                    <td>{getValue(one)}</td>
                  </tr>
                ))}
              </table>
            )
              : <Banner><Spinner /></Banner>}
          </>
        )}
      </Query>
    </div>
  );
};

export default Landing;
