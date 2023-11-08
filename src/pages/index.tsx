import { usePageQuery,usePostQuery } from '@/generated/graphql';
import React from 'react';

export default function Home() {

  // const[{ data }] = usePageQuery({
  //   variables: {
  //     slug: 'home',
  //   }
  // })
  const [{ data: { posts } }] = usePostsQuery()


  return (
   <h1>{posts}</h1>
  )
}
