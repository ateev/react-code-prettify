import React from 'react';
import prettify from 'code-prettify';
import {TomorrowNight} from './styles';

class Code extends React.Component {
    render() {
        const codeData = prettify.prettyPrintOne(this.props.codeString);
        const codeClassName = this.props.language !== undefined ? `language-${this.props.language}` : undefined;
        return (
            <TomorrowNight>
                <pre className="prettyprint">
                    <code className={codeClassName}>
                        <div dangerouslySetInnerHTML={{__html: codeData}} />
                    </code>
                </pre>
            </TomorrowNight>
        );
    }
}

export default Code;