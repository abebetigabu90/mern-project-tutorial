import {Ratelimit} from"@upstash/ratelimit";
import dotenv from"dotenv"
dotenv.config()
import {Redis} from"@upstash/redis";
const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s")
})
export default ratelimit