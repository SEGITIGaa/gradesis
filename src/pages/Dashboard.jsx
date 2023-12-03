import {Layout} from "./exporter";

const Dashboard = () => {
  return (
    <Layout>
        <div className="column h-screen">
            <div className="h-96 bg-banner"></div>
            <div className="h-full relative flex justify-center">
                <form action="" className="column items-center w-1/2 gap-10 justify-center">
                    <label htmlFor="profile" className=" rounded-full h-32 w-32 bg-gray cursor-pointer absolute -top-20 flex items-center justify-center overflow-hidden">
                        <img src="./img/profile.png" alt="" className="object-cover"/>
                        <input type="file" name="profile" id="profile" className="sr-only"/>
                    </label>
                    <div className="flex gap-10 w-full">
                        <div className="column w-1/2 gap-3">
                            <div className="column justify-start">
                                <label htmlFor="name" className="font-semibold">Name</label>
                                <input type="text" name="name" id="name" className="textfield" />
                            </div>
                            <div className="column justify-start">
                                <label htmlFor="PhoneNumber" className="font-semibold">Phone number</label>
                                <input type="number" name="PhoneNumber" id="PhoneNumber" className="textfield" />
                            </div>
                            <div className="column justify-start">
                                <label htmlFor="lahir" className="font-semibold">Lahir</label>
                                <input type="date" name="lahir" id="lahir" className="textfield" />
                            </div>
                        </div>
                        <div className="column w-1/2 gap-3">
                            <div className="column justify-start">
                                <label htmlFor="nis" className="font-semibold">Nis</label>
                                <input type="number" name="nis" id="nis" className="textfield" />
                            </div>
                            <div className="column justify-start">
                                <label htmlFor="birthPlace" className="font-semibold">Birth Place</label>
                                <input type="text" name="birthPlace" id="birthPlace" className="textfield" />
                            </div>
                            <div className="column justify-start">
                                <label htmlFor="address" className="font-semibold">Phone number</label>
                                <input type="text" name="address" id="address" className="textfield" />
                            </div>
                        </div>
                    </div>
                        <button className='bg-slate-950 rounded-lg w-max py-3 px-16 text-white font-medium text-sm'>Simpan</button>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Dashboard