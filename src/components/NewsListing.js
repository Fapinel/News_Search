import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsListing = ({news}) => (
    <div className="row">
        {news.map( noticia => (
            <News
                key={noticia.url}
                noticia={noticia}
            />
        ))}

    </div>
);

NewsListing.propTypes = {
    news: PropTypes.array.isRequired
}
 
export default NewsListing;