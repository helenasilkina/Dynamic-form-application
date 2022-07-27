import styles from './FormField.module.scss';

const FormField = ({name, type, placeholder, options, error, onChange, isColumn}) => {
    const getField = (type, placeholder, options, onChange) => {
        if (type === 'textarea') {
            return <textarea placeholder={placeholder} onChange={onChange} />
        }

        if (type === 'select') {
            return (
                <select placeholder={placeholder} onChange={onChange}>
                    {
                        options.map((option, index) => <option key={`form-select-${index}`}>{option}</option>)
                    }
                </select>
            )
        }

        return <input
            type={'text'}
            placeholder={placeholder}
            onChange={onChange}
        />;
    }

    return (
        <div className={styles.form_field}>
            <label>{name}</label>
            {
                getField(type, placeholder, options, onChange)
            }
            {error && <p className={styles.error_message}>{error}</p>}
        </div>
    )
};

export default FormField;