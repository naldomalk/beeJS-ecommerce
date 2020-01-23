models = {
    hierarchies: {
      table: "hierarchies",
      fieldKey: "IDHierarchy",
      schema: {
        IDHierarchy: { type: "guid" },
        Hierarchy: { type: "text" },
        IDType_Hierarchy: { type: int, notNull: true },
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
    clients_accounts : {
      table: "clients_accounts",
      fieldKey: "IDClient_Account",
      schema: {
        IDClient_Account: { type: "guid", notNull: true },
        IDClient: { type: "guid", notNull: true },
        Account: { type: "text", notNull: true },
        IDBank: { type: "int", length: 0.255, notNull: true },
        IBAN: { type: "text", length: 0.25 },
        Active: { type: "boolean" }
      }
    },
    clients_address : {
      table: "clients_address",
      fieldKey: "IDClient_Address",
      schema: {
        IDClient_Address: { type: "guid", notNull: true },
        IDClient: { type: "guid", notNull: true },
        Address: { type: "text", notNull: true },
        Postal_Code: { type: "text", notNull: true },
        Complement: { type: "text" },
        Active: { type: "boolean" }
      }     
    },
    clients_contacts : {
      table: "clients_contacs",
      fieldKey: "IDClient_Contact",
      schema: {
        IDClient_Contact: { type: "guid", notNull: true },
        IDClient: { type: "guid", notNull: true },
        Contact: { type: "text", notNull: true },
        Contact_Name: { type: "text", notNull: true },
        IDType_Contact: { type: "int", notNull: true },
        Active: { type: "boolean" }
      }
    },
    clients_documents : {
      table: "clients_documents",
      fieldKey: "IDClient_Document",
      schema: {
        IDClient_Document: { type: "guid", notNull: true },
        IDClient: { type: "guid", notNull: true },
        Document: { type: "text", notNull: true },
        IDType_Document: { type: "int", notNull: true },
        Active: { type: "boolean" }
      }
    },
    orders: {
      table: "orders",
      fieldKey: "IDOrder",
      schema: {
        IDOrder: { type: "guid", notNull: true },
        IDChannel: { type: "guid", notNull: true },
        IDClient: { type: "guid", notNull: true },
        DateTime: { type: "int", notNull: true },
        Order: { type: "text", notNull: true },
        Active: { type: "boolean" }
      }
    },
    orders_status: {
      table: "orders_status",
      fieldKey: null,
      schema: {
        IDOrder: { type: "guid", notNull: true },
        Order_Status: { type: "tezt", notNull: true },
        IDUser: { type: "guid", notNull: true },
        DateTime: { type: "int", notNull: true }
      }
    },
    orders_products: {
      table: "orders_products",
      fieldKey: "IDOrder_Product",
      schema: {
        IDOrder_Product: { type: "guid", notNull: true },
        IDOrder: { type: "guid", notNull: true },
        IDProduct: { type: "guid", notNull: true },
        Qty: { type: "float", notNull: true }
      } 
    },
    orders_deliveries: {
      table: "orders_deliveries",
      fieldKey: "IDOrder_Delivery",
      schema: {
        IDOrder_Delivery: { type: "guid", notNull: true },
        IDCarrier: { type: "guid", notNull: true },
        Address: { type: "text", length:255, notNull: true },
        Postal_Code: { type: "int", length:8, notNull: true },
        Number: { type: "text", length:15 },
        Reference: { type: "text" }
      } 
    },
    carriers : {
      table: "carriers",
      fieldKey: "IDCarrier",
      schema: {
        IDCarrier: { type: "guid", notNull: true },
        Carrier: { type: "text", notNull: true },
        Website: { type: "int", length:45 },
        Tracker_Link: { type: "text", length:255 },
        Active: { type: "boolean" }
      } 
    },
    types_clients: {},
    types_clients_contacs: {},
    types_clients_documents: {},
    types_channels: {},
    types_hierarchies: {}
  } // TODO