import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import api from '../../services/api';
import { handleScrollTop } from '../../functions';


import arrowDown from '../../themes/assets/arrowDown.svg';

import { Container, ItemsMenu, Icon } from './styles';


function HomeNavContent() {
  const [navContent, setNavContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await api.get('contents', {
          params: {
            page: 1,
            pagesize: 99,
            index_id: 780,
            getCover: true,
          },
        });

        setNavContent(data.rows);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const Loader = (
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );

  return (
    <Container>
      {loading ? (
        Loader
      ) : (
        <ItemsMenu>
          {navContent.map(item => (

            <li key={item.id}>
              <div>
              {item.link_externo
                ?(

                    <a
                      href={item.link_externo}
                      target={item.link_em_nova_aba}
                    >
                      {item.title}
                    </a>

                  ) : (
                  <Link
                    to={{
                      pathname: '/provas',
                      idLocation: item.id,
                    }}
                    onClick={handleScrollTop}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ItemsMenu>
      )}

      {!isMobile
      ? (
        <Icon>
          <img src={arrowDown} alt="arrow Down"/>
        </Icon>
        )
      : ''
      }

    </Container>
  );
}

export default HomeNavContent;
