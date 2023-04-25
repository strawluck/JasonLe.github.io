/*import app from './App.scss';*/
import Landing from './pages/Landing';
import About from './pages/About';
import Profile from './pages/Profile';
import statements from './content/about_me';

function App() {
  return (
    <div>
      <Landing />
      <About statements={statements} />
      <Profile />
    </div>
  );
}

export default App;
