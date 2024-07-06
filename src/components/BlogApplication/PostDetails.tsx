import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Post 1', content: 'Content of Post 1' },
  { id: 2, title: 'Post 2', content: 'Content of Post 2' },
  { id: 3, title: 'Post 3', content: 'Content of Post 3' },
];

export default function PostDetails() {
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : null;
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
