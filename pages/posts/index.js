import React from 'react'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  { 
    slug: 'getting-started-with-nextjs', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: '서버사이드 랜더링', 
    date: '2023-02-18'
  },
  { 
    slug: 'getting-started-with-nextjs2', 
    title: 'Getting Started with NextJS', 
    image: 'getting-started-nextjs.png', 
    excerpt: '서버사이드 랜더링', 
    date: '2023-02-18'
  },
];

function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default AllPostsPage
