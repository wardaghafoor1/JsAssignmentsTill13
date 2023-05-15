///1 ///
// var a = 10
// document.write("Result:" + "<br>")
// document.write("The value of a is: " + a + "<br>")
// document.write("<p>................." +"</p>")
// document.write("The value of ++a is: " + ++a + "<br>")
// document.write("Now the value of a is: " + a + "<br>")
// document.write("" + "<br>")
// document.write("The value of a++ is: " + a++ + "<br>")
// document.write("Now the value of a is: " + a + "<br>")
// document.write("" + "<br>")
// document.write("The value of --a is: " + --a + "<br>")
// document.write("Now the value of a is: " + a + "<br>")
// document.write("" + "<br>")
// document.write("The value of a-- is: " + a-- + "<br>")
// document.write("Now the value of a is: " + a + "<br>")



///2/////
// --a //  initial value of a is 2 but final value is 1 b/c of decrement.
// --a - --b // a is 1 and b becomes 0 after decrement of 1 so result is 1-0 = 0.
// --a - --b + ++b // a is still 1 nd b become 1 after increment of 1 so result is 2 i.e 1+1.
// --a - --b + ++b + b-- // result is 3
// var a = 2 , b=1;
// var result = --a - --b + ++b + b--;
// document.write("RESULT IS " +result + "<br>")
// document.write("a is 1" + "<br>")
// document.write("b is 0" + "<br>")
// document.write("result is 3")

//// 3 ////
// var enterName = prompt("Enter your name:");
// document.write("Hello  " + enterName);

///5 //

// var num = prompt("Enter any no: ")
// if (num === null || num === "") (num = 5)
// document.write("<h2> Table of " + num + "</h2>")
// for (var i = 1; i <= 10; i++) (document.write(num + " x " + i + " = " + (num * i) + "<br>"))

///6//

    // Prompt the user to enter subject names
    // var subject1 = prompt("Enter subject 1 name:");
    // var subject2 = prompt("Enter subject 2 name:");
    // var subject3 = prompt("Enter subject 3 name:");

    // Set total marks for each subject
    // var totalMarks = 100;

    // Prompt the user to enter obtained marks for each subject
    // var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
    // var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
    // var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

    // Calculate total marks and percentage
    // var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    // var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    // Display the result
    // document.write("<table>");
    // document.write("<tr>");
    // document.write("<th>Subject</th>");
    // document.write("<th>Total Marks</th>");
    // document.write("<th>Obtained Marks</th>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>" + subject1 + "</td>");
    // document.write("<td>" + totalMarks + "</td>");
    // document.write("<td>" + obtainedMarks1 + "</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>" + subject2 + "</td>");
    // document.write("<td>" + totalMarks + "</td>");
    // document.write("<td>" + obtainedMarks2 + "</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td>" + subject3 + "</td>");
    // document.write("<td>" + totalMarks + "</td>");
    // document.write("<td>" + obtainedMarks3 + "</td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td><strong>Total</strong></td>");
    // document.write("<td><strong>" + (totalMarks * 3) + "</strong></td>");
    // document.write("<td><strong>" + totalObtainedMarks + "</strong></td>");
    // document.write("</tr>");
    // document.write("<tr>");
    // document.write("<td colspan='2'><strong>Percentage</strong></td>");
    // document.write("<td><strong>" + percentage.toFixed(2) + "%</strong></td>");
    // document.write("</tr>");
    // document.write("</table>");
  



