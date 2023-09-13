import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary = false,outline = false , text= false,small = false,large = false,disabled = false,rounded = false,children, onClick, ...passProps}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if(disabled){
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function'){
                delete props[key];
            }
        });  
    }

    if (to) {
        props.to = to; 
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper',{
        [classNames]: classNames,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
    }
    );

    return (  
        <Comp className={classes} {...props}>
             
            <span >{children}</span>

        </Comp>
    );
}

export default Button;