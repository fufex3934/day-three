import { registerUser } from "../../lib/actions";

export default function SignupPage() {
  return (
    <form
    action={registerUser}
     className="p-4 max-w-sm  mx-auto space-y-4 bg-blue-100 mt-10 flex flex-col">
      <input
        type="text"
        placeholder="Name"
        className="p-2 border border-indigo-500 "
        name="name"
      />

      <input
        type="email"
        placeholder="Email"
        className="p-2 border border-indigo-500 "
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border border-indigo-500 "
        name="password"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white py-1 hover:bg-indigo-400 cursor-pointer"
      >
        Signup
      </button>
    </form>
  );
}
