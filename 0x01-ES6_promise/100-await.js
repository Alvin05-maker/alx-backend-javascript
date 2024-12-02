import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let result = {};

  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    result = {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (err) {
    result = {
      photo: null,
      user: null,
    };
  }

  return result;
}
