uiTemplate = {
    header : {
          template : function(){
            return `<header>
                      <div class='logo'></div>
                    </header>`
          }
    },
    footer : {
      template : function() {
         return `<footer>
                    <small>developed by Arnaldo Liberal | Lisbon 2019</small>
                 </footer>`
      }
    },
    banners : {
      bindings : {
        isLoading : false,
        banners : []
      },
      methods: {},
      created: function(){},
      template : function(){
          return ''
            + `<div class="banners"></div>` // TODO  
      }
    },
}