import react from 'react'

function Home(){
    const Logout=()=>
    {
        localStorage.clear();
        window.Location.reload();
    }
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    )
}
export default Home;