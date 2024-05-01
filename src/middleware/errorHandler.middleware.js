export const ErrorHandlerMiddleware = (err, req, res, next) => {

    if (!err.status) {
        console.error("Unexpected Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return
    }
    res.status(err.status).json({ error: err.message , errrorStatus: err.status });
};
