import { useEffect, useState } from 'react';

// eslint-disable-next-line react/function-component-definition
export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState('');
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setPost(data);
                seterror('');
            })
            .catch(() => {
                setLoading(false);
                setPost({});
                seterror('There was a problem');
            });
    }, []);
    return (
        <div>
            {loading ? 'Loading.....' : post.title}
            {error || null}
        </div>
    );
}
