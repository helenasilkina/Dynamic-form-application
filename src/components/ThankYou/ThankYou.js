import { connect } from 'react-redux';
import styles from './ThankYou.module.scss';

const ThankYou = ({firstName, lastName}) => {
    return (
        <div className={styles.thank_you_page}>
            <h2>{firstName} {lastName} Thank You for Successful Login</h2>
        </div>
    )
};

const mapStateToProps = (state) => (
    {
        firstName: state.firstName,
        lastName: state.lastName
    }
);

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);