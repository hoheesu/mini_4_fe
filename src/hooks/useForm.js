// import { useState } from "react";

// export const useForm = () => {
//     const [value, setValue] = useState({
//     id: "",
//     password: "",
//     });
//     const onChange = (e) => {
//     const { name, value } = e.target;
//     setValue({
//         ...value,
//         [name]: value,
//     });
//     };
//     return [value, onChange];
// };
import { useState } from 'react';

export const useForm = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
    setValue(e.target.value);
    };

    return [value, handleChange];
};