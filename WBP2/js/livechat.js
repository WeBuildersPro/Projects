// Current time
window.setInterval(function(){
    var loc = '43.6532, -79.3832' // Toronto expressed as lat,lng tuple
var targetDate = new Date() // Current date/time of user computer
var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60 // Current UTC date/time expressed as seconds since midnight, January 1, 1970 UTC
var apikey = 'AIzaSyAidQrhg6Je65ieVtmbCsg_WnZy0CfUhtI'
 
var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + loc + '&timestamp=' + timestamp + '&key=' + apikey

var xhr = new XMLHttpRequest() // create new XMLHttpRequest2 object
xhr.open('GET', apicall) // open GET request
xhr.onload = function(){
    if (xhr.status === 200){ // if Ajax request successful
        var output = JSON.parse(xhr.responseText) // convert returned JSON string to JSON object
        console.log(output.status) // log API return status for debugging purposes
        if (output.status == 'OK'){ // if API reports everything was returned successfully
            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000 // get DST and time zone offsets in milliseconds
            var localdate = new Date(timestamp * 1000 + offsets) // Date object containing current time of Toronto (timestamp + dstOffset + rawOffset)
            console.log(localdate.toLocaleString()) // Display current Tokyo date and time
        }
    }
    else{
        alert('Request failed.  Returned status of ' + xhr.status)
    }
}
xhr.send() // send request
}, 60000);


// The Bot (Will Have To Learn How To Do This)


// Livechat
var liveChat = Smooch.init({
    appToken: 'esmexkjmg08wjq7csd12651yu',
    emailCaptureEnabled: true,
    givenName: '',
    surname: '',
    email: '',
    // For secure mode
    jwt: '',
    userId: '',
    // Additional properties
    properties: {
        '': ''    
    },
    customText: {
        headerText: 'Support',
        inputPlaceholder: 'Type a message...',
        sendButtonText: 'Send',
        introductionText: 'Have any questions about our service? Don\'t be shy!',
        introAppText: 'Contact us below or from your favorite app.',
        settingsText: 'You can leave us your email so that we can get back to you there.',
        settingsReadOnlyText: 'We\'ll get back to you at this email address if we missed you.',
        settingsInputPlaceholder: 'Your email address',
        settingsSaveButtonText: 'Save',
        settingsHeaderText: 'Settings',
        settingsNotificationText: 'In case we\'re slow to respond you can <a href data-ui-settings-link>leave us your email</a>.',
        actionPaymentError: 'An error occurred while processing the card. <br> Please try again or use a different card.',
        actionPaymentCompleted: 'Payment Completed',
        actionPostbackError: 'An error occurred while processing your action. Please try again.',
        messageError: 'An error occured while sending your message. Please try again.',
        invalidFileError: 'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
        messageIndicatorTitleSingular: '({count}) New message',
        messageIndicatorTitlePlural: '({count}) New messages',
        connectNotificationText: 'Be notified inside your other apps when you get a reply.',
        notificationSettingsChannelsTitle: 'Other Channels',
        notificationSettingsChannelsDescription: 'You can also talk to us from your favorite app or service.',
        notificationSettingsConnectedAs: 'Connected as {username}',
        notificationSettingsConnected: 'Connected',
        wechatQRCodeError: 'An error occurred while fetching your WeChat QR code. Please try again.',
        messengerChannelDescription: 'Connect your Facebook Messenger account to be notified when you get a reply and carry the conversation on Facebook Messenger.',
        frontendEmailChannelDescription: 'To talk to us using email just send a message to our email address and we\'ll reply shortly:',
        smsChannelDescription: 'Connect your SMS number to be notified when you get a reply and carry the conversation over SMS.',
        smsChannelPendingDescription: 'Check your messages at {number} to confirm your phone number.',
        telegramChannelDescription: 'Connect your Telegram account to be notified when you get a reply and carry the conversation on Telegram',
        wechatChannelDescriptionMobile: 'Connect your WeChat account to be notified when you get a reply and carry the conversation on WeChat. To get started, save this QR code image and upload it in the <a href=\'weixin://dl/scan\'>QR code scanner</a>.',
        wechatChannelDescription: 'Connect your WeChat account to be notified when you get a reply and carry the conversation on WeChat. To get started, scan this QR code using the WeChat app.',
        lineChannelDescription: 'To talk to us using LINE, scan this QR code using the LINE app and send us a message.',
        viberChannelDescriptionMobile: 'Connect your Viber account to be notified when you get a reply and carry the conversation on Viber. To get started, install the Viber app and tap Connect.',
        viberChannelDescription: 'Connect your Viber account to be notified when you get a reply and carry the conversation on Viber. To get started, scan the QR code using the Viber app.',
        smsTooManyRequestsError: 'A connection for that number was requested recently. Please try again in {seconds} seconds.',
        smsBadRequestError: 'We were unable to communicate with this number. Try again or use a different one.',
        smsUnhandledError: 'Something went wrong. Please try again.',
        smsPingChannelError: 'There was an error sending a message to your number.',
        smsLinkCancelled: 'Link to {appUserNumber} was cancelled.',
        smsLinkPending: 'Pending',
        smsStartTexting: 'Start Texting',
        smsChangeNumber: 'Change my number',
        smsSendText: 'Send me a text',
        smsContinue: 'Continue',
        smsCancel: 'Cancel',
        transferError: 'An error occurred when attempting to generate a link for this channel. Please try again.',
        fetchingHistory: 'Retrieving history...',
        fetchHistory: 'Load more',
        clickToRetry: 'Message not delivered. Click to retry.',
        tapToRetry: 'Message not delivered. Tap to retry.',
        locationSendingFailed: 'Could not send location',
        locationServicesDenied: 'This website cannot access your location. Please enter your location instead.',
        locationNotSupported: 'This website cannot access your location. Allow access in your settings or enter your location instead.',
        locationSecurityRestriction: 'Your browser does not support location services or it’s been disabled. Please enter your location instead.'
    }
});