import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle, } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPrewiew = (props) => {
        return (
            <div className={cx('prewiew')} tabIndex="-1" {...props } >
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        );

    };

    return (
        <div>
            <Tippy  interactive placement="bottom" offset={[-20,0]} delay={[800, 0]} render={renderPrewiew}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/66d1c8713b25dffdc2463db37bf5b829.jpeg?x-expires=1695830400&x-signature=dwVncdC3Q31yfSxT5IQocJWOppI%3D"
                        alt="anh"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nhism1606</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nhism </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
