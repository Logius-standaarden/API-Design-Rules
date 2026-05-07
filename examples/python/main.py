from fastapi import FastAPI, Response
from pydantic import BaseModel, Field
from fastapi.responses import JSONResponse

app = FastAPI(
    openapi_url="/v1/openapi.json",
    title="Example API",
    version="1.0.0",
    description="Voorbeeldproject",
    contact={
        "name": "API Team",
        "url": "https://example.com/support",
        "email": "support@example.com"
    },
    servers=[
        {"url": "https://api.example.com/v1"}
    ]
)

app.openapi_tags = [
    {
        "name": "Items",
        "description": "Operations related to items"
    }
]

class Item(BaseModel):
    id: int = Field(..., description="Unique identifier of the item")
    name: str = Field(..., description="Name of the item")

@app.get("/v1/items", response_model=Item, description="Ophalen van een resource", tags=["Items"], responses={
    200: {
        "description": "Successful Response",
        "headers": {
            "API-Version": {
                "description": "The version of the API",
                "schema": {"type": "string", "example": "1.0.0"}
            }
        }
    },
    500: {
        "description": "Server error",
        "content": {
            "application/problem+json": {
                "example": {
                    "type": "https://example.com/probs/server",
                    "title": "Internal Server Error",
                    "status": 500,
                    "detail": "Something went wrong",
                    "instance": "/v1/items"
                }
            }
        }
    }
})
def get_item(response: Response):
    response.headers["API-Version"] = "1.0.0"
    return Item(id=1, name="Example")
