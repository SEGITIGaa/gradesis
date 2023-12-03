import { Layout, Modal, useState } from "./exporter";
import { Line } from "react-chartjs-2";

const Semester = () => {
  const [aksi, setAksi] = useState("");
    const UbahAksi = (e) => {
        setAksi(e)
    }
    const ResetAksi = () => {
        setAksi("")
    }
  const datatable = [
    { matpel: "mtk", nilai: "40", bobot: "75" },
    { matpel: "pai", nilai: "32", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
    { matpel: "pkn", nilai: "10", bobot: "75" },
  ];
  // Data contoh untuk grafik
  const data = {
    labels: [
      "matematika",
      "agama",
      "produktif",
      "PKN",
      "PKK",
      "Jepang",
      "indonesia",
    ],
    datasets: [
      {
        label: "statistik",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Opsi konfigurasi untuk grafik
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Layout>
      <div className="h-1/2 bg-white mb-20">
        <Line data={data} options={options} width={1024} height={300} />
      </div>
      <div className="h-2/3 bg-purple  relative">
        <div className="column gap-5 px-5 items-end w-full absolute -top-24">
          <div onClick={() => UbahAksi('Tambah')} className="bg-blue-900 rounded-lg text-sm font-medium text-white px-4 py-2">
            Tambah
          </div>
          <div className="w-full overflow-hidden rounded-lg">
            <div className="h-96 overflow-y-scroll">
              <table className="w-full">
                <thead className="h-8 bg-gray sticky">
                  <tr>
                    <th className="text-xs border">Nomor</th>
                    <th className="text-xs border">Matpel</th>
                    <th className="text-xs border">Nilai</th>
                    <th className="text-xs border">Bobot</th>
                    <th className="text-xs border">Aksi</th>
                  </tr>
                </thead>
                <tbody className="h-10 bg-white">
                  {datatable.map((ele, i) => (
                    <tr>
                      <td className="text-xs p-2 border">{i + 1}</td>
                      <td className="text-xs p-2 border">{ele.matpel}</td>
                      <td className="text-xs p-2 border">{ele.nilai}</td>
                      <td className="text-xs p-2 border">{ele.bobot}</td>
                      <td className="text-xs p-2 border flex justify-around">
                        <div onClick={() => UbahAksi('edit')} className="cursor-pointer w-8 h-8 p-1 rounded-lg bg-blue-900">
                          <img src="./svg/edit.svg" alt="" />
                        </div>
                        <div className="cursor-pointer w-8 h-8 p-1 rounded-lg bg-red-900">
                          <img src="./svg/delete.svg" alt="" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <table className="w-full">
              <tbody className="h-10 bg-gray">
                <tr>
                  <td className="text-xs p-2 border">Total</td>
                  <td className="text-xs p-2 border">jumlah total</td>
                </tr>
                <tr>
                  <td className="text-xs p-2 border">rata rata</td>
                  <td className="text-xs p-2 border">jumlah rata rata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal aksi={aksi} UbahAksi={UbahAksi} ResetAksi={ResetAksi} modal='Tambah'/>
      <Modal aksi={aksi} UbahAksi={UbahAksi} ResetAksi={ResetAksi} modal='Edit'/>
    </Layout>
  );
};

export default Semester;
