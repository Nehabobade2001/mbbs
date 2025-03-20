import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Services from "./pages/Services";
import FooterNew from "./components/footer/Footer";
import Destination from "./pages/Destination";
import AboutUs from "./pages/AboutUs";
import HelloMentor from "./pages/helloMentor";
import TestGmat from "./pages/TestGmat";
import TestPte from "./pages/TestPte";
import Neet from "./pages/Neet";
import Collaboration from "./pages/Collaboration";

import { TopMarquee } from "./components/Navbar/TopMarquee";
import TestTOEFL from "./pages/TestTOEFL";
import TestGRE from "./pages/TestGRE";
import TestIELTS from "./pages/TestIELTS";
import PsychometricTestPage from "./pages/PsychometricTest";

import India from "./pages/India";
import UnitedState from "./pages/UnitedState";
import France from "./pages/France";
import Japan from "./pages/Japan";
import Canada from "./pages/Canada";
import SriLanka from "./pages/SriLanka";
import Israel from "./pages/Israel";
import Germany from "./pages/Germany";
import Dubai from "./pages/Dubai";
import NewZealand from "./pages/NewZealand";
import Australia from "./pages/Australia";
import Spain from "./pages/Spain";
import Poland from "./pages/Poland";
import Netherland from "./pages/Netherland";
import Italy from "./pages/Italy";
import Europe from "./pages/Europe";
import Ireland from "./pages/Ireland";
import Career from "./pages/Career";
import Medical from "./pages/Medical";
import Engineering from "./pages/Engineering";
import Management from "./pages/management";
import Main from "./components/Navbar/Main";
import OTPVerification from "./pages/OTPVerification";

function App() {
  // const isAlternatePage = window.location.pathname === '/neet';
  // console.log( isAlternatePage);
  return (
    <div className="App">
      <Router>
        <TopMarquee />
        {/* <Navbar1 />
         */}
        <Main />
        {/* {isAlternatePage ? <Navbar /> : <Navbar1 />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/management" element={<Management />} />
          <Route path="/service" element={<Services />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/india" element={<India />} />
          <Route path="/us" element={<UnitedState />} />
          <Route path="/france" element={<France />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/srilanka" element={<SriLanka />} />
          <Route path="/is" element={<Israel />} />

          <Route path="/ireland" element={<Ireland />} />
          <Route path="/germany" element={<Germany />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/newzealand" element={<NewZealand />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/spain" element={<Spain />} />
          <Route path="/poland" element={<Poland />} />
          <Route path="/netherland" element={<Netherland />} />
          <Route path="/italy" element={<Italy />} />
          <Route path="/europe" element={<Europe />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/helloMentor" element={<HelloMentor />} />

          <Route path="/psychometric-test" element={<PsychometricTestPage />} />
          {/* <Route path="/test" element={<Navigate to="/test/test1" />} /> */}
          <Route path="/test/gmat" element={<TestGmat />} />
          <Route path="/test/ielts" element={<TestIELTS />} />
          <Route path="/test/pte" element={<TestPte />} />
          <Route path="/test/gre" element={<TestGRE />} />
          <Route path="/test/toefl" element={<TestTOEFL />} />
          <Route path="/neet" element={<Neet />} />

          {/* <Route path="/test" element={<Tests />}/> */}
          <Route path="/blog" element={<Neet />} />

          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/engineering" element={<Engineering />} />
        </Routes>
        <FooterNew />
      </Router>
    </div>
  );
}

export default App;
