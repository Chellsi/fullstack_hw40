import React, { useState, useEffect } from "react";
import '../App.css'

export const UsestateFetch = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (isVisible) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }
    }, [isVisible])

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Show Data</button>
            {isVisible && (
                <>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && <p>{data.map((item: any) => item.title)}</p>}
                </>
            )}
        </div>
    )
}