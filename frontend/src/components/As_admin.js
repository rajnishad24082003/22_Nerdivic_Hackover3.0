function As_admin(){

return(<div style={{"backgroundColor":" #f5fdfb"}}>
    <div className="container-fluid " style={{"height":" 100vh"}}>
    <div className="container border rounded border-dark p-3" style={{"width": "20rem", "textAlign":"center"," marginTop":" 10%"}}>
    <h1><i class="fas fa-user"></i><div style={{"color":"#189671"}}>Admin</div> </h1>
<p>Sign in to access you account</p>
<hr/>
<div className="section">
</div>
<div className="section">
<a href="http://localhost:5000/auth/google/As_admin" className="btn text-light mt-3" style={{"backgroundColor":"#32CD32"}}><i className="fab fa-google"></i> SignIn with Google</a>
    <a href="/" className="btn text-light mt-3" style={{"backgroundColor":"rgb(176,0,0)"}}><i className="fas fa-arrow-left"></i> back to Dashboard</a>
    </div>
</div>
</div>
</div>)
}

export default As_admin;