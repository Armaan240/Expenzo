function Home(props){
    console.log("Props received in Home:", props);
    return(
        <div>
            Home Component {props.name}
        </div>
    )
}
export default Home;