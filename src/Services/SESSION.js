import {AsyncStorage} from 'react-native'

export const USER_KEY = 'multiPharm'

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true')

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY)

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res!==null) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
export const getSignIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
