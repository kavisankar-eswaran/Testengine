document.addEventListener('DOMContentLoaded', function () {

    let style = document.createElement('style');
    style.innerHTML = `
        #device-width {
            position: fixed;
            font-size: 10px;
            right: 10px;
            bottom: 10px;
            padding: 10px;
            color: #fff;
            background: #000;
            border-radius: 10px;
            z-index: 99999999999999;
            border: 2px solid #a6a6a6;
            font-weight: 700;
            font-family: inherit;
        }
    `;
    document.head.appendChild(style);


    let deviceWidthDiv = document.createElement('div');
    deviceWidthDiv.id = 'device-width';
    document.body.appendChild(deviceWidthDiv);

    function updateDeviceWidth() {
        let deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (deviceWidthDiv) {
            deviceWidthDiv.innerHTML = 'Device Width: ' + deviceWidth + 'px';
        }
    }

    updateDeviceWidth();
    window.addEventListener('resize', updateDeviceWidth);
});
