import React from 'react';

const ShowCount = function ({ count, title }) {
    console.log(`rendering ${title}....`);

    return (
        <p>
            {title} is {count}
        </p>
    );
};

export default React.memo(ShowCount);
