import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
    return  <table className={css.transactionHistory}>
                <thead>
                <tr className={css.tableHead}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
            
                <tbody>
                    {/* {items.map( 
                        ({item: {id, type, amount, currency}}) =>
                        <tr key={item.id} className={css.transaction}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )} */}
                    {items.map( item =>
                        <tr key={item.id} className={css.transaction}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )}
                </tbody>
            </table>

}

TransactionHistory.propTypes = {
    item: PropTypes.func,
    id: PropTypes.string, 
    type: PropTypes.string, 
    amount: PropTypes.number, 
    currency: PropTypes.string
}