// Props
import users from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
// Components
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile users={users} />
      <Statistics title="Upload stats" statis={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
