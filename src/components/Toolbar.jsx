import styles from "./Toolbar.module.css";

const Toolbar = ( props ) => {
    // console.log(props)
    return (
        <>
            {props.filters.map(filter => {
                if (filter === props.selected) {
                    return <button key={filter} datatype={filter} onClick={props.onSelectFilter} className={styles.activeButton}>{filter}</button>
                } else {
                    return <button key={filter} datatype={filter} onClick={props.onSelectFilter}>{filter}</button>
                }
            })}
        </>
    );
};

export default Toolbar;