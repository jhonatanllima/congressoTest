import React, { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';
import { handleScrollTop, formatDate } from '../../functions';

import { Container, CardNews, CardContent } from './styles';

export default function MoreNews({color}) {
  const [moreNews, setMoreNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moreNewsFormatted, setMoreNewsFormatted] = useState([]);

  const filteredNews = useCallback(props => {
    const formattedNews = props.slice(3, 9);

    setMoreNewsFormatted(formattedNews);
  }, []);

  useEffect(() => {
    filteredNews(moreNews);
  }, [moreNews, filteredNews]);

  const fetchData = useCallback(async page => {
    try {
      const { data } = await api.get('contents', {
        params: {
          getCover: true,
          pagesize: 9,
          page: page,
          index_id: 778, //773
        },
      });
      setMoreNews(data.rows);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearchMore = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    fetchData(currentPage);
  }, [fetchData, currentPage]);

  return (
    <Container>
      <CardNews>
        {moreNewsFormatted.map(item => (
          <CardContent
            to={{
              pathname: `/noticias/${item.url}`,
              idLocation: item.id,
            }}
            key={item.id}
            onClick={handleScrollTop}

            color={color}
          >
            <img
              src={`https://antigo.abqm.com.br/img/content_files/${item?.cover?.file}`}
              alt={item?.cover?.file}
            />

            <span color={color}>{formatDate(item.date)}</span>

            <p>{item.title}</p>
          </CardContent>
        ))}
      </CardNews>

      <button onClick={handleSearchMore}>Carregar Mais</button>
    </Container>
  );
}
