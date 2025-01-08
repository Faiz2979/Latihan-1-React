import Counter from "./components/counter"
import FetchApi from "./components/fetch"
import Hook from "./components/hook"
import MapData from "./components/map"
import WelcomeApp from "./components/props"

const Home = () =>{
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-8xl">Home</h1>
            <div className='w-full h-full m-10'>
            <MapData />
            <Counter />
            <WelcomeApp />
            <FetchApi/>

            <Hook></Hook>
    </div>

        </div>
    )
}

export default Home;