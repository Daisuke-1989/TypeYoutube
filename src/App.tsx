import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import Youtube from 'containers/pages/Youyube';

import './App.css';

const App: FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Youtube />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
