import React from 'react';
import prettify from 'code-prettify';
import {TomorrowNight} from './styles';

class Code extends React.Component {
    htmlEscape(s) {
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    render() {
        let codeData = prettify.prettyPrintOne(this.props.codeString);

        // If language is set to 'html' replace all html entities with character codes
        if(this.props.language == 'html'){
            const codeDataArray = this.props.codeString.split('');
            const codeEscaped = codeDataArray.map(letter => this.htmlEscape(letter)).join('');
            codeData = prettify.prettyPrintOne(codeEscaped);
        }
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