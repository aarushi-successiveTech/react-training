'use client'

import { useRouter } from "next/navigation"

const RetryButton = () =>{
    const router = useRouter();

    const handleRetry = () =>{
        router.refresh();
    };

    return (
        <button onClick={handleRetry}>Retry</button>
    );
}

export default RetryButton; 