class HandleResponse {
    constructor(
        statusCode = 200,
        data = {},
        message = "Success!"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = true
    }
}

export default HandleResponse


// OK --> 200
// client error --> 400
// server error --> 500