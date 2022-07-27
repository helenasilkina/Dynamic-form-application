import { useEffect, useState } from "react";

const fakeData = [
    [{
        id: 'firstName',
        placeholder: 'First name',
        required: true,
        type: 'text',
        name: 'First Name',
        value: '',
    },
        {
            id: 'lastName',
            placeholder: 'Last name',
            required: true,
            type: 'text',
            name: 'Last name',
            value: '',
        }],
    {
        id: 'email',
        required: true,
        type: 'text',
        name: 'Email',
        value: '',
    },
    {
        id: 'address1',
        placeholder: 'Address 1',
        type: 'text',
        name: 'Address 1',
        value: '',
    },
    [{
        id: 'city',
        type: 'text',
        name: 'City',
        value: '',
    },
    {
        id: 'state',
        type: 'text',
        name: 'State',
        value: '',
    },
    {
        id: 'zip',
        type: 'text',
        name: 'ZIP',
    }],
    {
        id: 'phone',
        required: true,
        type: 'text',
        name: 'Phone',
        value: '',
    },
    {
        id: 'jobTitle',
        options: [
            'Engineer - lead',
            'Engineer - mid level',
            'Engineer - junior',
            'Engineer - front end focused',
            'Engineer - backend focused',
            'Engineer - full stack',
        ],
        placeholder: 'Please select job title',
        type: 'select',
        name: 'Job Title',
        value: '',
    },
    {
        id: 'reason',
        placeholder: 'Describe why you are a good fit for the job you are applying for.',
        type: 'textarea',
        name: 'Reason',
        value: '',
    }
];

export const useGetUserFields = () => {
    const [loginData, setLoginData] = useState([]);

    useEffect(() => {
        setLoginData(fakeData);
    }, []);

    return [loginData, setLoginData];
};

export default useGetUserFields