import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import { routes } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((item, index) => (
                    <Route key={index} path={item.path} element={item.page} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default App;