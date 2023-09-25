import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/66d1c8713b25dffdc2463db37bf5b829.jpeg?x-expires=1695830400&x-signature=dwVncdC3Q31yfSxT5IQocJWOppI%3D"
                    alt=""
                />
                <div className=''>
                    <Button className={cx('fllow-btn')} primary >Fllow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nhism1606</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nhism </p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>217.6K </strong>
                    <span className={cx('label')}>Fllowers</span>
                    <strong className={cx('value')}>1.7M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
