import React, { useState } from 'react';
import CustomButton from '../../Components/customButton';
import { registerUser } from '../../services/registerUser';
import { Link } from 'react-router-dom';
import '../../styles/index.css'
import unfillBox from '../../assets/unfillBox.png';
import { useRegisterEvents } from '../../events/formEvents/registerEvents';


const Register: React.FC = () => {
    const { formData, errors, formComplete, handleInputChange, handleSubmit } = useRegisterEvents();

    return (
        <div className="bg-[#171717] h-screen w-screen flex justify-center items-center flex-col font-inter">

            <img src={unfillBox} alt="Descrição da imagem" className=" w-[80%]" />
            <div className=" p-6 w-80 text-[#e7e7e7] flex flex-col justify-center items-center">

                {!formComplete ? (
                    <form onSubmit={handleSubmit} className="">
                        <div className="pb-3">
                            <div className="uk-inline">
                                <input
                                    placeholder="Nome Completo"
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"

                                />
                                {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                            </div>
                        </div>
                        <div className="pb-3">

                            <input
                                placeholder="CPF:"
                                type="text"
                                id="cpf"
                                name="cpf"
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                value={formData.cpf}
                                onChange={handleInputChange}
                                required

                            />
                            {errors.cpf && <p className="text-red-500">{errors.cpf}</p>}
                        </div>
                        <div className="pb-3">
                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="E-mail:"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="pb-3">
                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="Nova senha:"
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <div className="pb-3">
                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="Confirmar Senha:"
                                type="password"
                                id="password_confirm"
                                name="password"
                                // value={formData.passwordConfirm}
                                onChange={handleInputChange}
                                required
                            />
                            {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}
                        </div>


                        <div className="flex flex-col justify-center items-center ">
                            <button className=" text-grayText-700 font-semibold font-inter text-lg w-64 bg-grayText-50  rounded  p-2" type="submit">CONTINUAR</button>
                            <h3 className="pt-3 text-grayText-300">Já é cadastrado? <Link to="/cadastro" className=" text-orangeGrid-500">Faça login</Link></h3>
                        </div>
                    </form>
                ) : (
                    <div className="teste">
                        <div className="pb-3">
                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="CEP"
                                type="text"
                                id="cep"
                                name="cep"
                                value={formData.cep}
                                onChange={handleInputChange}
                                maxLength={8}
                                required
                            />
                            {errors.cep && <p className="text-red-500">{errors.cep}</p>}
                        </div>

                        <div className="pb-3">
                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="Rua"
                                type="text"
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="pb-3">

                            <input
                                className="uk-input border-grayText-500 rounded w-64 focus:border-orangeGrid-500"
                                placeholder="Cidade"
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Register;