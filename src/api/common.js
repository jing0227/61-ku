import Request from "../common/request";

/**
 * common
 */
export const rankGender = data => Request.get("/ranking/gender", data);
