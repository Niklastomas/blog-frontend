import { CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ConvertDateToString } from '../../helpers/dateHelper';
import { getPost } from '../../redux/post/postSlice';
import './PostDetailView.css';

function PostDetailView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, status } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <div className='postDetail'>
      {status === 'loading' ? (
        <CircularProgress />
      ) : (
        <>
          {' '}
          <div className='postDetail__header'>
            <h1>{post.title}</h1>
            <img src={post.image} alt='' />
            <div className='postDetail__info'>
              <small>
                {post.published && ConvertDateToString(post.published)}
              </small>
              <small>
                By <strong>{post?.user?.username}</strong>
              </small>
            </div>
          </div>
          <div className='postDetail__body'>
            <p>{post.content}</p>
          </div>{' '}
        </>
      )}
    </div>
  );
}

export default PostDetailView;
