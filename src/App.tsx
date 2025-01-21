import './App.css';
import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import ButtonGroup from '@mui/material/ButtonGroup';

const MemoizedButtonGroup = React.memo(({ setPage }: { setPage: (page: number) => void }) => {
  return (
    <ButtonGroup fullWidth aria-label="Medium-sized button group">
      <Button key="one" onClick={() => { setPage(0) }}>Acount</Button>,
      <Button key="two" onClick={() => { setPage(1) }}>Password</Button>,
      <Button key="three" onClick={() => { setPage(2) }}>Preferences</Button>,
    </ButtonGroup>
  );
});

const MemoizedRenderPage = React.memo(({ page }: { page: number }) => {
  switch (page) {
    case 0:
      return <Page1 />;
    case 1:
      return <Page2 />;
    case 2:
      return <Page3 />;
    default:
      return null;
  }
});

function App() {
  const [page, setPage] = useState<number>(0);

  const memoizedSetPage = useCallback((page: number) => {
    setPage(page);
  }, []);

  return (
    <>
      <div className="App flex justify-center items-center h-screen">
        <div className="h-96 w-96 bg-slate-200 rounded-md p-2 text-black">
          <div>
            <MemoizedButtonGroup setPage={memoizedSetPage} />
          </div>
          <div className="mt-4">
            <MemoizedRenderPage page={page} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;