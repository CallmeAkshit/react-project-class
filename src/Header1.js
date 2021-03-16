import styles from './index.css';

function Header(props) {
    return (
        <div className = {styles.header}>
            <div className = {styles.headerText}>
                The Developer 
                <br/>
                Repository
            </div>
            <img className = {styles.manImage} src={'/media/man.jpeg'} alt = {'illustration'} />
        </div>
    );
}

export default Header;