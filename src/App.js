import CardComponent from './CardComponent';
import profile from './dummy-profile/profile.json';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <CardComponent card={profile} />
      </div>
    </div>
  );
};

export default App;
