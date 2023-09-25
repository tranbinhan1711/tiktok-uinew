import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItems } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icon';
import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems title=" For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>} />
                <MenuItems title=" Fllowing" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon/>} />
                <MenuItems title=" LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>} />
            </Menu>
        </aside>
    );
}
export default Sidebar;
