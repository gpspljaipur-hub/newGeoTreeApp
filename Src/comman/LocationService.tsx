import Geolocations from '@react-native-community/geolocation';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { setSelectedStateName } from '../redux/Reducers/selectedValueSlice';
import { requestLocationPermission } from './requestNotificationPermission';

export const getFcmToken = async (): Promise<string> => {
    try {
        if (Platform.OS === 'ios') await messaging().registerDeviceForRemoteMessages();
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (!enabled) return '';
        return await messaging().getToken();
    } catch (error) {
        const isMissingApsEntitlement = Platform.OS === 'ios' && `${error}`.includes('aps-environment');
        if (!isMissingApsEntitlement) console.log('FCM token unavailable', error);
        return '';
    }
};


export async function setStateFromCurrentLocation(dispatch: any): Promise<void> {
    const hasPermission = await requestLocationPermission();
    console.log('hasPermission', hasPermission)
    if (!hasPermission) {
        console.log('Location permission denied');
        return;
    }

    // Attempt high accuracy location (GPS) first
    Geolocations.getCurrentPosition(
        position => {
            console.log('Location success (High Accuracy):', position.coords);
            getStateFromLocation(position.coords.latitude, position.coords.longitude, dispatch);
        },
        error => {
            console.log('High accuracy location failed, trying low accuracy...', error);
            // Fallback to low accuracy (uses network provider, which works instantly indoors/emulators)
            Geolocations.getCurrentPosition(
                position => {
                    console.log('Location success (Low Accuracy):', position.coords);
                    getStateFromLocation(position.coords.latitude, position.coords.longitude, dispatch);
                },
                lowAccError => {
                    console.log('Location failed (Low Accuracy):', lowAccError);
                },
                { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
            );
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 10000,
        }
    );
}

async function getStateFromLocation(lat: number, lng: number, dispatch: any): Promise<void> {
    console.log('lat lng', lat, lng)
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, { headers: { 'User-Agent': 'geotree/1.0' } });
        const data = await response.json();
        const state = data?.address?.state;
        console.log('state Name', state)
        if (state) dispatch(setSelectedStateName(state));
    } catch (error) { }
}
