import React from 'react';

function Template({ pageResources: { json: { pathContext: { count } } } }) {
    return (
        <p>
            The total published wordcount is:{' '}
            <span id="wordcount">{count}</span>
        </p>
    );
}

export default Template;
