$(document).ready(function() {

    var myRules =
        {

            earned:
                {
                    required: true,

                    min:0,
                    max:1000,
                    digits:true
                },
            possible:
                {
                    required: true,

                    min:0,
                    max:1000,
                    digits:true
                }

        };

    // Object containing the error messages
    var myMessages =
        {

            earned:
                {
                    required: "Required",

                    min: "Cant be Below 0",
                    max: "Cant be above 1000",
                    digits:"Invalid Number"
                },
            possible:
                {
                    required: "Required",

                    min: "Cant be Below 0",
                    max: "Cant be above 1000",
                    digits:"Invalid Number"
                }
        };

    $("Form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    var Students = {};

    function sortStudentName(a, b) {
        if (a.Name < b.Name) {
         return - 1}
         if (a.Name > b.Name) {
            return 1
        } else {
            return 0
        }
    }

    function sortStudentGrade(a, b) {
        if ((a.PointsEarned / a.PossiblePoints) < (b.PointsEarned / b.PossiblePoints)) {
            return -1 }
        if ((b.PointsEarned / b.PossiblePoints) > (b.PointsEarned / b.PossiblePoints)) {
            return 1
        } else {
            return 0
        }
    }

    function runMyProgram() {

        $("form").submit(runMyProgram)

        //inputs
        var firstName = $('#firstName').val();

        var lastName = $('#lastName').val();

        var pointsEarned = $('#pointsEarned').val();
        pointsEarned = parseFloat(pointsEarned);

        var possiblePoints = $('#pointsPossible').val();
        possiblePoints = parseFloat(possiblePoints);

        //Process



        var gradeBook = {
            Name: firstName + " " + lastName,
            PointsEarned: pointsEarned,
            PossiblePoints: possiblePoints
        }

        //Output
        if(gradeBook.PointsEarned / gradeBook.PossiblePoints >= .60 &&
            gradeBook.PointsEarned / gradeBook.PossiblePoints < .70)
        {
            $("#finalAnswer").text(gradeBook.Name + ", Your grade is a D | " +
                ((gradeBook.PointsEarned / gradeBook.PossiblePoints) * 100) + "%")
        }
        else if (gradeBook.PointsEarned / gradeBook.PossiblePoints >= .70 &&
            gradeBook.PointsEarned / gradeBook.PossiblePoints < .80)
        {
            $("#finalAnswer").text(gradeBook.Name + ", Your grade is a C | " +
                ((gradeBook.PointsEarned / gradeBook.PossiblePoints) * 100) + "%")
        }
        else if (gradeBook.PointsEarned / gradeBook.PossiblePoints >= .80 &&
            gradeBook.PointsEarned / gradeBook.PossiblePoints < .90)
        {
            $("#finalAnswer").text(gradeBook.Name + ", Your grade is a B | " +
                ((gradeBook.PointsEarned / gradeBook.PossiblePoints) * 100) + "%")
        }
        else if (gradeBook.PointsEarned / gradeBook.PossiblePoints >= .90 &&
            gradeBook.PointsEarned / gradeBook.PossiblePoints  < 1.00)
        {
            $("#finalAnswer").text(gradeBook.Name + ", your grade is a A | " +
                ((gradeBook.PointsEarned / gradeBook.PossiblePoints) * 100) + "%")
        } else {
            $("#finalAnswer").text(gradeBook.Name + ", your grade is a F | " +
                ((gradeBook.PointsEarned / gradeBook.PossiblePoints) * 100) + "%")
        }

        Students.push(gradeBook.Name, (gradeBook.PointsEarned / gradeBook.PossiblePoints));
    }

    $("sortNameBtn").submit(function() {
        sortStudentName
        $("#sorted").text(Students)
    });

    $("sortPercentBtn").submit(function() {
        sortStudentGrade
        $("#sorted").text(Students)
    });

});