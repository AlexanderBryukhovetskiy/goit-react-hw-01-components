import PropTypes from "prop-types";
import { StatItem } from "./StatItem";
import css from "./Statistics.module.css";
// import data from "./data.json";


export const Statistics = ( { stats } ) => {
    return  <section className="statistics">
                <h2 className={css.title}>Upload stats</h2>
                <ul className={css.statList}>
                    {stats.map( statItem => 
                        <li key={statItem.id} className={css.item}>
                            <StatItem statData={statItem}/>
                        </li>
                    )}
                </ul>
            </section>
};

Statistics.propTypes = {
    stats: PropTypes.array,
    statItem: PropTypes.func,
};
