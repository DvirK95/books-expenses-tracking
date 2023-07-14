import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { menuActions } from '../../store/menu-slice';

interface LoginHookResult {
  fullName: string;
  isError: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function useLogin(): LoginHookResult {
  const dispatch = useDispatch();
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
      dispatch(menuActions.login());
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
