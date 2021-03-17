import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
  


function CodeEditor() {

  return (
    <CodeMirror
      value="CUL"//{code}
      options={{
        theme: 'monokai',
        keyMap: 'sublime',
        mode: 'java',
      }}
    />
  );
}

export default CodeEditor;