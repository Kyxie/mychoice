from rest_framework.response import Response

def success(data=None, message="Success", code=0):
    return Response({
        "code": code,
        "message": message,
        "data": data
    })

def error(message="Error", code=1, status=400, errors=None):
    res = {
        "code": code,
        "message": message,
        "data": None
    }
    if errors:
        res["errors"] = errors
    return Response(res, status=status)