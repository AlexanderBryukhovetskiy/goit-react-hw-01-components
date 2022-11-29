import PropTypes from "prop-types";
import css from "./StatItem.module.css";


export const StatItem = ({statData: {label, percentage}}) => { 
    return <div className={css.statItem}>
                
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}</span>
            </div>
};


StatItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.string
}