import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to user!</h1>
        <p>Coming soon...</p>
        <p>Coming soon...</p>
        <p>Coming soon...</p>
      </header>
    </div>
  );
}

export default App;
