import { validateField, validateFields } from './Login.service';

test('Should be validate if the field required and value is empty', () => {
    const firstName = {
        id: 'firstName',
        placeholder: 'First name',
        required: true,
        type: 'text',
        name: 'First Name',
        value: '',
    };
    const error = validateField(firstName);
    expect(error).toBe('This field is required');
});

test('Should be validate if the field required and value is not empty', () => {
    const firstName = {
        id: 'firstName',
        placeholder: 'First name',
        required: true,
        type: 'text',
        name: 'First Name',
        value: 'first name',
    };
    const error = validateField(firstName);
    expect(error).toBe('');
});

test('Should be validate if the phone field is not valid', () => {
    const phoneField = {
        id: 'phone',
        required: true,
        type: 'text',
        name: 'Phone',
        value: 'letttes',
    };
    const error = validateField(phoneField);
    expect(error).toBe('This is not valid phone');
});

test('Should be validate if the phone field is not valid', () => {
    const phoneField = {
        id: 'phone',
        required: true,
        type: 'text',
        name: 'Phone',
        value: '123',
    };
    const error = validateField(phoneField);
    expect(error).toBe('This is not valid phone');
});

test('Should be validate if the phone field is valid', () => {
    const phoneField = {
        id: 'phone',
        required: true,
        type: 'text',
        name: 'Phone',
        value: '1234567890',
    };
    const error = validateField(phoneField);
    expect(error).toBe('');
});

test('Should be validate if the email field is not valid', () => {
    const emailField = {
        id: 'email',
        required: true,
        type: 'text',
        name: 'Email',
        value: '12345',
    };
    const error = validateField(emailField);
    expect(error).toBe('This is not valid email');
});

test('Should be validate if the email field is valid', () => {
    const emailField = {
        id: 'email',
        required: true,
        type: 'text',
        name: 'Email',
        value: 'text@gmail.com',
    };
    const error = validateField(emailField);
    expect(error).toBe('');
});

test('Should method validateFields return correct results for default data', () => {
    const data = [{
        id: 'firstName',
        placeholder: 'First name',
        required: true,
        type: 'text',
        name: 'First Name',
        value: '',
    }];
    const {fields, isFormValid} = validateFields(data);
    expect(fields.length).toBe(data.length);
    expect(isFormValid).toBe(false);
});
