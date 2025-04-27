class HandleError{
    constructor(
        statusCode = 404,
        message = "Something went wrong!"
    ){
        this.statusCode = statusCode
        this.message = message
        this.data = {},
        this.success = false
    }
}

export default HandleError