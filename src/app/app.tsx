
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


const App = (): JSX.Element => {
  return (
    <main >
      <Router>
        <Link to='page1'>
          page 1
        </Link>
        <Link to='page2'>
          page 1
        </Link>
        <Routes>
          <Route path='page1'
            element={
              <p>SOY PAGE 1</p>
            }
          />
          <Route path='page2'
            element={
              <p>SOY PAGE 2</p>
            }
          />
        </Routes>
      </Router>,
    </main>
  );
};

export default App;
