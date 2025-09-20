import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUser } from '../store/store';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.app.user);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setUser({
          id: 1,
          name: 'Иван Иванов',
          email: 'ivan@example.com',
        })
      );
    }, 500);
  }, [dispatch]);

  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      <div className="user-info">
        {user ? <span>Привет, {user.name}!</span> : <span>Загрузка...</span>}
      </div>
    </header>
  );
};

export default Header;
