
import { createStore } from 'redux';
import toggleBooks from './reducer/globalReducer';

export default createStore(toggleBooks)