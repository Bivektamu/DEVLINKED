import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getGithubRepos } from '../../actions/profile';

function GithubRepos({ githubusername, getGithubRepos, repos }) {
  useEffect(() => {
    getGithubRepos(githubusername);
  }, [getGithubRepos, githubusername]);

  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>
        <i className='fab fa-github'></i> Github Repos
      </h2>
      {repos.map(
        ({
          id,
          name,
          description,
          stargazers_count,
          watchers_count,
          forks_count,
          html_url
        }) => {
          return (
            <div className='repo bg-white p-1 my-1' key={id}>
              <div>
                <h4>
                  <a href={html_url} target='_blank' rel='noopener noreferrer'>
                    {name}
                  </a>
                </h4>
                <p>{description}</p>
              </div>
              <div>
                <ul>
                  <li className='badge badge-primary'>
                    Stars: {stargazers_count}
                  </li>
                  <li className='badge badge-dark'>
                    Watchers: {watchers_count}
                  </li>
                  <li className='badge badge-light'>Forks: {forks_count}</li>
                </ul>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

GithubRepos.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  githubusername: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(GithubRepos);
