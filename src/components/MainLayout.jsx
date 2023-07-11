import { Outlet } from 'react-router-dom';
import Navs from './Nav';
import AppTitle from './AppTitle';

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />
      <Outlet />
    </div>
  );
};
export default MainLayout;
