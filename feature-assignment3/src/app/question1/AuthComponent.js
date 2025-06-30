"use client";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";
import { useRouter } from "next/navigation";

const Authentication = () => {
  const { logIn, username, userLogin, userLogout } = useContext(AuthContext);
  const [inputname, setInputname] = useState("");
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();

  const handleLogin = () => {
    userLogin(inputname.trim());
  };

  const handleLogout = () => {
    userLogout();
    setInputname("");
  };

  const backgroundColor = darkMode ? "#222" : "#f9f9f9";
  const textColor = darkMode ? "#fff" : "#000";

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Home Page</h1>
      <br />
      <nav style={{ display: "flex", justifyContent: "center" }}>
        {logIn ? (
          <button style={{ padding: "12px 20px" }} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Your name : "
              value={inputname}
              onChange={(e) => setInputname(e.target.value)}
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <button style={{ padding: "12px 20px" }} onClick={handleLogin}>
              Login
            </button>
          </>
        )}
      </nav>
      <br />
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        {logIn ? `welcome ${username}!` : "Please Log in"}
      </p>
      {/* <button onClick={toggleTheme} style={{ padding: "16px 30px" }}>
        Dark
      </button>
      <button style={{marginLeft: '12px', padding: "16px 30px"}} onClick={()=> router.push('/about')}>
        About</button> */}

        <div style={{
          marginTop: "40px",
          padding: "20px",
          border: "1px solid",
          borderRadius: "8px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: darkMode ? "#333" : "#fff",
        }}>
          <h2 style={{textAlign: 'center'}}>Dashboard</h2>
          <ul style={{ fontSize: "18px", lineHeight: "1.8" }}>
            {/* <button style={{marginLeft: '12px', padding: "16px 30px"}}>Profile</button>
            <br/>
            <br /> */}
            <button onClick={toggleTheme} style={{marginLeft: '12px', padding: "16px 30px"}}>Dark</button>
            
            <button onClick={() => router.push('/about')} 
              style={{marginLeft: '12px', padding: "16px 30px"}}>
              About</button> 
              
            <button onClick = {() => router.push('/questions')}style={{marginLeft: '12px', padding: "16px 30px"}}>Questions</button> 
          </ul>
        </div>
    </div>

  );
};

export default Authentication;
