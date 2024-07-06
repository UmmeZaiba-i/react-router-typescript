// Create a blog application with a list of posts and a post detail page.
//  Implement navigation to the post detail page and display the post title based on the URL parameter. 
//  Also, highlight the current navigation tab.

import { Outlet, useNavigate } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3' },
];

export default function Blog() {
  const navigate = useNavigate();

  const handlePostClick = (id: number) => {
    navigate(`/blog/${id}`);
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handlePostClick(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
      <Outlet/>
    </div>
  );
}
