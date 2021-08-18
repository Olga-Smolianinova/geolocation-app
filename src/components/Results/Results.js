import React from 'react';

import './Results.css';

export default function Results({ results }) {
  console.log(results);
  return (
    <>
      <div className="Results-div">
        {results.map(
          ({
            ip,
            version,
            city,
            region,
            region_code,
            country_code,
            country_code_iso3,
            country_name,
            country_capital,
            country_tld,
            continent_code,
            in_eu,
            postal,
            latitude,
            longitude,
            timezone,
            utc_offset,
            country_calling_code,
            currency,
            currency_name,
            languages,
            country_area,
            country_population,
            asn,
            org,
            error,
            reason,
          }) => (
            <ul key={ip} className="results-list">
              {error ? (
                <li className="error-msg">{reason}</li>
              ) : (
                <>
                  <li className="results-data string">
                    ip: <span className="results-text-str">"{ip}"</span>
                  </li>
                  <li className="results-data string">
                    version:{' '}
                    <span className="results-text-str">"{version}"</span>
                  </li>
                  <li className="results-data string">
                    city: <span className="results-text-str">"{city}"</span>
                  </li>
                  <li className="results-data string">
                    region: <span className="results-text-str">"{region}"</span>
                  </li>
                  <li className="results-data string">
                    region code:{' '}
                    <span className="results-text-str"> "{region_code}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    country code:{' '}
                    <span className="results-text-str">"{country_code}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    country code iso3:{' '}
                    <span className="results-text-str">
                      "{country_code_iso3}"
                    </span>{' '}
                  </li>
                  <li className="results-data string">
                    country name:{' '}
                    <span className="results-text-str">"{country_name}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    country capital:{' '}
                    <span className="results-text-str">"{country_capital}</span>{' '}
                    "
                  </li>
                  <li className="results-data string">
                    country tld:{' '}
                    <span className="results-text-str">"{country_tld}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    continent code:{' '}
                    <span className="results-text-str">"{continent_code}</span>{' '}
                    "
                  </li>
                  <li className="results-data string">
                    in_eu: <span className="results-text-str">"{in_eu}"</span>{' '}
                  </li>
                  <li className="results-data number">
                    postal: <span className="results-text-num">{postal}</span>{' '}
                  </li>
                  <li className="results-data number">
                    latitude:{' '}
                    <span className="results-text-num">{latitude}</span>{' '}
                  </li>
                  <li className="results-data number">
                    longitude:{' '}
                    <span className="results-text-num">{longitude}</span>{' '}
                  </li>
                  <li className="results-data string">
                    timezone:{' '}
                    <span className="results-text-str">"{timezone}"</span>{' '}
                  </li>
                  <li className="results-data number">
                    utc offset:{' '}
                    <span className="results-text-num">{utc_offset}</span>{' '}
                  </li>
                  <li className="results-data number">
                    country calling code:{' '}
                    <span className="results-text-num">
                      {country_calling_code}
                    </span>
                  </li>
                  <li className="results-data string">
                    currency:{' '}
                    <span className="results-text-str">"{currency}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    currency name:{' '}
                    <span className="results-text-str">"{currency_name}"</span>{' '}
                  </li>
                  <li className="results-data string">
                    languages:{' '}
                    <span className="results-text-str">"{languages}"</span>{' '}
                  </li>
                  <li className="results-data number">
                    country area:{' '}
                    <span className="results-text-num">{country_area}</span>
                  </li>
                  <li className="results-data number">
                    country population:{' '}
                    <span className="results-text-num">
                      {country_population}
                    </span>
                  </li>
                  <li className="results-data string">
                    asn: <span className="results-text-str"> "{asn}"</span>
                  </li>
                  <li className="results-data string">
                    org : <span className="results-text-str">"{org}"</span>{' '}
                  </li>
                </>
              )}
            </ul>
          ),
        )}
      </div>
    </>
  );
}
