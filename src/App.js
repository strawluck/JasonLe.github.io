/*import app from './App.scss';*/
import Landing from './pages/Landing';
import About from './pages/About';
import Profile from './pages/Profile';
import Experiences from './pages/Experiences'

import statements from './content/about_me';
import experiences from './content/experiences';

function App() {
  return (
    <div>
      <Landing />
      <About statements={statements} />
      <Profile />
      <Experiences experiences={experiences} />
    </div>
  );
}

export default App;
