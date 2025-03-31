$(document).ready(function() {
    // Define the width of each face frame
    let frameWidth = 367; // Adjust based on your sprite sheet
    let totalFrames = 5;  // Number of different images in the strip

    // Function to move face parts left and loop infinitely
    function cycleFacePart(partId) {
        let currentFrame = 0;

        $(`#${partId}`).on("contextmenu", function(e) {
            e.preventDefault();
            currentFrame++;

            if (currentFrame >= totalFrames) {
                // Reset back to first position
                $(this).animate({ left: "0px" }, 500);
                currentFrame = 0;
            } else {
                // Move left to the next frame
                $(this).animate({ left: `-=${frameWidth}px` }, 500);
            }
            return false;
        });
    }

    // Apply the function to all face parts
    cycleFacePart("head");
    cycleFacePart("eyes");
    cycleFacePart("nose");
    cycleFacePart("mouth");

    // Lightning function with thunder sound
    function lightning() {
        $("#lightning1").fadeIn(250).fadeOut(250);
        $("#lightning2").fadeIn(250).fadeOut(250);
        $("#lightning3").fadeIn(250).fadeOut(250);
        document.getElementById("thunderSound").play();
    }
});