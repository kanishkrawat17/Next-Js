import { useRouter } from "next/router";

const ClientIdHomePage = () => {
    const router = useRouter();
    console.log(router.query, "in ClientIdHomePage")

    return (
      <h2>ClientIdHomePage</h2>
    )
  }
  
  export default ClientIdHomePage