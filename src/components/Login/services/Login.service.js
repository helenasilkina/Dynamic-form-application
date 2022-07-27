import styles from "../Login.module.scss";
import FormField from "../../common/FormField/FormField";

export const validateField = (field) => {
    const requiredFieldError = 'This field is required';
    const phoneFieldError = 'This is not valid phone';
    const emailFieldError = 'This is not valid email';
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    let error = '';

    if (field.required && !field.value.trim()) {
        error = requiredFieldError;
    }
    if (field.id === 'phone' && !field.value.trim().match(phoneRegex)) {
        error = phoneFieldError;
    }
    if (field.id === 'email' && !field.value.trim().match(emailRegex)) {
        error = emailFieldError;
    }

    return error;
}

export const getFields = (loginData, onChangeField) => {
    return loginData.map((row, rowIndex) => {
        if (Array.isArray(row)) {
            return (
                <div className={styles.login_page_columns} key={`row-${rowIndex}`}>
                    {
                        row.map((field, fieldIndex) => <FormField
                            key={`row-field-${rowIndex}--${fieldIndex}`}
                            onChange={onChangeField(field.id)}
                            {...field}
                        />)
                    }
                </div>
            )
        }
        return (
            <FormField
                key={`row-${rowIndex}`} {...row}
                onChange={onChangeField(row.id)}
            />
        )
    })
}

export const validateFields = (loginData) => {
    let isFormValid = true;
    const changedData = [...loginData].map(item => {
        if (Array.isArray(item)) {
            return item.map(field => {
                field.error = validateField(field);
                isFormValid = field.error ? false : isFormValid;
                return field;
            });
        } else {
            item.error = validateField(item);
            isFormValid = item.error ? false : isFormValid;
        }
        return item;
    });
    return {
        fields: changedData,
        isFormValid
    }
}