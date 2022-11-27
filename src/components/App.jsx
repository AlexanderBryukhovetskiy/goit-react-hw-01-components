
import { Profile }  from "./social-link-profile/Profile";
import user  from "./social-link-profile/user.json";
import { Statistics } from "./statistics/Statistics.js";
import data from "./statistics/data.json";


export const App = () => {
  return (
    <div>
      <Profile userData={user}/>
      
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

    </div>
  );
};
