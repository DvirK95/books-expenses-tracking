import './Login.css';
import useLogin from './useLogin';

const Login: React.FC<{ isLogin: (isLogin: boolean) => void }> = (props) => {
  const { fullName, isError, handleInputChange, handleSubmit } = useLogin(
    props.isLogin
  );

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Place Your name..."
          className={isError ? 'error' : ''}
          value={fullName}
          onChange={handleInputChange}
        />
        <button className="btn btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
