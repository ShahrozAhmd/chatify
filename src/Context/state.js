export const initialStates = {
  auth: {
    isGoogleLoading: false,
    isGithubLoading: false,
    isSuccess: false,
    isFail: false,
    errorMessage: "",
    user: {},
    isSignout: false,
    isSignoutLoading: false,
  },
  chats: {
    isLoading:false,
    isUserCreated: false,
    isSuccess: false,
    isFail: false,
    errorMessage: "",
    user: {},
  },
};
