/*Develop a language switcher application using the useContext hook.
Create a context to manage the current language (e.g., English or Spanish).
Provide buttons to switch between languages.
Use the useContext hook to access the current language value.
Display different language versions of the application's content.*/ 


'use client';
import { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Content = () => {
  const { language } = useContext(LanguageContext);

  const messages = {
    en: {
      greeting: "Hello! Welcome to the app.",
    },
    es: {
      greeting: "¡Hola! Bienvenido a la aplicación.",
    },
  };

  return <h3>{messages[language].greeting}</h3>;
};

const LanguageButtons = () => {
  const { changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => changeLanguage('en')} style={{ marginRight: '10px' }}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
};

export default function Page() {
  return (
    <LanguageProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Language Switcher</h2>
        <LanguageButtons />
        <Content />
      </div>
    </LanguageProvider>
  );
}
