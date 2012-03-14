/**
 * 设备检测
 * "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A406"
 * @author Miller
 */
(function(){
	
	var device = {},
	deviceTest = /(ipod|iphone|ipad)/g,
	ua = navigator.userAgent.toLowerCase(),
	matches = deviceTest.exec( ua );

	if( matches ) {
		var deviceType = matches[ 1 ];

		if( deviceType == 'ipod' || 
			deviceType == 'iphone' ||
			deviceType == 'ipad'
		) {
			device.os = 'ios';
			device.version =  parseInt( 
										( /os\s([\d_]+)/.exec( ua ) )[ 1 ], 
									10 );
		}
	}

	QW.provide('Device', device);
}) ();
