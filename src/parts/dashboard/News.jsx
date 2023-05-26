import React, { useEffect, useState } from "react";
import CardEvent from "../../components/Card";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function News() {
  const API_KEY = "fadd66b8f4a44663a8eda26eebe4ace3";
  function getPreviousDate() {
    const currentDate = new Date();
    const previousDate = new Date();
    previousDate.setDate(currentDate.getDate() - 7);

    const day = previousDate.getDate();
    const month = previousDate.getMonth() + 1;
    const year = previousDate.getFullYear();

    const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
    return formattedDate;
  }

  const [dataNews, setdataNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const previousDate = getPreviousDate();
    const url = `https://newsapi.org/v2/everything?q=pollution&from=${previousDate}&sortBy=popularity&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then((res) => {
        const filtered = res.data.articles.filter((item) => item.urlToImage !== null);
        setdataNews(filtered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const limitedDataNews = dataNews.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  function Loading() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="tittle-page">News</h1>
        </div>
      </div>
      <div className="row">
        <div className="row row-gap-5">
          {dataNews.length === 0 ? (
            <Loading />
          ) : (
            limitedDataNews.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <CardEvent key={index} image={item.urlToImage} title={item.title} description={item.description} link={item.url} />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="row container">
        <div className="col-lg-12">
          {currentPage > 1 && (
            <button className="btn btn-primary mr-2" onClick={previousPage}>
              Previous Page
            </button>
          )}
          {endIndex < dataNews.length && (
            <button className="btn btn-primary" onClick={nextPage}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
