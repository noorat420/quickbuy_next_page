// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Provider } from 'react-redux';
import { store } from '../store/Store'; 

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

