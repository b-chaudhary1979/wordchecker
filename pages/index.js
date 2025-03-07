import { useState } from 'react';

export default function WordChecker() {
  const [text, setText] = useState('');

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characterCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n+/).filter(Boolean).length;

  const handleClear = () => setText('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1>Word Checker Tool</h1>
        <textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ border: '1px solid black', padding: '5px' }}
        />
        <br />
        <button onClick={handleClear}>Clear</button>
        <h2>Analysis</h2>
        <p>Words: {wordCount}</p>
        <p>Characters: {characterCount}</p>
        <p>Sentences: {sentenceCount}</p>
        <p>Paragraphs: {paragraphCount}</p>
      </div>
    </div>
  );
}
