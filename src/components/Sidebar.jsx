import {Link} from "../pages/exporter"
const Sidebar = () => {
    const location = window.location.pathname
    console.log(location);
  const menu = [
    {
        namaHalaman:"Dashboard",
        path:"/",
    },
    {
        namaHalaman:"smester 1",
        path:"/smester",
    },
    {
        namaHalaman:"smester 2",
        path:"/smester2",
    },
    {
        namaHalaman:"smester 3",
        path:"/smester3",
    },
    {
        namaHalaman:"smester 4",
        path:"/smester4",
    },
    {
        namaHalaman:"smester 5",
        path:"/smester5",
    },
    {
        namaHalaman:"smester 6",
        path:"/smester6",
    }
  ]
  const kelas = [
    {
        namaHalaman:"XII RPL 1",
        path:"/list",
    },
    {
        namaHalaman:"XII RPL 2",
        path:"/list/1",
    },
  ]
    return (
    <div className='column h-screen w-72 px-3 py-5 items-center justify-start bg-dark gap-3'>
        <div className="column gap-3 items-center">
            <h1 className="font-semibold text-white">User</h1>
            <h1 className="font-semibold text-white">kelas si user</h1>
        </div>
        {location === '/list' ? 
        kelas.map((ele, i) => (
            <Link key={i} to={ele.path} className={location === ele.path ? 'menu bg-white': 'menu'}>
                <img src={location === ele.path ? './svg/Vector.svg': './svg/Vector-abu.svg'} alt="" />
                <p className={location === ele.path ? 'text-sm font-semibold': 'text-sm font-medium text-gray'}>{ele.namaHalaman}</p>
            </Link>
        ))
        :
        menu.map((ele, i) => (
            <Link key={i} to={ele.path} className={location === ele.path ? 'menu bg-white': 'menu'}>
                <img src={location === ele.path ? './svg/Vector.svg': './svg/Vector-abu.svg'} alt="" />
                <p className={location === ele.path ? 'text-sm font-semibold': 'text-sm font-medium text-gray'}>{ele.namaHalaman}</p>
            </Link>
        ))
        }
    </div>
  )
}

export default Sidebar