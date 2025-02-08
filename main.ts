let Grader = 0
basic.forever(function () {
    Grader = input.compassHeading()
    if (Grader < 45) {
        basic.showString("N")
    } else if (Grader < 135) {
        basic.showString("Ø")
    } else if (Grader < 225) {
        basic.showString("S")
    } else if (Grader < 315) {
        basic.showString("V")
    } else {
        basic.showString("N")
    }
})
