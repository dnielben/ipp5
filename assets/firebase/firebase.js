(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB5OEwCYekHXOcpwpk-8S7y4r-pyJzjGEw",
        authDomain: "ipp5-96591.firebaseapp.com",
        databaseURL: "https://ipp5-96591.firebaseio.com",
        projectId: "ipp5-96591",
        storageBucket: "ipp5-96591.appspot.com",
        messagingSenderId: "665026285805"
    };
    firebase.initializeApp(config);

    var txtChange = document.getElementById('note');
    var dbRef = firebase.database().ref().child('text');
    dbRef.on('value', snap => txtChange.innerText = snap.val());

    const logInSection = document.getElementById('loginSection');
    const regSection = document.getElementById('regSection');

    const correo = document.getElementById('mail');
    const password = document.getElementById('pwd');
    const btnLogin = document.getElementById('logInAction');
    const btnRegister = document.getElementById('regAction');

    btnLogin.addEventListener('click', e => {
        //Obtener valores de correo y contraseña
        const email = correo.value;
        const contra = password.value;
        const auth = firebase.auth();
        //Logearse ante firebase
        const promise = auth.signInWithEmailAndPassword(email, contra);
        promise.catch(e => console.log("Mensaje: " + e.message + " Codigo: " + e.code));
    });

    btnRegister.addEventListener('click', e => {
        //Obtener valores de correo y contraseña
        const email = correo.value;
        const contra = password.value;
        const auth = firebase.auth();
        //Registrarse ante firebase
        const promise = auth.createUserWithEmailAndPassword(email, contra);
        promise.catch(e => console.log("Mensaje: " + e.message + " Codigo: " + e.code));
    });

    //Agregar un oyente de tiempo real de autenticación
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            logInSection.classList.add('hide');
        }else{
            console.log('notLoggedIn');
            logInSection.classList.remove('hide');
        }
    });


}());