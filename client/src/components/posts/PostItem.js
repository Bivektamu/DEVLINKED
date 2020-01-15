import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import { deletePostById } from '../../actions/posts';

function PostItem({ posts, deletePostById }) {
  return (
    <div className='posts'>
      {posts.map(({ _id, text, user, likes, comments, date }, index) => {
        return (
          <div key={index} className='post bg-white p-1 my-1'>
            <div>
              <Link to={`/profile/${user._id}`}>
                <img className='round-img' src={user.avatar} alt='' />
                <h4>{user.name}</h4>
              </Link>
            </div>
            <div>
              <p className='my-1'>{text}</p>
              <p className='post-date'>
                Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
              </p>
              <button type='button' className='btn btn-light'>
                <i className='fas fa-thumbs-up'></i>
                <span>{likes.length}</span>
              </button>
              <button type='button' className='btn btn-light'>
                <i className='fas fa-thumbs-down'></i>
              </button>
              <Link to='/comment/' className='btn btn-primary'>
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
      })}
    </div>
  );
}

PostItem.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePostById: PropTypes.func.isRequired
};

export default connect(null, { deletePostById })(PostItem);
