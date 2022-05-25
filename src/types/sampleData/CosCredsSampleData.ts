export const mockEnvironmentVars = {
  "cloud-object-storage": [
    {
      "instance_name": "MOCK_COS",
      "credentials": {
        "apikey": "mockapikey",
        "cos_hmac_keys": {
          "access_key_id": "mockaccesskeyid",
          "secret_access_key": "mocksecretaccesskey"
        },
        "endpoints": "mockendpoint",
        "iam_apikey_description": "mockapikeydescription",
        "iam_apikey_name": "mockapikeyname",
        "iam_role_crn": "mockiamrole",
        "iam_serviceid_crn": "mockserviceidcrn",
        "resource_instance_id": "mockresourceinstanceid"
      }
    }
  ]
      }

export const mockEnvironmentVarsTrailingSpaces = {
  "cloud-object-storage": [
    {
      "instance_name": "MOCK_COS",
      "credentials": {
        "apikey": "mockapikey ",
        "cos_hmac_keys": {
          "access_key_id": "mockaccesskeyid ",
          "secret_access_key": "mocksecretaccesskey "
        },
        "endpoints": "mockendpoint ",
        "iam_apikey_description": "mockapikeydescription ",
        "iam_apikey_name": "mockapikeyname ",
        "iam_role_crn": "mockiamrole ",
        "iam_serviceid_crn": "mockserviceidcrn ",
        "resource_instance_id": "mockresourceinstanceid "
      }
    }
  ]
      }


export const mockEnvironmentVarsMissing = {
        "cloud-object-storage": [
        ]
            }