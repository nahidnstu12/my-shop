import {createContext} from 'react';

const ThemeContext = createContext({dark:false,toggleMode:()=>{}});

export default ThemeContext;