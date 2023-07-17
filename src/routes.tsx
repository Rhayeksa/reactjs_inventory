import { Home } from "./pages/home";
import { Error } from "./pages/error";
import { Add as AddItem } from "./pages/item/add";
import { EditById as EditByIdItem } from "./pages/item/editById";
import { FindAll as FindAllItem } from "./pages/item/findAll";
import { FindById as FindByIdItem } from "./pages/item/findById";
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
        "page": <FindAllItem />
    },
    {
        "path": "/item/:id",
        "page": <FindByIdItem />
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