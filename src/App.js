import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import JourneyPage from './Pages/JourneyPage';
import TrainsPage from './Pages/TrainsPage';
import PassengersPage from './Pages/PassengersPage';
import Ticketpage from './Pages/Ticketpage';
import Layout from './Pages/Layout';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/trains" element={<TrainsPage />} />
          <Route path="/passengers" element={<PassengersPage />} />
          <Route path="/summary" element={<Ticketpage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
