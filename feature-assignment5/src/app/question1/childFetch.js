import FetchData from "./fetchData";

const ErrorDisplay = ({errorMessage, onRetry}) => {
    return (
        <div>
            <p>Error: {errorMessage}</p>
            <button onClick={onRetry}>Retry</button>
        </div>
    );
}

export default ErrorDisplay;