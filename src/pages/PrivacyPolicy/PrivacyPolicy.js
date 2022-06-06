import React, { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth",
        });
    }, []);
    return (
        <div className="extrapage px-5">
            <div className="page-header">
                <h1 className="text-center">PRIVACY POLICY</h1>
            </div>{" "}
            <p>
                PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING THE
                SERVICE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED
                HEREIN AND ALL TERMS AND CONDITIONS INCORPORATED BY REFERENCE. IF YOU DO
                NOT AGREE TO ALL OF THE TERMS AND CONDITIONS SET FORTH BELOW, YOU MAY
                NOT USE the Shank Kumar SERVICES.
            </p>{" "}
            <h3>1. Information We Collect</h3>
            <h2>Personal Information</h2>
            <p>
                Personal Information is the type of information that specifically
                identifies or contacts a person, such as your full name or email
                address. We may collect personally identification information whenever
                Users enter into our app, fill out the form, to use our services,
                features or resources present in our app.
            </p>{" "}
            <p>
                In the following circumstances, we may disclose your personal
                information according to your wish or regulations by law:
            </p>{" "}
            <div style={{ paddingLeft: "3rem", fontWeight: "600" }}>
                <ol>
                    <li>Your prior permission,</li>
                    <li>
                        By the applicable law within or outside your country of
                        residence,legal process, litigation requests,
                    </li>
                    <li>By requests from public and governmental authorities,</li>
                    <li>To protect our legal rights and interests.</li>
                </ol>
            </div>
            <h3>Non-Personal Information</h3>
            <p>
                Non-personal information is data in a form that does not permit direct
                association with any specific individual, such as your install,
                uninstall, Android ID, phone IMEI number, phone model etc.
            </p>{" "}
            <p>
                We may collect and use non-personal information in the following
                circumstances.
            </p>{" "}
            <div style={{ paddingLeft: "3rem", fontWeight: "600" }}>
                <ol>
                    <li>To have a better understanding of a user’s behaviour.</li>
                    <li>Solve problems in products and services.</li>
                    <li>Improve our products, services and advertising.</li>
                </ol>
            </div>
            <p>
                We may collect non-personal information such as the data of install,
                frequency of use, country and channel.
            </p>{" "}
            <h3>Information we get by using our services</h3>
            <p>
                We may collect information about the services that you use and how you
                use them, such as when you view and interact with our content. We may
                collect device-specific information (such as your hardware model, os
                version, and unique device identifiers). Shank Kumar will not share that
                information with third parties.
            </p>{" "}
            <h3>Location information</h3>
            <p>
                When you use a location-enabled Shank Kumar service, we may collect and
                process information about your actual location through GPS signals sent
                by a mobile device or Wifi in order to obtain your location for the
                purposes of providing our Service. We may also use various technologies
                to determine location, such as sensor data from your device that may,
                for example, provide information on nearby Wi-Fi access points and cell
                towers.
            </p>{" "}
            <h3>Unique application numbers </h3>
            <p>
                Certain services include a unique application number. This number and
                information about your installation (for example, the operating system
                type) may be sent to Loan Shank Kumar when you install or uninstall that
                service or when that service periodically contacts our servers, such as
                for automatic updates.
            </p>{" "}
            <h3>What do we use your information for?</h3>
            <p>
                Any general information we may collect from you may be used in one of
                the following ways. To personalize your experience, your information
                helps us to better respond to your individual need.
                <div style={{ paddingLeft: "3rem" }}>
                    <ol>
                        <li>To improve our app.</li>
                        <li>To provide best Services to users.</li>
                        <li>To improve customer service</li>
                    </ol>
                </div>
                <p>
                    Your information will not be made available to anyone. Your
                    information will not be sold, exchanged, transferred, or given to any
                    other third party for any reason whatsoever, without your consent.
                </p>
            </p>{" "}
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>How do we use your information?</h3>
                <div style={{ paddingLeft: "3rem" }}>
                    <ol>
                        <li>
                            <h4>ACCESS_NETWORK_STATE</h4>
                            <p>
                                Some of our applications may use this permission to access
                                information about networks. In our apps we will just give you
                                information about the network, such as whether you are connected
                                to a network or not. We don’t collect and share information to
                                others.
                            </p>
                        </li>
                        <li>
                            <h4>ACCESS_COARSE_LOCATION</h4>

                            <p>
                                Some of our applications may use this permission to access
                                approximate location derived from network location sources such
                                as cell towers and Wi-Fi. This information is untraceable. We
                                don’t collect and share location information to others.
                            </p>
                        </li>
                        <li>
                            <h4>ACCESS_FINE_LOCATION</h4>

                            <p>
                                Some of our applications may use this permission to access
                                precise location derived from network location. This information
                                is untraceable. We don’t collect and share location information
                                to others.
                            </p>
                        </li>
                        <li>
                            <h4>WRITE_EXTERNAL_STORAGE and READ_EXTERNAL_STORAGE</h4>

                            <p>
                                Some of our applications may use these permissions to access
                                Media files form USB storage. We don’t collect, store or share
                                information.
                            </p>
                        </li>
                        <li>
                            <h4>INTERNET</h4>

                            <p>
                                Some of our applications may use this permission to open network
                                sockets. In our apps we are using INTERNET permission to use the
                                internet only. We don’t collect or transfer network information.
                            </p>
                        </li>
                        <li>
                            <h4>READ_PHONE_STATE</h4>

                            <p>
                                Some of our applications may use this permission to access phone
                                state, including the phone number of the device, current
                                cellular network information, the status of any ongoing calls,
                                and a list of any phone Accounts registered on the device. We
                                don’t collect, store or share any information.
                            </p>
                        </li>
                        <li>
                            <h4>CALL_PHONE</h4>

                            <p>
                                Some of our applications may use this permission to initiate a
                                phone call without going through the Dialer to check the USSD
                                codes. We do not collect or share this information.
                            </p>
                        </li>
                        <li>
                            <h4>READ_CONTACTS</h4>

                            <p>
                                Some of our applications may use this permission to read your
                                contact information when you request. We do not collect or share
                                this information. We use this permission to announce caller name
                                or to display dialed / received calls / missed calls when you
                                request.
                            </p>
                        </li>
                        <li>
                            <h4>READ_GSERVICES</h4>

                            <p>
                                Some of our applications may use (parts of) the Google Services
                                Framework, it must declare the READ_GSERVICES permission. This
                                information is untraceable
                            </p>
                        </li>
                        <li>
                            <h4>VIBRATE</h4>

                            <p>
                                Some of our applications may use this permission to know
                                vibration state and change vibration state when user needs.
                            </p>
                        </li>
                        <li>
                            <h4>WAKE_LOCK</h4>

                            <p>
                                Some of our applications may use this permission to access Power
                                Manager Wake Locks to keep processor from sleeping or screen
                                from dimming. When user want to display digital clock on screen.
                            </p>
                        </li>
                        <li>
                            <h4>RECEIVE_BOOT_COMPLETED</h4>

                            <p>
                                Some of our applications may use this permission to allow alarm,
                                Background services etc,. After booting has been completed.
                            </p>
                        </li>
                        <li>
                            <h4>SET_ALARM</h4>

                            <p>
                                Some of our applications may use this permission to access alarm
                                from devices and sets.
                            </p>
                        </li>
                        <li>
                            <h4>SEND_SMS, READ_SMS, RECEIVE_SMS</h4>

                            <p>
                                Some of our applications may use these permissions to read, send
                                or receive SMS from device. We don’t collect, save or share your
                                messages. This is highly securable
                            </p>
                        </li>
                        <li>
                            <h4>SET_WALLPAPER</h4>

                            <p>
                                Some of our applications may use this permission to set selected
                                image as wallpaper.
                            </p>
                        </li>
                        <li>
                            <h4>SET_WALLPAPER_HINTS</h4>

                            <p>
                                Some of our applications may use this permission to adjust and
                                resize selected wallpaper size.
                            </p>
                        </li>
                        <li>
                            <h4>ACCESS_WIFI_STATE</h4>

                            <p>
                                Some of our applications may use this permission to access
                                information about Wi-Fi networks. We don’t collect or share any
                                information about Wi-Fi.
                            </p>
                        </li>
                        <li>
                            <h4>CHANGE_WIFI_STATE</h4>

                            <p>
                                Some of our applications may use this permission to change Wi-Fi
                                connectivity state (WIFI ON / WIFI OFF) when you request.
                            </p>
                        </li>
                        <li>
                            <h4>BLUETOOTH</h4>

                            <p>
                                Some of our applications may use this permission to connect the
                                paired Bluetooth devices when you request.
                            </p>
                        </li>
                        <li>
                            <h4>BLUETOOTH_ADMIN</h4>

                            <p>
                                Some of our applications may use this permission to discover and
                                pair Bluetooth devices.
                            </p>
                        </li>
                        <li>
                            <h4>BLUETOOTH_PRIVILEGED</h4>

                            <p>
                                Some of our applications may use this permission to pair
                                Bluetooth devices without user interaction, and to allow or
                                disallow phonebook access or message access. We don’t save or
                                share information.
                            </p>
                        </li>
                        <li>
                            <h4>WRITE_SECURE_SETTINGS</h4>

                            <p>
                                Some of our applications may use this permission to access
                                device secure settings. We don’t collect or share information.
                            </p>
                        </li>
                        <li>
                            <h4>WRITE_SETTINGS</h4>

                            <p>
                                Some of our applications may use this permission to switch or
                                adjust system settings such as ringtone, vibration and
                                brightness of the screen etc., when you request.
                            </p>
                        </li>
                        <li>
                            <h4>CAMERA</h4>

                            <p>
                                Some of our applications may use this permission to take photos
                                / videos and turn ON/OFF Camera Flash, when you request. We do
                                not save or upload your photos/videos.
                            </p>
                        </li>
                        <li>
                            <h4>FLASHLIGHT</h4>

                            <p>
                                Some of our applications may use this permission to turn ON/OFF
                                Camera Flash. we use this permission for taking photos,
                                flashlight on alert services or flashlight on clap services.
                            </p>
                        </li>
                        <li>
                            <h4>DISABLE_KEYGUARD</h4>

                            <p>
                                Some of our applications may use this permission to access our
                                application functionality after the screen turned off.
                            </p>
                        </li>
                        <li>
                            <h4>RECORD_AUDIO</h4>

                            <p>
                                Some of our applications may use this permission to record an
                                audio sound when you request. We don’t collect or share the
                                information.
                            </p>
                        </li>
                        <li>
                            <h4>MODIFY_AUDIO_SETTINGS</h4>

                            <p>
                                Some of our applications may use this permission to modify
                                global audio settings as your request.
                            </p>
                        </li>
                        <li>
                            <h4>BATTERY_STATS</h4>

                            <p>
                                Some of our applications may use this permission to access
                                battery information such as battery percentage, capacity etc.,
                                to display battery performance.
                            </p>
                        </li>
                        <li>
                            <h4>GET_ACCOUNTS</h4>

                            <p>
                                Some of our applications may use this permission to detect
                                whether users have a Google accounts or not, to confirm the
                                state of Google Services, provide users with particular
                                application download or update methods. We don’t share or save
                                your account information in any manner. It is highly securable.
                            </p>
                        </li>
                        <li>
                            <h4>SYSTEM_ALERT_WINDOW</h4>

                            <p>
                                Some of our applications may use this permission to create
                                windows and may show on top of other application.
                            </p>
                        </li>
                        <li>
                            <h4>READ_CALL_LOG and WRITE_CALL_LOG</h4>

                            <p>
                                Some of our applications may use these permissions to display
                                call logs from devices. We don’t collect, save or share your
                                call information. This is highly securable.
                            </p>
                        </li>
                        <li>
                            <h4>CLEAR_APP_CACHE</h4>

                            <p>
                                Some of our applications may use this permission to clear all
                                the caches from all installed applications when you request.
                            </p>
                        </li>
                        <li>
                            <h4>KILL_BACKGROUND_PROCESSES</h4>

                            <p>
                                Some of our applications may use this permission to clear all
                                the background process from your device when you request.
                            </p>
                        </li>
                        <li>
                            <h4>GET_PACKAGE_SIZE</h4>

                            <p>
                                Some of our applications may use this permission to find out the
                                space of used applications So, you can manage mobile space.
                            </p>
                        </li>
                        <li>
                            <h4>MOUNT_UNMOUNT_FILESYSTEMS</h4>

                            <p>
                                Some of our applications may use this permission to inserting
                                and removing file systems for external storage.
                            </p>
                        </li>
                        <li>
                            <h4>READ_SYNC_SETTINGS and WRITE_SYNC_SETTINGS</h4>

                            <p>
                                Some of our applications may use these permissions to allow SYNC
                                settings for battery power saving.
                            </p>
                        </li>
                        <li>
                            <h4>RESTART_PACKAGES</h4>

                            <p>
                                Some of our applications may use this permission to kill
                                Background Processes. It allows them to break other applications
                                by removing their alarms, stopping their services, etc. we use
                                these permissions to improve mobile performance when user
                                requests.
                            </p>
                        </li>
                        <li>
                            <h4>REAL_GET_TASKS, GET_TASKS</h4>

                            <p>
                                Some of our applications may use this permission to kill
                                Background Processes. It allows them to break other applications
                                by removing their alarms, stopping their services, etc. we use
                                these permissions to improve mobile performance when user
                                requests.
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>2. Ad Networks and Cross Promotion Ads</h3>
                <p>
                    We welcome the third parties ad networks for accepting advertisements
                    (banners, interstitials and video ads etc...). In our apps and games,
                    these advertisements authorized to be displayed. Advertisers may use
                    cookies and other web-tracking technologies to collect data, in case
                    that user clicks on any of these advertisements.
                </p>{" "}
                <p>
                    We promote our own games, apps and services in different types of
                    ways. That might include cross promoting one of our games or app while
                    you are playing a different game of ours.
                </p>
                <p>
                    We display ads to cross promote apps and games, developed by us. We do
                    not gather or share any of your personal identification information to
                    display our ads
                </p>
            </div>
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>3. Kids Privacy Policy</h3>
                <p>
                    This Kids Privacy Policy has to be specified to indicate you, with
                    guidance regarding our privacy policies with respect to collecting,
                    using and disclosing personal information, regarding the legal
                    guardian of a child under the age of 13 years old.
                </p>
                <p>
                    Many of our Games/Apps are intended for general audiences, and we do
                    not knowingly gather or use any Personal Information from children and
                    kids under the age of 13. When users are identified as under 13, we
                    will block such users from providing Personal Information or make sure
                    to get prior parental consent before collecting Personal Information.
                </p>
                <p>
                    If you are a parent of a child under 13 years of age and you think
                    your child has provided us with Personal Information, please contact
                    us
                </p>
                <p>
                    We offers mobile applications and games (Kids Apps), which are
                    targeted to children under the age of 13 and also other apps are not
                    targeted under the age of 13.{" "}
                </p>
                <p>
                    If you have additional questions about our Privacy Practices related
                    to children under the age of 13, please contact us.
                </p>
            </div>
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>4. Content Sharing</h3>
                <p>
                    You understand and agree that all Content that you have to be sent
                    using our Services (For example data, sound, photographs, graphics or
                    video), whether publicly posted or privately sent, is the sole
                    responsibility of the person that sent the Content. This means that
                    you, not us, are entirely responsible for all Content that you may
                    upload, communicate, transmit or otherwise make available through our
                    Services.
                </p>
            </div>
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>5. Safeguards</h3>
                <p>
                    We store Personal information collected by us in secure operating
                    environments that are not obtainable to the public and that are only
                    accessible by authorized employees. We should also provide security
                    measures in place to protect the loss, misuse, and alteration of the
                    information under our control.
                </p>
            </div>
            <div
                style={{
                    paddingTop: "2rem",
                }}
            >
                <h3>6. Changes to our Privacy Policy</h3>
                <p>
                    Shank Kumar may, in its sole discretion, modify or update this Privacy
                    Policy from time to time, and so you should review this page
                    periodically. When we change the policy, we will update the ‘last
                    modified’ date at the top of this page.
                </p>
                <p>
                    In case you have any questions, concerns, or complaints regarding the
                    processing of your Personal Information or this Privacy Policy you may
                    write us on{" "}
                    <a rel="noopener noreferrer" href="mailTo:support@heita.app">
                        support@heita.app
                    </a>{" "}
                    We are committed to answer your questions within the reasonable time
                    limit. Any delay in the resolution time shall be proactively
                    communicated to you.
                </p>{" "}
                <p>
                    <strong>Thank You</strong>
                </p>{" "}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
