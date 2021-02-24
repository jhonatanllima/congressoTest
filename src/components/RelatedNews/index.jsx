import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';
import { handleScrollTop, formatDate } from '../../functions';

import { Container, CardContent } from './styles';

function RelatedNews() {
  const [relatedNews, setRelatedNews] = useState([]);
  const [relatedNewsFormatted, setRelatedNewsFormatted] = useState([]);

  const filteredNews = useCallback(props => {
  const formattedNews = props.slice(6, 9999);
  setRelatedNewsFormatted(formattedNews);
   }, []);

   useEffect(() => {
     filteredNews(relatedNews);
   }, [relatedNews, filteredNews]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get('contents', {
          params: {
            page: 1,
            index_id: 778, //773
            getCover: true,
            pagesize: 9999,
          },
        });

        setRelatedNews(data.rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>{''}</h1>

      {relatedNewsFormatted.map(item => (
        <CardContent
          to={{
            pathname: `/noticias/${item.url}`,
            idLocation: item.id,
          }}
          key={item.id}
          onClick={handleScrollTop}
        >
          <span>
            <strong>{item?.date.substr(8, 10)}</strong>
            <h5>{formatDate(item?.date).substr(6, 8)}</h5>
          </span>

          <div>
            <h3>{item.title}</h3>
            <p>{item.resume}</p>
          </div>
        </CardContent>
      ))}
    </Container>
  );
}

export default RelatedNews;
