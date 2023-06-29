import handleError from "./handleError.middleware";
import validateBody from "./validateBody.middleware";
import verifyName from "./verifyName.middleware";
import verifyIdExists from "./verifyIdExists.middleware";
import pagination from "./pagination.middleware";

export default {
    handleError,
    validateBody,
    verifyName,
    verifyIdExists,
    pagination,
};