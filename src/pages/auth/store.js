import create from "zustand";

const useAuthStore = create((set) => ({
  authenticated: false,
  onLogin: ({ password, username, success, error }) => {
    //call api
    const defaultCredential = {
      password: `1234`,
      username: "test",
    };

    if (
      defaultCredential?.password !== password ||
      username !== defaultCredential.username
    ) {
      console.log("not match");
      error && error(`Password or username not match`);
      return;
    }

    set((state) => ({ authenticated: true }));
    success && success();
  },
}));

export default useAuthStore;
