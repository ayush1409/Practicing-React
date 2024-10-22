import reactLogo from '../../assets/react-core-concepts.png'

export function Header() {
    return (<header>
        <img src={reactLogo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            Fundamental React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}