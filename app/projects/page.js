
// Dummy imports
// import { getPosts } from '@/lib/posts'
// import { Post } from '@/ui/post'
 
export default async function Page() {
//   const posts = await getPosts()
 
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-6">Here are some of my recent projects:</p>

    </div>
    // <ul>
    //   {posts.map((post) => (
    //     <Post key={post.id} post={post} />
    //   ))}
    // </ul>
  )
}