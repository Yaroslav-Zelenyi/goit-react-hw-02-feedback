import PropTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification ({message}) {
    return (
        <h1 className={css.notification__text}>
            {message}
        </h1>
    );
}

Notification.propTypes = {
 message: PropTypes.string,
};