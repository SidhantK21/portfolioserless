import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './mainpage/Landingpage';
import { SignupFormDemo } from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          by this all the request coming to the /route will be
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactforproject" element={<SignupFormDemo/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
