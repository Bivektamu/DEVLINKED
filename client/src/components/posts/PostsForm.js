import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPost } from '../../actions/posts';
const PostsForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    text: ''
  });

  const { text } = formData;

  const onSubmit = e => {
    e.preventDefault();
    addPost(formData);
  };

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form className='form my-1' onSubmit={e => onSubmit(e)}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          //   required
          value={text}
          onChange={e => setFormData({ [e.target.name]: e.target.value })}
        ></textarea>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostsForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostsForm);
