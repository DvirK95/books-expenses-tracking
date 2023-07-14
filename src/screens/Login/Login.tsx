import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Place Your name..."
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
