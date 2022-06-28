import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({ to, href, children, onclick }) {
    let Comp = 'button';
    const props = {
        onclick,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper');

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}
export default Button;
