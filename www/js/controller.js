app.controller("homeCtrl", function($scope, $state) {
    $("#back2").hide();
    $("#back3").hide();
    $(".heading").addClass('headinganim');
    $(".subhead").addClass("fadeinanim");
    setTimeout(function() {
        $(".subhead").css("opacity", "1");
        $(".heading").css('top', '-133%');
        $(".subhead").removeClass("fadeinanim");
        $(".heading").removeClass('headinganim');
    }, 2300);

    function changeback() {
        setTimeout(function() {
            $("#back1").fadeOut(1000);
            $("#back2").show();
        }, 2000);
        setTimeout(function() {
            $("#back2").fadeOut(1000);
            $("#back3").show();
        }, 5000);
        setTimeout(function() {
            $("#back3").fadeOut(1000);
            $("#back1").fadeIn();
        }, 8000);
    }
    changeback();
    setInterval(changeback, 8002);

    $scope.gotosecond = function() {
        setTimeout(function() { $state.go("days"); }, 500);
    }
    $scope.gotoresults = function() {
        setTimeout(function() { $state.go("results"); }, 500);
    }
    $('.ripple').on('click', function(event) {
        event.preventDefault();

        var $div = $('<div/>'),
            btnOffset = $(this).offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;



        $div.addClass('ripple-effect');
        var $ripple = $(".ripple-effect");

        $ripple.css("height", $(this).height());
        $ripple.css("width", $(this).height());
        $div
            .css({
                top: yPos - ($ripple.height() / 2),
                left: xPos - ($ripple.width() / 2),
                background: $(this).data("ripple-color")
            })
            .appendTo($(this));

        window.setTimeout(function() {
            $div.remove();
        }, 2000);
    });


});

app.controller("eventslistCtrl", function($scope, $state) {
    $scope.currentday = window.localStorage.getItem('currentday');
    console.log($scope.currentday);
    $scope.gotoevent = function(event, category) {
            console.log(event);
            window.localStorage.setItem('currentevent', event);
            window.localStorage.setItem('currentcategory', category);
            $state.go('event');
        }
        //$scope.eventsday1 = { "event Name 1": ["cultural", "2:00am"], "event Name 2": ["tech", "2:30pm"], "event Name 3": ["fun", "3:00pm"], "event name 4": ["sports", "2:00pm"], "event name 5": ["literary", "2:00am"] };
    $scope.eventsday1 = { "TABLE TENNIS": ["sports", "4:00pm"], "LOVE LETTER WRITING": ["literary", "4:00pm"], "ESSAY WRITING": ["literary", "4:00pm"], "SPELL BEE": ["tech", "5:30pm"], "SUDOKU": ["tech", "6:00pm"], "RUBICS CUBE": ["tech", "6:00pm"], "BASKETBALL (P)": ["sports", "6:00pm"] };
    $scope.eventsday2 = { "BADMINTON (P)": ["sports", "5:45am"], "CRICKET (P)": ["sports", "8:00am"], "RANGOLI": ["fun", "10:30am"], "COLLAGE": ["fun", "11:30am"], "TATOO MAKING": ["fun", "12:30pm"], "BRIDAL MAKE-UP": ["fun", "12:30pm"], "GREETING CARD": ["fun", "1:30pm"], "DOODLE CREATION": ["fun", "2:30pm"], "MOCK PLACEMENT (P)": ["tech", "3:30pm"], "ANTAKSHARI (P)": ["cultural", "3:30pm"], "HATE LETTER": ["literary", "4:00pm"], "SINGING (P)": ["cultural", "4:30pm"], "SOLO ACTING": ["cultural", "6:00pm"], "STAND UP COMEDY": ["cultural", "6:00pm"], "SELL HELL": ["fun", "8:30pm"] };
    $scope.eventsday3 = { "KHO-KHO (P)": ["sports", "5:45am"], "HORROR STORY WRITING": ["literary", "5:00pm"], "PERCEPTION WRITING": ["literary", "5:00pm"], "CREATIVE WRITING": ["literary", "5:00pm"], "SINGING (F)": ["cultural", "6:30pm"], "FANCY DRESS": ["cultural", "8:30pm"] };
    $scope.eventsday4 = { "VOLLEY BALL (P)": ["sports", "5:45am"], "THROW BALL (P)": ["sports", "5:45am"], "PICK & SPEAK": ["tech", "5:00pm"], "GROUP DISCUSSION": ["tech", "6:00pm"], "INSTRUMENTAL": ["cultural", "7:30pm"], "MIME": ["cultural", "8:30pm"] };
    $scope.eventsday5 = { "FOOTBALL (P)": ["sports", "5:45am"], "BADMINTON (F)": ["sports", "5:45am"], "BEST OUT OF WASTE": ["fun", "5:00pm"], "GENERAL QUIZ (P)": ["tech", "5:00pm"], "KANNADA QUIZ (P)": ["tech", "5:00pm"], "C PROGRAMMING (P)": ["tech", "5:30pm"], "SKETCHING": ["fun", "5:30pm"], "MAD ADS": ["cultural", "6:30pm"], "ANTAKSHARI (F)": ["cultural", "7:30pm"] };
    $scope.eventsday6 = { "KHO-KHO (F)": ["sports", "5:45am"], "MOCK PLACEMENT (2nd)": ["tech", "5:45am"], "BASKETBALL (F)": ["sports", "5:00pm"], "MOCK ROCK": ["fun", "5:00pm"], "AIR CRASH": ["fun", "5:00pm"], "BATHROOM SINGING": ["fun", "5:30pm"] };
    $scope.eventsday7 = { "MARATHON": ["sports", "5:45am"], "CRICKET (F)": ["sports", "8:00am"], "COOK WITHOUT FIRE": ["fun", "10:00am"], "FACE PAINTING": ["fun", "10:00am"], "TREASURE HUNT": ["fun", "11:00am"], "C PROGRAMMING (F)": ["tech", "12:00pm"], "KANNADA QUIZ (F)": ["tech", "12:00pm"], "GENERAL QUIZ (F)": ["tech", "12:00pm"], "MOCK PLACEMENT (F)": ["tech", "12:00pm"], "SUPER MINUTE": ["fun", "12:00pm"], "STREET PLAY": ["cultural", "1:00pm"], "DUMB CHARADES": ["fun", "3:00pm"], "TECH CHARADES": ["tech", "3:00pm"], "VOLLEY BALL (F)": ["sports", "4:00pm"], "THROW BALL (F)": ["sports", "4:00pm"], "ATHLETICS": ["sports", "4:00pm"], "SHORT PUT": ["sports", "4:00pm"], "TUG OF WAR": ["sports", "4:00pm"], "PAINTING": ["fun", "4:00pm"], "RAMP": ["cultural", "8:00pm"] };
    $scope.eventsday8 = { "FOOTBALL (F)": ["sports", "5:45am"], "DANCE": ["cultural", "5:45am"] };
    $scope.getEvents = function(id) {
        console.log("eventsday" + id);
        return $scope["eventsday" + id]
    }
});

app.controller("daysCtrl", function($scope, $state) {

    $scope.days = { 8: 1, 9: 2, 10: 3, 11: 4, 12: 5, 13: 6, 14: 7, 15: 8 };
    $scope.gotodays = function(event) {
        console.log(event);
        $scope.currentday = event;
        window.localStorage.setItem('currentday', $scope.currentday);
        $state.go('eventslist');

    }
});

