import { Layout } from "./exporter";

const List = () => {
  const siswa = [
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
    "faisal",
  ];
  return (
    <Layout>
      <div className="bg-purple w-full h-screen overflow-scroll py-5 gap-5 column">
        <h1 className="font-roboto ml-5 text-5xl font-extrabold text-white">
          XII RPL 2
        </h1>
        <table className="w-full">
          <thead className="h-8 bg-gray sticky">
            <tr>
              <th className="text-xs border">Nomor</th>
              <th className="text-xs border">nama siswa</th>
            </tr>
          </thead>
          <tbody className="h-10 bg-white">
            {siswa.map((ele, i) => (
              <tr>
                <td className="text-xs p-2 border">{i + 1}</td>
                <td className="text-xs p-2 border">{ele}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default List;
