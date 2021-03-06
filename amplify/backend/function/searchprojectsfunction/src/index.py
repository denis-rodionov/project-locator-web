import json
import boto3
from boto3.dynamodb.conditions import Key
from boto3.dynamodb.conditions import Attr

TABLE_NAME = 'pl_projects'


def handler(event, context):
    print('received event:')
    print(event)

    client = boto3.resource("dynamodb")
    table = client.Table(TABLE_NAME)
    response = table.query(
        IndexName='exclude-index',
        KeyConditionExpression=Key('exclude_from_search').eq(0),
        ScanIndexForward=False
        )
    data = response['Items']
    print('Data from DB:', data)

    response = {
        "statusCode": 200,
        "headers": {
            "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent",
            "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
            "access-control-allow-origin": "*"
        },
        "body": json.dumps(data, ensure_ascii=False, default=str)
    }
    return response