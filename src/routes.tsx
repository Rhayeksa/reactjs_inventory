import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Add as AddItem } from "./pages/item/add";
import { EditById as EditByIdItem } from "./pages/item/editById";
import { List as ListItem } from "./pages/item/list";
import { Detail as DetailItem } from "./pages/item/detail";
import { RemoveById as RemoveByIdItem } from "./pages/item/removeById";

const routes = [
    {
        "path": "/",
        "page": <Home />
    },
    {
        "path": "*",
        "page": <Error />
    },
    {
        "path": "/item",
        "page": <ListItem />
    },
    {
        "path": "/item/:id",
        "page": <DetailItem />
    },
    {
        "path": "/item/add",
        "page": <AddItem />
    },
    {
        "path": "/item/remove/:id",
        "page": <RemoveByIdItem />
    },
    {
        "path": "/item/edit/:id",
        "page": <EditByIdItem />
    },
]

export { routes };