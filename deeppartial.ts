// type Address = {
//   city: string;
//   zip: number;
// };

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   address: Address;
// };

// const updateUser = (user: User, updates: ?): User => {
//   return { ...user, ...updates };
// };

// const user: User = {
//   id: 1,
//   name: "Raj",
//   email: "Raj@example.com",
//   address: { city: "Mumbai", zip: 400001 },
// };

// const updatedUser = updateUser(user, { address: { city: "Delhi" } });

// console.log(updatedUser);

// // ans
// type DeepPartial<T> = T extends object
//   ? {
//       [P in keyof T]?: DeepPartial<T[P]>;
//     }
//   : T;
