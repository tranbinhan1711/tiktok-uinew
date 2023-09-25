import Button  from "~/components/Button/Button";
import PropTypes  from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItems({ data, onClick }) {
    const classes = cx('menu-item',{
        separate: data.separate,
    });
    console.log(data);
    return <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
         {data.title}
        </Button>;
}
MenuItems.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItems;


// rứa muốn hắn ra như nào nữa / trung nớ dạy lỏ vãi được rùi anh ưi
// nhìn code ớn ang 