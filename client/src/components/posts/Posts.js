import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostForm from './PostsForm';
import PostItem from './PostsItem';
import Spinner from '../layout/Spinner';

import { getPosts } from '../../actions/posts';

const Posts = ({ getPosts, posts, loading }) => {
  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) return <Spinner />;

  return (
    <section>
      <div className='container'>
        <h1 className='large text-primary'>Posts</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome to the community!
        </p>
        <PostForm />
        <PostItem posts={posts.posts} />
      </div>
    </section>
  );
};

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { getPosts })(Posts);
