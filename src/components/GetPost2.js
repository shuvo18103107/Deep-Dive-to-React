import { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: '',
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return { ...state, loading: false, post: action.value };
        case 'error':
            return { loading: false, post: {}, error: action.value };
        default:
            return state;
    }
};
// eslint-disable-next-line react/function-component-definition
export default function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'success', value: data });
            })
            .catch(() => {
                dispatch({ type: 'error', value: 'There Was a problem in fetching' });
            });
    }, []);

    return (
        <div>
            {state.loading ? 'Loading.....' : state.post.title}
            {state.error || null}
        </div>
    );
}
