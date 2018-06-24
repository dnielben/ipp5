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

    const btnLoginRegister = document.getElementById('loginRegister');
    const btnLogout = document.getElementById('logout');
    const btnProfile = document.getElementById('profile');

    const bntLoginMobile = document.getElementById('loginMobile');
    const btnLogoutMobile = document.getElementById('logoutMobile');
    const btnProfileMobile = document.getElementById('profileMobile');

    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log(e.message);
    });

    btnLogoutMobile.addEventListener('click', e => {
        firebase.auth().signOut();
        console.log(e.message);
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
        } else {
            console.log('notLoggedIn');
            btnLoginRegister.classList.remove('hide');
            btnLogout.classList.add('hide');
            btnProfile.classList.add('hide');

            bntLoginMobile.classList.remove('hide');
            btnProfileMobile.classList.add('hide');
            btnLogoutMobile.classList.add('hide');
        }
    });


}());