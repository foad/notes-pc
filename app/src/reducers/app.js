import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_SET_TOKEN): {
            return {
                ...state,
                token: payload.token,
            }
        }

        case (AppConstants.APP_SET_API_RESPONSE): {
            console.log(payload.apiResponse)
            return {
                ...state,
                apiResponse: payload.apiResponse,
            }
        }

        default: {
            return state
        }
    }
}