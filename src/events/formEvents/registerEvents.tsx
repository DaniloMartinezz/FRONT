import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail, validateCPF, validateFullName, validatePassword, fetchAddressByCep } from '../../validations/registerValidations';

export const useRegisterEvents = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        cpf: '',
        email: '',
        password: '',
        cep: '',
        street: '',
        city: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        cpf: '',
        email: '',
        password: '',
        cep: '',
        street: '',
        city: '',
    });

    const [formComplete, setFormComplete] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue,
        });

        if (name === 'email') {
            setErrors({
                ...errors,
                email: validateEmail(value),
            });
        } else if (name === 'cpf') {
            setErrors({
                ...errors,
                cpf: validateCPF(value),
            });
        } else if (name === 'fullName') {
            setErrors({
                ...errors,
                fullName: validateFullName(value),
            });
        } else if (name === 'password') {
            setErrors({
                ...errors,
                password: validatePassword(value),
            });
        } else if (name === 'cep') {
            if (value.length === 8) {
                fetchAddressByCep(value);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(errors).every(error => error === '')) {
            setFormComplete(true);
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Dados salvos na localStorage:', formData);

            try {
                // await registerUser(formData);
                toast.success('Cadastro realizado com sucesso!');
            } catch (error) {
                toast.error('Erro ao cadastrar usuário. Por favor, verifique seus dados e tente novamente.');
            }
        }
    };

    return { formData, errors, formComplete, handleInputChange, handleSubmit };
};