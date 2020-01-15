import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PostItem from './PostItem';
import PostForm from './PostForm.js';
import CommentItem from './CommentItem';
import Spinner from '../layout/Spinner';

import { getPostById } from '../../actions/posts';

const Post = ({ getPostById, match, posts: { post, loading } }) => {
  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById]);

  if (loading) return <Spinner />;

  return (
    <section>
      <div className='container'>
        <Link to='/posts' className='btn'>
          Back To Posts
        </Link>
        <PostItem post={post} />
        <PostForm postId={match.params.id} />
        {<CommentItem comments={post.comments} />}
      </div>
    </section>
  );
};

Post.propTypes = {
  getPostById: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { getPostById })(Post);
