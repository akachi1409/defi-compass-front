import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthorHeader from './components/basic/authorHeader/authorHeader.js'
import Author from './components/author/author.js';
import Footer from './components/basic/Footer/footer.js';
function App() {
  return (
    <div className="App">
      test
      <AuthorHeader/>
      <Author/>
      <Footer/>
    </div>
  );
}

export default App;
