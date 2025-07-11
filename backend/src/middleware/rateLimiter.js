import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip); // ← Use IP as the unique key

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later!"
      });
    }

    next(); // Proceed only if under the limit
  } catch (error) {
    console.error("Rate limit error:", error);
    next(error); // Pass error to Express error handler
  }
};

export default ratelimiter;
