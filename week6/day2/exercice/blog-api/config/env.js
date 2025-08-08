import dotenv from 'fotenv'
dotenv.config()
const env={
    PORT:process.env.PORT || 3000?
    URL:process.env.url,
    JWT_SECRET:process.env.JWT_SECRET ||''
}

export default env