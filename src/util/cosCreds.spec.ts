import { mockEnvironmentVars, mockEnvironmentVarsTrailingSpaces, mockEnvironmentVarsMissing } from '../types/sampleData/CosCredsSampleData';
import { getCosCredentials } from "./cosCreds";
import { COS_URL } from "../statics";


const mockConsoleError = jest.spyOn(global.console, 'error').mockImplementation(() => {});

describe("getCosCredentials function testing", () => {
    const env = process.env

    beforeEach(() => {
        jest.resetModules()
        process.env = { ...env }
    })

    afterEach(() => {
        process.env = env
    })

    it("should return CosCredentials from env", () =>{
        process.env.VCAP_SERVICES = JSON.stringify(mockEnvironmentVars);
        let envVars = getCosCredentials();
        expect(envVars).toStrictEqual({
            endpoint: COS_URL,
            apiKeyId: mockEnvironmentVars["cloud-object-storage"][0].credentials.apikey,
            serviceInstanceId: mockEnvironmentVars["cloud-object-storage"][0].credentials.resource_instance_id,
            signatureVersion: "v4",
            accessKeyId: mockEnvironmentVars["cloud-object-storage"][0].credentials.cos_hmac_keys.access_key_id,
            secretAccessKey: mockEnvironmentVars["cloud-object-storage"][0].credentials.cos_hmac_keys.secret_access_key,
          });
    });

    it("should clean trailing spaces from CosCredentials", () => {
        process.env.VCAP_SERVICES = JSON.stringify(mockEnvironmentVarsTrailingSpaces);
        let envVars = getCosCredentials();
        expect(envVars).toStrictEqual({
            endpoint: COS_URL,
            apiKeyId: mockEnvironmentVars["cloud-object-storage"][0].credentials.apikey,
            serviceInstanceId: mockEnvironmentVars["cloud-object-storage"][0].credentials.resource_instance_id,
            signatureVersion: "v4",
            accessKeyId: mockEnvironmentVars["cloud-object-storage"][0].credentials.cos_hmac_keys.access_key_id,
            secretAccessKey: mockEnvironmentVars["cloud-object-storage"][0].credentials.cos_hmac_keys.secret_access_key,
          });
    })

    it("should call console error if env vars are missing", () => {
        process.env.VCAP_SERVICES = JSON.stringify(mockEnvironmentVarsMissing)

        getCosCredentials();

        expect(mockConsoleError).toHaveBeenCalledTimes(1)
    });
})

