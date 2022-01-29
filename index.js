(function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        $("#name").text(profile.getname());
        $(".data1").css("display", "block");
        $(".g-signin2").css("display", "none");
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
         alert("you have signed out of Metro Industries!")
         $(".data1").css("display", "none");
         $(".g-signin2").css("display", "block");
        });
      }
    


    