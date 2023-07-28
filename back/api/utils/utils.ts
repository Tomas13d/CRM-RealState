export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
  return passwordRegex.test(password);
};

export const removeUndefined = (obj: { [key: string]: any }) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => v !== undefined)
  );
};
