import React from 'react';
import { ConvertDateToString } from '../../helpers/dateHelper';
import './PostCard.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../redux/post/postSlice';
import { Grow } from '@material-ui/core';

function PostCard({ id, title, image, content, published }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(id));
  };
  return (
    <Grow in={true}>
      <div className='postCard'>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
          <img src={image} alt='post-img' />
        </Link>

        <p>{content?.substring(0, 100)}</p>
        <div className='postCard__icons'>
          <div className='postCard__icons-left'>
            <small>{ConvertDateToString(published)}</small>
          </div>
          <div className='postCard__icons-right'>
            <EditIcon style={{ color: 'lightskyblue', cursor: 'pointer' }} />
            <DeleteIcon
              onClick={handleDelete}
              style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </Grow>
  );
}

export default PostCard;
