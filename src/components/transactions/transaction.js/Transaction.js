import css from './Transaction.module.css'
import PropTypes from "prop-types";


export const Transaction = ({data:{ type, amount, currency}}) => {
    return <tr className={css.transaction}>
                        <td className={css.type}>{type}</td>
                        <td className={css.amount}>{amount}</td>
                        <td className={css.currency}>{currency}</td>
                    </tr>
}



Transaction.propTypes = {
    type: PropTypes.string, 
    amount: PropTypes.number,
    currency: PropTypes.string
}