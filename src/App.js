import React, { Fragment, useState, useEffect }  from 'react';
import Header from './components/Header';
import Form from './components/Form';
import NewsListing from './components/NewsListing';

function App() {

  // Define category and News
  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);


  useEffect(() => {
    const consultAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e7fd31dc2d9e4ddf88e2155f65d16753`;

      const answer = await fetch(url);
      const news = await answer.json();

      saveNews(news.articles);
    }
    consultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header 
        title='News Search'
      />

      <div className="container white">
        <Form
        saveCategory={saveCategory}
         />

         <NewsListing
            news={news}
         />
      </div>

    </Fragment>

    
  );
}

export default App;
