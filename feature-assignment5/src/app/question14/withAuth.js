const WithAuth = (WrappedComponent) => {
    return function Authenticated(props){
        const {isLoggedIn} = props; 
        if (isLoggedIn){
            return <WrappedComponent {...props}/>; 
        }
        return (
            <div>
            <h2>Please Log in</h2>
            </div>
        )
    }
}

const Profile =() =>{
    return(
        <div>
            <h2>Profile Page</h2>
            <li>Product1</li>
            <li>Product2</li>
            <li>Product3</li>
            <li>Product4</li>
        </div>
    );
}

const Result = WithAuth(Profile);
export default Result; 