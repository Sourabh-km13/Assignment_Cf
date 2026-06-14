import type { User, UserFormValues } from "../types/userType";

function buildUser(values: UserFormValues, id: number): User {
  return {
    id,
    name: values.name,
    username: values.username,
    email: values.email,
    phone: values.phone,
    website: values.website,
    address: {
      street: values.street,
      suite: values.suite ?? "",
      city: values.city,
      zipcode: values.zipcode,
      geo: {
        lat: "0",
        lng: "0",
      },
    },
    company: {
      name: values.companyName,
      catchPhrase: "",
      bs: "",
    },
  };
}

export function createUser(users: User[], values: UserFormValues): User[] {
  const nextId = users.length === 0 ? 1 : Math.max(...users.map((user) => user.id)) + 1;
  return [...users, buildUser(values, nextId)];
}

export function updateUser(users: User[], id: number, values: UserFormValues): User[] {
  return users.map((user) =>
    user.id === id ? buildUser(values, id) : user
  );
}

export function deleteUser(users: User[], id: number): User[] {
  return users.filter((user) => user.id !== id);
}
