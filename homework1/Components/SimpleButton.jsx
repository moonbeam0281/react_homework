
export default function SimpleButton() {
    const styles = {
        width: '200px',
        height: '50px',
        backgroundColor: 'lightBlue',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
    }

    return <button style={styles}>Click Me</button>
}
