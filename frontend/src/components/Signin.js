function Signin(){
    return(<>
    <div style={{"border":"2px solid #ffa710","width":"20rem","borderRadius":"1rem","backgroundColor":"white","margin":"4rem auto","textAlign":"center","padding":"1rem"}}>
        <a href="/admin" className="btn" style={{"border":"2px solid rgb(117, 255, 186)","borderRadius":"1rem","margin":"0.5rem","backgroundColor":"rgb(117, 255, 186)","padding":"0.5rem","display":"block"}}><h3>SignIn as Admin</h3></a>
        <a href="/organiser" className="btn" style={{"border":"2px solid rgb(117, 255, 186)","borderRadius":"1rem","margin":"0.5rem","backgroundColor":"rgb(117, 255, 186)","padding":"0.5rem","display":"block"}}><h3>SignIn as Organiser</h3></a>
        <a href="/customer" className="btn" style={{"border":"2px solid rgb(117, 255, 186)","borderRadius":"1rem","margin":"0.5rem","backgroundColor":"rgb(117, 255, 186)","padding":"0.5rem","display":"block"}}><h3>SignIn as Customer</h3></a>
        <a href="/" className="btn" style={{"border":"2px solid rgb(255, 62, 48)","borderRadius":"1rem","margin":"0.5rem","backgroundColor":"rgb(255, 62, 48)","padding":"0.5rem","display":"block"}}><h3>back</h3></a>
    </div>
    </>)
}

export default Signin;