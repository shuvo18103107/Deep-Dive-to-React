import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

// eslint-disable-next-line react/function-component-definition
// export default function Posts({ match }) {
//     const { params } = match;
//     return (
//         <div>
//             <div>
//                 This is a {params.category} related {params.libary} framework
//             </div>
//         </div>
//     );
// }
// using hook recieve param now
// eslint-disable-next-line react/function-component-definition
export default function Posts() {
    const history = useHistory();
    const location = useLocation();
    const { category, libary } = useParams();
    console.log(parameter);
    function handleClick() {
        console.log(location);
        history.push('/dashboard');
    }
    return (
        <div>
            <div>
                This is a {category} related {libary} framework
            </div>
            <button type="button" onClick={handleClick}>
                Go to dashboard
            </button>
        </div>
    );
}
