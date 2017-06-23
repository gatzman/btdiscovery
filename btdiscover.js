$(function () {
    console.log('I am ready');
    $('.discover').on('click', function () {
        console.log('Clicked Discover');


        options.acceptAllDevices = true;

        console.log('Requesting Bluetooth Device...');
        navigator.bluetooth.requestDevice(options).then(device => {console.log('> Name:             ' + device.name);
        console.log('> Id:               ' + device.id);
        console.log('> Connected:        ' + device.gatt.connected);
    }).
        catch(error => {
            console.log('Argh! ' + error);
    })
        ;
    })
});