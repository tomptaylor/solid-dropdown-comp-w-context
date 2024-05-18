import logo from './logo.svg';
import styles from './App.module.css';
import Dropdown from './components/dropdown';
import Header from './components/header';



function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      <Header></Header>
      </header>
            <Dropdown></Dropdown>
    </div>
  );
}

export default App;
