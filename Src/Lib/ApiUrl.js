
const ApiUrl = {
  CheckNumber: 'api/auth/check-number',
  VERIFY_OTP: 'api/auth/verify-otp',

  state_list: 'api/state/list',
  CATEGORY_LIST: 'api/category/list',
  ocassion_list: 'api/plantation/occasions/list',

  PLANT_LIST_DATA: 'api/species/list',
  Species_summary: 'api/site/species-summary',

  location_list: 'api/site/list',
  all_site_list: 'api/site/sitelist',
  DISTRICT_LIST: 'api/location-data/districts',
  BLOCK_LIST: 'api/location-data/blocks',
  GP_LIST: 'api/location-data/gps',
  VILLAGE_LIST: 'api/location-data/villages',

  emission_list: 'api/carbon/emission-factors',
  electricy_list: 'api/carbon/electricity-types',
  HOME_LIST_DATA: 'api/carbon/electricity-types',
  TRANSPORT_LIST_DATA: 'api/carbon/transport-types',
  FOOD_TYPE_LIST_DATA: 'api/carbon/food-types',
  SUBMIT_CARBON: 'api/carbon/calculate',
  CARBON_RESULT: 'api/carbon/result',
  CARBON_HISTORY: 'api/carbon/history',

  TEAM_LIST: 'api/ipl/teams/list',
  MATCH_LIST: 'api/ipl/matches/list',
  Tournament: 'api/ipl/tournaments/list',
  TEAM_CHALLENGE: 'api/ipl/challenge',
  TEAM_PREPLANT_SUPPORT: 'api/ipl/teams/support',
  MATCH_SUPPORT_TREES: 'api/ipl/matches/support',
  DOT_BALL_HISTORY: 'api/ipl/history',

  PLANTATION_SUBMIT: 'api/plantation/plantations/add',
  PLANTATION_SUBMIT_OCCASION: 'api/plantation/plantations/submit/occasion',
  PLANTATION_SUBMIT_IPL_TEAM: 'api/plantation/plantations/submit/ipl-team',
  PLANTATION_SUBMIT_IPL_MATCH: 'api/plantation/plantations/submit/ipl-match',
  PLANTATION_SUBMIT_CARBON: 'api/plantation/plantations/submit/carbon',
  PLANTATION_HISTORY: 'api/plantation/plantations/history',

  GET_USER_DETAILS: 'api/profile/details',
  UPDATE_PROFILE: 'api/profile/update',
  UPDATE_IMAGE: 'api/profile/upload-image',

  CERTIFICATE_LIST: 'api/certificate/user-list',


  CERTIFICATE_DETAILS: 'api/certificate/details',
  CERTIFICATE_DOWNLOAD: 'api/certificate/download',

  CREATE_ORDER: 'api/payment/initiate',
  VERIFY_PAYMENT: 'api/payment/confirm',
  PAYMENTLIST: 'api/payment/list',
  DESHBORD_DETAILS: 'api/dashboard/getDashboard'


};

export default ApiUrl;