app.controller("eventCtrl", function($scope) {

    console.log("in event controller");
    $scope.currentevent = window.localStorage.getItem('currentevent');
    $scope.currentcategory = window.localStorage.getItem('currentcategory');
    $scope.eventarray = {
        "SINGING (P)": {
            "venue": "xyz",
            "timings": "4:30pm-6:00pm",
            "coordinators": ["SHUBHAM ANAND", "ANKUSH MISHRA", "TANUSHREE", "DEEPSHIKA", "PRADEEP M", "VINAY R", "SREE LAKSHMI"],
            "rules": [
                "UNLIMITED ENTRIES",
                "TIME LIMIT (2+1) MIN",
                "INDIAN MUSICAL FORMS ARE ALLOWED",
                "KARAOKE OR COMPANY WILL BE NOT ALLOWED",
            ]
        },
        "SINGING (F)": {
            "venue": "xyz",
            "timings": "4:30pm-6:00pm",
            "coordinators": ["SHUBHAM ANAND", "ANKUSH MISHRA", "TANUSHREE", "DEEPSHIKA", "PRADEEP M", "VINAY R", "SREE LAKSHMI"],
            "rules": [
                "TIME LIMIT (4+1) MIN.",
                "INDIAN MUSICAL FORMS ARE ALLOWED.",
                "KARAOKE ALLOWED.",
                "COMPANY ALLOWED (MAX 2).",
                "JUDGES DECISION WILL BE FINAL"
            ]
        },
        "STREET PLAY": {
            "venue": "xyz",
            "timings": "1:00pm-3:00pm",
            "coordinators": ["SANKET", "NIRAJ KAUSHIK", "TANMAYE SETHI", "SANGAMESH BHINGI", "SIDHARTH KUMAR", "RIYA SINGH", "NEHA MUNDRA", "SADHANA PATEL", "ABHIGYAN PANDEY", "ABHISHEK SK"],
            "rules": [
                "GROUP EVENT",
                "TOTAL MEMBERS 10+6",
                "MINIMUM 2 FIRST YEARS",
                "TIME LIMIT 10+5 MINUTES",
                "LANGUAGES: HINDI OR KANNADA",
                "PROPS NOT ALLOWED",
                "DRUMS, DAFLI, COLOURS, DUPATTA ARE ALLOWED",
                "EXCEEDING TIME LIMIT WILL STRICTLY BE CONSIDERED",
                "ANY QUARREL MAY LEAD TO DISQUALIFICATION",
                "JUDGES DECISION WILL BE FINAL"
            ]
        },
        "MIME": {
            "venue": "xyz",
            "timings": "8:30pm-9:30pm",
            "coordinators": ["RANJITH", "ANANYA SINGH", "SHREEDHAR MARATHE", "PRADEEP MADHYASTHA C", "RISHAB NARAYAN MISHRA"],
            "rules": [
                "GROUP EVENT",
                "TIME LIMIT IS (5+2) MINUTES (2 MIN FOR PREPARATION).",
                "5+2 MEMBERS",
                "MINIMUM 1 FROM 1ST YEAR",
                "ACT SHOULD NOT CONTAIN ANY DIALOGUES, LIP SYNC, PROPS ",
                "NO ACT SHALL CONTAIN ANY OFFENSIVE, OBSCENES, DISRE-SPECTFUL ACTIONS OR GESTURES.",
                "COVER THE FACE WITH MAKEUP.",
                "HIGHER PREFERENCE FOR NEW IDEAS, CREATIVITY OF PRESEN-TATION, DRESSING AND MAKEUP.",
                "PARTICIPANTS SHOULD NOT TOUCH OTHER PARTICIPANTS WHILE ACTING.",
                "JUDGES DECISION WILL BE FINAL"
            ]
        },
        "MAD ADS": {
            "venue": "xyz",
            "timings": "6:30pm-7:30pm",
            "coordinators": ["ABHISHEK S K", "AMIT KOMPI", "SHREEDHAR MARATHE", "BIDYANSHU	 PANDEY", "RISHAB NARAYAN MISHRA"],
            "rules": [
                "GROUP EVENT",
                "MAXIMUM 8 PEOPLE (INCLUDING ONE NARRATOR)",
                "MINIMUM ONE 1ST YEAR COMPULSORY",
                "6 MINUTES +1 EXTRA MINUTE",
                "NO VULGARITY IS ALLOWED",
                "NO PROPS SHOULD BE USED",
                "PREFERENCE IS GIVEN TO THE GROUP WEARING SAME COLOURED T-SHIRTS IN CASE OF TIE",
                "JUDGES/CO-ORDINATORS DECISION WILL BE FINAL",
                "EXCEEDING TIME LIMIT MAY LEAD TO DISQUALIFICATION",
                "ANY QUARREL MAY LEAD TO DISQUALIFICATION"
            ]
        },
        "FANCY DRESS": {
            "venue": "xyz",
            "timings": "8:30pm-9:30pm",
            "coordinators": ["CHAITRA", "RANJITHA", "KAVYA MOHAN", "JEETENDRA"],
            "rules": [
                "TIME LIMIT:15-20 MIN PER TEAM",
                "PARTICIPANTS:8 PER TEAM (4 BOYS 4 GIRLS)",
                "MINIMUM 1 PARTICIPANT FROM 1ST YEAR COMPULSORY",
                "STICK TO THE THEME",
                "THEME WIL BE PROVIDED 2 DAYS PRIOR"
            ]
        },
        "ANTAKSHARI (P)": {
            "venue": "xyz",
            "timings": "3:30pm-4:30pm",
            "coordinators": ["ANKUSH MISHRA", "SATYAM KUMAR", "DEEPSHIKHA"],
            "rules": [
                "UNLIMITED ENTRIES FOR PRELIMS",
                "NO. OF PARTICIPANTS (3 PER TEAM) FOR FINALS",
                "PRELIMS WILL BE BASED ON BOLLYWOOD/KANNADA FILM INDUSTRY",
                "ONE GROUP FROM EACH TEAM WILL BE SELECTED FOR FINALS",
                "WRITTEN ON PRINTED MATERIALS OF ANY KIND IS NOT ALLOWED FOR BOTH THE ROUNDS",
                "COORDINATORS DECISION WILL BE FINAL"
            ]
        },
        "ANTAKSHARI (F)": {
            "venue": "xyz",
            "timings": "7:30pm-9:30pm",
            "coordinators": ["ANKUSH MISHRA", "SATYAM KUMAR", "DEEPSHIKHA"],
            "rules": [
                "UNLIMITED ENTRIES FOR PRELIMS",
                "NO. OF PARTICIPANTS (3 PER TEAM) FOR FINALS",
                "PRELIMS WILL BE BASED ON BOLLYWOOD/KANNADA FILM INDUSTRY",
                "ONE GROUP FROM EACH TEAM WILL BE SELECTED FOR FINALS",
                "WRITTEN ON PRINTED MATERIALS OF ANY KIND IS NOT ALLOWED FOR BOTH THE ROUNDS",
                "COORDINATORS DECISION WILL BE FINAL"
            ]
        },
        "RAMP": {
            "venue": "xyz",
            "timings": "8:00pm",
            "coordinators": ["THRUPTHI", "ANUSHRI HV", "ANURAG MISHRA", "RISHABH", "SHREYA WALI", "CHETAN KUMAR GS"],
            "rules": [
                "‘12’+’2’ PARTICIPANTS PER TEAM.",
                "1 PAIR COMPULSORY FROM 1ST YEAR.",
                "ONE TEAM PER GROUP.",
                "TIME LIMIT: (10+1) MINS.",
                "NO DANGEROUS PROPS ALLOWED.",
                "JUDGES AND CO-ORDINATORS DECISION WILL BE FINAL.",
                "EXCEEDING TIME LIMIT WILL LEAD TO NEGATIVE MARKING."
            ]
        },
        "INSTRUMENTAL": {
            "venue": "xyz",
            "timings": "7:30pm-8:30pm",
            "coordinators": ["ANKUSH MISHRA", "HARISH SHARMA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "INDIVIDUAL EVENT",
                "NO COMPANIONS ALLOWED",
                "ANY INSTRUMENT CAN BE USED",
                "TIME LIMIT (4+1) MIN"
            ]
        },
        "STAND UP COMEDY": {
            "venue": "xyz",
            "timings": "6:00pm-8:00pm",
            "coordinators": ["BIDYANSHU", "VINAY KAMATAGI", "PRAVEEN GOPALI"],
            "rules": [
                "MAXIMUM OF THREE PARTICIPANTS PER TEAM.",
                "TIME LIMIT IS (3+1) MINUTES",
                "NO VULGARITY",
                "NO USAGE OF ANY OFFENSIVE, ABHORRENT LANGUANGE PERTAINING TO ANY SENSITIVE ISSUES.",
                "JUDGES DECISION WILL BE FINAL"
            ]
        },
        "SOLO ACTING": {
            "venue": "xyz",
            "timings": "6:00pm-8:00pm",
            "coordinators": ["PRADEEP MADHYASTHA C", "SHARATH KUMAR R", "RAGAVENDRA", "SUMANTH KUMAR H N", "VINAY KAMATAGI"],
            "rules": [
                "UNLIMITED ENTRIES",
                "TIME LIMIT: (3+2) MINS.",
                "THEME WILL BE GIVEN ON THE SPOT.",
                "NO ACT SHALL CONTAIN ANY OFFENSIVE, OBSCENES, DISRESPECT-FUL ACTIONS OR GESTURES.",
                "HIGHER PREFERENCE FOR NEW IDEAS, CREATIVITY OF PRESENTA-TION, SPONTANEITY.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "DANCE": {
            "venue": "xyz",
            "timings": "2:00pm-5:00pm",
            "coordinators": ["NISHITA PAL", "ANUSHRI HV", "MANJU", "APARNA", "TANMAYE", "SUSHRAVYA", "YASHASWINI", "NIHALI", "AMOGHA BN", "RAGHAVI SATISH", "VINAY K"],
            "rules": [
                "TIME LIMIT: SOLO - (3+2) MIN, GROUP - 5+1 MIN",
                "TEAM MEMBERS (6+2) - 2 COMPLUSORY FROM 1ST YEAR",
                "NO EXPLICIT USAGE OF LANGUAGE (VULGARITY)",
                "ON STAGE MIN 5 PEOPLE",
                "NEGATIVE MARKING FOR EXCEEDING TIME LIMIT AND DISQUALIFICA-TION UPON QUARRELS",
                "1 GROUP PER TEAM"
            ]
        },
        "DUMB CHARADES": {
            "venue": "xyz",
            "timings": "3:00pm-4:00pm",
            "coordinators": ["PRADEEP M", "NISCHITH C", "TANUSHREE", "CHETHAN S M", "DEEKSHITA SHETTY", "PRASHANTH M", "VANDANA KUMARI", "SATYAM KUMAR", "SADHANA PATEL"],
            "rules": [
                "TEAM EVENT (MUST HAVE 3 MEMBERS IN A TEAM)",
                "USE OF MOBILE PHONES OR ANY TYPE OF ELECTRONIC GADGETS IS PROHIBITED.",
                "CONTESTANTS SHOULD NOT INVOLVE IN LIP MOVEMENT, PROPS, ETC.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "RANGOLI": {
            "venue": "xyz",
            "timings": "10:30am-11:30am",
            "coordinators": ["RANJITHA", "DEEPIKA H S", "CHAITRA", "PRARTHANA"],
            "rules": [
                "TIME LIMIT: 1 HOUR.",
                "TWO MEMBERS IN EACH TEAM.",
                "MAXIMUM THREE TEAMS FROM EACH SIDE INCLUDING ONE BOYS TEAM.",
                "THEME BASED, WHICH WILL BE GIVEN ON THE SPOT.",
                "REQUIREMENTS SUCH AS COLOURS, ETC. PARTICIPANTS SHOULD GET BY THEMSELVES."
            ]
        },
        "COOK WITHOUT FIRE": {
            "venue": "xyz",
            "timings": "10:00am-11:00am",
            "coordinators": ["DEEPIKA H S", "VIKRAM MANDAL", "AISHWARYA JAIN", "SHAHIDA", "SAUJANYA NAGPAL"],
            "rules": [
                "TIME LIMIT 1 HOUR.",
                "MAXIMUM 2 TEAMS CAN PARTICIPATE FROM EACH SIDE.",
                "ONE 1ST YEAR IS COMPULSORY.",
                "MAXIMUM THREE PARTICIPANTS PER TEAM (MUST HAVE 1 BOY).",
                "MINIMUM TWO DISHES SHOULD BE MADE.",
                "PARTICIPANTS SHOULD BE PRESENT AT THE VENUE 15 MINUTES BEFORE THE EVENT’S BEGIN.",
                "ELECTRICAL APPLIANCES ARE NOT ALLOWED.",
                "GET YOUR OWN MATERIALS.",
                "SUPPLEMENTS SUCH AS SAUCE, JAM, CHEESE, BUTTER ARE AL-LOWED.",
                "EVERYTHING SHOULD BE DONE ON THE SPOT, INCLUDING CHOP-PING OF VEGETABLES, FRUITS ETC.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "MOCK ROCK": {
            "venue": "xyz",
            "timings": "07:00pm-08:30am",
            "coordinators": ["BIDYANSHU", "SHREDHAR PATIL", "SANDESH NEGI", "ANKUSH MISHRA"],
            "rules": [
                "MAXIMUM TWO TEAMS CAN PARTICIPATE FROM EACH SIDE.",
                "MAXIMUM SEVEN MEMBERS IN EACH TEAM",
                "ONE COMPULSORY FROM FIRST YEAR.",
                "TIME DURATION: (6+2) MINS PER TEAM.",
                "MUSICAL INSTRUMENTS ARE NOT ALLOWED.",
                "MUSIC CAN BE CREATED USING THINGS LIKE BUCKETS, PLATES, SPOONS, BOTTLES ETC.",
                "CO-ORDINATORS DECISION WILL BE FINAL."
            ]
        },
        "BEST OUT OF WASTE": {
            "venue": "xyz",
            "timings": "05:00pm-06:00pm",
            "coordinators": ["SHAHIDA", "AZEEZA AFREEN", "KUMARI SNIGDHA", "AAYUSH KUMAR"],
            "rules": [
                "MAXIMUM FOUR MEMBERS IN EACH TEAM.",
                "ATLEAST ONE 1ST YEAR IS COMPULSORY. ",
                "MAXIMUM TWO TEAMS FROM EACH SIDE.",
                "MATERIALS WILL BE PROVIDED.",
                "TIME LIMIT IS (30+10) MINUTES.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "SKETCHING": {
            "venue": "xyz",
            "timings": "05:30pm-06:30pm",
            "coordinators": ["SANDEEP NAIK", "PRARTHANA H P", "DIVYA LATHA", "VISHAL HEGDE", "RIYA SINGH", "AAYUSH KUMAR"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "THEME WILL BE PROVIDED ON THE SPOT.",
                "TIME LIMIT 1 HOUR",
                "DRAWING SHEETS WILL BE PROVIDED ON SPOT.",
                "ALL KINDS OF PENCILS CAN BE USED (HB, H, B, CHARCOAL).",
                "COLOUR PENCILS NOT ALLOWED (MONOCHROME ONLY).",
                "PARTICIPANTS MUST BRING THEIR OWN STATIONARY.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "PAINTING": {
            "venue": "xyz",
            "timings": "04:00pm-06:00pm",
            "coordinators": ["SNIGDHA SINGH", "ARPITA SANGAN", "VISHAL HEGDE", "AAYUSH KUMAR", "SOUHITYA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "THEME WILL BE PROVIDED.",
                "ONLY POSTER/WATER PAINTS ARE ALLOWED.",
                "PARTICIPANTS MUST BRING THEIR OWN STATIONARY.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "FACE PAINTING": {
            "venue": "xyz",
            "timings": "10:00am-11:00am",
            "coordinators": ["AFRA ANJUM", "SOUHITYA", "SHRISTI PRIYA", "ANUKRITI SHARMA", "VARSHA CA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "THEME WILL BE PROVIDED ON THE SPOT.",
                "TIME LIMIT 1 HOUR",
                "GET YOUR OWN COLOURS AND BRUSHES.",
                "ANY TYPE OF ELECTRONIC GADGETS ARE NOT ALLOWED.",
                "PARTICIPANTS MUST BRING THEIR OWN STATIONARY.",
                "JUDGES DECISION WILL BE FINAL.",
                "GET YOUR OWN PARTNER FOR FACE PAINT."
            ]
        },
        "BRIDAL MAKE-UP": {
            "venue": "xyz",
            "timings": "12:30pm-1:30pm",
            "coordinators": ["ANUKRITI SHARMA", "TANUSHREE", "NEHA MUNDRA", "SHALINI KUMARI"],
            "rules": [
                "FOUR MEMBERS IN EACH TEAM.",
                "ONE MEMBER SHOULD BE FROM 1ST YEAR AND A BOY IS COMPULSORY.",
                "EXCEPT COSTUMES, NO OTHER MAKEUP OR HAIR STYLE OR ORNAMENTS SHOULD BE PUT PRIOR TO THE COMPETITION.",
                "NO ORNAMENTS OR MAKEUP KIT WILL BE PROVIDED.",
                "TIME DURATION 1 HOUR.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "COLLAGE": {
            "venue": "xyz",
            "timings": "11:30am-12:30pm",
            "coordinators": ["SHUBHAM KANTH", "SUSHMITHA", "AISHWARYA JAIN", "SANJANA", "SHAHIDA"],
            "rules": [
                "TWO PARTICIPANTS PER TEAM.",
                "THEME WILL BE PROVIDED ON THE SPOT.",
                "TIME DURATION 1 HOUR.",
                "CO-ORDINATORS DECISION WILL BE FINAL"
            ]
        },
        "TATOO MAKING": {
            "venue": "xyz",
            "timings": "12:30pm-1:30pm",
            "coordinators": ["SOUHITYA", "AAYUSH KUMAR", "SNIGDHA SINGH"],
            "rules": [
                "UNLIMITED PARTICIPATIONS.",
                "REGISTER 1 HOUR BEFORE THE EVENT.",
                "MARKER PENS WILL BE PROVIDED ON THE SPOT.",
                "TIME DURATION IS 45 MINUTES.",
                "THEME WILL BE PROVIDED ON THE SPOT.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "TREASURE HUNT": {
            "venue": "xyz",
            "timings": "11:00am-12:00pm",
            "coordinators": ["SHREEDHAR MARATHE", "SATISH KUMAR", "SANKET", "PRAJWAL DESAI", "NIKHIL KUMAR"],
            "rules": [
                "UNLIMITED PARTICIPATION.",
                "THREE MEMBERS IN EACH TEAM.",
                "CLUES WILL BE HIDDEN IN THE CAMPUS ONLY.",
                "NO USAGE OF VEHICLES OR EXTERNAL SUPPORT.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "AIR CRASH": {
            "venue": "xyz",
            "timings": "8:30pm-9:30pm",
            "coordinators": ["ABHIGYAN PANDEY", "SANKET"],
            "rules": [
                "MAXIMUM OF THREE ENTRIES PER TEAM (ONE 1ST YEAR COM-PULSORY)",
                "INDIVIDUAL EVENT",
                "TIME LIMIT: 3 MINUTES",
                "SATIRE AND PUN ARE ALLOWED BUT VULGARITY AND ABUSIVE WORDS SHOULD NOT BE USED.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "SUPER MINUTE": {
            "venue": "xyz",
            "timings": "12:00pm-1:00pm",
            "coordinators": ["NIKHILA K B", "ASHA R C", "ABHISHEK S K", "AMOGHA B N"],
            "rules": [
                "INDIVIDUAL EVENT ONLY FOR CAPTAINS",
                "MULTIPLE ROUNDS.",
                "THE INFORMATION ABOUT THE ACTIVITIES WILL BE PROVIDED ON THE SPOT.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "GREETING CARD": {
            "venue": "xyz",
            "timings": "1:30pm-2:30pm",
            "coordinators": ["YASHASWINI K", "OSHIN SRIVASTAVA", "CHRISTINE", "AISHWARYA JAIN", "SUSHMA GP"],
            "rules": [
                "UNLIMITED PARTICIPATION.",
                "EACH TEAM MUST HAVE TWO MEMBERS.",
                "BRING ALL THE MATERIALS REQUIRED.",
                "NO READYMADE MATERIALS ALLOWED.",
                "THEME WILL BE GIVEN ON THE SPOT.",
                "TIME DURATION 45 MINUTES.",
                "EVERYTHING SHOULD BE DONE FROM THE SCRATCH DURING THE COMPETITION."
            ]
        },
        "DOODLE CREATION": {
            "venue": "xyz",
            "timings": "2:30pm-3:30pm",
            "coordinators": ["ANUKRITI SHARMA", "KUMARI SNIGDHA", "SWETHA C P", "VARSHA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "USE OF PENCIL OR BLACK PEN.",
                "NO COLOURS OR SKETCH PENS TO BE USED.",
                "TIME LIMIT 45 MINUTES.",
                "THEME WILL BE GIVEN ON SPOT.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "BATHROOM SINGING": {
            "venue": "xyz",
            "timings": "8:30pm-9:30pm",
            "coordinators": ["DEEPSHIKHA", "VINAY R"],
            "rules": [
                "MAXIMUM TWO TEAMS FROM EACH SIDE.",
                "EACH TEAM MUST HAVE THREE MEMBERS INCLUDING AT-LEAST ONE FROM 1ST YEAR.",
                "TIME DURATION: (2+1) MINUTES.",
                "JUDGEMENT WILL BE DONE THE BASIS OF LYRICS, PRESEN-TATION, AND THE MOST ENTERTAINING.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "SELL HELL": {
            "venue": "xyz",
            "timings": "8:30pm-9:30pm",
            "coordinators": ["SANKET", "ABHIGYAN PANDEY", "BIDYANSHU PANDEY", "NEELESH JAISWAL"],
            "rules": [
                "MAXIMUM THREE TEAMS FROM EACH SIDE.",
                "ATLEAST TWO 1ST YEAR IS COMPULSORY.",
                "EACH TEAM MUST HAVE TWO MEMBERS.",
                "TIME DURATION THREE MINUTES.",
                "SATIRE AND PUN ARE ALLOWED BUT VULGARITY AND ABU-SIVE WORDS SHOULD NOT BE USED.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "SUDOKO": {
            "venue": "xyz",
            "timings": "6:00pm-6:30pm",
            "coordinators": ["RAGHAVENDRA", "VISHWAS N M", "HARISH SHARMA", "HEMASHREE"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "TIME LIMIT: 45 MINS",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "RUBICS CUBE": {
            "venue": "xyz",
            "timings": "6:00pm-6:30pm",
            "coordinators": ["VANDANA KUMARI", "KUSHAL JHA", "ASHWINI", "SIRISHA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "FASTEST PERSON TO SOLVE THE CUBE WINS.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "KANNADA QUIZ (P)": {
            "venue": "xyz",
            "timings": "5:00pm-6:00pm",
            "coordinators": ["PRASHANT M", "SHIVRAJ SHETTY", "RAGHAVENDRA", "SUMANTH KUMAR", "PAWANA K", "SHARAT KUMAR", "KRUTHI", "PRARTHANA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "GROUP EVENT COMPRISING OF 2+1 MEMBERS.",
                "EVENT WILL HAVE TWO ROUNDS- PRELIMS AND MAINS.",
                "FOUR TEAMS WILL BE SELECTED FOR THE MAIN ROUND(1 FROM EACH TEAM)",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "KANNADA QUIZ (F)": {
            "venue": "xyz",
            "timings": "12:00pm-1:00pm",
            "coordinators": ["PRASHANT M", "SHIVRAJ SHETTY", "RAGHAVENDRA", "SUMANTH KUMAR", "PAWANA K", "SHARAT KUMAR", "KRUTHI", "PRARTHANA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "GROUP EVENT COMPRISING OF 2+1 MEMBERS.",
                "EVENT WILL HAVE TWO ROUNDS- PRELIMS AND MAINS.",
                "FOUR TEAMS WILL BE SELECTED FOR THE MAIN ROUND(1 FROM EACH TEAM)",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "GROUP DISCUSSION": {
            "venue": "xyz",
            "timings": "6:00pm-7:00pm",
            "coordinators": ["SANGAMESH B BHINGI", "SHREESHA G K", "SUMANTH KUMAR", "K NIKHIL KUMAR", "ADARSH KUMAR", "SANKET"],
            "rules": [
                "SIX MEMBERS PER TEAM",
                "AT LEAST 1ST YEAR MANDATORY IN EACH TEAM",
                "ATLEAST 1 GIRL MANDATORY.",
                "EACH TEAM WILL BE ALLOTTED A TIME OF 6 MINUTES.",
                "EXCEEDING OR UNDERUTILIZATION OF TIME BY THE GROUP WILL LEAD TO REDUCTION OF MARKS.",
                "ANY SORT OF VULGARITY OR ABUSE WILL LEAD TO DISQUALIFICATION.",
                "DECISION OF THE JUDGE(S) IS FINAL AND NO QUERIES OR REQUESTS IN THIS REGARD WILL BE ENTERTAINED."
            ]
        },
        "PICK & SPEAK": {
            "venue": "xyz",
            "timings": "5:00pm-6:00pm",
            "coordinators": ["RAGHAVENDRA", "SANDEEP NAIK", "SHREESHA", "RISHAB NARAYAN", "SANKET", "DEEPSHIKA SHARMA", "DIKSHA KUMARI", "HARSH DEORA"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "TIME DURATION 2 MINS.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL"
            ]
        },
        "GENERAL QUIZ (P)": {
            "venue": "xyz",
            "timings": "5:00pm-6:00pm",
            "coordinators": ["ABHIGYAN PANDEY", "NIRAJ KAUSHIK", "VENUGOPAL", "SUSHMITA", "SHREESHA G K", "ADARSH KUMAR", "SAHANA HEGDE", "PRASHANTH M"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "GROUP EVENT COMPRISING OF 2+1 MEMBERS.",
                "EVENT WILL HAVE TWO ROUNDS- PRELIMS AND MAINS.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION IS FINAL."
            ]
        },
        "GENERAL QUIZ (F)": {
            "venue": "xyz",
            "timings": "12:00pm-1:00pm",
            "coordinators": ["ABHIGYAN PANDEY", "NIRAJ KAUSHIK", "VENUGOPAL", "SUSHMITA", "SHREESHA G K", "ADARSH KUMAR", "SAHANA HEGDE", "PRASHANTH M"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "GROUP EVENT COMPRISING OF 2+1 MEMBERS.",
                "EVENT WILL HAVE TWO ROUNDS- PRELIMS AND MAINS.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION IS FINAL."
            ]
        },
        "TECH CHARADES": {
            "venue": "xyz",
            "timings": "3:00pm-4:00pm",
            "coordinators": ["ABHIGYAN PANDEY", "NIRAJ KAUSHIK", "KUSHAL JHA", "SIDHARTH KUMAR"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "TEAM SIZE 3 MEMBERS.",
                "THERE WILL BE TWO ROUNDS- PRELIMS AND FINALS.",
                "FOUR TEAMS FROM PRELIMS WILL BE SELECTED FOR FINALS.",
                "TIME LIMIT 3 MINS FOR BOTH ROUNDS."
            ]
        },
        "C PROGRAMMING (P)": {
            "venue": "xyz",
            "timings": "5:30pm-6:30pm",
            "coordinators": ["SIDHARTH KUMAR", "JEETENDRA", "SAUJANYA NAGPAL", "KUSHAL JHA", "SHASHANK"],
            "rules": [
                "ONLY FOR 1ST AND 2ND YEARS.",
                "UNLIMITED ENTRIES.",
                "EVENT WILL BE HELD IN TWO ROUNDS- PRELIMS AND FINALS.",
                "EACH ROUND WILL BE OF 45 MIN.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "C PROGRAMMING (F)": {
            "venue": "xyz",
            "timings": "12:00pm-1:00pm",
            "coordinators": ["SIDHARTH KUMAR", "JEETENDRA", "SAUJANYA NAGPAL", "KUSHAL JHA", "SHASHANK"],
            "rules": [
                "ONLY FOR 1ST AND 2ND YEARS.",
                "UNLIMITED ENTRIES.",
                "EVENT WILL BE HELD IN TWO ROUNDS- PRELIMS AND FINALS.",
                "EACH ROUND WILL BE OF 45 MIN.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION WILL BE FINAL."
            ]
        },
        "SPELL BEE": {
            "venue": "xyz",
            "timings": "5:30pm-6:00pm",
            "coordinators": ["SIDHARTH KUMAR", "JEETENDRA", "SAUJANYA NAGPAL", "KUSHAL JHA", "SHASHANK"],
            "rules": [
                "UNLIMITED ENTRIES PER TEAM.",
                "USE OF MOBILE PHONES AND ELECTRONIC GADGETS IS STRICTLY PROHIBITED.",
                "COORDINATOR’S DECISION IS FINAL."
            ]
        },
        "MOCK PLACEMENT (P)": {
            "venue": "xyz",
            "timings": "3:30pm-4:30pm",
            "coordinators": ["NIKHIL KUMAR", "HARSH DEORA", "ABHISHEK SINGH"],
            "rules": [
                "UNLIMITED ENTRIES",
                "INDIVIDUAL EVENT",
                "ONLY FOR 1ST AND 2ND YEARS",
                "THE EVENT WILL BE HELD IN 3 ROUNDS",
                "ROUND 1: THERE WILL AN APTITUDE TEST COMPRISING OF QUESTIONS RELATED TO QUANTITATIVE, LOGICAL AND VERBAL REASONING.",
                "ROUND 2: GROUP DISCUSSION ROUND.TOPICS WILL BE GIVEN ON THE SPOT.",
                "ROUND 3: PERSONAL INTERVIEW ROUND.FORMAL DRESS CODE SHOULD BE MAINTAINED FOR THIS ROUND.",
                "ANY KIND OF MISBEHAVIOR OR MALPRACTICE WILL NOT BE TOLERATED AND MAY LEAD TO DISQUALIFICATION.",
                "COORDINATORS DECISION WILL BE FINAL. "
            ]
        },
        "MOCK PLACEMENT (2nd)": {
            "venue": "xyz",
            "timings": "5:00pm-6:00pm",
            "coordinators": ["NIKHIL KUMAR", "HARSH DEORA", "ABHISHEK SINGH"],
            "rules": [
                "UNLIMITED ENTRIES",
                "INDIVIDUAL EVENT",
                "ONLY FOR 1ST AND 2ND YEARS",
                "THE EVENT WILL BE HELD IN 3 ROUNDS",
                "ROUND 1: THERE WILL AN APTITUDE TEST COMPRISING OF QUESTIONS RELATED TO QUANTITATIVE, LOGICAL AND VERBAL REASONING.",
                "ROUND 2: GROUP DISCUSSION ROUND.TOPICS WILL BE GIVEN ON THE SPOT.",
                "ROUND 3: PERSONAL INTERVIEW ROUND.FORMAL DRESS CODE SHOULD BE MAINTAINED FOR THIS ROUND.",
                "ANY KIND OF MISBEHAVIOR OR MALPRACTICE WILL NOT BE TOLERATED AND MAY LEAD TO DISQUALIFICATION.",
                "COORDINATORS DECISION WILL BE FINAL. "
            ]
        },
        "MOCK PLACEMENT (F)": {
            "venue": "xyz",
            "timings": "12:00pm-1:00pm",
            "coordinators": ["NIKHIL KUMAR", "HARSH DEORA", "ABHISHEK SINGH"],
            "rules": [
                "UNLIMITED ENTRIES",
                "INDIVIDUAL EVENT",
                "ONLY FOR 1ST AND 2ND YEARS",
                "THE EVENT WILL BE HELD IN 3 ROUNDS",
                "ROUND 1: THERE WILL AN APTITUDE TEST COMPRISING OF QUESTIONS RELATED TO QUANTITATIVE, LOGICAL AND VERBAL REASONING.",
                "ROUND 2: GROUP DISCUSSION ROUND.TOPICS WILL BE GIVEN ON THE SPOT.",
                "ROUND 3: PERSONAL INTERVIEW ROUND.FORMAL DRESS CODE SHOULD BE MAINTAINED FOR THIS ROUND.",
                "ANY KIND OF MISBEHAVIOR OR MALPRACTICE WILL NOT BE TOLERATED AND MAY LEAD TO DISQUALIFICATION.",
                "COORDINATORS DECISION WILL BE FINAL. "
            ]
        },
        "CREATIVE WRITING": {
            "venue": "xyz",
            "timings": "5:00pm-6:30pm",
            "coordinators": ["ANANYA SINGH", "AISHWARYA JAIN", "SHWETHA CP"],
            "rules": [
                "UNLIMITED ENTRIES",
                "TOPIC WILL BE GIVEN ON SPOT",
                "TIME DURATION: 30 MINS ",
                "MARKS ON BOTH FORMAT AND CONTENT",
                "COMPOSITION SHOULD BE CREATED IN ENGLISH ONLY",
                "COORDINATOR’S DECISION WILL BE FINAL"
            ]
        },
        "PERCEPTION WRITING": {
            "venue": "xyz",
            "timings": "5:00pm-6:30pm",
            "coordinators": ["PRAVEEN GOPALI", "PRIYANKA GIRI", "ADARSH KUMAR", "SIRISHA"],
            "rules": [
                "UNLIMITED ENTRY",
                "TIME LIMIT: 30 MINUTES",
                "PICTURES WOULD BE GIVEN ON THE SPOT.",
                "BASED ON THE GIVEN PICTURES PARTICIPANT HAS TO CREATE COMPOSITON IN ENGLISH.",
                "HIGHER PREFERENCE FOR GRAMMATICALLY CORRECT AND WELL PRESENTED CONTENT.",
                "CO-ORDINATOR’S DECISION WILL BE FINAL DECISION."
            ]
        },
        "ESSAY WRITING": {
            "venue": "xyz",
            "timings": "4:00pm-5:30pm",
            "coordinators": ["VISHWAS", "ADARSH KUMAR", "SIRISHA", "ARAVIND BHAT"],
            "rules": [
                "UNLIMITED ENTRIES.",
                "TOPIC WILL BE GIVEN ON SPOT.",
                "TIME LIMIT: 30MIN",
                "COMPOSITION CAN BE CREATED IN ENGLISH, HINDI AND KANNADA.",
                "TOTAL WORDS SHOULD NOT EXCEED 400.",
                "JUDGES DECISION WILL BE FINAL."
            ]
        },
        "LOVE LETTER WRITING": {
            "venue": "xyz",
            "timings": "4:00pm-5:30pm",
            "coordinators": ["SHAHIDA", "TRIPTI MISHRA", "ANUKRITI SHARMA", "SAUJANYA NAGPAL", "GAGANDEEP"],
            "rules": [
                "UNLIMITED ENTRIES",
                "TIME LIMIT: 30 MINS",
                "GOOD PRESENTATION AND GOOD CONTENT COUNTS FOR THE POINTS",
                "COMPOSITION CAN BE CREATED IN ENGLISH, HINDI AND KANNADA.",
                "JUDGES DECISION WILL BE FINAL"
            ]
        },
        "HATE LETTER": {
            "venue": "xyz",
            "timings": "4:00pm-4:30pm",
            "coordinators": ["DEEKSHITA", "OSHIN SRIVASTAVA", "ABHISHEK SINGH", "PRAYASHI", "NISHITA PAL", "KUSHAL JHA"],
            "rules": [
                "UNLIMITED ENTRIES",
                "TIME LIMIT: 30 MINS",
                "GOOD PRESENTATION AND GOOD CONTENT COUNTS FOR THE POINTS",
                "OFFENSIVE WORDS ARE ALLOWED",
                "COMPOSITION CAN BE IN ENGLISH,HINDI AND KANNADA",
                "JUDGES DECISION IS THE FINAL DECISION"
            ]
        },
        "HORROR STORY WRITING": {
            "venue": "xyz",
            "timings": "5:00pm-6:30pm",
            "coordinators": ["LAVANYA N GOWDA", "SHARMISTHA", "PRAVEEN GOPALI", "GAURAV KUMAR", "SATISH KUMAR"],
            "rules": [
                "TIME LIMIT: 30 MINS",
                "COMPOSITION SHOULD BE IN ENGLISH ONLY",
                "NO VULGARITY ALLOWED",
                "NO OFFENSIVE CONTENT RELATED TO ANY CLASS OF PEOPLE.",
                "ANY SCRIPT FROM MOVIES OR ANY PART OF IT WILL NOT BE PERMITTED.",
                "CO-ORDINATORS DECISION WILL BE FINAL."
            ]
        },
        "ATHLETICS": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["SHASHANK K", "ASHISH RANJAN", "PRAJWAL DESAI", "SHREEDHAR M"],
            "rules": [
                "1 WARNING FOR EACH PARTICIPANT FOR FALSE START. IF MORE THAN ONE WARNING, TEAM WILL BE DISQUALIFIED.",
                "OBSTRUCTING THE PATH OF OTHER PLAYER ALSO LEADS TO DISQUALIFICATION OF THE TEAM.",
                "EVENT COORDINATORS HAVE THE RIGHT TO RESTART THE RACE IF IT IS DEEMED NECESSARY.",
                "TEAMS MUST REGISTER ON TIME.",
                "100,200M  - 2 PARTICIPANTS PER TEAM",
                "100,200M  - 1 PARTICIPANT FROM 1ST YEAR IS COMPULSORY FOR ANY ONE RACE.",
                "RELAY - 4 PARTICIPANTS PER TEAM."
            ]
        },
        "TABLE TENNIS": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["AKSHAY HULEKAL", "ABHISHEK S K", "VEEKSHITA", "SANGAMESH PATIL", "ANUP HEGDE", "BHARATESH BHAT"],
            "rules": [
                "SINGLES, DOUBLES AND MIXED DOUBLES",
                "LEAGUE MATCHES: 11 POINTS*3 SETS (SAME FOR SINGLES, DOUBLES AND MIXED)",
                "FINALS: 11 POINTS*5 SETS (SAME FOR SINGLES, DOUBLES AND MIXED)",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL.",
                "RACKETS WILL NOT BE PROVIDED."
            ]
        },
        "VOLLEY BALL (P)": {
            "venue": "xyz",
            "timings": "5:45am-8:00am",
            "coordinators": ["PRAVEEN M", "NAVEEN NAIK", "RAJU", "SANDEEP KUMAR", "CHETAN G S"],
            "rules": [
                "6+3 PLAYERS PER TEAM.",
                "1 PLAYER COMPULSORY FROM 1ST YEAR IN EACH TEAM.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "VOLLEY BALL (F)": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["PRAVEEN M", "NAVEEN NAIK", "RAJU", "SANDEEP KUMAR", "CHETAN G S"],
            "rules": [
                "6+3 PLAYERS PER TEAM.",
                "1 PLAYER COMPULSORY FROM 1ST YEAR IN EACH TEAM.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "THROW BALL": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["NISCHITH", "NAVEEN NAIK", "KAVYA P D", "ANIL KUMAR G", "SHREYA WALI", "CHETAN G S"],
            "rules": [
                "7+3 PLAYERS PER TEAM.",
                "2 PLAYERS COMPULSORY FROM 1ST YEAR IN EACH TEAM.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "SHOTPUT": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["SHIVSHARAN M", "KAVYA P D", " LUCKY", "GAGANDEEP"],
            "rules": [
                "UNLIMITED ENTRIES",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "TUG OF WAR": {
            "venue": "xyz",
            "timings": "4:00pm-6:00pm",
            "coordinators": ["SUMANTH KUMAR", "RANJITH", "BIDYANSHU", "PRAVEEN M", "GAURAV KUMAR"],
            "rules": [
                "8 MEMBERS FROM EACH TEAM.",
                "2 MEMBERS FROM 1ST YEAR ARE COMPULSORY.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED."
            ]
        },
        "BADMINTON (P)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["C K KEERTHI", "PRAVEEN M", "CHETAN SM", "SANGAMESH SH", "SATYAM", "SHARVANI"],
            "rules": [
                "SINGLES, DOUBLES AND MIXED DOUBLES",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL.",
                "RACKETS WILL NOT BE PROVIDED."
            ]
        },
        "BADMINTON (F)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["C K KEERTHI", "PRAVEEN M", "CHETAN SM", "SANGAMESH SH", "SATYAM", "SHARVANI"],
            "rules": [
                "SINGLES, DOUBLES AND MIXED DOUBLES",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL.",
                "RACKETS WILL NOT BE PROVIDED."
            ]
        },
        "KHO-KHO (P)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["SANGMESH BHINGI", "AMIT KOMPI", "SANDESH KEGI", "SACHIN PATTAR", "SHREEDHAR MARATHE"],
            "rules": [
                "9+3 PLAYERS PER TEAM.",
                "2 PLAYERS FROM 1ST YEAR ARE COMPULSORY FROM EACH TEAM.",
                "NO EXCHANGE OF PLAYERS DURING THE MATCH TIME.",
                "PRELIMS: BOYS: 7 MIN*2 SET.GIRLS: 5 MIN *2 SET.",
                "FINALS:  BOYS: 7 MIN*2 SET. GIRLS: 5 MIN*2 SET.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "KHO-KHO (F)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["SANGMESH BHINGI", "AMIT KOMPI", "SANDESH KEGI", "SACHIN PATTAR", "SHREEDHAR MARATHE"],
            "rules": [
                "9+3 PLAYERS PER TEAM.",
                "2 PLAYERS FROM 1ST YEAR ARE COMPULSORY FROM EACH TEAM.",
                "NO EXCHANGE OF PLAYERS DURING THE MATCH TIME.",
                "PRELIMS: BOYS: 7 MIN*2 SET.GIRLS: 5 MIN *2 SET.",
                "FINALS:  BOYS: 7 MIN*2 SET. GIRLS: 5 MIN*2 SET.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION WILL BE FINAL."
            ]
        },
        "CRICKET (P)": {
            "venue": "xyz",
            "timings": "8:00am - 3:30pm",
            "coordinators": ["ASHISH RANJAN", "NISCHITH", "RAJU", "SHUBHAM ANAND", "SHREYA WALI", "SIDDANT", "KAVYA MOHAN", "SHREEDHAR PATIL"],
            "rules": [
                "FOR BOYS :",
                "11+4 PLAYERS FROM EACH TEAM.",
                "OVER LIMIT: 10 OVERS (2+2+2+2+2)-PRELIMS.12 OVERS (3+3+2+2+2)-FINALS.",
                "ATLEAST 2 PLAYERS FROM 1ST YEAR ARE COMPULSORY",
                "POWER PLAY:10 OVERS: FIRST 2 OVERS ONLY 2 FIELDERS OUTSIDE THE 30 YARD CIRCLE.",
                "BATTING POWER PLAY: 8TH OR 9TH OVER ONLY 3 FIELDERS OUTSIDE THE 30 YARD ",
                "12 OVERS: FIRST 3 OVERS ONLY 2 FIELDERS OUTSIDE THE 30 YARD CIRCLE.",
                "BATTING POWER PLAY: 10TH OR 11TH OVER ONLY 3 FIELDERS OUTSIDE THE 30 YARD.",
                "FOR GIRLS :",
                "6+2 PLAYERS FROM EACH TEAM.",
                "ATLEAST 1 PLAYER IS COMPULSORY FROM 1ST YEAR.",
                "OVER LIMIT: 5 OVERS (2+2+1)-PRELIMS 6 OVERS (2+2+1+1)-FINALS"
            ]
        },
        "CRICKET (F)": {
            "venue": "xyz",
            "timings": "8:00am - 11:00pm",
            "coordinators": ["ASHISH RANJAN", "NISCHITH", "RAJU", "SHUBHAM ANAND", "SHREYA WALI", "SIDDANT", "KAVYA MOHAN", "SHREEDHAR PATIL"],
            "rules": [
                "FOR BOYS :",
                "11+4 PLAYERS FROM EACH TEAM.",
                "OVER LIMIT: 10 OVERS (2+2+2+2+2)-PRELIMS.12 OVERS (3+3+2+2+2)-FINALS.",
                "ATLEAST 2 PLAYERS FROM 1ST YEAR ARE COMPULSORY",
                "POWER PLAY:10 OVERS: FIRST 2 OVERS ONLY 2 FIELDERS OUTSIDE THE 30 YARD CIRCLE.",
                "BATTING POWER PLAY: 8TH OR 9TH OVER ONLY 3 FIELDERS OUTSIDE THE 30 YARD ",
                "12 OVERS: FIRST 3 OVERS ONLY 2 FIELDERS OUTSIDE THE 30 YARD CIRCLE.",
                "BATTING POWER PLAY: 10TH OR 11TH OVER ONLY 3 FIELDERS OUTSIDE THE 30 YARD.",
                "FOR GIRLS :",
                "6+2 PLAYERS FROM EACH TEAM.",
                "ATLEAST 1 PLAYER IS COMPULSORY FROM 1ST YEAR.",
                "OVER LIMIT: 5 OVERS (2+2+1)-PRELIMS 6 OVERS (2+2+1+1)-FINALS"
            ]
        },
        "MARATHON": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["SHREEDHAR MARATHE", "RANJITH", "SAUJANYA NAGPAL", "VIKRAM MANDAL", "PRAJWAL DESAI"],
            "rules": [
                "UNLIMITED ENTRIES."
            ]
        },
        "FOOTBALL (P)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["SHREEDHAR MARATHE", "TANMAYE SETHI", "SIDHARTH KUMAR", "PRAJWAL DESAI", "MANJUNATH CHAVHAN", "DEEPAK ULLAGADDI"],
            "rules": [
                "6+2 PLAYERS (ROLLING SUBS) PER TEAM.",
                "PRELIMS: 10 MINS PER HALF.",
                "FINALS: 15 MINS PER HALF.",
                "YELLOW CARD LEADS TO 2 MINS SUSPENSION AFTER A WARNING",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "REFEREE DECISION IS FINAL."
            ]
        },
        "FOOTBALL (F)": {
            "venue": "xyz",
            "timings": "5:45am - 8:00am",
            "coordinators": ["SHREEDHAR MARATHE", "TANMAYE SETHI", "SIDHARTH KUMAR", "PRAJWAL DESAI", "MANJUNATH CHAVHAN", "DEEPAK ULLAGADDI"],
            "rules": [
                "6+2 PLAYERS (ROLLING SUBS) PER TEAM.",
                "PRELIMS: 10 MINS PER HALF.",
                "FINALS: 15 MINS PER HALF.",
                "YELLOW CARD LEADS TO 2 MINS SUSPENSION AFTER A WARNING",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "REFEREE DECISION IS FINAL."
            ]
        },
        "BASKETBALL (P)": {
            "venue": "xyz",
            "timings": "6:00pm - 9:30pm",
            "coordinators": ["RISHAB NARAYAN", "VIKRAM MANDAL", "LUCKY", "ADARSH KUMAR", "PRAVEEN M"],
            "rules": [
                "5+3 PLAYERS PER TEAM.",
                "PRELIMS: BOYS: 7 MINS PER SET (4 SETS).",
                "GIRLS: 5 MINS PER SET (4 SETS).",
                "FINALS: BOYS: 10 MINS PER SET (4 SETS)",
                "GIRLS: 5 MINS PER SET (4 SETS).",
                "1 PLAYER COMPULSORY FROM 1ST YEAR.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION IS FINAL."
            ]
        },
        "BASKETBALL (F)": {
            "venue": "xyz",
            "timings": "5:30pm - 7:00pm",
            "coordinators": ["RISHAB NARAYAN", "VIKRAM MANDAL", "LUCKY", "ADARSH KUMAR", "PRAVEEN M"],
            "rules": [
                "5+3 PLAYERS PER TEAM.",
                "PRELIMS: BOYS: 7 MINS PER SET (4 SETS).",
                "GIRLS: 5 MINS PER SET (4 SETS).",
                "FINALS: BOYS: 10 MINS PER SET (4 SETS)",
                "GIRLS: 5 MINS PER SET (4 SETS).",
                "1 PLAYER COMPULSORY FROM 1ST YEAR.",
                "NO EXPLICIT/VULGAR WORDS ARE ENTERTAINED.",
                "UMPIRES DECISION IS FINAL."
            ]
        }

    }
    $scope.currentdict = $scope.eventarray[$scope.currentevent];
    console.log($scope.currentcategory);
});

app.controller("resultsCtrl", function($scope, $http) {
    console.log("in results controller");
    $scope.results = "";
    $scope.error = 0;
    $http.get("https://raw.githubusercontent.com/sidharth6323/utopia2k17/master/results.json", { headers: { 'Cache-Control': 'no-cache' } }).then(function(data) {
        console.log(data.data);
        $scope.results = data.data;
    }, function() {
        $scope.results = { "Poor or No Internet Connection. Please Connect to the internet.": "" };
    });

    $scope.doRefresh = function() {
        $scope.error = 0;
        $scope.results = "";
        $http.get("https://raw.githubusercontent.com/sidharth6323/utopia2k17/master/results.json", { headers: { 'Cache-Control': 'no-cache' } }).then(function(data) {
                console.log(data.data);
                $scope.results = data.data;
            }, function() {
                $scope.results = { "Poor or No Internet Connection. Please Connect to the internet.": "" };
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
    };

})
