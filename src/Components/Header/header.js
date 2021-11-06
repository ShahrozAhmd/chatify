import React from "react";
import { useStore } from "Context/store";
import { signout } from "Context/actions/auth-actions";
import { useHistory } from "react-router";
const Header = () => {
  const [state, dispatch] = useStore();
  const history = useHistory();
  return (
    <div class="sticky top-0 border bg-white h-16 w-full p-2 drop-shadow-md filter">
      <div className="flex justify-end">
        <button
          onClick={() => signout(dispatch, history)}
          className="p-2 border bg-blue-400 text-white rounded-lg drop-shadow-sm filter hover:bg-blue-500"
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;
