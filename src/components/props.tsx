
type Props = {
    name: string;
}

const Welcome = (props: Props) => {
    return (
        <h2 className="text-2xl">Welcome, {props.name}</h2>
    )
}

const WelcomeApp = () => {
    return (
        <div>
            <h1>Props</h1>
            <Welcome name='John' />
            <Welcome name='Doe' />
        </div>
    )
}

export default WelcomeApp