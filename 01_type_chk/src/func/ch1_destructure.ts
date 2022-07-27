//비구조 할당
function getUSer({
  id,
  name,
  age,
  address,
}: {
  id: string;
  name: string;
  age: number;
  address: string;
}) {}

//혹은
interface User {
    id: string,
    name: string,
    age: number,
    address: string
}
function aboutUser({id, name, age, address}: User){
    
}