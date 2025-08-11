import PropTypes from 'prop-types';
import {
  StyledElement,
  StyledTransactionBody,
  StyledTransactionHead,
  StyledTransactionHistory,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items = [] }) => {
  return (
    <StyledTransactionHistory class="transaction-history">
      <StyledTransactionHead>
        <tr>
          <StyledElement>Type</StyledElement>
          <StyledElement>Amount</StyledElement>
          <StyledElement>Currency</StyledElement>
        </tr>
      </StyledTransactionHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <StyledTransactionBody key={id}>
            <StyledElement as="td">{type}</StyledElement>
            <StyledElement as="td">{amount}</StyledElement>
            <StyledElement as="td">{currency}</StyledElement>
          </StyledTransactionBody>
        ))}
      </tbody>
    </StyledTransactionHistory>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
