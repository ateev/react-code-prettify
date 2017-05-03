:warning:  Experimental Stage. Supports only few languages. :warning:


# react-code-prettify
A react component for making source-code snippets prettier using Google's [code-prettify](https://github.com/google/code-prettify).


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
  passing it in this props.


