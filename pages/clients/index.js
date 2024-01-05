import { useRouter } from "next/router";

const Clients = () => {
    const router = useRouter();
    console.log(router.query, "in clients")

    return (
      <h2>Clients Page</h2>
    )
  }
  
  export default Clients