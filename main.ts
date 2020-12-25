edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    basic.showNumber(randint(1, 6))
})
edubitSoundBit.onEvent(SoundSensorCompareType.MoreThan, 256, function () {
    basic.showNumber(randint(1, 6))
})
basic.forever(function () {
	
})
