type User = {
  id : number,
  username: string,
  role: 'member' | 'contributer' | 'admin'
}
type UpdatedUser = Partial<User>

const user : User[] = [
  {id: 1, username: 'John', role: 'member'},
  {id: 2, username: 'Jane', role: 'contributer'},
  {id: 3, username: 'Jack', role: 'admin'},
  {id: 4, username: 'Jill', role: 'member'}
]

function updateUser(id: any, updated: any){
  const getUser = user.find(item => item.id === id);

  Object.keys(updated)


}

function addNewUser( newUser: UpdatedUser): User{
  // Add your logic here to create a new user object
  const newUserObj: User = {
    id: newUser.id || 0,
    username: newUser.username || '',
    role: newUser.role || 'member'
  };

  return newUserObj;
}