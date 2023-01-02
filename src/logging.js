const nullFunction = (...log) => log;
const writeLog = (write) => {
  const params = new URLSearchParams(window.location.search);
  return (import.meta.env.MODE !== "production" || params.has("logging")) &&
    typeof write === "function"
    ? write
    : nullFunction;
};

export const logging = writeLog(console.log);
export const loggingInfo = writeLog(console.info);
export const loggingTable = writeLog(console.table);
