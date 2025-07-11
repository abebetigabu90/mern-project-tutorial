import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 rounded-lg bg-green-950 text-white shadow-md border border-green-800">
      <div className="flex items-start gap-4 p-4">
        <div className="mt-1">
          <ZapIcon className="text-green-400 w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-semibold">Rate Limit Reached</p>
          <p className="text-sm mt-1">
            You’ve made too many requests in a short period. Please wait a moment.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;
