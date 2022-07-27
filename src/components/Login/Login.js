import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFields, validateFields } from './services/Login.service';
import styles from './Login.module.scss';
import useGetUserFields from "../../api/useGetUserFields";

const Login = ({logIn}) => {
    const [loginData, setLoginData] = useGetUserFields();
    let navigate = useNavigate();

    const onChangeField = (id) => {
        return (event) => {
            const changedData = [...loginData].map(item => {
                if (Array.isArray(item)) {
                    return item.map(field => {
                        if (field.id === id) {
                            field.value = event.target.value;
                        }
                        return field;
                    });
                } else if (item.id === id) {
                    item.value = event.target.value;
                }
                return item;
            });
            setLoginData(changedData);
        }
    }

    const onSubmit = (event) => {
       const validatedFields = (validateFields(loginData));
       event.preventDefault();
       if (validatedFields.isFormValid) {
           const {firstName, lastName} = validatedFields.fields.reduce((user, field, index) => {
               if (index === 0) {
                  user = {
                      firstName: field[0].value,
                      lastName: field[1].value,
                  }
               }
               return user;
           }, { firstName: '', lastName: '' });

           logIn(firstName, lastName);
           navigate('../thanks', { replace: true });
       } else {
           setLoginData(validatedFields.fields);
       }
    };

    return (
        <div className={styles.login_page}>
            <h2>Login</h2>
            <form onSubmit={onSubmit} className={styles.login_form_wrapper}>
                {
                    getFields(loginData, onChangeField)
                }
                <button type={'submit'} className={styles.login_submit_button}>Submit</button>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => (
    {
        isAuthorized: Boolean(state.firstName),
        error: state.errorMessage
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        logIn: (firstName, lastName) => dispatch({ type: 'LOG_IN', payload: { firstName, lastName } }),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);