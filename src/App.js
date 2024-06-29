import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const headerTitle = 'Mi Baby Shower'
const headerName = 'Nombre'
const headerDate = "2024-09-16T11:30:00"
const headerInvitation = 'Te invitamos para celebrar la llegada de nuestro bebe al mundo.'
const headerLocation = 'Calle Cualquiera 123, Cualquier lugar.'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duración de la animación en milisegundos
      once: true,    // Si la animación debe ocurrir solo una vez
    });
  }, []);

  return (
    <div className="App">
      <Header headerTitle={headerTitle} headerName={headerName} headerDate={headerDate} headerInvitation={headerInvitation} headerLocation={headerLocation}/>
    </div>
  );
}

export default App;
