import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

/** Requests Android 13+ POST_NOTIFICATIONS, registers iOS for remote messages, then Firebase messaging permission. */
export async function requestNotificationPermission(): Promise<boolean> {
    try {
        if (Platform.OS === 'ios' && !messaging().isDeviceRegisteredForRemoteMessages) {
            await messaging().registerDeviceForRemoteMessages();
        }

        if (Platform.OS === 'android' && Platform.Version >= 33) {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
        }

        const authStatus = await messaging().requestPermission();

        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        return enabled;
    } catch (error) {
        const isMissingApsEntitlement =
            Platform.OS === 'ios' && String(error).includes('aps-environment');
        if (!isMissingApsEntitlement) {
            console.log('Notification permission unavailable', error);
        }
        return false;
    }
}

/** Requests fine location permission (Android) and returns final grant state. */

export async function requestLocationPermission(): Promise<boolean> {
    if (Platform.OS !== 'android') return true;

    try {
        const alreadyGranted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (alreadyGranted) {
            return true;
        }

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location Permission',
                message: 'App needs access to your location.',
                buttonPositive: 'Allow',
            }
        );

        console.log('Location Permission:', granted);

        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
        console.log('Location permission error:', error);
        return false;
    }
}
