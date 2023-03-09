import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "John Doe",
      messages: [{ body: "Hi!" }, { body: "What's up!" }],
    },
  ];
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-y-hidden">
      {users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
