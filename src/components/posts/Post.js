import React from 'react';
import { Link } from 'react-router-dom';
import { ConvertDateToString } from '../../helpers/dateHelper';
import './Post.css';

function Post({ id, title, content, published, image }) {
  return (
    <div onClick={() => console.log(id)} className='post'>
      <div className='post__column'>
        <Link to={`/post/${id}`}>
          <img className='post__image' src={image} alt='post' />
        </Link>

        <small className='post__published'>
          Published {published && ConvertDateToString(published)}
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
