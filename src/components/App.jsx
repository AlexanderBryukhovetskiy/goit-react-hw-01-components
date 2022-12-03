
import { Profile }  from "./social-link-profile/Profile";
import user  from "./social-link-profile/user.json";

import { Statistics } from "./statistics/Statistics.js";
import data from "./statistics/data.json";

import friends from "./friendList/friends.json";
import { FriendList } from "./friendList/FriendList";

import { TransactionHistory } from "./transactions/TransactionHistory";
import transactions from "./transactions/transactions.json"


export const App = () => {
  return (
    <div>
      <Profile userData={user}/>
      
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </div>
  );
};
