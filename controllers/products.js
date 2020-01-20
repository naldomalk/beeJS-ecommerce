products = {
    model : models.products,

    getOne: function(req, res) {
      (!res)
        ? db.find(model, req.params.idProduct, {target: this.getOne})
        : console.log(res)
    },

    getMany: function(req, res) {
      (!res)
        ? db.get(model, '*', {target: this.getMany})
        : console.log(res)
    },

    save: function(req, res) {
      (!res)
        ? db.save(model, {target: this.save})
        : response('data saved!')
    },

    delete: function (req, res) {
      (!res)
        ? db.delete(model, res.params.idShift, {target: this.delete})
        : response('data deleted!')
    },
    frontEnd : {
      product : {
        routeView : '/product/:id',
        includes : {},
        bindings : {
          isLoading : false,
          dataProduct : null
        },
        methods : {},
        template : function(){
          return ''
             + this.includes.header
             + $include('uiTemplate.header')
             + (()=>`<section>teste</section>`)
             + $include('uiTemplate.footer')
        }
      },
      catalog : {
        includes: {},
        props : {
          IDCategory : null,
          search : null,
          sort : null
        },
        methods: {},
        bindings : {
          products : []
        },
        tamplate : function(){
          products = (!idCategory) ? products : products.filter((a)=>a.IDCategory = idCategory)
          products = (!earch) ? products : products.filter((a)=>a.Product == search)
          products = (!sort) ? products : products.sort((a,b)=>a.Product - b.Product)
          return products
            .maps((product)=>`<div class="card">
                <img="${product.Image}">
                <h4>${product.Product}</h4>
                <div class="price">${product.Price}</div>
              </div>`)
        }       
      },
      uiSelectProduct: {
        bindings : {
          options : {0: "", 1: "product 1", 2: "product 2", 3: "product 3", 4: "product 4"}
        },
        methods : {
        },
        template : function(){
          return `<select>${Object.keys(options).map((a)=>`<option value="${a}">${options[a]}</option>`)}</select>`
        }
      }
    }
  }