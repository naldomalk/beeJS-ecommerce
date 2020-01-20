routes = {
    GET: {
        "/": frontEnd(),
        "/explorer": (req) => page(explorer),
        "/hierarchies": (req) => middleWare(controllers.hierarchies.getMany, req),
        "/products": (req) => middleWare(controllers.products.getMany, req),
        "/products/:IDProduct": (req) => middleWare(controllers.products.getOne, req),
        "/categories": (req) => middleWare(controllers.categories.getMany, req),
        "/clients": (req) => middleWare(controllers.clients.getMany, req),
        "/clients/:IDClient": (req) => middleWare(controllers.clients.getOne, req),
        "/orders": (req) => middleWare(controllers.orders.getMany, req),
        "/orders/:IDOrder": (req) => middleWare(controllers.orders.getOne, req),
    },
    POST: {
        "/hierarchies": (req) => middleWare(constrollers.clients.save, req),
        "/supplies": (req) => middleWare(constrollers.supplies.save, req),
        "/products": (req) => middleWare(constrollers.products.save, req),
        "/categories": (req) => middleWare(constrollers.categories.save, req),
        "/clients": (req) => middleWare(constrollers.clients.save, req),
        "/orders": (req) => middleWare(constrollers.orders.save, req),
        "/orders/events:IDOrder": (req) => middleWare(constrollers.orders_events.save, req),
    },
    PUT: {
        "/hierarchies/:IDHierachy": (req) => middleWare(constrollers.hierarchies.save, req), 
        "/supplies/:IDSupply": (req) => middleWare(constrollers.supplies.save, req),
        "/products/:IDProduct": (req) => middleWare(constrollers.product.save, req),
        "/categories/:IDCategory": (req) => middleWare(constrollers.categories.save, req),
        "/clients/:IDCLient": (req) => middleWare(constrollers.clients.save, req),
        "/orders/:IDOrder": (req) => middleWare(constrollers.orders.save, req),
    },
    DELETE: {
        "/hierarchies/:IDHierachy": (req) => middleWare(constrollers.hierarchies.delete, req), 
        "/supplies/:IDSupply": (req) => middleWare(constrollers.supplies.delete, req),
        "/products/:IDProduct": (req) => middleWare(constrollers.product.delete, req),
        "/categories/:IDCategory": (req) => middleWare(constrollers.categories.delete, req),
        "/clients/:IDCLient": (req) => middleWare(constrollers.clients.delete, req),
    }
}