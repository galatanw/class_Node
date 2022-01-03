import axios from 'axios';
import FireBaseApiKey from '../../../constant';
const asyncPostFireBase = async (USER) => {
 try {
  const request = await axios.post(
   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FireBaseApiKey}`,
   { ...USER, returnSecureToken: true }
  );
  const responde = request;
  console.log(responde);
 } catch (error) {
  console.log(error);
  console.log(error.status);
 }
};
export default asyncPostFireBase;
export function validInputs(email, password) {
 console.log(password);
 const emailValidation = [];
 const emailHost = email.match(/@[A-Za-z](.)/);
 if (emailHost)
  if (emailHost[0][1].match(/[a-zA-z]/)) emailValidation.push('emailHost');
 if (email.match(/@/g)?.length === 1) emailValidation.push('@');
 if (email.match(/.com/g)?.length === 1) emailValidation.push('.com');
 if (email.match(/.co.il/g)?.length === 1) emailValidation.push('.co.il');
 if (email.match(/.org/g)?.length === 1) emailValidation.push('.org');
 if (email.match(/.net/g)?.length === 1) emailValidation.push('.net');
 if (password.match(/[A-Z]/g)) emailValidation.push('capitalcase');
 if (password.match(/[a-z]/g)) emailValidation.push('lowercase');
 if (password.match(/[1-9]/g)) emailValidation.push('numeric');
 if (password.match(/[^A-Za-z0-9]/g)) emailValidation.push('notValid');
 if (email.match(/[^A-Za-z0-9(.)@]/g)) emailValidation.push('notValid');
 if (
  password.length > 5 &&
  emailValidation.length === 6 &&
  emailValidation.indexOf('notValid') === -1
 )
  return true;
 return false;
}
