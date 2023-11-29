import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((promises) => promises.map((promise) => ({
    status: promise.status,
    value:
        promise.status === 'fulfilled' ? promise.value : String(promise.reason),
  })));
}
