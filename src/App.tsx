import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Home from 'containers/pages/Home';
import Youtube from 'containers/pages/Youyube';

import './App.css';

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/you" element={<Youtube />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
