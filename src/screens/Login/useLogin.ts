import { useState } from 'react';

interface LoginHookResult {
  fullName: string;
  isError: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function useLogin(isLogin: (param: boolean) => void): LoginHookResult {
  const [fullName, setFullName] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fullName.trim() === '') {
      setIsError(true);
    } else {
      setIsError(false);
      localStorage.setItem('Login', 'true');
      isLogin(true);
    }
  };

  return {
    fullName,
    isError,
    handleInputChange,
    handleSubmit,
  };
}

export default useLogin;
