import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import TravelPreferencesForm from './components/TravelPreferencesForm';
import HealthSafetyForm from './components/HealthSafetyForm';
import Success from './components/Success';
 
function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<PersonalInfoForm />} />
<Route path="/travel" element={<TravelPreferencesForm />} />
<Route path="/health" element={<HealthSafetyForm />} />
<Route path="/success" element={<Success />} />
</Routes>
</BrowserRouter>
  );
}
 
export default App;