import Profile from "./profile/Profile";

function App() {
  return (
    <div>
      <header>
        <Profile
          fullName="Mohamed Amr Omar El-Farouk"
          bio="Simple but significant"
          profession="entrepreneur"
        >
          <img src="https://picsum.photos/400/400?random=1" alt="hi" />
        </Profile>
      </header>
    </div>
  );
}

export default App;
