import os

from fastapi import FastAPI

app = FastAPI()

class ApiEndpoints:
    def __init__(self):

        @app.get("/")
        async def read_root():
            return {"API": "V1"}

server = ApiEndpoints()