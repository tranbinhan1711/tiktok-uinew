import Button  from "~/components/Button";

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItems({ data }) {
    console.log(data);
    return <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
         {data.title}
        </Button>;
}

export default MenuItems;


// rứa muốn hắn ra như nào nữa / trung nớ dạy lỏ vãi được rùi anh ưi
// nhìn code ớn ang 