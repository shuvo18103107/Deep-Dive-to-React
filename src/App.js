// import './assets/css/dark.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './Components/styles/Button.styled';
import { GlobalStyle } from './Components/styles/Global.styles';
import Tutorial from './Components/Tutorial';
import { darkTheme, lightTheme } from './theme/theme';
// eslint-disable-next-line react/function-component-definition
export default function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <Button background="blue" toogle={toggleTheme} theme={theme} />
                <Tutorial />
            </ThemeProvider>
        </>
    );
}
