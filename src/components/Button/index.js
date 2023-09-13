import classNames from 'classnames/bind';
import Styles from './Button.module.scss'

const cx = classNames.bind(Styles)

function Button({ to, href,children, onClick}) {
    let Comp = 'button';
     const classnames = cx('wrapper')
    return (  
        <Comp classNames={classnames}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;