import React from "react";

const Modal = (props) => {
  return (
    <div className={`bg-slate-600/60 fixed inset-0 items-center justify-center h-screen w-full ${props.aksi === props.modal ? "flex" : "hidden"}`}>
      <div className="bg-white column rounded-lg gap-5 w-2/6">
        <div className="flex justify-between border-b-2 items-center p-3">
          <p className="font-semibold">{props.modal}</p>
          <img onClick={() => props.ResetAksi()} src="./svg/close.svg" alt="" className="cursor-pointer"/>
        </div>
        <form action="" className="p-5 flex flex-col gap-5">
          <div className="column justify-start">
            <label htmlFor="matpel" className="font-semibold">
              Matpel
            </label>
            <input
              type="text"
              name="matpel"
              id="matpel"
              className="textfield"
            />
          </div>
          <div className="column justify-start">
            <label htmlFor="nilai" className="font-semibold">
              Nilai
            </label>
            <input type="text" name="nilai" id="nilai" className="textfield" />
          </div>
          <div className="column justify-start">
            <label htmlFor="bobot" className="font-semibold">
              Bobot
            </label>
            <select name="bobot" id="bobot" className="textfield">
              <option value="">pilih bobot</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <div onClick={() => props.ResetAksi()} className=" px-4 py-2 cursor-pointer rounded-lg bg-gray font-bold text-center text-white w-1/2">Batal</div>
            <button className=" px-4 py-2 cursor-pointer rounded-lg bg-blue-900 font-bold text-center text-white w-1/2">Konfirmasi</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
