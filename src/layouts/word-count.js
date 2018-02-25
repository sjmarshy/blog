import React from 'react';
import { get } from 'lodash/fp';

function Template(props) {
    const count =
        get('pageResources.json.pathContext.count', props) ||
        get('pathContext.count', props) ||
        0;
    return (
        <p>
            The total published wordcount is:{' '}
            <span id="wordcount">{count}</span>
        </p>
    );
}

export default Template;
