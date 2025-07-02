
import UserListWithData from './UserListClient'; 

async function getUsers() {
  try {
   
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

   
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    return response.json();
  } catch (error) {
    console.error(error);
    return []; 
  }
}

export default async function DataFetcher() {
  
  console.log('Fetching data on the server...');
  const users = await getUsers();
  console.log('Data fetched successfully on the server.');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Data Fetching</h1>
      
      
      
      <UserListWithData data={users} />
    </main>
  );
}