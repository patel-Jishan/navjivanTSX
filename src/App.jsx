import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/appointment" component={Appointment} />
      </Switch>
      <WhatsAppButton />
    </>
  );
}
