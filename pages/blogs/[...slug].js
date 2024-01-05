import { useRouter } from "next/router"

const BlogSlugPath = () => {
    const router = useRouter();

    return (
        <>
            <h2>Blog Slug Path</h2>
            <ul>
                {
                    router.query.slug.map(path => {
                        return <li><h3>{path}</h3></li>
                    })
                }
            </ul>
        </>
    )
  }
  
  export default BlogSlugPath
  
  /**
   * 1. blogs(slug)
   * 2. Link from next/link, instead of normal anchor
   */