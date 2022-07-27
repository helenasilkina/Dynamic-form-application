export const logIn = (firstName, lastName) => (
    new Promise((resolve, reject) => {
        if (firstName && lastName) {
            resolve();
        } else {
            reject(new Error('Enter First Name and Last Name'));
        }
    })
);