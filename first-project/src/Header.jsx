function Header(Information,cname,children){
    // let{Information}=props
    // console.log(Information.email)

    return (
      <>
        <div>
          {children}
          <h1>header part</h1>
          <h1>{Information.email} {cname}</h1>
          
        </div>
      </>
    );
}



export default Header