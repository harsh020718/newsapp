import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${CapitalizeFirstLetter(
    props.category
  )} - Only Facts No News`;

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1089a31847234ee2b2a976f622c089d6&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true); // jab-jab vo url ko hit karega loading hogi
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);

    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
     // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=1089a31847234ee2b2a976f622c089d6&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "40px 0px", marginTop: "90px" }}
      >
        Sach Aapke Ghar Tak
      </h1>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    urlToImage={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
