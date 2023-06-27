input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Yes)
})
hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 25) {
        hummingbird.setPositionServo(FourPort.One, 45)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) > 25) {
        hummingbird.setPositionServo(FourPort.One, 0)
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 25) {
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        0,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        100
        )
        basic.pause(100)
    } else {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        100,
        0
        )
    }
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 25) {
        hummingbird.setTriLED(
        TwoPort.Two,
        100,
        0,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        100
        )
        basic.pause(100)
    } else {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        100,
        0
        )
    }
})
