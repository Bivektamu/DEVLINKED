import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import {
  deletePostById,
  addLikeToPost,
  removeLikeFromPost
} from '../../actions/posts';

function PostsItem({
  posts,
  deletePostById,
  addLikeToPost,
  removeLikeFromPost
}) {
  return (
    <div className='posts'>
      {posts.map(
        ({ _id, text, name, avatar, user, likes, comments, date }, index) => {
          return (
            <div key={_id} className='post bg-white p-1 my-1'>
              <div>
                <Link to={`/profile/${user}`}>
                  <img className='round-img' src={avatar} alt='' />
                  <h4>{name}</h4>
                </Link>
              </div>
              <div>
                <p className='my-1'>{text}</p>
                <p className='post-date'>
                  Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
                <button
                  type='button'
                  className='btn btn-light'
                  onClick={() => addLikeToPost(_id)}
                >
                  <i className='fas fa-thumbs-up'></i>&nbsp;
                  <span>{likes.length}</span>
                </button>
                <button
                  type='button'
                  className='btn btn-light'
                  onClick={() => removeLikeFromPost(_id)}
                >
                  <i className='fas fa-thumbs-down'></i>
                </button>
                <Link to={`/posts/${_id}`} className='btn btn-primary'>
                  Discussion{' '}
                  <span className='comment-count'>{comments.length}</span>
                </Link>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => deletePostById(_id)}
                >
                  <i className='fas fa-times'></i>
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

PostsItem.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePostById: PropTypes.func.isRequired,
  addLikeToPost: PropTypes.func.isRequired,
  removeLikeFromPost: PropTypes.func.isRequired
};

export default connect(null, {
  deletePostById,
  addLikeToPost,
  removeLikeFromPost
})(PostsItem);
