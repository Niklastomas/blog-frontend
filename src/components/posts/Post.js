import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

function Post({ id, title, content, published, image }) {
  const date = published.split('T', 2);
  const time = date[1].split('.', 1);

  return (
    <div onClick={() => console.log(id)} className='post'>
      <div className='post__column'>
        <img className='post__image' src={image} alt='post' />
        <small className='post__published'>
          Published {date[0]} {time[0]}
        </small>
      </div>
      <div className='post__column'>
        <h3 className='post__title'>{title}</h3>
        <p className='post__content'>
          {content?.length < 100 ? content : content?.substring(0, 100) + '...'}
          <Link to={`/post/${id}`}>Read more</Link>
        </p>
      </div>
    </div>
  );
}

export default Post;
