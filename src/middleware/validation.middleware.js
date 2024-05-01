export const validation = (schema) => {
    try {
        return (req, res, next) => {
            const { error, value } = schema.validate(req.body);

            if (error) {
                return res.status(400).json({
                    status:400,
                    message: error?.message
                });
            }

            req.body = value
            next()
        };
    } catch (error) {
        console.log(error)
        next(error)
    }
};
