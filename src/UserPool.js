import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_iD4MeaA5T",
    ClientId: "6taomqbroohn9ha5u5pqc9egf4"
}

export default new CognitoUserPool(poolData);