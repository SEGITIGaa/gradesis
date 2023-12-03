import React from 'react'

const Login = () => {
  return (
    <div className='flex'>
        <div className="w-1/2 h-screen bg-login-banner bg-cover flex items-center justify-center">
          <h1 className='text-white font-roboto text-7xl pl-20 font-extrabold'>Welcome to GradeSis</h1>
        </div>
        <form className="w-1/2 h-screen flex flex-col gap-5 justify-center items-start p-20" action=''>
          <h1 className='font-roboto text-5xl font-extrabold'>Login</h1>
          <p className='text-slate-500 mb-20'>Selamat datang kembali ke web SISWA</p>
        <div className="column justify-start w-full">
          <label htmlFor="nis" className="font-semibold">Nis</label>
          <input type="number" name="nis" id="nis" className="textfield" />
        </div>
        <div className="column justify-start w-full">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input type="password" name="password" id="password" className="textfield" />
        </div>
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <input type="checkbox" name="rememberme" id="rememberme" className='rounded-full' />
              <label htmlFor="rememberme" className='text-sm text-slate-500'>Remember Me</label>
            </div>
            <p className='text-sm text-slate-500'>Forgot Password?</p>
        </div>
        <button className='bg-purple rounded-lg w-full py-4 text-white font-semibold'>Login</button>
        </form>
    </div>
  )
}

export default Login