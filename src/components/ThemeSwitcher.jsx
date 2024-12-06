import React from 'react';

function ThemeSwitcher({ toggleTheme, theme }) {
    return (
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
}

export default ThemeSwitcher;
