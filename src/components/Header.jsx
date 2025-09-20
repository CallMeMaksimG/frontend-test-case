import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser, selectUserLoading, fetchUser } from '../store/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {loading || !user ? (
          <span>Загрузка...</span>
        ) : (
          <span>Привет, {user.name}!</span>
        )}
      </div>
    </header>
  );
};

export default Header;
