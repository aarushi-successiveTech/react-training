import axios from "axios";
import RetryButton from "./retryFetch";
const GetUser = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    const user = response.data;

    return (
      <div>
        <h2>User Info</h2>
        <p>{user.id}</p>
        <p>{user.name}</p>

        <RetryButton />
      </div>
    );
  } catch (error) {
    console.error(error);
    return <p>Error loading user data</p>;
  }
};
export default GetUser;