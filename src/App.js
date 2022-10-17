import logo from './logo.svg';
import './App.css';
import Form from './DD1457-52/Form';
import BeneficiaryStatement from './DD1457-52/BeneficiaryStatement';
import IRABeneficiaryClaim from './Bank/IRABeneficiaryClaim';
import { InputForm } from './Input/Input-form';

function App() {
  return (
    <div className="App">
      <BeneficiaryStatement/>
      <InputForm/>
    </div>
  );
}

export default App;
