import { portfolio } from "./portfolio.data";
import Toolbar from "./Toolbar";
import ProjectListComponent from "./ProjectList";
import { useState } from "react";

const projectsFilter = (selected) => {
    if (selected === 'All') {
        return portfolio
    } else {
        return portfolio.filter((el) => el.category === selected)
    }
};

const Portfolio = () => {
    const [selected, setSelected] = useState('All')

    return (
        <div>
            <Toolbar 
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selected}
                onSelectFilter={(filter) => {
                    setSelected(filter.target.innerHTML);
                    projectsFilter(selected);
                }}
            />
            <ProjectListComponent projects={projectsFilter(selected)}/>
        </div>
    );
};

export default Portfolio;
