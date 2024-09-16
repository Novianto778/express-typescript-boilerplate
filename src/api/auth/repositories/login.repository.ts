const users = [
  {
    user_id: '1',
    email: 'admin@gmail.com',
    name: 'admin',
    password: '12345678',
  },
];

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const authRepository = async (email: string, password: string) => {
  await timer(1000);
  const user = users.find((u) => u.email === email && u.password === password);

  return user;
};

export const getUserByEmail = async (email: string) => {
  await timer(1000);
  const user = users.find((u) => u.email === email);

  return user;
};
