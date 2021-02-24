import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { handleScrollTop, formatDate } from '../../functions';

import { Container, News, Blur } from './styles';

import {
  MoreNews,
} from '../../components';

function LastedNews() {
  const [lastedNews, setLastedMoreNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('contents', {
          params: {
            page: 1,
            pagesize: 3,
            index_id: 778, //773
            getCover: true,
          },
        });

        setLastedMoreNews(data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
    <Blur />
      <h1>ÚLTIMAS NOTÍCIAS</h1>

      <section>
          {lastedNews.map(item => (
            <News
            to={{
              pathname: `/noticias/${item.url}`,
                idLocation: item.id,
              }}
              onClick={handleScrollTop}
              key={item.id}
            >
              <img
                src={`https://antigo.abqm.com.br/img/content_files/${item?.cover?.file}`}
                alt={item?.cover?.file}
              />

              <div>
                 <span>{formatDate(item.date)}</span>
                <p>{item.title}</p>
              </div>
            </News>
          ))}
      </section>
      <MoreNews  color={'#fff'}/>
    </Container>
  );
}

export default LastedNews;
