import styles from './ProjectList.module.css';

const ProjectListComponent = (projects) => {
    let keyId = 0;

    return (
        <>
            <div className={styles.page}>
                {Object.values(projects)[0].map(projectCard => {
                    keyId++
                    return <img src={projectCard.img} datatype={projectCard.category} key={keyId} className={styles.card}/>
                })}
            </div>
        </>
    );
};

export default ProjectListComponent;
