class HandleError {
    constructor(
        statusCode = 404,
        message = "Something went wrong!"
    ){
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.data = null
    }
}

export default HandleError

// Server side ---> 500
// Client Side --> 400