import { useEffect } from "react";
function Home(props){
    console.log("Props received in Home:", props);
    useEffect(()=>{
        console.log("Home component created");
        return ()=>{
            console.log("Home component destroyed");
        }
    },[]);
    return(
        <div>
            Home Component
        </div>
    )
}
export default Home;