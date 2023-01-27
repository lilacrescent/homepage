const provider = new GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
 const auth = getAuth();

$("#login").on("click",function(){
    signInWithPopup(auth, provider).then((result) => {
        location.href="index.html"
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
});