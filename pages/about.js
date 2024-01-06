import Link from "next/link"
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  const loadBlogs = (e) => {
    router.push(`/blogs`);
     //router.replace => it will also navigate to blogs page , its just that we can't go back to about page using replace
    // router.replace(`/blogs`);
  };

  return (
    <>
        <h2>About</h2>
        <div style={{display:"flex", flexDirection: "column"}}>
            <Link href='/blogs'>Blogs</Link>
            <Link href='/blogs/some/slug/is/there'>Blogs with slug</Link>
            <Link href='/products'>Products</Link>
            <Link href='/products/productId:2'>Product with Id</Link>
        </div>
      <button onClick={loadBlogs}>Click to Navigate to blogs</button>

    </>
  )
}

export default About