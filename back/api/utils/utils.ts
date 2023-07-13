export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])[a-zA-Z\W_]{6,}$/;
  return passwordRegex.test(password);
};
