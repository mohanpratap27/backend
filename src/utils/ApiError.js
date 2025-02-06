class ApiError extends Error{
    constructor(
        statusCode,
        messag = "somethings want wrong",
        errors=[],
        statck=""

    ){
        super(messag)
        this.statusCode=  statusCode
        this.data = null
        this.message =this.message
        this.success = false;
        this.errors = errors

        if (statck){
            this.stack =statck
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}


export {ApiError}