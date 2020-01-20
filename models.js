models = {
    hierarchies: {
      table: "hierarchies",
      fieldKey: "IDHierarchy",
      schema: {
        IDHierarchy: { type: "guid" },
        Hierarchy: { type: "text" },
        Active: { type: "boolean" }
      }
    },
    users: {
      table: "users",
      fieldKey: "IDUser",
      schema: {
        IDUser: { out: "IDUser",type: "guid" },
        Email: { type: "text", length: 0.20, notNull: true, frontEnd: { class: "required", label: "e-mail" } },
        Password: { type: "password", length:0.20, notNull: true, backEnd: true, frontEnd: { class: "required" } },
        Active: { type: "boolean" }
      }
    },
    users_profiles:{
      table: "users_profiles",
      fieldKey: "IDUser_Profile",
      schema:{
        IDUser_Profile: { type: "guid" },
        User_Profile: { type: "text", length: 0.20 },
        Active: { type: "boolean" }
      },
      foreignKeys: {
        IDUser_Profile: { table: "users", key: "IDUser_Profile", onUpdate: 'cascate', onDelete: 'block' } 
      }
    },
    users_sessions:{
      table: "users_sessions",
      schema:{
        IDUser_User: { type: "guid" },
        IP: { type: "text", length: 0.15 },
        Token: { type: "text", length: 64 },
        DateTime: { type: "dateTime" }
      },
      foreignKeys: {
        IDUser_Profile: { table: "users", key: "IDUser_Profile", onUpdate: 'cascate', onDelete: 'block' } 
      }
    },
    products: {
      table: "products",
      fieldKey: "IDProduct",
      schema: {
        IDProduct: { type: "guid" },
        Product: { type: "text", length: 0.255, notNull: true, frontEnd: { class: "required" } },
        SKU: { type: "text", length: 0.25, notNull: true, frontEnd: { class: "required" } },
        EAN: { type: "text", length: 13, frontEnd: { class: "required" }, onlyNumbers: true },
        Description: { type: "textarea", length: 0.8000, frontEnd: { class: "" } },
        IDCategory: { type: "guid", notNull: true, frontEnd: { class:"required" } },
        Active: { type: "boolean" }
      }
    },
    products_supplies: {
      table: "products_supplies",
      fieldKey: "IDProduct_Supply",
      schema: {
        IDProduct_Supply: { type: "guid" },
        IDProduct: { type: "guid" },
        Product: { type: "text", length: 0.255, notNull: true, frontEnd: { class: "required" } },
        SKU: { type: "text", length: 0.25, notNull: true, frontEnd: { class: "required" } },
        EAN: { type: "text", length: 13, frontEnd: { class: "required" }, onlyNumbers: true },
        Description: { type: "textarea", length: 0.8000, frontEnd: { class: "" } },
        IDCategory: { type: "guid", notNull: true, frontEnd: { class:"required" } },
        Active: { type: "boolean" }
      },
      foreignKeys: {
        IDProduct: { table: "products", key: "IDProduct", onUpdate: '', onDelete: '' } 
      }
    },  
    supplies : {
      table: "supplies",
      fieldKey: "IDSupply",
      schema: {
        IDSupply: { type: "guid" },
        Supply: { type: "text", notNull: true, frontEnd: { class:"required" } },
        Active: { type: "boolean" }
      }
    },
    clients: {
      table: "clients",
      fieldKey: "IDClient",
      schema: {
        IDClient: { type: "guid", notNull: true },
        Client: { type: "text", notNull: true },
        Client_Full_Name: { type: "text", length: 0.255, notNull: true },
        Code: { type: "text", length: 0.25 },
        Active: { type: "boolean" }
      }
    },
    clients_accounts : { },
    clients_contacts : { },
    clients_documents : { },
    clients_address : { },
    orders: { },
    orders_status: { },
    orders_products: { },
    orders_deliveries: { },
    types_clients: {},
    types_channels: {},
    types_hierarchies: {}
  }