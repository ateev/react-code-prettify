# react-code-prettify
A react component for making source-code snippets prettier using Google's [code-prettify](https://github.com/google/code-prettify).

![HTML code snippet](https://preview.ibb.co/bvEiLk/Screen_Shot_2017_05_03_at_5_30_22_PM.png)

:warning:  Experimental Stage. Supports only few languages. :warning:

# Usage

### Importing the component.
```javascript
  import Code from 'react-code-prettify';
```

### Assign your code snippet as a string to a variable.
```javascript
const codeString = `function map(f, a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
};`
```

### Passing the snippet to the component.
```
<Code
  codeString={example1}
  language="javascript"
 />
```

## Props

### CodeString
 Required prop. Need to be the string of code that you want to pretify and highlight.

### language
  Optional prop. You don't need to specify the language since it will automatically guess. Still you can specify a language by
  passing it in this props. If you want to use html, make sure you set the language to "html".

## What's Next ?
* Need support for more themes - [Issue 2](https://github.com/ateev/react-code-prettify/issues/2)


## Thanks

* Thanks to the contributors of [code-prettify](https://github.com/google/code-prettify) and Google.
* Thanks to [Alex Milanov](https://github.com/alex-milanov) for npm fork of `code-prettify`.
* Thanks to [Max Stoiber](https://github.com/mxstbr) for [styled-components](https://github.com/styled-components/styled-components) :nail_care:
