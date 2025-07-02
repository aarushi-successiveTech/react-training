"use client";

import { useEffect } from 'react';

const withDataFetching = (WrappedComponent) => {
  return function WithDataComponent({ data, ...props }) {
   
    useEffect(() => {
      if (data) {
        console.log('%c[HOC withDataFetching] Received data:', 'color: purple; font-weight: bold;', data);
      }
    }, [data]);
   if (!data) {
      return <p>Loading data or no data found...</p>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};
function UserList({ data }) {
  return (
    <div style={{ padding: '1rem', borderRadius: '8px' }}>
      <h3>User List</h3>
      
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name} - ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}
UserList.displayName = 'UserList';

export default withDataFetching(UserList);