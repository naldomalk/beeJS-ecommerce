uiPages = {
    index : {
      routeView : '/',
      includes: {},
      methods: {},
      created: function(){},
      template : function(){
          return ''
            + $include('uiTemplate.header')   
            + $include('uiTemplate.banners')  
            + $include('products.catalog')      
            + $include('uiTemplate.footer')     
      }
    },
    category : {
      routeView : '/category/:IDCategory',
      includes : {},
      methods : {},
      created : function(){},
      template : function(){
        return ''
            + $include('uiTemplate.header')   
            + $include('products.catalog', { IDCategory: req.params.IDCategory })      
            + $include('uiTemplate.footer')    
      } 
    },
    search : {
      routeView : '/search/:search/:sort',
      includes : {},
      methods : {},
      created : function(){},
      template : function(){
        return ''
            + $include('uiTemplate.header')   
            + $include('products.catalog', { search: req.params.search, sort: req.params.search })      
            + $include('uiTemplate.footer')    
      } 
    },
    product : {
      routeView : '/product/:IDProduct',
      includes : {},
      methods : {
        init: function(req, res) {
          (!res)
            ? $axios("GET", "/product/"+req.params.IDProduct, {target: this.init, loading : "isLoading"})
            : (dataProduct = res, isLoading = false)
        }
      },
      created : function(){ init() },
      template : function(){
        return ''
            + $include('uiTemplate.header')   
            + $include('products.product', { IDProduct: req.params.IDProduct })      
            + $include('uiTemplate.footer')    
      } 
    },
    cart : {
      routeView : '/cart',
      includes : {},
      methods : {},
      template : function(){
        return ''
            + $include('uiTemplate.header')   
            + $include('products.cart')      
            + $include('uiTemplate.footer')    
      } 
    },
    register : {
      routeView : '/register',
      includes : {
        fields : modelView(models.clients)
      },
      methods : {},
      template : function(){
        pageTitle('register')
        return ''
            + $include('uiTemplate.header')   
            + `` //TODO    
            + $include('uiTemplate.footer')    
      } 
    },
    account : {
      routeView : '/account',
      includes : {
      },
      methods : {},
      template : function(){
        pageTitle('my acount')
        var fileds = [
          { email : {} },
          { password : { type: 'password'} },
        ]
        return ''
            + $include('uiTemplate.header')   
            + `` //TODO    
            + $include('uiTemplate.footer')    
      } 
    },
    contact : {
      routeView : '/contact',
      includes : {},
      methods : {
        send : function(){
          alert('test ok')
        }
      },
      template : function(){
        pageTitle('contact')
        var fileds = [
          { name : {} },
          { email : { label: 'e-mail'} },
          { subject : {} },
          { text : { type: 'textarea'} },
        ]
        return ''
            + $include('template.header')   
            + fields.map((field)=>`<label>${field}</label>
                <input>
              `)   
            + `<button onclick="send()">send</button>`
            + $include('uiTemplate.footer')    
      } 
    },
    about : {
      routeView : '/about',
      includes : {},
      methods : {},
      created : function(){},
      template : function(){
        pageTitle('about')
        return ''
            + $include('uiTemplate.header')   
            + `<h1>about</h1>`
            + `<p>bla bla bla bla bla bla</p>`     
            + $include('uiTemplate.footer')    
      } 
    },
    partners : {
      routeView : '/partners',
      includes : {},
      methods : {},
      created : function(){},
      template : function(){
        pageTitle('partners')
        return ''
            + $include('uiTemplate.header')   
            + `<h1>partners</h1>`
            + `<p>bla bla bla bla bla bla</p>`     
            + $include('uiTemplate.footer')    
      } 
    },
  }