import firebaseService from './firebase';

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')
const FIREBASE_REF_MESSAGES_LIMIT = 30

export const sendMessage = message => {
  return () => {

    let currentUser = firebaseService.auth().currentUser
    let createdAt = new Date().getTime()
    let chatMessage = {
      text: message,
      createdAt: createdAt,
      user: {
        id: currentUser.uid,
        email: currentUser.email
      }
    }

    FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
      alert(error)
    })
  }
}

export const loadMessages = () => {
  return (dispatch) => {
    FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
      dispatch(loadMessagesSuccess(snapshot.val()))
    }, (errorObject) => {
      dispatch(loadMessagesError(errorObject.message))
    })
  }
}
