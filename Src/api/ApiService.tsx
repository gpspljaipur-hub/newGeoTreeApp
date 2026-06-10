
import { Get_Api, } from "../redux/userapi/Requests";
import ApiUrl from "../Lib/ApiUrl";
import { setState } from '../redux/Reducers/Stateslice';
import { setLocation } from "../redux/Reducers/locationSlice";
import { setOcassion } from "../redux/Reducers/ocassionSlice";
import { setElectricy } from "../redux/Reducers/electrictySlice";
import { setHomeList } from "../redux/Reducers/homeListSlice";
import { setTransport } from "../redux/Reducers/transportSlice";
import { setFoodType } from "../redux/Reducers/foodTypeSlice";
import { setCategory } from "../redux/Reducers/categorySlice";
import { setTournament } from "../redux/Reducers/tournamentSlice";
import { setEmissionFactors, setEmissionValues } from "../redux/Reducers/emissionFactorsSlice";
import { setCarbonResult } from "../redux/Reducers/CarbonPlantaionSlice";



export const stateData = async (dispatch: any) => {
    try {
        const response: any = await Get_Api(ApiUrl.state_list, { page: '1', limit: "28" })();
        console.log('stateData', response?.data)
        dispatch(setState(response?.data || []));
    } catch (error) {
    }
};
export const locationData = async (dispatch: any, state_id: any) => {
    try {
        let Satatedata = {
            state_id: state_id,
        }
        const response: any = await Get_Api(ApiUrl.location_list, Satatedata)();
        dispatch(setLocation(response?.data?.data || []));

    } catch (error) {
    }
};

export const plantationData = async (dispatch: any, User_id: any) => {
    try {
        let Satatedata = {
            user_id: User_id,
        }
        const response: any = await Get_Api(ApiUrl.CARBON_RESULT, Satatedata)();
        dispatch(setCarbonResult(response?.data || response?.data));

    } catch (error) {
    }
};
export const ocassionData = async (dispatch: any) => {
    try {

        const response: any = await Get_Api(ApiUrl.ocassion_list)();
        dispatch(setOcassion(response?.data || []));
    } catch (error) {

    }
};



export const emissionList = async (dispatch: any) => {
    try {
        const response: any = await dispatch(Get_Api(ApiUrl.emission_list));
        dispatch(setEmissionFactors(response?.data || []));
        console.log('response?.data', response?.data)
        // const mappedData = response?.data?.map((item: any) => {
        //     return item.value === 'veganss' ? 'vegan' : item.value;
        // });
        // dispatch(setEmissionValues(mappedData || []));

    } catch (error) {
    }
};



export const transportListData = async (dispatch: any) => {
    try {
        const response: any = await Get_Api(ApiUrl.TRANSPORT_LIST_DATA)();
        dispatch(setTransport(response?.data));
    } catch (error) {

    }
};



export const categoryData = async (dispatch: any) => {
    try {
        const response: any = await Get_Api(ApiUrl.CATEGORY_LIST)();
        console.log('category response', response)
        dispatch(setCategory(response?.data));
    } catch (error) {

    }
};

export const tournamentData = async (dispatch: any) => {
    try {
        const response: any = await Get_Api(ApiUrl.Tournament)();
        dispatch(setTournament(response?.data));
    } catch (error) {

    }
};


