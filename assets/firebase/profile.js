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

    const divNotLogged = document.getElementById('notLogged');
    const divLogged = document.getElementById('logged');

    const btnLoginRegister = document.getElementById('loginRegister');
    const btnLogout = document.getElementById('logout');
    const btnProfile = document.getElementById('profile');

    const bntLoginMobile = document.getElementById('loginMobile');
    const btnLogoutMobile = document.getElementById('logoutMobile');
    const btnProfileMobile = document.getElementById('profileMobile');

    const nombres = document.getElementById('nombres');
    const apellidos = document.getElementById('apellidos');
    const correo = document.getElementById('correo');

    const updateAction = document.getElementById('updateAction');
    const editAction = document.getElementById('editAction');

    //+===============================================================
    const headerH1 = document.getElementById('headerH1');
    const nombresLabel = document.getElementById('nombresLabel');
    const apellidosLabel = document.getElementById('apellidosLabel');
    const emailLabel = document.getElementById('emailLabel');

    const editNombres = document.getElementById('editNombres');
    const editApellidos = document.getElementById('editApellidos');
    const editEmail = document.getElementById('editEmail');

    function writeUserData(userId, name, lastName, email) {
        firebase.database().ref('users/' + userId).set({
            name: name,
            lastName: lastName,
            email: email
        });
    }

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log(e.message);
    });

    btnLogoutMobile.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log(e.message);
    });

    editAction.addEventListener('click', e => {
        updateAction.classList.remove('hide');
        editAction.classList.add('hide');

        editNombres.classList.remove('hide');
        editApellidos.classList.remove('hide');
        editEmail.classList.remove('hide');

        nombresLabel.classList.add('hide');
        apellidosLabel.classList.add('hide');
        emailLabel.classList.add('hide');
    });

    //Agregar un oyente de tiempo real de autenticación
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLoginRegister.classList.add('hide');
            btnLogout.classList.remove('hide');
            btnProfile.classList.remove('hide');

            bntLoginMobile.classList.add('hide');
            btnProfileMobile.classList.remove('hide');
            btnLogoutMobile.classList.remove('hide');

            divNotLogged.classList.add('hide');
            divLogged.classList.remove('hide');

            var dbRef = firebase.database().ref('users/' + firebaseUser.uid).child('name');
            dbRef.on('value', snap => headerH1.innerText = "Bienvenido, " + snap.val() + ".");

            dbRef = firebase.database().ref('users/' + firebaseUser.uid).child('name');
            dbRef.on('value', snap => nombresLabel.innerText = snap.val());
            dbRef = firebase.database().ref('users/' + firebaseUser.uid).child('lastName');
            dbRef.on('value', snap => apellidosLabel.innerText = snap.val());
            var dbRef = firebase.database().ref('users/' + firebaseUser.uid).child('email');
            dbRef.on('value', snap => emailLabel.innerText = snap.val());

            updateAction.addEventListener('click', e => {
                if (firebaseUser) {
                    if (nombres.value === '') {
                        alert('El campo nombre no debe ser vacío');
                    } else if (apellidos.value === '') {
                        alert('El campo apellidos no debe ser vacío');
                    } else if (correo.value === '') {
                        alert('El campo apellidos no debe ser vacío');
                    } else {
                        writeUserData(firebaseUser.uid, nombres.value, apellidos.value, correo.value);
                    }
                    updateAction.classList.add('hide');
                    editAction.classList.remove('hide');

                    editNombres.classList.add('hide');
                    editApellidos.classList.add('hide');
                    editEmail.classList.add('hide');

                    nombresLabel.classList.remove('hide');
                    apellidosLabel.classList.remove('hide');
                    emailLabel.classList.remove('hide');
                }
            });
        } else {
            console.log('notLoggedIn');
            btnLoginRegister.classList.remove('hide');
            btnLogout.classList.add('hide');
            btnProfile.classList.add('hide');

            bntLoginMobile.classList.remove('hide');
            btnProfileMobile.classList.add('hide');
            btnLogoutMobile.classList.add('hide');

            divNotLogged.classList.remove('hide');
            divLogged.classList.add('hide');
        }
    });


}());