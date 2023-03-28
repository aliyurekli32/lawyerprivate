import useStore from "../store"




const Navbar = () => {
  const changeNum = useStore((state:any)=> state.changeNum)
  

  return (<>
  <div className="navbar h-28 text-2xl text-[#05C7F2]">
  <div className="navbar-start text-2xl">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a onClick={()=>{changeNum(1)}} className="normal-case w-48 h-48"> <img src="https://github.com/aliyurekli32/lawyerprivate/blob/main/images/Logo.png"  alt="" /> </a>
  </div>
  <div className="navbar-center text-2xl hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a onClick={()=>{changeNum(2)}}>İletişim</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a onClick={()=>{changeNum(0)}} className="btn btn-ghost normal-case text-2xl ">Hizmetlerimiz</a>
  </div>
</div>
    </>
  )
}

export default Navbar