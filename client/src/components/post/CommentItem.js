import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeComment } from '../../actions/posts';

const CommentItem = ({ comments, removeComment, postId }) => {
  return (
    <div className='comments'>
      {comments.map(({ _id, text, name, avatar, user, date }) => {
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
                Posted on {<Moment format='YYYY/MM/DD'>{date}</Moment>}
              </p>
            </div>
            <button
              type='button'
              class='btn btn-danger'
              onClick={() => removeComment(postId, _id)}
            >
              <i class='fas fa-times'></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

CommentItem.propTypes = {
  removeComment: PropTypes.func.isRequired,
  match: PropTypes.array,
  comments: PropTypes.array.isRequired
};

export default connect(null, { removeComment })(CommentItem);
