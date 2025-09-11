import React from 'react';
import './App.css';
import Button from './components/common/buttons/Button';

function App() {
  return (
    <div className="App">
      <div className="p-4 space-y-3">
        <Button
          variant="primary"
          size="small"
          loading={false}
          onClick={() => alert('Primary clicked')}
        >
          This is primary
        </Button>
        <Button
          variant="submit"
          size="medium"
          loading={false}
          onClick={() => alert('Secondary clicked')}
        >
          This is secondary
        </Button>
        <Button
          variant="danger"
          size="large"
          loading={false}
          onClick={() => alert('Danger clicked')}
        >
          This is danger
        </Button>
      </div>
    </div>
  );
}

export default App;
