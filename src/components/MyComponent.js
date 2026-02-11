import styles from './MyComponent.module.css'

const MyComponent = ({name}) => {
    return (
    <div>
        <p className={styles.p}>Hello {name}</p>
    </div>
    )
}

export default MyComponent


