import './App.css';

const routes = (
  <>
    <h1>Erik J Brown Tech LLC</h1>
    <p className="Alert">
      This website currently under development.
      <br />
      Visit <a href="https://erkjbro.github.io/">erkjbro.github.io</a> for
      my old portfolio site.
    </p>
  </>
);

const App = () => {
  return (
    <div className="App">
      <main>
        {routes}
      </main>
    </div>
  );
};

export default App;
