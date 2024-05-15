import React from 'react';
import { Link } from 'react-router-dom';
import wifi from '../assets/testHome.png';



const Home = () => {
  return (
    <div className="bg-[#171717] h-screen w-screen flex justify-center items-center flex-col p-10">
      {/* <img src={humanImg} /> */}
      <div className=" flex items-center justify-center w-[100%] p-2 ">
          <h1 className=" text-4xl text-left font-bold w-full font-inter tracking-wide text-grayText-50">Ser <a className="text-orangeGrid-500">Nex</a> é liderar o caminho para o futuro</h1>
      </div>
      <img src={wifi} alt="Descrição da imagem" className='loginImg' />

      <div className="  flex items-center justify-center flex-col">
      <h2 className=" text-xl text-grayText-200 pb-10 text-fintechPrimary-500 ">Descomplique sua <a className="text-orangeGrid-500">vida financeira.</a></h2>

        <Link to="/register">
          <button className=" text-grayText-700 font-semibold font-inter text-lg w-80 bg-grayText-50  rounded  p-3">QUERO SER NEX</button>
        </Link>
        <Link to="/login"> 
        <button className=" text-grayText-200 font-normal font-inter text-lg w-80 border border-orangeGrid-500 bg-grayText-700  rounded  p-3 mt-5">JÁ TENHO CONTA</button>
        </Link>
      </div>


    </div>
  );
};

export default Home;