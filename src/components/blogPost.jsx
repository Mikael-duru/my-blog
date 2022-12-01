import React, { Component } from 'react';
import query from './query';
import Post from './post';

class BlogPost extends Component {
  state = { 
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const apiResponse = await response.json();
    const { posts } = apiResponse.data.user.publication;
    this.setState({ posts: posts});

    console.log(posts); 
  };


  render() { 
    return (
      <body className='bg-blue-50 min-h-screen'>
        <header className="container mx-auto px-2 md:px-3 lg:px-8 py-5 md:py-8">
          <h1 className="text-4xl font-bold leading-normal text-gray-900">Mikael's Blog</h1>
        </header>
        <main>
        {this.state.posts.map((post, index) => (
            <Post post={post} key={index} />
        ))}
      </main>
      </body>
    );
  }
}

export default BlogPost;