import { PayView } from './pages';
import { Footer } from './components';

import './App.scss';

const App = () => {
    return (
        <div className="App">
            <PayView />
            <Footer class={'footer main-footer '} />
        </div>
    );
};

export default App;
