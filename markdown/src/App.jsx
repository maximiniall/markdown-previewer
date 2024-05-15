import { useState, useEffect } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import the desired Prism.js theme
import 'prismjs/components/prism-jsx.min'; // Import the language you need
import './preview.css'; // Import the custom CSS file for Markdown elements
import defaultMarkdown from './components/defaultMarkdown';

// Configure Marked
marked.setOptions({
  breaks: true, // Interpret carriage returns as <br/>
  gfm: true, // Enable GitHub flavored markdown
  tables: true, // Enable table parsing
  highlight: function (code, lang) {
    return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup);
  },
});

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [markdown]);

  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  };

  return (
    <div className="box-border mx-auto text-center bg-slate-400">
      <div className="max-w-[600px] min-h-[200px] mx-auto mt-10 bg-red-800 p-4">
        <h1 className="mb-3 text-h1">Editor</h1>
        <textarea
          id="editor"
          className="resize-y outline-none w-[99%] min-h-[200px] p-2"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter your markdown here..."
        ></textarea>
        <p className="mt-2 text-base">Test</p>
      </div>
      <div className="max-w-[800px] min-h-[200px] mx-auto mt-10 bg-purple-400 p-8 text-wrap">
        <h1 className="text-h1">Preview</h1>
        <div
          id="preview"
          className="text-left bg-purple-200 px-8"
          dangerouslySetInnerHTML={getMarkdownText()}
        ></div>
      </div>
    </div>
  );
}

export default App;
