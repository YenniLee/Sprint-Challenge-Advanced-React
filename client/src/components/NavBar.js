import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function NavBar() {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <nav>
            <h2>Women's World Cup Players 2019</h2>
            <div className='dark-mode_toggle'>
                <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</button>
            </div>
        </nav>
    )
}

export default NavBar