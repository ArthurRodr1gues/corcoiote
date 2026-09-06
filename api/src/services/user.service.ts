import users from '../mocks/user.mock.ts';

export function findAllUsers() {
  return users;
}

export function findUserById(id: number) {
  const user = users.find(user => user.id === id);

  if (!user)
    throw new Error(`Usuário de id ${id} não encontrado.`);

  return user;
}
