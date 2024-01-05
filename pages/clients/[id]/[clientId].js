import { useRouter } from "next/router";

const ClientId = () => {
    /** I used this URL -> http://localhost:3000/clients/max/min , 
    in router.query we will get max and min both values */
    const router = useRouter();
    console.log(router.query, "in client Id")

    return (
      <h2>Client with ID</h2>
    )
  }
  
  export default ClientId;