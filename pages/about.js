import Link from "next/link"

const About = () => {
  return (
    <>
        <h2>About</h2>
        <div style={{display:"flex", flexDirection: "column"}}>
            <Link href='/blogs'>Blogs</Link>
            <Link href='/blogs/some/slug/is/there'>Blogs with slug</Link>
            <Link href='/products'>Products</Link>
            <Link href='/products/productId:2'>Product with Id</Link>
        </div>
    </>
  )
}

export default About