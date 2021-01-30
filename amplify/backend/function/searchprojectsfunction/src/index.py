import json

def handler(event, context):
  print('received event:')
  print(event)
  response = {
        "statusCode": 200,
        "headers": {
          "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent",
          "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
          "access-control-allow-origin": "*"
          },
        "body": json.dumps({
            "message": "This is the message in a JSON object."
        })
    }
  return response